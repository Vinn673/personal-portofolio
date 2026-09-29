// Skills grouped by category.
// Add or remove entries here to update the Skills section — no UI changes needed.
export type SkillCategory = {
  title: string;
  skills: string[];
};

export const skillCategories: SkillCategory[] = [
  {
    title: "Languages",
    skills: ["Python", "JavaScript", "HTML", "CSS"],
  },
  {
    title: "Libraries",
    skills: ["NumPy", "Pandas", "scikit-learn", "OpenCV", "MediaPipe"],
  },
  {
    title: "Frameworks",
    skills: ["React", "Flask", "Streamlit", "Gradio", "Ultralytics YOLO"],
  },
  {
    title: "Tools & Platforms",
    skills: [
      "Git",
      "GitHub",
      "Firebase",
      "Cloud Firestore",
      "Firebase Hosting",
      "Hugging Face",
    ],
  },
];
