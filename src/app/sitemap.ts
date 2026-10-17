import { site } from "@/shared/config/site";
import type { MetadataRoute } from "next";
import { servicePages, servicePath } from "@/entities/service/model/services";

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    { url: `${site.url}/` },
    ...servicePages.map(({ slug }) => ({ url: `${site.url}${servicePath(slug)}` })),
  ];
}
