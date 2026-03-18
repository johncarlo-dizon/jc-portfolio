"use client";
import { useEffect, useState } from "react";
import { personalInfo } from "@/lib/data";
import { Github, Linkedin, Mail, ExternalLink, ArrowDown } from "lucide-react";

const ROLES = ["Mobile Developer","Web Developer","Desktop Developer"];

export default function Hero() {
  const [roleIdx,  setRoleIdx]  = useState(0);
  const [typed,    setTyped]    = useState("");
  const [deleting, setDeleting] = useState(false);
  const [mounted,  setMounted]  = useState(false);

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
    <section style={{ position:"relative", minHeight:"100vh", display:"flex", alignItems:"center", overflow:"hidden", background:"var(--bg)" }}>
      <style>{`
        .hp-panel {
          position: absolute;
          top: 0; right: 0; bottom: 0;
          /* wider panel = starts closer to center = no dead gap */
          width: 65%;
          overflow: hidden;
          pointer-events: none;
        }
        .hp-img {
          width: 100%; height: 100%;
          object-fit: cover;
          object-position: 28% 48%;
          display: block;
          filter: saturate(0.85) brightness(0.75) contrast(1.06);
        }
        /* blur right 38% only — softens other person */
        .hp-blur {
          position: absolute;
          top: 0; right: 0; bottom: 0; width: 40%;
          backdrop-filter: blur(3px);
          -webkit-backdrop-filter: blur(3px);
          -webkit-mask-image: linear-gradient(to right, transparent 0%, black 45%);
          mask-image: linear-gradient(to right, transparent 0%, black 45%);
        }
        /* LEFT fade — panel is wider so fade covers the gap zone */
        .hp-fade-l {
          position: absolute; inset: 0;
          background: linear-gradient(
            to right,
            rgba(var(--hp-r),var(--hp-g),var(--hp-b), 1)    0%,
            rgba(var(--hp-r),var(--hp-g),var(--hp-b), 0.95) 12%,
            rgba(var(--hp-r),var(--hp-g),var(--hp-b), 0.6)  26%,
            rgba(var(--hp-r),var(--hp-g),var(--hp-b), 0.15) 42%,
            transparent 55%
          );
        }
        /* top/bottom edges */
        .hp-fade-tb {
          position: absolute; inset: 0;
          background:
            linear-gradient(to bottom, rgba(var(--hp-r),var(--hp-g),var(--hp-b),1) 0%, transparent 10%),
            linear-gradient(to top,    rgba(var(--hp-r),var(--hp-g),var(--hp-b),1) 0%, transparent 10%);
        }
        /* right edge vignette */
        .hp-fade-r {
          position: absolute; inset: 0;
          background: linear-gradient(to left, rgba(0,0,0,0.55) 0%, transparent 52%);
        }
        /* tags */
        .hp-tag {
          padding: 4px 10px; font-size: 11px; font-weight: 500;
          border-radius: 999px; color: var(--tx3);
          background: transparent; border: 1px solid var(--border);
          letter-spacing: 0.02em;
        }
        /* social */
        .hp-social {
          width: 36px; height: 36px; border-radius: 8px;
          display: flex; align-items: center; justify-content: center;
          color: var(--tx3); background: transparent;
          border: 1px solid var(--border);
          text-decoration: none; transition: all .2s;
        }
        .hp-social:hover { color: var(--tx); border-color: var(--border-h); transform: translateY(-2px); }
        /* content */
        .hp-content {
          position: relative; z-index: 10;
          max-width: 1200px; margin: 0 auto;
          padding: 0 1.5rem; width: 100%;
        }
        .hp-text { max-width: 500px; }
        @media (max-width: 768px) {
          .hp-panel { display: none !important; }
          .hp-text  { max-width: 100% !important; }
        }
      `}</style>

      <style>{`
        :root, [data-theme="dark"]  { --hp-r:10; --hp-g:10; --hp-b:15; }
        [data-theme="light"]        { --hp-r:255; --hp-g:255; --hp-b:255; }
      `}</style>

      {/* photo panel — wider, starts at 35% from left */}
      <div className="hp-panel">
        <img src="/jc-office.png" alt="JC at work" className="hp-img" />
        <div className="hp-blur" />
        <div className="hp-fade-l" />
        <div className="hp-fade-tb" />
        <div className="hp-fade-r" />
      </div>

      {/* content */}
      <div className="hp-content" style={{ opacity: mounted?1:0, transition:"opacity .5s ease" }}>
        <div className="hp-text">

          <h1 style={{
            fontWeight:800, lineHeight:1.0, letterSpacing:"-0.03em",
            marginBottom:"16px", marginTop:"25px",
            animation:"fadeInUp .7s ease .2s both",
            fontSize:"clamp(40px,8vw,84px)",
          }}>
            <span style={{ color:"var(--tx2)", fontWeight:600, fontSize:"0.48em", display:"block", marginBottom:"4px" }}>
              Hi, I&apos;m
            </span>
            <span style={{ color:"var(--tx)" }}>John  Carlo Dizon</span>
          </h1>

          <div style={{ height:"28px", marginBottom:"20px", animation:"fadeInUp .7s ease .35s both" }}>
            <span style={{ fontSize:"clamp(13px,2vw,18px)", fontWeight:500, color:"var(--tx2)", fontFamily:"monospace" }}>
              {typed}
              <span style={{
                display:"inline-block", width:"2px", height:"1.1em",
                background:"var(--tx2)", verticalAlign:"text-bottom", marginLeft:"2px",
                animation:"pulse-dot .9s step-end infinite",
              }}/>
            </span>
          </div>

          <p style={{
            fontSize:"clamp(13px,1.8vw,15px)", color:"var(--tx2)",
            lineHeight:1.8, marginBottom:"28px",
            animation:"fadeInUp .7s ease .45s both",
          }}>
            {personalInfo.tagline}
          </p>

          <div style={{ display:"flex", flexWrap:"wrap", gap:"7px", marginBottom:"28px", animation:"fadeInUp .7s ease .55s both" }}>
            {["Flutter","Laravel","Java","React","PostgreSQL","Git"].map(t=>(
              <span key={t} className="hp-tag">{t}</span>
            ))}
          </div>

          <div style={{ display:"flex", flexWrap:"wrap", gap:"10px", marginBottom:"28px", animation:"fadeInUp .7s ease .65s both" }}>
            <button onClick={()=>scrollTo("projects")} style={{
              display:"inline-flex", alignItems:"center", gap:"8px",
              padding:"11px 24px", borderRadius:"8px",
              background:"var(--tx)", color:"var(--bg)",
              fontSize:"14px", fontWeight:600, border:"none", cursor:"pointer", transition:"all .2s",
            }}
              onMouseEnter={e=>{e.currentTarget.style.opacity=".85";e.currentTarget.style.transform="translateY(-2px)";}}
              onMouseLeave={e=>{e.currentTarget.style.opacity="1";e.currentTarget.style.transform="none";}}
            >
              View My Work <ExternalLink size={14}/>
            </button>
            <button onClick={()=>scrollTo("contact")} style={{
              display:"inline-flex", alignItems:"center", gap:"8px",
              padding:"11px 24px", borderRadius:"8px",
              background:"transparent", color:"var(--tx)", fontSize:"14px", fontWeight:600,
              border:"1px solid var(--border)", cursor:"pointer", transition:"all .2s",
            }}
              onMouseEnter={e=>{e.currentTarget.style.borderColor="var(--tx)";}}
              onMouseLeave={e=>{e.currentTarget.style.borderColor="var(--border)";}}
            >
              Get In Touch <Mail size={14}/>
            </button>
          </div>

          <div style={{ display:"flex", gap:"10px", animation:"fadeInUp .7s ease .75s both" }}>
            {[
              {Icon:Github,   href:personalInfo.github,            label:"GitHub"  },
              {Icon:Linkedin, href:personalInfo.linkedin,          label:"LinkedIn"},
              {Icon:Mail,     href:`mailto:${personalInfo.email}`, label:"Email"   },
            ].map(({Icon,href,label})=>(
              <a key={label} href={href}
                target={label!=="Email"?"_blank":undefined}
                rel="noopener noreferrer"
                className="hp-social"
              >
                <Icon size={16}/>
              </a>
            ))}
          </div>
        </div>

        <div style={{
          display:"flex", flexDirection:"column", alignItems:"flex-start", gap:"5px",
          color:"var(--tx3)", marginTop:"48px",
          animation:"fadeInUp .7s ease .85s both",
        }}>
          <span style={{ fontSize:"10px", letterSpacing:"0.18em", textTransform:"uppercase", fontWeight:600 }}>Scroll</span>
          <ArrowDown size={14} className="bounce-y"/>
        </div>
      </div>
    </section>
  );
}