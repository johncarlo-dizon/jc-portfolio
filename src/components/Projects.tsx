"use client";
import { useState, useEffect, useRef } from "react";
import { projects } from "@/lib/data";
import { Github, ExternalLink, Star } from "lucide-react";
import { ChibiProjects } from "./ChibiScenes";

function useReveal(threshold=0.1) {
  const ref = useRef<HTMLDivElement>(null);
  const [on, setOn] = useState(false);
  useEffect(() => {
    const obs = new IntersectionObserver(([e]) => { if (e.isIntersecting) { setOn(true); obs.disconnect(); } }, { threshold });
    if (ref.current) obs.observe(ref.current);
    return () => obs.disconnect();
  }, [threshold]);
  return { ref, on };
}

const CATS = ["All","Desktop","Web","Mobile"];
const CAT_COLOR: Record<string,{bg:string,tx:string}> = {
  Desktop: { bg:"var(--ac-dim)",        tx:"var(--ac-l)"  },
  Web:     { bg:"rgba(16,185,129,0.1)", tx:"#10b981"      },
  Mobile:  { bg:"rgba(245,158,11,0.1)", tx:"#f59e0b"      },
};

export default function Projects() {
  const [active, setActive] = useState("All");
  const header = useReveal();
  const grid   = useReveal(0.04);
  const filtered = active==="All" ? projects : projects.filter(p=>p.category===active);

  return (
    <section id="projects" style={{ padding:"6rem 0", background:"var(--bg)", position:"relative" }}>
      <div className="max-w-6xl mx-auto px-6">

        {/* Header row: title LEFT, chibi RIGHT — same level, no overlap */}
        <div style={{ display:"flex", alignItems:"flex-end", justifyContent:"space-between",
          gap:"24px", marginBottom:"32px", flexWrap:"wrap" }}>
          <div ref={header.ref} style={{
            opacity:header.on?1:0, transform:header.on?"none":"translateY(24px)",
            transition:"opacity 0.6s ease, transform 0.6s ease" }}>
            <span className="section-label">Portfolio</span>
            <h2 className="section-heading" style={{ marginBottom:"8px" }}>Projects I&apos;ve <span>Built</span></h2>
            <p style={{ fontSize:"14px", color:"var(--tx2)", maxWidth:"380px" }}>
              Real applications shipped across web, mobile, and desktop.
            </p>
          </div>
          {/* Chibi right-aligned, bottom-aligned next to title */}
          <div style={{
            opacity:header.on?1:0, transition:"opacity 0.6s ease 0.2s",
            alignSelf:"flex-end",
          }} className="hidden md:block">
            <ChibiProjects />
          </div>
        </div>

        {/* Filter */}
        <div style={{ display:"flex", gap:"8px", marginBottom:"32px",
          opacity:header.on?1:0, transition:"opacity 0.6s ease 0.15s", flexWrap:"wrap" }}>
          {CATS.map(cat => (
            <button key={cat} onClick={() => setActive(cat)} style={{
              padding:"7px 18px", borderRadius:"999px", fontSize:"13px", fontWeight:500,
              cursor:"pointer", transition:"all 0.2s",
              background:active===cat?"var(--tx)":"var(--card)",
              color:active===cat?"var(--bg)":"var(--tx2)",
              border:active===cat?"1px solid transparent":"1px solid var(--border-h)" }}>{cat}</button>
          ))}
        </div>

        {/* Cards */}
        <div ref={grid.ref} style={{ display:"grid", gridTemplateColumns:"repeat(auto-fill,minmax(290px,1fr))", gap:"16px" }}>
          {filtered.map((p, i) => (
            <div key={p.title} style={{
              position:"relative", borderRadius:"14px", padding:"22px",
              background:"var(--card)",
              border:p.featured?"1px solid var(--border-h)":"1px solid var(--border)",
              display:"flex", flexDirection:"column",
              opacity:grid.on?1:0, transform:grid.on?"none":"translateY(28px)",
              transition:`opacity 0.55s ease ${i*0.07}s, transform 0.55s ease ${i*0.07}s`,
            }}
            onMouseEnter={e => { const el=e.currentTarget as HTMLElement; el.style.transform="translateY(-4px)"; el.style.boxShadow="0 12px 36px var(--ac-glow)"; }}
            onMouseLeave={e => { const el=e.currentTarget as HTMLElement; el.style.transform="none"; el.style.boxShadow="none"; }}>
              {p.featured && (
                <span style={{ position:"absolute", top:"14px", right:"14px",
                  display:"inline-flex", alignItems:"center", gap:"3px",
                  fontSize:"10px", fontWeight:600, padding:"2px 7px", borderRadius:"999px",
                  color:"var(--amber)", background:"rgba(251,191,36,0.1)", border:"1px solid rgba(251,191,36,0.25)" }}>
                  <Star size={9} fill="currentColor"/> Featured
                </span>
              )}
              <div style={{ marginBottom:"8px" }}>
                <span style={{ fontSize:"10px", fontWeight:700, letterSpacing:"0.1em", textTransform:"uppercase",
                  padding:"3px 8px", borderRadius:"5px",
                  background:CAT_COLOR[p.category]?.bg||"var(--ac-dim)",
                  color:CAT_COLOR[p.category]?.tx||"var(--ac-l)" }}>{p.category}</span>
              </div>
              <h3 style={{ fontSize:"15px", fontWeight:700, color:"var(--tx)", marginBottom:"8px", lineHeight:1.35 }}>{p.title}</h3>
              <p style={{ fontSize:"13px", color:"var(--tx2)", lineHeight:1.7, flex:1, marginBottom:"14px" }}>{p.description}</p>
              <div style={{ display:"flex", flexWrap:"wrap", gap:"5px", marginBottom:"14px" }}>
                {p.tags.map(tag=>(
                  <span key={tag} style={{ padding:"3px 8px", fontSize:"11px", borderRadius:"5px",
                    background:"var(--bg2)", border:"1px solid var(--border)", color:"var(--tx3)" }}>{tag}</span>
                ))}
              </div>
              <div style={{ display:"flex", gap:"14px", paddingTop:"12px", borderTop:"1px solid var(--border)" }}>
                <a href={p.github} style={{ display:"flex", alignItems:"center", gap:"5px",
                  fontSize:"12px", color:"var(--tx2)", textDecoration:"none", transition:"color 0.2s" }}
                  onMouseEnter={e=>(e.currentTarget as HTMLAnchorElement).style.color="var(--tx)"}
                  onMouseLeave={e=>(e.currentTarget as HTMLAnchorElement).style.color="var(--tx2)"}>
                  <Github size={13}/> Code
                </a>
                {p.live && (
                  <a href={p.live} target="_blank" rel="noopener noreferrer"
                    style={{ display:"flex", alignItems:"center", gap:"5px",
                      fontSize:"12px", color:"var(--tx2)", textDecoration:"none", transition:"color 0.2s" }}
                    onMouseEnter={e=>(e.currentTarget as HTMLAnchorElement).style.color="var(--tx)"}
                    onMouseLeave={e=>(e.currentTarget as HTMLAnchorElement).style.color="var(--tx2)"}>
                    <ExternalLink size={13}/> Live
                  </a>
                )}
              </div>
            </div>
          ))}
        </div>

        <div style={{ textAlign:"center", marginTop:"32px",
          opacity:grid.on?1:0, transition:"opacity 0.6s ease 0.5s" }}>
          <a href="https://github.com/johncarlo-dizon" target="_blank" rel="noopener noreferrer"
            style={{ display:"inline-flex", alignItems:"center", gap:"8px",
              padding:"10px 22px", borderRadius:"8px", background:"var(--card)",
              color:"var(--tx2)", border:"1px solid var(--border-h)", fontSize:"13px",
              fontWeight:500, textDecoration:"none", transition:"all 0.2s" }}
            onMouseEnter={e=>{const el=e.currentTarget as HTMLAnchorElement;el.style.background="var(--tx)";el.style.color="var(--bg)";el.style.borderColor="transparent";}}
            onMouseLeave={e=>{const el=e.currentTarget as HTMLAnchorElement;el.style.background="var(--card)";el.style.color="var(--tx2)";el.style.borderColor="var(--border-h)";}}>
            <Github size={15}/> View All on GitHub
          </a>
        </div>
      </div>
    </section>
  );
}