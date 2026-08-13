---
name: nmedia-design-system
description: Identité visuelle, composants React réutilisables et assets disponibles du site Nmédia (nmedia-nextjs). Utiliser avant de créer ou modifier toute page, composant ou landing page sur ce projet — connaît la palette de couleurs, la typographie, les classes Tailwind personnalisées et les 6 pièges critiques du codebase.
license: MIT
compatibility: opencode
metadata:
  project: nmedia-nextjs
  type: design-reference
---

# Design system Nmédia

## Source de vérité visuelle

**`@DESIGN.md`** (à la racine du projet) est la référence unique pour
l'identité de marque : couleurs, typographie, espacements, rayons,
composants signature, règles de responsive, Do's/Don'ts. Il suit le format
[DESIGN.md](https://github.com/google-labs-code/design.md) — validable avec
`npx @google/design.md lint DESIGN.md`.

**Charger `@DESIGN.md` avant toute décision visuelle.** Ce skill ne duplique
pas son contenu — il fournit deux compléments que le format DESIGN.md ne
couvre pas :

- `references/components.md` — signatures TypeScript des props de chaque
  composant React réutilisable, avec exemples d'usage réels.
- `references/images.md` — inventaire des images déjà disponibles dans
  `public/images/`, pour ne jamais halluciner un chemin qui n'existe pas.

## Les 6 pièges critiques du codebase

Ces comportements sont contre-intuitifs et provoquent des erreurs
silencieuses (le build passe, le rendu est faux) :

| # | Piège | Détail |
|---|---|---|
| 1 | Échelle d'espacement remplacée | `theme.spacing` n'est **pas étendu** mais **remplacé** — `p-4` = 4px (pas 1rem), `gap-8` = 8px, `w-96` = 96px. Valeurs disponibles : 0, px, 4, 8, 10, 12, 16, 20, 24, 28, 32, 36, 44, 48, 64, 72, 90, 96, 104, 120. Une valeur absente (40, 56, 80, 152, 192…) s'exprime en arbitraire : `pt-[192px]`. |
| 2 | Breakpoints inversés | `tablet:`/`mobile:`/`smallDesktop:` sont des `max-width` (s'appliquent aux petits écrans) ; `sm:`/`md:`/`lg:`/`xl:` restent `min-width`. Les deux logiques coexistent dans le même composant — bien vérifier laquelle est utilisée avant de dupliquer un pattern. |
| 3 | Liens dorés par défaut | `@layer base` applique `text-primary underline` à **tous** les `<a>`/`<Link>`. Tout lien qui doit ressembler à un bouton ou à un élément de navigation doit explicitement porter `no-underline` (+ souvent une couleur). |
| 4 | `assetPath()` obligatoire sur `/public` | Next.js ne préfixe **pas** automatiquement le `basePath` (export GitHub Pages) sur un `src` littéral pointant vers `/public`. Voir `src/lib/asset-path.ts`. **Mais** `Banner`, `Card`, `GoldCard`, `PartnersMarquee`, `ServicePageView`, `ProjectPageView`, `BlogPageView` l'appellent déjà en interne — leur passer le chemin brut (`"/images/…"`), jamais `assetPath(...)` en double. |
| 5 | Titres fluides `clamp()` | `h1`/`h2`/`h3`/`.hero-title` ont une taille qui varie en continu selon la largeur du viewport (pas de palier fixe par breakpoint) — voir `@DESIGN.md` section Typography/Responsive. |
| 6 | Alternates FR↔EN | Le sélecteur de langue (`src/lib/alternates.ts`) dérive maintenant automatiquement ses paires des registres de contenu (`services`, `projects`, `blogRegistry`, `landings`) — **toujours passer par un registre** plutôt que de créer une page orpheline, sinon le sélecteur de langue renverra à l'accueil. |

## Composants vs sections de landing page

- Pour une **nouvelle landing page** : ne jamais utiliser ces composants
  directement — passer par le catalogue de sections typées du skill
  `nmedia-landing-page`, qui les orchestre déjà correctement.
- Pour **modifier une page existante** (service, projet, article, contact) :
  ces composants sont utilisés directement dans le JSX de la page — voir
  `references/components.md` pour leurs props exactes.

## Structure du contenu et du routing

- Contenu = objets TypeScript typés dans `src/content/` (pas de CMS).
- Chaque type de contenu localisé sépare les champs communs des champs
  `fr`/`en` (`const c = content[locale]`).
- Deux arborescences de routes racines : `src/app/(fr)/…` (racine du site,
  route group sans segment d'URL) et `src/app/en-ca/…` (préfixe réel). Toute
  nouvelle route statique doit être placée sous l'un des deux — jamais
  directement sous `src/app/`.
- Slugs indépendants par langue (`LocalizedSlug { fr, en }`), pas de préfixe
  générique `/en` devant le même slug.
