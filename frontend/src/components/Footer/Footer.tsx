import React from 'react'
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
              <p>сб, вс: <strong>10:00 - 18:00</strong></p>
            </div>
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

