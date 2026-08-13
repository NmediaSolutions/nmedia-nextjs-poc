import type { LandingContent } from "../types";

/**
 * Registre des landing pages. Ajouter ici chaque nouvelle landing creee.
 *
 * Une entree ici suffit a publier la page dans les DEUX langues : les
 * routes dynamiques (src/app/(fr)/[landing]/page.tsx et
 * src/app/en-ca/[landing]/page.tsx) generent automatiquement /slug.fr et
 * /en-ca/slug.en via generateStaticParams, et alternates.ts / sitemap.ts
 * derivent automatiquement leurs entrees de ce meme registre.
 *
 * Slugs interdits (collision avec une route existante) : en-ca, services,
 * projets, blogue, nous-joindre, api.
 *
 * Exemple complet exercant chacun des 10 types de section :
 * .opencode/skills/nmedia-landing-page/references/exemple-complet.ts
 */
export const landings: LandingContent[] = [];

export function findLandingBySlug(locale: "fr" | "en", slug: string): LandingContent | undefined {
  return landings.find((l) => l.slug[locale] === slug);
}
