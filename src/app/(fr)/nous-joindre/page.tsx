import type { Metadata } from "next";
import Link from "next/link";
import { contact } from "@/content/contact";
import Banner from "@/components/sections/Banner";
import ContactForm from "@/components/sections/ContactForm";

const c = contact.fr;

export const metadata: Metadata = {
  title: c.seo.title,
  description: c.seo.description,
  alternates: {
    languages: {
      "fr-CA": "https://www.nmedia.ca/nous-joindre",
      "en-CA": "https://www.nmedia.ca/en-ca/contact-us",
    },
  },
};

export default function ContactPage() {
  return (
    <>
      <Banner image="/images/texture-contact.jpg">
        <h1 className="text-white mb-0">{c.title}</h1>
      </Banner>

      <section className="wrapper py-48 reduced">
        <p className="text-18">{c.intro}</p>
      </section>

      <section className="wrapper py-48">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-48">
          <div>
            <h2>{c.formTitle}</h2>
            <p>{c.formIntro}</p>
            <p className="text-14 text-label">{c.requiredFieldsNote}</p>

            <div className="mt-32 space-y-16">
              <div>
                <h3 className="text-18">{c.workWithUsTitle}</h3>
                <Link href={c.workWithUsBtnHref} className="btn-outline no-underline">
                  {c.workWithUsBtnText}
                </Link>
              </div>
              <div>
                <h3 className="text-18">{c.spontaneousTitle}</h3>
                <a href={c.spontaneousBtnHref} target="_blank" rel="noreferrer" className="btn-outline no-underline">
                  {c.spontaneousBtnText}
                </a>
              </div>
            </div>
          </div>

          <ContactForm locale="fr" confirmationHref="/nous-joindre/confirmation" />
        </div>
      </section>

      <section className="bg-beige">
        <div className="wrapper py-96 tablet:py-48">
          <h2>{c.coordTitle}</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-32">
            <div>
              <p>1047, boulevard Mercure<br />Drummondville (Québec)<br />J2B 3L5</p>
              <p>
                <strong>{c.hoursTitle}</strong>
                <br />
                {c.hours.join(" — ")}
              </p>
              <p className="text-14 text-label">{c.hoursNote}</p>
              <a href={c.directionsHref} target="_blank" rel="noreferrer" className="btn-outline no-underline">
                {c.directionsText}
              </a>
              <p className="mt-16">
                Téléphone : <a href="tel:8194770990">819 477-0990</a>
                <br />
                Sans frais : <a href="tel:18664770990">1 866 477-0990</a>
                <br />
                Télécopieur : {c.fax}
                <br />
                Courriel : <a href="mailto:info@nmedia.ca">info@nmedia.ca</a>
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="wrapper py-96 tablet:py-48 grid grid-cols-1 md:grid-cols-2 gap-32">
        <div className="bg-beige rounded-md p-24">
          <h2 className="text-24">{c.supportTitle}</h2>
          <p>{c.supportText}</p>
          <Link href={c.supportBtnHref} className="btn-outline no-underline">
            {c.supportBtnText}
          </Link>
        </div>
        <div className="bg-beige rounded-md p-24">
          <h2 className="text-24">{c.emergencyTitle}</h2>
          <p>
            <strong>{c.emergencySubtitle}</strong>
          </p>
          <p>{c.emergencyText}</p>
          <Link href={c.emergencyBtnHref} className="btn-outline no-underline">
            {c.emergencyBtnText}
          </Link>
        </div>
      </section>
    </>
  );
}
