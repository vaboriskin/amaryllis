import React from 'react'
import './DoctorCard.css'

interface DoctorCardProps {
  name: string
  position: string
  photo: string
  id: string
}

const DoctorCard: React.FC<DoctorCardProps> = ({
  name,
  position,
  photo,
  id,
}) => {
  return (
    <div className="doctor-card">
      <div className="doctor-photo-container">
        <img 
          src={photo} 
          alt={name} 
          className="doctor-photo"
          loading="lazy"
        />
      </div>
      <div className="doctor-info">
        <h3 className="doctor-name">{name}</h3>
        <p className="doctor-position">{position}</p>
      </div>
    </div>
  )
}

export default DoctorCard

