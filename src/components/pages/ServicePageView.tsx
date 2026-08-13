import Image from "next/image";
import Link from "next/link";
import type { Locale } from "@/lib/i18n";
import type { ServiceContent } from "@/content/types";
import { nav } from "@/content/nav";
import Banner from "@/components/sections/Banner";
import Card from "@/components/sections/Card";
import CtaZone from "@/components/sections/CtaZone";
import { assetPath } from "@/lib/asset-path";

export default function ServicePageView({ service, locale }: { service: ServiceContent; locale: Locale }) {
  const c = service[locale];
  const navContent = nav[locale];

  return (
    <>
      <Banner
        breadcrumbLabel={navContent.main[1].title}
        breadcrumbHref={navContent.main[1].href}
        image={service.bannerImage}
      >
        <h1 className="text-white mb-0">{c.title}</h1>
      </Banner>

      <section className="wrapper py-96 tablet:py-48 reduced">
        <Image src={assetPath(service.logoImage)} alt="" width={96} height={96} className="mb-24" />
        <div className="rte text-18" dangerouslySetInnerHTML={{ __html: `<p>${c.intro}</p>` }} />
      </section>

      <section className="wrapper py-48 reduced">
        <h2>{c.benefitsTitle}</h2>
        <ul className="rte">
          {c.benefits.map((b) => (
            <li key={b.title}>
              <strong>{b.title}</strong> : {b.text}
            </li>
          ))}
        </ul>
      </section>

      <section className="wrapper py-48 reduced">
        <h2>{c.approachTitle}</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-24 mt-32">
          {c.approach.map((item) => (
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

      <section className="wrapper py-48 reduced">
        <h2>{c.whatWeDoTitle}</h2>
        <ul className="rte columns-1 md:columns-2 gap-32">
          {c.whatWeDo.map((item) => (
            <li key={item} className="break-inside-avoid">
              {item}
            </li>
          ))}
        </ul>
      </section>

      <section className="wrapper py-48 reduced">
        <h2>{c.whyUsTitle}</h2>
        {c.whyUsParagraphs.map((p) => (
          <p key={p} className="text-18">
            {p}
          </p>
        ))}
        <div className="flex gap-16 flex-wrap mt-16">
          <Link href={navContent.contactUs.href} className="btn-primary no-underline">
            {navContent.contactUs.title}
          </Link>
          <Link href={navContent.main[0].href} className="btn-outline no-underline">
            {navContent.main[0].title}
          </Link>
        </div>
      </section>

      <section className="bg-beige">
        <div className="wrapper py-96 tablet:py-48 reduced">
          <h2>{c.aiTitle}</h2>
          {c.aiParagraphs.map((p) => (
            <p key={p} className="text-18">
              {p}
            </p>
          ))}
          <Link href={c.aiLinkHref} className="btn-primary no-underline">
            {c.aiLinkText}
          </Link>
        </div>
      </section>

      {c.relatedProjects.length > 0 && (
        <section className="wrapper py-96 tablet:py-48">
          <h2>{c.relatedProjectsTitle}</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-32">
            {c.relatedProjects.map((project) => (
              <Card key={project.href} card={project} />
            ))}
          </div>
        </section>
      )}

      <CtaZone
        title={c.ctaTitle}
        text={c.ctaText}
        btn1={{ text: navContent.contactUs.title, href: navContent.contactUs.href }}
        btn2={{ text: navContent.main[0].title, href: navContent.main[0].href }}
      />
    </>
  );
}
