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

/** Partenaire affiche dans le bandeau defilant (PartnersMarquee). */
export interface Partner {
  name: string;
  logo: string;
  /** Annee de debut de la relation, affichee "Depuis AAAA" sur la carte */
  since: string;
}

// ---------------------------------------------------------------------------
// Landing pages — sections typees composees
//
// Une landing page est une composition ordonnee de sections tirees d'un
// catalogue ferme, chacune mappee 1:1 sur un pattern visuel deja existant
// sur le site (voir DESIGN.md et LandingPageView.tsx pour le rendu). Ce
// choix garantit qu'une page generee par un agent IA ne peut pas deriver du
// design : aucune section ne produit de JSX libre.
//
// Pour ajouter un NOUVEAU type de section (design inedit non couvert
// ci-dessous), voir la procedure documentee dans
// .opencode/skills/nmedia-landing-page/SKILL.md.
// ---------------------------------------------------------------------------

/** Bannière d'ouverture — Banner.tsx. `size: "default"` = hero pleine hauteur (accueil), `size: "small"` = bannière standard (toute autre page). */
export interface LandingHeroSection {
  type: "hero";
  size?: "default" | "small";
  image: string;
  imageAlt?: string;
  breadcrumbLabel?: string;
  breadcrumbHref?: string;
  title: string;
  /** Segment du titre mis en évidence, rendu en <strong className="text-primary"> */
  titleHighlight?: string;
  text?: string;
  cta?: { text: string; href: string };
}

/** Contenu éditorial libre (paragraphes, listes, citations) — rendu dans .rte. bodyHtml est injecté via dangerouslySetInnerHTML, comme ProjectLocaleContent.body. */
export interface LandingRichTextSection {
  type: "richText";
  title?: string;
  bodyHtml: string;
}

/** Section pleine largeur sur fond beige — titre + paragraphes, pattern "6 lignes de services" de l'accueil. */
export interface LandingBeigeSection {
  type: "beigeSection";
  title: string;
  paragraphs: string[];
}

/** Carte dorée deux colonnes avec grain — GoldCard.tsx, pattern "expertise IA" de l'accueil. */
export interface LandingGoldCardSection {
  type: "goldCard";
  image: string;
  imageAlt: string;
  title: string;
  paragraphs: string[];
  linkText?: string;
  linkHref?: string;
}

/** Grille de cartes beige cliquables — pattern "approche"/"support" de ServicePageView. */
export interface LandingFeatureGridSection {
  type: "featureGrid";
  title: string;
  items: { title: string; text: string; href?: string }[];
}

/** Grille de vignettes Card (2 colonnes max) — pattern "projets vedettes"/"blogue" de l'accueil. */
export interface LandingCardGridSection {
  type: "cardGrid";
  title: string;
  text?: string;
  seeAllCta?: { text: string; href: string };
  cards: CardLink[];
}

/** Bandeau doré pleine largeur avec photo — pattern CTA "Optimisez votre entreprise" de l'accueil. */
export interface LandingCtaBandSection {
  type: "ctaBand";
  title: string;
  text: string;
  btn1: { text: string; href: string };
  btn2?: { text: string; href: string };
  image: string;
  imageAlt: string;
}

/** Zone CTA beige centrée — CtaZone.tsx, pattern de fin de page (Service/Project). */
export interface LandingCtaZoneSection {
  type: "ctaZone";
  title: string;
  text: string;
  btn1: { text: string; href: string };
  btn2?: { text: string; href: string };
}

/** Carte noire arrondie avec photo — pattern "carrière" de l'accueil. */
export interface LandingHighlightCardSection {
  type: "highlightCard";
  title: string;
  text: string;
  cta?: { text: string; href: string };
  image: string;
  imageAlt: string;
}

/** Bandeau de logos partenaires défilant — PartnersMarquee.tsx. */
export interface LandingPartnersSection {
  type: "partners";
  title: string;
  partners: Partner[];
}

/**
 * Union discriminée sur `type`. LandingPageView.tsx fait le mapping
 * exhaustif section -> composant. Catalogue complet et exemples :
 * .opencode/skills/nmedia-landing-page/SKILL.md.
 */
export type LandingSection =
  | LandingHeroSection
  | LandingRichTextSection
  | LandingBeigeSection
  | LandingGoldCardSection
  | LandingFeatureGridSection
  | LandingCardGridSection
  | LandingCtaBandSection
  | LandingCtaZoneSection
  | LandingHighlightCardSection
  | LandingPartnersSection;

export interface LandingLocaleContent {
  seo: SeoMeta;
  sections: LandingSection[];
}

export interface LandingContent {
  id: string;
  slug: LocalizedSlug;
  fr: LandingLocaleContent;
  en: LandingLocaleContent;
}
