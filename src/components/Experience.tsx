import { experience, education } from "@/lib/data";
import { Briefcase, GraduationCap, CheckCircle2 } from "lucide-react";

export default function Experience() {
  return (
    <section id="experience" className="py-24" style={{ background: "rgba(255,255,255,0.015)" }}>
      <div className="max-w-5xl mx-auto px-6">
        <div className="text-center mb-16">
          <p className="text-sm font-semibold tracking-widest uppercase mb-3" style={{ color: "#818cf8" }}>
            Background
          </p>
          <h2 className="text-4xl font-bold text-white">Experience &amp; Education</h2>
        </div>

        <div className="grid md:grid-cols-2 gap-10">
          {/* Experience */}
          <div>
            <div className="flex items-center gap-3 mb-8">
              <div
                className="w-9 h-9 rounded-lg flex items-center justify-center"
                style={{ background: "rgba(99,102,241,0.1)", border: "1px solid rgba(99,102,241,0.2)" }}
              >
                <Briefcase size={16} color="#818cf8" />
              </div>
              <h3 className="text-white font-bold text-lg">Work Experience</h3>
            </div>

            <div className="space-y-8 relative" style={{ paddingLeft: 48 }}>
              {/* Timeline line */}
              <div
                className="absolute top-0 bottom-0"
                style={{ left: 16, width: 1, background: "rgba(255,255,255,0.08)" }}
              />

              {experience.map((exp, i) => (
                <div key={i} className="relative">
                  {/* Dot */}
                  <div
                    className="absolute flex items-center justify-center rounded-full"
                    style={{
                      left: -48,
                      top: 4,
                      width: 32,
                      height: 32,
                      background: "#0a0a0f",
                      border: "1px solid rgba(99,102,241,0.3)",
                    }}
                  >
                    <div className="w-2 h-2 bg-indigo-500 rounded-full" />
                  </div>

                  <div
                    className="rounded-xl p-5 transition-all duration-300"
                    style={{
                      background: "rgba(255,255,255,0.03)",
                      border: "1px solid rgba(255,255,255,0.08)",
                    }}
                  >
                    <div className="flex flex-wrap items-start justify-between gap-2 mb-1">
                      <h4 className="text-white font-semibold">{exp.role}</h4>
                      <span
                        className="text-xs font-mono px-2 py-0.5 rounded-full whitespace-nowrap"
                        style={{
                          color: "#818cf8",
                          background: "rgba(99,102,241,0.1)",
                          border: "1px solid rgba(99,102,241,0.2)",
                        }}
                      >
                        {exp.period}
                      </span>
                    </div>
                    <p className="text-sm mb-4" style={{ color: "#6b7280" }}>
                      {exp.company} · {exp.location}
                    </p>
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
              <div
                className="w-9 h-9 rounded-lg flex items-center justify-center"
                style={{ background: "rgba(99,102,241,0.1)", border: "1px solid rgba(99,102,241,0.2)" }}
              >
                <GraduationCap size={16} color="#818cf8" />
              </div>
              <h3 className="text-white font-bold text-lg">Education</h3>
            </div>

            {education.map((edu, i) => (
              <div
                key={i}
                className="rounded-xl p-6 mb-6 transition-all duration-300"
                style={{
                  background: "rgba(255,255,255,0.03)",
                  border: "1px solid rgba(255,255,255,0.08)",
                }}
              >
                <span
                  className="text-xs font-mono px-2 py-0.5 rounded-full"
                  style={{
                    color: "#818cf8",
                    background: "rgba(99,102,241,0.1)",
                    border: "1px solid rgba(99,102,241,0.2)",
                  }}
                >
                  {edu.period}
                </span>
                <h4 className="text-white font-semibold mt-3 mb-1">{edu.degree}</h4>
                <p className="text-sm" style={{ color: "#6b7280" }}>
                  {edu.school} · {edu.location}
                </p>
              </div>
            ))}

            {/* Strengths */}
            <div
              className="rounded-xl p-6"
              style={{
                background: "linear-gradient(135deg, rgba(99,102,241,0.06), rgba(139,92,246,0.06))",
                border: "1px solid rgba(99,102,241,0.2)",
              }}
            >
              <h4 className="text-white font-semibold mb-4">Key Strengths</h4>
              <div className="flex flex-wrap gap-2">
                {[
                  "Clean Code", "API Design", "CI/CD Automation", "Database Design",
                  "Problem Solving", "Team Collaboration", "Agile / Scrum", "Code Review",
                ].map((str) => (
                  <span
                    key={str}
                    className="px-3 py-1 text-xs font-medium rounded-full"
                    style={{
                      background: "rgba(255,255,255,0.05)",
                      border: "1px solid rgba(255,255,255,0.1)",
                      color: "#94a3b8",
                    }}
                  >
                    {str}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}