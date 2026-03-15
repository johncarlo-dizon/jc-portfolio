"use client";
import { personalInfo } from "@/lib/data";
import { Github, Linkedin, Mail } from "lucide-react";
export default function Footer() {
  return (
    <footer style={{ borderTop:"1px solid var(--border)", padding:"28px 0", background:"var(--bg)" }}>
      <div className="max-w-6xl mx-auto px-6" style={{ display:"flex", alignItems:"center", justifyContent:"space-between", flexWrap:"wrap", gap:"14px" }}>
        <button onClick={() => window.scrollTo({top:0,behavior:"smooth"})}
          style={{ background:"none", border:"none", cursor:"pointer", fontFamily:"monospace", fontSize:"14px", fontWeight:700, color:"var(--ac-l)" }}>
          &lt;JC/&gt;
        </button>
        <p style={{ fontSize:"12px", color:"var(--tx3)" }}>
          © {new Date().getFullYear()} John Carlo Victoria Dizon · Built with Next.js
        </p>
        <div style={{ display:"flex", gap:"10px" }}>
          {[{Icon:Github,href:personalInfo.github,label:"GitHub"},{Icon:Linkedin,href:personalInfo.linkedin,label:"LinkedIn"},{Icon:Mail,href:`mailto:${personalInfo.email}`,label:"Email"}].map(({Icon,href,label})=>(
            <a key={label} href={href} target={label!=="Email"?"_blank":undefined} rel="noopener noreferrer"
              style={{ width:"32px", height:"32px", borderRadius:"8px", display:"flex", alignItems:"center", justifyContent:"center",
                background:"var(--card)", border:"1px solid var(--border)", color:"var(--tx3)", textDecoration:"none", transition:"all 0.2s" }}
              onMouseEnter={e=>{const el=e.currentTarget as HTMLAnchorElement;el.style.color="var(--ac-l)";el.style.borderColor="var(--ac-border)";el.style.background="var(--ac-dim)";}}
              onMouseLeave={e=>{const el=e.currentTarget as HTMLAnchorElement;el.style.color="var(--tx3)";el.style.borderColor="var(--border)";el.style.background="var(--card)";}}>
              <Icon size={14}/>
            </a>
          ))}
        </div>
      </div>
    </footer>
  );
}