import type { Metadata } from "next";
import "./styles/globals.scss";

export const metadata: Metadata = {
  metadataBase: new URL("https://echishkin.ru"),
  title: "Чишкин — разработка сайтов и веб-приложений",
  description:
    "Создаю сайты и веб-приложения: от лаконичного лендинга до fullstack-продукта. Дизайн, разработка и запуск. Next.js, React, TypeScript.",
  openGraph: {
    title: "Чишкин — сайты с характером",
    description: "Независимый веб-разработчик. Продуманный дизайн. Чистый код.",
    locale: "ru_RU",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="ru">
      <body>{children}</body>
    </html>
  );
}
