---
name: nmedia-content
description: Ajouter un nouveau service, projet (étude de cas) ou article de blogue au site Nmédia (nmedia-nextjs), en respectant les registres bilingues FR/EN existants. Utiliser quand on demande d'ajouter un service, un projet, une étude de cas ou un article de blogue — pas pour une landing page (voir le skill nmedia-landing-page pour ça).
license: MIT
compatibility: opencode
metadata:
  project: nmedia-nextjs
  type: workflow
---

# Ajouter du contenu au site Nmédia

Ce skill couvre les 3 types de contenu **déjà routés par des pages
dynamiques existantes** (`[slug]`) — pas les landing pages (voir le skill
`nmedia-landing-page`, qui a son propre registre et son propre modèle de
sections typées).

Charger le skill `nmedia-design-system` (et `@DESIGN.md`) avant de rédiger
du contenu.

## Ajouter un service

1. Créer `src/content/services/<nom>.ts` :
   `export const <nom>Service: ServiceContent = { id, slug: { fr, en }, bannerImage, logoImage, fr: {...}, en: {...} }`
   — types complets dans `src/content/types.ts` (`ServiceContent`,
   `ServiceLocaleContent`, `ServiceBenefit`, `ServiceApproachItem`).
2. L'ajouter au registre `src/content/services/index.ts` (tableau
   `services`).
3. Rien d'autre à faire : la route `src/app/(fr)/services/[slug]/page.tsx`
   et `src/app/en-ca/services/[slug]/page.tsx` génèrent automatiquement les
   deux pages via `generateStaticParams`, et `alternates.ts`/`sitemap.ts`
   dérivent automatiquement leurs entrées du registre.

## Ajouter un projet (étude de cas)

Même procédure que pour un service, avec `src/content/projects/<nom>.ts`
(`ProjectContent`) et le registre `src/content/projects/index.ts`
(tableau `projects`). Le champ `body` (par langue) est du **HTML riche**
injecté via `dangerouslySetInnerHTML` dans `.rte` — paragraphes, citations
(`<blockquote>`), sous-titres, pas de JSX.

## Ajouter un article de blogue

1. Créer deux fichiers MDX, un par langue, dans `src/content/blog/` :
   `<slug>.fr.mdx` et `<slug>.fr.mdx` (convention : `<slug>.<fr|en>.mdx`).
2. Frontmatter YAML obligatoire dans chaque fichier (voir
   `src/lib/blog.ts` → `BlogFrontmatter`) :
   ```yaml
   ---
   id: "identifiant-partage-entre-fr-et-en"
   title: "Titre de l'article"
   category: "Catégorie affichée en badge"
   date: "AAAA-MM-JJ"
   author: "Nom de l'auteur"
   image: "/images/blog/<fichier>.png"
   imageAlt: "Texte alternatif de l'image"
   seoTitle: "Titre SEO"
   seoDescription: "Meta description SEO"
   excerpt: "Résumé court affiché sur la vignette"
   ---
   ```
   Le `id` doit être **identique** entre les deux fichiers fr/en — il relie
   les deux langues via le registre.
3. Choisir une image parmi
   `.opencode/skills/nmedia-design-system/references/images.md`, ou
   demander qu'un nouvel asset soit déposé dans `public/images/blog/`.
4. L'ajouter au registre `src/content/blog/registry.ts` :
   ```ts
   {
     id: "identifiant-partage",
     slug: { fr: "slug-francais", en: "slug-anglais" },
     file: { fr: "<slug>.fr.mdx", en: "<slug>.en.mdx" },
   }
   ```
5. Rien d'autre à faire : routes, alternates et sitemap se mettent à jour
   automatiquement à partir du registre.

## Après tout ajout de contenu

Charger le skill `nmedia-publish` et exécuter sa procédure de validation
(`/verify`) avant de proposer la publication — build serveur, build export
statique (`STATIC_EXPORT=true`), présence des fichiers HTML générés.
