import React, { useState, useEffect } from 'react'
import { Routes, Route, Navigate } from 'react-router-dom'
import AccessibilityHeader from '../../components/AccessibilityHeader/AccessibilityHeader'
import ScrollToTop from '../../components/ScrollToTop/ScrollToTop'
import AccessibilityHome from './AccessibilityHome'
import AccessibilityServices from './AccessibilityServices'
import AccessibilityDoctors from './AccessibilityDoctors'
import AccessibilityPatients from './AccessibilityPatients'
import AccessibilityContacts from './AccessibilityContacts'
import AccessibilityAppointment from './AccessibilityAppointment'
import './Accessibility.css'

const Accessibility: React.FC = () => {
  const [fontSize, setFontSize] = useState<'normal' | 'medium' | 'large' | 'xlarge'>(() => {
    const saved = localStorage.getItem('accessibility-font-size')
    return (saved as 'normal' | 'medium' | 'large' | 'xlarge') || 'normal'
  })

  useEffect(() => {
    localStorage.setItem('accessibility-font-size', fontSize)
    const root = document.documentElement
    const fontSizeMap = {
      normal: '1rem',
      medium: '1.25rem',
      large: '1.5rem',
      xlarge: '2rem',
    }
    root.style.setProperty('--accessibility-font-size', fontSizeMap[fontSize])
    const accessibilityPage = document.querySelector('.accessibility-page')
    if (accessibilityPage) {
      accessibilityPage.className = `accessibility-page font-size-${fontSize}`
    }
  }, [fontSize])

  return (
    <div className="accessibility-page">
      <AccessibilityHeader fontSize={fontSize} onFontSizeChange={setFontSize} />
      <main className="accessibility-main">
        <Routes>
          <Route path="/" element={<AccessibilityHome />} />
          <Route path="/services" element={<AccessibilityServices />} />
          <Route path="/doctors" element={<AccessibilityDoctors />} />
          <Route path="/patients" element={<AccessibilityPatients />} />
          <Route path="/contacts" element={<AccessibilityContacts />} />
          <Route path="/appointment" element={<AccessibilityAppointment />} />
          <Route path="*" element={<Navigate to="/accessibility" replace />} />
        </Routes>
      </main>
      <ScrollToTop />
    </div>
  )
}

export default Accessibility

