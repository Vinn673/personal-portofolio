import { profile } from "@/data/profile";
import { GitHubIcon, LinkedInIcon, EmailIcon } from "./icons";

type SocialLinksProps = {
  /** Use the warm (light) variant for the Contact section background. */
  variant?: "dark" | "warm";
  className?: string;
};

// Renders only the social/contact channels that exist in profile data.
// No invented links — each entry is guarded by the presence of its value.
export function SocialLinks({ variant = "dark", className }: SocialLinksProps) {
  const links = [
    profile.github
      ? {
          key: "github",
          href: profile.github,
          label: "GitHub",
          icon: <GitHubIcon />,
          external: true,
        }
      : null,
    profile.linkedin
      ? {
          key: "linkedin",
          href: profile.linkedin,
          label: "LinkedIn",
          icon: <LinkedInIcon />,
          external: true,
        }
      : null,
    profile.email
      ? {
          key: "email",
          href: `mailto:${profile.email}`,
          label: "Email",
          icon: <EmailIcon />,
          external: false,
        }
      : null,
  ].filter((link): link is NonNullable<typeof link> => link !== null);

  const linkClass = `icon-link${variant === "warm" ? " on-warm" : ""}`;

  return (
    <div
      className={`icon-links${className ? ` ${className}` : ""}`}
      aria-label="Social and contact links"
    >
      {links.map((link) => (
        <a
          key={link.key}
          className={linkClass}
          href={link.href}
          aria-label={link.label}
          title={link.label}
          {...(link.external ? { target: "_blank", rel: "noreferrer" } : {})}
        >
          {link.icon}
          <span>{link.label}</span>
        </a>
      ))}
    </div>
  );
}
