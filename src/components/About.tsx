import { personalInfo } from "@/lib/data";
import { MapPin, Smartphone, Globe, Database } from "lucide-react";

const highlights = [
  { icon: Smartphone, label: "Mobile Development", value: "Flutter + Play Store CI/CD" },
  { icon: Globe, label: "Backend", value: "Laravel, Spring Boot, CI4, PHP" },
  { icon: Globe, label: "Frontend", value: "React, Next.js, Java Swing" },
  { icon: Database, label: "Databases", value: "MySQL & PostgreSQL" },
];

const cardStyle = {
  background: "rgba(255,255,255,0.03)",
  border: "1px solid rgba(255,255,255,0.08)",
  borderRadius: "12px",
  padding: "20px",
  transition: "all 0.3s ease",
};

const iconBoxStyle = {
  width: 40,
  height: 40,
  background: "rgba(99,102,241,0.1)",
  border: "1px solid rgba(99,102,241,0.2)",
  borderRadius: "10px",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  marginBottom: 16,
};

export default function About() {
  return (
    <section id="about" className="py-24 relative">
      <div className="max-w-6xl mx-auto px-6">
        <div className="grid md:grid-cols-2 gap-16 items-center">
          {/* Left */}
          <div>
            <p className="text-sm font-semibold tracking-widest uppercase mb-3" style={{ color: "#818cf8" }}>
              About Me
            </p>
            <h2 className="text-4xl font-bold text-white mb-6 leading-tight">
              Turning ideas into{" "}
              <span style={{ color: "#818cf8" }}>production-ready</span> software
            </h2>
            <div className="space-y-4 leading-relaxed" style={{ color: "#94a3b8" }}>
              <p>
                I&apos;m <strong className="text-white">John Carlo Victoria Dizon</strong>, a Full Stack and Mobile
                Developer from the Philippines with hands-on experience building and shipping real-world applications
                across web and mobile platforms.
              </p>
              <p>
                My expertise spans the full development lifecycle — from designing relational databases in PostgreSQL
                and MySQL, building REST APIs with Laravel, CodeIgniter 4, and Spring Boot, to deploying polished
                Flutter apps directly to the Google Play Store using automated CI/CD pipelines.
              </p>
              <p>
                I take pride in writing clean, maintainable code and building software that solves real problems.
                Whether it&apos;s a backend API, a cross-platform mobile app, or a full-stack web system, I bring
                the same attention to architecture and performance.
              </p>
            </div>

            <div className="flex items-center gap-2 mt-6 text-sm" style={{ color: "#6b7280" }}>
              <MapPin size={14} style={{ color: "#818cf8" }} />
              <span>{personalInfo.location}</span>
              {personalInfo.available && (
                <>
                  <span className="mx-2">·</span>
                  <span style={{ color: "#34d399", fontWeight: 600 }}>Available for opportunities</span>
                </>
              )}
            </div>
          </div>

          {/* Right */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {highlights.map((item) => (
              <div key={item.label} style={cardStyle}>
                <div style={iconBoxStyle}>
                  <item.icon size={18} color="#818cf8" />
                </div>
                <p className="text-xs uppercase tracking-wider font-semibold mb-1" style={{ color: "#6b7280" }}>
                  {item.label}
                </p>
                <p className="text-white font-medium text-sm">{item.value}</p>
              </div>
            ))}

            {/* Stats */}
            <div
              className="sm:col-span-2 rounded-xl p-5"
              style={{
                background: "linear-gradient(135deg, rgba(99,102,241,0.08), rgba(139,92,246,0.08))",
                border: "1px solid rgba(99,102,241,0.2)",
              }}
            >
              <div className="grid grid-cols-3 text-center" style={{ gap: 0 }}>
                {[
                  { value: "5+", label: "Projects Shipped" },
                  { value: "3+", label: "Tech Stacks" },
                  { value: "100%", label: "CI/CD Automated" },
                ].map((stat, i) => (
                  <div
                    key={stat.label}
                    style={{
                      paddingLeft: 16,
                      paddingRight: 16,
                      borderRight: i < 2 ? "1px solid rgba(255,255,255,0.08)" : undefined,
                    }}
                  >
                    <p className="text-2xl font-bold" style={{ color: "#818cf8" }}>{stat.value}</p>
                    <p className="text-xs mt-1" style={{ color: "#6b7280" }}>{stat.label}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}