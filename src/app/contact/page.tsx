import type { Metadata } from "next";
import { profile } from "@/data/profile";
import { publicFileExists } from "@/lib/assets";
import { SocialLinks } from "@/components/SocialLinks";
import { EmailIcon, DownloadIcon, ArrowUpRightIcon } from "@/components/icons";

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
          <p className="eyebrow">Have something in mind?</p>
          <h2 id="contact-title">
            Let&apos;s build something worthwhile.
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

          <SocialLinks variant="warm" className="contact-card" />

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
