"use client";
import { useEffect, useState } from "react";
import { personalInfo } from "@/lib/data";
import { Github, Linkedin, Mail, ExternalLink, ArrowDown } from "lucide-react";
import { ChibiHero } from "./ChibiScenes";

const ROLES = ["Full Stack Developer","Mobile Developer","Laravel Developer","Flutter Developer","Backend Developer"];

export default function Hero() {
  const [roleIdx, setRoleIdx] = useState(0);
  const [typed, setTyped] = useState("");
  const [deleting, setDeleting] = useState(false);
  const [mounted, setMounted] = useState(false);

  useEffect(() => { setMounted(true); }, []);
  useEffect(() => {
    const target = ROLES[roleIdx];
    let t: ReturnType<typeof setTimeout>;
    if (!deleting && typed.length < target.length) t = setTimeout(() => setTyped(target.slice(0, typed.length+1)), 65);
    else if (!deleting && typed.length === target.length) t = setTimeout(() => setDeleting(true), 1600);
    else if (deleting && typed.length > 0) t = setTimeout(() => setTyped(typed.slice(0,-1)), 35);
    else { setDeleting(false); setRoleIdx(i=>(i+1)%ROLES.length); }
    return () => clearTimeout(t);
  }, [typed, deleting, roleIdx]);

  const scrollTo = (id: string) => document.getElementById(id)?.scrollIntoView({ behavior:"smooth", block:"start" });

  return (
    <section className="relative min-h-screen flex items-center overflow-hidden">
      <style>{`
        .hero-grid { display: grid; grid-template-columns: 1fr auto; gap: 48px; align-items: center; }
        .hero-chibi-col { display: flex; align-items: center; justify-content: center; flex-shrink: 0; }
        @media (max-width: 900px) {
          .hero-grid { grid-template-columns: 1fr !important; }
          .hero-chibi-col { display: none !important; }
        }
      `}</style>

      <div className="absolute inset-0 bg-grid" />
      <div style={{ position:"absolute", top:"10%", left:"5%", width:"600px", height:"600px", borderRadius:"50%",
        background:"radial-gradient(circle, rgba(124,109,250,0.06) 0%, transparent 65%)", pointerEvents:"none" }} />

      <div className="relative z-10 w-full" style={{
        maxWidth:"1200px", margin:"0 auto", padding:"0 1.25rem",
        opacity:mounted?1:0, transition:"opacity 0.5s ease",
      }}>
        <div className="hero-grid">

          {/* Text */}
          <div style={{ maxWidth:"620px" }}>
            <div style={{ display:"inline-flex", alignItems:"center", gap:"8px",
              padding:"6px 14px", borderRadius:"999px", marginBottom:"24px",
              background:"var(--ac-dim)", border:"1px solid var(--ac-b)", color:"var(--ac-l)",
              fontSize:"12px", fontWeight:500, animation:"fadeInUp 0.6s ease 0.1s both" }}>
              <span className="pulse-dot" style={{ width:"7px", height:"7px", background:"var(--ac)", borderRadius:"50%", display:"inline-block" }} />
              Available for opportunities
            </div>

            <h1 style={{ fontWeight:800, lineHeight:1.0, letterSpacing:"-0.03em", marginBottom:"16px",
              animation:"fadeInUp 0.7s ease 0.2s both",
              fontSize:"clamp(40px, 8vw, 84px)" }}>
              <span style={{ color:"var(--tx2)", fontWeight:600, fontSize:"0.48em", display:"block", marginBottom:"4px" }}>Hi, I&apos;m</span>
              <span style={{ color:"var(--tx)" }}>JC Dizon</span>
            </h1>

            <div style={{ height:"28px", marginBottom:"20px", animation:"fadeInUp 0.7s ease 0.35s both" }}>
              <span style={{ fontSize:"clamp(13px, 2vw, 18px)", fontWeight:500, color:"var(--tx2)", fontFamily:"monospace" }}>
                {typed}
                <span style={{ display:"inline-block", width:"2px", height:"1.1em",
                  background:"var(--tx2)", verticalAlign:"text-bottom", marginLeft:"2px",
                  animation:"pulse-dot 0.9s step-end infinite" }} />
              </span>
            </div>

            <p style={{ fontSize:"clamp(13px, 1.8vw, 15px)", color:"var(--tx2)", lineHeight:1.8, marginBottom:"28px",
              animation:"fadeInUp 0.7s ease 0.45s both" }}>{personalInfo.tagline}</p>

            <div style={{ display:"flex", flexWrap:"wrap", gap:"7px", marginBottom:"28px",
              animation:"fadeInUp 0.7s ease 0.55s both" }}>
              {["Flutter","Laravel","Spring Boot","React","Next.js","PostgreSQL"].map(t => (
                <span key={t} style={{ padding:"4px 12px", fontSize:"11px", fontWeight:500,
                  borderRadius:"999px", background:"var(--card)", border:"1px solid var(--border-h)", color:"var(--tx2)" }}>{t}</span>
              ))}
            </div>

            <div style={{ display:"flex", flexWrap:"wrap", gap:"10px", marginBottom:"28px",
              animation:"fadeInUp 0.7s ease 0.65s both" }}>
              <button onClick={() => scrollTo("projects")} style={{
                display:"inline-flex", alignItems:"center", gap:"8px",
                padding:"11px 24px", borderRadius:"8px", background:"var(--tx)", color:"var(--bg)",
                fontSize:"14px", fontWeight:600, border:"none", cursor:"pointer", transition:"all 0.2s" }}
                onMouseEnter={e => { e.currentTarget.style.opacity="0.85"; e.currentTarget.style.transform="translateY(-2px)"; }}
                onMouseLeave={e => { e.currentTarget.style.opacity="1"; e.currentTarget.style.transform="none"; }}>
                View My Work <ExternalLink size={14}/>
              </button>
              <button onClick={() => scrollTo("contact")} style={{
                display:"inline-flex", alignItems:"center", gap:"8px",
                padding:"11px 24px", borderRadius:"8px", background:"transparent",
                color:"var(--tx)", fontSize:"14px", fontWeight:600,
                border:"1px solid var(--border-h)", cursor:"pointer", transition:"all 0.2s" }}
                onMouseEnter={e => { e.currentTarget.style.background="var(--ac-dim)"; e.currentTarget.style.borderColor="var(--ac-b)"; }}
                onMouseLeave={e => { e.currentTarget.style.background="transparent"; e.currentTarget.style.borderColor="var(--border-h)"; }}>
                Get In Touch <Mail size={14}/>
              </button>
            </div>

            <div style={{ display:"flex", gap:"10px", animation:"fadeInUp 0.7s ease 0.75s both" }}>
              {[
                { Icon:Github,   href:personalInfo.github,            label:"GitHub"   },
                { Icon:Linkedin, href:personalInfo.linkedin,          label:"LinkedIn" },
                { Icon:Mail,     href:`mailto:${personalInfo.email}`, label:"Email"    },
              ].map(({ Icon, href, label }) => (
                <a key={label} href={href} target={label!=="Email"?"_blank":undefined} rel="noopener noreferrer"
                  style={{ width:"40px", height:"40px", borderRadius:"8px", display:"flex",
                    alignItems:"center", justifyContent:"center",
                    background:"var(--card)", border:"1px solid var(--border-h)",
                    color:"var(--tx3)", textDecoration:"none", transition:"all 0.2s" }}
                  onMouseEnter={e => { const el=e.currentTarget as HTMLAnchorElement; el.style.color="var(--tx)"; el.style.background="var(--ac-dim)"; el.style.transform="translateY(-2px)"; }}
                  onMouseLeave={e => { const el=e.currentTarget as HTMLAnchorElement; el.style.color="var(--tx3)"; el.style.background="var(--card)"; el.style.transform="none"; }}>
                  <Icon size={16}/>
                </a>
              ))}
            </div>
          </div>

          {/* Chibi — hidden on mobile */}
          <div className="hero-chibi-col" style={{ animation:"fadeInUp 0.8s ease 0.4s both" }}>
            <ChibiHero />
          </div>
        </div>

        <div style={{ display:"flex", flexDirection:"column", alignItems:"flex-start", gap:"5px",
          color:"var(--tx3)", marginTop:"48px", animation:"fadeInUp 0.7s ease 0.85s both" }}>
          <span style={{ fontSize:"10px", letterSpacing:"0.18em", textTransform:"uppercase", fontWeight:600 }}>Scroll</span>
          <ArrowDown size={14} className="bounce-y"/>
        </div>
      </div>
    </section>
  );
}