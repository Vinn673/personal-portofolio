"use client";

import Image from "next/image";
import { useState } from "react";
import type { Experience } from "@/data/experience";
import styles from "./ExperienceCards.module.css";

type ExperienceCardsProps = {
  experiences: Experience[];
};

export function ExperienceCards({ experiences }: ExperienceCardsProps) {
  const [expandedId, setExpandedId] = useState<string | null>(null);

  return (
    <div className={styles.list}>
      {experiences.map((experience, index) => {
        const isExpanded = expandedId === experience.id;
        const panelId = `experience-panel-${experience.id}`;

        const hasResponsibilities = experience.responsibilities.length > 0;
        const hasSkills = experience.skills.length > 0;
        const hasPhotos = experience.photos.length > 0;
        const slots = experience.documentationSlots ?? 0;
        const showDocumentation = hasPhotos || slots > 0;
        const docCount = hasPhotos ? experience.photos.length : slots;

        return (
          <article
            className={`${styles.card} ${isExpanded ? styles.expanded : ""}`}
            key={experience.id}
          >
            {/* ── ALWAYS-VISIBLE HEADER ───────────────────────── */}
            <button
              className={styles.trigger}
              type="button"
              aria-expanded={isExpanded}
              aria-controls={panelId}
              onClick={() => setExpandedId(isExpanded ? null : experience.id)}
            >
              <span className={styles.index} aria-hidden="true">
                {String(index + 1).padStart(2, "0")}
              </span>
              <span className={styles.heading}>
                {experience.period && (
                  <span className={styles.period}>{experience.period}</span>
                )}
                <span className={styles.role} role="heading" aria-level={3}>
                  {experience.role}
                </span>
                {experience.company && (
                  <span className={styles.company}>{experience.company}</span>
                )}
              </span>
              <span className={styles.indicator} aria-hidden="true">
                {isExpanded ? "−" : "+"}
              </span>
            </button>

            {/* ── EXPANDED CONTENT (only in the DOM when open) ── */}
            {isExpanded && (
              <div className={styles.panel} id={panelId}>
                {/* Responsibilities */}
                <section className={styles.section}>
                  <h4 className={styles.subheading}>
                    <span className={styles.subheadingBar} aria-hidden="true" />
                    Responsibilities
                  </h4>
                  {hasResponsibilities ? (
                    <ul className={styles.responsibilities}>
                      {experience.responsibilities.map((item) => (
                        <li key={item}>{item}</li>
                      ))}
                    </ul>
                  ) : (
                    <p className={styles.emptyNote}>
                      Detail jobdesk akan ditambahkan.
                    </p>
                  )}
                </section>

                {/* Skills / attributes */}
                {hasSkills && (
                  <section className={styles.section}>
                    <h4 className={styles.subheading}>
                      <span className={styles.subheadingBar} aria-hidden="true" />
                      Skills
                    </h4>
                    <ul className={styles.skillTags}>
                      {experience.skills.map((skill) => (
                        <li className={styles.skillTag} key={skill}>
                          {skill}
                        </li>
                      ))}
                    </ul>
                  </section>
                )}

                {/* Dokumentasi — hidden entirely when opted out (e.g. Berlian) */}
                {showDocumentation && (
                  <section className={styles.section}>
                    <h4 className={styles.subheading}>
                      <span className={styles.subheadingBar} aria-hidden="true" />
                      Documentation
                    </h4>
                    <div
                      className={styles.gallery}
                      aria-label={`Dokumentasi ${experience.role}`}
                    >
                      {Array.from({ length: docCount }).map((_, photoIndex) => {
                        const photo = experience.photos[photoIndex];
                        return (
                          <div
                            className={styles.photoFrame}
                            key={`${experience.id}-doc-${photoIndex}`}
                          >
                            {photo ? (
                              <Image
                                className={styles.photoImage}
                                src={photo}
                                alt={`Dokumentasi ${experience.role} ${photoIndex + 1}`}
                                fill
                                sizes="(max-width: 640px) 100vw, (max-width: 1000px) 45vw, 220px"
                              />
                            ) : (
                              <span
                                className={styles.photoPlaceholder}
                                role="img"
                                aria-label={`Placeholder dokumentasi ${photoIndex + 1}`}
                              >
                                <span
                                  className={styles.placeholderMark}
                                  aria-hidden="true"
                                />
                                <span className={styles.placeholderText}>
                                  Photo {photoIndex + 1}
                                </span>
                              </span>
                            )}
                          </div>
                        );
                      })}
                    </div>
                  </section>
                )}

                {/* Close / Back */}
                <div className={styles.panelFooter}>
                  <button
                    className={styles.backButton}
                    type="button"
                    onClick={() => setExpandedId(null)}
                  >
                    <span aria-hidden="true">←</span> Back to Experiences
                  </button>
                </div>
              </div>
            )}
          </article>
        );
      })}
    </div>
  );
}
