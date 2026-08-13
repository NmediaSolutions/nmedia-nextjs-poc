# Catalogue des composants réutilisables

Résumé Server/Client : seuls `layout/Header.tsx`, `sections/ContactForm.tsx`
et `sections/Recaptcha.tsx` portent `"use client"`. Tous les autres sont des
Server Components. Pattern systématique :
`export default function Nom({ … }: { … })` — props inlinées, jamais
d'`interface Props` nommée.

## `src/components/sections/Banner.tsx` — Server Component

```ts
export default function Banner({
  image, imageAlt = "", breadcrumbLabel, breadcrumbHref, size = "small", children,
}: {
  image: string;
  imageAlt?: string;
  breadcrumbLabel?: string;
  breadcrumbHref?: string;
  size?: "default" | "small";
  children: ReactNode;
})
```

Bannière plein écran fond noir (`#1E1B16`), motif décoratif en haut à
gauche, texture photo ancrée en haut à droite sur 42% de largeur (masquée en
`tablet:hidden`). `size="default"` = hero d'accueil (980px) ; `size="small"`
(défaut) = toute autre page (360px). Le fil d'Ariane ne s'affiche que si
`breadcrumbLabel` **et** `breadcrumbHref` sont tous les deux fournis.
`image` passe par `assetPath()` en interne — fournir le chemin brut.

```tsx
<Banner image="/images/texture-contact.jpg">
  <h1 className="text-white mb-0">{c.title}</h1>
</Banner>

<Banner image="/images/texture-home.jpg" size="default">
  <h1 className="hero-title text-white max-w-[820px] mb-28">…</h1>
</Banner>
```

## `src/components/sections/Card.tsx` — Server Component

```ts
export default function Card({ card, priority = false }: { card: HomeCard; priority?: boolean })
```

Vignette cliquable — image ratio 3:2, zoom au survol, encoche noire 96×96
débordant en bas à droite, eyebrow + titre Bitter + tag optionnel.
`card.image` passe par `assetPath()` en interne.

```tsx
<div className="grid grid-cols-1 gap-96 md:grid-cols-2 tablet:gap-64">
  {content.featuredProjects.map((project, i) => (
    <Card key={project.href} card={project} priority={i === 0} />
  ))}
</div>
```

## `src/components/sections/CtaZone.tsx` — Server Component

```ts
export default function CtaZone({
  title, text, btn1, btn2,
}: {
  title: string;
  text: string;
  btn1: { text: string; href: string };
  btn2?: { text: string; href: string };
})
```

Section `bg-beige` centrée (`max-w-reduced mx-auto`) — titre, paragraphe,
1-2 boutons (`btn1` = `btn-primary`, `btn2` = `btn-outline`).

## `src/components/sections/GoldCard.tsx` — Server Component

```ts
export default function GoldCard({
  image, imageAlt, children,
}: { image: string; imageAlt: string; children: ReactNode })
```

Toutes les props requises. Carte dorée (`.grain`) 2 colonnes — texte à
gauche (`children`), photo teintée or (`mix-blend-multiply`) à droite.
`image` passe par `assetPath()` en interne.

## `src/components/sections/PartnersMarquee.tsx` — Server Component

```ts
export default function PartnersMarquee({
  partners, locale,
}: { partners: Partner[]; locale: Locale })
```

Bandeau défilant continu (40s, `prefers-reduced-motion` respecté) de cartes
blanches 275×183 — logo + "Depuis/Since AAAA". `p.logo` passe par
`assetPath()` en interne.

## `src/components/sections/ContactForm.tsx` — **Client Component**

```ts
export default function ContactForm({
  locale, confirmationHref,
}: { locale: Locale; confirmationHref: string })
```

Formulaire complet (raison de contact, service conditionnel, coordonnées,
message, reCAPTCHA). `POST /api/leads` puis redirection. **Ne fonctionne
pas en export statique GitHub Pages** (route serveur).

## `src/components/sections/Recaptcha.tsx` — **Client Component**

```ts
export default function Recaptcha({
  onVerify, onExpire,
}: { onVerify: (token: string) => void; onExpire: () => void })
```

Widget reCAPTCHA v2 checkbox. Sans `NEXT_PUBLIC_RECAPTCHA_SITE_KEY`, affiche
un encadré d'avertissement à la place.

## `src/components/layout/Header.tsx` — **Client Component**

```ts
export default function Header({ locale }: { locale: Locale })
```

Header `fixed`, transparent puis noir semi-transparent + flou au scroll.
Nav principale, méga-menu Services, sélecteur de langue, bouton contact.
**Toute page doit commencer par un `Banner`** (ou prévoir son propre
padding-top) car le header flotte par-dessus.

## `src/components/layout/Footer.tsx` — Server Component

```ts
export default function Footer({ locale }: { locale: Locale })
```

Pied `bg-black` — logo, liste de services, coordonnées, encart doré,
mentions légales.

## `src/components/ui/Logo.tsx` — Server Component

```ts
export default function Logo({ className }: { className?: string })
```

SVG inline 199×56, `currentColor` pour le wordmark, symbole figé en
`#B78F2B`.

## `src/components/Gtm.tsx` — Server Component

```ts
export default function Gtm()
```

Injecte Google Tag Manager. Retourne `null` sans `NEXT_PUBLIC_GTM_ID`.

## `src/components/pages/ServicePageView.tsx` / `ProjectPageView.tsx` / `BlogPageView.tsx`

Server Components `{ service|project, locale }` / `{ post, locale }` — vues
complètes des pages de contenu existantes (pas utilisées pour une landing
page, qui passe par `LandingPageView.tsx`). Voir leur code source pour le
squelette exact si une page de ce type doit être modifiée.

## `src/components/pages/LandingPageView.tsx`

Voir le skill `nmedia-landing-page` — c'est le renderer générique des
landing pages, à ne jamais contourner par du JSX écrit à la main.
