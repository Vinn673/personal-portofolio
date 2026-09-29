import type { Metadata } from "next";
import { profile } from "@/data/profile";
import { publicFileExists } from "@/lib/assets";
import {
  GitHubIcon,
  LinkedInIcon,
  InstagramIcon,
  LineIcon,
  EmailIcon,
  DownloadIcon,
  ArrowUpRightIcon,
} from "@/components/icons";

// Contact-page social/contact channels. Kept local to this page so the shared
// SocialLinks component (used on Home/About) stays unchanged.
const contactLinks = [
  { key: "github", href: "https://github.com/Vinn673", label: "GitHub", icon: <GitHubIcon />, external: true },
  { key: "linkedin", href: "https://www.linkedin.com/in/marvin-adriano", label: "LinkedIn", icon: <LinkedInIcon />, external: true },
  { key: "instagram", href: "https://www.instagram.com/marvin_adriano/", label: "Instagram", icon: <InstagramIcon />, external: true },
  { key: "line", href: "https://line.me/ti/p/2DHJhFQivF", label: "LINE", icon: <LineIcon />, external: true },
  { key: "email", href: "mailto:marvinadr1703@gmail.com", label: "Email", icon: <EmailIcon />, external: false },
];

export const metadata: Metadata = {
  title: "Contact",
  description: `Hubungi Marvin Adriano Rusdianto melalui email, LinkedIn, atau GitHub.`,
};

export default function ContactPage() {
  const cvAvailable = publicFileExists(profile.cvUrl);

  return (
    <section className="contact-section" aria-labelledby="contact-title">
      <div className="container contact-wrap">
        <div className="section-label">
          <span>05</span>
          <span>Contact</span>
        </div>
        <div data-reveal>
          <p className="eyebrow">Let&apos;s connect.</p>
          <h2 id="contact-title">
            I&apos;m open to new opportunities.
          </h2>
          <p className="contact-intro">
            Open to internship opportunities, collaborations, and new
            experiences. Feel free to connect with me through the channels below.
          </p>

          <a className="contact-email" href={`mailto:${profile.email}`}>
            <EmailIcon aria-hidden="true" />
            {profile.email}
            <ArrowUpRightIcon aria-hidden="true" />
          </a>

          <div
            className="icon-links contact-card"
            aria-label="Social and contact links"
          >
            {contactLinks.map((link) => (
              <a
                key={link.key}
                className="icon-link on-warm"
                href={link.href}
                aria-label={link.label}
                title={link.label}
                {...(link.external
                  ? { target: "_blank", rel: "noreferrer" }
                  : {})}
              >
                {link.icon}
                <span>{link.label}</span>
              </a>
            ))}
          </div>

          {cvAvailable ? (
            <div className="contact-card">
              <a className="icon-link on-warm" href={profile.cvUrl} download>
                <DownloadIcon />
                <span>Download CV</span>
              </a>
            </div>
          ) : null}
        </div>
      </div>
    </section>
  );
}
