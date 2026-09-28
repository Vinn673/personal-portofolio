import type { Metadata } from "next";
import { projects } from "@/data/projects";
import { ProjectCard } from "@/components/ProjectCard";

export const metadata: Metadata = {
  title: "Projects",
  description:
    "Kumpulan project kelompok Marvin Adriano Rusdianto. Detail akan diperbarui secara bertahap.",
};

export default function ProjectsPage() {
  return (
    <section className="section" aria-labelledby="projects-title">
      <div className="container">
        <div className="section-heading">
          <div className="section-label">
            <span>03</span>
            <span>Projects</span>
          </div>
          <div data-reveal>
            <h2 id="projects-title">Selected group projects.</h2>
            <p>
              A collection of collaborative projects I've worked on throughout
              my academic journey, covering AI, machine learning, computer
              vision, and web development.
            </p>
          </div>
        </div>
        <div className="projects-grid">
          {projects.map((project, index) => (
            <ProjectCard
              key={project.id}
              project={project}
              index={index}
              detailed
            />
          ))}
        </div>
      </div>
    </section>
  );
}
