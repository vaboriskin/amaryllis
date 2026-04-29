import bcrypt from 'bcryptjs'
import { PrismaClient } from '@prisma/client'
import { SERVICE_CATEGORIES } from '../src/constants/serviceIds'

const prisma = new PrismaClient()

async function main() {
  const adminEmail = process.env.ADMIN_BOOTSTRAP_EMAIL
  const adminPassword = process.env.ADMIN_BOOTSTRAP_PASSWORD

  if (!adminEmail || !adminPassword) {
    throw new Error('ADMIN_BOOTSTRAP_EMAIL and ADMIN_BOOTSTRAP_PASSWORD are required for seed')
  }

  const passwordHash = await bcrypt.hash(adminPassword, 10)
  const admin = await prisma.adminUser.upsert({
    where: { email: adminEmail },
    update: { passwordHash },
    create: {
      email: adminEmail,
      passwordHash,
      role: 'admin',
    },
  })

  for (const category of SERVICE_CATEGORIES) {
    const existing = await prisma.serviceItem.findFirst({
      where: { categoryId: category.id },
      select: { id: true },
    })
    if (existing) {
      continue
    }

    await prisma.serviceItem.create({
      data: {
        categoryId: category.id,
        name: `${category.name} (базовая услуга)`,
        price: '0.00',
        currency: 'RUB',
        isActive: false,
        sortOrder: 0,
        updatedBy: admin.id,
      },
    })
  }
}

main()
  .then(async () => {
    await prisma.$disconnect()
  })
  .catch(async (error) => {
    console.error(error)
    await prisma.$disconnect()
    process.exit(1)
  })
