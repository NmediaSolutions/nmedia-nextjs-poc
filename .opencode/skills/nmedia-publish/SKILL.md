---
name: nmedia-publish
description: Valider, pousser et confirmer la publication en ligne d'un changement sur le site Nmédia (nmedia-nextjs) — build serveur, build export statique GitHub Pages, ouverture d'une Pull Request, puis vérification post-merge que la page est réellement accessible en ligne. Utiliser après avoir créé ou modifié une landing page, un service, un projet ou un article de blogue, ou quand on demande de publier/déployer/mettre en ligne un changement.
license: MIT
compatibility: opencode
metadata:
  project: nmedia-nextjs
  type: workflow
---

# Publier un changement sur le site Nmédia

Ce projet se déploie sur **GitHub Pages** (export statique Next.js) via le
workflow `.github/workflows/deploy-pages.yml`, déclenché sur push vers
`main`. La publication se fait toujours par **branche + Pull Request** —
jamais de push direct sur `main` (bloqué par `opencode.json`).

Trois commandes séquentielles : `/verify` (local, sans risque) → `/publish`
(pousse une branche + ouvre un PR) → `/go-live` (après le merge humain,
confirme la mise en ligne réelle).

## Prérequis (une seule fois par poste de travail)

`gh` doit être installé et authentifié :

```powershell
gh auth status
```

S'il répond "not logged in", exécuter `gh auth login` — c'est une étape
**interactive obligatoire pour l'humain**, un agent ne doit jamais tenter de
la contourner ou de fournir des identifiants.

## Étape 1 — `/verify` (validation locale)

Reproduit exactement ce que fait la CI, avant tout commit.

```powershell
# 1. Build serveur normal (doit passer sans erreur TypeScript/lint)
npm run build

# 2. Build export statique — LE vrai garde-fou, reproduit la CI à l'identique
$env:STATIC_EXPORT="true"; npm run build; Remove-Item Env:\STATIC_EXPORT
```

Si l'étape 2 échoue avec `dynamic = "force-static"/export const revalidate
not configured`, une route/metadata route (ex. un nouveau `robots.ts` ou
`sitemap.ts`) doit ajouter `export const dynamic = "force-static";`.

Si l'étape 2 échoue avec `Page "/[landing]" returned an empty array from
"generateStaticParams()"`, c'est que le registre `src/content/landings`
est redevenu vide et que le slug de repli (`PLACEHOLDER_SLUG`) a été retiré
par erreur des fichiers `src/app/(fr)/[landing]/page.tsx` /
`src/app/en-ca/[landing]/page.tsx` — c'est une contrainte de
`output: "export"` (Next.js exige au moins une entrée), pas un bug de
contenu à corriger autrement.

**Vérifier les fichiers générés** (convention réelle de ce projet : Next.js
exporte `<slug>.html`, PAS `<slug>/index.html`) :

```powershell
Test-Path "out\<slug-fr>.html"
Test-Path "out\en-ca\<slug-en>.html"
```

**Vérifier le préfixage des images** (piège #4 du design system — doit être
vide) :

```powershell
Select-String -Path "out\<slug-fr>.html" -Pattern '"/images/[a-zA-Z0-9/_.-]+"'
```

Si cette commande retourne des résultats, une image n'est pas passée par
`assetPath()` (ou par un composant qui l'appelle en interne) — corriger
avant de continuer.

**Nettoyer** après validation :

```powershell
Remove-Item -LiteralPath "out" -Recurse -Force -ErrorAction SilentlyContinue
Remove-Item -LiteralPath ".next" -Recurse -Force -ErrorAction SilentlyContinue
```

Ne jamais committer `out/` ou `.next/` (déjà dans `.gitignore`).

## Étape 2 — `/publish` (branche + Pull Request)

Uniquement si `/verify` est passé sans erreur.

```powershell
git checkout -b feat/<slug-descriptif>
git add -A
git commit -m "Message clair décrivant le changement"
git push -u origin feat/<slug-descriptif>
gh pr create --fill
```

Puis surveiller le statut de la CI sur le PR (`.github/workflows/pr-check.yml`
reconstruit exactement le build d'export statique, sans déployer) :

```powershell
gh pr checks --watch
```

Retourner à l'utilisateur : **l'URL du PR** et le résumé des fichiers
modifiés. Ne jamais merger soi-même — c'est une décision humaine.

## Étape 3 — `/go-live` (après le merge humain)

Une fois le PR mergé par un humain, confirmer que la page est réellement en
ligne (le merge déclenche le workflow, qui prend 1-3 minutes) :

```powershell
# 1. Récupérer le SHA du dernier commit sur main
git fetch origin main
$sha = git rev-parse origin/main

# 2. Attendre et vérifier que le run GitHub Actions correspondant a réussi
gh run list --workflow=deploy-pages.yml --branch=main --limit=5

# 3. Une fois le run "completed / success", vérifier l'URL live
Invoke-WebRequest -Uri "https://nmediasolutions.github.io/nmedia-nextjs-poc/<slug-fr>" -UseBasicParsing -Method Head
```

Ne confirmer la publication à l'utilisateur qu'après avoir obtenu un
**HTTP 200** sur l'URL réelle — jamais se contenter de "le workflow a
réussi" sans vérifier l'URL elle-même (le workflow peut réussir tout en
produisant une page 404 si le slug ne correspond pas à ce qui est attendu).

Si `gh` n'est pas disponible pour interroger les runs, l'API publique
GitHub fonctionne sans authentification en lecture seule :

```powershell
Invoke-WebRequest -Uri "https://api.github.com/repos/NmediaSolutions/nmedia-nextjs-poc/actions/runs?per_page=1" -UseBasicParsing
```

## Rappel de sécurité

- `git push --force`, `git reset --hard` et `git push origin main` sont
  refusés par la configuration de permissions du projet
  (`opencode.json`) — c'est intentionnel, ne pas chercher à contourner.
- En cas d'échec de `/verify`, ne jamais passer à `/publish` — corriger
  d'abord.
