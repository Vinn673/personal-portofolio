import type { Metadata } from "next";
import type { ReactElement } from "react";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { projects, getProjectBySlug } from "@/data/projects";
import {
  GitHubIcon,
  PlayIcon,
  ExternalIcon,
  ArrowRightIcon,
} from "@/components/icons";

type PageProps = {
  params: Promise<{ slug: string }>;
};

// Pre-render a static detail page for every known project slug.
export function generateStaticParams() {
  return projects.map((project) => ({ slug: project.slug }));
}

// Per-project metadata; falls back gracefully for unknown slugs.
export async function generateMetadata({
  params,
}: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const project = getProjectBySlug(slug);
  if (!project) {
    return { title: "Project not found" };
  }
  return {
    title: project.name,
    description: project.description,
  };
}

export default async function ProjectDetailPage({ params }: PageProps) {
  const { slug } = await params;
  const project = getProjectBySlug(slug);

  // Invalid slug -> proper Next.js 404 page.
  if (!project) {
    notFound();
  }

  const links = [
    { url: project.links?.github, label: "GitHub", icon: <GitHubIcon /> },
    { url: project.links?.liveDemo, label: "Live demo", icon: <ExternalIcon /> },
    { url: project.links?.app, label: "Try the App", icon: <PlayIcon /> },
    { url: project.links?.demoVideo, label: "Demo Video", icon: <PlayIcon /> },
  ].filter(
    (link): link is { url: string; label: string; icon: ReactElement } =>
      Boolean(link.url)
  );

  const gallery = project.images?.filter(Boolean) ?? [];

  return (
    <article className="section project-detail-page">
      <div className="container">
        {/* Breadcrumb + back navigation */}
        <nav className="project-breadcrumb" aria-label="Breadcrumb" data-reveal>
          <Link href="/projects" className="back-link">
            <span aria-hidden="true">←</span> Back to Projects
          </Link>
          <span className="crumb-trail" aria-hidden="true">
            Projects <span className="crumb-sep">/</span> {project.name}
          </span>
        </nav>

        {/* ── Header ─────────────────────────────────────────── */}
        <header className="project-hero" data-reveal>
          <div className="project-hero-copy">
            <p className="project-type">Group project</p>
            <h1>{project.name}</h1>
            <p className="project-hero-desc">{project.description}</p>

            <div className="tag-list">
              {project.technologies.map((technology) => (
                <span key={technology}>{technology}</span>
              ))}
            </div>

            {links.length > 0 ? (
              <div className="project-hero-actions">
                {links.map((link) => (
                  <a
                    key={link.label}
                    className="button button-primary"
                    href={link.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={`${link.label} — ${project.name}`}
                  >
                    {link.icon}
                    {link.label}
                  </a>
                ))}
              </div>
            ) : null}
          </div>

          <div className="project-hero-visual">
            <div className="project-detail-image">
              {project.image ? (
                <Image
                  src={project.image}
                  alt={`Tampilan utama ${project.name}`}
                  fill
                  sizes="(max-width: 800px) 100vw, 560px"
                  style={{ objectFit: "cover" }}
                  priority
                />
              ) : (
                <div className="project-placeholder">
                  Project
                  <br />
                  preview
                </div>
              )}
            </div>
          </div>
        </header>

        {/* ── Body ───────────────────────────────────────────── */}
        <div className="project-detail-body">
          <section className="project-block" data-reveal aria-labelledby="overview-title">
            <h2 id="overview-title" className="project-block-title">
              Overview
            </h2>
            <p>{project.overview ?? project.detailedDescription ?? project.description}</p>
          </section>

          <section className="project-block" data-reveal aria-labelledby="tech-title">
            <h2 id="tech-title" className="project-block-title">
              Technologies
            </h2>
            <div className="tag-list">
              {project.technologies.map((technology) => (
                <span key={technology}>{technology}</span>
              ))}
            </div>
          </section>

          {project.result ? (
            <section className="project-block" data-reveal aria-labelledby="result-title">
              <h2 id="result-title" className="project-block-title">
                Result
              </h2>
              <p className="project-result-highlight">{project.result}</p>
            </section>
          ) : null}

          {gallery.length > 0 ? (
            <section className="project-block" data-reveal aria-labelledby="gallery-title">
              <h2 id="gallery-title" className="project-block-title">
                Gallery
              </h2>
              <div className="project-gallery">
                {gallery.map((src, i) => (
                  <div className="project-gallery-item" key={src}>
                    <Image
                      src={src}
                      alt={`${project.name} — gambar ${i + 1}`}
                      fill
                      sizes="(max-width: 800px) 100vw, 360px"
                      style={{ objectFit: "cover" }}
                    />
                  </div>
                ))}
              </div>
            </section>
          ) : null}
        </div>

        <div className="project-detail-footer" data-reveal>
          <Link href="/projects" className="see-all">
            Explore more projects <ArrowRightIcon />
          </Link>
        </div>
      </div>
    </article>
  );
}
