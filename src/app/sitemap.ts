import { site } from "@/shared/config/site";
import type { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  return [{ url: `${site.url}/` }];
}
