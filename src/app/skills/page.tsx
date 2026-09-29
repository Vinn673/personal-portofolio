import type { Metadata } from "next";
import { skillCategories, softSkills } from "@/data/skills";
import { SkillCard } from "@/components/SkillCard";
import { SparkIcon } from "@/components/icons";

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

          <div className="soft-skills" data-reveal>
            <div className="soft-skills-head">
              <span className="skill-group-icon" aria-hidden="true">
                <SparkIcon />
              </span>
              <h3>Soft Skills</h3>
            </div>
            <ul className="soft-skill-tags">
              {softSkills.map((skill) => (
                <li className="soft-skill-tag" key={skill}>
                  {skill}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
