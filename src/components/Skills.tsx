"use client";
import { skills } from "@/lib/data";

export default function Skills() {
  return (
    <section id="skills" className="py-24" style={{ background: "rgba(255,255,255,0.015)" }}>
      <div className="max-w-6xl mx-auto px-6">
        <div className="text-center mb-16">
          <p className="text-sm font-semibold tracking-widest uppercase mb-3" style={{ color: "#818cf8" }}>
            Technical Skills
          </p>
          <h2 className="text-4xl font-bold text-white">Technologies I Work With</h2>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {skills.map((group) => (
            <div
              key={group.category}
              className="rounded-2xl p-6 transition-all duration-300"
              style={{
                background: "rgba(255,255,255,0.03)",
                border: "1px solid rgba(255,255,255,0.08)",
              }}
            >
              <h3
                className="text-sm font-bold uppercase tracking-widest mb-6"
                style={{ color: "#818cf8" }}
              >
                {group.category}
              </h3>
              <div className="space-y-5">
                {group.items.map((skill) => (
                  <div key={skill.name}>
                    <div className="flex justify-between items-center mb-2">
                      <span className="text-white text-sm font-medium">{skill.name}</span>
                      <span className="text-xs font-mono" style={{ color: "#6b7280" }}>
                        {skill.level}%
                      </span>
                    </div>
                    <div
                      className="h-1.5 rounded-full overflow-hidden"
                      style={{ background: "rgba(255,255,255,0.05)" }}
                    >
                      <div
                        className="h-full rounded-full"
                        style={{
                          width: `${skill.level}%`,
                          background: "linear-gradient(to right, #6366f1, #8b5cf6)",
                          transition: "width 0.7s ease",
                        }}
                      />
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Extra tools */}
        <div className="mt-12 text-center">
          <p
            className="text-sm mb-6 uppercase tracking-widest font-semibold"
            style={{ color: "#6b7280" }}
          >
            Also familiar with
          </p>
          <div className="flex flex-wrap justify-center gap-3">
            {[
              "Git", "GitHub Actions", "Fastlane", "Agile / Scrum",
              "Docker (basics)", "Linux CLI", "VS Code", "Android Studio",
            ].map((tool) => (
              <span
                key={tool}
                className="px-4 py-2 text-sm rounded-full transition-all"
                style={{
                  background: "rgba(255,255,255,0.05)",
                  border: "1px solid rgba(255,255,255,0.1)",
                  color: "#94a3b8",
                }}
              >
                {tool}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}