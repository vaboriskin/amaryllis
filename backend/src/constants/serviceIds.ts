export const SERVICE_CATEGORIES = [
  { id: 'iglo-refleksoterapiya', name: 'Иглорефлексотерапия' },
  { id: 'gastroenterologiya', name: 'Гастроэнтерология' },
  { id: 'urologiya', name: 'Урология' },
  { id: 'ginekologiya', name: 'Гинекология' },
  { id: 'hirurgiya', name: 'Хирургия' },
  { id: 'otorinolaringologiya', name: 'Оториноларингология' },
  { id: 'terapiya', name: 'Терапия' },
  { id: 'kardiologiya', name: 'Кардиология' },
  { id: 'endokrinologiya', name: 'Эндокринология' },
  { id: 'nevrologiya', name: 'Неврология' },
  { id: 'apparatnaya-kosmetologiya', name: 'Аппаратная косметология' },
  { id: 'mammologiya', name: 'Маммология' },
  { id: 'meditsinskiy-massazh', name: 'Медицинский массаж' },
  { id: 'uzi', name: 'УЗИ' },
  { id: 'protsedurnyy-kabinet', name: 'Процедурный кабинет' },
  { id: 'ekg-serdtsa', name: 'ЭКГ сердца' },
  { id: 'oftalmologiya', name: 'Офтальмология' },
] as const

export const SERVICE_IDS = SERVICE_CATEGORIES.map((category) => category.id)

export const SERVICE_ID_SET = new Set<string>(SERVICE_IDS)
