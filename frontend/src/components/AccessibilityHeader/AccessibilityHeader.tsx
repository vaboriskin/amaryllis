import React from 'react'
import { Link, useLocation } from 'react-router-dom'
import './AccessibilityHeader.css'

interface AccessibilityHeaderProps {
  fontSize: 'normal' | 'medium' | 'large' | 'xlarge'
  onFontSizeChange: (size: 'normal' | 'medium' | 'large' | 'xlarge') => void
}

const AccessibilityHeader: React.FC<AccessibilityHeaderProps> = ({ fontSize, onFontSizeChange }) => {
  const location = useLocation()

  return (
    <header className="accessibility-header">
      <div className="accessibility-header-container">
        <div className="accessibility-header-top">
          <Link to="/accessibility" className="accessibility-logo">
            Медицинский центр Амариллис
          </Link>
          <div className="accessibility-controls">
            <div className="font-size-control">
              <span className="font-size-label">Размер шрифта:</span>
              <button
                className={`font-size-btn font-size-normal ${fontSize === 'normal' ? 'active' : ''}`}
                onClick={() => onFontSizeChange('normal')}
                aria-label="Обычный размер шрифта"
              >
                А
              </button>
              <button
                className={`font-size-btn font-size-medium ${fontSize === 'medium' ? 'active' : ''}`}
                onClick={() => onFontSizeChange('medium')}
                aria-label="Средний размер шрифта"
              >
                А
              </button>
              <button
                className={`font-size-btn font-size-large ${fontSize === 'large' ? 'active' : ''}`}
                onClick={() => onFontSizeChange('large')}
                aria-label="Большой размер шрифта"
              >
                А
              </button>
              <button
                className={`font-size-btn font-size-xlarge ${fontSize === 'xlarge' ? 'active' : ''}`}
                onClick={() => onFontSizeChange('xlarge')}
                aria-label="Очень большой размер шрифта"
              >
                А
              </button>
            </div>
            <Link to="/" className="normal-version-link">
              Обычная версия сайта
            </Link>
          </div>
        </div>
        <nav className="accessibility-nav">
          <Link
            to="/accessibility"
            className={location.pathname === '/accessibility' ? 'active' : ''}
          >
            Главная
          </Link>
          <Link
            to="/accessibility/services"
            className={location.pathname === '/accessibility/services' ? 'active' : ''}
          >
            Услуги
          </Link>
          <Link
            to="/accessibility/doctors"
            className={location.pathname === '/accessibility/doctors' ? 'active' : ''}
          >
            Врачи
          </Link>
          <Link
            to="/accessibility/patients"
            className={location.pathname === '/accessibility/patients' ? 'active' : ''}
          >
            Пациентам
          </Link>
          <Link
            to="/accessibility/contacts"
            className={location.pathname === '/accessibility/contacts' ? 'active' : ''}
          >
            Контакты
          </Link>
          <Link
            to="/accessibility/appointment"
            className={location.pathname === '/accessibility/appointment' ? 'active' : ''}
          >
            Запись на прием
          </Link>
        </nav>
      </div>
    </header>
  )
}

export default AccessibilityHeader

