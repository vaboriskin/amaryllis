# Build stage
FROM node:18-alpine AS builder

WORKDIR /app

# Копируем файлы зависимостей
COPY frontend/package*.json ./
COPY frontend/tsconfig.json ./
COPY frontend/tsconfig.node.json ./
COPY frontend/vite.config.ts ./
COPY frontend/index.html ./

# Копируем исходный код
COPY frontend/src ./src
COPY frontend/public ./public

# Устанавливаем зависимости
RUN npm install

# Собираем приложение с Vite
RUN npm run build

# Production stage - Nginx
FROM nginx:alpine

# Копируем конфиг Nginx
COPY frontend/nginx.conf /etc/nginx/nginx.conf

# Копируем собранные файлы из builder stage
COPY --from=builder /app/dist /usr/share/nginx/html

EXPOSE 80

# Проверка здоровья
HEALTHCHECK --interval=30s --timeout=3s --start-period=5s --retries=3 \
  CMD wget --quiet --tries=1 --spider http://localhost/

CMD ["nginx", "-g", "daemon off;"]
