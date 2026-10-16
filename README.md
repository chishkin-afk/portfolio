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
- Текст обо мне: `src/widgets/features/ui/features/features.tsx`.
- Метаданные: `src/app/layout.tsx` (перед публикацией проверьте домен).

Основной контент отрисовывается сервером. Клиентский JavaScript используется в hero и выборе сроков. Параллакс обновляет transform через requestAnimationFrame, использует пассивный scroll listener, отключается за пределами экрана и учитывает prefers-reduced-motion.

## Изображения

`public/images/wehicle-preview.png` — исходный скриншот пользователя. Проект ведёт на https://demo.echishkin.ru.

`public/images/chrome-asterisk.png` — созданный встроенным ImageGen прозрачный хромированный объект без людей. Промпт: «One sculptural chrome asterisk with six twisted tapered arms, polished liquid metal, brushed silver and charcoal reflections, dynamic diagonal orientation, isolated on genuinely transparent alpha background. No people, text, logos, floor or extra objects». Локальные шрифты Manrope — Google Fonts, SIL Open Font License.
