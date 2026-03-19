"use client";
import { useEffect, useState } from "react";
import { personalInfo } from "@/lib/data";
import { Github, Linkedin, Mail, ExternalLink } from "lucide-react";

const ROLES = ["Mobile Developer", "Web Developer", "Desktop Developer"];

export default function Hero() {
  const [roleIdx, setRoleIdx] = useState(0);
  const [typed, setTyped] = useState("");
  const [deleting, setDeleting] = useState(false);
  const [mounted, setMounted] = useState(false);

  useEffect(() => { setMounted(true); }, []);

  useEffect(() => {
    const target = ROLES[roleIdx];
    let t: ReturnType<typeof setTimeout>;
    if (!deleting && typed.length < target.length)
      t = setTimeout(() => setTyped(target.slice(0, typed.length + 1)), 65);
    else if (!deleting && typed.length === target.length)
      t = setTimeout(() => setDeleting(true), 1600);
    else if (deleting && typed.length > 0)
      t = setTimeout(() => setTyped(typed.slice(0, -1)), 35);
    else { setDeleting(false); setRoleIdx(i => (i + 1) % ROLES.length); }
    return () => clearTimeout(t);
  }, [typed, deleting, roleIdx]);

  const scrollTo = (id: string) =>
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth", block: "start" });

  return (
    <section style={{
      position: "relative",
      minHeight: "100vh",
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      background: "var(--bg)",
      overflow: "hidden",
    }}>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=DM+Serif+Display:ital@0;1&family=DM+Sans:wght@300;400;500&display=swap');

        .hero-wrapper {
          display: flex;
          align-items: center;
          gap: clamp(32px, 6vw, 80px);
          max-width: 1000px;
          width: 100%;
          padding: 80px clamp(20px, 5vw, 60px);
          opacity: 0;
          transform: translateY(16px);
          transition: opacity .6s ease, transform .6s ease;
        }
        .hero-wrapper.visible {
          opacity: 1;
          transform: none;
        }

        /* ── Photo card ── */
        .hero-photo-wrap {
          flex: 0 0 auto;
          position: relative;
          width: clamp(240px, 32vw, 380px);
        }
        .hero-photo-frame {
          width: 100%;
          aspect-ratio: 3/4;
          border-radius: 4px;
          overflow: hidden;
          position: relative;
          /* Warm parchment border effect */
          box-shadow:
            0 0 0 6px var(--bg),
            0 0 0 7px color-mix(in srgb, var(--tx) 18%, transparent),
            0 8px 40px color-mix(in srgb, var(--tx) 10%, transparent);
        }
        .hero-photo-frame img {
          width: 100%;
          height: 100%;
          object-fit: cover;
          object-position: center top;
          display: block;
        }
        /* decorative corner accent */
        .hero-photo-corner {
          position: absolute;
          width: 28px; height: 28px;
          border-color: color-mix(in srgb, var(--tx) 30%, transparent);
          border-style: solid;
        }
        .hero-photo-corner.tl { top: -10px; left: -10px; border-width: 2px 0 0 2px; }
        .hero-photo-corner.br { bottom: -10px; right: -10px; border-width: 0 2px 2px 0; }

        /* ── Text side ── */
        .hero-text {
          flex: 1 1 0;
          min-width: 0;
        }
        .hero-greeting {
          font-family: 'DM Sans', sans-serif;
          font-size: clamp(14px, 2vw, 16px);
          font-weight: 300;
          letter-spacing: 0.12em;
          text-transform: uppercase;
          color: var(--tx2);
          margin-bottom: 6px;
        }
        .hero-name {
          font-family: 'DM Serif Display', Georgia, serif;
          font-size: clamp(36px, 5.5vw, 64px);
          font-weight: 400;
          line-height: 1.05;
          color: var(--tx);
          margin: 0 0 10px;
          letter-spacing: -0.01em;
        }
        .hero-role-line {
          font-family: 'DM Serif Display', Georgia, serif;
          font-size: clamp(14px, 2vw, 17px);
          font-style: italic;
          color: var(--tx2);
          margin-bottom: 20px;
          height: 24px;
        }
        .hero-cursor {
          display: inline-block;
          width: 1.5px;
          height: 1em;
          background: var(--tx2);
          vertical-align: text-bottom;
          margin-left: 2px;
          animation: blink .9s step-end infinite;
        }
        @keyframes blink { 0%,100%{opacity:1} 50%{opacity:0} }

        .hero-divider {
          width: 40px;
          height: 1.5px;
          background: color-mix(in srgb, var(--tx) 25%, transparent);
          margin: 18px 0;
        }
        .hero-bio {
          font-family: 'DM Sans', sans-serif;
          font-size: clamp(13px, 1.6vw, 14.5px);
          color: var(--tx2);
          line-height: 1.85;
          margin-bottom: 28px;
          max-width: 420px;
        }
        .hero-tags {
          display: flex;
          flex-wrap: wrap;
          gap: 6px;
          margin-bottom: 28px;
        }
        .hero-tag {
          font-family: 'DM Sans', sans-serif;
          font-size: 11px;
          font-weight: 500;
          letter-spacing: 0.04em;
          padding: 4px 11px;
          border-radius: 2px;
          color: var(--tx2);
          border: 1px solid color-mix(in srgb, var(--tx) 18%, transparent);
          background: transparent;
        }
        .hero-actions {
          display: flex;
          flex-wrap: wrap;
          align-items: center;
          gap: 12px;
          margin-bottom: 28px;
        }
        .hero-btn-primary {
          font-family: 'DM Sans', sans-serif;
          display: inline-flex;
          align-items: center;
          gap: 8px;
          padding: 11px 26px;
          border-radius: 2px;
          background: var(--tx);
          color: var(--bg);
          font-size: 13px;
          font-weight: 500;
          letter-spacing: 0.06em;
          text-transform: uppercase;
          border: 1px solid var(--tx);
          cursor: pointer;
          transition: all .2s;
        }
        .hero-btn-primary:hover {
          opacity: .82;
          transform: translateY(-1px);
        }
        .hero-btn-ghost {
          font-family: 'DM Sans', sans-serif;
          display: inline-flex;
          align-items: center;
          gap: 8px;
          padding: 10px 22px;
          border-radius: 2px;
          background: transparent;
          color: var(--tx);
          font-size: 13px;
          font-weight: 400;
          letter-spacing: 0.06em;
          text-transform: uppercase;
          border: 1px solid color-mix(in srgb, var(--tx) 28%, transparent);
          cursor: pointer;
          transition: all .2s;
        }
        .hero-btn-ghost:hover {
          border-color: var(--tx);
        }
        .hero-socials {
          display: flex;
          gap: 10px;
        }
        .hero-social-link {
          width: 34px; height: 34px;
          display: flex;
          align-items: center;
          justify-content: center;
          border-radius: 50%;
          border: 1px solid color-mix(in srgb, var(--tx) 22%, transparent);
          color: var(--tx2);
          text-decoration: none;
          transition: all .2s;
        }
        .hero-social-link:hover {
          color: var(--tx);
          border-color: var(--tx);
          transform: translateY(-2px);
        }

        @media (max-width: 680px) {
          .hero-wrapper { flex-direction: column; padding-top: 100px; }
          .hero-photo-wrap { width: min(260px, 75vw); }
          .hero-text { text-align: center; }
          .hero-divider { margin: 18px auto; }
          .hero-bio { margin-left: auto; margin-right: auto; }
          .hero-tags { justify-content: center; }
          .hero-actions { justify-content: center; }
          .hero-socials { justify-content: center; }
        }
      `}</style>

      <div className={`hero-wrapper${mounted ? " visible" : ""}`}>

        {/* ── Left: framed photo ── */}
        <div className="hero-photo-wrap">
          <div className="hero-photo-frame">
            <img src="/jc-office.png" alt="John Carlo Dizon" />
          </div>
          <div className="hero-photo-corner tl" />
          <div className="hero-photo-corner br" />
        </div>

        {/* ── Right: text content ── */}
        <div className="hero-text">
          <p className="hero-greeting">Hi! I&apos;m</p>
          <h1 className="hero-name">John Carlo Dizon</h1>

          <div className="hero-role-line">
            <span>{typed}</span>
            <span className="hero-cursor" />
          </div>

          <div className="hero-divider" />

          <p className="hero-bio">{personalInfo.tagline}</p>

          <div className="hero-tags">
            {["Flutter", "Laravel", "Java", "React", "PostgreSQL", "Git"].map(t => (
              <span key={t} className="hero-tag">{t}</span>
            ))}
          </div>

          <div className="hero-actions">
            <button className="hero-btn-primary" onClick={() => scrollTo("projects")}>
              View Work <ExternalLink size={13} />
            </button>
            <button className="hero-btn-ghost" onClick={() => scrollTo("contact")}>
              Get In Touch <Mail size={13} />
            </button>
          </div>

          <div className="hero-socials">
            {[
              { Icon: Github, href: personalInfo.github, label: "GitHub" },
              { Icon: Linkedin, href: personalInfo.linkedin, label: "LinkedIn" },
              { Icon: Mail, href: `mailto:${personalInfo.email}`, label: "Email" },
            ].map(({ Icon, href, label }) => (
              <a key={label} href={href}
                target={label !== "Email" ? "_blank" : undefined}
                rel="noopener noreferrer"
                className="hero-social-link"
                aria-label={label}
              >
                <Icon size={15} />
              </a>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}