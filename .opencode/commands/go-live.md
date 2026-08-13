---
description: Confirmer qu'un changement mergé sur main est réellement publié en ligne sur GitHub Pages
---

Charge le skill `nmedia-publish` et exécute l'étape 3 (`/go-live`) : $ARGUMENTS

Vérifie dans l'ordre : le SHA de `origin/main`, le statut du workflow
`deploy-pages.yml` correspondant, puis l'URL publique réelle de la ou des
pages concernées (`https://nmediasolutions.github.io/nmedia-nextjs-poc/…`).

Ne confirme la publication que si l'URL répond HTTP 200 — jamais sur la
seule base du succès du workflow GitHub Actions.
