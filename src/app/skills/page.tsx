import type { Metadata } from "next";
import { skillCategories } from "@/data/skills";
import { SkillCard } from "@/components/SkillCard";

export const metadata: Metadata = {
  title: "Skills",
  description:
    "Kemampuan teknis Marvin Adriano Rusdianto: programming, tools, dan database.",
};

export default function SkillsPage() {
  return (
    <section className="section section-tint" aria-labelledby="skills-title">
      <div className="container split-section">
        <div className="section-label">
          <span>02</span>
          <span>Skills</span>
        </div>
        <div className="section-content" data-reveal>
          <h2 id="skills-title">
            Technologies I use
            <br />
            <span>and explore.</span>
          </h2>
          <p>
            A collection of technologies I have used in coursework and projects,
            along with the tools I continue to explore and learn.
          </p>
          <div className="skills-grid">
            {skillCategories.map((category) => (
              <SkillCard key={category.title} category={category} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
