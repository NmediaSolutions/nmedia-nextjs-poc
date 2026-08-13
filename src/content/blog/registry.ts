import type { Locale } from "@/lib/i18n";
import type { LocalizedSlug } from "../types";

export interface BlogRegistryEntry {
  id: string;
  slug: LocalizedSlug;
  file: Record<Locale, string>;
}

/**
 * Registre central des articles de blogue.
 *
 * Chaque article MDX (un fichier par langue) declare son propre frontmatter
 * (titre, date, image, SEO...). Ce registre sert uniquement a faire le pont
 * entre les DEUX slugs independants (FR/EN) d'un meme article, pour :
 * generateStaticParams, le selecteur de langue et les balises hreflang.
 */
export const blogRegistry: BlogRegistryEntry[] = [
  {
    id: "avantages-externalisation-dev",
    slug: {
      fr: "quels-sont-les-avantages-de-l-externalisation-du-developpement-informatique-pour-les-entreprises",
      en: "advantages-of-outsourcing-it-development-for-companies",
    },
    file: {
      fr: "quels-sont-les-avantages-de-l-externalisation-du-developpement-informatique-pour-les-entreprises.fr.mdx",
      en: "advantages-of-outsourcing-it-development-for-companies.en.mdx",
    },
  },
];

export function findBlogEntryBySlug(locale: Locale, slug: string): BlogRegistryEntry | undefined {
  return blogRegistry.find((entry) => entry.slug[locale] === slug);
}
