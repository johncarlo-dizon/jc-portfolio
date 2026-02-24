"use client";
import { useState } from "react";
import { projects } from "@/lib/data";
import { Github, ExternalLink, Star } from "lucide-react";

const categories = ["All", "Mobile", "Full Stack", "Backend", "Desktop"];

export default function Projects() {
  const [active, setActive] = useState("All");
  const filtered = active === "All" ? projects : projects.filter((p) => p.category === active);

  return (
    <section id="projects" className="py-24">
      <div className="max-w-6xl mx-auto px-6">
        <div className="text-center mb-12">
          <p className="text-sm font-semibold tracking-widest uppercase mb-3" style={{ color: "#818cf8" }}>
            Portfolio
          </p>
          <h2 className="text-4xl font-bold text-white mb-4">Projects I&apos;ve Built</h2>
          <p className="max-w-xl mx-auto" style={{ color: "#94a3b8" }}>
            A selection of real-world applications built across different stacks and platforms.
          </p>
        </div>

        {/* Filter tabs */}
        <div className="flex flex-wrap justify-center gap-2 mb-12">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActive(cat)}
              className="px-5 py-2 rounded-full text-sm font-medium transition-all duration-200"
              style={
                active === cat
                  ? { background: "#6366f1", color: "#fff" }
                  : {
                      background: "rgba(255,255,255,0.05)",
                      border: "1px solid rgba(255,255,255,0.1)",
                      color: "#94a3b8",
                    }
              }
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filtered.map((project) => (
            <div
              key={project.title}
              className="relative rounded-2xl p-6 card-hover flex flex-col"
              style={{
                background: "rgba(255,255,255,0.03)",
                border: project.featured
                  ? "1px solid rgba(99,102,241,0.3)"
                  : "1px solid rgba(255,255,255,0.08)",
              }}
            >
              {project.featured && (
                <div className="absolute top-4 right-4">
                  <span
                    className="flex items-center gap-1 text-xs px-2 py-0.5 rounded-full font-medium"
                    style={{
                      color: "#fbbf24",
                      background: "rgba(251,191,36,0.1)",
                      border: "1px solid rgba(251,191,36,0.2)",
                    }}
                  >
                    <Star size={10} fill="currentColor" />
                    Featured
                  </span>
                </div>
              )}

              <div className="mb-3">
                <span className="text-xs font-semibold uppercase tracking-widest" style={{ color: "#818cf8" }}>
                  {project.category}
                </span>
              </div>

              <h3 className="text-white font-bold text-lg mb-3 leading-snug">{project.title}</h3>
              <p className="text-sm leading-relaxed mb-5 flex-1" style={{ color: "#94a3b8" }}>
                {project.description}
              </p>

              <div className="flex flex-wrap gap-2 mb-5">
                {project.tags.map((tag) => (
                  <span
                    key={tag}
                    className="px-2 py-0.5 text-xs rounded"
                    style={{
                      background: "rgba(255,255,255,0.05)",
                      border: "1px solid rgba(255,255,255,0.1)",
                      color: "#6b7280",
                    }}
                  >
                    {tag}
                  </span>
                ))}
              </div>

              <div
                className="flex items-center gap-4 pt-4"
                style={{ borderTop: "1px solid rgba(255,255,255,0.08)" }}
              >
                <a
                  href={project.github}
                  className="flex items-center gap-1.5 text-sm transition-colors"
                  style={{ color: "#94a3b8" }}
                  onMouseEnter={e => (e.currentTarget.style.color = "#fff")}
                  onMouseLeave={e => (e.currentTarget.style.color = "#94a3b8")}
                >
                  <Github size={14} /> Code
                </a>
                {project.live && (
                  <a
                    href={project.live}
                    className="flex items-center gap-1.5 text-sm transition-colors"
                    style={{ color: "#94a3b8" }}
                    onMouseEnter={e => (e.currentTarget.style.color = "#fff")}
                    onMouseLeave={e => (e.currentTarget.style.color = "#94a3b8")}
                  >
                    <ExternalLink size={14} /> Live Demo
                  </a>
                )}
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <a
            href="https://github.com/jcdizon"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-6 py-3 rounded-lg font-medium text-white transition-all duration-200"
            style={{
              background: "rgba(255,255,255,0.05)",
              border: "1px solid rgba(255,255,255,0.1)",
            }}
          >
            <Github size={16} /> View All on GitHub
          </a>
        </div>
      </div>
    </section>
  );
}