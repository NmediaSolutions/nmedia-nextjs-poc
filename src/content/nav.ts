import type { Locale } from "@/lib/i18n";

export interface NavLink {
  title: string;
  href: string;
  external?: boolean;
}

export interface ServiceNavLink extends NavLink {
  id: string;
}

export interface NavContent {
  home: NavLink;
  main: NavLink[];
  servicesMain: ServiceNavLink[];
  servicesComplementary: ServiceNavLink[];
  catMain: string;
  catComplementary: string;
  allServices: NavLink;
  contactUs: NavLink;
  career: NavLink;
  footerLegal: NavLink[];
  footerBox: {
    title: string;
    text: string;
    linkText: string;
    linkHref: string;
  };
  footerServicesLabel: string;
  footerCoordLabel: string;
  address: string[];
  phone: { text: string; href: string };
  tollFree: { label: string; text: string; href: string };
  email: string;
  social: {
    facebook: string;
    linkedin: string;
    youtube: string;
  };
  copyright: string;
  langSwitchLabel: string;
}

export const nav: Record<Locale, NavContent> = {
  fr: {
    home: { title: "Accueil", href: "/" },
    main: [
      { title: "Projets", href: "/projets" },
      { title: "Services", href: "/services" },
      { title: "À propos", href: "/a-propos" },
      { title: "Blogue", href: "/blogue" },
      { title: "Carrière", href: "/carriere" },
    ],
    servicesMain: [
      { id: "analyse", title: "Analyse et conception numérique", href: "/services/analyse-et-conception-numerique" },
      { id: "commercialisation", title: "Commercialisation numérique", href: "/services/commercialisation-numerique" },
      { id: "devops", title: "Développement sur mesure", href: "/services/developpement-sur-mesure" },
      { id: "mobile", title: "Expérience mobile", href: "/services/experience-mobile" },
      { id: "integration", title: "Intégration de solutions d'affaires", href: "/services/integration-de-solutions-d-affaires" },
      { id: "ia", title: "Intelligence artificielle", href: "/services/intelligence-artificielle" },
    ],
    servicesComplementary: [
      { id: "formations", title: "Formations", href: "/services/intelligence-artificielle#formations" },
    ],
    catMain: "Services principaux",
    catComplementary: "Services complémentaires",
    allServices: { title: "Tous nos services", href: "/services" },
    contactUs: { title: "Nous joindre", href: "/nous-joindre" },
    career: { title: "Carrière", href: "/carriere" },
    footerLegal: [
      { title: "Mentions légales", href: "/mentions-legales" },
      { title: "Plan du site", href: "/plan-site" },
    ],
    footerBox: {
      title: "Devenez un maillon solide de notre équipe",
      text: "Faites évoluer votre carrière en alliant votre expertise à la nôtre pour créer des projets numériques incroyables!",
      linkText: "Explorer les possibilités de carrière",
      linkHref: "https://jobdereve.nmedia.ca/",
    },
    footerServicesLabel: "Services",
    footerCoordLabel: "Coordonnées",
    address: ["1047, boulevard Mercure", "Drummondville (Québec)", "J2B 3L5"],
    phone: { text: "819 477-0990", href: "tel:+18194770990" },
    tollFree: { label: "Sans frais :", text: "1 866 477-0990", href: "tel:18664770990" },
    email: "info@nmedia.ca",
    social: {
      facebook: "https://www.facebook.com/nmediasolutions",
      linkedin: "https://www.linkedin.com/company/nmedia-solutions",
      youtube: "https://www.youtube.com/channel/UCSX69Rpsp2wFDX7Z33dw5GA",
    },
    copyright: "Tous droits réservés.",
    langSwitchLabel: "EN",
  },
  en: {
    home: { title: "Home", href: "/en-ca" },
    main: [
      { title: "Projects", href: "/en-ca/projects" },
      { title: "Services", href: "/en-ca/services" },
      { title: "About", href: "/en-ca/about" },
      { title: "Blog", href: "/en-ca/blog" },
      { title: "Career", href: "/en-ca/career" },
    ],
    servicesMain: [
      { id: "analyse", title: "Analysis and digital design", href: "/en-ca/services/analysis-and-digital-design" },
      { id: "commercialisation", title: "Digital marketing", href: "/en-ca/services/digital-marketing" },
      { id: "devops", title: "Custom development", href: "/en-ca/services/devops" },
      { id: "mobile", title: "Mobile experience", href: "/en-ca/services/mobile-experience" },
      { id: "integration", title: "Business solutions integration", href: "/en-ca/services/business-solutions-integration" },
      { id: "ia", title: "Artificial intelligence", href: "/en-ca/services/artificial-intelligence" },
    ],
    servicesComplementary: [
      { id: "training", title: "Training", href: "/en-ca/services/artificial-intelligence#training" },
    ],
    catMain: "Core services",
    catComplementary: "Specialized services",
    allServices: { title: "All our services", href: "/en-ca/services" },
    contactUs: { title: "Contact us", href: "/en-ca/contact-us" },
    career: { title: "Career", href: "/en-ca/career" },
    footerLegal: [
      { title: "Legal notices", href: "/en-ca/legal-notices" },
      { title: "Sitemap", href: "/en-ca/sitemap" },
    ],
    footerBox: {
      title: "Become a strong component in our team",
      text: "Advance your career by combining your expertise with ours to create amazing digital projects!",
      linkText: "Explore career opportunities",
      linkHref: "https://jobdereve.nmedia.ca/",
    },
    footerServicesLabel: "Services",
    footerCoordLabel: "Contact details",
    address: ["1047 Mercure Boulevard", "Drummondville, Quebec", "J2B 3L5"],
    phone: { text: "819-477-0990", href: "tel:+18194770990" },
    tollFree: { label: "Toll-free:", text: "1-866-477-0990", href: "tel:18664770990" },
    email: "info@nmedia.ca",
    social: {
      facebook: "https://www.facebook.com/nmediasolutions",
      linkedin: "https://www.linkedin.com/company/nmedia-solutions",
      youtube: "https://www.youtube.com/channel/UCSX69Rpsp2wFDX7Z33dw5GA",
    },
    copyright: "All rights reserved",
    langSwitchLabel: "FR",
  },
};

export const formLabels: Record<Locale, {
  why: string;
  reasons: { value: string; label: string; email: string }[];
  service: { label: string; placeholder: string; options: { value: string; label: string }[] };
  firstName: { label: string; placeholder: string };
  lastName: { label: string; placeholder: string };
  businessName: { label: string; placeholder: string };
  phone: { label: string; placeholder: string };
  email: { label: string; placeholder: string };
  messageProject: { label: string; placeholder: string };
  messageQuestion: { label: string; placeholder: string };
  requiredField: string;
  submit: string;
  declarationPrefix: string;
  declarationLinkText: string;
  declarationHref: string;
}> = {
  fr: {
    why: "Pour quelle raison nous contactez-vous?",
    reasons: [
      { value: "project", label: "J'ai un projet", email: "ventes@nmedia.ca" },
      { value: "sponsor", label: "Je voudrais faire une demande de commandite ou de don", email: "info@nmedia.ca" },
      { value: "logo", label: "Je voudrais votre logo ou du matériel promotionnel", email: "nservices@nmedia.ca" },
      { value: "question", label: "J'ai une autre question", email: "info@nmedia.ca" },
    ],
    service: {
      label: "Pour quel(s) service(s)?",
      placeholder: "Sélectionnez un service",
      options: [
        { value: "Plusieurs de vos services", label: "Plusieurs de vos services" },
        { value: "Analyse et conception numérique", label: "Analyse et conception numérique" },
        { value: "Commercialisation numérique", label: "Commercialisation numérique" },
        { value: "Développement sur mesure", label: "Développement sur mesure" },
        { value: "Expérience mobile", label: "Expérience mobile" },
        { value: "Intégration de solutions d'affaires", label: "Intégration de solutions d'affaires" },
        { value: "Intelligence artificielle", label: "Intelligence artificielle" },
      ],
    },
    firstName: { label: "Prénom", placeholder: "Votre prénom" },
    lastName: { label: "Nom", placeholder: "Votre nom" },
    businessName: { label: "Nom de l'entreprise", placeholder: "Nom de l'entreprise" },
    phone: { label: "Téléphone", placeholder: "000 000-0000" },
    email: { label: "Courriel", placeholder: "courriel@exemple.com" },
    messageProject: { label: "Parlez-nous de vos besoins", placeholder: "Décrivez-nous vos besoins." },
    messageQuestion: { label: "Votre question", placeholder: "" },
    requiredField: "Champ requis",
    submit: "Envoyer",
    declarationPrefix: "En soumettant ce formulaire, je déclare avoir lu et accepté la",
    declarationLinkText: "Politique de confidentialité de Nmédia",
    declarationHref: "/mentions-legales#tabPanel-3",
  },
  en: {
    why: "Why do you contact us?",
    reasons: [
      { value: "project", label: "I have a project", email: "ventes@nmedia.ca" },
      { value: "sponsor", label: "I would like to request a sponsorship or donation", email: "info@nmedia.ca" },
      { value: "logo", label: "I would like your logo or promotional material", email: "nservices@nmedia.ca" },
      { value: "question", label: "I have another question", email: "info@nmedia.ca" },
    ],
    service: {
      label: "For which service(s)?",
      placeholder: "Select a service",
      options: [
        { value: "Several of your services", label: "Several of your services" },
        { value: "Analysis and digital design", label: "Analysis and digital design" },
        { value: "Digital marketing", label: "Digital marketing" },
        { value: "Custom development", label: "Custom development" },
        { value: "Mobile experience", label: "Mobile experience" },
        { value: "Business solutions integration", label: "Business solutions integration" },
        { value: "Artificial intelligence", label: "Artificial intelligence" },
      ],
    },
    firstName: { label: "First name", placeholder: "Your first name" },
    lastName: { label: "Last name", placeholder: "Your last name" },
    businessName: { label: "Company name", placeholder: "Company name" },
    phone: { label: "Phone number", placeholder: "000-000-0000" },
    email: { label: "Email", placeholder: "email@example.com" },
    messageProject: { label: "Tell us about your needs", placeholder: "Describe your needs." },
    messageQuestion: { label: "Your question", placeholder: "" },
    requiredField: "Required field",
    submit: "Send",
    declarationPrefix: "By submitting this form, you are agreeing that you have read and accepted",
    declarationLinkText: "Nmédia's Privacy policy",
    declarationHref: "/en-ca/legal-notices#tabPanel-6",
  },
};
