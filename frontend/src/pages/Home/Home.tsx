import React from 'react'
import { Link } from 'react-router-dom'
import Button from '../../components/Button/Button'
import { useAppointmentModal } from '../../components/Layout/Layout'
import { servicesData } from '../../data/services'
import './Home.css'

const Home: React.FC = () => {
  const { openAppointmentModal } = useAppointmentModal()
  // Берем первые 12 услуг для главной страницы
  const services = servicesData.slice(0, 12).map(service => ({
    id: service.id,
    name: service.name,
    icon: service.icon,
  }))

  const advantages = [
    {
      icon: '👨‍⚕️',
      title: 'Профессиональное лечение',
      description: 'В нашей поликлинике работают только лучшие сотрудники',
    },
    {
      icon: '🔬',
      title: 'Современное оборудование',
      description: 'Обследование пациентов проводится на современном диагностическом оборудовании',
    },
    {
      icon: '⭐',
      title: 'Опытный персонал',
      description: 'У наших врачей большой опыт работы и практики',
    },
    {
      icon: '🏥',
      title: 'Комплексное обследование',
      description: 'Благодаря опытному составу сотрудников, проводим комплексное обследование пациентов',
    },
    {
      icon: '📜',
      title: 'Аккредитованные сотрудники',
      description: 'Ваше лечение будет выполняться только аккредитованными врачами',
    },
    {
      icon: '💚',
      title: 'Удобства для пациентов',
      description: 'В нашей поликлинике предусмотрены детали для комфортного лечения',
    },
  ]

  return (
    <div className="home">
      {/* Hero Section */}
      <section className="hero">
        <div className="hero-overlay"></div>
        <div className="container">
          <div className="hero-content">
            <h1 className="hero-title">Медицинский центр в Кузьминках</h1>
            <p className="hero-subtitle">Новые возможности для вашего здоровья</p>
            <div className="hero-buttons">
              <button
                onClick={openAppointmentModal}
                className="btn btn-primary btn-large"
              >
                Записаться на прием
              </button>
              <Button href="/services" variant="outline" size="large">
                Наши услуги
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Promotion Section */}
      <section className="promotion-section">
        <div className="container">
          <div className="promotion-card">
            <div className="promotion-content">
              <h2 className="promotion-title">МАССАЖ ПОБЕДЫ!</h2>
              <p className="promotion-description">
                Бесплатный сеанс массажа спины в нашем массажном кабинете с 4 по 7 мая 2026 года, каждый кто предварительно запишется на прием по времени один массаж спины от копчика до затылка бесплатно, продолжительность сеанса 30 минут.
              </p>
              <p className="promotion-description">
                Спешите! Количество мест ограничено, время записи с 17.00 до 20.00 часов, акция действует только в указанные дни!
              </p>
              <p className="promotion-description">
                Соглашаясь на акцию клиент даёт свое согласие на рассылку контента и информации на мероприятия и акции реализуемые медицинской клиникой Амариллис!
              </p>
              <p className="promotion-description">
                Запись по телефону и на сайте организации.
              </p>
              <div className="promotion-buttons">
                <button
                  onClick={openAppointmentModal}
                  className="btn btn-primary btn-large"
                >
                  Записаться на акцию
                </button>
                <Button href="tel:+74956576870" variant="outline" size="large">
                  Позвонить
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="services-section">
        <div className="container">
          <div className="section-header">
            <h2 className="section-title">Наши услуги</h2>
            <p className="section-subtitle">
              Широкий спектр медицинских услуг для вашего здоровья
            </p>
          </div>
          <div className="services-grid">
            {services.map((service) => (
              <Link
                key={service.id}
                to={`/services/${service.id}`}
                className="service-card"
              >
                <div className="service-icon">{service.icon}</div>
                <h3 className="service-name">{service.name}</h3>
              </Link>
            ))}
          </div>
          <div className="services-cta">
            <Button href="/services" variant="primary" size="large">
              Все услуги
            </Button>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="about-section">
        <div className="container">
          <div className="about-content">
            <div className="about-text">
              <h2 className="section-title">О нас</h2>
              <p className="about-description">
                Медцентр «Амариллис» является одним из современных медицинских центров здоровья города Москвы, 
                в котором работают опытные, высококвалифицированные сотрудники.
              </p>
              <p className="about-description">
                Поликлиника оказывает услуги на платной основе. Индивидуальный подход и доступные цены гарантируют 
                качество лечения, заботу, внимание, комфортные условия приема и обслуживания пациентов.
              </p>
              <div className="about-features">
                <div className="about-feature">
                  <span className="feature-number">15+</span>
                  <span className="feature-label">Лет опыта</span>
                </div>
                <div className="about-feature">
                  <span className="feature-number">20+</span>
                  <span className="feature-label">Специалистов</span>
                </div>
                <div className="about-feature">
                  <span className="feature-number">1000+</span>
                  <span className="feature-label">Довольных пациентов</span>
                </div>
              </div>
            </div>
            <div className="about-image">
              <h3 className="work-schedule-title">Режим работы</h3>
              <div className="work-hours">
                <div className="work-day">
                  <span className="day-name">пн-пт:</span>
                  <span className="day-time">9:00 - 20:00</span>
                </div>
                <div className="work-day">
                  <span className="day-name">сб, вс:</span>
                  <span className="day-time">10:00 - 18:00</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Map Section */}
      <section className="map-section">
        <div className="container">
          <h2 className="section-title">Как нас найти</h2>
          <p className="section-subtitle">
            Мы находимся по адресу: Россия, Москва, Волгоградский пр., д.183, к.2
          </p>
          <div className="map-container">
            <iframe
              src="https://yandex.ru/map-widget/v1/?um=constructor%3A289f872a127aa0ea26a7b99f04c6ba2292b3835f9b8537a027d4c619ce4168f1&source=constructor"
              width="100%"
              height="528"
              frameBorder="0"
              allowFullScreen
              style={{ border: 0 }}
              title="Карта расположения клиники Амариллис"
            ></iframe>
          </div>
        </div>
      </section>

      {/* Advantages Section */}
      <section className="advantages-section">
        <div className="container">
          <h2 className="section-title">Наши преимущества</h2>
          <div className="advantages-grid">
            {advantages.map((advantage, index) => (
              <div key={index} className="advantage-card">
                <div className="advantage-icon">{advantage.icon}</div>
                <h3 className="advantage-title">{advantage.title}</h3>
                <p className="advantage-description">{advantage.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="cta-section">
        <div className="container">
          <div className="cta-content">
            <h2 className="cta-title">Готовы записаться на прием?</h2>
            <p className="cta-subtitle">
              Свяжитесь с нами или запишитесь онлайн прямо сейчас
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
        </div>
      </section>
    </div>
  )
}

export default Home
