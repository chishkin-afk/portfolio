import { site } from "@/shared/config/site";
import type { Metadata } from "next";
import "./styles/globals.scss";

export const metadata: Metadata = {
  metadataBase: new URL(site.url),
  title: site.title,
  description: site.description,
  applicationName: site.name,
  authors: [{ name: site.author, url: site.url }],
  creator: site.author,
  keywords: [
    "создание сайтов на заказ",
    "разработка сайтов на заказ",
    "создание сайтов под ключ",
    "разработка сайтов под ключ",
    "заказать сайт",
    "сайт для бизнеса",
    "создание лендинга",
    "разработка лендинга на заказ",
    "заказать лендинг",
    "корпоративный сайт на заказ",
    "разработка многостраничного сайта",
    "сайт для компании",
    "сайт для услуг",
    "разработка веб-приложений",
    "fullstack-разработка",
    "frontend-разработка",
    "backend-разработка",
    "веб-дизайн",
    "дизайн интерфейсов",
    "адаптивная вёрстка",
    "разработка на Next.js",
    "разработка на React",
    "TypeScript разработчик",
    "интеграции для сайта",
    "частный веб-разработчик",
    "веб-разработчик фрилансер",
    "портфолио веб-разработчика",
    "Егор Чишкин",
    "Чишкин разработчик",
    "CHISHKIN",
  ],
  alternates: { canonical: "/" },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
      "max-video-preview": -1,
    },
  },
  verification: {
    google: process.env.GOOGLE_SITE_VERIFICATION || undefined,
    yandex: process.env.YANDEX_SITE_VERIFICATION || undefined,
  },
  openGraph: {
    title: site.title,
    description: site.description,
    url: site.url,
    siteName: site.name,
    locale: "ru_RU",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: site.title,
    description: site.description,
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
