import type { Locale } from "@/lib/i18n";
import type { CardLink, Partner, SeoMeta } from "./types";

/** La carte d'accueil utilise le meme contrat que les autres cartes du site */
export type HomeCard = CardLink;

/** Reexporte depuis ./types (definition canonique) pour compatibilite avec le code existant. */
export type { Partner };

export interface HomeContent {
  seo: SeoMeta;
  heroTitlePrefix: string;
  heroTitleLine2: string;
  heroTitleHighlight: string;
  heroTitleSuffix: string;
  heroText: string;
  heroCta: { text: string; href: string };
  aiTitle: string;
  aiParagraph1: string;
  aiParagraph2: string;
  aiParagraph2Strong: string;
  aiParagraph2End: string;
  aiLinkText: string;
  aiLinkHref: string;
  aiImage: string;
  aiImageAlt: string;
  linesTitle: string;
  linesText: string;
  linesText2: string;
  transformTitle: string;
  transformText: string;
  transformCta: { text: string; href: string };
  featuredProjects: HomeCard[];
  partnersTitle: string;
  partners: Partner[];
  ctaTitle: string;
  ctaText: string;
  ctaBtn1: { text: string; href: string };
  ctaBtn2: { text: string; href: string };
  ctaImage: string;
  ctaImageAlt: string;
  careerTitle: string;
  careerText: string;
  careerCta: { text: string; href: string };
  careerImage: string;
  careerImageAlt: string;
  blogTitle: string;
  blogText: string;
  blogCta: { text: string; href: string };
  featuredPosts: HomeCard[];
}

/** Les 12 partenaires du carrousel, avec leur annee de debut (releve sur le site) */
const partners: Partner[] = [
  { name: "Genetec", logo: "/images/partners/genetec.png", since: "2018" },
  { name: "Metro", logo: "/images/partners/metro.png", since: "2021" },
  { name: "ABF", logo: "/images/partners/abf.png", since: "2010" },
  { name: "Telus Santé", logo: "/images/partners/telus.png", since: "2021" },
  { name: "Espace Proprio", logo: "/images/partners/espace-proprio.png", since: "2021" },
  { name: "Maskatel", logo: "/images/partners/maskatel.png", since: "2018" },
  { name: "Valmétal", logo: "/images/partners/valmetal.png", since: "2013" },
  { name: "Laferté", logo: "/images/partners/laferte.png", since: "2018" },
  { name: "Cisolift", logo: "/images/partners/cisolift.png", since: "2019" },
  { name: "Les Cultures de chez nous", logo: "/images/partners/cultures-chez-nous.png", since: "2012" },
  { name: "Montel", logo: "/images/partners/montel.png", since: "2021" },
  { name: "Vaillancourt Portes et Fenêtres", logo: "/images/partners/vaillancourt.png", since: "2017" },
];

export const home: Record<Locale, HomeContent> = {
  fr: {
    seo: {
      title: "Nmédia — Agence Web pour vos projets et conseils numériques",
      description:
        "Notre expertise se fond à la vôtre pour créer un projet numérique solide. Agence de développement Web composée de 90 spécialistes depuis plus de 25 ans.",
    },
    heroTitlePrefix: "Nmédia :",
    heroTitleLine2: "votre ",
    heroTitleHighlight: "allié",
    heroTitleSuffix: " numérique",
    heroText:
      "Notre expertise se fond à la vôtre pour créer un projet numérique solide : peu importe vos besoins en transformation numérique, notre agence de développement Web composée de 90 spécialistes fait toute la différence. Dévoués à votre succès depuis plus de 25 ans, ils comprennent votre réalité en profondeur et vous offrent des projets de haute qualité, jour après jour.",
    heroCta: { text: "Nos solutions numériques", href: "/services" },
    aiTitle: "Notre expertise en intelligence artificielle",
    aiParagraph1:
      "Chez Nmédia, nous voyons l'IA comme un outil qui augmente l'efficience et la productivité. Nous ne faisons pas que conseiller comment l'utiliser : nous l'utilisons nous-mêmes au quotidien pour mieux la comprendre et rester à l'affût des avancées technologiques afin de vous en faire bénéficier.",
    aiParagraph2:
      "Nous vous aidons à débloquer son plein potentiel grâce à nos produits clés en main, nos solutions sur mesure et nos formations adaptées à vos besoins et à votre réalité. ",
    aiParagraph2Strong: "L'IA doit collaborer avec vous, pas vous remplacer",
    aiParagraph2End: ", pour que vous restiez au cœur des décisions stratégiques.",
    aiLinkText: "Découvrir notre expertise IA",
    aiLinkHref: "https://services.nmedia.ca/intelligence-artificielle",
    aiImage: "/images/ai-expertise.png",
    aiImageAlt: "Illustration de l'expertise en intelligence artificielle de Nmédia",
    linesTitle: "6 lignes de services pour une solution tout-en-un",
    linesText:
      "Chez Nmédia, notre expertise s'étend et se complète sur 6 lignes de services (Analyse et conception numérique, Commercialisation numérique, Développement sur mesure, Expérience mobile, Intégration de solutions d'affaires et Intelligence artificielle) qui fonctionnent en synergie pour vous aider à mener à bien votre projet numérique.",
    linesText2:
      "De l'analyse de vos processus d'affaires à la conception de votre site Web, du développement d'une application mobile à l'intégration, en passant par la promotion et l'amélioration de votre stratégie de communication ou le déploiement de l'intelligence artificielle dans votre entreprise, nos expert·e·s couvrent tous les aspects avec pour seul objectif de vous fournir la solution numérique adaptée à vos besoins. Faites confiance à une agence de communication pour vous aider à faire entendre votre message.",
    transformTitle: "De grandes transformations numériques pour vous inspirer",
    transformText:
      "Avec plus de 20 ans d'expérience en tant qu'agence Web, de nombreux projets sont passés entre les mains de nos expert·e·s. Chaque projet fut unique avec des attentes diverses et des clients aux profils tout aussi variés. De la stratégie marketing au développement d'applications mobiles en passant par le référencement SEO/SEM et la création de sites Web e‑commerce, c'est notre polyvalence qui fait notre force, et nous sommes fiers d'avoir su accompagner nos clients dans leur aventure numérique.",
    transformCta: { text: "Voir tous nos projets", href: "/projets" },
    featuredProjects: [
      {
        eyebrow: "Moi, programme de fidélisation de Metro",
        heading: "Analyse et conception numérique, développement applicatif et expérience mobile",
        href: "/projets/moi-programme-de-fidelisation-de-metro",
        image: "/images/projects/moi-metro-thumbnail.jpg",
        imageAlt: "Capture d'écran de l'application mobile Moi, le programme de fidélisation de Metro",
      },
      {
        eyebrow:
          "Applications Web de prêt d'équipement gratuit pour le projet circonflexe - Prêt-pour-bouger",
        heading: "Modernisation et refonte d'écosystème numérique",
        href: "/projets/applications-web-de-pret-d-equipement-gratuit-pour-le-projet-circonflexe-pret-pour-bouger",
        image: "/images/projects/circonflexe-pret-pour-bouger.png",
        imageAlt:
          "Application Web circonflexe - Prêt-pour-bouger sur un ordinateur portable et un téléphone intelligent",
      },
    ],
    partnersTitle: "Un échantillon de nos partenaires d'exception",
    partners,
    ctaTitle: "Optimisez et maximisez votre entreprise avec un projet Web innovant",
    ctaText:
      "Nmédia vous accompagne avec la conviction suivante : vous méritez d'avoir le meilleur retour sur investissement possible pour votre entreprise. Grâce à notre approche de travail spécialisée et évolutive, vous serez impliqués du début à la fin de votre projet numérique et une équipe attitrée à celui-ci sera toujours présente pour vous.",
    ctaBtn1: { text: "Nous écrire", href: "/nous-joindre" },
    ctaBtn2: { text: "Nos projets", href: "/projets" },
    ctaImage: "/images/team.jpg",
    ctaImageAlt: "Photographie de certains membre de l'équipe Nmédia",
    careerTitle: "Votre incroyable carrière commence ici",
    careerText:
      "UX, marketing, rédaction, design, programmation, analyse, développement des affaires, Dynamics 365 et Power Platform… Il est rare de voir toutes les expertises du Web évoluer sous le même toit. Chez Nmédia, nous unissons nos forces dans le plaisir. Notre but commun : mener les projets de nos partenaires au plus haut sommet! Jetez un œil à nos postes ouverts et apprenez‑en plus sur votre future équipe!",
    careerCta: { text: "Faire partie de l'équipe", href: "https://jobdereve.nmedia.ca/emplois-ti" },
    careerImage: "/images/carriere.webp",
    careerImageAlt: "Photos de Nmédiens et des bureaux de Nmédia au 1047",
    blogTitle: "Parlons affaires et plaisir",
    blogText:
      "Découvrez nos articles de blogue sur les dernières tendances en TI, nos bonnes pratiques pour vos projets numériques et les valeurs que nous défendons en tant qu'agence Web. Restez à l'affût, nous en ajoutons régulièrement!",
    blogCta: { text: "Consulter notre blogue", href: "/blogue" },
    featuredPosts: [
      {
        eyebrow: "Patrick Bélanger / 17 mars 2026",
        heading: "Quel est le ROI de l'IA dans le secteur de la construction?",
        tag: "Solutions IA",
        href: "/blogue/quel-est-le-roi-de-l-ia-dans-le-secteur-de-la-construction",
        image: "/images/blog/innov-ia-banniere.jpeg",
        imageAlt: "Quel est le ROI de l'IA dans le secteur de la construction?",
      },
      {
        eyebrow: "Patrick Bélanger / 10 mars 2026",
        heading: "Comment gérer le shadow AI en entreprise?",
        tag: "Solutions IA",
        href: "/blogue/comment-gerer-le-shadow-ai-en-entreprise",
        image: "/images/blog/innov-ia-banniere.jpeg",
        imageAlt: "Comment gérer le shadow AI en entreprise?",
      },
    ],
  },
  en: {
    seo: {
      title: "Nmédia — Web design and development agency for your digital projects",
      description:
        "Our expertise blends with yours to create a solid digital project. A web development company of 90 specialists with over 25 years of experience.",
    },
    heroTitlePrefix: "Nmédia:",
    heroTitleLine2: "your digital ",
    heroTitleHighlight: "ally",
    heroTitleSuffix: "",
    heroText:
      "Our expertise blends with yours to create a solid digital project: no matter your digital transformation needs, our web development company of 90 specialists makes all the difference. Dedicated to your success for over 25 years, they understand your reality in-depth and deliver high-quality projects daily.",
    heroCta: { text: "Our digital solutions", href: "/en-ca/services" },
    aiTitle: "Our expertise in artificial intelligence",
    aiParagraph1:
      "At Nmédia, we see AI as a tool that enhances efficiency and productivity. We don't just advise you on how to use it: we use it daily to better understand it and stay on top of the latest technological advancements for your benefit.",
    aiParagraph2:
      "We help you unlock its full potential through our turnkey products, custom solutions, and training program tailored to your needs and reality. ",
    aiParagraph2Strong: "AI should work with you, not replace you",
    aiParagraph2End: ", ensuring you remain at the heart of strategic decisions.",
    aiLinkText: "Discover our AI expertise",
    aiLinkHref: "https://services.nmedia.ca/artificial-intelligence",
    aiImage: "/images/ai-expertise.png",
    aiImageAlt: "Illustration of Nmédia's artificial intelligence expertise",
    linesTitle: "6 service lines for an all-in-one solution",
    linesText:
      "At Nmédia, our expertise extends to over 6 service lines (Analysis and digital design, Digital marketing, Custom development, Mobile experience, Business solutions integration and Artificial intelligence) that work in synergy to help you bring your digital project to reality.",
    linesText2:
      "From analyzing your business processes to designing your website, from developing a mobile application to integrating, promoting and improving your communications strategy, or deploying artificial intelligence in your business, our experts cover every aspect with the unique objective of providing you with the right digital solution for your needs. Trust a web agency to help you get your message heard.",
    transformTitle: "Major digital transformations to inspire you",
    transformText:
      "With over 25 years of experience as a web agency, many projects have passed through the hands of our experts. Each project was unique, with various expectations and equally diverse client profiles. From marketing strategy and mobile application development to SEO/SEM and e‑commerce website creation, our versatility is our strength, and we're proud to have accompanied our clients on their digital adventures.",
    transformCta: { text: "See all our projects", href: "/en-ca/projects" },
    featuredProjects: [
      {
        eyebrow: "Moi, Metro's loyalty program",
        heading: "Digital analysis and design, DevOps",
        href: "/en-ca/projects/moi-metro-s-loyalty-program",
        image: "/images/projects/moi-metro-thumbnail.jpg",
        imageAlt: "Screenshot of the Moi, Metro's loyalty program mobile app",
      },
      {
        eyebrow:
          "Web applications for free rental equipment for the project circonflexe - Prêt-pour-bouger",
        heading: "Digital ecosystem modernization and redesign",
        href: "/en-ca/projects/web-applications-for-free-rental-equipment-for-the-project-circonflexe-pret-pour-bouger",
        image: "/images/projects/circonflexe-pret-pour-bouger.png",
        imageAlt: "Web app circonflexe - Prêt-pour-bouger",
      },
    ],
    partnersTitle: "A sample of our exceptional partners",
    partners,
    ctaTitle: "Optimize and maximize your business with an innovative web project",
    ctaText:
      "Nmédia accompanies you with the following conviction: you deserve the best possible return on investment for your business. No project is too big or too small for us. Thanks to our specialized and scalable work approach, you'll be involved from the beginning to the end of your digital project, and a dedicated team will always be there for you.",
    ctaBtn1: { text: "Write us", href: "/en-ca/contact-us" },
    ctaBtn2: { text: "Our projects", href: "/en-ca/projects" },
    ctaImage: "/images/team.jpg",
    ctaImageAlt: "Photograph of some members of the Nmédia team",
    careerTitle: "Your incredible career starts here",
    careerText:
      "UX, marketing, copywriting, design, programming, analysis, business development, Dynamics 365 and Power Platform… It's rare to see all web specialists working under one roof. At Nmédia, we join forces with pleasure. Our common goal is to take our partners' projects to the top! Look at our open positions and learn more about your future team!",
    careerCta: { text: "Be part of the team", href: "https://jobdereve.nmedia.ca" },
    careerImage: "/images/carriere.webp",
    careerImageAlt: "Photos of Nmedians and Nmédia's offices at 1047",
    blogTitle: "Let's talk business and fun",
    blogText:
      "Discover our blog posts on the latest IT trends, our best practices for your digital projects and the values we uphold as a web agency. Stay tuned; we're adding more regularly!",
    blogCta: { text: "Check out our blog", href: "/en-ca/blog" },
    featuredPosts: [
      {
        eyebrow: "Nmédia /",
        heading: "How to create an exceptional user experience through intuitive website design",
        tag: "Digital Marketing",
        href: "/en-ca/blog/how-to-create-an-exceptional-user-experience-through-intuitive-website-design",
        image: "/images/blog/ux-intuitive-website-design.png",
        imageAlt: "How to create an exceptional user experience through intuitive website design",
      },
      {
        eyebrow: "Nmédia /",
        heading: "The importance of content strategy in the work of a social media agency",
        tag: "Digital Marketing",
        href: "/en-ca/blog/the-importance-of-content-strategy-in-the-work-of-a-social-media-agency",
        image: "/images/blog/content-strategy-social-media.png",
        imageAlt: "The importance of content strategy in the work of a social media agency",
      },
    ],
  },
};
