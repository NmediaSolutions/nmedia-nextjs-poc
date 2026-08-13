# Inventaire des images disponibles (`public/images/`)

**Règle absolue** : ne jamais référencer un chemin d'image qui n'est pas
dans cette liste. Si aucune image existante ne convient pour une nouvelle
landing page, le dire explicitement à l'utilisateur et demander qu'un
nouvel asset soit déposé dans `public/images/` avant de continuer — ne
jamais inventer un nom de fichier plausible.

Tous les chemins ci-dessous sont des chemins **bruts** (sans `assetPath()`)
— à passer tels quels aux composants qui l'appliquent en interne (`Banner`,
`Card`, `GoldCard`, `PartnersMarquee`) ou à envelopper soi-même avec
`assetPath()` dans du JSX écrit à la main (jamais dans un fichier de
contenu de landing page).

## Textures de bannière (`Banner`, plein écran)

| Chemin | Usage actuel |
|---|---|
| `/images/texture-home.jpg` | Bannière hero de l'accueil (`size="default"`) |
| `/images/texture-contact.jpg` | Bannière de la page "Nous joindre" |
| `/images/services/texture-devops.jpg` | Bannière du service "Développement sur mesure" |
| `/images/pattern-d.png` | Motif décoratif interne de `Banner` (haut-gauche) — ne pas réutiliser ailleurs |

## Illustrations / photos pleine section (`GoldCard`, `ctaBand`, `highlightCard`)

| Chemin | Usage actuel |
|---|---|
| `/images/ai-expertise.png` | Carte dorée "expertise IA" (accueil) |
| `/images/team.jpg` | Bandeau CTA "Optimisez votre entreprise" (accueil) |
| `/images/carriere.webp` | Carte noire "carrière" (accueil) |

## Vignettes de projet (`Card`, `ProjectPageView`)

| Chemin | Usage actuel |
|---|---|
| `/images/projects/moi-metro-thumbnail.jpg` | Vignette + image hero du projet "Moi, Metro" |
| `/images/projects/metro-logo.png` | Logo client dans `ProjectPageView` |
| `/images/projects/circonflexe-pret-pour-bouger.png` | Vignette du projet "Circonflexe" (référencé en accueil, page projet non migrée) |

## Vignettes de blogue (`Card`, `BlogPageView`)

| Chemin | Usage actuel |
|---|---|
| `/images/blog/externalisation-dev-informatique.png` | Article "Avantages de l'externalisation" (FR + EN) |
| `/images/blog/innov-ia-banniere.jpeg` | Référencé en accueil (articles "ROI de l'IA", "Shadow AI" — non migrés) |
| `/images/blog/ux-intuitive-website-design.png` | Référencé en accueil EN (article non migré) |
| `/images/blog/content-strategy-social-media.png` | Référencé en accueil EN (article non migré) |

## Logos partenaires (`PartnersMarquee`, 175×64 `object-contain`)

`/images/partners/abf.png`, `cisolift.png`, `cultures-chez-nous.png`,
`espace-proprio.png`, `genetec.png`, `laferte.png`, `maskatel.png`,
`metro.png`, `montel.png`, `telus.png`, `vaillancourt.png`, `valmetal.png`.

## Services

| Chemin | Usage actuel |
|---|---|
| `/images/services/logo-devops.svg` | Logo du service "Développement sur mesure" |

## Motifs décoratifs non utilisés actuellement

`/images/pattern2.png`, `/images/pattern6.png` — présents dans `/public`
mais non référencés par le code actuel. Ne pas les utiliser sans confirmer
leur pertinence visuelle au préalable (pas documentés dans `@DESIGN.md`).

## Déposer un nouvel asset

1. Format : JPEG/WebP pour les photos, PNG pour les logos/illustrations
   avec transparence, SVG pour les pictos vectoriels.
2. Emplacement : `public/images/` (racine) ou un sous-dossier thématique
   existant (`partners/`, `projects/`, `blog/`, `services/`).
3. Poids : viser < 200 KB pour une photo pleine section, < 10 KB pour un
   logo partenaire (cohérent avec les tailles existantes ci-dessus).
4. Une fois déposé, le référencer par son chemin `/images/…` exact dans le
   contenu — jamais par une URL externe ou un import statique.
