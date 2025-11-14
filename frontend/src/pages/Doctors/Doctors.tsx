import React from 'react'
import DoctorCard from '../../components/DoctorCard/DoctorCard'
import './Doctors.css'

// Импорты фото врачей
import bezbahPhoto from '../../assets/images/doctors/bezbah.jpg'
import boriskinPhoto from '../../assets/images/doctors/boriskin.jpg'
import boriskinaPhoto from '../../assets/images/doctors/boriskina.jpg'
import boykoPhoto from '../../assets/images/doctors/boyko.jpg'
import gerasimenkoPhoto from '../../assets/images/doctors/gerasimenko.jpg'
import glazunovaPhoto from '../../assets/images/doctors/glazunova.jpg'
import gudilinaPhoto from '../../assets/images/doctors/gudilina.jpg'
import ivanovaPhoto from '../../assets/images/doctors/ivanova.jpg'
import kirillinaPhoto from '../../assets/images/doctors/kirillina.jpg'
import kovalenkoPhoto from '../../assets/images/doctors/kovalenko.jpg'
import kurochkinaPhoto from '../../assets/images/doctors/kurochkina.jpg'
import lobodaPhoto from '../../assets/images/doctors/loboda.jpg'
import mamaladzePhoto from '../../assets/images/doctors/mamaladze.jpg'
import matkovaPhoto from '../../assets/images/doctors/matkova.jpg'
import poluboyarovPhoto from '../../assets/images/doctors/poluboyarov.jpg'
import shadushnovaPhoto from '../../assets/images/doctors/shadushnova.png'
import shishovaPhoto from '../../assets/images/doctors/shishova.jpg'

const Doctors: React.FC = () => {
  const doctors = [
    {
      id: 'boriskina',
      name: 'Борискина Наталья Викторовна',
      position: 'Генеральный директор',
      description: 'Руководитель медицинского центра «Амариллис». Обеспечивает высокий уровень организации работы клиники и качество медицинских услуг.',
      photo: boriskinaPhoto,
    },
    {
      id: 'boyko',
      name: 'Бойко Наталья Дмитриевна',
      position: 'Главный врач',
      description: 'Организует и контролирует медицинскую деятельность поликлиники, обеспечивает высокий уровень оказания медицинской помощи пациентам.',
      photo: boykoPhoto,
    },
    {
      id: 'boriskin',
      name: 'Борискин Алексей Александрович',
      position: 'Заместитель главного врача по медицинской помощи',
      description: 'Врач-уролог высшей квалификационной категории, врач-онколог, врач ультразвуковой диагностики. Кандидат медицинских наук. "Почетный медицинский работник г. Москвы", обладатель статуса "Московский врач"',
      photo: boriskinPhoto,
    },
    {
      id: 'bezbah',
      name: 'Ирина Викторовна Безбах',
      position: 'Заместитель главного врача по акушерско-гинекологической помощи',
      description: 'Кандидат медицинских наук, врач акушер гинеколог-эндокринолог высшей квалификационной категории, врач ультразвуковой диагностики',
      photo: bezbahPhoto,
    },
    {
      id: 'ivanova',
      name: 'Иванова Надежда Владимировна',
      position: 'Старшая медицинская сестра',
      description: 'Организует работу среднего медицинского персонала, обеспечивает качество сестринского ухода и соблюдение стандартов медицинской помощи.',
      photo: ivanovaPhoto,
    },
    {
      id: 'gudilina',
      name: 'Гудилина Анна Владимировна',
      position: 'Администратор',
      description: 'Обеспечивает комфортное обслуживание пациентов, организует запись на прием и координацию работы клиники.',
      photo: gudilinaPhoto,
    },
    {
      id: 'loboda',
      name: 'Лобода Татьяна Ивановна',
      position: 'Врач акушер-гинеколог, эндокринолог',
      description: 'Врач ультразвуковой диагностики, Кандидат медицинских наук',
      photo: lobodaPhoto,
    },
    {
      id: 'glazunova',
      name: 'Глазунова Светлана Анатольевна',
      position: 'Врач-кардиолог, врач-терапевт',
      description: 'Врач функциональной диагностики',
      photo: glazunovaPhoto,
    },
    {
      id: 'gerasimenko',
      name: 'Герасименко Владимир Витальевич',
      position: 'Врач-нейрохирург',
      description: 'Врач высшей квалификационной категории, обладатель статуса "Московский врач"',
      photo: gerasimenkoPhoto,
    },
    {
      id: 'kurochkina',
      name: 'Курочкина Екатерина Николаевна',
      position: 'Врач-невролог',
      description: 'Специализируется на диагностике и лечении заболеваний нервной системы. Оказывает квалифицированную помощь пациентам с неврологическими нарушениями.',
      photo: kurochkinaPhoto,
    },
    {
      id: 'shishova',
      name: 'Шишова Людмила Николаевна',
      position: 'Врач эндокринолог',
      description: 'Врач высшей квалификационной категории',
      photo: shishovaPhoto,
    },
    {
      id: 'matkova',
      name: 'Маткова Елена Олеговна',
      position: 'Врач-гастроэнтеролог',
      description: 'Врач высшей квалификационной категории',
      photo: matkovaPhoto,
    },
    {
      id: 'kovalenko',
      name: 'Коваленко Владимир Болеславович',
      position: 'Врач онколог-маммолог',
      description: 'Специализируется на диагностике и лечении онкологических заболеваний молочной железы. Проводит профилактические осмотры и раннюю диагностику.',
      photo: kovalenkoPhoto,
    },
    {
      id: 'poluboyarov',
      name: 'Полубояров Александр Тимофеевич',
      position: 'Врач-оториноларинголог',
      description: 'Врач высшей квалификационной категории',
      photo: poluboyarovPhoto,
    },
    {
      id: 'kirillina',
      name: 'Кирилина Юлия Евгеньевна',
      position: 'Врач ультразвуковой диагностики',
      description: 'Врач высшей квалификационной категории',
      photo: kirillinaPhoto,
    },
    {
      id: 'mamaladze',
      name: 'Мамаладзе Светлана Ефимовна',
      position: 'Специалист по аппаратной косметологии',
      description: 'Проводит процедуры аппаратной косметологии с использованием современного оборудования для улучшения состояния кожи и коррекции возрастных изменений.',
      photo: mamaladzePhoto,
    },
    {
      id: 'shadushnova',
      name: 'Щадушнова Татьяна Александровна',
      position: 'Врач-невролог',
      description: 'Главный специалист невролог военно-врачебной экспертизы',
      photo: shadushnovaPhoto,
    },
  ]

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
                description={doctor.description}
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

