---
description: Valider localement un changement sur le site Nmédia avant publication (build serveur + export statique + vérification des images)
agent: nmedia-reviewer
subtask: true
---

Charge le skill `nmedia-publish` et exécute intégralement l'étape 1
(`/verify`) sur les changements actuels du dépôt `nmedia-nextjs` : $ARGUMENTS

Si aucun slug particulier n'est précisé, déduis-le des fichiers modifiés
(`git status`, `git diff`) — notamment tout nouveau fichier sous
`src/content/landings/`, `src/content/services/`, `src/content/projects/`
ou `src/content/blog/`.

Termine par un verdict explicite PASS/FAIL selon le format du skill
`nmedia-reviewer`.
