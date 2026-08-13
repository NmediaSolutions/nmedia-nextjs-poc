import { services } from "@/content/services";
import { projects } from "@/content/projects";
import { blogRegistry } from "@/content/blog/registry";
import { landings } from "@/content/landings";

/**
 * Table de correspondance des chemins FR <-> EN, utilisee par le
 * selecteur de langue et pour les balises hreflang.
 *
 * Toutes les paires sont derivees automatiquement des registres de contenu
 * (services, projects, blogRegistry, landings) via leur `slug: { fr, en }`.
 * Ajouter un contenu a son registre suffit : aucune modification manuelle
 * de ce fichier n'est necessaire.
 */
const staticPairs: [string, string][] = [
  ["/", "/en-ca"],
  ["/nous-joindre", "/en-ca/contact-us"],
  ["/nous-joindre/confirmation", "/en-ca/contact-us/confirmation"],
];

const servicePairs: [string, string][] = services.map((s) => [
  `/services/${s.slug.fr}`,
  `/en-ca/services/${s.slug.en}`,
]);

const projectPairs: [string, string][] = projects.map((p) => [
  `/projets/${p.slug.fr}`,
  `/en-ca/projects/${p.slug.en}`,
]);

const blogPairs: [string, string][] = blogRegistry.map((entry) => [
  `/blogue/${entry.slug.fr}`,
  `/en-ca/blog/${entry.slug.en}`,
]);

const landingPairs: [string, string][] = landings.map((l) => [
  `/${l.slug.fr}`,
  `/en-ca/${l.slug.en}`,
]);

const allPairs = [...staticPairs, ...servicePairs, ...projectPairs, ...blogPairs, ...landingPairs];

const frToEn = new Map(allPairs);
const enToFr = new Map(allPairs.map(([fr, en]) => [en, fr]));

/** Retourne le chemin equivalent dans l'autre langue, ou la page d'accueil par defaut */
export function getAlternatePath(pathname: string): string {
  if (frToEn.has(pathname)) return frToEn.get(pathname)!;
  if (enToFr.has(pathname)) return enToFr.get(pathname)!;
  return pathname.startsWith("/en-ca") ? "/" : "/en-ca";
}
