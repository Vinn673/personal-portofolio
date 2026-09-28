import type { ReactNode } from "react";
import type { SkillCategory } from "@/data/skills";
import { CodeIcon, ToolIcon, DatabaseIcon, SparkIcon } from "./icons";

type SkillCardProps = {
  category: SkillCategory;
};

// Pick an icon based on the category title, with a sensible default.
// Keeps the mapping data-driven — new categories still render cleanly.
function iconForCategory(title: string): ReactNode {
  const key = title.toLowerCase();
  if (key.includes("program") || key.includes("language")) return <CodeIcon />;
  if (key.includes("tool")) return <ToolIcon />;
  if (key.includes("data")) return <DatabaseIcon />;
  return <SparkIcon />;
}

/**
 * A single skill category group.
 * Reuses the existing .skill-group / .skill-list styles.
 */
export function SkillCard({ category }: SkillCardProps) {
  return (
    <div className="skill-group" data-reveal>
      <div className="skill-group-head">
        <span className="skill-group-icon" aria-hidden="true">
          {iconForCategory(category.title)}
        </span>
        <h3>{category.title}</h3>
      </div>
      <div className="skill-list">
        {category.skills.map((skill) => (
          <span key={skill}>{skill}</span>
        ))}
      </div>
    </div>
  );
}
