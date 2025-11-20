import React from 'react'

const AccessibilityAppointment: React.FC = () => {
  return (
    <div className="accessibility-content">
      <h1>Запись на прием</h1>

      <section className="accessibility-section">
        <h2>Способы записи на прием</h2>
        <p>Вы можете записаться на прием следующими способами:</p>
        <ol>
          <li>
            <strong>По телефону:</strong> <a href="tel:+74956576870">+7 (495) 657-68-70</a>
          </li>
          <li>
            <strong>По телефону:</strong> <a href="tel:+74956576871">+7 (495) 657-68-71</a>
          </li>
          <li>
            <strong>По электронной почте:</strong> <a href="mailto:amarillis@internet.ru">amarillis@internet.ru</a>
          </li>
          <li>
            <strong>Лично в клинике:</strong> Россия, Москва, Волгоградский пр., д.183, к.2
          </li>
        </ol>
      </section>

      <section className="accessibility-section">
        <h2>Режим работы</h2>
        <p>
          <strong>Понедельник - Пятница:</strong> 09:00 - 20:00
        </p>
        <p>
          <strong>Суббота, Воскресенье:</strong> 10:00 - 18:00
        </p>
      </section>

      <section className="accessibility-section">
        <h2>Что нужно для записи</h2>
        <p>При записи на прием вам необходимо сообщить:</p>
        <ul>
          <li>Ваше имя и фамилию</li>
          <li>Контактный телефон</li>
          <li>Желаемую дату и время приема</li>
          <li>ФИО врача или направление (если знаете)</li>
        </ul>
      </section>

      <section className="accessibility-section">
        <h2>Контакты</h2>
        <p>
          <strong>Телефон:</strong> <a href="tel:+74956576870">+7 (495) 657-68-70</a>
        </p>
        <p>
          <strong>Email:</strong> <a href="mailto:amarillis@internet.ru">amarillis@internet.ru</a>
        </p>
        <p>
          <strong>Адрес:</strong> Россия, Москва, Волгоградский пр., д.183, к.2
        </p>
      </section>
    </div>
  )
}

export default AccessibilityAppointment

