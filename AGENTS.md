<!-- BEGIN:nextjs-agent-rules -->

# This is NOT the Next.js you know

This version has breaking changes — APIs, conventions, and file structure may all differ from your training data. Read the relevant guide in `node_modules/next/dist/docs/` (resolved from this file's directory; in monorepos the `next` package may not be visible from the repo root) before writing any code. Heed deprecation notices.

This block is written and re-added by `next dev` — verify at `node_modules/next/dist/server/lib/generate-agent-files.js`. Removing it from a diff only re-creates the uncommitted change; committing it with your work keeps the tree clean.

<!-- END:nextjs-agent-rules -->

# Nmédia — Site web (Next.js, sans CMS)

Ce fichier oriente tout agent IA (OpenCode ou autre) travaillant sur ce
dépôt. Le bloc ci-dessus est réécrit automatiquement par `next dev` — ne
jamais le supprimer ni le modifier, le committer tel quel s'il réapparaît
dans un diff.

## Ce qu'est ce projet

POC de migration du site web Nmédia (Nuxt 3 + Strapi) vers Next.js 16 (App
Router), contenu intégré directement dans le code source (pas de CMS).
Déployé en export statique sur **GitHub Pages**
(`https://nmediasolutions.github.io/nmedia-nextjs-poc/`), en plus d'un mode
serveur normal (avec formulaire de contact fonctionnel).

## Par où commencer

| Besoin | Charger |
|---|---|
| Comprendre l'identité visuelle (couleurs, typographie, ton) | `@DESIGN.md` |
| Créer une **landing page** | Skill `nmedia-landing-page` |
| Ajouter un **service, projet ou article de blogue** | Skill `nmedia-content` |
| Connaître les **composants réutilisables** et leurs props | Skill `nmedia-design-system` |
| **Publier** un changement (build, PR, mise en ligne) | Skill `nmedia-publish` |

Commandes disponibles : `/landing <description>`, `/verify`, `/publish`,
`/go-live`.

## Les 6 pièges critiques du codebase

Documentés en détail dans
`.opencode/skills/nmedia-design-system/SKILL.md` — à connaître avant toute
modification :

1. **Échelle d'espacement remplacée** — `p-4` = 4px, pas 1rem.
2. **Breakpoints inversés** — `tablet:`/`mobile:` sont `max-width`,
   `lg:`/`md:` restent `min-width`.
3. **Liens dorés + soulignés par défaut** — ajouter `no-underline` sur tout
   lien qui doit ressembler à un bouton.
4. **`assetPath()` obligatoire** sur toute image de `/public` référencée
   par une chaîne littérale — sauf dans les composants qui l'appellent déjà
   en interne (`Banner`, `Card`, `GoldCard`, `PartnersMarquee`).
5. **Titres fluides `clamp()`** — pas de palier fixe par breakpoint.
6. **Alternates FR↔EN dérivés des registres** — toute nouvelle page doit
   passer par un registre de contenu (`landings`, `services`, `projects`,
   `blogRegistry`), jamais une page orpheline.

## Workflow de publication

1. **Créer/modifier** le contenu (`/landing`, ou skill `nmedia-content`).
2. **`/verify`** — build serveur + build export statique
   (`STATIC_EXPORT=true`, reproduit exactement la CI) + vérification du
   préfixage des images.
3. **`/publish`** — pousse une branche `feat/<slug>` et ouvre une Pull
   Request. **Jamais de push direct sur `main`** (bloqué par
   `opencode.json`).
4. Un humain relit et merge le PR.
5. **`/go-live`** — confirme que la page est réellement accessible en
   ligne (HTTP 200), pas seulement que le workflow a réussi.

### Prérequis GitHub CLI

`gh` doit être authentifié pour ouvrir des PR : `gh auth login` — étape
**interactive**, à faire une fois par personne/poste, jamais par un agent.

## Règles générales

- Contenu et communication en français par défaut (le site a une version
  EN, mais les réponses de l'agent restent en français sauf indication
  contraire).
- Réutiliser les composants et sections existants avant d'en créer de
  nouveaux — voir `nmedia-design-system` et `nmedia-landing-page`.
- Ne jamais halluciner un chemin d'image ou une route inexistante — les
  vérifier contre les références des skills.
- Toute nouvelle page est bilingue (FR + EN) par défaut, sauf demande
  explicite contraire.
