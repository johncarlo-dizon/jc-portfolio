import { personalInfo } from "@/lib/data";

export default function Footer() {
  return (
    <footer style={{ borderTop: "1px solid rgba(255,255,255,0.05)" }} className="py-8">
      <div className="max-w-6xl mx-auto px-6 flex flex-col sm:flex-row items-center justify-between gap-4">
        <div className="text-sm" style={{ color: "#4b5563" }}>
          <span style={{ color: "#818cf8", fontWeight: 700 }}>&lt;JC/&gt;</span>{" "}
          {new Date().getFullYear()} · John Carlo Victoria Dizon
        </div>
        <div className="flex items-center gap-6 text-sm" style={{ color: "#4b5563" }}>
          {["#about", "#projects", "#contact"].map((href) => (
            <a
              key={href}
              href={href}
              className="hover:text-white transition-colors capitalize"
            >
              {href.replace("#", "")}
            </a>
          ))}
          <a href={`mailto:${personalInfo.email}`} className="hover:text-white transition-colors">
            {personalInfo.email}
          </a>
        </div>
      </div>
    </footer>
  );
}