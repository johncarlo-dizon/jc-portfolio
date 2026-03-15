"use client";
import { personalInfo } from "@/lib/data";
import { Github, Linkedin, Mail } from "lucide-react";

export default function Footer() {
  return (
    <footer style={{ borderTop:"1px solid var(--border)", padding:"24px 0", background:"var(--bg)" }}>
      <style>{`
        .footer-inner { display: flex; align-items: center; justify-content: space-between; flex-wrap: wrap; gap: 14px; }
        @media (max-width: 600px) {
          .footer-inner { flex-direction: column !important; align-items: center !important; text-align: center !important; gap: 12px !important; }
        }
      `}</style>
      <div style={{ maxWidth:"1200px", margin:"0 auto", padding:"0 1.25rem" }}>
        <div className="footer-inner">
          <button onClick={() => window.scrollTo({top:0,behavior:"smooth"})}
            style={{ background:"none", border:"none", cursor:"pointer", fontFamily:"monospace", fontSize:"14px", fontWeight:700, color:"var(--tx)" }}>
            &lt;JC/&gt;
          </button>
          <p style={{ fontSize:"12px", color:"var(--tx3)" }}>
            © {new Date().getFullYear()} John Carlo Victoria Dizon · Built with Next.js
          </p>
          <div style={{ display:"flex", gap:"10px" }}>
            {[
              {Icon:Github,   href:personalInfo.github,            label:"GitHub"  },
              {Icon:Linkedin, href:personalInfo.linkedin,          label:"LinkedIn"},
              {Icon:Mail,     href:`mailto:${personalInfo.email}`, label:"Email"   },
            ].map(({Icon,href,label})=>(
              <a key={label} href={href} target={label!=="Email"?"_blank":undefined} rel="noopener noreferrer"
                style={{ width:"32px", height:"32px", borderRadius:"8px", display:"flex",
                  alignItems:"center", justifyContent:"center",
                  background:"var(--card)", border:"1px solid var(--border)",
                  color:"var(--tx3)", textDecoration:"none", transition:"all 0.2s" }}
                onMouseEnter={e=>{const el=e.currentTarget as HTMLAnchorElement;el.style.color="var(--tx)";el.style.borderColor="var(--border-h)";el.style.background="var(--ac-dim)";}}
                onMouseLeave={e=>{const el=e.currentTarget as HTMLAnchorElement;el.style.color="var(--tx3)";el.style.borderColor="var(--border)";el.style.background="var(--card)";}}>
                <Icon size={14}/>
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}