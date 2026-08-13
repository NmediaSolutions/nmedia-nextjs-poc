import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { landings, findLandingBySlug } from "@/content/landings";
import LandingPageView from "@/components/pages/LandingPageView";

// Route dynamique generique pour toutes les landing pages du registre
// (src/content/landings/index.ts). Les segments statiques de meme niveau
// (nous-joindre, services, projets, blogue) restent prioritaires — Next.js
// ne route ici que pour les slugs absents de ces dossiers.
//
// Avec "output: export", generateStaticParams DOIT retourner au moins une
// entree (contrainte Next.js pour l'export statique). Tant que le registre
// est vide, on genere un slug de repli inaccessible qui rend une 404
// normale via notFound() ci-dessous — aucune page reelle n'est exposee.
const PLACEHOLDER_SLUG = "__aucune-landing-page-enregistree__";

export function generateStaticParams() {
  if (landings.length === 0) return [{ landing: PLACEHOLDER_SLUG }];
  return landings.map((l) => ({ landing: l.slug.fr }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ landing: string }>;
}): Promise<Metadata> {
  const { landing: slug } = await params;
  const landing = findLandingBySlug("fr", slug);
  if (!landing) return {};
  return {
    title: landing.fr.seo.title,
    description: landing.fr.seo.description,
    alternates: {
      languages: {
        "fr-CA": `https://www.nmedia.ca/${landing.slug.fr}`,
        "en-CA": `https://www.nmedia.ca/en-ca/${landing.slug.en}`,
      },
    },
  };
}

export default async function LandingPage({ params }: { params: Promise<{ landing: string }> }) {
  const { landing: slug } = await params;
  const landing = findLandingBySlug("fr", slug);
  if (!landing) notFound();

  return <LandingPageView landing={landing} locale="fr" />;
}
