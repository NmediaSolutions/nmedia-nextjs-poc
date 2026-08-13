---
description: Pousser une branche et ouvrir une Pull Request pour publier un changement sur le site Nmédia
---

Charge le skill `nmedia-publish`.

D'abord, exécute l'étape 1 (`/verify`) sur les changements actuels du dépôt
`nmedia-nextjs`. Si elle échoue, arrête-toi et rapporte le problème sans
aller plus loin.

Si elle réussit, exécute l'étape 2 (`/publish`) : $ARGUMENTS

- Choisis un nom de branche `feat/<slug-descriptif>` cohérent avec le
  changement.
- Rédige un message de commit clair en français.
- Pousse la branche et ouvre la Pull Request avec `gh pr create --fill`.
- Surveille les vérifications CI du PR (`gh pr checks --watch`).

Ne merge jamais le PR toi-même. Termine en donnant l'URL du PR et le statut
de la CI.
