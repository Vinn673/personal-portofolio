import type { ReactElement } from "react";
import Link from "next/link";
import type { Project } from "@/data/projects";
import { ProjectImage } from "./ProjectImage";
import { GitHubIcon, PlayIcon, ExternalIcon, ArrowUpRightIcon } from "./icons";

type ProjectCardProps = {
  project: Project;
  index: number;
  /** When true, shows the detailed description and result (used on Projects page). */
  detailed?: boolean;
};

/**
 * Project card. Reuses the existing .project-card styles.
 * Link buttons only render when their URL exists — missing URLs are hidden,
 * never shown as broken links.
 */
export function ProjectCard({ project, index, detailed = false }: ProjectCardProps) {
  const links = [
    { url: project.links?.github, label: "GitHub", icon: <GitHubIcon /> },
    { url: project.links?.liveDemo, label: "Live Demo", icon: <ExternalIcon /> },
    { url: project.links?.app, label: "App", icon: <PlayIcon /> },
  ].filter(
    (link): link is { url: string; label: string; icon: ReactElement } =>
      Boolean(link.url)
  );

  const detailHref = `/projects/${project.slug}`;

  return (
    <article
      className="project-card is-clickable"
      data-reveal
      data-reveal-delay={String(index * 80)}
    >
      {/* Stretched link: makes the whole card open the detail page.
          Action links below use position:relative + z-index to stay clickable. */}
      <Link
        href={detailHref}
        className="project-card-link"
        aria-label={`View project: ${project.name}`}
      />

      <ProjectImage src={project.image} alt={project.name} index={index} />
      <div className="project-body">
        <div className="project-meta">
          <span>Group project</span>
        </div>
        <h3>{project.name}</h3>
        <p>{project.description}</p>

        {detailed && project.detailedDescription ? (
          <p className="project-detail">{project.detailedDescription}</p>
        ) : null}

        {detailed && project.result ? (
          <p className="project-result">
            <span className="project-result-label">Result</span> {project.result}
          </p>
        ) : null}

        <div className="tag-list">
          {project.technologies.map((technology) => (
            <span key={technology}>{technology}</span>
          ))}
        </div>

        {links.length > 0 ? (
          <div className="project-links">
            {links.map((link) => (
              <a
                key={link.label}
                href={link.url}
                target="_blank"
                rel="noreferrer"
                aria-label={`${link.label} — ${project.name}`}
              >
                {link.icon}
                {link.label}
              </a>
            ))}
          </div>
        ) : null}

        <span className="project-view" aria-hidden="true">
          View project <ArrowUpRightIcon />
        </span>
      </div>
    </article>
  );
}
