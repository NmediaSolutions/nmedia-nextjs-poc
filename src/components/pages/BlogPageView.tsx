import Image from "next/image";
import { MDXRemote } from "next-mdx-remote/rsc";
import type { Locale } from "@/lib/i18n";
import type { BlogPost } from "@/lib/blog";
import { nav } from "@/content/nav";
import Banner from "@/components/sections/Banner";
import { assetPath } from "@/lib/asset-path";

export default function BlogPageView({ post, locale }: { post: BlogPost; locale: Locale }) {
  const navContent = nav[locale];
  const backLabel = locale === "fr" ? "Retour aux articles" : "Back to the blog";
  const authorLabel = locale === "fr" ? "Auteur" : "Author";
  const dateLabel = locale === "fr" ? "Date" : "Date";
  const formattedDate = new Date(post.frontmatter.date).toLocaleDateString(locale === "fr" ? "fr-CA" : "en-CA", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });

  return (
    <>
      <Banner
        breadcrumbLabel={backLabel}
        breadcrumbHref={navContent.main[3].href}
        image={post.frontmatter.image}
      >
        <p className="text-primary uppercase tracking-wide text-14 font-semibold">{post.frontmatter.category}</p>
        <h1 className="text-white mb-0 max-w-[900px]">{post.frontmatter.title}</h1>
      </Banner>

      <section className="wrapper py-48 reduced">
        <div className="flex items-center gap-32 text-14 text-label mb-32 pb-32 border-b border-border">
          <div>
            <p className="uppercase tracking-wide font-semibold m-0">{authorLabel}</p>
            <p className="m-0 text-text">{post.frontmatter.author}</p>
          </div>
          <div>
            <p className="uppercase tracking-wide font-semibold m-0">{dateLabel}</p>
            <p className="m-0 text-text">{formattedDate}</p>
          </div>
        </div>

        <div className="relative aspect-[16/9] rounded-md overflow-hidden mb-32">
          <Image
            src={assetPath(post.frontmatter.image)}
            alt={post.frontmatter.imageAlt}
            fill
            priority
            className="object-cover"
          />
        </div>

        <div className="rte text-18">
          <MDXRemote source={post.content} />
        </div>
      </section>
    </>
  );
}
