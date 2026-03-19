"use client";
import { useEffect, useRef, useState } from "react";
import { personalInfo } from "@/lib/data";
import { MapPin, Globe, Smartphone, Code2, Database } from "lucide-react";
import { ChibiAbout } from "./ChibiScenes";

function useReveal(delay=0) {
  const ref = useRef<HTMLDivElement>(null);
  const [on, setOn] = useState(false);
  useEffect(() => {
    const obs = new IntersectionObserver(([e]) => { if (e.isIntersecting) { setOn(true); obs.disconnect(); } }, { threshold:0.1 });
    if (ref.current) obs.observe(ref.current);
    return () => obs.disconnect();
  }, []);
  return { ref, style:{ opacity:on?1:0, transform:on?"none":"translateY(24px)", transition:`opacity 0.7s ease ${delay}s, transform 0.7s ease ${delay}s` } as React.CSSProperties };
}

const highlights = [
  { icon:Globe,      label:"Web Development",  value:"Laravel · React · Next.js · PHP · CodeIgniter" },
  { icon:Smartphone, label:"Mobile",           value:"Flutter · Dart · PHP REST API · Play Store"    },
  { icon:Code2,      label:"Backend",          value:"Spring Boot · Django · RESTful APIs"           },
  { icon:Database,   label:"Database & Tools", value:"MySQL · PostgreSQL · Supabase · Docker"        },
];

export default function About() {
  const header = useReveal();
  const left   = useReveal(0.1);
  const right  = useReveal(0.2);

  return (
    <section id="about" style={{ padding:"5rem 0", background:"var(--bg)" }}>
      <style>{`
        .about-inner { display: grid; grid-template-columns: 1fr 1fr; gap: 48px; align-items: start; }
        .about-chibi-wrap { display: flex; justify-content: center; margin-bottom: 24px; }
        @media (max-width: 768px) {
          .about-inner { grid-template-columns: 1fr !important; gap: 32px !important; }
          .about-chibi-wrap { display: none !important; }
        }
      `}</style>
      <div style={{ maxWidth:"1200px", margin:"0 auto", padding:"0 1.25rem" }}>

   

        <div className="about-inner">
          <div ref={left.ref} style={left.style}>
            <span className="section-label">About Me</span>
            <h2 className="section-heading" style={{ marginBottom:"20px" }}>
              Turning ideas into <span>production-ready</span> software
            </h2>
            {[
              <><strong style={{color:"var(--tx)"}}>John Carlo Victoria Dizon</strong> — Full Stack &amp; Mobile Developer from the Philippines with hands-on experience shipping real apps across web, mobile, and desktop.</>,
              <>My work spans databases, REST APIs with Laravel and Spring Boot, Flutter apps deployed to the Play Store, and desktop systems running in production.</>,
              <>Still actively learning every day. I can handle both frontend and backend, and I&apos;m always honest about what I know vs. what I&apos;m still figuring out.</>,
            ].map((p,i) => <p key={i} style={{ fontSize:"14px", color:"var(--tx2)", lineHeight:1.8, marginBottom:"12px" }}>{p}</p>)}
            <div style={{ display:"flex", alignItems:"center", gap:"8px", flexWrap:"wrap", marginTop:"8px" }}>
              <MapPin size={13} color="var(--tx3)"/>
              <span style={{ fontSize:"13px", color:"var(--tx3)" }}>{personalInfo.location}</span>
              {personalInfo.available && (
                <span style={{ fontSize:"12px", fontWeight:600, color:"var(--green)",
                  padding:"2px 10px", borderRadius:"999px",
                  background:"rgba(22,163,74,0.1)", border:"1px solid rgba(22,163,74,0.25)" }}>● Available</span>
              )}
            </div>
          </div>

          <div ref={right.ref} style={{ ...right.style, display:"flex", flexDirection:"column", gap:"10px" }}>
            {highlights.map((h, i) => (
              <div key={i} className="card" style={{ padding:"14px 16px", display:"flex", alignItems:"flex-start", gap:"12px" }}>
                <div style={{ width:"34px", height:"34px", borderRadius:"9px", flexShrink:0,
                  background:"var(--ac-dim)", border:"1px solid var(--border-h)",
                  display:"flex", alignItems:"center", justifyContent:"center" }}>
                  <h.icon size={15} color="var(--tx2)"/>
                </div>
                <div>
                  <p style={{ fontSize:"10px", fontWeight:600, letterSpacing:"0.06em", textTransform:"uppercase", color:"var(--tx3)", marginBottom:"2px" }}>{h.label}</p>
                  <p style={{ fontSize:"13px", color:"var(--tx)", fontWeight:500, lineHeight:1.5 }}>{h.value}</p>
                </div>
              </div>
            ))}
            <div style={{ borderRadius:"12px", padding:"16px 20px",
              background:"var(--ac-dim)", border:"1px solid var(--border-h)",
              display:"grid", gridTemplateColumns:"1fr 1fr 1fr" }}>
              {[{v:"10+",l:"Projects"},{v:"3+",l:"Years Dev"},{v:"4+",l:"Stacks"}].map((s,i)=>(
                <div key={i} style={{ textAlign:"center", padding:"0 8px", borderRight:i<2?"1px solid var(--border-h)":"none" }}>
                  <p style={{ fontSize:"20px", fontWeight:800, color:"var(--tx)" }}>{s.v}</p>
                  <p style={{ fontSize:"11px", color:"var(--tx3)", marginTop:"2px" }}>{s.l}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}