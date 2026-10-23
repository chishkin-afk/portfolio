import type { Metadata, Viewport } from "next";
import "@fontsource-variable/manrope";
import "./globals.css";

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL;
export const metadata: Metadata = {
  ...(siteUrl ? { metadataBase: new URL(siteUrl), alternates: { canonical: "/" } } : {}),
  title: "chishkin — независимый разработчик сайтов",
  description: "Создаю сайты и веб-приложения: от лендинга до CRM. React, Next.js, TypeScript и Go. Прозрачные сроки, прямая связь и неделя поддержки после запуска.",
  openGraph: { title: "chishkin — сайты с характером", description: "От идеи до работающего сайта. Дизайн, разработка и запуск — в одних руках.", locale: "ru_RU", type: "website", siteName: "chishkin" },
  twitter: { card: "summary_large_image", title: "chishkin — сайты с характером", description: "Независимый разработчик. Дизайн, код и внимание к деталям." },
  robots: { index: true, follow: true },
};
export const viewport: Viewport = { themeColor: "#f4f3ef" };

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return <html lang="ru"><body>{children}</body></html>;
}
