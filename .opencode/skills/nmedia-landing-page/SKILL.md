---
name: nmedia-landing-page
description: Créer une nouvelle landing page bilingue (FR + EN) sur le site Nmédia en composant des sections typées réutilisées du catalogue existant — jamais de JSX ni de classes Tailwind écrites à la main. Utiliser quand on demande de créer, générer ou publier une page d'atterrissage, une page promotionnelle ou une nouvelle page de contenu sur le site nmedia-nextjs.
license: MIT
compatibility: opencode
metadata:
  project: nmedia-nextjs
  type: workflow
---

# Créer une landing page Nmédia

## Principe fondamental

Une landing page est une **composition de données**, jamais du code. Le
fichier de contenu (`src/content/landings/<slug>.ts`) ne contient que des
objets TypeScript — aucun JSX, aucune classe Tailwind, aucun appel à
`assetPath()`. Tout le rendu visuel est déjà écrit une fois pour toutes dans
`src/components/pages/LandingPageView.tsx`.

**Pourquoi** : ça élimine structurellement les 6 pièges du design system
(voir skill `nmedia-design-system`) — un agent qui ne fait que remplir des
données ne peut pas oublier `assetPath()`, ni écrire un lien sans
`no-underline`, ni se tromper d'échelle d'espacement.

Charger le skill `nmedia-design-system` avant de rédiger le contenu, pour
connaître la palette, la typographie et le ton de marque (`@DESIGN.md`).

## Catalogue des 10 types de section

Chaque section correspond à un pattern visuel déjà présent sur le site.
Référence complète des props : `src/content/types.ts` (types
`Landing*Section`). Exemple exécutable de chacun : `references/exemple-complet.ts`.

| Type | Rendu | Usage typique |
|---|---|---|
| `hero` | Bannière noire plein écran (`Banner`) — **toujours la 1ère section** | Ouverture de page |
| `richText` | Contenu éditorial libre (`.rte`) | Paragraphes, listes, citations |
| `beigeSection` | Fond beige, titre + paragraphes | Explication courte (1-3 paragraphes) |
| `goldCard` | Carte dorée 2 colonnes + grain | Message à forte valeur — 1 max par page |
| `featureGrid` | Grille 2 col. de cartes beige cliquables | Liste d'offres/approches |
| `cardGrid` | Grille de vignettes `Card` (projets/articles) | Mise en avant de contenu existant |
| `ctaBand` | Bandeau doré pleine largeur + photo | Appel à l'action fort — 1 max par page |
| `highlightCard` | Carte noire arrondie + photo | Mise en avant secondaire (recrutement…) |
| `partners` | Bandeau de logos défilant | Preuve sociale |
| `ctaZone` | Zone beige centrée | **Toujours la dernière section** |

## Workflow

1. **Choisir un slug FR et EN**, distincts, en minuscules avec tirets.
   Slugs **interdits** (collision avec une route existante) : `en-ca`,
   `services`, `projets`, `blogue`, `nous-joindre`, `api`.
2. **Copier `references/exemple-complet.ts`** vers
   `src/content/landings/<slug-fr>.ts`, renommer l'export, adapter `id`,
   `slug`, et rédiger le contenu réel — **en français ET en anglais**, les
   deux objets `fr`/`en` doivent avoir le même nombre de sections dans le
   même ordre.
3. **Choisir les images** parmi celles déjà disponibles
   (`.opencode/skills/nmedia-design-system/references/images.md`). Si aucune
   ne convient, informer l'utilisateur qu'un nouvel asset doit être déposé
   dans `public/images/` avant de continuer — ne jamais inventer un chemin
   d'image qui n'existe pas.
4. **Enregistrer la landing** : dans `src/content/landings/index.ts`,
   ajouter l'import et l'entrée dans le tableau `landings`. C'est la seule
   modification de code nécessaire — aucun fichier de route à créer (les
   routes `src/app/(fr)/[landing]/page.tsx` et
   `src/app/en-ca/[landing]/page.tsx` génèrent automatiquement les pages via
   `generateStaticParams`).
5. **Vérifier** : charger le skill `nmedia-publish` et exécuter sa procédure
   de validation (`/verify`) avant de proposer la publication.

## Règles de contenu

- **Bilingue systématique.** Toute landing page a une version FR et une
  version EN complètes — jamais une seule langue.
- **Une page commence toujours par `hero`.** Le header étant `position:
  fixed`, une page sans bannière verrait son contenu passer sous le menu.
- **Une page se termine généralement par `ctaZone`** — c'est le pattern de
  clôture de toutes les pages Service/Projet existantes.
- **Au plus une `goldCard` et une `ctaBand` par page** — ce sont des
  éléments de mise en avant forte, leur répétition dilue leur impact.
- **Le ton est sobre et professionnel**, jamais promotionnel/criard — voir
  `@DESIGN.md` section "Overview".
- **Ne jamais halluciner un `href` de page inexistante.** Les routes
  internes valides sont : `/`, `/en-ca`, `/nous-joindre`,
  `/en-ca/contact-us`, `/services/developpement-sur-mesure`,
  `/en-ca/services/devops`, `/projets/moi-programme-de-fidelisation-de-metro`,
  `/en-ca/projects/moi-metro-s-loyalty-program`, les articles de
  `src/content/blog/registry.ts`, et toute autre landing déjà enregistrée.
  `/services`, `/projets`, `/blogue` (sans slug) ne sont **pas** des pages
  réelles aujourd'hui (liens de navigation non implémentés) — ne pas les
  utiliser comme cible de lien sans vérifier au préalable.

## Ajouter un nouveau type de section

Le catalogue ci-dessus est volontairement fermé. S'il ne couvre pas un
besoin de design (page radicalement différente), suivre cette procédure —
qui nécessite d'écrire du code, pas seulement du contenu :

1. Définir la nouvelle interface `Landing<Nom>Section` dans
   `src/content/types.ts`, l'ajouter à l'union `LandingSection`.
2. Ajouter le `case` correspondant dans le `switch` de
   `LandingSectionRenderer` (`src/components/pages/LandingPageView.tsx`) —
   respecter `@DESIGN.md` pour les couleurs/espacements/typographie.
3. Documenter le nouveau type dans le tableau ci-dessus et ajouter un
   exemple dans `references/exemple-complet.ts`.
4. Le vérificateur `never` en fin de `switch` fait échouer la compilation
   TypeScript si l'union n'est pas gérée exhaustivement — s'y fier pour ne
   rien oublier.

## Pièges à ne pas réintroduire

Ces pièges sont déjà neutralisés par `LandingPageView.tsx` — ne les
contourne jamais en écrivant du JSX à la main dans un fichier de contenu :

- Images de `/public` sans `assetPath()`.
- Liens qui doivent ressembler à un bouton sans `no-underline`.
- Classes d'espacement Tailwind par défaut (`p-4` = 4px ici, pas 1rem).
- Breakpoints `tablet:`/`mobile:` confondus avec `lg:`/`md:` (sens inversé).

Détail complet : `.opencode/skills/nmedia-design-system/SKILL.md`.
