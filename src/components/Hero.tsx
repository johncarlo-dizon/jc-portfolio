"use client";
import { personalInfo } from "@/lib/data";
import { Github, Linkedin, Mail, ArrowDown, ExternalLink } from "lucide-react";

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background grid */}
      <div className="absolute inset-0 bg-grid" />

      {/* Glow orbs */}
      <div
        className="absolute top-1/4 left-1/4 w-96 h-96 rounded-full pointer-events-none"
        style={{ background: "radial-gradient(circle, rgba(99,102,241,0.12) 0%, transparent 70%)" }}
      />
      <div
        className="absolute bottom-1/4 right-1/4 w-80 h-80 rounded-full pointer-events-none"
        style={{ background: "radial-gradient(circle, rgba(139,92,246,0.10) 0%, transparent 70%)" }}
      />

      <div className="relative z-10 max-w-6xl mx-auto px-6 text-center">
        {/* Badge */}
        <div
          className="inline-flex items-center gap-2 rounded-full px-4 py-2 text-sm mb-8"
          style={{
            background: "rgba(99,102,241,0.1)",
            border: "1px solid rgba(99,102,241,0.2)",
            color: "#a5b4fc",
          }}
        >
          <span className="w-2 h-2 bg-indigo-400 rounded-full animate-pulse" />
          Full Stack &amp; Mobile Developer
        </div>

        {/* Name */}
        <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 leading-tight tracking-tight">
          Hi, I&apos;m{" "}
          <span
            style={{
              background: "linear-gradient(to right, #818cf8, #a78bfa, #c084fc)",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
              backgroundClip: "text",
            }}
          >
            John Carlo
          </span>
          <br />
          <span className="text-4xl md:text-6xl" style={{ color: "#cbd5e1" }}>
            Dizon
          </span>
        </h1>

        {/* Tagline */}
        <p className="text-lg md:text-xl max-w-2xl mx-auto mb-10 leading-relaxed" style={{ color: "#94a3b8" }}>
          {personalInfo.tagline}
        </p>

        {/* Tech pill tags */}
        <div className="flex flex-wrap justify-center gap-2 mb-12">
          {["Flutter", "Laravel", "Spring Boot", "React", "CI/CD", "PostgreSQL"].map((tech) => (
            <span
              key={tech}
              className="px-3 py-1 text-xs font-medium rounded-full"
              style={{
                background: "rgba(255,255,255,0.05)",
                border: "1px solid rgba(255,255,255,0.1)",
                color: "#94a3b8",
              }}
            >
              {tech}
            </span>
          ))}
        </div>

        {/* CTAs */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-16">
          <a
            href="#projects"
            className="px-8 py-3 rounded-lg font-semibold text-white flex items-center gap-2 transition-all duration-200"
            style={{ background: "#6366f1" }}
            onMouseEnter={e => (e.currentTarget.style.background = "#4f46e5")}
            onMouseLeave={e => (e.currentTarget.style.background = "#6366f1")}
          >
            View My Work <ExternalLink size={16} />
          </a>
          <a
            href="#contact"
            className="px-8 py-3 rounded-lg font-semibold text-white flex items-center gap-2 transition-all duration-200"
            style={{
              background: "rgba(255,255,255,0.05)",
              border: "1px solid rgba(255,255,255,0.1)",
            }}
          >
            Get In Touch <Mail size={16} />
          </a>
        </div>

        {/* Social links */}
        <div className="flex items-center justify-center gap-4 mb-16">
          {[
            { icon: Github, href: personalInfo.github, label: "GitHub" },
            { icon: Linkedin, href: personalInfo.linkedin, label: "LinkedIn" },
            { icon: Mail, href: `mailto:${personalInfo.email}`, label: "Email" },
          ].map(({ icon: Icon, href, label }) => (
            <a
              key={label}
              href={href}
              target={label !== "Email" ? "_blank" : undefined}
              rel="noopener noreferrer"
              className="p-3 rounded-lg transition-all duration-200"
              style={{
                background: "rgba(255,255,255,0.05)",
                border: "1px solid rgba(255,255,255,0.1)",
                color: "#94a3b8",
              }}
              onMouseEnter={e => { e.currentTarget.style.color = "#fff"; e.currentTarget.style.background = "rgba(255,255,255,0.1)"; }}
              onMouseLeave={e => { e.currentTarget.style.color = "#94a3b8"; e.currentTarget.style.background = "rgba(255,255,255,0.05)"; }}
            >
              <Icon size={20} />
            </a>
          ))}
        </div>

        {/* Scroll */}
        <div className="flex flex-col items-center gap-2" style={{ color: "#4b5563" }}>
          <span className="text-xs tracking-widest uppercase">Scroll</span>
          <ArrowDown size={16} className="animate-bounce" />
        </div>
      </div>
    </section>
  );
}