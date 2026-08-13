import type { Locale } from "@/lib/i18n";
import type { SeoMeta } from "./types";

export interface ContactContent {
  seo: SeoMeta;
  title: string;
  intro: string;
  formTitle: string;
  formIntro: string;
  requiredFieldsNote: string;
  workWithUsTitle: string;
  workWithUsBtnText: string;
  workWithUsBtnHref: string;
  spontaneousTitle: string;
  spontaneousBtnText: string;
  spontaneousBtnHref: string;
  coordTitle: string;
  hoursTitle: string;
  hours: string[];
  hoursNote: string;
  directionsText: string;
  directionsHref: string;
  fax: string;
  supportTitle: string;
  supportText: string;
  supportBtnText: string;
  supportBtnHref: string;
  emergencyTitle: string;
  emergencySubtitle: string;
  emergencyText: string;
  emergencyBtnText: string;
  emergencyBtnHref: string;
  confirmationTitle: string;
  confirmationText: string;
  confirmationBtnText: string;
}

export const contact: Record<Locale, ContactContent> = {
  fr: {
    seo: {
      title: "Contactez Nmédia — Entreprise de marketing digital et développement Web",
      description:
        "Quelle que soit votre demande concernant l'un de nos 6 services, l'équipe de Nmédia se fera un plaisir de vous accompagner.",
    },
    title: "Nous joindre",
    intro:
      "Quelle que soit votre demande concernant l'un de nos 6 services ou l'étape à laquelle vous vous trouvez dans votre projet numérique, l'équipe de Nmédia se fera un plaisir de vous accompagner dans votre démarche de développement d'affaires en ligne.",
    formTitle: "Contactez-nous",
    formIntro: "Merci de remplir le formulaire de contact suivant. Notre équipe communiquera avec vous dans les plus brefs délais.",
    requiredFieldsNote: "Les champs marqués d'un astérisque sont obligatoires. *",
    workWithUsTitle: "Tu veux travailler avec nous?",
    workWithUsBtnText: "Découvrir les offres d'emploi disponibles",
    workWithUsBtnHref: "/carriere/offres-emploi",
    spontaneousTitle: "Tu veux nous offrir ta candidature spontanée?",
    spontaneousBtnText: "Remplir le formulaire",
    spontaneousBtnHref:
      "https://jobdereve.zohorecruit.com/recruit/Apply.na?digest=m4AnBcQFYzLHcuRGCHQSwq9HXW1hytEPlqFXrY3QoW8-&embedsource=CareerSite",
    coordTitle: "Coordonnées",
    hoursTitle: "Heures d'ouverture",
    hours: ["Du lundi au vendredi", "De 8 h à 12 h", "De 13 h à 17 h"],
    hoursNote: "* À l'exception des jours fériés et de l'horaire d'été",
    directionsText: "Obtenir l'itinéraire",
    directionsHref:
      "https://www.google.com/maps/dir//Nm%C3%A9dia,+1047+Bd+Mercure,+Drummondville,+QC+J2B+3L5/@45.8687227,-72.4750174,17z",
    fax: "819 477-1104",
    supportTitle: "Soutien technique",
    supportText: "Durant les heures d'ouverture de nos bureaux, nous vous recommandons de contacter notre équipe de soutien technique régulière.",
    supportBtnText: "Contacter le soutien technique",
    supportBtnHref: "/support",
    emergencyTitle: "Soutien d'urgence",
    emergencySubtitle: "Pour toute urgence en dehors des heures de bureau",
    emergencyText:
      "Vos affaires numériques sont essentielles et un imprévu peut vite devenir critique. C'est pourquoi notre service de soutien d'urgence est disponible 24 h/24, 7 jours sur 7.",
    emergencyBtnText: "Contacter le soutien d'urgence",
    emergencyBtnHref: "/support/urgence",
    confirmationTitle: "Merci pour votre message!",
    confirmationText: "Notre équipe communiquera avec vous dans les plus brefs délais.",
    confirmationBtnText: "Retour à l'accueil",
  },
  en: {
    seo: {
      title: "Contact Nmédia — Website design and e-commerce agency",
      description:
        "Whatever your request concerning one of our 6 services, the Nmédia team will happily accompany you.",
    },
    title: "Contact us",
    intro:
      "Whatever your request concerning one of our 6 services or the stage you're at in your digital project, the Nmédia team will happily accompany you in your online business development process.",
    formTitle: "Reach out to us",
    formIntro: "Please fill out the following contact form. Our team will contact you as soon as possible.",
    requiredFieldsNote: "Fields marked with an asterisk are mandatory. *",
    workWithUsTitle: "Do you want to work with us?",
    workWithUsBtnText: "Discover available job offers",
    workWithUsBtnHref: "/en-ca/career/job-offers",
    spontaneousTitle: "Would you like to submit a spontaneous application?",
    spontaneousBtnText: "Fill in the form",
    spontaneousBtnHref:
      "https://jobdereve.zohorecruit.com/recruit/Apply.na?digest=m4AnBcQFYzLHcuRGCHQSwq9HXW1hytEPlqFXrY3QoW8-&embedsource=CareerSite",
    coordTitle: "Contact details",
    hoursTitle: "Opening hours",
    hours: ["From Monday to Friday", "From 8:00 a.m. to 12:00 p.m.", "From 1:00 p.m. to 5:00 p.m."],
    hoursNote: "*With the exception of public holidays and summer hours",
    directionsText: "Get directions",
    directionsHref:
      "https://www.google.com/maps/dir//Nm%C3%A9dia,+1047+Bd+Mercure,+Drummondville,+QC+J2B+3L5/@45.8687227,-72.4750174,17z",
    fax: "819-477-1104",
    supportTitle: "Technical support",
    supportText: "During office hours, we recommend contacting our regular technical support team.",
    supportBtnText: "Contact technical support",
    supportBtnHref: "/en-ca/support",
    emergencyTitle: "Emergency support",
    emergencySubtitle: "For any emergency outside business hours",
    emergencyText:
      "We know your online business is vital, and a problem can escalate quickly. That's why our emergency support team is on standby 24/7.",
    emergencyBtnText: "Contact emergency support",
    emergencyBtnHref: "/en-ca/support/emergency",
    confirmationTitle: "Thank you for your message!",
    confirmationText: "Our team will contact you as soon as possible.",
    confirmationBtnText: "Back to homepage",
  },
};
