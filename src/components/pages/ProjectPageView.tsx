import Image from "next/image";
import Link from "next/link";
import type { Locale } from "@/lib/i18n";
import type { ProjectContent } from "@/content/types";
import { nav } from "@/content/nav";
import Banner from "@/components/sections/Banner";
import Card from "@/components/sections/Card";
import CtaZone from "@/components/sections/CtaZone";
import { assetPath } from "@/lib/asset-path";

export default function ProjectPageView({ project, locale }: { project: ProjectContent; locale: Locale }) {
  const c = project[locale];
  const navContent = nav[locale];
  const backLabel = locale === "fr" ? "Retour aux projets" : "Back to the projects";

  return (
    <>
      <Banner breadcrumbLabel={backLabel} breadcrumbHref={navContent.main[0].href} image={project.heroImage}>
        <h1 className="text-white mb-8">{c.title}</h1>
        <p className="text-white/80 text-18">{c.subtitle}</p>
      </Banner>

      <section className="wrapper py-48 reduced">
        <div className="relative aspect-[16/9] rounded-md overflow-hidden mb-32">
          <Image src={assetPath(project.heroImage)} alt={project.heroImageAlt} fill className="object-cover" />
        </div>

        <div className="flex flex-wrap items-start justify-between gap-32 mb-32 pb-32 border-b border-border">
          {c.clientLogo && (
            <a href={c.clientUrl} target="_blank" rel="noreferrer">
              <Image src={assetPath(c.clientLogo)} alt={c.clientLogoAlt ?? ""} width={140} height={60} />
            </a>
          )}
          <div>
            <p className="text-12 uppercase tracking-wide text-label font-semibold mb-8">Services</p>
            <ul className="list-none p-0 m-0 space-y-4">
              {c.services.map((s) => (
                <li key={s.title}>
                  <Link href={s.href}>{s.title}</Link>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <p className="text-12 uppercase tracking-wide text-label font-semibold mb-8">
              {locale === "fr" ? "Depuis" : "Since"}
            </p>
            <p className="text-18 font-semibold m-0">{c.since}</p>
          </div>
          {c.clientUrl && (
            <a href={c.clientUrl} target="_blank" rel="noreferrer" className="btn-outline no-underline">
              {c.visitLabel}
            </a>
          )}
        </div>

        <div className="rte text-18" dangerouslySetInnerHTML={{ __html: c.body }} />
      </section>

      {c.otherProjects.length > 0 && (
        <section className="wrapper py-96 tablet:py-48">
          <h2>{c.otherProjectsTitle}</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-32">
            {c.otherProjects.map((p) => (
              <Card key={p.href} card={p} />
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
