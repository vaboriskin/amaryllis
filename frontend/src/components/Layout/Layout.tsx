import React, { useState, createContext, useContext } from 'react'
import Header from '../Header/Header'
import Footer from '../Footer/Footer'
import AppointmentModal from '../AppointmentModal/AppointmentModal'
import './Layout.css'

interface LayoutContextType {
  openAppointmentModal: () => void
}

const LayoutContext = createContext<LayoutContextType | undefined>(undefined)

export const useAppointmentModal = () => {
  const context = useContext(LayoutContext)
  if (!context) {
    throw new Error('useAppointmentModal must be used within Layout')
  }
  return context
}

interface LayoutProps {
  children: React.ReactNode
}

const Layout: React.FC<LayoutProps> = ({ children }) => {
  const [isAppointmentModalOpen, setIsAppointmentModalOpen] = useState(false)

  const openAppointmentModal = () => {
    setIsAppointmentModalOpen(true)
  }

  return (
    <LayoutContext.Provider value={{ openAppointmentModal }}>
      <div className="layout">
        <Header />
        <main className="main-content">
          {children}
        </main>
        <Footer />
        <AppointmentModal
          isOpen={isAppointmentModalOpen}
          onClose={() => setIsAppointmentModalOpen(false)}
        />
      </div>
    </LayoutContext.Provider>
  )
}

export default Layout

