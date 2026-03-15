"use client";
import { useEffect, useRef, useState } from "react";
import { skills, softSkills } from "@/lib/data";
import { ChibiCoder } from "./ChibiScenes";

function useReveal(threshold=0.12) {
  const ref = useRef<HTMLDivElement>(null);
  const [on, setOn] = useState(false);
  useEffect(() => {
    const obs = new IntersectionObserver(([e]) => { if (e.isIntersecting) { setOn(true); obs.disconnect(); } }, { threshold });
    if (ref.current) obs.observe(ref.current);
    return () => obs.disconnect();
  }, [threshold]);
  return { ref, on };
}

export default function Skills() {
  const header = useReveal();
  const grid   = useReveal(0.08);
  const soft   = useReveal();
  const chibi  = useReveal(0.05);

  return (
    <section id="skills" style={{ padding:"6rem 0", background:"var(--bg2)", position:"relative", overflow:"hidden" }}>
      <div style={{ position:"absolute", top:"0", left:"50%", transform:"translateX(-50%)",
        width:"700px", height:"350px",
        background:"radial-gradient(ellipse, rgba(124,109,250,0.04) 0%, transparent 70%)",
        pointerEvents:"none" }} />

      <div className="max-w-6xl mx-auto px-6 relative z-10">
        {/* Header — no chibi here */}
        <div ref={header.ref} style={{ marginBottom:"40px",
          opacity:header.on?1:0, transform:header.on?"none":"translateY(24px)",
          transition:"opacity 0.6s ease, transform 0.6s ease" }}>
          <span className="section-label">Technical Skills</span>
          <h2 className="section-heading">Technologies<br/><span>I Work With</span></h2>
        </div>

        {/* Skill cards */}
        <div ref={grid.ref} style={{ display:"grid", gridTemplateColumns:"repeat(auto-fit, minmax(250px, 1fr))", gap:"16px", marginBottom:"40px" }}>
          {skills.map((group, gi) => (
            <div key={group.category} style={{
              borderRadius:"14px", padding:"22px",
              background:"var(--card)", border:"1px solid var(--border)",
              opacity:grid.on?1:0, transform:grid.on?"none":"translateY(24px) scale(0.97)",
              transition:`opacity 0.55s ease ${gi*0.1}s, transform 0.55s ease ${gi*0.1}s`,
            }}>
              <div style={{ display:"flex", alignItems:"center", gap:"8px", marginBottom:"16px" }}>
                <div style={{ width:"3px", height:"14px", background:"linear-gradient(180deg, var(--tx), var(--tx3))", borderRadius:"2px" }} />
                <h3 style={{ fontSize:"10px", fontWeight:700, letterSpacing:"0.16em", textTransform:"uppercase", color:"var(--tx3)", margin:0 }}>
                  {group.category}
                </h3>
              </div>
              <div style={{ display:"flex", flexWrap:"wrap", gap:"7px" }}>
                {group.items.map((skill, si) => (
                  <span key={skill} style={{
                    padding:"5px 12px", fontSize:"12px", fontWeight:500, borderRadius:"8px",
                    background:"var(--bg3)", border:"1px solid var(--border-h)", color:"var(--tx2)",
                    opacity:grid.on?1:0, transform:grid.on?"none":"translateY(8px)",
                    transition:`opacity 0.4s ease ${(gi*0.1)+(si*0.04)}s, transform 0.4s ease ${(gi*0.1)+(si*0.04)}s`,
                    cursor:"default",
                  }}
                  onMouseEnter={e => { const el=e.currentTarget as HTMLElement; el.style.background="var(--ac-dim)"; el.style.borderColor="var(--ac-b)"; el.style.color="var(--tx)"; el.style.transform="translateY(-2px)"; }}
                  onMouseLeave={e => { const el=e.currentTarget as HTMLElement; el.style.background="var(--bg3)"; el.style.borderColor="var(--border-h)"; el.style.color="var(--tx2)"; el.style.transform="none"; }}>
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Soft skills */}
        <div ref={soft.ref} style={{ opacity:soft.on?1:0, transform:soft.on?"none":"translateY(20px)",
          transition:"opacity 0.6s ease, transform 0.6s ease", marginBottom:"0" }}>
          <p style={{ fontSize:"10px", fontWeight:700, letterSpacing:"0.16em", textTransform:"uppercase",
            color:"var(--tx3)", marginBottom:"14px", textAlign:"center" }}>Soft Skills</p>
          <div style={{ display:"flex", flexWrap:"wrap", justifyContent:"center", gap:"8px" }}>
            {softSkills.map((s, i) => (
              <span key={s} style={{
                padding:"7px 16px", fontSize:"13px", fontWeight:500, borderRadius:"999px",
                background:"var(--card)", border:"1px solid var(--border-h)", color:"var(--tx2)",
                opacity:soft.on?1:0, transform:soft.on?"none":"scale(0.9)",
                transition:`opacity 0.4s ease ${i*0.06}s, transform 0.4s ease ${i*0.06}s`,
                cursor:"default",
              }}
              onMouseEnter={e => { const el=e.currentTarget as HTMLElement; el.style.borderColor="var(--border-h)"; el.style.color="var(--tx)"; el.style.background="var(--ac-dim)"; el.style.transform="translateY(-2px)"; }}
              onMouseLeave={e => { const el=e.currentTarget as HTMLElement; el.style.borderColor="var(--border-h)"; el.style.color="var(--tx2)"; el.style.background="var(--card)"; el.style.transform="none"; }}>
                {s}
              </span>
            ))}
          </div>
        </div>

        {/* CHIBI — BOTTOM CENTER, sitting on the floor below all cards */}
        <div ref={chibi.ref} style={{
          display:"flex", justifyContent:"center", alignItems:"flex-end",
          marginTop:"0", paddingTop:"0",
          opacity:chibi.on?1:0, transform:chibi.on?"none":"translateY(30px)",
          transition:"opacity 0.7s ease 0.3s, transform 0.7s ease 0.3s",
          position:"relative",
        }}>
          {/* "floor" line the chibi sits on */}
          <div style={{ position:"absolute", bottom:"8px", left:"50%", transform:"translateX(-50%)",
            width:"320px", height:"1px", background:"var(--border-h)" }} />
          <ChibiCoder />
        </div>
      </div>
    </section>
  );
}