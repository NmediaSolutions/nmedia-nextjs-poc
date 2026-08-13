# Nmédia — Site Web (Next.js, sans CMS)

POC de migration du site web actuel (Nuxt 3 + Strapi, repo `siteweb-nmedia`)
vers Next.js 16 (App Router), avec le contenu intégré directement dans le
code source (pas de CMS).

## Portée de ce POC

4 pages, en français et en anglais (slugs indépendants par langue, fidèles
au site source) :

| Page | FR | EN |
|---|---|---|
| Accueil | `/` | `/en-ca` |
| Service (Développement sur mesure) | `/services/developpement-sur-mesure` | `/en-ca/services/devops` |
| Étude de cas (Moi, Metro) | `/projets/moi-programme-de-fidelisation-de-metro` | `/en-ca/projects/moi-metro-s-loyalty-program` |
| Article de blogue | `/blogue/quels-sont-les-avantages-de-l-externalisation-du-developpement-informatique-pour-les-entreprises` | `/en-ca/blog/advantages-of-outsourcing-it-development-for-companies` |
| Contact + confirmation | `/nous-joindre` | `/en-ca/contact-us` |

## Stack

- **Next.js 16** (App Router, Turbopack), **TypeScript**, **Tailwind CSS v3**
- Contenu : objets TypeScript typés (`src/content/`) pour services/projets/nav,
  **MDX** pour les articles de blogue (`src/content/blog/*.mdx`)
- Formulaire de contact : Route Handler (`src/app/api/leads/route.ts`) qui
  reproduit le contrat Dynamics 365 + notification courriel du site source
- reCAPTCHA v2, Google Tag Manager (désactivés par défaut si non configurés)

## Démarrage

```bash
npm install
npm run dev
```

Ouvrir [http://localhost:3000](http://localhost:3000).

## Variables d'environnement

Copier `.env.example` vers `.env.local` et remplir selon les besoins.
**Tout fonctionne sans configuration** : en l'absence de secrets, le
formulaire de contact journalise les leads/courriels dans la console au
lieu d'appeler les vraies API (voir `src/lib/dynamics.ts`, `src/lib/email.ts`,
`src/lib/recaptcha.ts`).

| Variable | Usage |
|---|---|
| `NEXT_PUBLIC_RECAPTCHA_SITE_KEY` / `RECAPTCHA_SECRET_KEY` | Widget reCAPTCHA v2 (nécessite une clé enregistrée pour le nouveau domaine) |
| `DYNAMICS_*` | Création de leads Dynamics 365 (contrat identique au site source) |
| `SMTP_*` | Envoi de la notification courriel (remplace l'endpoint `/api/email` de Strapi) |
| `NEXT_PUBLIC_GTM_ID` | Google Tag Manager |

## Architecture i18n

Contrairement à un i18n classique (préfixe générique `/en` devant le même
slug), **chaque contenu déclare ses deux slugs indépendants** (`fr`/`en`),
fidèlement au site source. Voir :

- `src/content/types.ts` → `LocalizedSlug`
- `src/lib/alternates.ts` → table de correspondance FR ↔ EN (sélecteur de
  langue + `hreflang`)
- Deux arborescences de routes racines : `src/app/(fr)/...` (racine du
  site) et `src/app/en-ca/...` (préfixe `/en-ca`), chacune avec son propre
  `layout.tsx` (pattern Next.js "multiple root layouts")

## Étendre le contenu

Pour ajouter une page (service, projet, article) :

1. Ajouter l'entrée dans le registre correspondant
   (`src/content/services/index.ts`, `src/content/projects/index.ts`,
   `src/content/blog/registry.ts`) avec son `slug: { fr, en }`.
2. Créer le contenu (fichier `.ts` pour service/projet, `.mdx` pour un
   article — un fichier par langue).
3. `generateStaticParams` (déjà en place dans les pages `[slug]`) génère
   automatiquement les routes FR/EN.
4. Le sitemap (`src/app/sitemap.ts`) et le sélecteur de langue
   (`src/lib/alternates.ts`) se mettent à jour automatiquement à partir des
   registres.

## Images

Toutes les images utilisées dans ce POC ont été téléchargées depuis Azure
Blob Storage (production) vers `public/images/` — le site est autonome,
sans dépendance à un stockage externe.

## Fidélité visuelle

La page d'accueil a été reconstruite à partir de mesures relevées au
navigateur sur le site en production (`getComputedStyle`, `getBoundingClientRect`
à 1440px de large), section par section. Structure obtenue :

| Section | Site source | Ce POC |
|---|---|---|
| Bannière (hero) | 980 px | 980 px |
| Expertise IA + 6 lignes | 1472 px | 1434 px |
| Projets vedettes | 1081 px | 1087 px |
| Partenaires | 413 px | 483 px |
| CTA (bandeau doré) | 638 px | 615 px |
| Carrière (carte noire) | 574 px | 559 px (hors marges de section) |
| Blogue | 999 px | 999 px |

### Équivalences assumées (non identiques au pixel)

Deux éléments du site source ne sont pas reproductibles à l'identique et ont
été remplacés par un équivalent fonctionnel, documenté ici :

1. **Grain des fonds pleins** (classe `.grain`) — le site source applique une
   tuile JPEG de bruit inlinée dans son bundle (donc non téléchargeable). Elle
   est remplacée par un bruit SVG `feTurbulence`. Le bruit étant stochastique,
   le rendu est visuellement indiscernable.
2. **Carrousel de partenaires** — le site source utilise un carrousel JS avec
   flèches de navigation ; ce POC utilise un défilement continu en CSS
   (`.marquee`), sans dépendance JS et respectant `prefers-reduced-motion`.

## Hors scope de ce POC

- Les ~146 autres pages du site (services complémentaires, ~39 autres
  études de cas, ~54 autres articles) — à migrer par section une fois le
  POC validé.
- Création du nouveau dépôt Git dédié (travail actuellement local, sans
  dépôt).
- Hébergement/déploiement cible.
