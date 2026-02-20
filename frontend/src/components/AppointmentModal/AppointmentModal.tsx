import React, { useState, useEffect } from 'react'
import './AppointmentModal.css'

interface AppointmentModalProps {
  isOpen: boolean
  onClose: () => void
}

const AppointmentModal: React.FC<AppointmentModalProps> = ({ isOpen, onClose }) => {
  const [name, setName] = useState('')
  const [phone, setPhone] = useState('+7 (9')
  const [time, setTime] = useState('')
  const [consent, setConsent] = useState(false)
  const [errors, setErrors] = useState<{ phone?: string, consent?: string }>({})

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden'
    } else {
      document.body.style.overflow = 'unset'
      // Очистка формы при закрытии
      setName('')
      setPhone('+7 (9')
      setTime('')
      setErrors({})
    }

    return () => {
      document.body.style.overflow = 'unset'
    }
  }, [isOpen])

  useEffect(() => {
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        onClose()
      }
    }

    if (isOpen) {
      document.addEventListener('keydown', handleEscape)
    }

    return () => {
      document.removeEventListener('keydown', handleEscape)
    }
  }, [isOpen, onClose])

  const handlePhoneChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    let value = e.target.value
    
    // Если пользователь пытается удалить префикс +7 (9, восстанавливаем его
    if (!value.startsWith('+7 (9')) {
      // Извлекаем только цифры из введенного значения
      let digits = value.replace(/\D/g, '')
      
      // Если начинается с 7, убираем первую 7
      if (digits.startsWith('7')) {
        digits = digits.slice(1)
      }
      
      // Если начинается с 9, оставляем как есть, иначе добавляем 9
      if (!digits.startsWith('9') && digits.length > 0) {
        digits = '9' + digits
      }
      
      // Ограничиваем до 10 цифр (после +7 (9)
      if (digits.length > 10) {
        digits = digits.slice(0, 10)
      }
      
      // Форматируем: +7 (9XX) XXX-XX-XX
      let result = '+7 (9'
      if (digits.length > 1) {
        result += digits.slice(1, 3)
      }
      if (digits.length > 3) {
        result += ') ' + digits.slice(3, 6)
      }
      if (digits.length > 6) {
        result += '-' + digits.slice(6, 8)
      }
      if (digits.length > 8) {
        result += '-' + digits.slice(8, 10)
      }
      
      setPhone(result)
    } else {
      // Если префикс сохранен, просто форматируем остальные цифры
      let digits = value.replace(/\D/g, '')
      
      // Убираем 79 из начала, если есть
      if (digits.startsWith('79')) {
        digits = digits.slice(2)
      } else if (digits.startsWith('7')) {
        digits = digits.slice(1)
      }
      
      // Ограничиваем до 10 цифр
      if (digits.length > 10) {
        digits = digits.slice(0, 10)
      }
      
      // Форматируем: +7 (9XX) XXX-XX-XX
      let result = '+7 (9'
      if (digits.length > 0) {
        result += digits.slice(0, 2)
      }
      if (digits.length > 2) {
        result += ') ' + digits.slice(2, 5)
      }
      if (digits.length > 5) {
        result += '-' + digits.slice(5, 7)
      }
      if (digits.length > 7) {
        result += '-' + digits.slice(7, 9)
      }
      
      setPhone(result)
    }
    
    if (errors.phone) {
      setErrors({ ...errors, phone: undefined })
    }
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()

    // Валидация
    const newErrors: { phone?: string, consent?: string } = {}
    const phoneDigits = phone.replace(/\D/g, '')
    if (!phone.trim() || phone.trim() === '+7 (9' || phoneDigits.length < 11) {
      newErrors.phone = 'Введите полный номер телефона'
    } else if (!phoneDigits.startsWith('79') || phoneDigits.length !== 11) {
      newErrors.phone = 'Введите корректный номер телефона'
    }

    // Проверяем, что пользователь согласился с условиями
    if (!consent) {
      newErrors.consent = 'Необходимо согласиться с условиями обработки персональных данных'
    }

    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors)
      return
    }

    try {
      const response = await fetch('/api/appointments', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ name, phone, time }),
      })

      if (response.ok) {
        alert('Спасибо! Мы свяжемся с вами в ближайшее время.')
        onClose()
      } else {
        alert('Произошла ошибка при отправке заявки. Попробуйте еще раз.')
      }
    } catch (error) {
      console.error('Error submitting appointment:', error)
      alert('Произошла ошибка при отправке заявки. Попробуйте еще раз.')
    }
  }

  const handleModalClick = (e: React.MouseEvent<HTMLDivElement>) => {
    if (e.target === e.currentTarget) {
      onClose()
    }
  }

  if (!isOpen) return null

  return (
    <div className="appointment-modal" onClick={handleModalClick}>
      <div className="appointment-modal-content">
        <button
          className="appointment-modal-close"
          onClick={onClose}
          aria-label="Закрыть"
        >
          ×
        </button>
        <h2 className="appointment-modal-title">Записаться на прием</h2>
        <form onSubmit={handleSubmit} className="appointment-form">
          <div className="form-group">
            <label htmlFor="name" className="form-label">
              Ваше имя
            </label>
            <input
              type="text"
              id="name"
              className="form-input"
              value={name}
              onChange={(e) => setName(e.target.value)}
              placeholder="Введите ваше имя"
            />
          </div>

          <div className="form-group">
            <label htmlFor="phone" className="form-label">
              Номер телефона <span className="required">*</span>
            </label>
            <div className="phone-input-wrapper">
              <input
                type="tel"
                id="phone"
                className={`form-input phone-input ${errors.phone ? 'error' : ''}`}
                value={phone}
                onChange={handlePhoneChange}
                placeholder=""
                required
                maxLength={18}
              />
              <span className="phone-mask">
                <span className="phone-mask-filled" style={{ color: 'transparent' }}>
                  {phone}
                </span>
                {phone.length < 5 && <span className="phone-mask-placeholder">__) ___-__-__</span>}
                {phone.length >= 5 && phone.length < 9 && <span className="phone-mask-placeholder">___-__-__</span>}
                {phone.length >= 9 && phone.length < 12 && <span className="phone-mask-placeholder">__-__</span>}
                {phone.length >= 12 && phone.length < 15 && <span className="phone-mask-placeholder">__</span>}
              </span>
            </div>
            {errors.phone && (
              <span className="error-message">{errors.phone}</span>
            )}
          </div>

          <div className="form-group">
            <label htmlFor="time" className="form-label">
              Удобное время для звонка
            </label>
            <input
              type="text"
              id="time"
              className="form-input"
              value={time}
              onChange={(e) => setTime(e.target.value)}
              placeholder="Например: с 10:00 до 18:00"
            />
          </div>

          <div className="consent-section">
            <label className="consent-checkbox">
              <input 
                type="checkbox" 
                id="consent"
                checked={consent}
                onChange={(e) => {
                  setConsent(e.target.checked);
                  if (errors.consent) {
                    setErrors({ ...errors, consent: undefined });
                  }
                }}
              />
              <span className="checkmark"></span>
              <span className="consent-text">
                Я принимаю{' '}
                <a href="/privacy-policy" target="_blank" rel="noopener noreferrer">
                  соглашение о конфиденциальности
                </a>{' '}
                и{' '}
                <a href="/soglpersdan.pdf" target="_blank" rel="noopener noreferrer">
                  согласие на обработку персональных данных
                </a>
              </span>
            </label>
            {errors.consent && <span className="error-message">{errors.consent}</span>}
          </div>

          <div className="form-actions">
            <button type="submit" className="btn-submit">
              Отправить заявку
            </button>
            <button type="button" className="btn-cancel" onClick={onClose}>
              Отмена
            </button>
          </div>
        </form>
      </div>
    </div>
  )
}

export default AppointmentModal

