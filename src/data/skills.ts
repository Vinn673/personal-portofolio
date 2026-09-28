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
    skills: [
      "scikit-learn",
      "Ultralytics YOLO",
      "MediaPipe",
      "OpenCV",
      "NumPy",
      "Pandas",
    ],
  },
  {
    title: "Frameworks",
    skills: ["React", "Flask", "Streamlit", "Gradio"],
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
