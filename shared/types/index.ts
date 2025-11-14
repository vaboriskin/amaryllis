// Общие типы для frontend и backend

export interface Doctor {
  id: string
  name: string
  specialization: string
  experience: number
  photo?: string
  bio?: string
}

export interface Service {
  id: string
  name: string
  description: string
  price: number
  duration: number // в минутах
}

export interface Appointment {
  id: string
  patientName: string
  patientPhone: string
  patientEmail?: string
  doctorId: string
  serviceId: string
  date: string
  time: string
  status: 'pending' | 'confirmed' | 'completed' | 'cancelled'
  notes?: string
}

export interface Contact {
  id: string
  name: string
  email: string
  phone: string
  message: string
  createdAt: string
}

