import { personalInfo } from "@/lib/data";
import { Mail, Github, Linkedin, MapPin, ArrowUpRight } from "lucide-react";

const contacts = [
  { icon: Mail, label: "Email", value: personalInfo.email, href: `mailto:${personalInfo.email}` },
  { icon: Github, label: "GitHub", value: "github.com/jcdizon", href: personalInfo.github },
  { icon: Linkedin, label: "LinkedIn", value: "linkedin.com/in/jcdizon", href: personalInfo.linkedin },
];

export default function Contact() {
  return (
    <section id="contact" className="py-24">
      <div className="max-w-4xl mx-auto px-6 text-center">
        <p className="text-sm font-semibold tracking-widest uppercase mb-3" style={{ color: "#818cf8" }}>
          Contact
        </p>
        <h2 className="text-4xl font-bold text-white mb-4">Let&apos;s Work Together</h2>
        <p
          className="text-lg max-w-xl mx-auto mb-12 leading-relaxed"
          style={{ color: "#94a3b8" }}
        >
          I&apos;m currently open to full-time roles and freelance projects. If you have an
          opportunity or just want to connect, feel free to reach out.
        </p>

        <div className="grid sm:grid-cols-3 gap-4 mb-12">
          {contacts.map((c) => (
            <a
              key={c.label}
              href={c.href}
              target={c.label !== "Email" ? "_blank" : undefined}
              rel="noopener noreferrer"
              className="group rounded-2xl p-6 card-hover block"
              style={{
                background: "rgba(255,255,255,0.03)",
                border: "1px solid rgba(255,255,255,0.08)",
                textDecoration: "none",
              }}
            >
              <div
                className="w-12 h-12 rounded-xl flex items-center justify-center mx-auto mb-4 transition-colors"
                style={{
                  background: "rgba(99,102,241,0.1)",
                  border: "1px solid rgba(99,102,241,0.2)",
                }}
              >
                <c.icon size={20} color="#818cf8" />
              </div>
              <p className="text-xs uppercase tracking-wider font-semibold mb-1" style={{ color: "#6b7280" }}>
                {c.label}
              </p>
              <p className="text-white text-sm font-medium">{c.value}</p>
              <div className="flex justify-center mt-3">
                <ArrowUpRight size={14} color="#818cf8" style={{ opacity: 0.6 }} />
              </div>
            </a>
          ))}
        </div>

        <div className="flex items-center justify-center gap-2 text-sm" style={{ color: "#6b7280" }}>
          <MapPin size={14} />
          <span>Based in {personalInfo.location} · Remote-friendly</span>
        </div>
      </div>
    </section>
  );
}