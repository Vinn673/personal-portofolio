// Project data — replace placeholder content with real project details later.
// Each entry maps directly to a ProjectCard; no UI changes needed to update content.
//
// HOW TO UPDATE:
// - Fill in real name / descriptions / role / technologies.
// - Add a URL only when it truly exists. Leave it as undefined otherwise —
//   the matching button is hidden automatically (no broken links).
// - Drop screenshots into public/projects/ and point `image` at them,
//   e.g. image: "/projects/my-project.png". Missing images fall back gracefully.
export type ProjectLink = {
  github?: string;
  app?: string;
  liveDemo?: string;
  demoVideo?: string;
};

export type Project = {
  id: string;
  /** URL-friendly slug used for the detail route: /projects/<slug>. Must be unique + stable. */
  slug: string;
  /** Public project name. */
  name: string;
  /** One-line summary shown on the card. */
  description: string;
  /** Longer write-up shown in the project detail Overview section. */
  overview?: string;
  /** Legacy alias kept for older project entries. */
  detailedDescription?: string;
  /** Primary screenshot path, e.g. "/projects/name.png". */
  image?: string;
  /** Additional screenshot paths. */
  images?: string[];
  /** My role in the group project. */
  role: string;
  /** Tech stack used. */
  technologies: string[];
  /** Reusable external links for this project. */
  links?: ProjectLink;
  /** Optional result or achievement, e.g. "Best project award". */
  result?: string;
};

// Six group projects. Content is placeholder until real details are provided.
// Do not invent names, tech, roles, URLs, or achievements — fill these in later.
export const projects: Project[] = [
  {
    id: "project-1",
    slug: "project-1",
    name: "AirBlocks - Hand Gesture Block Puzzle",
    description:
      "AirBlocks is an interactive block puzzle game controlled through hand gestures captured by a webcam. The project uses real-time computer vision to detect hand movements and gestures, allowing players to grab, move, and place blocks without using a keyboard or mouse.",
    overview:
      "AirBlocks combines computer vision with a web-based puzzle game to create a hands-free gaming experience. Using MediaPipe Hand Landmarker, the system tracks 21 hand landmarks and interprets gestures such as a closed fist or pinch to grab blocks and an open hand to release them.\n\nThe game uses a 10×10 grid where players arrange different block shapes and clear completed rows or columns to earn points. The application is built with a Python Flask backend, OpenCV for webcam processing, and an HTML5 Canvas frontend for rendering the game.",
    detailedDescription: undefined,
    image: "/projects/project-1.jpg",
    images: undefined,
    role: "Peran saya (placeholder)",
    technologies: ["Python", "Flask", "MediaPipe", "OpenCV"],
    links: {
      github: "https://github.com/Vinn673/AirBlocks---Computer-Vision",
      app: "https://huggingface.co/spaces/britod/airblocks-handgesture-games",
      demoVideo: "https://drive.google.com/file/d/1rzPOcpkYdnbqFuqbE1CfXpa-nOd3SOLO/view",
    },
    result: undefined,
  },
  {
    id: "project-2",
    slug: "project-2",
    name: "AI-Powered Waste Type Detection",
    description:
      "An interactive computer vision web application that uses YOLO object detection to detect waste objects in real time and classify them into Organic and Inorganic categories through webcam or image upload.",
    overview:
      "Waste Type Detection is a computer vision project designed to assist with automated waste identification and sorting. The application uses a custom-trained YOLO model to detect waste objects and classify them based on predefined waste categories.\n\nThe application is built with Streamlit and supports both real-time webcam detection and static image uploads. Detected objects are displayed with bounding boxes and confidence scores, while each detected item is mapped into either the Organic or Inorganic category.",
    detailedDescription: undefined,
    image: "/projects/project-2.jpg",
    images: undefined,
    role: "Peran saya (placeholder)",
    technologies: ["Python", "Streamlit", "Ultralytics YOLO", "OpenCV"],
    links: {
      github: "https://github.com/Vinn673/Waste-Type-Detection",
      app: "https://waste-type-detection-sprhkotwpyo4gcebfj67st.streamlit.app/",
    },
    result: undefined,
  },
  {
    id: "project-3",
    slug: "project-3",
    name: "Onoma Trace - Name Origin & Nationality Classifier",
    description:
      "A machine learning and NLP application that analyzes romanized personal names and predicts their probable country of origin across 104 countries using character-level linguistic patterns.",
    overview:
      "Onoma Trace is an end-to-end machine learning project that explores how character-level patterns in personal names can be used to predict probable country of origin. The system processes large-scale name data, generates synthetic full-name datasets, and uses character-level TF-IDF features to train lightweight machine learning classifiers.\n\nThe project includes an interactive Gradio web application that allows users to enter individual names or upload CSV files for batch classification. The system returns ranked country predictions with probability scores and supports multiple machine learning models, including Logistic Regression, LinearSVC, and SGD Classifier.",
    detailedDescription: undefined,
    image: "/projects/project-3.jpg",
    images: undefined,
    role: "Peran saya (placeholder)",
    technologies: ["Python", "scikit-learn", "Gradio", "Pandas", "NumPy"],
    links: {
      github: "https://github.com/Vinn673/Onoma-Trace---Machine-Learning",
      app: "https://huggingface.co/spaces/britod/name-origins-checker",
      demoVideo:
        "https://drive.google.com/drive/u/0/folders/11vR_7o_P7wB18QjTrMKqmnOwl6ep9aYj",
    },
    result: undefined,
  },
  {
    id: "project-4",
    slug: "project-4",
    name: "IndoShield - Indonesian Toxic Language Detection",
    description:
      "An NLP application that detects and classifies abusive and hateful language in Indonesian text into four severity levels, from clean to strongly abusive, using classical machine learning models and IndoBERTweet.",
    overview:
      "IndoShield is a Natural Language Processing and machine learning project focused on detecting abusive and hateful language in Indonesian text. Instead of using a simple toxic or non-toxic classification, the system classifies text into four severity levels, ranging from clean to strongly abusive.\n\nThe project combines classical machine learning models, including Naive Bayes, Logistic Regression, and SVM, with a fine-tuned IndoBERTweet transformer model. It also includes Indonesian-specific text preprocessing such as slang normalization, leetspeak handling, and character-level TF-IDF to better handle informal social-media language.\n\nThe project is presented through a Streamlit web application where users can enter Indonesian text and compare predictions from multiple models, including their predicted severity levels and confidence scores.",
    detailedDescription: undefined,
    image: "/projects/project-4.jpg",
    images: undefined,
    role: "Peran saya (placeholder)",
    technologies: ["Python", "scikit-learn", "Streamlit", "IndoBERTweet", "NLP"],
    links: {
      github: "https://github.com/Vinn673/IndoShield",
      app: "https://huggingface.co/spaces/britod/swear-words-detector",
      demoVideo:
        "https://drive.google.com/drive/folders/17NRBhcIx0w8HfKoxa9bIJOY93ZJ0E-SC",
    },
    result: undefined,
  },
  {
    id: "project-5",
    slug: "project-5",
    name: "CarValue ID - Used Car Price Prediction",
    description:
      "A machine learning web application that estimates used-car prices in Indonesia based on brand, model, manufacturing year, mileage, and transmission using a Random Forest regression model.",
    overview:
      "CarValue ID is a machine learning project that explores how real-world used-car listing data can be used to estimate vehicle prices in Indonesia. The project follows an end-to-end machine learning workflow, including data merging, cleaning, outlier removal, feature engineering, categorical encoding, model training, and evaluation.\n\nThe application uses a Random Forest Regressor trained on used-car listing data and provides an interactive Streamlit dashboard where users can explore the dataset, view exploratory data analysis, inspect the training process, and generate a price estimate by entering a car's brand, model, year, mileage, and transmission type. The prediction can also be compared with similar listings in the dataset.",
    detailedDescription: undefined,
    image: "/projects/project-5.jpg",
    images: undefined,
    role: "Peran saya (placeholder)",
    technologies: ["Python", "Streamlit", "Pandas", "NumPy", "scikit-learn"],
    links: {
      github:
        "https://github.com/Vinn673/CarValueID#carvalue-id--used-car-price-prediction",
      app: "https://car-pricepredict.streamlit.app/",
    },
    result: undefined,
  },
  {
    id: "project-6",
    slug: "project-6",
    name: "Adaptime - Adaptive Energy-Aware Time Management",
    description:
      "An adaptive time management web application that automatically creates and adjusts work schedules based on task deadlines, duration, difficulty, time preferences, available time, and the user's energy levels throughout the day.",
    overview:
      "Adaptime is an adaptive, energy-aware time management application designed to help users organize tasks around their deadlines, estimated duration, difficulty, fixed commitments, and personal energy levels.\n\nThe application uses an adaptive scheduling algorithm that divides tasks into work sessions and places them into available time slots across a 14-day planning window. It considers the user's energy ratings for morning, afternoon, evening, and night, matching task difficulty with suitable energy levels while also respecting deadlines, daily work-capacity limits, fixed schedules, and preferred working times.\n\nAdaptime automatically recalculates the schedule when tasks, fixed schedules, or energy settings change. It also supports overdue task handling, calendar-based schedule viewing, analytics, authentication, and cloud data persistence through Firebase.",
    detailedDescription: undefined,
    image: "/projects/project-6.jpg",
    images: undefined,
    role: "Peran saya (placeholder)",
    technologies: ["React", "JavaScript", "Firebase", "Cloud Firestore", "Firebase Hosting"],
    links: {
      github: "https://github.com/Vinn673/Adaptime",
      app: "https://adaptime-df1f2.web.app/",
    },
    result: undefined,
  },
];

/**
 * Convert any string into a clean, URL-friendly slug.
 * Use this when adding a new project if you want to derive a slug from its name,
 * e.g. slug: toSlug("My Cool Project") -> "my-cool-project".
 * Keep the resulting slug stable once a project is published so links don't break.
 */
export function toSlug(value: string): string {
  return value
    .toLowerCase()
    .trim()
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-+|-+$/g, "");
}

/** Find a project by its slug. Returns undefined when no match (caller triggers 404). */
export function getProjectBySlug(slug: string): Project | undefined {
  return projects.find((project) => project.slug === slug);
}
