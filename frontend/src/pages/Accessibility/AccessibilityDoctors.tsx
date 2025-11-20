import React from 'react'
import { doctorsData } from '../../data/doctors'

const AccessibilityDoctors: React.FC = () => {
  return (
    <div className="accessibility-content">
      <h1>Наши врачи</h1>
      <p>
        В медицинском центре «Амариллис» работают высококвалифицированные специалисты 
        с большим опытом работы.
      </p>

      <section className="accessibility-section">
        {doctorsData.map((doctor) => (
          <div key={doctor.id} style={{ marginBottom: '2rem', paddingBottom: '2rem', borderBottom: '2px solid #000000' }}>
            <h2>{doctor.name}</h2>
            <p><strong>Должность:</strong> {doctor.position}</p>
            <p>{doctor.description}</p>
          </div>
        ))}
      </section>
    </div>
  )
}

export default AccessibilityDoctors

