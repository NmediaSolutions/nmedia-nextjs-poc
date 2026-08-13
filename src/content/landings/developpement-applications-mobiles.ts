import type { LandingContent, Partner } from "../types";

/**
 * Les memes 12 partenaires que le bandeau de l'accueil (src/content/home.ts)
 * — reutilises tels quels, cf. consigne "bandeau des partenaires habituels".
 */
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

export const developpementApplicationsMobilesLanding: LandingContent = {
  id: "developpement-mobile",
  slug: { fr: "developpement-applications-mobiles", en: "mobile-app-development" },
  fr: {
    seo: {
      title: "Développement d'applications mobiles iOS et Android — Nmédia",
      description:
        "Applications mobiles natives et hybrides, de l'idée au lancement en boutique : expertise iOS, Android, React Native et Flutter chez Nmédia.",
    },
    sections: [
      {
        type: "hero",
        size: "default",
        image: "/images/texture-home.jpg",
        imageAlt: "",
        breadcrumbLabel: "Accueil",
        breadcrumbHref: "/",
        title: "Votre application mobile, de l'idée au",
        titleHighlight: "App Store",
        text: "Notre équipe conçoit et développe des applications mobiles iOS et Android natives ou hybrides, pensées pour la performance, l'expérience utilisateur et la croissance de votre entreprise.",
        cta: { text: "Discuter de mon projet", href: "/nous-joindre" },
      },
      {
        type: "richText",
        title: "Notre approche du développement mobile",
        bodyHtml:
          "<p>Chaque projet mobile a ses propres contraintes : budget, délais, complexité fonctionnelle, plateformes visées. C'est pourquoi notre équipe maîtrise autant le <strong>développement natif</strong> (Swift/SwiftUI pour iOS, Kotlin pour Android) que les frameworks <strong>hybrides</strong> comme React Native, Flutter et .NET MAUI, pour livrer la solution la mieux adaptée à votre contexte plutôt qu'une réponse unique par défaut.</p><ul><li>Applications natives iOS et Android pour une performance et une intégration système optimales</li><li>Applications hybrides pour un time-to-market réduit et une base de code partagée</li><li>Intégration avec vos systèmes existants (API, authentification, paiement, CRM)</li><li>Déploiement et suivi sur l'App Store et Google Play</li></ul><p>Pourquoi choisir Nmédia? Parce que nos équipes d'analystes, d'architectes, de designers UX et de développeurs mobiles travaillent sous un même toit depuis plus de 25 ans, avec une expérience concrète de mise en marché d'applications utilisées par des centaines de milliers d'utilisateurs.</p>",
      },
      {
        type: "featureGrid",
        title: "Pourquoi confier votre application mobile à Nmédia",
        items: [
          {
            title: "Performance native",
            text: "Des applications fluides et réactives, optimisées pour chaque plateforme, qui exploitent pleinement les capacités du téléphone.",
          },
          {
            title: "Time-to-market réduit",
            text: "Une approche hybride quand elle est pertinente, pour lancer plus rapidement une version robuste sur iOS et Android à la fois.",
          },
          {
            title: "Expérience utilisateur soignée",
            text: "Une conception UX/UI centrée sur vos utilisateurs, pour une adoption durable et une expérience à la hauteur de votre marque.",
          },
          {
            title: "Maintenance simplifiée",
            text: "Une architecture pensée pour évoluer : mises à jour, nouvelles fonctionnalités et support technique continu après le lancement.",
          },
        ],
      },
      {
        type: "goldCard",
        image: "/images/ai-expertise.png",
        imageAlt: "Illustration de l'expertise en intelligence artificielle de Nmédia",
        title: "L'intelligence artificielle au service de vos applications mobiles",
        paragraphs: [
          "Recommandations personnalisées, assistants conversationnels, analyse prédictive ou automatisation de tâches : nous intégrons l'intelligence artificielle directement dans vos applications mobiles pour enrichir l'expérience utilisateur sans complexifier votre écosystème technologique.",
        ],
        linkText: "Découvrir notre développement sur mesure",
        linkHref: "/services/developpement-sur-mesure",
      },
      {
        type: "cardGrid",
        title: "Un projet mobile qui a fait ses preuves",
        text: "Développement d'applications iOS et Android natives déployées auprès de centaines de milliers d'utilisateurs.",
        cards: [
          {
            eyebrow: "Moi, programme de fidélisation de Metro",
            heading: "Applications mobiles iOS et Android pour un programme de fidélisation multibannière",
            href: "/projets/moi-programme-de-fidelisation-de-metro",
            image: "/images/projects/moi-metro-thumbnail.jpg",
            imageAlt: "Capture d'écran de l'application mobile Moi, le programme de fidélisation de Metro",
          },
        ],
      },
      {
        type: "partners",
        title: "Un échantillon de nos partenaires d'exception",
        partners,
      },
      {
        type: "ctaZone",
        title: "Prêt à lancer votre application mobile?",
        text: "Parlons de votre projet : nos expert·e·s en développement mobile sont là pour vous accompagner de l'idée jusqu'au lancement en boutique.",
        btn1: { text: "Nous joindre", href: "/nous-joindre" },
        btn2: { text: "Développement sur mesure", href: "/services/developpement-sur-mesure" },
      },
    ],
  },
  en: {
    seo: {
      title: "iOS and Android Mobile App Development — Nmédia",
      description:
        "Native and hybrid mobile applications, from idea to app store launch: iOS, Android, React Native and Flutter expertise at Nmédia.",
    },
    sections: [
      {
        type: "hero",
        size: "default",
        image: "/images/texture-home.jpg",
        imageAlt: "",
        breadcrumbLabel: "Home",
        breadcrumbHref: "/en-ca",
        title: "Your mobile app, from idea to the",
        titleHighlight: "App Store",
        text: "Our team designs and builds native and hybrid iOS and Android mobile applications, built for performance, user experience and business growth.",
        cta: { text: "Discuss my project", href: "/en-ca/contact-us" },
      },
      {
        type: "richText",
        title: "Our approach to mobile development",
        bodyHtml:
          "<p>Every mobile project comes with its own constraints: budget, timelines, functional complexity, target platforms. That's why our team masters both <strong>native development</strong> (Swift/SwiftUI for iOS, Kotlin for Android) and <strong>hybrid</strong> frameworks like React Native, Flutter and .NET MAUI, to deliver the solution best suited to your context rather than a one-size-fits-all answer.</p><ul><li>Native iOS and Android apps for optimal performance and system integration</li><li>Hybrid apps for a reduced time-to-market and a shared codebase</li><li>Integration with your existing systems (API, authentication, payment, CRM)</li><li>Deployment and monitoring on the App Store and Google Play</li></ul><p>Why choose Nmédia? Because our analysts, architects, UX designers and mobile developers have worked under one roof for over 25 years, with hands-on experience launching applications used by hundreds of thousands of users.</p>",
      },
      {
        type: "featureGrid",
        title: "Why trust Nmédia with your mobile app",
        items: [
          {
            title: "Native performance",
            text: "Smooth, responsive applications, optimized for each platform, that fully leverage the device's capabilities.",
          },
          {
            title: "Reduced time-to-market",
            text: "A hybrid approach when it's the right fit, to launch a robust version on iOS and Android faster.",
          },
          {
            title: "Polished user experience",
            text: "UX/UI design centered on your users, for lasting adoption and an experience that lives up to your brand.",
          },
          {
            title: "Simplified maintenance",
            text: "An architecture built to evolve: updates, new features and ongoing technical support after launch.",
          },
        ],
      },
      {
        type: "goldCard",
        image: "/images/ai-expertise.png",
        imageAlt: "Illustration of Nmédia's artificial intelligence expertise",
        title: "Artificial intelligence powering your mobile applications",
        paragraphs: [
          "Personalized recommendations, conversational assistants, predictive analytics or task automation: we integrate artificial intelligence directly into your mobile apps to enrich the user experience without adding complexity to your technology ecosystem.",
        ],
        linkText: "Discover our custom development",
        linkHref: "/en-ca/services/devops",
      },
      {
        type: "cardGrid",
        title: "A mobile project that proved itself",
        text: "Native iOS and Android applications deployed to hundreds of thousands of users.",
        cards: [
          {
            eyebrow: "Moi, Metro's loyalty program",
            heading: "iOS and Android mobile apps for a multi-banner loyalty program",
            href: "/en-ca/projects/moi-metro-s-loyalty-program",
            image: "/images/projects/moi-metro-thumbnail.jpg",
            imageAlt: "Screenshot of the Moi, Metro's loyalty program mobile app",
          },
        ],
      },
      {
        type: "partners",
        title: "A sample of our exceptional partners",
        partners,
      },
      {
        type: "ctaZone",
        title: "Ready to launch your mobile app?",
        text: "Let's talk about your project: our mobile development experts are here to support you from idea to app store launch.",
        btn1: { text: "Contact us", href: "/en-ca/contact-us" },
        btn2: { text: "Custom development", href: "/en-ca/services/devops" },
      },
    ],
  },
};
