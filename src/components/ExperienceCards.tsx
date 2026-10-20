import Image from "next/image";
import type { Experience } from "@/data/experience";
import styles from "./ExperienceCards.module.css";

type ExperienceCardsProps = {
  experiences: Experience[];
};

/**
 * Editorial experience list: a two-column layout (period on the left,
 * role / company / responsibilities / documentation on the right) separated
 * by subtle divider lines rather than large bordered cards.
 *
 * Responsibilities are shown directly — no expand/collapse. Documentation
 * renders real photos when present, otherwise the configured number of
 * replaceable placeholder slots (documentationSlots). An experience with
 * neither photos nor slots (e.g. Berlian) shows no documentation section.
 */
export function ExperienceCards({ experiences }: ExperienceCardsProps) {
  return (
    <ol className={styles.list}>
      {experiences.map((experience) => {
        const hasResponsibilities = experience.responsibilities.length > 0;
        const hasSkills = experience.skills.length > 0;
        const hasPhotos = experience.photos.length > 0;
        const slots = experience.documentationSlots ?? 0;
        const showDocumentation = hasPhotos || slots > 0;
        const docCount = hasPhotos ? experience.photos.length : slots;

        return (
          <li className={styles.entry} key={experience.id}>
            {/* Left column — period / meta */}
            <div className={styles.meta}>
              {experience.period && (
                <span className={styles.period}>{experience.period}</span>
              )}
            </div>

            {/* Right column — content */}
            <div className={styles.content}>
              <h4 className={styles.role}>{experience.role}</h4>
              {experience.company && (
                <p className={styles.company}>{experience.company}</p>
              )}

              {hasResponsibilities && (
                <ul className={styles.responsibilities}>
                  {experience.responsibilities.map((item) => (
                    <li key={item}>{item}</li>
                  ))}
                </ul>
              )}

              {hasSkills && (
                <ul className={styles.skillTags} aria-label="Skills">
                  {experience.skills.map((skill) => (
                    <li className={styles.skillTag} key={skill}>
                      {skill}
                    </li>
                  ))}
                </ul>
              )}

              {showDocumentation && (
                <div className={styles.documentation}>
                  <p className={styles.docLabel}>Documentation</p>
                  <div
                    className={styles.gallery}
                    aria-label={`Documentation for ${experience.role}`}
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
                              alt={`Documentation for ${experience.role} ${photoIndex + 1}`}
                              fill
                              sizes="(max-width: 640px) 50vw, (max-width: 1000px) 30vw, 220px"
                            />
                          ) : (
                            <span
                              className={styles.photoPlaceholder}
                              role="img"
                              aria-label={`Documentation placeholder ${photoIndex + 1}`}
                            >
                              <span
                                className={styles.placeholderMark}
                                aria-hidden="true"
                              />
                            </span>
                          )}
                        </div>
                      );
                    })}
                  </div>
                </div>
              )}
            </div>
          </li>
        );
      })}
    </ol>
  );
}
