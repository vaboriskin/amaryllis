import React from 'react'
import { Link } from 'react-router-dom'
import { doctorsData } from '../../data/doctors'
import './DoctorCard.css'

interface DoctorCardProps {
  name: string
  position: string
  photo: string
  id: string
}

const DoctorCard: React.FC<DoctorCardProps> = ({ name, position, photo, id }) => {
  const doctor = doctorsData.find(d => d.id === id)
  const hasProfile = !!doctor?.profile

  const inner = (
    <div className={`doctor-card${hasProfile ? ' doctor-card--clickable' : ''}`}>
      <div className="doctor-photo-container">
        <img src={photo} alt={name} className="doctor-photo" loading="lazy" />
      </div>
      <div className="doctor-info">
        <h3 className="doctor-name">{name}</h3>
        <p className="doctor-position">{position}</p>
        {hasProfile && (
          <span className="doctor-profile-link">Подробнее →</span>
        )}
      </div>
    </div>
  )

  if (hasProfile) {
    return (
      <Link to={`/doctors/${id}`} className="doctor-card-link">
        {inner}
      </Link>
    )
  }

  return inner
}

export default DoctorCard
