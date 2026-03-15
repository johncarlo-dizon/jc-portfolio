"use client";
import { useState, useEffect } from "react";
import { personalInfo } from "@/lib/data";
import ThemeToggle from "./ThemeToggle";

const NAV = [
  { label:"About",      href:"about"      },
  { label:"Skills",     href:"skills"     },
  { label:"Projects",   href:"projects"   },
  { label:"Experience", href:"experience" },
  { label:"Contact",    href:"contact"    },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [active, setActive]     = useState("");
  const [logoText, setLogoText] = useState("");

  useEffect(() => {
    const full = "<JC/>";
    let i = 0;
    const t = setInterval(() => { i++; setLogoText(full.slice(0,i)); if (i>=full.length) clearInterval(t); }, 100);
    return () => clearInterval(t);
  }, []);

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 30);
      for (const l of [...NAV].reverse()) {
        const el = document.getElementById(l.href);
        if (el && window.scrollY >= el.offsetTop - 130) { setActive(l.href); break; }
      }
    };
    window.addEventListener("scroll", onScroll, { passive:true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const go = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior:"smooth", block:"start" });
    setActive(id); setMenuOpen(false);
  };

  return (
    <header style={{
      position:"fixed", top:0, left:0, right:0, zIndex:100,
      transition:"background 0.3s, border-color 0.3s",
      background: scrolled ? "var(--nav-bg)" : "transparent",
      backdropFilter: scrolled ? "blur(20px) saturate(160%)" : "none",
      borderBottom: `1px solid ${scrolled ? "var(--border)" : "transparent"}`,
    }}>
      <nav style={{ maxWidth:"1200px", margin:"0 auto", padding:"0 1.5rem", height:"62px",
        display:"flex", alignItems:"center", justifyContent:"space-between", gap:"20px" }}>

        {/* Logo */}
        <button onClick={() => window.scrollTo({top:0,behavior:"smooth"})}
          style={{ background:"none", border:"none", cursor:"pointer", padding:0 }}>
          <span style={{ fontFamily:"monospace", fontSize:"1.05rem", fontWeight:700,
            color:"var(--ac-l)", minWidth:"50px", display:"inline-block" }}>
            {logoText}
            <span style={{ display:"inline-block", width:"2px", height:"1em",
              background:"var(--ac-l)", verticalAlign:"text-bottom", marginLeft:"1px",
              animation:"pulse-dot 0.9s step-end infinite",
              opacity: logoText.length < 5 ? 1 : 0, transition:"opacity 0.5s" }} />
          </span>
        </button>

        {/* Desktop nav */}
        <ul style={{ display:"flex", alignItems:"center", gap:"1.75rem", listStyle:"none", margin:"0 auto" }} className="hidden md:flex">
          {NAV.map(l => (
            <li key={l.label}>
              <button onClick={() => go(l.href)} className={`nav-link${active===l.href?" active":""}`}>
                {l.label}
              </button>
            </li>
          ))}
        </ul>

        {/* Right */}
        <div style={{ display:"flex", alignItems:"center", gap:"10px" }}>
          {personalInfo.available && (
            <span className="hidden md:inline-flex" style={{
              alignItems:"center", gap:"5px", fontSize:"11px", fontWeight:600,
              padding:"4px 10px", borderRadius:"999px",
              color:"var(--green)", background:"rgba(52,211,153,0.1)", border:"1px solid rgba(52,211,153,0.25)",
              whiteSpace:"nowrap",
            }}>
              <span className="pulse-dot" style={{ width:"6px", height:"6px", background:"var(--green)", borderRadius:"50%", display:"inline-block" }} />
              Open to Work
            </span>
          )}

          <ThemeToggle />

          <button onClick={() => go("contact")} className="hidden md:inline-flex" style={{
            alignItems:"center", gap:"6px", padding:"7px 18px",
            background:"var(--ac)", color:"#fff", borderRadius:"8px",
            fontSize:"13px", fontWeight:600, border:"1px solid transparent",
            cursor:"pointer", transition:"all 0.2s ease", whiteSpace:"nowrap",
          }}
          onMouseEnter={e => { const b=e.currentTarget; b.style.background="transparent"; b.style.color="var(--ac-l)"; b.style.borderColor="var(--ac)"; }}
          onMouseLeave={e => { const b=e.currentTarget; b.style.background="var(--ac)"; b.style.color="#fff"; b.style.borderColor="transparent"; }}>
            Hire Me
          </button>

          {/* Hamburger */}
          <button onClick={() => setMenuOpen(o=>!o)} className="flex md:hidden"
            style={{ background:"none", border:"none", cursor:"pointer", color:"var(--tx2)", padding:"4px" }} aria-label="Menu">
            <div style={{ width:"22px", display:"flex", flexDirection:"column", gap:"5px" }}>
              {[0,1,2].map(i => (
                <span key={i} style={{ display:"block", height:"1.5px", background:"currentColor", borderRadius:"2px",
                  transition:"all 0.25s ease",
                  transform: menuOpen ? (i===0?"rotate(45deg) translateY(6.5px)":i===2?"rotate(-45deg) translateY(-6.5px)":"none") : "none",
                  opacity: menuOpen && i===1 ? 0 : 1 }} />
              ))}
            </div>
          </button>
        </div>
      </nav>

      {/* Mobile menu */}
      <div style={{ overflow:"hidden", maxHeight:menuOpen?"360px":"0",
        transition:"max-height 0.35s cubic-bezier(0.4,0,0.2,1)",
        background:"var(--nav-bg)", backdropFilter:"blur(20px)",
        borderTop: menuOpen ? "1px solid var(--border)" : "none" }}>
        <div style={{ padding:"0.75rem 1.5rem 1.25rem" }}>
          {NAV.map((l, i) => (
            <button key={l.label} onClick={() => go(l.href)} style={{
              display:"flex", alignItems:"center", gap:"12px", width:"100%",
              padding:"11px 0", color:active===l.href?"var(--ac-l)":"var(--tx2)",
              fontWeight:500, fontSize:"15px",
              borderBottom:"1px solid var(--border)",
              background:"none", border:"none", borderBottomColor:"var(--border)", borderBottomWidth:"1px", borderBottomStyle:"solid",
              cursor:"pointer", fontFamily:"'Inter', sans-serif",
            }}>
              <span style={{ fontSize:"10px", fontFamily:"monospace", color:"var(--ac)", opacity:0.7, minWidth:"18px" }}>0{i+1}.</span>
              {l.label}
            </button>
          ))}
          <div style={{ marginTop:"14px", display:"flex", alignItems:"center", gap:"10px", flexWrap:"wrap" }}>
            <ThemeToggle />
            <button onClick={() => go("contact")} style={{
              padding:"8px 16px", background:"var(--ac)", color:"#fff",
              border:"none", borderRadius:"8px", fontSize:"13px", fontWeight:600, cursor:"pointer" }}>
              Hire Me
            </button>
          </div>
        </div>
      </div>
    </header>
  );
}