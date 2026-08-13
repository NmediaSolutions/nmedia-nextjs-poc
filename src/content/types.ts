/** Slug independant par langue (le site source n'utilise pas de prefixe generique) */
export interface LocalizedSlug {
  fr: string;
  en: string;
}

export interface SeoMeta {
  title: string;
  description: string;
  ogImage?: string;
}

/**
 * Carte "thumbnail" (projet ou article).
 *
 * Ordre reel dans le site source (.thumbnails-text) :
 *  1. eyebrow (.thumbnails-subtitle) — 13px Rubik MAJUSCULES, gris #969088
 *     -> nom du projet, ou "Auteur / date" pour un article
 *  2. heading (.thumbnails-title)    — 27px Bitter, #4A4640
 *     -> ligne de service pour un projet, ou titre de l'article
 *  3. tag     (.tags, articles seulement) — puce beige, majuscules
 */
export interface CardLink {
  eyebrow: string;
  heading: string;
  tag?: string;
  href: string;
  image: string;
  imageAlt: string;
}

export interface ServiceApproachItem {
  title: string;
  text: string;
  href?: string;
}

export interface ServiceBenefit {
  title: string;
  text: string;
}

export interface ServiceLocaleContent {
  seo: SeoMeta;
  title: string;
  intro: string;
  benefitsTitle: string;
  benefits: ServiceBenefit[];
  approachTitle: string;
  approach: ServiceApproachItem[];
  whatWeDoTitle: string;
  whatWeDo: string[];
  whyUsTitle: string;
  whyUsParagraphs: string[];
  aiTitle: string;
  aiParagraphs: string[];
  aiLinkText: string;
  aiLinkHref: string;
  relatedProjectsTitle: string;
  relatedProjects: CardLink[];
  ctaTitle: string;
  ctaText: string;
}

export interface ServiceContent {
  id: string;
  slug: LocalizedSlug;
  bannerImage: string;
  logoImage: string;
  fr: ServiceLocaleContent;
  en: ServiceLocaleContent;
}

export interface ProjectLocaleContent {
  seo: SeoMeta;
  title: string;
  subtitle: string;
  clientLogo?: string;
  clientLogoAlt?: string;
  clientUrl?: string;
  visitLabel?: string;
  services: { title: string; href: string }[];
  since: string;
  body: string; // HTML riche (paragraphes, citations, sous-titres)
  otherProjectsTitle: string;
  otherProjects: CardLink[];
  ctaTitle: string;
  ctaText: string;
}

export interface ProjectContent {
  id: string;
  slug: LocalizedSlug;
  heroImage: string;
  heroImageAlt: string;
  fr: ProjectLocaleContent;
  en: ProjectLocaleContent;
}

export interface BlogPostMeta {
  id: string;
  slug: LocalizedSlug;
  category: string;
  date: string; // ISO
  author: string;
  image: string;
  imageAlt: string;
  seo: SeoMeta;
  title: string;
  excerpt: string;
}
