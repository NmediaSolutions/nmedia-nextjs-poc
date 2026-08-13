import type { NextConfig } from "next";

// Export statique pour GitHub Pages (repo NmediaSolutions/nmedia-nextjs-poc).
// Active uniquement quand STATIC_EXPORT=true (voir .github/workflows/deploy-pages.yml).
// L'app normale (dev, build classique) reste en mode serveur pour que
// /api/leads (formulaire de contact) fonctionne.
const isStaticExport = process.env.STATIC_EXPORT === "true";
const basePath = "/nmedia-nextjs-poc";

const nextConfig: NextConfig = {
  // Permet l'acces au serveur de dev depuis le navigateur de l'agent (Docker)
  // via host.docker.internal. Sans impact en production.
  allowedDevOrigins: ["host.docker.internal", "localhost"],
  ...(isStaticExport
    ? {
        output: "export",
        basePath,
        assetPrefix: basePath,
        images: { unoptimized: true },
      }
    : {}),
};

export default nextConfig;
