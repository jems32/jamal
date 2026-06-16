"use client";
import { useState, useEffect, useRef } from "react";

const NAV = ["About", "Skills", "Projects", "Timeline", "Contact"];

const SKILLS = [
  {
    category: "Mobile",
    color: "#0e7490",
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
    color: "#7c3aed",
    items: ["React", "Next.js", "TypeScript", "Tailwind CSS", "Vue.js"],
  },
  {
    category: "Backend",
    color: "#059669",
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
    category: "DevOps",
    color: "#d97706",
    items: ["Docker", "AWS", "GCP", "GitHub Actions", "Linux", "Figma"],
  },
];

const PROJECTS = [
  {
    title: "EagleLion Mobile App",
    desc: "Full-featured enterprise mobile application built with Flutter and Firebase, serving thousands of users across Ethiopia.",
    tags: ["Flutter", "Firebase", "BLoC", "Riverpod"],
    color: "#0e7490",
    stat: "10k+ users",
  },
  {
    title: "Marsa Platform",
    desc: "Full-stack web platform for a startup — real-time data, scalable backend, deployed on AWS.",
    tags: ["React", "Node.js", "PostgreSQL", "AWS"],
    color: "#7c3aed",
    stat: "Production",
  },
  {
    title: "Flutter GPU Renderer",
    desc: "Custom rendering engine experiment using Flutter's Impeller API for high-performance 2D graphics.",
    tags: ["Flutter", "Dart", "Impeller", "GPU"],
    color: "#059669",
    stat: "Open source",
  },
  {
    title: "TFLite on Flutter",
    desc: "On-device machine learning pipeline — image classification running entirely offline on mobile hardware.",
    tags: ["TensorFlow Lite", "Flutter", "Python", "ML"],
    color: "#d97706",
    stat: "94% accuracy",
  },
];

const TIMELINE = [
  {
    year: "2020",
    role: "Software Engineering Student",
    org: "Jimma University Institute of Technology",
    color: "#0e7490",
  },
  {
    year: "2022",
    role: "Self-directed Flutter Study",
    org: "Independent",
    color: "#7c3aed",
  },
  {
    year: "2023",
    role: "Full-Stack Developer",
    org: "Marsa Startup",
    color: "#059669",
  },
  {
    year: "2024",
    role: "Flutter Developer",
    org: "EagleLion System Technology",
    color: "#d97706",
  },
  {
    year: "2024",
    role: "Teaching Assistant",
    org: "Jimma University",
    color: "#e11d48",
  },
  {
    year: "Now",
    role: "Open Source & Community",
    org: "AI · Emerging Technology",
    color: "#06b6d4",
  },
];

function useInView(ref: React.RefObject<HTMLElement>) {
  const [visible, setVisible] = useState(false);
  useEffect(() => {
    const obs = new IntersectionObserver(
      ([e]) => {
        if (e.isIntersecting) setVisible(true);
      },
      { threshold: 0.15 }
    );
    if (ref.current) obs.observe(ref.current);
    return () => obs.disconnect();
  }, []);
  return visible;
}

function Section({
  id,
  children,
  className = "",
}: {
  id: string;
  children: React.ReactNode;
  className?: string;
}) {
  const ref = useRef<HTMLElement>(null);
  const visible = useInView(ref as React.RefObject<HTMLElement>);
  return (
    <section
      id={id}
      ref={ref}
      className={`transition-all duration-700 ${
        visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
      } ${className}`}
    >
      {children}
    </section>
  );
}

export default function Portfolio() {
  const [active, setActive] = useState("About");
  const [scrolled, setScrolled] = useState(false);
  const [copied, setCopied] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const copy = () => {
    navigator.clipboard.writeText("jemalaman@gmail.com");
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const scrollTo = (id: string) => {
    setActive(id);
    document
      .getElementById(id.toLowerCase())
      ?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <div className="min-h-screen bg-white font-sans antialiased">
      {/* Nav */}
      <nav
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          scrolled
            ? "bg-white/90 backdrop-blur-md shadow-sm border-b border-gray-100"
            : "bg-transparent"
        }`}
      >
        <div className="max-w-5xl mx-auto px-6 flex items-center justify-between h-16">
          <span className="font-semibold text-gray-900 tracking-tight">
            JA<span className="text-cyan-600">.</span>
          </span>
          <div className="hidden md:flex items-center gap-1">
            {NAV.map((n) => (
              <button
                key={n}
                onClick={() => scrollTo(n)}
                className={`px-4 py-1.5 rounded-full text-sm font-medium transition-all duration-200 ${
                  active === n
                    ? "bg-cyan-50 text-cyan-700"
                    : "text-gray-500 hover:text-gray-900"
                }`}
              >
                {n}
              </button>
            ))}
          </div>
          <a
            href="mailto:jemalaman@gmail.com"
            className="text-sm font-medium px-4 py-2 rounded-full bg-cyan-600 text-white hover:bg-cyan-700 transition-colors"
          >
            Hire me
          </a>
        </div>
      </nav>

      {/* Hero */}
      <div className="relative overflow-hidden pt-32 pb-24 px-6">
        {/* Subtle teal blob */}
        <div
          className="absolute top-0 right-0 w-[600px] h-[600px] rounded-full opacity-[0.06] blur-3xl"
          style={{
            background: "radial-gradient(circle, #06b6d4 0%, transparent 70%)",
          }}
        />
        <div
          className="absolute bottom-0 left-0 w-[400px] h-[400px] rounded-full opacity-[0.04] blur-3xl"
          style={{
            background: "radial-gradient(circle, #7c3aed 0%, transparent 70%)",
          }}
        />

        <div className="max-w-5xl mx-auto">
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-cyan-50 border border-cyan-100 mb-8">
            <span className="w-2 h-2 rounded-full bg-cyan-500 animate-pulse" />
            <span className="text-xs font-medium text-cyan-700">
              Open to Flutter roles & collaborations
            </span>
          </div>

          <h1 className="text-6xl md:text-7xl font-bold text-gray-900 tracking-tight leading-none mb-6">
            Jemal
            <br />
            <span
              style={{ WebkitTextStroke: "2px #0e7490", color: "transparent" }}
            >
              Aman
            </span>
          </h1>

          <p className="text-xl text-gray-500 max-w-xl leading-relaxed mb-10">
            Software engineer & Flutter specialist from{" "}
            <span className="text-gray-900 font-medium">Jimma, Ethiopia</span>.
            Building digital solutions for{" "}
            <span className="text-cyan-600 font-medium">community impact</span>.
          </p>

          <div className="flex flex-wrap gap-3">
            <button
              onClick={() => scrollTo("Projects")}
              className="px-6 py-3 rounded-full bg-gray-900 text-white text-sm font-medium hover:bg-cyan-700 transition-colors"
            >
              View projects
            </button>
            <a
              href="https://github.com/jemalaman"
              target="_blank"
              className="px-6 py-3 rounded-full border border-gray-200 text-gray-700 text-sm font-medium hover:border-gray-400 transition-colors"
            >
              GitHub ↗
            </a>
          </div>

          {/* Stats row */}
          <div className="flex flex-wrap gap-8 mt-16 pt-8 border-t border-gray-100">
            {[
              { val: "4+", label: "Years building" },
              { val: "10k+", label: "Users served" },
              { val: "×3", label: "Pull Shark" },
              { val: "2", label: "Universities" },
            ].map(({ val, label }) => (
              <div key={label}>
                <p className="text-3xl font-bold text-gray-900">{val}</p>
                <p className="text-sm text-gray-400 mt-0.5">{label}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* About */}
      <Section id="about" className="py-24 px-6 bg-gray-50">
        <div className="max-w-5xl mx-auto grid md:grid-cols-2 gap-16 items-center">
          <div>
            <p className="text-xs font-semibold tracking-widest text-cyan-600 uppercase mb-4">
              About
            </p>
            <h2 className="text-4xl font-bold text-gray-900 mb-6 leading-tight">
              Code that serves
              <br />
              people.
            </h2>
            <p className="text-gray-500 leading-relaxed mb-4">
              I'm a Software Engineering student at{" "}
              <span className="text-gray-900 font-medium">
                Jimma University Institute of Technology
              </span>{" "}
              and Flutter developer at{" "}
              <span className="text-gray-900 font-medium">
                EagleLion System Technology
              </span>
              .
            </p>
            <p className="text-gray-500 leading-relaxed">
              My work sits at the intersection of clean mobile architecture,
              full-stack engineering, and community impact — with a growing
              focus on AI and emerging technology.
            </p>
          </div>
          <div className="grid grid-cols-2 gap-4">
            {[
              {
                label: "Education",
                value: "Jimma University",
                color: "#0e7490",
              },
              {
                label: "Company",
                value: "EagleLion System Technology",
                color: "#7c3aed",
              },
              { label: "Location", value: "Jimma, Ethiopia", color: "#059669" },
              {
                label: "Focus",
                value: "Flutter · AI · Open Source",
                color: "#d97706",
              },
            ].map(({ label, value, color }) => (
              <div
                key={label}
                className="bg-white rounded-2xl p-5 border border-gray-100 hover:border-gray-200 transition-colors"
              >
                <p className="text-xs font-medium mb-2" style={{ color }}>
                  {label}
                </p>
                <p className="text-sm font-semibold text-gray-800 leading-snug">
                  {value}
                </p>
              </div>
            ))}
          </div>
        </div>
      </Section>

      {/* Skills */}
      <Section id="skills" className="py-24 px-6">
        <div className="max-w-5xl mx-auto">
          <p className="text-xs font-semibold tracking-widest text-cyan-600 uppercase mb-4">
            Skills
          </p>
          <h2 className="text-4xl font-bold text-gray-900 mb-12">Tech stack</h2>
          <div className="grid md:grid-cols-2 gap-6">
            {SKILLS.map(({ category, color, items }) => (
              <div
                key={category}
                className="rounded-2xl border border-gray-100 p-6 hover:shadow-md transition-shadow"
              >
                <div className="flex items-center gap-2 mb-4">
                  <span
                    className="w-2.5 h-2.5 rounded-full"
                    style={{ background: color }}
                  />
                  <p className="text-sm font-semibold text-gray-700">
                    {category}
                  </p>
                </div>
                <div className="flex flex-wrap gap-2">
                  {items.map((item) => (
                    <span
                      key={item}
                      className="px-3 py-1 rounded-full text-xs font-medium border"
                      style={{
                        color,
                        borderColor: color + "33",
                        background: color + "0d",
                      }}
                    >
                      {item}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </Section>

      {/* Projects */}
      <Section id="projects" className="py-24 px-6 bg-gray-50">
        <div className="max-w-5xl mx-auto">
          <p className="text-xs font-semibold tracking-widest text-cyan-600 uppercase mb-4">
            Projects
          </p>
          <h2 className="text-4xl font-bold text-gray-900 mb-12">
            What I've built
          </h2>
          <div className="grid md:grid-cols-2 gap-6">
            {PROJECTS.map(({ title, desc, tags, color, stat }) => (
              <div
                key={title}
                className="bg-white rounded-2xl border border-gray-100 p-7 hover:shadow-lg transition-all hover:-translate-y-1 group cursor-pointer"
              >
                <div className="flex items-start justify-between mb-4">
                  <span
                    className="text-xs font-semibold px-2.5 py-1 rounded-full"
                    style={{ color, background: color + "15" }}
                  >
                    {stat}
                  </span>
                  <span className="text-gray-300 group-hover:text-gray-500 transition-colors text-lg">
                    ↗
                  </span>
                </div>
                <h3 className="text-lg font-bold text-gray-900 mb-2">
                  {title}
                </h3>
                <p className="text-sm text-gray-500 leading-relaxed mb-5">
                  {desc}
                </p>
                <div className="flex flex-wrap gap-2">
                  {tags.map((t) => (
                    <span
                      key={t}
                      className="px-2.5 py-0.5 bg-gray-50 border border-gray-200 rounded-full text-xs text-gray-500 font-medium"
                    >
                      {t}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </Section>

      {/* Timeline */}
      <Section id="timeline" className="py-24 px-6">
        <div className="max-w-5xl mx-auto">
          <p className="text-xs font-semibold tracking-widest text-cyan-600 uppercase mb-4">
            Timeline
          </p>
          <h2 className="text-4xl font-bold text-gray-900 mb-14">
            Career path
          </h2>
          <div className="relative">
            <div className="absolute left-[72px] top-0 bottom-0 w-px bg-gray-100" />
            <div className="space-y-8">
              {TIMELINE.map(({ year, role, org, color }, i) => (
                <div key={i} className="flex gap-8 items-start group">
                  <div className="w-14 text-right flex-shrink-0">
                    <span className="text-xs font-bold" style={{ color }}>
                      {year}
                    </span>
                  </div>
                  <div
                    className="w-3 h-3 rounded-full mt-1 flex-shrink-0 ring-4 ring-white relative z-10"
                    style={{ background: color }}
                  />
                  <div className="pb-2">
                    <p className="text-base font-semibold text-gray-900">
                      {role}
                    </p>
                    <p className="text-sm text-gray-400 mt-0.5">{org}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </Section>

      {/* Contact */}
      <Section id="contact" className="py-24 px-6">
        <div className="max-w-5xl mx-auto">
          <div
            className="rounded-3xl p-12 text-center"
            style={{
              background:
                "linear-gradient(135deg, #f0fdfd 0%, #e0f2fe 50%, #f5f3ff 100%)",
            }}
          >
            <p className="text-xs font-semibold tracking-widest text-cyan-600 uppercase mb-4">
              Contact
            </p>
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Let's build something
            </h2>
            <p className="text-gray-500 mb-10 max-w-md mx-auto">
              Open to Flutter roles, open-source collaborations, and speaking at
              events.
            </p>
            <div className="flex flex-wrap gap-3 justify-center">
              <button
                onClick={copy}
                className="px-6 py-3 rounded-full bg-cyan-600 text-white text-sm font-medium hover:bg-cyan-700 transition-colors"
              >
                {copied ? "Copied!" : "jemalaman@gmail.com"}
              </button>
              <a
                href="https://linkedin.com/in/jemalaman"
                target="_blank"
                className="px-6 py-3 rounded-full border border-gray-300 text-gray-700 text-sm font-medium hover:border-cyan-400 hover:text-cyan-700 transition-colors"
              >
                LinkedIn ↗
              </a>
              <a
                href="https://t.me/jemalaman"
                target="_blank"
                className="px-6 py-3 rounded-full border border-gray-300 text-gray-700 text-sm font-medium hover:border-cyan-400 hover:text-cyan-700 transition-colors"
              >
                Telegram ↗
              </a>
            </div>
          </div>
        </div>
      </Section>

      {/* Footer */}
      <footer className="py-8 px-6 border-t border-gray-100">
        <div className="max-w-5xl mx-auto flex items-center justify-between">
          <span className="text-sm text-gray-400">© 2025 Jemal Aman</span>
          <span className="text-sm text-gray-400">Jimma, Ethiopia</span>
        </div>
      </footer>
    </div>
  );
}
