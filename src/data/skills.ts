// Skills grouped by category.
// Add or remove entries here to update the Skills section — no UI changes needed.
export type SkillCategory = {
  title: string;
  skills: string[];
};

export const skillCategories: SkillCategory[] = [
  {
    title: "Languages",
    skills: ["Python", "JavaScript", "C++", "HTML", "CSS"],
  },
  {
    title: "Libraries",
    skills: ["NumPy", "Pandas", "Matplotlib", "scikit-learn", "OpenCV", "MediaPipe"],
  },
  {
    title: "Frameworks",
    skills: ["React", "Flask", "Streamlit", "Next.js", "Ultralytics YOLO"],
  },
  {
    title: "Tools & Platforms",
    skills: [
      "Git",
      "GitHub",
      "VS Code",
      "Jupyter Notebook",
      "Hugging Face",
      "Figma",
      "Canva",
    ],
  },
];

// Soft skills — rendered as pill badges on the Skills page and previewed on Home.
// Kept separate from the technical categories above so both stay easy to edit.
export const softSkills: string[] = [
  "Teamwork",
  "Leadership",
  "Communication",
  "Problem Solving",
  "Adaptability",
  "Critical Thinking",
  "Time Management",
];
