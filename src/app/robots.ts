import type { MetadataRoute } from "next";

// Contenu 100% statique (aucune donnee dynamique) : requis pour l'export
// statique GitHub Pages (output: "export").
export const dynamic = "force-static";

export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: "*",
      allow: "/",
    },
    sitemap: "https://www.nmedia.ca/sitemap.xml",
  };
}
