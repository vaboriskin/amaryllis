// Данные о врачах

export interface Doctor {
  id: string
  name: string
  position: string
  photo: string
}

// Импорты фото врачей
import bezbahPhoto from '../assets/images/doctors/bezbah.jpg'
import boriskinPhoto from '../assets/images/doctors/boriskin.jpg'
import boriskinaPhoto from '../assets/images/doctors/boriskina.jpg'
import boykoPhoto from '../assets/images/doctors/boyko.jpg'
import gerasimenkoPhoto from '../assets/images/doctors/gerasimenko.jpg'
import glazunovaPhoto from '../assets/images/doctors/glazunova.jpg'
import gudilinaPhoto from '../assets/images/doctors/gudilina.jpg'
import ivanovaPhoto from '../assets/images/doctors/ivanova.jpg'
import kirillinaPhoto from '../assets/images/doctors/kirillina.jpg'
import kovalenkoPhoto from '../assets/images/doctors/kovalenko.jpg'
import kurochkinaPhoto from '../assets/images/doctors/kurochkina.jpg'
import lobodaPhoto from '../assets/images/doctors/loboda.jpg'
import mamaladzePhoto from '../assets/images/doctors/mamaladze.jpg'
import matkovaPhoto from '../assets/images/doctors/matkova.jpg'
import poluboyarovPhoto from '../assets/images/doctors/poluboyarov.jpg'
import shadushnovaPhoto from '../assets/images/doctors/shadushnova.png'
import shishovaPhoto from '../assets/images/doctors/shishova.jpg'
import dobrikovPhoto from '../assets/images/doctors/dobrikov.jpg'
import fatahutdinovPhoto from '../assets/images/doctors/fatahutdinov.jpg'

export const doctorsData: Doctor[] = [
  {
    id: 'boriskina',
    name: 'Борискина Наталья Викторовна',
    position: 'Генеральный директор',
    photo: boriskinaPhoto,
  },
  {
    id: 'boyko',
    name: 'Бойко Наталья Дмитриевна',
    position: 'Главный врач',
    photo: boykoPhoto,
  },
  {
    id: 'boriskin',
    name: 'Борискин Алексей Александрович',
    position: 'заместитель главного врача по медицинской помощи, к.м.н, врач-уролог, врач-андролог',
    photo: boriskinPhoto,
  },
  {
    id: 'bezbah',
    name: 'Ирина Викторовна Безбах',
    position: 'Заместитель главного врача по акушерско-гинекологической помощи, к.м.н., врач акушер-гинеколог, врач гинеколог-эндокринолог',
    photo: bezbahPhoto,
  },
  {
    id: 'gudilina',
    name: 'Гудилина Анна Владимировна',
    position: 'Администратор',
    photo: gudilinaPhoto,
  },
  {
    id: 'loboda',
    name: 'Лобода Татьяна Ивановна',
    position: 'Врач акушер-гинеколог, к.м.н., врач гинеколог-эндокринолог',
    photo: lobodaPhoto,
  },
  {
    id: 'glazunova',
    name: 'Глазунова Светлана Анатольевна',
    position: 'Врач общей практики, врач кардиолог, врач функциональной диагностики',
    photo: glazunovaPhoto,
  },
  {
    id: 'gerasimenko',
    name: 'Герасименко Владимир Витальевич',
    position: 'Врач-нейрохирург',
    photo: gerasimenkoPhoto,
  },
  {
    id: 'shishova',
    name: 'Шишова Людмила Николаевна',
    position: 'Врач эндокринолог',
    photo: shishovaPhoto,
  },
  {
    id: 'matkova',
    name: 'Маткова Елена Олеговна',
    position: 'Врач-гастроэнтеролог',
    photo: matkovaPhoto,
  },
  {
    id: 'kovalenko',
    name: 'Коваленко Владимир Болеславович',
    position: 'Врач онколог-маммолог',
    photo: kovalenkoPhoto,
  },
  {
    id: 'poluboyarov',
    name: 'Полубояров Александр Тимофеевич',
    position: 'Врач-оториноларинголог',
    photo: poluboyarovPhoto,
  },
  {
    id: 'kirillina',
    name: 'Кирилина Юлия Евгеньевна',
    position: 'Врач ультразвуковой диагностики',
    photo: kirillinaPhoto,
  },
  {
    id: 'mamaladze',
    name: 'Мамаладзе Светлана Ефимовна',
    position: 'Специалист по аппаратной косметологии',
    photo: mamaladzePhoto,
  },
  {
    id: 'shadushnova',
    name: 'Щадушнова Татьяна Александровна',
    position: 'Врач-невролог',
    photo: shadushnovaPhoto,
  },
  {
    id: 'ivanova',
    name: 'Иванова Надежда Владимировна',
    position: 'Старшая медицинская сестра',
    photo: ivanovaPhoto,
  },
  
  {
    id: 'kurochkina',
    name: 'Курочкина Екатерина Николаевна',
    position: 'Врач-невролог',
    photo: kurochkinaPhoto,
  },
  {
    id: 'dobrikov',
    name: 'Добриков Андрей Леонидович',
    position: 'Врач-остеопат, мануальнй терапевт',
    photo: dobrikovPhoto,
  },
  {
    id: 'fatahutdinov',
    name: 'Фатахутдинов Альберт Харисович',
    position: 'Врач оториноларинголог',
    photo: fatahutdinovPhoto,
  },
]

