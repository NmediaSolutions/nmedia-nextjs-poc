/**
 * Prefixe les chemins d'actifs statiques (fichiers sous /public, ex.
 * "/images/foo.png") avec le basePath utilise pour l'export statique
 * GitHub Pages. Necessaire car Next.js ne prefixe PAS automatiquement le
 * basePath sur les <img>/<Image> dont le src est une chaine litterale
 * pointant vers /public (seuls next/link et les assets internes _next/*
 * sont prefixes automatiquement).
 *
 * Garder cette valeur synchronisee avec `basePath` dans next.config.ts.
 * Sans effet en mode serveur normal (STATIC_EXPORT non defini) ni sur les
 * URLs absolues (http/https).
 */
const STATIC_EXPORT_BASE_PATH = "/nmedia-nextjs-poc";

const basePath = process.env.STATIC_EXPORT === "true" ? STATIC_EXPORT_BASE_PATH : "";

export function assetPath(path: string): string {
  if (!path || /^https?:\/\//.test(path)) return path;
  return `${basePath}${path}`;
}
