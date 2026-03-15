"use client";
import { useEffect, useRef, useState } from "react";
import { experience, education, achievements } from "@/lib/data";
import { Briefcase, GraduationCap, Trophy, CheckCircle2, MapPin } from "lucide-react";
import { ChibiExperience } from "./ChibiScenes";

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

export default function Experience() {
  const header = useReveal();
  const work   = useReveal(0.08);
  const edu    = useReveal(0.08);
  const ach    = useReveal(0.06);

  return (
    <section id="experience" style={{ padding:"6rem 0", background:"var(--bg2)" }}>
      <div className="max-w-6xl mx-auto px-6">

        {/* Header row: title left, chibi right — clearly separated */}
        <div style={{ display:"flex", alignItems:"flex-end", justifyContent:"space-between",
          gap:"24px", marginBottom:"48px", flexWrap:"wrap" }}>
          <div ref={header.ref} style={{
            opacity:header.on?1:0, transform:header.on?"none":"translateY(24px)",
            transition:"opacity 0.6s ease, transform 0.6s ease" }}>
            <span className="section-label">Background</span>
            <h2 className="section-heading">Experience <span>&amp;</span> Education</h2>
          </div>
          <div style={{
            opacity:header.on?1:0, transition:"opacity 0.7s ease 0.3s",
            alignSelf:"flex-end", flexShrink:0,
          }} className="hidden md:block">
            <ChibiExperience />
          </div>
        </div>

        {/* Work + Education — standard two columns, no chibi in between */}
        <div style={{ display:"grid", gridTemplateColumns:"1fr 1fr", gap:"40px", marginBottom:"40px" }} className="block md:grid">

          {/* Work column */}
          <div ref={work.ref}>
            <div style={{ display:"flex", alignItems:"center", gap:"10px", marginBottom:"24px",
              opacity:work.on?1:0, transform:work.on?"none":"translateX(-18px)",
              transition:"opacity 0.55s, transform 0.55s" }}>
              <div style={{ width:"32px", height:"32px", borderRadius:"9px", flexShrink:0,
                background:"var(--ac-dim)", border:"1px solid var(--border-h)",
                display:"flex", alignItems:"center", justifyContent:"center" }}>
                <Briefcase size={14} color="var(--tx2)" />
              </div>
              <h3 style={{ fontSize:"15px", fontWeight:700, color:"var(--tx)", margin:0 }}>Work Experience</h3>
            </div>
            <div style={{ position:"relative", paddingLeft:"32px" }}>
              <div style={{
                position:"absolute", left:"9px", top:"6px", bottom:"6px", width:"1.5px",
                background:"var(--border-h)", transformOrigin:"top",
                transform:work.on?"scaleY(1)":"scaleY(0)",
                transition:"transform 0.9s cubic-bezier(0.4,0,0.2,1) 0.1s",
              }} />
              <div style={{ display:"flex", flexDirection:"column", gap:"18px" }}>
                {experience.map((exp, i) => (
                  <div key={i} style={{ position:"relative",
                    opacity:work.on?1:0, transform:work.on?"none":"translateY(16px)",
                    transition:`opacity 0.5s ease ${0.15+i*0.15}s, transform 0.5s ease ${0.15+i*0.15}s` }}>
                    <div style={{ position:"absolute", left:"-26px", top:"12px",
                      width:"10px", height:"10px", borderRadius:"50%",
                      background:i===0?"var(--tx)":"var(--tx3)", border:"2px solid var(--bg2)",
                      boxShadow:i===0?"0 0 0 3px var(--border-h)":"none" }} />
                    <div className="card" style={{ padding:"16px 18px" }}>
                      <div style={{ display:"flex", justifyContent:"space-between", alignItems:"flex-start", flexWrap:"wrap", gap:"6px", marginBottom:"6px" }}>
                        <div>
                          <h4 style={{ fontSize:"14px", fontWeight:700, color:"var(--tx)", margin:0 }}>{exp.role}</h4>
                          <p style={{ fontSize:"12px", color:"var(--tx2)", fontWeight:500, marginTop:"2px" }}>{exp.company}</p>
                        </div>
                        <div style={{ display:"flex", flexDirection:"column", alignItems:"flex-end", gap:"3px" }}>
                          <span style={{ fontSize:"10px", fontWeight:600, padding:"2px 8px", borderRadius:"999px",
                            color:exp.type==="Internship"?"var(--green)":"var(--tx2)",
                            background:exp.type==="Internship"?"rgba(22,163,74,0.1)":"var(--ac-dim)",
                            border:exp.type==="Internship"?"1px solid rgba(22,163,74,0.25)":"1px solid var(--border-h)" }}>
                            {exp.type}
                          </span>
                          <span style={{ fontSize:"10px", fontFamily:"monospace", color:"var(--tx3)" }}>{exp.period}</span>
                        </div>
                      </div>
                      <p style={{ fontSize:"11px", color:"var(--tx3)", marginBottom:"10px", display:"flex", alignItems:"center", gap:"3px" }}>
                        <MapPin size={10}/> {exp.location}
                      </p>
                      <ul style={{ display:"flex", flexDirection:"column", gap:"5px" }}>
                        {exp.description.map((item, j) => (
                          <li key={j} style={{ display:"flex", alignItems:"flex-start", gap:"6px",
                            fontSize:"12px", color:"var(--tx2)", lineHeight:1.6, listStyle:"none" }}>
                            <CheckCircle2 size={12} color="var(--tx3)" style={{ marginTop:"2px", flexShrink:0 }}/>
                            {item}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Education column */}
          <div ref={edu.ref}>
            <div style={{ display:"flex", alignItems:"center", gap:"10px", marginBottom:"24px",
              opacity:edu.on?1:0, transform:edu.on?"none":"translateX(18px)",
              transition:"opacity 0.55s, transform 0.55s" }}>
              <div style={{ width:"32px", height:"32px", borderRadius:"9px", flexShrink:0,
                background:"var(--ac-dim)", border:"1px solid var(--border-h)",
                display:"flex", alignItems:"center", justifyContent:"center" }}>
                <GraduationCap size={14} color="var(--tx2)" />
              </div>
              <h3 style={{ fontSize:"15px", fontWeight:700, color:"var(--tx)", margin:0 }}>Education</h3>
            </div>
            <div style={{ display:"flex", flexDirection:"column", gap:"10px" }}>
              {education.map((e_, i) => (
                <div key={i} className="card" style={{ padding:"14px 16px",
                  opacity:edu.on?1:0, transform:edu.on?"none":"translateX(18px)",
                  transition:`opacity 0.5s ease ${i*0.1}s, transform 0.5s ease ${i*0.1}s`,
                  borderColor:e_.current?"var(--border-h)":"var(--border)",
                  background:e_.current?"var(--ac-dim)":"var(--card)" }}>
                  <div style={{ display:"flex", justifyContent:"space-between", alignItems:"flex-start", flexWrap:"wrap", gap:"6px" }}>
                    <div>
                      <div style={{ display:"flex", alignItems:"center", gap:"6px", marginBottom:"3px" }}>
                        <span style={{ fontSize:"10px", fontWeight:700, letterSpacing:"0.08em", textTransform:"uppercase", color:"var(--tx3)" }}>{e_.level}</span>
                        {e_.current && <span style={{ fontSize:"10px", fontWeight:600, padding:"1px 6px", borderRadius:"999px", color:"var(--green)", background:"rgba(22,163,74,0.1)", border:"1px solid rgba(22,163,74,0.25)" }}>Current</span>}
                      </div>
                      <h4 style={{ fontSize:"13px", fontWeight:600, color:"var(--tx)", margin:0 }}>{e_.school}</h4>
                      <div style={{ display:"flex", alignItems:"center", gap:"3px", marginTop:"2px" }}>
                        <MapPin size={9} color="var(--tx3)"/><span style={{ fontSize:"11px", color:"var(--tx3)" }}>{e_.address}</span>
                      </div>
                    </div>
                    <span style={{ fontSize:"10px", fontFamily:"monospace", padding:"2px 7px", borderRadius:"999px",
                      color:"var(--tx3)", background:"var(--bg3)", border:"1px solid var(--border)" }}>{e_.period}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Achievements */}
        <div ref={ach.ref}>
          <div style={{ display:"flex", alignItems:"center", gap:"10px", marginBottom:"20px",
            opacity:ach.on?1:0, transform:ach.on?"none":"translateY(16px)", transition:"opacity 0.55s, transform 0.55s" }}>
            <div style={{ width:"32px", height:"32px", borderRadius:"9px",
              background:"rgba(251,191,36,0.1)", border:"1px solid rgba(251,191,36,0.25)",
              display:"flex", alignItems:"center", justifyContent:"center" }}>
              <Trophy size={14} color="var(--amber)"/>
            </div>
            <h3 style={{ fontSize:"15px", fontWeight:700, color:"var(--tx)", margin:0 }}>Achievements</h3>
          </div>
          <div style={{ display:"grid", gridTemplateColumns:"repeat(auto-fill,minmax(250px,1fr))", gap:"10px" }}>
            {achievements.map((a, i) => (
              <div key={i} className="card" style={{ padding:"14px 16px", display:"flex", alignItems:"flex-start", gap:"10px",
                opacity:ach.on?1:0, transform:ach.on?"none":"translateY(14px)",
                transition:`opacity 0.45s ease ${i*0.05}s, transform 0.45s ease ${i*0.05}s` }}>
                <span style={{ fontSize:"20px", lineHeight:1, flexShrink:0 }}>{a.icon}</span>
                <div>
                  <h4 style={{ fontSize:"12px", fontWeight:600, color:"var(--tx)", lineHeight:1.35, marginBottom:"2px" }}>{a.title}</h4>
                  <p style={{ fontSize:"11px", color:"var(--tx3)" }}>{a.school}</p>
                  <p style={{ fontSize:"10px", fontFamily:"monospace", color:"var(--tx3)", marginTop:"2px" }}>{a.period}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}