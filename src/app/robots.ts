import type { MetadataRoute } from "next";

// Contenu 100% statique (aucune donnee dynamique) : requis pour l'export
// statique GitHub Pages (output: "export").
export const dynamic = "force-static";

const isStaticExport = process.env.STATIC_EXPORT === "true";

export default function robots(): MetadataRoute.Robots {
  // Version GitHub Pages (POC/demo) : jamais indexable par les moteurs de
  // recherche. Voir aussi le <meta name="robots"> pose dans les layouts.
  if (isStaticExport) {
    return {
      rules: {
        userAgent: "*",
        disallow: "/",
      },
    };
  }

  return {
    rules: {
      userAgent: "*",
      allow: "/",
    },
    sitemap: "https://www.nmedia.ca/sitemap.xml",
  };
}
