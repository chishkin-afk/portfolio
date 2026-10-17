import type { Metadata } from "next";
import { site } from "@/shared/config/site";

export function pageMetadata({
  title,
  description,
  path,
}: {
  title: string;
  description: string;
  path: string;
}): Metadata {
  return {
    title,
    description,
    alternates: { canonical: path },
    openGraph: {
      title,
      description,
      url: path,
      siteName: site.name,
      locale: "ru_RU",
      type: "website",
      images: [{
        url: `${site.url}/opengraph-image.png`,
        width: 1200,
        height: 630,
        alt: "Разработка сайтов и веб-приложений под ключ",
      }],
    },
    twitter: { card: "summary_large_image", title, description },
  };
}
