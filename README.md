# CHISHKIN — личное портфолио

Next.js App Router, React, TypeScript и Sass Modules.

## Запуск

```sh
npm install
npm run dev
```

Откройте http://localhost:3000. Production: `npm run build`, затем `npm start`. Проверка типов: `npm run typecheck`.

## Структура

Упрощённый Feature-Sliced Design. `src/app` — маршруты и глобальные стили; `src/views` — композиция страниц (название позволяет избежать конфликта с Next.js Pages Router); `src/widgets` — секции; `src/features` — интерактивные сценарии; `src/entities` — проекты; `src/shared` — UI и общие настройки. У каждого UI-компонента собственная папка и Sass-модуль. Импорты идут непосредственно к файлам без barrel exports.

## Редактирование

- Контакты: `src/shared/config/contacts.ts`.
- Проекты: `src/entities/project/model/projects.ts`.
- Типы проектов и сроки: `src/features/project-estimate/model/estimates.ts`.
- Услуги: `src/widgets/features/model/services.ts`.
- Страницы услуг и их содержание: `src/entities/service/model/services.ts`.
- Текст обо мне: `src/widgets/features/ui/features/features.tsx`.
- Метаданные: `src/app/layout.tsx` (перед публикацией проверьте домен).
- Домен, имя и основное SEO-описание: `src/shared/config/site.ts`.

## Поисковая оптимизация

Настроены title и description под создание сайтов на заказ, canonical,
Open Graph и Twitter Card с превью 1200×630, robots.txt, sitemap.xml и JSON-LD
с сайтом и реальными услугами. Ключевые запросы также включены в видимый текст.
В sitemap — главная и три самостоятельные страницы услуг. Каждая страница услуги
содержит свой H1, title, description, canonical, разметку Service и BreadcrumbList.
Секции с якорями не являются отдельными страницами.

Целевые темы:

| Страница | Основная тема |
| --- | --- |
| `/` | Разработка сайтов под ключ, сайты на заказ |
| `/uslugi/razrabotka-lendingov` | Разработка лендингов под ключ |
| `/uslugi/korporativnye-sayty` | Разработка корпоративных и многостраничных сайтов |
| `/uslugi/razrabotka-veb-prilozheniy` | Разработка веб-приложений на заказ |

Ссылки на услуги доступны на главной, со страниц услуг можно перейти на главную
и соседние услуги. Тексты и ответы на вопросы присутствуют в HTML до выполнения
JavaScript; блок вопросов использует нативный `details`. Локальный шрифт загружается
через `next/font/local` с предварительной загрузкой и метриками запасного шрифта.

Результаты проверки опубликованного сайта до изменений и ограничения аудита:
`docs/seo-audit.md`. После сборки выполните `npm run verify:seo` для проверки
метаданных, ссылок, sitemap, JSON-LD и статического HTML всех публичных страниц.

После публикации:

1. Проверьте, что основной домен в `src/shared/config/site.ts` — `https://echishkin.ru`.
   На хостинге настройте постоянные редиректы с HTTP и альтернативных доменов на основной HTTPS-домен.
2. Добавьте сайт в Google Search Console и Яндекс Вебмастер под своим аккаунтом.
   Для подтверждения HTML-метатегом задайте `GOOGLE_SITE_VERIFICATION` и
   `YANDEX_SITE_VERIFICATION` из `.env.example` в окружении сборки, затем пересоберите сайт.
   Вставляйте только значение `content`, а не весь тег. DNS-подтверждение тоже подходит.
   Для Google код также убирает случайно вставленный префикс `google-site-verification=`.
   Подтверждение доменного ресурса через DNS не требует переменной окружения.
3. Передайте обоим сервисам `https://echishkin.ru/sitemap.xml` и запросите проверку главной страницы.
4. Проверьте опубликованную страницу в PageSpeed Insights и разметку в Schema Markup Validator.
   Следите за индексацией, запросами и переходами в кабинетах поисковиков.
5. Развивайте портфолио: добавляйте реальные подробные кейсы с задачей, решением и результатом.
   Публикуйте измеримые показатели и отзывы только при наличии подтверждений.
   Дополняйте страницы услуг примерами работ и условиями по мере появления материала.

Meta keywords не влияет на ранжирование Google. Настройки помогают поисковикам
понимать сайт, но не гарантируют индексацию или место в топе. Проверка прав на домен
и отправка sitemap выполняются в аккаунтах владельца после публикации.

Основной контент отрисовывается сервером. Клиентский JavaScript используется в hero и выборе сроков. Параллакс обновляет transform через requestAnimationFrame, использует пассивный scroll listener, отключается за пределами экрана и учитывает prefers-reduced-motion.

Превью ссылки: `src/app/opengraph-image.png`, исходник — `public/images/social-preview.svg`.
После редактирования SVG обновите PNG:

```sh
node -e 'require("sharp")("public/images/social-preview.svg").png().toFile("src/app/opengraph-image.png")'
```

## Изображения

`public/images/wehicle-preview.png` — исходный скриншот пользователя. Проект ведёт на https://demo.echishkin.ru.

`public/images/chrome-asterisk.png` — созданный встроенным ImageGen прозрачный хромированный объект без людей. Промпт: «One sculptural chrome asterisk with six twisted tapered arms, polished liquid metal, brushed silver and charcoal reflections, dynamic diagonal orientation, isolated on genuinely transparent alpha background. No people, text, logos, floor or extra objects». Локальные шрифты Manrope — Google Fonts, SIL Open Font License.
