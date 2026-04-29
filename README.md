# Amaryllis Clinic - Веб-сайт частной поликлиники

Веб-приложение для частной поликлиники, построенное на TypeScript и Node.js.

## Структура проекта

```
amaryllis/
├── frontend/          # Frontend приложение
├── backend/           # Backend API сервер
├── shared/            # Общие типы и утилиты
└── docs/              # Документация
```

## Технологии

- **Frontend**: TypeScript, React (или другой фреймворк)
- **Backend**: Node.js, Express, TypeScript
- **База данных**: PostgreSQL + Prisma

## Установка

```bash
npm run install:all
```

## Запуск в режиме разработки

```bash
npm run dev
```

Это запустит одновременно frontend и backend серверы.

### Настройка backend окружения

```bash
cp backend/.env.example backend/.env
```

Заполните значения для `DATABASE_URL`, `JWT_SECRET` и email-настроек.

### Миграции и начальные данные

```bash
cd backend
npm run prisma:generate
npm run prisma:migrate
npm run prisma:seed
```

## Админ-панель цен

- Вход: `/admin/login`
- Управление ценами: `/admin/prices`
- Публичный API цен:
  - `GET /api/service-items/:categoryId`

## Сборка

```bash
npm run build
```

