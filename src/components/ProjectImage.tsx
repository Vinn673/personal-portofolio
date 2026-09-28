import Image from "next/image";

type ProjectImageProps = {
  /** Image path under /public, e.g. "/projects/name.png". Falls back if undefined. */
  src?: string;
  alt: string;
  /** Zero-based index used for the decorative number badge. */
  index: number;
};

/**
 * Project card visual. Renders a real screenshot when `src` is provided,
 * otherwise shows the existing styled placeholder (no broken images).
 */
export function ProjectImage({ src, alt, index }: ProjectImageProps) {
  return (
    <div className="project-visual">
      <span>{String(index + 1).padStart(2, "0")}</span>
      {src ? (
        <Image
          className="project-image"
          src={src}
          alt={alt}
          fill
          sizes="(max-width: 800px) 100vw, 560px"
          style={{ objectFit: "cover" }}
        />
      ) : (
        <div className="project-placeholder">
          Project
          <br />
          preview
        </div>
      )}
    </div>
  );
}
