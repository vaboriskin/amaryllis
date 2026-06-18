import React from 'react'
import { useParams, Link } from 'react-router-dom'
import { doctorsData } from '../../data/doctors'
import Button from '../../components/Button/Button'
import { useAppointmentModal } from '../../components/Layout/Layout'
import './DoctorProfile.css'

const DoctorProfile: React.FC = () => {
  const { doctorId } = useParams<{ doctorId: string }>()
  const { openAppointmentModal } = useAppointmentModal()

  const doctor = doctorsData.find(d => d.id === doctorId)

  if (!doctor) {
    return (
      <div className="doctor-profile-page">
        <div className="container">
          <div className="doctor-not-found">
            <h1>Врач не найден</h1>
            <p>К сожалению, запрашиваемая страница не найдена.</p>
            <Link to="/doctors">
              <Button variant="primary" size="large">Вернуться к списку врачей</Button>
            </Link>
          </div>
        </div>
      </div>
    )
  }

  const { profile } = doctor

  return (
    <div className="doctor-profile-page">
      {/* Hero */}
      <section className="dp-hero">
        <div className="container">
          <Link to="/doctors" className="dp-back-link">← Все сотрудники</Link>
          <div className="dp-hero-inner">
            <div className="dp-photo-wrap">
              <img src={doctor.photo} alt={doctor.name} className="dp-photo" />
            </div>
            <div className="dp-hero-info">
              <h1 className="dp-name">{doctor.name}</h1>
              <p className="dp-position">{doctor.position}</p>
              {profile?.degree && (
                <span className="dp-badge">{profile.degree}</span>
              )}
              <div className="dp-meta">
                {profile?.experience && (
                  <div className="dp-meta-item">
                    <span className="dp-meta-icon">⏱</span>
                    <div>
                      <div className="dp-meta-value">{profile.experience}</div>
                      <div className="dp-meta-label">врачебный стаж</div>
                    </div>
                  </div>
                )}
              </div>
              <div className="dp-hero-actions">
                <button onClick={openAppointmentModal} className="btn btn-primary btn-large">
                  Записаться на приём
                </button>
                <Button href="tel:+74956576870" variant="secondary" size="large">
                  Позвонить нам
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>

      <div className="container">
        <div className="dp-content">

          {/* О враче */}
          {profile?.about && (
            <section className="dp-section">
              <h2 className="dp-section-title">О враче</h2>
              <div className="dp-about-card">
                <p>{profile.about}</p>
              </div>
            </section>
          )}

          {/* Профессиональные навыки */}
          {profile?.skills && profile.skills.length > 0 && (
            <section className="dp-section">
              <h2 className="dp-section-title">Профессиональные навыки</h2>
              <ul className="dp-skills-list">
                {profile.skills.map((skill, i) => (
                  <li key={i} className="dp-skill-item">
                    <span className="dp-skill-dot" />
                    {skill}
                  </li>
                ))}
              </ul>
            </section>
          )}

          {/* Образование */}
          {profile?.education && profile.education.length > 0 && (
            <section className="dp-section">
              <h2 className="dp-section-title">Образование</h2>
              <div className="dp-timeline">
                {profile.education.map((item, i) => (
                  <div key={i} className="dp-timeline-item">
                    <div className="dp-timeline-year">{item.year}</div>
                    <div className="dp-timeline-line" />
                    <div className="dp-timeline-text">{item.description}</div>
                  </div>
                ))}
              </div>
            </section>
          )}

          {/* Аккредитации */}
          {profile?.accreditations && profile.accreditations.length > 0 && (
            <section className="dp-section">
              <h2 className="dp-section-title">Аккредитации</h2>
              <div className="dp-accreditations">
                {profile.accreditations.map((item, i) => (
                  <div key={i} className="dp-accreditation-card">
                    <div className="dp-accreditation-date">{item.date}</div>
                    <div className="dp-accreditation-specialty">{item.specialty}</div>
                  </div>
                ))}
              </div>
            </section>
          )}

          {/* CTA */}
          <section className="dp-cta-section">
            <div className="dp-cta-inner">
              <h2>Записаться на приём</h2>
              <p>Свяжитесь с нами для консультации или записи</p>
              <div className="dp-cta-buttons">
                <button onClick={openAppointmentModal} className="btn btn-primary btn-large">
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

export default DoctorProfile
