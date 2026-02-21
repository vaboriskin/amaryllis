import React, { useState, useEffect, useRef } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import './Header.css'

const Header: React.FC = () => {
  const [isContactsOpen, setIsContactsOpen] = useState(false)
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const contactsRef = useRef<HTMLDivElement>(null)
  const menuRef = useRef<HTMLDivElement>(null)
  const menuToggleRef = useRef<HTMLButtonElement>(null)
  const navigate = useNavigate()

  
  // Закрытие при клике вне блока
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      const target = event.target as Node
      
      if (contactsRef.current && !contactsRef.current.contains(target)) {
        setIsContactsOpen(false)
      }
      
      // Проверяем, что клик не на кнопке меню и не в самом меню
      if (isMenuOpen && menuRef.current && !menuRef.current.contains(target) && 
          menuToggleRef.current && !menuToggleRef.current.contains(target)) {
        setIsMenuOpen(false)
      }
    }

    if (isContactsOpen || isMenuOpen) {
      document.addEventListener('mousedown', handleClickOutside)
    }

    return () => {
      document.removeEventListener('mousedown', handleClickOutside)
    }
  }, [isContactsOpen, isMenuOpen])

  return (
    <header className="header">
      <div className="container">
        <Link to="/" className="logo">
          <img src="/images/logo.png" alt="Amaryllis Clinic" className="logo-img" />
        </Link>
        <nav className="nav desktop-nav">
          <Link to="/">Главная</Link>
          <Link to="/services">Услуги</Link>
          <Link to="/doctors">Сотрудники</Link>
          <Link to="/contacts">Контакты</Link>
        </nav>
        <div className="header-actions">
          <div className="header-contacts" ref={contactsRef}>
          <button 
            className="contacts-toggle"
            onClick={() => setIsContactsOpen(!isContactsOpen)}
            aria-label="Контакты"
            aria-expanded={isContactsOpen}
          >
            <span className="contacts-icon">📞</span>
            <span className="contacts-phone">+7 (495) 657-68-70</span>
            <span className="contacts-arrow">{isContactsOpen ? '▲' : '▼'}</span>
          </button>
          
          {isContactsOpen && (
            <div className="contacts-dropdown">
              <div className="contacts-section">
                <h4 className="contacts-title">Адрес</h4>
                <div className="contact-item">
                  <span className="contact-icon">📍</span>
                  <span>Россия, Москва<br />Волгоградский пр., д.183, к.2</span>
                </div>
              </div>

              <div className="contacts-section">
                <h4 className="contacts-title">Телефоны</h4>
                <div className="contacts-list">
                  <a href="tel:+74956576870" className="contact-item">
                    <span className="contact-icon">📞</span>
                    <span>+7 (495) 657-68-70</span>
                  </a>
                </div>
              </div>

              <div className="contacts-section">
                <h4 className="contacts-title">Режим работы</h4>
                <div className="work-hours">
                  <div className="work-day">
                    <span className="day-name">пн-пт:</span>
                    <span className="day-time">9:00 - 20:00</span>
                  </div>
                    <div className="work-day">
                      <span className="day-name">сб, вс:</span>
                      <span className="day-time">10:00 - 18:00</span>
                    </div>
                </div>
              </div>

              <div className="contacts-section">
                <h4 className="contacts-title">Email</h4>
                <a href="mailto:amarillis@internet.ru" className="contact-item">
                  <span className="contact-icon">✉️</span>
                  <span>amarillis@internet.ru</span>
                </a>
              </div>

            </div>
          )}
          </div>
          
          <button
            className="accessibility-toggle-header"
            onClick={() => navigate('/accessibility')}
            aria-label="Версия для слабовидящих"
            title="Версия для слабовидящих"
          >
            <span className="accessibility-icon-header">🕶️</span>
          </button>
          
          <button 
            ref={menuToggleRef}
            className="menu-toggle"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label="Меню"
            aria-expanded={isMenuOpen}
          >
            <span className={`hamburger ${isMenuOpen ? 'active' : ''}`}>
              <span></span>
              <span></span>
              <span></span>
            </span>
          </button>
        </div>
        
        {isMenuOpen && (
          <nav className="mobile-nav" ref={menuRef}>
            <Link to="/" onClick={() => setIsMenuOpen(false)}>Главная</Link>
            <Link to="/services" onClick={() => setIsMenuOpen(false)}>Услуги</Link>
            <Link to="/doctors" onClick={() => setIsMenuOpen(false)}>Сотрудники</Link>
            <Link to="/contacts" onClick={() => setIsMenuOpen(false)}>Контакты</Link>
          </nav>
        )}
      </div>
    </header>
  )
}

export default Header

