import React from 'react'
import { Link } from 'react-router-dom'
import { servicesData } from '../../data/services'

const AccessibilityHome: React.FC = () => {
  const services = servicesData.slice(0, 12)

  return (
    <div className="accessibility-content">
      <h1>Медицинский центр Амариллис</h1>
      
      <section className="accessibility-section">
        <h2>О нас</h2>
        <p>
          Медцентр «Амариллис» является одним из современных медицинских центров здоровья города Москвы, 
          в котором работают опытные, высококвалифицированные сотрудники.
        </p>
        <p>
          Поликлиника оказывает услуги на платной основе. Индивидуальный подход и доступные цены гарантируют 
          качество лечения, заботу, внимание, комфортные условия приема и обслуживания пациентов.
        </p>
      </section>

      <section className="accessibility-section">
        <h2>Наши услуги</h2>
        <p>Широкий спектр медицинских услуг для вашего здоровья:</p>
        <ul>
          {services.map((service) => (
            <li key={service.id}>
              <Link to={`/accessibility/services#${service.id}`}>
                {service.name}
              </Link>
              {service.shortDescription && (
                <span> - {service.shortDescription}</span>
              )}
            </li>
          ))}
        </ul>
        <p>
          <Link to="/accessibility/services" className="button">
            Все услуги
          </Link>
        </p>
      </section>

      <section className="accessibility-section">
        <h2>Наши преимущества</h2>
        <ul>
          <li>Профессиональное лечение - В нашей поликлинике работают только лучшие сотрудники</li>
          <li>Современное оборудование - Обследование пациентов проводится на современном диагностическом оборудовании</li>
          <li>Опытный персонал - У наших врачей большой опыт работы и практики</li>
          <li>Комплексное обследование - Благодаря опытному составу сотрудников, проводим комплексное обследование пациентов</li>
          <li>Аккредитованные сотрудники - Ваше лечение будет выполняться только аккредитованными врачами</li>
          <li>Удобства для пациентов - В нашей поликлинике предусмотрены детали для комфортного лечения</li>
        </ul>
      </section>

      <section className="accessibility-section">
        <h2>Контакты</h2>
        <p>
          <strong>Адрес:</strong> Россия, Москва, Волгоградский пр., д.183, к.2
        </p>
        <p>
          <strong>Телефон:</strong> <a href="tel:+74956576870">+7 (495) 657-68-70</a>
        </p>
        <p>
          <strong>Email:</strong> <a href="mailto:amarillis@internet.ru">amarillis@internet.ru</a>
        </p>
        <p>
          <strong>Режим работы:</strong> пн-пт: 9:00 - 20:00, сб, вс: 10:00 - 18:00
        </p>
        <p>
          <Link to="/accessibility/contacts" className="button">
            Подробная информация о контактах
          </Link>
        </p>
      </section>

      <section className="accessibility-section">
        <h2>Запись на прием</h2>
        <p>Готовы записаться на прием? Свяжитесь с нами или запишитесь онлайн прямо сейчас.</p>
        <div style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
          <Link to="/accessibility/appointment" className="button" style={{ width: '100%', margin: 0 }}>
            Записаться онлайн
          </Link>
          <a href="tel:+74956576870" className="button" style={{ width: '100%', margin: 0 }}>
            Позвонить нам
          </a>
        </div>
      </section>
    </div>
  )
}

export default AccessibilityHome

