import React, { useState, useEffect } from 'react'
import './Patients.css'

const Patients: React.FC = () => {
  const [selectedLicense, setSelectedLicense] = useState<string | null>(null)

  useEffect(() => {
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        setSelectedLicense(null)
      }
    }

    if (selectedLicense) {
      document.addEventListener('keydown', handleEscape)
      document.body.style.overflow = 'hidden'
    }

    return () => {
      document.removeEventListener('keydown', handleEscape)
      document.body.style.overflow = 'unset'
    }
  }, [selectedLicense])

  const handleLicenseClick = (licenseSrc: string) => {
    setSelectedLicense(licenseSrc)
  }

  const handleCloseModal = () => {
    setSelectedLicense(null)
  }

  const handleModalClick = (e: React.MouseEvent<HTMLDivElement>) => {
    if (e.target === e.currentTarget) {
      handleCloseModal()
    }
  }

  return (
    <div className="patients-page">
      <div className="patients-hero">
        <div className="container">
          <h1 className="page-title">Пациентам</h1>
        </div>
      </div>

      <div className="container">
        <div className="patients-content">
          <section className="patients-section">
          <h2 className="section-title">
            Порядок рассмотрения жалоб и обращений пациентов в ООО «АМАРИЛЛИС»
          </h2>
          
          <p>
            Порядок рассмотрения обращений пациентов осуществляется в соответствии с Федеральным законом 
            «О порядке рассмотрения обращений граждан РФ» от 02.05.2006 г. № 59-ФЗ.
          </p>

          <p>
            Пациенты имеют право на обжалование действий (бездействий) и решений работников ООО «АМАРИЛЛИС» 
            (далее — Поликлиника), осуществленных (принятых) в ходе оказания медицинской помощи.
          </p>

          <p>
            В случае конфликтных ситуаций пациент (его представитель) имеет право обратиться в Поликлинику 
            с устной или письменной жалобой лично, направить почтой, либо на официальный сайт Поликлиники.
          </p>

          <p>
            Жалобы, поступившие от пациента лично, поданные через прокуратуру, министерство здравоохранения РФ, 
            Управление Росздравнадзора, Интернет-ресурсы органов исполнительной власти РФ, страховые медицинские 
            организации, ТФОМС и иные уполномоченные органы рассматриваются администрацией Поликлиники.
          </p>

          <h3 className="subsection-title">
            Личный прием по жалобам пациентов в соответствии с графиком работы осуществляют:
          </h3>
          <ul className="patients-list">
            <li>генеральный директор;</li>
            <li>главный врач</li>
            <li>врачебной комиссией</li>
          </ul>

          <p>
            При личном приеме пациент предъявляет документ, удостоверяющий его личность.
          </p>

          <p>
            Представитель пациента представляет паспорт и документ, подтверждающий его полномочия. В случае, 
            если изложенные в устной жалобе факты и обстоятельства являются очевидными и не требуют дополнительной 
            проверки, ответ на жалобу, с согласия пациента (представителя), может быть дан устно в ходе личного 
            приема. В остальных случаях дается письменный ответ по существу поставленных в жалобе вопросов.
          </p>

          <p>
            В ходе личного приема пациенту (представителю) может быть отказано в дальнейшем рассмотрении жалобы, 
            если ему был дан ответ по существу поставленных в жалобе вопросов.
          </p>

          <p>
            В случае если в жалобе содержатся вопросы, решение которых не входит в компетенцию должностного лица, 
            пациенту дается разъяснение, куда и в каком порядке ему следует обратиться.
          </p>

          <h3 className="subsection-title">
            Пациентом (представителем) в письменной форме обязательно указывается:
          </h3>
          <ul className="patients-list">
            <li>фамилия, имя, отчество лица, которым подается жалоба, его место жительства или место пребывания, почтовый адрес, по которому должен быть направлен ответ;</li>
            <li>должность, фамилия, имя и отчество работника Поликлиники (при наличии информации), решение, действие (бездействие) которого обжалуется;</li>
            <li>суть обжалуемого действия (бездействия), решения;</li>
            <li>личная подпись и дата;</li>
            <li>документ, подтверждающий полномочия представителя,</li>
          </ul>

          <p>
            В случае необходимости в подтверждение своих доводов пациент (представитель) вправе приложить к письменной 
            жалобе документы и материалы либо их копии.
          </p>

          <p>
            Срок рассмотрения жалобы не может превышать 30 календарных дней, а при рассмотрении жалобы на качество 
            оказанных медицинских услуг — 10 календарных дней со дня её регистрации и завершается датой письменного 
            ответа заявителю.
          </p>

          <p>
            В случае необходимости длительных действий, связанных с рассмотрением жалобы, срок может быть продлён не 
            более чем на 20 календарных дней. Об этом уведомляется пациент (представитель).
          </p>

          <p>
            Пациент (представитель) вправе получать устную информацию о ходе рассмотрения жалобы, а также соответствующую 
            письменную информацию по письменному запросу. Для полного, объективного и всестороннего рассмотрения жалобы пациента 
            (представителя) по поручению главного врача, на действия (бездействие), решение которого подана жалоба, вправе предоставить 
            письменное объяснение в течение 2 рабочих дней.
          </p>

          <p>
            Жалоба рассматривается генеральным директором, главным врачом с участием работника Поликлиники (по его желанию), 
            на действия (бездействие), на решение которого подана жалоба.
          </p>

          <p>
            Результатом рассмотрения жалобы является принятие решения об удовлетворении жалобы либо об отказе в удовлетворении жалобы.
          </p>

          <p>
            О принятом решении пациент (представитель) уведомляется в письменной форме с указанием мотивов принятого решения.
          </p>

          <p>
            В случае если в жалобе содержатся вопросы, решение которых не входит в компетенцию должностного лица, пациенту дается 
            разъяснение, куда и в каком порядке ему следует обратиться.
          </p>

          <p>
            <strong>
              Жалобы на неправомерное поведение или нарушении этики и деонтологии, графика работы указанными лицами.
            </strong>
          </p>

          <div className="contact-info">
            <p><strong>По телефону:</strong> 8(495)657-68-70(71)</p>
            <p><strong>По электронной почте:</strong> <a href="mailto:amarillis@internet.ru">amarillis@internet.ru</a></p>
          </div>
        </section>

        <section className="patients-section">
          <h2 className="section-title">Контролирующие органы в сфере здравоохранения</h2>

          <div className="control-organs">
            <div className="control-organ">
              <h3 className="subsection-title">
                Федеральная служба по надзору в сфере здравоохранения (Росздравнадзор)
              </h3>
              <ul className="patients-list">
                <li><strong>Телефон справочной службы:</strong> +7 (499) 578-02-20</li>
                <li><strong>Многоканальный телефон:</strong> + 7 (499) 578-06-70</li>
                <li><strong>«Горячая линия» по соблюдению прав граждан в сфере охраны здоровья:</strong> 8 800 550 99 03</li>
                <li><strong>Адрес:</strong> 109012, Москва, Славянская площадь, д.4, стр.1</li>
                <li><strong>Адрес электронной почты для обращений граждан:</strong> <a href="mailto:info@roszdravnadzor.gov.ru">info@roszdravnadzor.gov.ru</a></li>
                <li><strong>Сайт:</strong> <a href="https://roszdravnadzor.gov.ru" target="_blank" rel="noopener noreferrer">https://roszdravnadzor.gov.ru</a></li>
              </ul>
            </div>

            <div className="control-organ">
              <h3 className="subsection-title">
                Федеральная служба по надзору в сфере защиты прав потребителей и благополучия человека (Роспотребнадзор)
              </h3>
              <ul className="patients-list">
                <li><strong>Единый консультационный центр:</strong> 8-800-555-49-43</li>
                <li><strong>Информационно-справочная телефонная линия:</strong> 8-499-973-26-90</li>
                <li><strong>Адрес:</strong> 127994, г. Москва, Вадковский переулок, дом 18, строение 5 и 7</li>
                <li><strong>Виртуальная приемная:</strong> <a href="http://zpp.rospotrebnadzor.ru/Forum/Appeals" target="_blank" rel="noopener noreferrer">http://zpp.rospotrebnadzor.ru/Forum/Appeals</a></li>
                <li><strong>Прием обращений граждан онлайн:</strong> <a href="https://petition.rospotrebnadzor.ru/petition/" target="_blank" rel="noopener noreferrer">https://petition.rospotrebnadzor.ru/petition/</a></li>
                <li><strong>Сайт:</strong> <a href="https://www.rospotrebnadzor.ru/" target="_blank" rel="noopener noreferrer">https://www.rospotrebnadzor.ru/</a></li>
              </ul>
            </div>

            <div className="control-organ">
              <h3 className="subsection-title">
                Министерство здравоохранения Российской Федерации (Минздрав России)
              </h3>
              <ul className="patients-list">
                <li><strong>Телефоны справочной службы:</strong> +7 (495) 628-44-53; +7 (495) 627-29-44</li>
                <li><strong>«Горячая линия» по соблюдению прав граждан в сфере охраны здоровья:</strong> 8 800 550 99 03</li>
                <li><strong>Адрес:</strong> 127994, ГСП-4, г. Москва, Рахмановский пер, д. 3</li>
                <li><strong>Адрес электронной почты для обращений граждан:</strong> <a href="mailto:info@minzdrav.gov.ru">info@minzdrav.gov.ru</a></li>
                <li><strong>Общественная онлайн-приемная (форма отправки сообщений):</strong> <a href="https://minzdrav.gov.ru/reception/appeals/new" target="_blank" rel="noopener noreferrer">https://minzdrav.gov.ru/reception/appeals/new</a></li>
                <li><strong>Сайт:</strong> <a href="https://minzdrav.gov.ru" target="_blank" rel="noopener noreferrer">https://minzdrav.gov.ru</a></li>
              </ul>
            </div>
          </div>
        </section>

        <section className="patients-section">
          <h2 className="section-title">Постановление об утверждении правил предоставления медицинскими организациями платных медицинских услуг</h2>
          <p>
            <a 
              href="/postanovlenie-ob-utverzh-pravil-predostavl-med-organiz-plat-med-uslug.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="pdf-link"
            >
              Постановление об утверждении правил предоставления медицинскими организациями платных медицинских услуг
            </a>
          </p>
        </section>

        <section className="patients-section licenses-section">
          <h2 className="section-title">Наши лицензии</h2>
          <div className="licenses-grid">
            <div className="license-item" onClick={() => handleLicenseClick('/images/lic1.png')}>
              <img src="/images/lic1.png" alt="Лицензия 1" className="license-image" />
            </div>
            <div className="license-item" onClick={() => handleLicenseClick('/images/lic2.png')}>
              <img src="/images/lic2.png" alt="Лицензия 2" className="license-image" />
            </div>
            <div className="license-item" onClick={() => handleLicenseClick('/images/lic3.png')}>
              <img src="/images/lic3.png" alt="Лицензия 3" className="license-image" />
            </div>
            <div className="license-item" onClick={() => handleLicenseClick('/images/lic4.png')}>
              <img src="/images/lic4.png" alt="Лицензия 4" className="license-image" />
            </div>
            <div className="license-item" onClick={() => handleLicenseClick('/images/lic5.png')}>
              <img src="/images/lic5.png" alt="Лицензия 5" className="license-image" />
            </div>
            <div className="license-item" onClick={() => handleLicenseClick('/images/lic6.png')}>
              <img src="/images/lic6.png" alt="Лицензия 6" className="license-image" />
            </div>
          </div>
        </section>
        </div>
      </div>

      {selectedLicense && (
        <div className="license-modal" onClick={handleModalClick}>
          <div className="license-modal-content">
            <button className="license-modal-close" onClick={handleCloseModal} aria-label="Закрыть">
              ×
            </button>
            <img src={selectedLicense} alt="Лицензия" className="license-modal-image" />
          </div>
        </div>
      )}
    </div>
  )
}

export default Patients

