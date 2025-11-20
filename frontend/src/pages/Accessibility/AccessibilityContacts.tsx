import React from 'react'

const AccessibilityContacts: React.FC = () => {
  return (
    <div className="accessibility-content">
      <h1>Контакты</h1>

      <section className="accessibility-section">
        <h2>Адрес</h2>
        <p>
          Россия, Москва<br />
          Волгоградский проспект<br />
          д.183, к.2
        </p>
      </section>

      <section className="accessibility-section">
        <h2>Телефон</h2>
        <p>
          <a href="tel:+74956576870">+7 (495) 657-68-70</a>
        </p>
        <p>
          <a href="tel:+74956576871">+7 (495) 657-68-71</a>
        </p>
      </section>

      <section className="accessibility-section">
        <h2>Почта</h2>
        <p>
          <a href="mailto:amarillis@internet.ru">amarillis@internet.ru</a>
        </p>
      </section>

      <section className="accessibility-section">
        <h2>Режим работы</h2>
        <table>
          <thead>
            <tr>
              <th>День недели</th>
              <th>Время работы</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>Понедельник</td>
              <td>09:00 - 20:00</td>
            </tr>
            <tr>
              <td>Вторник</td>
              <td>09:00 - 20:00</td>
            </tr>
            <tr>
              <td>Среда</td>
              <td>09:00 - 20:00</td>
            </tr>
            <tr>
              <td>Четверг</td>
              <td>09:00 - 20:00</td>
            </tr>
            <tr>
              <td>Пятница</td>
              <td>09:00 - 20:00</td>
            </tr>
            <tr>
              <td>Суббота</td>
              <td>10:00 - 18:00</td>
            </tr>
            <tr>
              <td>Воскресенье</td>
              <td>10:00 - 18:00</td>
            </tr>
          </tbody>
        </table>
      </section>

      <section className="accessibility-section">
        <h2>Реквизиты</h2>
        <p>
          <strong>Полное наименование:</strong> Общество с ограниченной ответственностью «АМАРИЛЛИС»
        </p>
        <p>
          <strong>Сокращенное наименование:</strong> ООО «АМАРИЛЛИС»
        </p>
        <p>
          <strong>ИНН:</strong> 7719014560
        </p>
        <p>
          <strong>КПП:</strong> 771901001
        </p>
        <p>
          <strong>ОГРН:</strong> 1027700132195
        </p>
        <p>
          <strong>Юридический адрес:</strong> 109316, г. Москва, Волгоградский проспект, д. 183, к. 2
        </p>
        <p>
          <strong>Фактический адрес:</strong> 109316, г. Москва, Волгоградский проспект, д. 183, к. 2
        </p>
      </section>
    </div>
  )
}

export default AccessibilityContacts

