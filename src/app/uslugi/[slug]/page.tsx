import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { getService, servicePages, servicePath } from "@/entities/service/model/services";
import { pageMetadata } from "@/shared/lib/seo/page-metadata";
import { ServicePage } from "@/views/service/ui/service-page/service-page";

export const dynamicParams = false;

export function generateStaticParams() {
  return servicePages.map(({ slug }) => ({ slug }));
}

type Props = { params: Promise<{ slug: string }> };

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const service = getService(slug);
  if (!service) notFound();

  return pageMetadata({
    title: service.title,
    description: service.description,
    path: servicePath(service.slug),
  });
}

export default async function Page({ params }: Props) {
  const { slug } = await params;
  const service = getService(slug);
  if (!service) notFound();
  return <ServicePage service={service} />;
}
