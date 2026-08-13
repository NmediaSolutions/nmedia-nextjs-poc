import fs from "node:fs";
import path from "node:path";
import matter from "gray-matter";
import type { Locale } from "./i18n";
import { blogRegistry, findBlogEntryBySlug, type BlogRegistryEntry } from "@/content/blog/registry";

export interface BlogFrontmatter {
  id: string;
  title: string;
  category: string;
  date: string;
  author: string;
  image: string;
  imageAlt: string;
  seoTitle: string;
  seoDescription: string;
  excerpt: string;
}

export interface BlogPost {
  entry: BlogRegistryEntry;
  frontmatter: BlogFrontmatter;
  content: string;
}

const BLOG_DIR = path.join(process.cwd(), "src", "content", "blog");

export function getBlogPost(locale: Locale, slug: string): BlogPost | null {
  const entry = findBlogEntryBySlug(locale, slug);
  if (!entry) return null;

  const filePath = path.join(BLOG_DIR, entry.file[locale]);
  const raw = fs.readFileSync(filePath, "utf8");
  const { data, content } = matter(raw);

  return {
    entry,
    frontmatter: data as BlogFrontmatter,
    content,
  };
}

export function getAllBlogSlugs(locale: Locale): string[] {
  return blogRegistry.map((entry) => entry.slug[locale]);
}

export function getAllBlogEntries(): BlogRegistryEntry[] {
  return blogRegistry;
}
