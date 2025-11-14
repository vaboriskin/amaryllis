import React from 'react'
import './Contacts.css'

const Contacts: React.FC = () => {
  return (
    <div className="contacts-page">
      <div className="contacts-hero">
        <div className="container">
          <h1 className="page-title">Контакты</h1>
        </div>
      </div>

      <div className="container">
        <div className="contacts-content">
          <div className="contacts-grid">
            {/* Адрес */}
            <section className="contact-section">
              <h2 className="section-title">Адрес</h2>
              <div className="contact-info">
                <p className="contact-text">
                  Россия, Москва<br />
                  Волгоградский проспект<br />
                  д.183, к.2
                </p>
              </div>
            </section>

            {/* Телефон */}
            <section className="contact-section">
              <h2 className="section-title">Телефон</h2>
              <div className="contact-info">
                <p className="contact-text">
                  <a href="tel:+74956576870" className="contact-link">
                    +7 (495) 657-68-70
                  </a>
                  <br />
                  <a href="tel:+74956576871" className="contact-link">
                    8 (495) 657-68-71
                  </a>
                </p>
              </div>
            </section>

            {/* Почта */}
            <section className="contact-section">
              <h2 className="section-title">Почта</h2>
              <div className="contact-info">
                <p className="contact-text">
                  <a href="mailto:amarillis@internet.ru" className="contact-link">
                    amarillis@internet.ru
                  </a>
                </p>
              </div>
            </section>

            {/* Режим работы */}
            <section className="contact-section">
              <h2 className="section-title">Режим работы</h2>
              <div className="contact-info">
                <div className="work-schedule">
                  <div className="work-day">
                    <span className="day-name">Понедельник</span>
                    <span className="day-time">09:00-20:00</span>
                  </div>
                  <div className="work-day">
                    <span className="day-name">Вторник</span>
                    <span className="day-time">09:00-20:00</span>
                  </div>
                  <div className="work-day">
                    <span className="day-name">Среда</span>
                    <span className="day-time">09:00-20:00</span>
                  </div>
                  <div className="work-day">
                    <span className="day-name">Четверг</span>
                    <span className="day-time">09:00-20:00</span>
                  </div>
                  <div className="work-day">
                    <span className="day-name">Пятница</span>
                    <span className="day-time">09:00-20:00</span>
                  </div>
                  <div className="work-day">
                    <span className="day-name">Суббота</span>
                    <span className="day-time">10:00-18:00</span>
                  </div>
                  <div className="work-day">
                    <span className="day-name">Воскресенье</span>
                    <span className="day-time">10:00-18:00</span>
                  </div>
                </div>
              </div>
            </section>
          </div>

          {/* Реквизиты */}
          <section className="contact-section requisites-section">
            <h2 className="section-title">Реквизиты</h2>
            <div className="contact-info">
              <div className="requisites">
                <div className="requisite-item">
                  <span className="requisite-label">ИНН/КПП:</span>
                  <span className="requisite-value">7723813723/772301001</span>
                </div>
                <div className="requisite-item">
                  <span className="requisite-label">Юр.адрес:</span>
                  <span className="requisite-value">109651, г. Москва, ул. Подольская, д.27, к.1, кв.44</span>
                </div>
                <div className="requisite-item">
                  <span className="requisite-label">ОГРН:</span>
                  <span className="requisite-value">1117746771053</span>
                </div>
                <div className="requisite-item">
                  <span className="requisite-label">ОКАТО:</span>
                  <span className="requisite-value">45290572000</span>
                </div>
                <div className="requisite-item">
                  <span className="requisite-label">ОКВЭД:</span>
                  <span className="requisite-value">85.11</span>
                </div>
                <div className="requisite-item">
                  <span className="requisite-label">Р.сч:</span>
                  <span className="requisite-value">40702810638250013229</span>
                </div>
                <div className="requisite-item">
                  <span className="requisite-label">В «ОАО «Сбербанк России» г. Москва</span>
                </div>
                <div className="requisite-item">
                  <span className="requisite-label">БИК:</span>
                  <span className="requisite-value">044525225</span>
                </div>
                <div className="requisite-item">
                  <span className="requisite-label">К.сч.:</span>
                  <span className="requisite-value">30101810400000000225</span>
                </div>
                <div className="requisite-item">
                  <span className="requisite-label">Юр. Адрес:</span>
                  <span className="requisite-value">109651, г. Москва, ул. Подольская, д. 27, к.1, кв.44</span>
                </div>
                <div className="requisite-item">
                  <span className="requisite-label">Факт. Адрес:</span>
                  <span className="requisite-value">г.Москва, ул. Волгоградский проспект, д.183, к.2</span>
                </div>
                <div className="requisite-item">
                  <span className="requisite-label">Тел.:</span>
                  <span className="requisite-value">(495)6545044, (915)2266657</span>
                </div>
                <div className="requisite-item">
                  <span className="requisite-label">Ген.директор:</span>
                  <span className="requisite-value">Борискина Н.В.</span>
                </div>
                <div className="requisite-item">
                  <span className="requisite-label">Главный бухгалтер:</span>
                  <span className="requisite-value">Борискина Н.В.</span>
                </div>
              </div>
            </div>
          </section>

          {/* Карта */}
          <section className="contact-section map-section">
            <h2 className="section-title">Как нас найти</h2>
            <div className="map-container">
              <iframe
                src="https://yandex.ru/map-widget/v1/?um=constructor%3A289f872a127aa0ea26a7b99f04c6ba2292b3835f9b8537a027d4c619ce4168f1&source=constructor"
                width="100%"
                height="528"
                frameBorder="0"
                allowFullScreen
                style={{ border: 0 }}
                title="Карта клиники Амариллис"
              ></iframe>
            </div>
          </section>
        </div>
      </div>
    </div>
  )
}

export default Contacts

