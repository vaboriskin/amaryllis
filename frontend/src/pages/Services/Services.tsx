import React from 'react'
import { Link } from 'react-router-dom'
import Button from '../../components/Button/Button'
import { servicesData } from '../../data/services'
import './Services.css'

const Services: React.FC = () => {
  const services = servicesData.map(service => ({
    id: service.id,
    name: service.name,
    icon: service.icon,
    description: service.shortDescription,
  }))

  return (
    <div className="services-page">
      <div className="services-hero">
        <div className="container">
          <h1 className="page-title">Наши услуги</h1>
          <p className="page-subtitle">
            Медицинский центр «Амариллис» предлагает широкий спектр медицинских услуг 
            для поддержания и восстановления вашего здоровья
          </p>
        </div>
      </div>

      <div className="container">
        <div className="services-grid">
          {services.map((service) => (
            <Link 
              key={service.id} 
              to={`/services/${service.id}`}
              className="service-card"
            >
              <div className="service-icon">{service.icon}</div>
              <h3 className="service-name">{service.name}</h3>
              <p className="service-description">{service.description}</p>
            </Link>
          ))}
        </div>

        <div className="services-cta">
          <h2 className="cta-title">Готовы записаться на прием?</h2>
          <p className="cta-subtitle">
            Свяжитесь с нами для записи на консультацию или процедуру
          </p>
          <div className="cta-buttons">
            <Button href="/appointment" variant="primary" size="large">
              Записаться на прием
            </Button>
            <Button href="tel:+74956576870" variant="secondary" size="large">
              Позвонить нам
            </Button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Services

