# Артезианс-плюс — сайт компании по бурению скважин

Next.js 15 · App Router · TypeScript · Tailwind CSS v4 · SSG + 1 API-route

## Локальный запуск

```bash
npm install
npm run dev
```

Откройте [http://localhost:3000](http://localhost:3000)

## Переменные окружения

Скопируйте `.env.local.example` в `.env.local` и заполните:

```bash
cp .env.local.example .env.local
```

| Переменная | Описание |
|---|---|
| `TELEGRAM_BOT_TOKEN` | Токен бота от @BotFather |
| `TELEGRAM_CHAT_ID` | ID чата/группы для получения заявок |

### Как получить токен и chat_id

1. В Telegram откройте @BotFather → `/newbot` → следуйте инструкциям → скопируйте токен
2. Напишите своему боту любое сообщение
3. Откройте `https://api.telegram.org/bot<ТОКЕН>/getUpdates`
4. Найдите `"chat":{"id": ...}` — это и есть `TELEGRAM_CHAT_ID`

Если переменные не заданы, форма покажет номера телефонов вместо ошибки.

## Обновление цен

Цены хранятся в [`lib/prices.ts`](lib/prices.ts). Для изменения цены «под ключ» замените `null` на число:

```ts
export const TURNKEY_PRICE: number | null = 250_000; // ← вставить реальную цену
```

## Сборка и проверка

```bash
npm run build
npm run start
```

## Деплой на Vercel

1. Зайдите на [vercel.com](https://vercel.com) → **Add New Project**
2. Импортируйте репозиторий `Maximdie/artesian`
3. В разделе **Environment Variables** добавьте `TELEGRAM_BOT_TOKEN` и `TELEGRAM_CHAT_ID`
4. Нажмите **Deploy**

### Привязка домена artesian-plus.ru

После деплоя: **Vercel → Settings → Domains → artesian-plus.ru**

У регистратора домена добавьте DNS-записи:

| Тип | Имя | Значение |
|---|---|---|
| A | @ | 76.76.21.21 |
| CNAME | www | cname.vercel-dns.com |

## Структура проекта

```
app/
  page.tsx           — Главная
  burenie/           — Бурение скважин
  obustroystvo/      — Обустройство
  septiki/           — Септики
  tseny/             — Цены
  o-kompanii/        — О компании
  kontakty/          — Контакты
  privacy/           — Политика конфиденциальности
  api/lead/          — POST-роут для заявок → Telegram
  sitemap.ts
  robots.ts

components/          — Все переиспользуемые компоненты
lib/
  prices.ts          — Цены (единственный файл для редактирования цен)
  content.ts         — Все тексты, контакты, города
```
