import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { landings, findLandingBySlug } from "@/content/landings";
import LandingPageView from "@/components/pages/LandingPageView";

// Equivalent EN de src/app/(fr)/[landing]/page.tsx — voir ce fichier pour
// les commentaires generaux sur la priorite des segments statiques et le
// slug de repli requis par "output: export" quand le registre est vide.
const PLACEHOLDER_SLUG = "__no-landing-pages-registered__";

export function generateStaticParams() {
  if (landings.length === 0) return [{ landing: PLACEHOLDER_SLUG }];
  return landings.map((l) => ({ landing: l.slug.en }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ landing: string }>;
}): Promise<Metadata> {
  const { landing: slug } = await params;
  const landing = findLandingBySlug("en", slug);
  if (!landing) return {};
  return {
    title: landing.en.seo.title,
    description: landing.en.seo.description,
    alternates: {
      languages: {
        "fr-CA": `https://www.nmedia.ca/${landing.slug.fr}`,
        "en-CA": `https://www.nmedia.ca/en-ca/${landing.slug.en}`,
      },
    },
  };
}

export default async function LandingPageEn({ params }: { params: Promise<{ landing: string }> }) {
  const { landing: slug } = await params;
  const landing = findLandingBySlug("en", slug);
  if (!landing) notFound();

  return <LandingPageView landing={landing} locale="en" />;
}
