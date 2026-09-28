// Central place for personal/branding information.
// Update these values to change content across the whole site.
export const profile = {
  name: "Marvin Adriano Rusdianto",
  // Main title shown as the primary specialization headline.
  title: "Intelligent System",
  role: "AI Engineering / Frontend Development",
  location: "Jakarta, Indonesia",
  email: "marvinadr1703@gmail.com",
  github: "https://github.com/Vinn673",
  linkedin: "https://www.linkedin.com/in/marvin-adriano",
  // The CV download button only appears if this file actually exists on disk.
  // Place the real PDF at: public/cv/Marvin-Adriano-CV.pdf
  cvUrl: "/cv/Marvin-Adriano-CV.pdf",
  // Profile photo. The ProfileImage component falls back gracefully if missing.
  // Place the real photo at: public/profile/marvin.jpg
  photoUrl: "/profile/marvin.jpg",

  // Short intro used on the home hero.
  intro:
    "Computer Science undergraduate at BINUS University, specializing in Intelligent Systems, with an interest in AI Engineering and frontend development.",

  // Longer bio used on the About page (Bahasa Indonesia).
  bio:
    "Saya mahasiswa Computer Science di BINUS University dengan peminatan Intelligent System (AI). Saya tertarik mendalami solusi berbasis AI sekaligus membangun antarmuka frontend yang rapi dan mudah digunakan. Saat ini saya terus mengasah kemampuan melalui perkuliahan dan latihan langsung, dengan fokus menulis kode yang mudah dirawat dan konsisten belajar hal baru.",

  education: {
    university: "BINUS University",
    degree: "Computer Science",
    specialization: "Intelligent System (AI)",
    start: "2024",
    expectedGraduation: "2028",
    period: "2024 – 2028",
    gpa: "3.65",
  },
} as const;
