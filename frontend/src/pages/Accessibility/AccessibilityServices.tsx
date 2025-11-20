import React from 'react'
import { servicesData } from '../../data/services'

const AccessibilityServices: React.FC = () => {
  const scrollToService = (serviceId: string) => {
    const element = document.getElementById(serviceId)
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' })
    }
  }

  return (
    <div className="accessibility-content">
      <h1>Наши услуги</h1>
      <p>
        Медицинский центр «Амариллис» предлагает широкий спектр медицинских услуг 
        для поддержания и восстановления вашего здоровья.
      </p>

      <section className="accessibility-section">
        <h2>Список услуг</h2>
        <p>Выберите услугу из списка для перехода к подробному описанию:</p>
        <ul style={{ listStyle: 'none', paddingLeft: 0 }}>
          {servicesData.map((service) => (
            <li key={service.id} style={{ marginBottom: '0.75rem' }}>
              <button
                onClick={() => scrollToService(service.id)}
                className="button"
                style={{
                  textAlign: 'left',
                  width: '100%',
                  padding: '0.75rem 1rem',
                  fontSize: 'inherit',
                }}
              >
                {service.name}
              </button>
            </li>
          ))}
        </ul>
      </section>

      <section className="accessibility-section">
        <h2>Подробное описание услуг</h2>
        {servicesData.map((service) => (
          <div key={service.id} id={service.id} style={{ marginBottom: '2rem', paddingBottom: '2rem', borderBottom: '2px solid #000000', scrollMarginTop: '2rem' }}>
            <h3>{service.name}</h3>
            <p><strong>Описание:</strong> {service.shortDescription}</p>
            {service.fullDescription && (
              <p>{service.fullDescription}</p>
            )}
            {service.whenToVisit && service.whenToVisit.length > 0 && (
              <div>
                <h4>В каких случаях необходимо обратиться:</h4>
                <ol>
                  {service.whenToVisit.map((item, index) => (
                    <li key={index}>{item}</li>
                  ))}
                </ol>
              </div>
            )}
            {service.methods && (
              <div>
                <h4>Методы диагностики и лечения:</h4>
                <p>{service.methods}</p>
              </div>
            )}
          </div>
        ))}
      </section>

      <section className="accessibility-section">
        <h2>Записаться на прием</h2>
        <p>Свяжитесь с нами для записи на консультацию или процедуру.</p>
        <div style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
          <a href="/accessibility/appointment" className="button" style={{ width: '100%', margin: 0 }}>
            Записаться на прием
          </a>
          <a href="tel:+74956576870" className="button" style={{ width: '100%', margin: 0 }}>
            Позвонить нам
          </a>
        </div>
      </section>
    </div>
  )
}

export default AccessibilityServices

