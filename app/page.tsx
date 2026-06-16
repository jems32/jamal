"use client";
import { useState, useEffect, useRef } from "react";
import "./portfolio.css";

/* ── Data ─────────────────────────────────────────────────── */

const NAV = ["About", "Skills", "Projects", "Timeline", "Contact"];

const SKILLS = [
  {
    category: "Mobile",
    color: "#0d7a77",
    items: [
      "Flutter",
      "Dart",
      "Firebase",
      "Riverpod",
      "BLoC",
      "Hive",
      "Android",
      "iOS",
    ],
  },
  {
    category: "Frontend",
    color: "#6d28d9",
    items: ["React", "Next.js", "TypeScript", "Tailwind CSS", "Vue.js"],
  },
  {
    category: "Backend",
    color: "#065f46",
    items: [
      "Node.js",
      "NestJS",
      "FastAPI",
      "Python",
      "PostgreSQL",
      "MongoDB",
      "Redis",
      "GraphQL",
    ],
  },
  {
    category: "DevOps & Tools",
    color: "#92400e",
    items: ["Docker", "AWS", "GCP", "GitHub Actions", "Linux", "Figma"],
  },
];

const PROJECTS = [
  {
    title: "EagleLion Mobile App",
    desc: "Enterprise-grade Flutter app with Firebase backend, serving 10,000+ active users across Ethiopia with real-time sync and offline support.",
    tags: ["Flutter", "Firebase", "BLoC", "Riverpod"],
    color: "#0d7a77",
    stat: "10k+ users",
    href: "https://github.com/jemalaman",
  },
  {
    title: "Marsa Platform",
    desc: "Full-stack web platform for a startup — real-time data pipelines, scalable REST API, deployed on AWS with CI/CD via GitHub Actions.",
    tags: ["React", "Node.js", "PostgreSQL", "AWS"],
    color: "#6d28d9",
    stat: "Production",
    href: "https://github.com/jemalaman",
  },
  {
    title: "Flutter GPU Renderer",
    desc: "Custom rendering engine experiment using Flutter's Impeller API for high-performance 2D graphics and shader-driven animations.",
    tags: ["Flutter", "Dart", "Impeller", "GPU"],
    color: "#065f46",
    stat: "Open source",
    href: "https://github.com/jemalaman",
  },
  {
    title: "On-Device ML with TFLite",
    desc: "Mobile machine learning pipeline — image classification running entirely offline on device hardware, achieving 94% accuracy.",
    tags: ["TensorFlow Lite", "Flutter", "Python", "ML"],
    color: "#92400e",
    stat: "94% accuracy",
    href: "https://github.com/jemalaman",
  },
];

const TIMELINE = [
  {
    year: "2020",
    role: "Software Engineering Student",
    org: "Jimma University Institute of Technology",
    color: "#0d7a77",
  },
  {
    year: "2022",
    role: "Self-directed Flutter Study",
    org: "Independent — built first production apps",
    color: "#6d28d9",
  },
  {
    year: "2023",
    role: "Full-Stack Developer",
    org: "Marsa Startup",
    color: "#065f46",
  },
  {
    year: "2024",
    role: "Flutter Developer",
    org: "EagleLion System Technology",
    color: "#92400e",
  },
  {
    year: "2024",
    role: "Teaching Assistant",
    org: "Jimma University",
    color: "#be123c",
  },
  {
    year: "Now",
    role: "Open Source & Community",
    org: "AI · Emerging Technology · Speaking",
    color: "#0284c7",
  },
];

const ABOUT_CARDS = [
  {
    label: "Education",
    value: "Jimma University Institute of Technology",
    icon: (
      <svg
        width="20"
        height="20"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.8"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <path d="M22 10v6M2 10l10-5 10 5-10 5-10-5z" />
        <path d="M6 12v5c3 3 9 3 12 0v-5" />
      </svg>
    ),
  },
  {
    label: "Company",
    value: "EagleLion System Technology",
    icon: (
      <svg
        width="20"
        height="20"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.8"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <rect x="2" y="7" width="20" height="14" rx="2" />
        <path d="M16 7V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v2" />
      </svg>
    ),
  },
  {
    label: "Location",
    value: "Jimma, Ethiopia",
    icon: (
      <svg
        width="20"
        height="20"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.8"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7z" />
        <circle cx="12" cy="9" r="2.5" />
      </svg>
    ),
  },
  {
    label: "Focus",
    value: "Flutter · AI · Open Source",
    icon: (
      <svg
        width="20"
        height="20"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.8"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2" />
      </svg>
    ),
  },
];

/* ── Helpers ───────────────────────────────────────────────── */

function useInView(ref: React.RefObject<HTMLElement>) {
  const [visible, setVisible] = useState(false);
  useEffect(() => {
    const obs = new IntersectionObserver(
      ([e]) => {
        if (e.isIntersecting) setVisible(true);
      },
      { threshold: 0.12 }
    );
    if (ref.current) obs.observe(ref.current);
    return () => obs.disconnect();
  }, []);
  return visible;
}

function Reveal({
  children,
  className = "",
}: {
  children: React.ReactNode;
  className?: string;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const visible = useInView(ref as React.RefObject<HTMLElement>);
  return (
    <div
      ref={ref}
      className={`reveal ${visible ? "visible" : ""} ${className}`}
    >
      {children}
    </div>
  );
}

/* ── Icons ─────────────────────────────────────────────────── */

const IconArrow = () => (
  <svg
    width="16"
    height="16"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <line x1="7" y1="17" x2="17" y2="7" />
    <polyline points="7 7 17 7 17 17" />
  </svg>
);
const IconGithub = () => (
  <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
    <path d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0 1 12 6.844a9.59 9.59 0 0 1 2.504.337c1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0 0 22 12.017C22 6.484 17.522 2 12 2z" />
  </svg>
);
const IconLinkedin = () => (
  <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 0 1-2.063-2.065 2.064 2.064 0 1 1 2.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
  </svg>
);
const IconTelegram = () => (
  <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
    <path d="M11.944 0A12 12 0 0 0 0 12a12 12 0 0 0 12 12 12 12 0 0 0 12-12A12 12 0 0 0 12 0a12 12 0 0 0-.056 0zm4.962 7.224c.1-.002.321.023.465.14a.506.506 0 0 1 .171.325c.016.093.036.306.02.472-.18 1.898-.962 6.502-1.36 8.627-.168.9-.499 1.201-.82 1.23-.696.065-1.225-.46-1.9-.902-1.056-.693-1.653-1.124-2.678-1.8-1.185-.78-.417-1.21.258-1.91.177-.184 3.247-2.977 3.307-3.23.007-.032.014-.15-.056-.212s-.174-.041-.249-.024c-.106.024-1.793 1.14-5.061 3.345-.48.33-.913.49-1.302.48-.428-.008-1.252-.241-1.865-.44-.752-.245-1.349-.374-1.297-.789.027-.216.325-.437.893-.663 3.498-1.524 5.83-2.529 6.998-3.014 3.332-1.386 4.025-1.627 4.476-1.635z" />
  </svg>
);
const IconMail = () => (
  <svg
    width="16"
    height="16"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <rect x="2" y="4" width="20" height="16" rx="2" />
    <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" />
  </svg>
);
const IconPin = () => (
  <svg
    width="13"
    height="13"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7z" />
    <circle cx="12" cy="9" r="2.5" />
  </svg>
);

/* ── Component ─────────────────────────────────────────────── */

export default function Portfolio() {
  const [active, setActive] = useState("About");
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [copied, setCopied] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Close mobile menu on resize
  useEffect(() => {
    const onResize = () => {
      if (window.innerWidth > 768) setMenuOpen(false);
    };
    window.addEventListener("resize", onResize);
    return () => window.removeEventListener("resize", onResize);
  }, []);

  const copy = () => {
    navigator.clipboard.writeText("jemalaman@gmail.com");
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const scrollTo = (id: string) => {
    setActive(id);
    setMenuOpen(false);
    document
      .getElementById(id.toLowerCase())
      ?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <div className="portfolio-root">
      {/* ── Nav ── */}
      <nav className={`nav ${scrolled ? "scrolled" : ""}`}>
        <div className="nav-inner">
          <span className="nav-logo">
            JA<span>.</span>
          </span>

          <ul className="nav-links">
            {NAV.map((n) => (
              <li key={n}>
                <button
                  onClick={() => scrollTo(n)}
                  className={active === n ? "active" : ""}
                >
                  {n}
                </button>
              </li>
            ))}
          </ul>

          <div className="nav-cta">
            <a href="mailto:jemalaman@gmail.com" className="btn-hire">
              Hire me
            </a>
            <button
              className={`hamburger ${menuOpen ? "open" : ""}`}
              onClick={() => setMenuOpen((v) => !v)}
              aria-label="Toggle menu"
            >
              <span />
              <span />
              <span />
            </button>
          </div>
        </div>

        {/* Mobile menu */}
        <div className={`mobile-menu ${menuOpen ? "open" : ""}`}>
          {NAV.map((n) => (
            <button
              key={n}
              onClick={() => scrollTo(n)}
              className={active === n ? "active" : ""}
            >
              {n}
            </button>
          ))}
        </div>
      </nav>

      {/* ── Hero ── */}
      <header className="hero">
        <div className="hero-grid-line" />
        <div className="hero-accent" />
        <div className="container">
          <div className="hero-badge">
            <span className="hero-badge-dot" />
            <span>Open to Flutter roles &amp; collaborations</span>
          </div>

          <h1 className="hero-name">
            Jemal
            <br />
            <span className="hero-name-outline">Aman</span>
          </h1>

          <p className="hero-sub">
            Software engineer &amp; Flutter specialist from{" "}
            <strong>Jimma, Ethiopia</strong>. Building digital solutions for{" "}
            <strong style={{ color: "var(--teal)" }}>community impact</strong>.
          </p>

          <div className="hero-actions">
            <button
              className="btn-primary"
              onClick={() => scrollTo("Projects")}
            >
              View projects
              <IconArrow />
            </button>
            <a
              href="https://github.com/jemalaman"
              target="_blank"
              rel="noreferrer"
              className="btn-ghost"
            >
              <IconGithub />
              GitHub
            </a>
          </div>

          <div className="hero-stats">
            {[
              { val: "4+", label: "Years building" },
              { val: "10k+", label: "Users served" },
              { val: "×3", label: "Pull Shark" },
              { val: "2", label: "Universities" },
            ].map(({ val, label }) => (
              <div key={label}>
                <p className="hero-stat-val">{val}</p>
                <p className="hero-stat-label">{label}</p>
              </div>
            ))}
          </div>
        </div>
      </header>

      {/* ── About ── */}
      <section id="about" className="about">
        <div className="container">
          <Reveal>
            <div className="about-grid">
              <div className="about-text">
                <p className="eyebrow">About</p>
                <h2 className="section-title">
                  Code that serves
                  <br />
                  people.
                </h2>
                <p>
                  I&apos;m a Software Engineering student at{" "}
                  <strong>Jimma University Institute of Technology</strong> and
                  Flutter developer at{" "}
                  <strong>EagleLion System Technology</strong>.
                </p>
                <p>
                  My work sits at the intersection of clean mobile architecture,
                  full-stack engineering, and community impact — with a growing
                  focus on AI and emerging technology.
                </p>
              </div>
              <div className="about-cards">
                {ABOUT_CARDS.map(({ label, value, icon }) => (
                  <div className="about-card" key={label}>
                    <div className="about-card-icon">{icon}</div>
                    <p className="about-card-label">{label}</p>
                    <p className="about-card-value">{value}</p>
                  </div>
                ))}
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      {/* ── Skills ── */}
      <section id="skills" className="skills">
        <div className="container">
          <Reveal>
            <p className="eyebrow">Skills</p>
            <h2 className="section-title">Tech stack</h2>
          </Reveal>
          <div className="skills-grid">
            {SKILLS.map(({ category, color, items }) => (
              <Reveal key={category}>
                <div className="skill-card">
                  <div className="skill-card-header">
                    <span className="skill-dot" style={{ background: color }} />
                    <span>{category}</span>
                  </div>
                  <div className="skill-tags">
                    {items.map((item) => (
                      <span
                        key={item}
                        className="skill-tag"
                        style={{
                          color,
                          borderColor: color + "44",
                          background: color + "10",
                        }}
                      >
                        {item}
                      </span>
                    ))}
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ── Projects ── */}
      <section id="projects" className="projects">
        <div className="container">
          <Reveal>
            <p className="eyebrow">Projects</p>
            <h2 className="section-title">What I&apos;ve built</h2>
          </Reveal>
          <div className="projects-grid">
            {PROJECTS.map(({ title, desc, tags, color, stat, href }) => (
              <Reveal key={title}>
                <a
                  href={href}
                  target="_blank"
                  rel="noreferrer"
                  className="project-card"
                >
                  <div className="project-card-top">
                    <span
                      className="project-stat"
                      style={{ color, background: color + "18" }}
                    >
                      {stat}
                    </span>
                    <span className="project-arrow">
                      <IconArrow />
                    </span>
                  </div>
                  <h3 className="project-title">{title}</h3>
                  <p className="project-desc">{desc}</p>
                  <div className="project-tags">
                    {tags.map((t) => (
                      <span key={t} className="project-tag">
                        {t}
                      </span>
                    ))}
                  </div>
                </a>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ── Timeline ── */}
      <section id="timeline" className="timeline">
        <div className="container">
          <Reveal>
            <p className="eyebrow">Timeline</p>
            <h2 className="section-title">Career path</h2>
          </Reveal>
          <div className="timeline-list">
            {TIMELINE.map(({ year, role, org, color }, i) => (
              <Reveal key={i}>
                <div className="timeline-item">
                  <div className="timeline-year">
                    <span style={{ color }}>{year}</span>
                  </div>
                  <div className="timeline-node-wrap">
                    <span
                      className="timeline-node"
                      style={{ background: color }}
                    />
                  </div>
                  <div className="timeline-content">
                    <p className="timeline-role">{role}</p>
                    <p className="timeline-org">
                      <IconPin />
                      {org}
                    </p>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ── Contact ── */}
      <section id="contact" className="contact">
        <div className="container">
          <Reveal>
            <div className="contact-card">
              <p className="eyebrow">Contact</p>
              <h2 className="contact-title">Let&apos;s build something</h2>
              <p className="contact-sub">
                Open to Flutter roles, open-source collaborations, and speaking
                at events.
              </p>
              <div className="contact-links">
                <button className="btn-email" onClick={copy}>
                  <IconMail />
                  {copied ? "Copied!" : "jemalaman@gmail.com"}
                </button>
                <a
                  href="https://linkedin.com/in/jemalaman"
                  target="_blank"
                  rel="noreferrer"
                  className="btn-social"
                >
                  <IconLinkedin />
                  LinkedIn
                </a>
                <a
                  href="https://t.me/jemalaman"
                  target="_blank"
                  rel="noreferrer"
                  className="btn-social"
                >
                  <IconTelegram />
                  Telegram
                </a>
                <a
                  href="https://github.com/jemalaman"
                  target="_blank"
                  rel="noreferrer"
                  className="btn-social"
                >
                  <IconGithub />
                  GitHub
                </a>
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      {/* ── Footer ── */}
      <footer className="footer">
        <div className="footer-inner">
          <span className="footer-copy">© 2025 Jemal Aman</span>
          <span className="footer-loc">
            <IconPin />
            Jimma, Ethiopia
          </span>
        </div>
      </footer>
    </div>
  );
}
