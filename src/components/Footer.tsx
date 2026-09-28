import { profile } from "@/data/profile";

export function Footer() {
  const year = new Date().getFullYear();
  return (
    <footer className="site-footer">
      <div className="container footer-wrap">
        <span>{profile.name}</span>
        <span>AI Engineering / frontend development</span>
        <span>
          {profile.location} / {year}
        </span>
      </div>
    </footer>
  );
}
