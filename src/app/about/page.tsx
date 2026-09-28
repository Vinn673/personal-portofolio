import type { Metadata } from "next";
import { profile } from "@/data/profile";
import { ProfileImage } from "@/components/ProfileImage";
import { SocialLinks } from "@/components/SocialLinks";
import { publicFileExists } from "@/lib/assets";
import { PinIcon } from "@/components/icons";

export const metadata: Metadata = {
  title: "About",
  description:
    "Tentang Marvin Adriano Rusdianto — mahasiswa Computer Science BINUS University, peminatan Intelligent System (AI).",
};

export default function AboutPage() {
  const photoAvailable = publicFileExists(profile.photoUrl);

  return (
    <section className="section" aria-labelledby="about-title">
      <div className="container split-section">
        <div className="section-label">
          <span>01</span>
          <span>About</span>
        </div>
        <div className="section-content about-content" data-reveal>
          <h2 id="about-title">
            Learn, Build, Grow.
          </h2>

          <div className="about-lead">
            <div className="about-photo" data-reveal>
              <ProfileImage
                src={profile.photoUrl}
                available={photoAvailable}
                alt={`Foto ${profile.name}`}
                initials="MAR"
              />
            </div>
            <div>
              <p>
                I am a fifth-semester Computer Science undergraduate at BINUS
                University, specializing in Intelligent Systems (AI). I am
                interested in AI Engineering and frontend development, and I
                enjoy exploring how technology can be turned into useful and
                practical applications. I continuously develop my skills through
                coursework, hands-on projects, and independent learning. I am
                currently open to internship opportunities where I can gain
                practical experience, contribute to real-world projects, and
                continue growing as a developer.
              </p>
              <p className="about-location">
                <PinIcon aria-hidden="true" /> {profile.location}
              </p>
              <SocialLinks />
            </div>
          </div>

          <h3 className="about-subheading">Education</h3>
          <div className="facts-grid">
            <div data-reveal data-reveal-delay="0">
              <span>University</span>
              <strong>{profile.education.university}</strong>
              <small>{profile.education.degree}</small>
            </div>
            <div data-reveal data-reveal-delay="80">
              <span>Specialization</span>
              <strong>{profile.education.specialization}</strong>
              <small>GPA {profile.education.gpa}</small>
            </div>
            <div data-reveal data-reveal-delay="160">
              <span>Period</span>
              <strong>
                {profile.education.start} – {profile.education.expectedGraduation}
              </strong>
              <small>Expected Graduation: {profile.education.expectedGraduation}</small>
            </div>
            <div data-reveal data-reveal-delay="240">
              <span>School</span>
              <strong>Kalam Kudus Christian High School</strong>
              <small>Senior High School — Mathematics and Natural Science</small>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
