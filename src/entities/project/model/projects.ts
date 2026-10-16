export const projects = [
  {
    id: "wehicle",
    name: "Wehicle",
    category: "САЙТ АВТОСЕРВИСА",
    description:
      "Цифровой образ автомобильного сервиса. Спокойная эстетика, понятная структура и акцент на главном — заботе об автомобиле.",
    image: "/images/wehicle-preview.png",
    imageAlt:
      "Главная страница Wehicle: заголовок «Ваш автомобиль. В хороших руках» и серебристый автомобиль в светлом автосервисе",
    url: "https://demo.echishkin.ru",
    displayUrl: "demo.echishkin.ru",
    tags: ["Веб-дизайн", "Разработка", "Адаптив"],
  },
] as const;

export type Project = (typeof projects)[number];
