import { devopsService } from "./devops";
import type { ServiceContent } from "../types";

/** Registre des services. Ajouter ici chaque nouveau service migre. */
export const services: ServiceContent[] = [devopsService];

export function findServiceBySlug(locale: "fr" | "en", slug: string): ServiceContent | undefined {
  return services.find((s) => s.slug[locale] === slug);
}
