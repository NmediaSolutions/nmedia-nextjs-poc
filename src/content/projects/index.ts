import { moiMetroProject } from "./moi-metro";
import type { ProjectContent } from "../types";

/** Registre des projets. Ajouter ici chaque nouvelle etude de cas migree. */
export const projects: ProjectContent[] = [moiMetroProject];

export function findProjectBySlug(locale: "fr" | "en", slug: string): ProjectContent | undefined {
  return projects.find((p) => p.slug[locale] === slug);
}
