import { experience, education, achievements } from "@/lib/data";
import { Briefcase, GraduationCap, CheckCircle2, Trophy, MapPin } from "lucide-react";

export default function Experience() {
  return (
    <section id="experience" className="py-24" style={{ background: "rgba(255,255,255,0.015)" }}>
      <div className="max-w-6xl mx-auto px-6">
        <div className="text-center mb-16">
          <p className="text-sm font-semibold tracking-widest uppercase mb-3" style={{ color: "#818cf8" }}>
            Background
          </p>
          <h2 className="text-4xl font-bold text-white">Experience &amp; Education</h2>
        </div>

        {/* Top row: Work + Education */}
        <div className="grid md:grid-cols-2 gap-10 mb-10">

          {/* Work Experience */}
          <div>
            <div className="flex items-center gap-3 mb-8">
              <div style={{ width: 36, height: 36, background: "rgba(99,102,241,0.1)", border: "1px solid rgba(99,102,241,0.2)", borderRadius: 10, display: "flex", alignItems: "center", justifyContent: "center" }}>
                <Briefcase size={16} color="#818cf8" />
              </div>
              <h3 className="text-white font-bold text-lg">Work Experience</h3>
            </div>

            <div className="space-y-6 relative" style={{ paddingLeft: 40 }}>
              <div className="absolute top-0 bottom-0" style={{ left: 14, width: 1, background: "rgba(255,255,255,0.08)" }} />
              {experience.map((exp, i) => (
                <div key={i} className="relative">
                  <div className="absolute flex items-center justify-center rounded-full" style={{ left: -40, top: 4, width: 28, height: 28, background: "#0a0a0f", border: "1px solid rgba(99,102,241,0.3)" }}>
                    <div className="rounded-full" style={{ width: 8, height: 8, background: "#6366f1" }} />
                  </div>
                  <div className="rounded-xl p-5" style={{ background: "rgba(255,255,255,0.03)", border: "1px solid rgba(255,255,255,0.08)" }}>
                    <div className="flex flex-wrap items-start justify-between gap-2 mb-1">
                      <div>
                        <h4 className="text-white font-semibold">{exp.role}</h4>
                        <div className="flex items-center gap-2 mt-1">
                          {exp.type === "Internship" && (
                            <span className="text-xs px-2 py-0.5 rounded-full font-semibold" style={{ color: "#34d399", background: "rgba(52,211,153,0.1)", border: "1px solid rgba(52,211,153,0.2)" }}>
                              Internship
                            </span>
                          )}
                          {exp.type === "Academic" && (
                            <span className="text-xs px-2 py-0.5 rounded-full font-semibold" style={{ color: "#a78bfa", background: "rgba(167,139,250,0.1)", border: "1px solid rgba(167,139,250,0.2)" }}>
                              Academic
                            </span>
                          )}
                        </div>
                      </div>
                      <span className="text-xs font-mono px-2 py-0.5 rounded-full whitespace-nowrap" style={{ color: "#818cf8", background: "rgba(99,102,241,0.1)", border: "1px solid rgba(99,102,241,0.2)" }}>
                        {exp.period}
                      </span>
                    </div>
                    <p className="text-sm mb-4" style={{ color: "#6b7280" }}>{exp.company} · {exp.location}</p>
                    <ul className="space-y-2">
                      {exp.description.map((item, j) => (
                        <li key={j} className="flex items-start gap-2 text-sm" style={{ color: "#94a3b8" }}>
                          <CheckCircle2 size={14} color="#6366f1" style={{ marginTop: 2, flexShrink: 0 }} />
                          {item}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Education */}
          <div>
            <div className="flex items-center gap-3 mb-8">
              <div style={{ width: 36, height: 36, background: "rgba(99,102,241,0.1)", border: "1px solid rgba(99,102,241,0.2)", borderRadius: 10, display: "flex", alignItems: "center", justifyContent: "center" }}>
                <GraduationCap size={16} color="#818cf8" />
              </div>
              <h3 className="text-white font-bold text-lg">Education</h3>
            </div>

            <div className="space-y-3">
              {education.map((edu, i) => (
                <div key={i} className="rounded-xl p-5 transition-all duration-300" style={{
                  background: edu.current ? "linear-gradient(135deg, rgba(99,102,241,0.08), rgba(139,92,246,0.06))" : "rgba(255,255,255,0.03)",
                  border: edu.current ? "1px solid rgba(99,102,241,0.3)" : "1px solid rgba(255,255,255,0.08)",
                }}>
                  <div className="flex items-start justify-between gap-2 flex-wrap">
                    <div>
                      <div className="flex items-center gap-2 mb-1">
                        <span className="text-xs font-bold uppercase tracking-widest" style={{ color: "#818cf8" }}>{edu.level}</span>
                        {edu.current && (
                          <span className="text-xs px-2 py-0.5 rounded-full font-medium" style={{ color: "#34d399", background: "rgba(52,211,153,0.1)", border: "1px solid rgba(52,211,153,0.2)" }}>
                            Current
                          </span>
                        )}
                      </div>
                      <h4 className="text-white font-semibold text-sm">{edu.school}</h4>
                      <div className="flex items-center gap-1 mt-1" style={{ color: "#6b7280" }}>
                        <MapPin size={11} />
                        <span className="text-xs">{edu.address}</span>
                      </div>
                    </div>
                    <span className="text-xs font-mono px-2 py-0.5 rounded-full whitespace-nowrap" style={{ color: "#818cf8", background: "rgba(99,102,241,0.1)", border: "1px solid rgba(99,102,241,0.2)" }}>
                      {edu.period}
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Achievements */}
        <div className="mb-10">
          <div className="flex items-center gap-3 mb-8">
            <div style={{ width: 36, height: 36, background: "rgba(251,191,36,0.1)", border: "1px solid rgba(251,191,36,0.2)", borderRadius: 10, display: "flex", alignItems: "center", justifyContent: "center" }}>
              <Trophy size={16} color="#fbbf24" />
            </div>
            <h3 className="text-white font-bold text-lg">Achievements</h3>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {achievements.map((ach, i) => (
              <div key={i} className="rounded-xl p-5 flex items-start gap-4 card-hover" style={{ background: "rgba(255,255,255,0.03)", border: "1px solid rgba(255,255,255,0.08)" }}>
                <span className="text-3xl">{ach.icon}</span>
                <div>
                  <h4 className="text-white font-semibold text-sm leading-snug mb-1">{ach.title}</h4>
                  <p className="text-xs" style={{ color: "#6b7280" }}>{ach.school}</p>
                  <p className="text-xs font-mono mt-1" style={{ color: "#818cf8" }}>{ach.period}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Key Strengths */}
        <div className="rounded-xl p-6" style={{ background: "linear-gradient(135deg, rgba(99,102,241,0.06), rgba(139,92,246,0.06))", border: "1px solid rgba(99,102,241,0.2)" }}>
          <h4 className="text-white font-semibold mb-4">Key Strengths</h4>
          <div className="flex flex-wrap gap-2">
            {[
              "Clean Code", "API Design", "CI/CD Automation", "Database Design",
              "Problem Solving", "Team Collaboration", "Agile / Scrum", "Code Review",
              "Mobile Deployment", "RESTful Architecture", "Performance Optimization", "Documentation",
            ].map((str) => (
              <span key={str} className="px-3 py-1 text-xs font-medium rounded-full" style={{ background: "rgba(255,255,255,0.05)", border: "1px solid rgba(255,255,255,0.1)", color: "#94a3b8" }}>
                {str}
              </span>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}