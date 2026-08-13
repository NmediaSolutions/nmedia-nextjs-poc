// Exemple de reference — exerce chacun des 10 types de LandingSection.
// Ce fichier n'est PAS branche au registre (src/content/landings/index.ts) :
// il sert de modele a copier/adapter. Toutes les images referencees existent
// deja dans /public/images — reutilise-les ou remplace-les par de nouveaux
// assets deposes au prealable dans /public/images/.
//
// Pour publier une vraie landing page :
// 1. Copier ce fichier dans src/content/landings/<mon-slug>.ts
// 2. Adapter id, slug, et le contenu de chaque section (fr ET en)
// 3. Ajouter l'import + l'entree dans src/content/landings/index.ts
// 4. Lancer /verify puis /publish (voir .opencode/skills/nmedia-publish)

import type { LandingContent } from "@/content/types";

export const exempleLanding: LandingContent = {
  id: "exemple",
  slug: { fr: "exemple-landing", en: "example-landing" },
  fr: {
    seo: {
      title: "Titre SEO de la page (balise <title>)",
      description: "Meta description SEO (150-160 caracteres).",
    },
    sections: [
      // 1. hero — TOUJOURS la premiere section d'une landing page.
      //    size: "default" = hero pleine hauteur (comme l'accueil, 980px).
      //    size: "small" (ou omis) = banniere standard (360px), pour toute
      //    page qui n'est pas une page d'accueil/hero majeur.
      {
        type: "hero",
        size: "small",
        image: "/images/texture-home.jpg", // chemin brut /public — PAS assetPath() ici, Banner s'en charge
        imageAlt: "",
        breadcrumbLabel: "Accueil", // optionnel — les deux (label + href) doivent etre presents ou absents ensemble
        breadcrumbHref: "/",
        title: "Titre de la page",
        titleHighlight: "en évidence", // optionnel — rendu en <strong className="text-primary">
        text: "Sous-titre ou texte d'introduction sous le H1.",
        cta: { text: "Nous joindre", href: "/nous-joindre" }, // optionnel
      },

      // 2. richText — contenu editorial libre (paragraphes, listes,
      //    citations). bodyHtml est injecte tel quel dans .rte — utiliser du
      //    HTML simple (p, ul/li, strong, blockquote), jamais de JSX.
      {
        type: "richText",
        title: "Un sous-titre optionnel",
        bodyHtml: "<p>Paragraphe avec <strong>emphase</strong>.</p><ul><li>Point un</li><li>Point deux</li></ul>",
      },

      // 3. beigeSection — section pleine largeur fond beige, titre a gauche
      //    (colonne 480px) + paragraphes a droite. Bon pour une explication
      //    en 1-3 paragraphes sans avoir besoin d'une carte.
      {
        type: "beigeSection",
        title: "Titre de la section",
        paragraphs: ["Premier paragraphe.", "Deuxieme paragraphe."],
      },

      // 4. goldCard — carte doree deux colonnes (texte / photo teintee or),
      //    grain de bruit automatique. Reserver aux messages a forte valeur
      //    (expertise, positionnement) — jamais plus d'une par page.
      {
        type: "goldCard",
        image: "/images/ai-expertise.png",
        imageAlt: "Description de l'image",
        title: "Titre dans la carte dorée",
        paragraphs: ["Paragraphe dans la carte."],
        linkText: "Découvrir", // optionnel — les deux (text + href) ensemble
        linkHref: "/services/developpement-sur-mesure",
      },

      // 5. featureGrid — grille de 2 colonnes de cartes beige cliquables
      //    (href optionnel par item). Bon pour lister des offres/approches.
      {
        type: "featureGrid",
        title: "Titre de la grille",
        items: [
          { title: "Élément 1", text: "Description.", href: "/nous-joindre" },
          { title: "Élément 2", text: "Description sans lien (href omis)." },
        ],
      },

      // 6. cardGrid — grille de vignettes Card (projets/articles/services),
      //    2 colonnes max, avec titre de section + lien "voir tout" optionnel.
      {
        type: "cardGrid",
        title: "Titre de la grille de cartes",
        text: "Texte d'introduction optionnel.",
        seeAllCta: { text: "Voir tout", href: "/projets" }, // optionnel
        cards: [
          {
            eyebrow: "Nom du projet ou catégorie",
            heading: "Titre de la carte",
            href: "/projets/moi-programme-de-fidelisation-de-metro",
            image: "/images/projects/moi-metro-thumbnail.jpg",
            imageAlt: "Description de l'image",
            // tag optionnel : puce beige (articles uniquement, ex. "Solutions IA")
          },
        ],
      },

      // 7. ctaBand — bandeau doré pleine largeur avec photo, pour un appel
      //    à l'action fort en milieu/fin de page. Une seule par page.
      {
        type: "ctaBand",
        title: "Titre du bandeau",
        text: "Texte d'accompagnement du bandeau.",
        btn1: { text: "Nous écrire", href: "/nous-joindre" },
        btn2: { text: "Nos projets", href: "/projets" }, // optionnel
        image: "/images/team.jpg",
        imageAlt: "Description de l'image",
      },

      // 8. highlightCard — carte noire arrondie avec photo, pour un message
      //    de mise en avant secondaire (ex. recrutement, offre spéciale).
      {
        type: "highlightCard",
        title: "Titre de la carte noire",
        text: "Texte de la carte.",
        cta: { text: "En savoir plus", href: "/nous-joindre" }, // optionnel
        image: "/images/carriere.webp",
        imageAlt: "Description de l'image",
      },

      // 9. partners — bandeau de logos partenaires en défilement continu.
      {
        type: "partners",
        title: "Nos partenaires",
        partners: [
          { name: "Metro", logo: "/images/partners/metro.png", since: "2021" },
          { name: "Genetec", logo: "/images/partners/genetec.png", since: "2018" },
        ],
      },

      // 10. ctaZone — zone CTA beige centrée, toujours en DERNIÈRE section
      //     d'une landing page (pattern de fin de page Service/Project).
      {
        type: "ctaZone",
        title: "Prêt à démarrer votre projet ?",
        text: "Texte de clôture avant l'appel à l'action final.",
        btn1: { text: "Nous joindre", href: "/nous-joindre" },
        btn2: { text: "Nos services", href: "/services" }, // optionnel
      },
    ],
  },
  en: {
    // Traduction complète et fidèle de la version fr ci-dessus — mêmes
    // sections, mêmes images, hrefs adaptés vers les routes /en-ca/*.
    seo: {
      title: "Page SEO title (<title> tag)",
      description: "SEO meta description (150-160 characters).",
    },
    sections: [
      {
        type: "hero",
        size: "small",
        image: "/images/texture-home.jpg",
        imageAlt: "",
        breadcrumbLabel: "Home",
        breadcrumbHref: "/en-ca",
        title: "Page title",
        titleHighlight: "highlighted",
        text: "Subtitle or intro text under the H1.",
        cta: { text: "Contact us", href: "/en-ca/contact-us" },
      },
      {
        type: "richText",
        title: "An optional subheading",
        bodyHtml: "<p>Paragraph with <strong>emphasis</strong>.</p><ul><li>Point one</li><li>Point two</li></ul>",
      },
      {
        type: "beigeSection",
        title: "Section title",
        paragraphs: ["First paragraph.", "Second paragraph."],
      },
      {
        type: "goldCard",
        image: "/images/ai-expertise.png",
        imageAlt: "Image description",
        title: "Title inside the gold card",
        paragraphs: ["Paragraph inside the card."],
        linkText: "Discover",
        linkHref: "/en-ca/services/devops",
      },
      {
        type: "featureGrid",
        title: "Grid title",
        items: [
          { title: "Item 1", text: "Description.", href: "/en-ca/contact-us" },
          { title: "Item 2", text: "Description without a link (href omitted)." },
        ],
      },
      {
        type: "cardGrid",
        title: "Card grid title",
        text: "Optional intro text.",
        seeAllCta: { text: "See all", href: "/en-ca/projects" },
        cards: [
          {
            eyebrow: "Project name or category",
            heading: "Card title",
            href: "/en-ca/projects/moi-metro-s-loyalty-program",
            image: "/images/projects/moi-metro-thumbnail.jpg",
            imageAlt: "Image description",
          },
        ],
      },
      {
        type: "ctaBand",
        title: "Band title",
        text: "Band supporting text.",
        btn1: { text: "Write us", href: "/en-ca/contact-us" },
        btn2: { text: "Our projects", href: "/en-ca/projects" },
        image: "/images/team.jpg",
        imageAlt: "Image description",
      },
      {
        type: "highlightCard",
        title: "Black card title",
        text: "Card text.",
        cta: { text: "Learn more", href: "/en-ca/contact-us" },
        image: "/images/carriere.webp",
        imageAlt: "Image description",
      },
      {
        type: "partners",
        title: "Our partners",
        partners: [
          { name: "Metro", logo: "/images/partners/metro.png", since: "2021" },
          { name: "Genetec", logo: "/images/partners/genetec.png", since: "2018" },
        ],
      },
      {
        type: "ctaZone",
        title: "Ready to start your project?",
        text: "Closing text before the final call to action.",
        btn1: { text: "Contact us", href: "/en-ca/contact-us" },
        btn2: { text: "Our services", href: "/en-ca/services" },
      },
    ],
  },
};
