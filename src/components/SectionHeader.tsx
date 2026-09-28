import type { ReactNode } from "react";

type SectionHeaderProps = {
  /** Two-digit section index, e.g. "01". */
  number: string;
  /** Short label shown next to the number. */
  label: string;
  /** Main heading; can include markup for line breaks/accents. */
  heading?: ReactNode;
  /** Optional supporting copy under the heading. */
  intro?: ReactNode;
  /** Stable id for the heading (for aria-labelledby). */
  headingId?: string;
};

/**
 * Reusable section label + heading block.
 * Reuses the existing .section-label / .section-content styles.
 */
export function SectionHeader({
  number,
  label,
  heading,
  intro,
  headingId,
}: SectionHeaderProps) {
  return (
    <>
      <div className="section-label">
        <span>{number}</span>
        <span>{label}</span>
      </div>
      {(heading || intro) && (
        <div className="section-content" data-reveal>
          {heading ? <h2 id={headingId}>{heading}</h2> : null}
          {intro ? <p>{intro}</p> : null}
        </div>
      )}
    </>
  );
}
