import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { home } from "@/content/home";
import Banner from "@/components/sections/Banner";
import Card from "@/components/sections/Card";
import GoldCard from "@/components/sections/GoldCard";
import PartnersMarquee from "@/components/sections/PartnersMarquee";
import { assetPath } from "@/lib/asset-path";

const content = home.en;

export const metadata: Metadata = {
  title: content.seo.title,
  description: content.seo.description,
  alternates: { languages: { "fr-CA": "https://www.nmedia.ca/", "en-CA": "https://www.nmedia.ca/en-ca" } },
};

/** Meme structure que la version francaise — voir src/app/(fr)/page.tsx */
export default function HomePageEn() {
  return (
    <>
      <Banner image="/images/texture-home.jpg" size="default">
        <h1 className="hero-title text-white max-w-[820px] mb-28">
          {content.heroTitlePrefix}
          <br />
          {content.heroTitleLine2}
          <strong className="text-primary">{content.heroTitleHighlight}</strong>
          {content.heroTitleSuffix}
        </h1>
        <p className="text-18 max-w-[680px] mb-32 text-white/90">{content.heroText}</p>
        <Link href={content.heroCta.href} className="btn-primary no-underline inline-block">
          {content.heroCta.text}
        </Link>
      </Banner>

      <section className="bg-beige">
        <div className="wrapper py-120 tablet:py-64">
          <GoldCard image={content.aiImage} imageAlt={content.aiImageAlt}>
            <h2 className="max-w-[450px] font-normal text-white">{content.aiTitle}</h2>
            <p className="max-w-[450px] text-18">{content.aiParagraph1}</p>
            <p className="max-w-[450px] text-18">
              {content.aiParagraph2}
              <strong>{content.aiParagraph2Strong}</strong>
              {content.aiParagraph2End}
            </p>
            <a
              href={content.aiLinkHref}
              className="btn btn-big no-underline mt-20 inline-flex text-white"
            >
              {content.aiLinkText} <span aria-hidden>→</span>
            </a>
          </GoldCard>

          <div className="mt-120 grid grid-cols-1 gap-64 lg:grid-cols-[480px_1fr] tablet:mt-64">
            <h2 className="mb-0">{content.linesTitle}</h2>
            <div>
              <p className="mt-0 text-18">{content.linesText}</p>
              <p className="mb-0 text-18">{content.linesText2}</p>
            </div>
          </div>
        </div>
      </section>

      <section className="wrapper py-120 tablet:py-64">
        <div className="mb-64 flex flex-col items-start justify-between gap-24 lg:flex-row lg:items-end">          <div className="max-w-reduced">
            <h2>{content.transformTitle}</h2>
            <p className="mb-0 text-18">{content.transformText}</p>
          </div>
          <Link
            href={content.transformCta.href}
            className="inline-flex shrink-0 items-center gap-8 whitespace-nowrap font-semibold text-primary underline hover:no-underline"
          >
            {content.transformCta.text} <span aria-hidden>→</span>
          </Link>
        </div>
        <div className="grid grid-cols-1 gap-96 md:grid-cols-2 tablet:gap-64">
          {content.featuredProjects.map((project, i) => (
            <Card key={project.href} card={project} priority={i === 0} />
          ))}
        </div>
      </section>

      <section className="bg-beige">
        <div className="wrapper py-96 tablet:py-48">
          <h2 className="mb-64 max-w-reduced tablet:mb-32">{content.partnersTitle}</h2>
          <PartnersMarquee partners={content.partners} locale="en" />
        </div>
      </section>

      <section className="grain relative overflow-hidden bg-primary text-white">
        <div className="grid grid-cols-1 lg:grid-cols-2">
          <div className="px-90 pb-90 pt-120 font-semibold tablet:px-32 tablet:py-48">
            <h2 className="max-w-[540px] font-normal text-white">{content.ctaTitle}</h2>
            <p className="max-w-[540px] text-18">{content.ctaText}</p>
            <div className="mt-24 flex flex-wrap items-center gap-24">
              <Link href={content.ctaBtn1.href} className="btn btn-big no-underline text-white">
                {content.ctaBtn1.text} <span aria-hidden>→</span>
              </Link>
              <Link
                href={content.ctaBtn2.href}
                className="inline-flex items-center gap-8 font-semibold text-white underline hover:no-underline"
              >
                {content.ctaBtn2.text} <span aria-hidden>→</span>
              </Link>
            </div>
          </div>
          <div className="relative min-h-[400px] mix-blend-multiply tablet:min-h-[260px]">
            <Image
              src={assetPath(content.ctaImage)}
              alt={content.ctaImageAlt}
              fill
              sizes="(max-width: 1024px) 100vw, 50vw"
              className="object-cover"
            />
          </div>
        </div>
      </section>

      <section className="wrapper py-96 tablet:py-48">
        <div className="grain relative overflow-hidden rounded-md bg-black text-white">
          <div className="grid grid-cols-1 lg:grid-cols-2">
            <div className="p-72 tablet:p-32">
              <h2 className="max-w-[486px] text-white">{content.careerTitle}</h2>
              <p className="max-w-[486px] text-18">{content.careerText}</p>
              <a
                href={content.careerCta.href}
                className="btn-outline no-underline mt-20 inline-block text-white hover:text-white"
              >
                {content.careerCta.text}
              </a>
            </div>
            <div className="relative min-h-[360px] tablet:min-h-[240px]">
              <Image
                src={assetPath(content.careerImage)}
                alt={content.careerImageAlt}
                fill
                sizes="(max-width: 1024px) 100vw, 50vw"
                className="object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      <section className="wrapper py-120 tablet:py-64">
        <div className="mb-64 flex flex-col items-start justify-between gap-24 lg:flex-row lg:items-end">          <div className="max-w-reduced">
            <h2>{content.blogTitle}</h2>
            <p className="mb-0 text-18">{content.blogText}</p>
          </div>
          <Link
            href={content.blogCta.href}
            className="inline-flex shrink-0 items-center gap-8 whitespace-nowrap font-semibold text-primary underline hover:no-underline"
          >
            {content.blogCta.text} <span aria-hidden>→</span>
          </Link>
        </div>
        <div className="grid grid-cols-1 gap-96 md:grid-cols-2 tablet:gap-64">
          {content.featuredPosts.map((post) => (
            <Card key={post.href} card={post} />
          ))}
        </div>
      </section>
    </>
  );
}
