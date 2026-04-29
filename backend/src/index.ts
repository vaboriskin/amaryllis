import express, { Express, NextFunction, Request, Response } from 'express'
import cors from 'cors'
import dotenv from 'dotenv'
import nodemailer from 'nodemailer'
import bcrypt from 'bcryptjs'
import jwt from 'jsonwebtoken'
import { PrismaClient } from '@prisma/client'
import { z } from 'zod'
import { SERVICE_ID_SET } from './constants/serviceIds'

dotenv.config()

const app: Express = express()
const PORT = process.env.PORT || 5000
const prisma = new PrismaClient()
const JWT_SECRET = process.env.JWT_SECRET || 'change-me'

// Middleware
app.use(cors())
app.use(express.json())
app.use(express.urlencoded({ extended: true }))

// Email transporter
const transporter = nodemailer.createTransport({
  host: process.env.EMAIL_HOST,
  port: parseInt(process.env.EMAIL_PORT || '465', 10),
  secure: true,
  auth: {
    user: process.env.EMAIL_USER,
    pass: process.env.EMAIL_PASS,
  },
})

const loginSchema = z.object({
  email: z.string().email(),
  password: z.string().min(8),
})

const createItemSchema = z.object({
  categoryId: z.string().min(1),
  name: z.string().min(1).max(200),
  price: z.number().finite().nonnegative(),
  currency: z.string().min(3).max(3).default('RUB').optional(),
  isActive: z.boolean().default(true),
  sortOrder: z.number().int().min(0).default(0).optional(),
})

const updateItemSchema = z.object({
  name: z.string().min(1).max(200),
  price: z.number().finite().nonnegative(),
  currency: z.string().min(3).max(3).default('RUB').optional(),
  isActive: z.boolean().default(true),
  sortOrder: z.number().int().min(0).default(0).optional(),
})

type PublicServiceItem = {
  id: string
  categoryId: string
  name: string
  price: { toString(): string }
  currency: string
  sortOrder: number
  updatedAt: Date
}

type AdminServiceItem = PublicServiceItem & {
  isActive: boolean
}

interface AuthRequest extends Request {
  adminId?: string
}

const authMiddleware = (req: AuthRequest, res: Response, next: NextFunction) => {
  const authHeader = req.headers.authorization
  if (!authHeader?.startsWith('Bearer ')) {
    return res.status(401).json({ error: 'Unauthorized' })
  }

  const token = authHeader.slice('Bearer '.length)
  try {
    const decoded = jwt.verify(token, JWT_SECRET) as { sub: string }
    req.adminId = decoded.sub
    return next()
  } catch (_error) {
    return res.status(401).json({ error: 'Invalid token' })
  }
}

// Routes
app.get('/api/health', (_req: Request, res: Response) => {
  res.json({ status: 'ok', message: 'Server is running' })
})

app.get('/api/service-items/:categoryId', async (req: Request, res: Response) => {
  try {
    const { categoryId } = req.params
    if (!SERVICE_ID_SET.has(categoryId)) {
      return res.status(400).json({ error: 'Unknown categoryId' })
    }

    const items = await prisma.serviceItem.findMany({
      where: { categoryId, isActive: true },
      select: {
        id: true,
        categoryId: true,
        name: true,
        price: true,
        currency: true,
        sortOrder: true,
        updatedAt: true,
      },
      orderBy: [{ sortOrder: 'asc' }, { updatedAt: 'desc' }],
    })

    return res.json(
      items.map((item: PublicServiceItem) => ({
        ...item,
        price: Number(item.price),
      })),
    )
  } catch (error) {
    console.error('Failed to fetch service items:', error)
    return res.status(500).json({ error: 'Failed to fetch service items' })
  }
})

app.post('/api/admin/login', async (req: Request, res: Response) => {
  try {
    const parsed = loginSchema.safeParse(req.body)
    if (!parsed.success) {
      return res.status(400).json({ error: 'Invalid request body' })
    }

    const { email, password } = parsed.data
    const admin = await prisma.adminUser.findUnique({
      where: { email },
    })

    if (!admin) {
      return res.status(401).json({ error: 'Invalid credentials' })
    }

    const validPassword = await bcrypt.compare(password, admin.passwordHash)
    if (!validPassword) {
      return res.status(401).json({ error: 'Invalid credentials' })
    }

    const token = jwt.sign({ sub: admin.id, role: admin.role }, JWT_SECRET, {
      expiresIn: '12h',
    })

    return res.json({
      token,
      admin: {
        id: admin.id,
        email: admin.email,
        role: admin.role,
      },
    })
  } catch (error) {
    console.error('Admin login failed:', error)
    return res.status(500).json({ error: 'Failed to login' })
  }
})

app.get('/api/admin/service-items', authMiddleware, async (_req: AuthRequest, res: Response) => {
  try {
    const items = await prisma.serviceItem.findMany({
      select: {
        id: true,
        categoryId: true,
        name: true,
        price: true,
        currency: true,
        isActive: true,
        sortOrder: true,
        updatedAt: true,
      },
      orderBy: [{ categoryId: 'asc' }, { sortOrder: 'asc' }, { updatedAt: 'desc' }],
    })

    return res.json(items.map((item: AdminServiceItem) => ({ ...item, price: Number(item.price) })))
  } catch (error) {
    console.error('Failed to fetch admin service items:', error)
    return res.status(500).json({ error: 'Failed to fetch service items' })
  }
})

app.post('/api/admin/service-items', authMiddleware, async (req: AuthRequest, res: Response) => {
  try {
    const parsed = createItemSchema.safeParse(req.body)
    if (!parsed.success) {
      return res.status(400).json({ error: 'Invalid request body' })
    }

    const { categoryId, name, price, currency, isActive, sortOrder } = parsed.data
    if (!SERVICE_ID_SET.has(categoryId)) {
      return res.status(400).json({ error: 'Unknown categoryId' })
    }

    const saved = await prisma.serviceItem.create({
      data: {
        categoryId,
        name,
        price,
        currency: (currency || 'RUB').toUpperCase(),
        isActive,
        sortOrder: sortOrder ?? 0,
        updatedBy: req.adminId,
      },
    })

    return res.status(201).json({
      ...saved,
      price: Number(saved.price),
    })
  } catch (error) {
    console.error('Failed to create service item:', error)
    return res.status(500).json({ error: 'Failed to create service item' })
  }
})

app.put('/api/admin/service-items/:id', authMiddleware, async (req: AuthRequest, res: Response) => {
  try {
    const { id } = req.params
    const parsed = updateItemSchema.safeParse(req.body)
    if (!parsed.success) {
      return res.status(400).json({ error: 'Invalid request body' })
    }

    const { name, price, currency, isActive, sortOrder } = parsed.data
    const saved = await prisma.serviceItem.update({
      where: { id },
      data: {
        name,
        price,
        currency: (currency || 'RUB').toUpperCase(),
        isActive,
        sortOrder: sortOrder ?? 0,
        updatedBy: req.adminId,
      },
    })

    return res.json({
      ...saved,
      price: Number(saved.price),
    })
  } catch (error) {
    console.error('Failed to update service item:', error)
    return res.status(500).json({ error: 'Failed to update service item' })
  }
})

app.delete('/api/admin/service-items/:id', authMiddleware, async (req: AuthRequest, res: Response) => {
  try {
    const { id } = req.params
    await prisma.serviceItem.update({
      where: { id },
      data: {
        isActive: false,
        updatedBy: req.adminId,
      },
    })
    return res.status(204).send()
  } catch (error) {
    console.error('Failed to deactivate service item:', error)
    return res.status(500).json({ error: 'Failed to delete service item' })
  }
})

app.post('/api/appointments', async (req: Request, res: Response) => {
  try {
    const { name, phone, time } = req.body

    if (!name || !phone) {
      return res.status(400).json({ error: 'Name and phone are required' })
    }

    // Send email
    const mailOptions = {
      from: process.env.EMAIL_USER,
      to: process.env.EMAIL_TO,
      subject: 'Новая заявка на прием',
      html: `
        <h2>Новая заявка на прием</h2>
        <p><strong>Имя:</strong> ${name}</p>
        <p><strong>Телефон:</strong> ${phone}</p>
        <p><strong>Удобное время для звонка:</strong> ${time || 'Не указано'}</p>
      `,
    }

    await transporter.sendMail(mailOptions)

    return res.json({ message: 'Appointment request sent successfully' })
  } catch (error) {
    console.error('Error sending email:', error)
    return res.status(500).json({ error: 'Failed to send appointment request' })
  }
})

// Start server
app.listen(PORT, () => {
  console.log(`🚀 Server is running on http://localhost:${PORT}`)
})

