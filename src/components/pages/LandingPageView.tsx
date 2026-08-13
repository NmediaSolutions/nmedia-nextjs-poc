import Image from "next/image";
import Link from "next/link";
import type { Locale } from "@/lib/i18n";
import type { LandingContent, LandingSection } from "@/content/types";
import { assetPath } from "@/lib/asset-path";
import Banner from "@/components/sections/Banner";
import Card from "@/components/sections/Card";
import CtaZone from "@/components/sections/CtaZone";
import GoldCard from "@/components/sections/GoldCard";
import PartnersMarquee from "@/components/sections/PartnersMarquee";

/**
 * Renderer generique de landing page.
 *
 * Chaque section du contenu (voir LandingSection dans @/content/types) est
 * mappee 1:1 sur un pattern visuel deja existant sur le site (memes classes,
 * memes composants que (fr)/page.tsx, ServicePageView, ProjectPageView).
 *
 * IMPORTANT : ce fichier est le SEUL endroit ou du JSX de landing page doit
 * etre ecrit. Une page de contenu (src/content/landings/*.ts) ne doit
 * jamais contenir de JSX ni de classes Tailwind — uniquement des donnees.
 * C'est ce qui garantit qu'un agent IA ne peut pas deriver du design en
 * generant une nouvelle landing page.
 *
 * Pour ajouter un nouveau type de section, voir la procedure dans
 * .opencode/skills/nmedia-landing-page/SKILL.md.
 */
export default function LandingPageView({
  landing,
  locale,
}: {
  landing: LandingContent;
  locale: Locale;
}) {
  const c = landing[locale];

  return (
    <>
      {c.sections.map((section, index) => (
        <LandingSectionRenderer key={index} section={section} locale={locale} />
      ))}
    </>
  );
}

function LandingSectionRenderer({ section, locale }: { section: LandingSection; locale: Locale }) {
  switch (section.type) {
    case "hero": {
      const isDefault = section.size === "default";
      return (
        <Banner
          image={section.image}
          imageAlt={section.imageAlt}
          breadcrumbLabel={section.breadcrumbLabel}
          breadcrumbHref={section.breadcrumbHref}
          size={section.size ?? "small"}
        >
          {isDefault ? (
            <h1 className="hero-title text-white max-w-[820px] mb-28">
              {section.title}
              {section.titleHighlight && (
                <>
                  {" "}
                  <strong className="text-primary">{section.titleHighlight}</strong>
                </>
              )}
            </h1>
          ) : (
            <h1 className="text-white mb-0">
              {section.title}
              {section.titleHighlight && <strong className="text-primary"> {section.titleHighlight}</strong>}
            </h1>
          )}
          {section.text && <p className="text-18 max-w-[680px] mb-32 text-white/90">{section.text}</p>}
          {section.cta && (
            <Link href={section.cta.href} className="btn-primary no-underline inline-block">
              {section.cta.text}
            </Link>
          )}
        </Banner>
      );
    }

    case "richText":
      return (
        <section className="wrapper py-48 reduced">
          {section.title && <h2>{section.title}</h2>}
          <div className="rte text-18" dangerouslySetInnerHTML={{ __html: section.bodyHtml }} />
        </section>
      );

    case "beigeSection":
      return (
        <section className="bg-beige">
          <div className="wrapper py-96 tablet:py-48">
            <div className="grid grid-cols-1 gap-64 lg:grid-cols-[480px_1fr]">
              <h2 className="mb-0">{section.title}</h2>
              <div>
                {section.paragraphs.map((p, i) => (
                  <p
                    key={i}
                    className={[
                      "text-18",
                      i === 0 ? "mt-0" : "",
                      i === section.paragraphs.length - 1 ? "mb-0" : "",
                    ]
                      .filter(Boolean)
                      .join(" ")}
                  >
                    {p}
                  </p>
                ))}
              </div>
            </div>
          </div>
        </section>
      );

    case "goldCard":
      return (
        <section className="bg-beige">
          <div className="wrapper py-120 tablet:py-64">
            <GoldCard image={section.image} imageAlt={section.imageAlt}>
              <h2 className="max-w-[450px] font-normal text-white">{section.title}</h2>
              {section.paragraphs.map((p, i) => (
                <p key={i} className="max-w-[450px] text-18">
                  {p}
                </p>
              ))}
              {section.linkHref && section.linkText && (
                <a href={section.linkHref} className="btn btn-big no-underline mt-20 inline-flex text-white">
                  {section.linkText} <span aria-hidden>→</span>
                </a>
              )}
            </GoldCard>
          </div>
        </section>
      );

    case "featureGrid":
      return (
        <section className="wrapper py-48 reduced">
          <h2>{section.title}</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-24 mt-32">
            {section.items.map((item) => (
              <Link
                key={item.title}
                href={item.href ?? "#"}
                className="block no-underline bg-beige rounded-md p-24 hover:bg-tabSelected transition-colors"
              >
                <h3 className="text-21 mb-8">{item.title}</h3>
                <p className="text-text m-0">{item.text}</p>
              </Link>
            ))}
          </div>
        </section>
      );

    case "cardGrid":
      return (
        <section className="wrapper py-120 tablet:py-64">
          <div className="mb-64 flex flex-col items-start justify-between gap-24 lg:flex-row lg:items-end">
            <div className="max-w-reduced">
              <h2>{section.title}</h2>
              {section.text && <p className="mb-0 text-18">{section.text}</p>}
            </div>
            {section.seeAllCta && (
              <Link
                href={section.seeAllCta.href}
                className="inline-flex shrink-0 items-center gap-8 whitespace-nowrap font-semibold text-primary underline hover:no-underline"
              >
                {section.seeAllCta.text} <span aria-hidden>→</span>
              </Link>
            )}
          </div>
          <div className="grid grid-cols-1 gap-96 md:grid-cols-2 tablet:gap-64">
            {section.cards.map((card, i) => (
              <Card key={card.href} card={card} priority={i === 0} />
            ))}
          </div>
        </section>
      );

    case "ctaBand":
      return (
        <section className="grain relative overflow-hidden bg-primary text-white">
          <div className="grid grid-cols-1 lg:grid-cols-2">
            <div className="px-90 pb-90 pt-120 font-semibold tablet:px-32 tablet:py-48">
              <h2 className="max-w-[540px] font-normal text-white">{section.title}</h2>
              <p className="max-w-[540px] text-18">{section.text}</p>
              <div className="mt-24 flex flex-wrap items-center gap-24">
                <Link href={section.btn1.href} className="btn btn-big no-underline text-white">
                  {section.btn1.text} <span aria-hidden>→</span>
                </Link>
                {section.btn2 && (
                  <Link
                    href={section.btn2.href}
                    className="inline-flex items-center gap-8 font-semibold text-white underline hover:no-underline"
                  >
                    {section.btn2.text} <span aria-hidden>→</span>
                  </Link>
                )}
              </div>
            </div>
            <div className="relative min-h-[400px] mix-blend-multiply tablet:min-h-[260px]">
              <Image
                src={assetPath(section.image)}
                alt={section.imageAlt}
                fill
                sizes="(max-width: 1024px) 100vw, 50vw"
                className="object-cover"
              />
            </div>
          </div>
        </section>
      );

    case "ctaZone":
      return (
        <CtaZone title={section.title} text={section.text} btn1={section.btn1} btn2={section.btn2} />
      );

    case "highlightCard":
      return (
        <section className="wrapper py-96 tablet:py-48">
          <div className="grain relative overflow-hidden rounded-md bg-black text-white">
            <div className="grid grid-cols-1 lg:grid-cols-2">
              <div className="p-72 tablet:p-32">
                <h2 className="max-w-[486px] text-white">{section.title}</h2>
                <p className="max-w-[486px] text-18">{section.text}</p>
                {section.cta && (
                  <a
                    href={section.cta.href}
                    className="btn-outline no-underline mt-20 inline-block text-white hover:text-white"
                  >
                    {section.cta.text}
                  </a>
                )}
              </div>
              <div className="relative min-h-[360px] tablet:min-h-[240px]">
                <Image
                  src={assetPath(section.image)}
                  alt={section.imageAlt}
                  fill
                  sizes="(max-width: 1024px) 100vw, 50vw"
                  className="object-cover"
                />
              </div>
            </div>
          </div>
        </section>
      );

    case "partners":
      return (
        <section className="bg-beige">
          <div className="wrapper py-96 tablet:py-48">
            <h2 className="mb-64 max-w-reduced tablet:mb-32">{section.title}</h2>
            <PartnersMarquee partners={section.partners} locale={locale} />
          </div>
        </section>
      );

    default: {
      // Verification exhaustive : si un nouveau type de LandingSection est
      // ajoute a l'union sans etre gere ci-dessus, cette ligne casse la
      // compilation TypeScript (voir .opencode/skills/nmedia-landing-page).
      const _exhaustive: never = section;
      return _exhaustive;
    }
  }
}
