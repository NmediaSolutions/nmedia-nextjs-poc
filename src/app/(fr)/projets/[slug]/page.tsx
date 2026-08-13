import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { projects, findProjectBySlug } from "@/content/projects";
import ProjectPageView from "@/components/pages/ProjectPageView";

export function generateStaticParams() {
  return projects.map((p) => ({ slug: p.slug.fr }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const project = findProjectBySlug("fr", slug);
  if (!project) return {};
  return {
    title: project.fr.seo.title,
    description: project.fr.seo.description,
    alternates: {
      languages: {
        "fr-CA": `https://www.nmedia.ca/projets/${project.slug.fr}`,
        "en-CA": `https://www.nmedia.ca/en-ca/projects/${project.slug.en}`,
      },
    },
  };
}

export default async function ProjectPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const project = findProjectBySlug("fr", slug);
  if (!project) notFound();

  return <ProjectPageView project={project} locale="fr" />;
}
