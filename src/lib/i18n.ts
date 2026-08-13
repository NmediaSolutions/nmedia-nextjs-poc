// Configuration i18n du site.
//
// Contrairement a un site i18n "classique" (prefixe /en devant le meme slug),
// le site Nmedia utilise des slugs INDEPENDANTS par langue
// (ex: /blogue/mon-article vs /en-ca/blog/my-article). Chaque contenu doit
// donc declarer explicitement son slug FR et son slug EN — voir
// src/content/types.ts (LocalizedSlug).

export const locales = ["fr", "en"] as const;
export type Locale = (typeof locales)[number];

export const defaultLocale: Locale = "fr";

export const siteUrl = "https://www.nmedia.ca";

/** Prefixe de chemin par langue (vide pour le FR, racine du site) */
export const localePrefix: Record<Locale, string> = {
  fr: "",
  en: "/en-ca",
};

export const htmlLang: Record<Locale, string> = {
  fr: "fr-CA",
  en: "en-CA",
};

/** Construit une URL absolue pour une locale + un chemin donne (sans slash de tete) */
export function absoluteUrl(locale: Locale, path: string = ""): string {
  const prefix = localePrefix[locale];
  const cleanPath = path ? `/${path.replace(/^\/+/, "")}` : "";
  return `${siteUrl}${prefix}${cleanPath}` || siteUrl;
}
