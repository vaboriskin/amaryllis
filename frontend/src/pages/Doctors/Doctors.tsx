import React from 'react'
import DoctorCard from '../../components/DoctorCard/DoctorCard'
import { doctorsData } from '../../data/doctors'
import './Doctors.css'

const Doctors: React.FC = () => {
  const doctors = doctorsData

  return (
    <div className="doctors-page">
      <section className="doctors-hero">
        <div className="container">
          <h1 className="page-title">Наши сотрудники</h1>
          <p className="page-subtitle">
            Медицинский центр «Амариллис» - команда опытных и высококвалифицированных специалистов
          </p>
        </div>
      </section>

      <section className="doctors-content">
        <div className="container">
          <div className="doctors-grid">
            {doctors.map((doctor) => (
              <DoctorCard
                key={doctor.id}
                id={doctor.id}
                name={doctor.name}
                position={doctor.position}
                photo={doctor.photo}
              />
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}

export default Doctors

