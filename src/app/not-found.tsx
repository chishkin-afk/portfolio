import type { Metadata } from "next";
import { NotFoundPage } from "@/views/not-found/ui/not-found-page/not-found-page";

export const metadata: Metadata = {
  title: "Страница не найдена | CHISHKIN",
  description: "Такой страницы нет. Вернитесь на главную или посмотрите проекты.",
  robots: {
    index: false,
    follow: true,
    googleBot: { index: false, follow: true },
  },
};

export default function NotFound() {
  return <NotFoundPage />;
}
