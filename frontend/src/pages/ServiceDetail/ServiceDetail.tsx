import React from 'react'
import { useParams, Link } from 'react-router-dom'
import { servicesData } from '../../data/services'
import { doctorsData } from '../../data/doctors'
import DoctorCard from '../../components/DoctorCard/DoctorCard'
import Button from '../../components/Button/Button'
import { useAppointmentModal } from '../../components/Layout/Layout'
import './ServiceDetail.css'

const ServiceDetail: React.FC = () => {
  const { serviceId } = useParams<{ serviceId: string }>()
  const { openAppointmentModal } = useAppointmentModal()
  
  const service = servicesData.find(s => s.id === serviceId)
  const serviceDoctors = service 
    ? doctorsData.filter(doctor => service.doctorIds.includes(doctor.id))
    : []

  if (!service) {
    return (
      <div className="service-detail-page">
        <div className="container">
          <div className="service-not-found">
            <h1>Услуга не найдена</h1>
            <p>К сожалению, запрашиваемая услуга не найдена.</p>
            <Link to="/services">
              <Button variant="primary" size="large">
                Вернуться к услугам
              </Button>
            </Link>
          </div>
        </div>
      </div>
    )
  }

  return (
    <div className="service-detail-page">
      <div className="service-hero">
        <div className="container">
          <div className="service-hero-content">
            <div className="service-icon-large">{service.icon}</div>
            <h1 className="service-title">{service.name}</h1>
            <p className="service-short-description">{service.shortDescription}</p>
          </div>
        </div>
      </div>

      <div className="container">
        <div className="service-content">
          <section className="service-description-section">
            <h2 className="section-title">Описание услуги</h2>
            <div className="service-description">
              <p>{service.fullDescription}</p>
            </div>
          </section>

          {service.methods && (
            <section className="service-methods-section">
              <h2 className="section-title">{service.name} в Амариллис</h2>
              <div className="service-methods">
                <p>{service.methods}</p>
              </div>
            </section>
          )}

          {service.whenToVisit && service.whenToVisit.length > 0 && (
            <section className="service-when-section">
              <h2 className="section-title">В каких случаях необходимо обратиться?</h2>
              <div className="when-to-visit-list">
                {service.whenToVisit.map((item, index) => (
                  <div key={index} className="when-item">
                    <div className="when-number">{index + 1}</div>
                    <div className="when-text">{item}</div>
                  </div>
                ))}
              </div>
            </section>
          )}

          {serviceDoctors.length > 0 && (
            <section className="service-doctors-section">
              <h2 className="section-title">Врачи по направлению {service.name}</h2>
              <div className="doctors-grid">
                {serviceDoctors.map((doctor) => (
                  <DoctorCard
                    key={doctor.id}
                    id={doctor.id}
                    name={doctor.name}
                    position={doctor.position}
                    photo={doctor.photo}
                  />
                ))}
              </div>
            </section>
          )}

          <section className="service-cta-section">
            <div className="service-cta-content">
              <h2 className="cta-title">Записаться на прием</h2>
              <p className="cta-subtitle">
                Свяжитесь с нами для записи на консультацию или процедуру
              </p>
              <div className="cta-buttons">
                <button
                  onClick={openAppointmentModal}
                  className="btn btn-primary btn-large"
                >
                  Записаться онлайн
                </button>
                <Button href="tel:+74956576870" variant="secondary" size="large">
                  Позвонить нам
                </Button>
              </div>
            </div>
          </section>
        </div>
      </div>
    </div>
  )
}

export default ServiceDetail

