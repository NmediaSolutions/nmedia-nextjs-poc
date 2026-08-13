import { devopsService } from "@/content/services/devops";
import { moiMetroProject } from "@/content/projects/moi-metro";
import { blogRegistry } from "@/content/blog/registry";

/**
 * Table de correspondance des chemins FR <-> EN, utilisee par le
 * selecteur de langue et pour les balises hreflang.
 *
 * A mesure que le site grandit au-dela du POC, chaque nouveau contenu
 * (service, projet, article) doit ajouter son entree ici via son
 * `slug: { fr, en }` deja declare dans son fichier de contenu.
 */
const staticPairs: [string, string][] = [
  ["/", "/en-ca"],
  ["/nous-joindre", "/en-ca/contact-us"],
  ["/nous-joindre/confirmation", "/en-ca/contact-us/confirmation"],
  [`/services/${devopsService.slug.fr}`, `/en-ca/services/${devopsService.slug.en}`],
  [`/projets/${moiMetroProject.slug.fr}`, `/en-ca/projects/${moiMetroProject.slug.en}`],
];

const blogPairs: [string, string][] = blogRegistry.map((entry) => [
  `/blogue/${entry.slug.fr}`,
  `/en-ca/blog/${entry.slug.en}`,
]);

const allPairs = [...staticPairs, ...blogPairs];

const frToEn = new Map(allPairs);
const enToFr = new Map(allPairs.map(([fr, en]) => [en, fr]));

/** Retourne le chemin equivalent dans l'autre langue, ou la page d'accueil par defaut */
export function getAlternatePath(pathname: string): string {
  if (frToEn.has(pathname)) return frToEn.get(pathname)!;
  if (enToFr.has(pathname)) return enToFr.get(pathname)!;
  return pathname.startsWith("/en-ca") ? "/" : "/en-ca";
}
