import Image from "next/image";

type ProfileImageProps = {
  /** Photo path under /public, e.g. "/profile/marvin.jpg". */
  src?: string;
  /** Whether the file actually exists (checked server-side). */
  available: boolean;
  alt: string;
  /** Initials shown in the fallback avatar. */
  initials: string;
};

/**
 * Profile photo with a graceful fallback.
 * When the photo is missing, shows a clean initials avatar instead of a broken image.
 */
export function ProfileImage({ src, available, alt, initials }: ProfileImageProps) {
  if (available && src) {
    return (
      <div className="profile-photo">
        <Image
          src={src}
          alt={alt}
          fill
          sizes="(max-width: 800px) 100vw, 330px"
          style={{ objectFit: "cover" }}
          priority
        />
      </div>
    );
  }

  return (
    <div className="profile-photo profile-photo-fallback" role="img" aria-label={alt}>
      <span aria-hidden="true">{initials}</span>
    </div>
  );
}
