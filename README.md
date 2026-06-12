# Артезианс-плюс — сайт компании по бурению скважин

Next.js 15 · App Router · TypeScript · Tailwind CSS v4 · Статический экспорт (SSG)

## Локальный запуск

```bash
npm install
npm run dev
```

Откройте [http://localhost:3000](http://localhost:3000)

> **Форма заявки** при локальной разработке покажет номера телефонов вместо кнопки отправки — PHP не выполняется в dev-режиме Next.js. Это штатное поведение.

## Обновление цен

Цены хранятся в [`lib/prices.ts`](lib/prices.ts). Для изменения цены «под ключ» замените `null` на число:

```ts
export const TURNKEY_PRICE: number | null = 250_000; // ← вставить реальную цену
```

## Сборка

```bash
npm run build   # генерирует папку out/
```

## Деплой

### Схема

```
git push → GitHub Actions → FTP → Jino (боевой сайт artesian-plus.ru)
                                   Vercel остаётся как превью (artesian-six.vercel.app)
```

### Секреты GitHub Actions

Repo → **Settings → Secrets and variables → Actions** → New repository secret:

| Секрет | Значение |
|---|---|
| `FTP_HOST` | FTP-хост из панели Jino (обычно вида `ftp.jino.ru`) |
| `FTP_USER` | FTP-логин |
| `FTP_PASSWORD` | FTP-пароль |
| `FTP_SERVER_DIR` | Путь на сервере, например `domains/artesian-plus.ru/` |

После первого пуша в ветку `main` Actions автоматически соберёт проект и задеплоит папку `out/` на Jino по FTP.

### Файл конфигурации Telegram (создаётся вручную на сервере)

Форма заявки отправляет данные через `send.php`. Скрипт читает токен бота из файла `tg-config.php`, который **не коммитится в git** и должен быть создан на сервере вручную.

1. По FTP (или через файловый менеджер панели Jino) откройте папку `domains/artesian-plus.ru/`.
2. Создайте файл `tg-config.php` на основе образца [`public/tg-config.example.php`](public/tg-config.example.php):

```php
<?php
define('TG_TOKEN',   '1234567890:ABCDEFGHIJKLMNOP');
define('TG_CHAT_ID', '123456789');
```

#### Как получить токен и chat_id

1. В Telegram откройте **@BotFather** → `/newbot` → следуйте инструкциям → скопируйте токен.
2. Напишите своему боту любое сообщение.
3. Откройте `https://api.telegram.org/bot<ТОКЕН>/getUpdates`
4. Найдите `"chat":{"id": ...}` — это и есть `TELEGRAM_CHAT_ID`.

Если `tg-config.php` отсутствует, форма показывает номера телефонов вместо кнопки отправки.

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
  sitemap.ts
  robots.ts

components/          — Все переиспользуемые компоненты
lib/
  prices.ts          — Цены (единственный файл для редактирования цен)
  content.ts         — Все тексты, контакты, города

public/
  send.php           — Обработчик формы (PHP → Telegram)
  tg-config.php      — Токен бота (НЕ в git, создать вручную на сервере)
  tg-config.example.php — Образец для tg-config.php

.github/workflows/
  deploy.yml         — Автодеплой на Jino по FTP при пуше в main
```
