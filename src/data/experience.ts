// Work / activity experience.
// Edit this list to update the Experience page — no UI changes needed.
export type ExperienceCategory = "inside" | "outside";

export type Experience = {
  id: string;
  /** Which group this belongs to: inside BINUS or outside BINUS. */
  category: ExperienceCategory;
  /** Job / role title. */
  role: string;
  /** Company or organization. */
  company?: string;
  /** Human-readable period, e.g. "October 2025 – Present". */
  period?: string;
  /** Responsibility bullet points for this experience. */
  responsibilities: string[];
  /**
   * Short skill/attribute tags relevant to THIS experience (rendered as pills).
   * Choose tags that fit the actual activity — keep them concise and specific.
   */
  skills: string[];
  /**
   * Real documentation photos for this experience.
   * Add local paths under public/, e.g. "/experience/exp-2-1.jpg".
   * When this list has entries, real photos are shown instead of placeholders.
   */
  photos: string[];
  /**
   * Number of "Dokumentasi" photo slots to show for this experience.
   * - Set to 0 (or omit) to hide the Dokumentasi section entirely (e.g. Berlian).
   * - Set to 3 to show three documentation cards.
   * Empty slots render as replaceable placeholders until you add matching `photos`.
   */
  documentationSlots?: number;
};

export const experiences: Experience[] = [
  // ── Inside BINUS (5 placeholders for now) ──────────────────────
  {
    id: "inside-1",
    category: "inside",
    period: "2025",
    role: "Volunteer — Religious Tolerance & Social Service",
    company: "Klenteng Hwie Tek Bio Kentangan",
    responsibilities: [
      "Conducted observation and interviews at Klenteng Hwie Tek Bio Kentangan to understand the temple's social environment, community needs, and regulations before planning the activities.",
      "Conducted socialization activities on religious tolerance and community harmony, including discussions with the temple community about mutual respect, diversity, and peaceful coexistence.",
      "Participated in social service activities, including distributing basic necessities and snacks and joining a shared meal to strengthen social solidarity and interaction among people from different backgrounds.",
    ],
    skills: [
      "Communication",
      "Social Responsibility",
      "Community Engagement",
      "Teamwork",
    ],
    photos: [
      "/experience/experience-1-1.jpg",
      "/experience/experience-1-2.jpg",
      "/experience/experience-1-3.png",
    ],
    documentationSlots: 3,
  },
  {
    id: "inside-2",
    category: "inside",
    period: "2025",
    role: "Volunteer — Biopore Environmental Project",
    company: "Kelurahan Manyaran, Semarang",
    responsibilities: [
      "Conducted field observations to identify environmental conditions and water infiltration issues in Manyaran Village.",
      "Contributed to educating local residents about biopores, organic waste management, and environmental conservation.",
      "Assisted with the hands-on installation of biopore infiltration holes together with local residents and the PKK community.",
    ],
    skills: [
      "Environmental Awareness",
      "Community Engagement",
      "Teamwork",
      "Problem Solving",
    ],
    photos: [
      "/experience/experience-2-1.jpg",
      "/experience/experience2-2.jpg",
      "/experience/experience-2-3.png",
    ],
    documentationSlots: 3,
  },
  {
    id: "inside-3",
    category: "inside",
    period: "2024",
    role: "Volunteer — Poverty Alleviation Education Project",
    company: "SMK Dr. Tjipto Semarang",
    responsibilities: [
      "Delivered educational material on entrepreneurship as part of the socialization on poverty alleviation and SDG No. 1: No Poverty.",
      "Collaborated with the team to prepare educational materials, games, and rewards for the students.",
      "Assisted in conducting the socialization and interactive games for Grade 12 students at SMK Dr. Tjipto Semarang.",
    ],
    skills: [
      "Public Speaking",
      "Communication",
      "Leadership",
      "Teamwork",
    ],
    photos: [
      "/experience/experience-3-1.jpg",
      "/experience/experience-3-2.JPG",
      "/experience/experience3-3.jpg",
    ],
    documentationSlots: 3,
  },
  {
    id: "inside-4",
    category: "inside",
    period: "2025",
    role: "Volunteer — Community Clean-Up Activity",
    company: "Car Free Day (CFD) Semarang",
    responsibilities: [
      "Participated in an early-morning community clean-up activity at Car Free Day (CFD) Semarang.",
      "Collected litter along the CFD area using provided waste bags to help keep the surroundings clean.",
      "Contributed to collecting approximately two bags of waste until the designated area was cleaned.",
    ],
    skills: [
      "Environmental Awareness",
      "Community Engagement",
      "Teamwork",
    ],
    photos: [
      "/experience/experience-4-1.png",
      "/experience/experience4-2.png",
    ],
    documentationSlots: 2,
  },
  {
    id: "inside-5",
    category: "inside",
    period: "2025",
    role: "Volunteer — Anti-Bullying Awareness Program",
    company: "SDN Krobokan, Semarang",
    responsibilities: [
      "Participated in an anti-bullying awareness program at SDN Krobokan, Semarang, together with the team.",
      "Contributed to delivering educational activities that encouraged students to understand the importance of kindness, respect, and positive interactions.",
      "Engaged with students through interactive activities, including singing and group activities, to create an enjoyable and supportive learning environment.",
    ],
    skills: [
      "Public Speaking",
      "Communication",
      "Social Responsibility",
      "Teamwork",
    ],
    photos: [
      "/experience/experience-5-1.jpg",
      "/experience/experience-5-2.jpg",
      "/experience/experience-5-3.JPG",
    ],
    documentationSlots: 3,
  },
  {
    id: "inside-6",
    category: "inside",
    period: "2025",
    role: "Volunteer — Ocean Beach Cleanup",
    company: "Marina Beach, Semarang",
    responsibilities: [
      "Participated in an ocean beach cleanup activity at Marina Beach, Semarang, together with the team.",
      "Collected and sorted litter along the beach area to help maintain a cleaner coastal environment.",
      "Worked collaboratively with team members to clean the designated beach area and contribute to environmental conservation.",
    ],
    skills: [
      "Environmental Awareness",
      "Community Engagement",
      "Teamwork",
      "Collaboration",
    ],
    photos: [
      "/experience/experience6-1.png",
      "/experience/experience-6-2.png",
      "/experience/experience-6-3.png",
    ],
    documentationSlots: 3,
  },

  // ── Outside BINUS ──────────────────────────────────────────────
  {
    id: "berlian-event-organizer",
    category: "outside",
    role: "Freelance Crew Usher",
    company: "Berlian Event Organizer",
    period: "October 2025 – Present",
    responsibilities: [
      "Assisted with event operations involving lighting, sound, and multimedia equipment.",
      "Coordinated with team members to ensure smooth event execution and handle operational issues.",
    ],
    skills: [
      "Event Management",
      "Coordination",
      "Teamwork",
      "Adaptability",
    ],
    // Berlian intentionally has no documentation gallery.
    photos: [],
    documentationSlots: 0,
  },
  {
    id: "outside-2",
    category: "outside",
    period: "September 2023",
    role: "Event Volunteer",
    company: "DBL — SMA Kristen Kalam Kudus Surakarta",
    responsibilities: [
      "Assisted in ensuring the smooth execution of the DBL event.",
      "Directed and coordinated supporters in the field during the event.",
      "Prepared and transported necessary logistics for supporters.",
    ],
    skills: [
      "Event Management",
      "Coordination",
      "Communication",
      "Teamwork",
    ],
    photos: [],
    documentationSlots: 0,
  },
];

// Convenience selectors so the page stays data-driven.
export const insideBinusExperiences = experiences.filter(
  (experience) => experience.category === "inside"
);
export const outsideBinusExperiences = experiences.filter(
  (experience) => experience.category === "outside"
);
