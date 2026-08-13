import type { MetadataRoute } from "next";
import { services } from "@/content/services";
import { projects } from "@/content/projects";
import { blogRegistry } from "@/content/blog/registry";

const siteUrl = "https://www.nmedia.ca";

// Contenu 100% statique (aucune donnee dynamique) : requis pour l'export
// statique GitHub Pages (output: "export").
export const dynamic = "force-static";

// POC : couvre uniquement les pages migrees jusqu'ici. A mesure que le site
// grandit, chaque registre de contenu (services/projects/blogRegistry)
// alimente automatiquement ce sitemap.
export default function sitemap(): MetadataRoute.Sitemap {
  const staticEntries: MetadataRoute.Sitemap = [
    { url: `${siteUrl}/`, alternates: { languages: { "fr-CA": `${siteUrl}/`, "en-CA": `${siteUrl}/en-ca` } } },
    { url: `${siteUrl}/en-ca` },
    {
      url: `${siteUrl}/nous-joindre`,
      alternates: {
        languages: {
          "fr-CA": `${siteUrl}/nous-joindre`,
          "en-CA": `${siteUrl}/en-ca/contact-us`,
        },
      },
    },
    { url: `${siteUrl}/en-ca/contact-us` },
  ];

  const serviceEntries: MetadataRoute.Sitemap = services.flatMap((s) => [
    {
      url: `${siteUrl}/services/${s.slug.fr}`,
      alternates: {
        languages: {
          "fr-CA": `${siteUrl}/services/${s.slug.fr}`,
          "en-CA": `${siteUrl}/en-ca/services/${s.slug.en}`,
        },
      },
    },
    { url: `${siteUrl}/en-ca/services/${s.slug.en}` },
  ]);

  const projectEntries: MetadataRoute.Sitemap = projects.flatMap((p) => [
    {
      url: `${siteUrl}/projets/${p.slug.fr}`,
      alternates: {
        languages: {
          "fr-CA": `${siteUrl}/projets/${p.slug.fr}`,
          "en-CA": `${siteUrl}/en-ca/projects/${p.slug.en}`,
        },
      },
    },
    { url: `${siteUrl}/en-ca/projects/${p.slug.en}` },
  ]);

  const blogEntries: MetadataRoute.Sitemap = blogRegistry.flatMap((entry) => [
    {
      url: `${siteUrl}/blogue/${entry.slug.fr}`,
      alternates: {
        languages: {
          "fr-CA": `${siteUrl}/blogue/${entry.slug.fr}`,
          "en-CA": `${siteUrl}/en-ca/blog/${entry.slug.en}`,
        },
      },
    },
    { url: `${siteUrl}/en-ca/blog/${entry.slug.en}` },
  ]);

  return [...staticEntries, ...serviceEntries, ...projectEntries, ...blogEntries];
}
