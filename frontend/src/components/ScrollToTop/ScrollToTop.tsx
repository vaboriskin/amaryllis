import React, { useState, useEffect } from 'react'
import './ScrollToTop.css'

const ScrollToTop: React.FC = () => {
  const [isVisible, setIsVisible] = useState(true)

  useEffect(() => {
    const toggleVisibility = () => {
      if (window.pageYOffset > 100) {
        setIsVisible(true)
      } else {
        setIsVisible(false)
      }
    }

    // Проверяем сразу при загрузке
    toggleVisibility()

    window.addEventListener('scroll', toggleVisibility, { passive: true })

    return () => {
      window.removeEventListener('scroll', toggleVisibility)
    }
  }, [])

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    })
  }

  if (!isVisible) {
    return null
  }

  return (
    <button
      className="scroll-to-top"
      onClick={scrollToTop}
      aria-label="Наверх страницы"
      title="Наверх страницы"
    >
      <span className="scroll-arrow">↑</span>
    </button>
  )
}

export default ScrollToTop

