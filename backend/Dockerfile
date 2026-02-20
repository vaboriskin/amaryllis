# Build stage
FROM node:18-alpine AS builder

WORKDIR /app

# Копируем весь backend каталог
COPY backend ./

# Устанавливаем зависимости
RUN npm install

# Собираем TypeScript
RUN npm run build

# Production stage
FROM node:18-alpine

WORKDIR /app

# Копируем файлы зависимостей
COPY backend/package*.json ./

# Устанавливаем только production зависимости
RUN npm install --omit=dev --no-optional

# Копируем собранный код из builder stage
COPY --from=builder /app/dist ./dist

# Создаем non-root пользователя для безопасности
RUN addgroup -g 1001 -S nodejs
RUN adduser -S nodejs -u 1001
USER nodejs

# Открываем порт (может быть переопределен через ENV)
EXPOSE 5000

# Health check
HEALTHCHECK --interval=30s --timeout=3s --start-period=5s --retries=3 \
  CMD node -e "require('http').get('http://localhost:5000/api/health', (r) => {if (r.statusCode !== 200) throw new Error(r.statusCode)})"

# Запускаем приложение
CMD ["node", "dist/index.js"]
