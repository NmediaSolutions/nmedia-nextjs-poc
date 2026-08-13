import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { getBlogPost, getAllBlogSlugs } from "@/lib/blog";
import { blogRegistry } from "@/content/blog/registry";
import BlogPageView from "@/components/pages/BlogPageView";

export function generateStaticParams() {
  return getAllBlogSlugs("fr").map((slug) => ({ slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const post = getBlogPost("fr", slug);
  if (!post) return {};
  const entry = blogRegistry.find((e) => e.id === post.frontmatter.id);
  return {
    title: post.frontmatter.seoTitle,
    description: post.frontmatter.seoDescription,
    alternates: entry
      ? {
          languages: {
            "fr-CA": `https://www.nmedia.ca/blogue/${entry.slug.fr}`,
            "en-CA": `https://www.nmedia.ca/en-ca/blog/${entry.slug.en}`,
          },
        }
      : undefined,
  };
}

export default async function BlogPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const post = getBlogPost("fr", slug);
  if (!post) notFound();

  return <BlogPageView post={post} locale="fr" />;
}
