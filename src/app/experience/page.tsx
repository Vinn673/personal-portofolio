import type { Metadata } from "next";
import {
  insideBinusExperiences,
  outsideBinusExperiences,
} from "@/data/experience";
import { ExperienceCards } from "@/components/ExperienceCards";

export const metadata: Metadata = {
  title: "Experience",
  description:
    "Pengalaman Marvin Adriano Rusdianto, termasuk sebagai Freelance Crew Usher di Berlian Event Organizer.",
};

export default function ExperiencePage() {
  return (
    <section className="section section-tint" aria-labelledby="experience-title">
      <div className="container split-section">
        <div className="section-label">
          <span>04</span>
          <span>Experience</span>
        </div>
        <div className="section-content" data-reveal>
          <h2 id="experience-title" className="experience-page-title">
            Where I&apos;ve <span>pitched in.</span>
          </h2>

          <div className="experience-category">
            <h3 className="experience-category-title">Inside BINUS</h3>
            <ExperienceCards experiences={insideBinusExperiences} />
          </div>

          <div className="experience-category">
            <h3 className="experience-category-title">Outside BINUS</h3>
            <ExperienceCards experiences={outsideBinusExperiences} />
          </div>
        </div>
      </div>
    </section>
  );
}
