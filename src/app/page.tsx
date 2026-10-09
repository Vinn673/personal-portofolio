import Link from "next/link";
import { profile } from "@/data/profile";
import { projects } from "@/data/projects";
import { skillCategories, softSkills } from "@/data/skills";
import { Button } from "@/components/Button";
import { SocialLinks } from "@/components/SocialLinks";
import { ProjectCard } from "@/components/ProjectCard";
import { ProfileImage } from "@/components/ProfileImage";
import { publicFileExists } from "@/lib/assets";
import {
  ArrowRightIcon,
  DownloadIcon,
  SparkIcon,
  CodeIcon,
} from "@/components/icons";

export default function Home() {
  // Featured Projects: show the first 3 by existing project ordering.
  // Editing the order in src/data/projects.ts changes what's featured here.
  const featuredProjects = projects.slice(0, 3);
  // Signal-card photo: uses the same profile.photoUrl as the About page.
  // Falls back to an initials avatar until the file exists in public/profile/.
  const photoAvailable = publicFileExists(profile.photoUrl);

  return (
    <>
      {/* ── HERO ──────────────────────────────────────────────── */}
      <section className="hero container" aria-labelledby="hero-title">
        <div className="hero-copy">
          <p className="kicker hero-eyebrow" data-reveal data-reveal-delay="0">
            <SparkIcon /> Personal Portfolio
          </p>
          <h1 id="hero-title" data-reveal data-reveal-delay="80">
            {profile.name}
          </h1>
          <p className="hero-specialization" data-reveal data-reveal-delay="160">
            {profile.title}
          </p>
          <p className="hero-intro" data-reveal data-reveal-delay="300">
            {profile.intro}
          </p>
          <div className="hero-actions" data-reveal data-reveal-delay="380">
            <Button href="/projects" variant="primary" icon={<ArrowRightIcon />}>
              View projects
            </Button>
            <Button href="/contact" variant="quiet" icon={<ArrowRightIcon />}>
              Contact me
            </Button>
            <Button
              href={profile.cvUrl}
              variant="quiet"
              icon={<DownloadIcon />}
              download
            >
              Download CV
            </Button>
          </div>
          <div data-reveal data-reveal-delay="460">
            <SocialLinks />
          </div>
        </div>
        <div className="hero-aside" aria-label="Profile snapshot">
          <div className="signal-card" data-reveal data-reveal-delay="200">
            <div className="signal-photo">
              <ProfileImage
                src={profile.photoUrl}
                available={photoAvailable}
                alt={`Foto ${profile.name}`}
                initials="MAR"
              />
            </div>
            <div className="signal-label">
              <span className="status-dot" /> Currently studying
            </div>
            <strong>
              Intelligent
              <br />
              Systems (AI)
            </strong>
            <span className="signal-location">
              {profile.location} / {profile.education.period}
            </span>
          </div>
        </div>
      </section>

      {/* ── FEATURED PROJECTS ─────────────────────────────────── */}
      <section
        className="home-section container home-section-first"
        aria-labelledby="home-projects"
      >
        <div className="home-section-head">
          <div data-reveal>
            <p className="kicker">
              <CodeIcon /> Projects
            </p>
            <h2 id="home-projects">Featured Work</h2>
            <p>
              A selection of group projects I&rsquo;ve worked on. Explore the
              Projects page for more details.
            </p>
          </div>
          <Link className="see-all" href="/projects">
            View all projects <ArrowRightIcon />
          </Link>
        </div>
        <div className="projects-grid featured-grid">
          {featuredProjects.map((project, index) => (
            <ProjectCard key={project.id} project={project} index={index} />
          ))}
        </div>
      </section>

      {/* ── SKILLS PREVIEW ────────────────────────────────────── */}
      <section className="home-section container" aria-labelledby="home-skills">
        <div className="home-section-head">
          <div data-reveal>
            <p className="kicker">
              <SparkIcon /> Skills
            </p>
            <h2 id="home-skills">Technologies I Use &amp; Learn</h2>
          </div>
          <Link className="see-all" href="/skills">
            View All Skills <ArrowRightIcon />
          </Link>
        </div>
        <div className="preview-grid">
          {skillCategories.map((category) => (
            <div className="mini-card" key={category.title} data-reveal>
              <span className="mini-card-icon" aria-hidden="true">
                <SparkIcon />
              </span>
              <h3>{category.title}</h3>
              <ul>
                {category.skills.map((skill) => (
                  <li key={skill}>{skill}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
        <div className="soft-skills soft-skills-preview" data-reveal>
          <div className="soft-skills-head">
            <span className="mini-card-icon" aria-hidden="true">
              <SparkIcon />
            </span>
            <h3>Soft Skills</h3>
          </div>
          <ul className="soft-skill-tags">
            {softSkills.map((skill) => (
              <li className="soft-skill-tag" key={skill}>
                {skill}
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* ── CONTACT CTA ───────────────────────────────────────── */}
      <section className="home-section container" aria-labelledby="home-cta">
        <div className="home-cta glass" data-reveal>
          <p className="kicker" style={{ margin: "0 auto" }}>
            <SparkIcon /> Contact
          </p>
          <h2 id="home-cta">Let&apos;s build something worthwhile.</h2>
          <p>
            Open to internship opportunities, collaborations, and new
            experiences. Feel free to connect with me through the channels below.
          </p>
          <div className="hero-actions">
            <Button
              href={`mailto:${profile.email}`}
              variant="primary"
              icon={<ArrowRightIcon />}
            >
              Get in touch
            </Button>
            <Button href="/contact" variant="quiet" icon={<ArrowRightIcon />}>
              Contact page
            </Button>
          </div>
        </div>
      </section>
    </>
  );
}
