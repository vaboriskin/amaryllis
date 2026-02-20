import React from 'react'
import { Link } from 'react-router-dom'
import './Footer.css'

const Footer: React.FC = () => {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-content">
          <div className="footer-section">
            <h3 className="footer-title">Клиника Амариллис</h3>
            <p className="footer-description">
              Современный медицинский центр в Кузьминках с опытными специалистами 
              и современным оборудованием.
            </p>
          </div>

          <div className="footer-section">
            <h4 className="footer-heading">Контакты</h4>
            <div className="footer-contact">
              <p className="contact-item">
                <span className="contact-icon">📍</span>
                Россия, Москва<br />
                Волгоградский пр., д.183, к.2
              </p>
              <p className="contact-item">
                <span className="contact-icon">📞</span>
                <a href="tel:+74956576870">+7 (495) 657-68-70</a><br />
                <a href="tel:+74956576871">+7 (495) 657-68-71</a>
              </p>
              <p className="contact-item">
                <span className="contact-icon">✉️</span>
                <a href="mailto:amarillis@internet.ru">amarillis@internet.ru</a>
              </p>
            </div>
          </div>

          <div className="footer-section">
            <h4 className="footer-heading">Режим работы</h4>
            <div className="footer-hours">
              <p>пн-пт: <strong>9:00 - 20:00</strong></p>
              <p>сб: <strong>10:00 - 18:00</strong></p>
              <p>вс: <strong>выходной</strong></p>
            </div>
          </div>

          <div className="footer-section">
            <h4 className="footer-heading">Информация</h4>
            <nav className="footer-nav">
              <Link to="/patients">Пациентам</Link>
              <a href="https://yandex.com/maps/213/moscow/?from=mapframe&ll=37.811791%2C55.696368&mode=poi&poi%5Bpoint%5D=37.811695%2C55.695841&poi%5Buri%5D=ymapsbm1%3A%2F%2Forg%3Foid%3D1095340590&source=mapframe&tab=reviews&um=constructor%3A289f872a127aa0ea26a7b99f04c6ba2292b3835f9b8537a027d4c619ce4168f1&utm_source=mapframe&z=18" target="_blank" rel="noopener noreferrer">Отзывы</a>
              <Link to="/privacy-policy">Политика конфиденциальности</Link>
            </nav>
          </div>
        </div>

        <div className="footer-bottom">
          <p>&copy; 2023 Медицинский Центр «Амариллис». Все права защищены.</p>
        </div>
      </div>
    </footer>
  )
}

export default Footer

