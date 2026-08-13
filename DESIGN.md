---
version: alpha
name: Nmedia
description: >
  Identité visuelle d'une agence numérique québécoise (25+ ans, 90
  spécialistes) bâtie sur un contraste noir encré / or chaud. Le noir
  (#1E1B16, jamais un noir pur) sert de fond aux bannières plein écran et aux
  bandeaux de mise en avant ; l'or (#B78F2B) est réservé aux appels à
  l'action, aux liens et aux accents. Les titres sont composés en Bitter
  (serif) à graisse normale et tailles fluides ; le corps de texte en Rubik
  (sans-serif) 18px. Le système est résolument PLAT — aucune ombre portée
  nulle part — la profondeur vient d'un grain SVG en surimpression, de modes
  de fusion (multiply, color) et de géométries qui se chevauchent (encoche
  noire débordant sous les vignettes, texture photo ancrée en haut à droite
  des bannières). Alternance de sections blanches et beige (#F7F5F2) sur
  fond blanc, gouttière fluide sans largeur maximale.
colors:
  primary: "#B78F2B"
  primary-hover: "#8C6E21"
  black: "#1E1B16"
  text: "#4A4640"
  text2: "#FBF9F7"
  label: "#969088"
  beige: "#F7F5F2"
  tabSelected: "#EEECEA"
  border: "#CFCFD3"
  grey-1: "#ACACA8"
  grey-2: "#8C8C88"
  grey-3: "#7C7C7C"
  grey-4: "#61615D"
  grey-5: "#373733"
  valid: "#27D086"
  valid-hover: "#17784E"
  warning: "#FF8F4F"
  warning-hover: "#E65400"
  error: "#E9594C"
  error-hover: "#B61111"
typography:
  h1:
    fontFamily: "Bitter, serif"
    fontSize: 67.34px
    fontWeight: 400
    lineHeight: 1.15
  h1-strong:
    fontFamily: "Bitter, serif"
    fontSize: 67.34px
    fontWeight: 400
    lineHeight: 1.15
  h2:
    fontFamily: "Bitter, serif"
    fontSize: 50.52px
    fontWeight: 400
    lineHeight: 1.15
  h3:
    fontFamily: "Bitter, serif"
    fontSize: 37.9px
    fontWeight: 400
    lineHeight: 1.15
  hero-title:
    fontFamily: "Bitter, serif"
    fontSize: 67.34px
    fontWeight: 400
    lineHeight: 1.15
  body:
    fontFamily: "Rubik, sans-serif"
    fontSize: 18px
    fontWeight: 400
    lineHeight: 1.6
  body-sm:
    fontFamily: "Rubik, sans-serif"
    fontSize: 14px
    fontWeight: 400
    lineHeight: 1.6
  eyebrow:
    fontFamily: "Rubik, sans-serif"
    fontSize: 16px
    fontWeight: 400
    letterSpacing: 0.08em
  card-heading:
    fontFamily: "Bitter, serif"
    fontSize: 37.9px
    fontWeight: 400
    lineHeight: 1.15
  quote:
    fontFamily: "Rubik, sans-serif"
    fontSize: 28.43px
    fontWeight: 400
    lineHeight: 1.6
  button:
    fontFamily: "Rubik, sans-serif"
    fontSize: 16px
    fontWeight: 600
    lineHeight: 1
rounded:
  DEFAULT: 4px
  md: 8px
  pill: 9999px
spacing:
  "0": 0px
  px: 1px
  "4": 4px
  "8": 8px
  "10": 10px
  "12": 12px
  "16": 16px
  "20": 20px
  "24": 24px
  "28": 28px
  "32": 32px
  "36": 36px
  "44": 44px
  "48": 48px
  "64": 64px
  "72": 72px
  "90": 90px
  "96": 96px
  "104": 104px
  "120": 120px
components:
  btn:
    backgroundColor: "{colors.black}"
    textColor: "#FFFFFF"
    typography: "{typography.button}"
    rounded: "{rounded.DEFAULT}"
    padding: 14px 16px
  btn-primary:
    backgroundColor: "{colors.primary}"
    textColor: "#FFFFFF"
    typography: "{typography.button}"
    rounded: "{rounded.DEFAULT}"
    padding: 14px 16px
  btn-primary-hover:
    backgroundColor: "{colors.primary-hover}"
    textColor: "#FFFFFF"
    typography: "{typography.button}"
    rounded: "{rounded.DEFAULT}"
    padding: 14px 16px
  btn-outline:
    backgroundColor: transparent
    textColor: "{colors.primary}"
    typography: "{typography.button}"
    rounded: "{rounded.DEFAULT}"
    padding: 12px 14px
  btn-big:
    backgroundColor: "{colors.primary}"
    textColor: "#FFFFFF"
    typography: "{typography.button}"
    rounded: "{rounded.DEFAULT}"
    padding: 21px 20px
  card-thumbnail:
    backgroundColor: transparent
    textColor: "{colors.text}"
    typography: "{typography.card-heading}"
    rounded: "{rounded.md}"
    padding: 0px
  card-gold:
    backgroundColor: "{colors.primary}"
    textColor: "#FFFFFF"
    typography: "{typography.body}"
    rounded: "{rounded.md}"
    padding: 120px 90px 90px
  card-feature:
    backgroundColor: "{colors.beige}"
    textColor: "{colors.text}"
    typography: "{typography.body}"
    rounded: "{rounded.md}"
    padding: 24px
  card-highlight-dark:
    backgroundColor: "{colors.black}"
    textColor: "#FFFFFF"
    typography: "{typography.body}"
    rounded: "{rounded.md}"
    padding: 72px
  banner-hero:
    backgroundColor: "{colors.black}"
    textColor: "#FFFFFF"
    typography: "{typography.hero-title}"
    rounded: "{rounded.DEFAULT}"
    padding: 192px 0px 64px
  banner-small:
    backgroundColor: "{colors.black}"
    textColor: "#FFFFFF"
    typography: "{typography.h1}"
    rounded: "{rounded.DEFAULT}"
    padding: 144px 0px 0px
  cta-zone:
    backgroundColor: "{colors.beige}"
    textColor: "{colors.text}"
    typography: "{typography.body}"
    rounded: "{rounded.DEFAULT}"
    padding: 96px 0px
  tag-pill:
    backgroundColor: "{colors.tabSelected}"
    textColor: "{colors.black}"
    typography: "{typography.eyebrow}"
    rounded: "{rounded.DEFAULT}"
    padding: 12px 12px
  text-input:
    backgroundColor: "#FFFFFF"
    textColor: "{colors.text}"
    typography: "{typography.body-sm}"
    rounded: "{rounded.DEFAULT}"
    padding: 12px 16px
  footer-box:
    backgroundColor: "{colors.primary}"
    textColor: "#FFFFFF"
    typography: "{typography.body-sm}"
    rounded: "{rounded.md}"
    padding: 24px
  footer-link:
    backgroundColor: "{colors.black}"
    textColor: "{colors.grey-1}"
    typography: "{typography.body-sm}"
    rounded: "{rounded.DEFAULT}"
    padding: 0px
  form-dev-notice:
    backgroundColor: transparent
    textColor: "{colors.warning}"
    typography: "{typography.body-sm}"
    rounded: "{rounded.DEFAULT}"
    padding: 12px 12px
  eyebrow-label:
    backgroundColor: transparent
    textColor: "{colors.label}"
    typography: "{typography.eyebrow}"
    rounded: "{rounded.DEFAULT}"
    padding: 0px
---

# Nmédia — Design System

## Overview

Nmédia est une agence numérique québécoise (Drummondville) qui positionne son
site comme une vitrine d'expertise sobre et haut de gamme, pas comme un
catalogue commercial bruyant. Le ton visuel est **confiant et posé** : de
grands aplats noirs et dorés, beaucoup d'espace blanc, une typographie serif
éditoriale pour les titres et une seule couleur d'accent utilisée avec
parcimonie.

**Caractéristiques clés :**
- **Contraste noir encré / or chaud.** `{colors.black}` (`#1E1B16`, jamais un
  noir pur) structure les bannières plein écran et les blocs de mise en
  avant ; `{colors.primary}` (`#B78F2B`) est réservée aux CTA, aux liens et
  aux petits accents — jamais une couleur de fond de section pleine largeur
  hors carte dédiée.
- **Alternance blanc / beige.** Les sections de contenu alternent entre fond
  blanc et `{colors.beige}` (`#F7F5F2`) pour rythmer la page sans jamais
  utiliser de bordures ou de séparateurs visibles.
- **Aucune ombre portée.** Le système est plat par choix — voir "Elevation &
  Depth" pour les mécanismes de profondeur réellement employés.
- **Bannière signature.** Chaque page interne s'ouvre sur une bannière noire
  plein écran avec un motif décoratif en haut à gauche et une texture
  photographique désaturée ancrée en haut à droite (voir "Components —
  Signature Components").
- **Titres serif fluides.** Bitter en graisse 400 uniquement, jamais en gras
  — l'emphase se fait par la couleur (`{colors.primary}`), pas par le poids.
- **Grain de bruit sur les aplats.** Les fonds dorés et noirs pleine largeur
  reçoivent un bruit SVG subtil en surimpression (`mix-blend-mode: overlay`,
  opacité 18%) qui casse la platitude du digital.

## Colors

### Brand & Accent
- **Or** (`{colors.primary}` - `#B78F2B`) : couleur d'action unique du site —
  boutons pleins, liens, symbole du logo, emphase dans les titres
  (`<strong>`). Ne jamais l'utiliser comme fond de section pleine largeur.
- **Or (survol)** (`{colors.primary-hover}` - `#8C6E21`) : état hover des
  boutons et liens dorés.

### Surface
- **Noir encré** (`{colors.black}` - `#1E1B16`) : fond des bannières, des
  boutons par défaut (`.btn`), du footer et des cartes de mise en avant.
  **Jamais `#000000` pur** — c'est un noir chaud, légèrement brun.
- **Beige** (`{colors.beige}` - `#F7F5F2`) : fond de section alterné,
  toujours en pleine largeur (jamais en carte isolée).
- **Puce sélectionnée** (`{colors.tabSelected}` - `#EEECEA`) : fond des
  étiquettes de catégorie sur les vignettes d'articles.
- **Bordure** (`{colors.border}` - `#CFCFD3`) : unique couleur de bordure du
  site, utilisée avec parcimonie (champs de formulaire, séparateurs de
  métadonnées).

### Text
- **Texte** (`{colors.text}` - `#4A4640`) : couleur de texte par défaut sur
  fond clair — jamais de noir pur non plus pour le texte courant.
- **Label** (`{colors.label}` - `#969088`) : texte secondaire — eyebrow des
  vignettes, mentions "Depuis AAAA", légendes.
- **Gris 1 à 5** (`{colors.grey-1}` `#ACACA8` → `{colors.grey-5}` `#373733`) :
  échelle de gris utilitaire. Seul `grey-1` est actuellement consommé
  (`{footer-link}` — liens et texte du footer sur fond noir) ; `grey-2` à
  `grey-5` sont **réservés** dans le thème Tailwind pour de futurs états
  (séparateurs, désactivé, texte tertiaire) sans usage réel dans l'UI
  actuelle.
- **Texte inversé** (`{colors.text2}` - `#FBF9F7`) : réservé pour du texte
  sur fond très sombre en dehors du blanc pur ; non consommé par l'UI
  actuelle.

### Semantic
- **Avertissement** (`{colors.warning}` - `#FF8F4F`, survol
  `{colors.warning-hover}` - `#E65400`) : messages d'avertissement non
  bloquants — seul usage actuel : `{form-dev-notice}` (reCAPTCHA non
  configuré en développement).
- **Validation** (`{colors.valid}` - `#27D086`, survol `{colors.valid-hover}`
  - `#17784E`) et **Erreur** (`{colors.error}` - `#E9594C`, survol
  `{colors.error-hover}` - `#B61111`) : réservées pour les retours de
  validation de formulaire (succès/échec) — déclarées dans le thème mais pas
  encore câblées à un état réel du `ContactForm`.

## Typography

### Font Family
- **Bitter** (serif) — tous les titres (`h1`, `h2`, `h3`), toujours à
  graisse **400** (normale). Ne jamais mettre un titre en gras : l'emphase
  se fait par la couleur, pas par le poids.
- **Rubik** (sans-serif) — corps de texte, boutons, libellés, formulaires.

### Hierarchy

| Token | Taille | Graisse | Usage |
|---|---|---|---|
| `{typography.h1}` | 67.34px | 400 | Titre de page (dans une bannière, toujours blanc) |
| `{typography.hero-title}` | 67.34px (fluide 28→67px) | 400 | Titre du hero d'accueil uniquement |
| `{typography.h2}` | 50.52px (fluide 38→51px) | 400 | Titre de section |
| `{typography.h3}` | 37.9px (fluide 21→38px) | 400 | Sous-titre de section, titre de vignette |
| `{typography.card-heading}` | 37.9px (fluide 21→38px) | 400 | Titre des vignettes `Card` |
| `{typography.body}` | 18px | 400 | Corps de texte par défaut |
| `{typography.body-sm}` | 14px | 400 | Métadonnées, légendes, notes |
| `{typography.eyebrow}` | 16px | 400 | Sur-titre en majuscules (nom de projet, catégorie) |
| `{typography.quote}` | 28.43px | 400 | Citations dans le contenu riche (`.rte blockquote`) |
| `{typography.button}` | 16px | **600** | Seul rôle typographique en semi-gras du système |

### Principles
- **Bitter est toujours en graisse 400.** Les tailles `h1`/`h2`/`h3` sont
  **fluides** en production (`clamp()` CSS : `h2` va de 37.9px à 50.52px
  selon la largeur du viewport, `h3` de 21.3px à 37.9px, `hero-title` de
  28.43px à 67.34px) — la valeur du token ci-dessus est la taille maximale
  (desktop large). Voir "Responsive Behavior" pour le détail du clamp.
- **`<strong>` dans un `h1` devient doré, jamais gras** —
  `color: {colors.primary}; font-weight: 400`. C'est le seul mécanisme
  d'emphase typographique du site.
- **Tous les titres portent une marge basse de 28px** par défaut
  (surchargeable au cas par cas, ex. `mb-0` dans une bannière).
- **Tous les liens sont dorés et soulignés par défaut**
  (`color: {colors.primary}; text-decoration: underline`), y compris à
  l'intérieur du contenu riche (`.rte`). Un lien qui doit ressembler à un
  bouton ou à un élément de navigation doit explicitement retirer ce style.

## Layout

### Spacing System
L'échelle d'espacement du site **n'est pas** l'échelle Tailwind par défaut —
c'est une échelle personnalisée en pixels réels (`{spacing.4}` = 4px,
`{spacing.96}` = 96px, etc., voir le token `spacing` ci-dessus). Les valeurs
absentes de l'échelle (40px, 56px, 80px, 152px, 192px…) sont exprimées au cas
par cas plutôt que d'être ajoutées à l'échelle globale.

### Grid & Container
- **Gouttière fluide, pas de largeur maximale.** Le conteneur horizontal
  standard applique un padding de `6.25vw` de chaque côté et **ne limite
  jamais la largeur du contenu** — à 1920px de large, la gouttière fait
  120px ; à 768px, elle fait 48px.
- **Largeur de lecture.** Le texte éditorial (articles, corps de service/
  projet) est limité à 1236px de large, centré ou non selon le contexte.
- **Grilles de cartes.** 1 colonne en mobile, 2 colonnes à partir du
  breakpoint desktop (jamais 3+ colonnes — les vignettes du site sont
  toujours grandes et peu nombreuses par rangée).

### Whitespace Philosophy
Les sections utilisent un padding vertical généreux (96px à 120px en
desktop, réduit de moitié en mobile) — le site respire volontairement plus
qu'un site "dense". L'espace blanc est un signal de qualité perçue, pas un
espace à combler.

## Elevation & Depth

Le système **ne définit aucune ombre portée** (`box-shadow`) sur ses
composants signature — un seul usage isolé existe dans tout le site (le
panneau du méga-menu de navigation). La profondeur visuelle est produite par
d'autres mécanismes, à privilégier systématiquement plutôt que d'ajouter des
ombres :

### Decorative Depth
- **Grain de bruit.** Un bruit SVG (`feTurbulence`) est surimposé aux fonds
  pleins dorés et noirs (`mix-blend-mode: overlay`, opacité 18%) — donne une
  texture matière sans dégrader les performances (pas d'image bitmap).
- **Modes de fusion.** `mix-blend-mode: multiply` teinte les photos en or
  sur les cartes dorées ; `mix-blend-mode: color` assombrit la texture
  photo des bannières.
- **Chevauchement géométrique.** Une encoche noire de 96×96px déborde sous
  chaque vignette (coin inférieur droit), et le bloc de texte remonte de
  40px par-dessus le bas de l'image — c'est ce chevauchement qui crée la
  hiérarchie visuelle, pas une ombre.
- **Flou d'arrière-plan.** Le header devient `backdrop-blur` + noir semi-
  transparent au défilement — seul usage de flou du système.
- **Dégradés sombres.** Un dégradé vers le noir en bas des images de
  vignette et sur le bord gauche des textures de bannière assure la
  lisibilité du texte superposé, sans jamais utiliser d'ombre portée.

## Shapes

### Border Radius Scale
Échelle volontairement réduite à deux valeurs :

| Token | Valeur | Usage |
|---|---|---|
| `{rounded.DEFAULT}` | 4px | Boutons |
| `{rounded.md}` | 8px | Cartes, images, encarts |

### Photography Geometry
- **Vignettes (projets, articles) :** ratio 3:2, coins arrondis `{rounded.md}`.
- **Image hero d'article/projet :** ratio 16:9, coins arrondis `{rounded.md}`.
- **Texture de bannière :** ancrée en haut à droite, occupe 42% de la
  largeur, hauteur fixe (768px en bannière hero, 384px en bannière standard),
  masquée sous le breakpoint tablette.
- **Logos partenaires/clients :** toujours en `object-contain` (jamais
  recadrés), fond blanc.

## Components

### Buttons
Trois variantes, toutes en Rubik semi-gras 16px, rayon 4px, transition de
couleur 300ms :
- **`{button-primary-pill}`** — fond `{colors.primary}`, texte blanc. Bouton
  d'action principal du site.
- **`btn`** — fond `{colors.black}`, texte blanc. Bouton secondaire neutre.
- **`btn-outline`** — fond transparent, bordure 2px `{colors.primary}`,
  texte doré. Action secondaire à côté d'un bouton principal.
- Modificateur **`btn-big`** : agrandit le padding (21px/20px) et la taille
  de texte (18px) — se combine à n'importe quelle variante.

### Cards & Containers
- **Vignette (`card-thumbnail`)** — image 3:2 avec encoche noire débordante,
  eyebrow + titre Bitter, tag optionnel. Zoom léger de l'image au survol
  (scale 1.05, 800ms).
- **Carte dorée (`card-gold`)** — pleine largeur, deux colonnes (texte /
  photo teintée or), grain de bruit obligatoire.
- **Carte beige (`card-feature`)** — fond `{colors.beige}`, coins arrondis
  8px, padding 24px — utilisée pour les listes d'approche/support cliquables.
- **Carte noire de mise en avant (`card-highlight-dark`)** — fond
  `{colors.black}`, deux colonnes, grain de bruit — réservée aux sections
  "carrière"/recrutement.

### Inputs & Forms
- Champs texte : fond blanc, bordure `{colors.border}`, rayon 4px.
- États d'erreur : bordure et texte `{colors.error}`.
- Case à cocher de confidentialité obligatoire avant soumission.
- Widget reCAPTCHA v2 checkbox (jamais invisible/v3).
- **`{form-dev-notice}`** — encadré `{colors.warning}` avec bordure 1px de
  la même couleur, affiché uniquement en développement quand reCAPTCHA
  n'est pas configuré.

### Navigation
- Header fixe, transparent puis noir semi-transparent + flou au défilement.
- Sélecteur de langue simple (FR ↔ EN) plutôt qu'un drapeau ou un menu.
- Méga-menu Services à deux colonnes (principaux / complémentaires).

### Pills, Tags, and Chips
- **`{tag-pill}`** — fond `{colors.tabSelected}`, texte noir, majuscules,
  utilisé exclusivement pour la catégorie d'un article de blogue sur sa
  vignette.

### Signature Components
- **Bannière (`banner-hero` / `banner-small`)** — fond noir plein écran,
  motif décoratif en haut à gauche, texture photo ancrée en haut à droite
  sur 42% de largeur avec dégradé sombre. Ouvre systématiquement toute page
  interne. Deux tailles : `default` (hero d'accueil, 980px) et `small`
  (toutes les autres pages, 360px).
- **Bandeau partenaires défilant** — cartes blanches 275×183px en
  défilement continu horizontal (40s, boucle infinie), logo + "Depuis AAAA".
  Respecte `prefers-reduced-motion`.
- **Contenu riche (`.rte`)** — puces rondes dorées 8px (au lieu de puces
  natives), citations dorées italiques 28px, utilisé pour tout contenu
  éditorial (articles MDX, description de projet).

## Do's and Don'ts

### Do
- Réserver `{colors.primary}` aux CTA, liens et petits accents — jamais un
  fond de section pleine largeur.
- Ouvrir chaque page interne sur une bannière noire plein écran
  (`{banner-hero}` ou `{banner-small}`).
- Composer tous les titres en Bitter graisse 400, jamais en gras.
- Utiliser `<strong>` doré (pas gras) pour l'emphase dans un titre.
- Alterner les sections blanc / `{colors.beige}` pour rythmer une page
  longue.
- Appliquer le grain de bruit sur tout aplat doré ou noir pleine largeur.
- Retirer explicitement le soulignement (`no-underline`) sur tout lien qui
  doit ressembler à un bouton ou à un élément de navigation.

### Don't
- Ne jamais utiliser `#000000` pur — toujours `{colors.black}` (`#1E1B16`).
- Ne jamais mettre un titre Bitter en graisse supérieure à 400.
- Ne jamais ajouter d'ombre portée (`box-shadow`) à un composant — utiliser
  le grain, les modes de fusion ou le chevauchement géométrique à la place.
- Ne jamais dépasser deux colonnes dans une grille de vignettes.
- Ne jamais limiter la largeur du conteneur `.wrapper` — seul le contenu
  éditorial (`.reduced`, 1236px) a une largeur maximale.
- Ne jamais introduire une nouvelle couleur d'accent hors de la palette
  documentée ci-dessus.

## Responsive Behavior

### Breakpoints
Le système est **desktop-first** : les breakpoints personnalisés
(`tablet`, `mobile`, `smallDesktop`) sont des media queries `max-width` —
à l'inverse des breakpoints par défaut (`md`, `lg`, `xl`) qui restent
`min-width`. Les deux logiques coexistent dans le même composant.

| Nom | Largeur | Comportement |
|---|---|---|
| `smallDesktop` | ≤ 1400px | Ajustements mineurs de densité |
| `tablet` | ≤ 1024px | Colonnes 2→1, paddings de section divisés par ~2, texture de bannière masquée |
| `mobile` | ≤ 767px | Navigation en menu burger, grilles de partenaires/cartes en 1 colonne |

### Touch Targets
Boutons : hauteur minimale garantie par le padding vertical de 14px (`btn`)
ou 21px (`btn-big`) — jamais réduits sous le breakpoint mobile.

### Collapsing Strategy
- Titres fluides (`clamp()`) : `hero-title` 28.43px → 67.34px, `h2` 37.9px
  → 50.52px, `h3` 21.33px → 37.9px selon la largeur du viewport — pas de
  palier fixe par breakpoint, la taille suit une interpolation continue.
- Grilles de cartes/partenaires : 2 colonnes desktop → 1 colonne mobile.
- Texture photo de bannière : visible ≥ 1025px, masquée en dessous
  (`tablet:hidden`).
- Méga-menu Services : remplacé par un panneau plein écran sous `lg`.

### Image Behavior
Toutes les images passent par `next/image` avec des `sizes` explicites
(ex. `(max-width: 768px) 100vw, 45vw`) — aucun recadrage art-directed, le
même fichier source est simplement redimensionné selon le viewport.

## Implementation Notes — Tailwind (hors norme DESIGN.md)

Cette section n'est pas une section canonique du format DESIGN.md — elle
fait le pont entre les tokens ci-dessus et l'implémentation Tailwind réelle
de ce projet (`tailwind.config.ts`, `src/app/globals.css`).

| Token DESIGN.md | Classe Tailwind du projet |
|---|---|
| `{colors.primary}` | `bg-primary`, `text-primary` |
| `{colors.primary-hover}` | `hover:bg-primary-hover` |
| `{colors.black}` | `bg-black`, `text-black` (**surchargé** : `#1E1B16`, pas `#000`) |
| `{colors.beige}` | `bg-beige` |
| `{colors.text}` | `text-text` (couleur de texte par défaut du `<body>`) |
| `{colors.label}` | `text-label` |
| `{rounded.DEFAULT}` | `rounded` |
| `{rounded.md}` | `rounded-md` |
| `{typography.body}` | classe implicite `<body>` (`font-rubik text-18`) |
| `{typography.h1}` / `h2` / `h3` | styles de base `@layer base` — pas de classe utilitaire à ajouter |
| `btn-primary` | classe composée `.btn-primary` (`@layer components`) |
| `btn-outline` | classe composée `.btn-outline` |
| `btn-big` | modificateur `.btn-big` à combiner avec `.btn`/`.btn-primary`/`.btn-outline` |
| Grain de bruit | classe `.grain` (nécessite un parent `relative`) |
| Gouttière fluide | classe `.wrapper` |
| Largeur de lecture 1236px | classe `.reduced` (= `max-w-reduced`, ne centre pas seule) |
| Contenu riche | classe `.rte` |

**Piège à connaître** : `theme.spacing` est **remplacé**, pas étendu — les
classes `p-4`, `gap-8`, `w-96`… correspondent aux valeurs `{spacing.*}`
ci-dessus (px réels), pas à l'échelle rem par défaut de Tailwind.

Détail complet des composants React (props TypeScript, exemples d'usage) :
voir `.opencode/skills/nmedia-design-system/references/components.md`.
