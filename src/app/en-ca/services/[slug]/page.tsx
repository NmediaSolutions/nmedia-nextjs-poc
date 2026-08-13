import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { services, findServiceBySlug } from "@/content/services";
import ServicePageView from "@/components/pages/ServicePageView";

export function generateStaticParams() {
  return services.map((s) => ({ slug: s.slug.en }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const service = findServiceBySlug("en", slug);
  if (!service) return {};
  return {
    title: service.en.seo.title,
    description: service.en.seo.description,
    alternates: {
      languages: {
        "fr-CA": `https://www.nmedia.ca/services/${service.slug.fr}`,
        "en-CA": `https://www.nmedia.ca/en-ca/services/${service.slug.en}`,
      },
    },
  };
}

export default async function ServicePageEn({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const service = findServiceBySlug("en", slug);
  if (!service) notFound();

  return <ServicePageView service={service} locale="en" />;
}
