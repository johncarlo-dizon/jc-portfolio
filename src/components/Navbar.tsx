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
    <>
      <style>{`
        .nav-desktop { display: flex; }
        .nav-hamburger { display: none; }
        .nav-hire-desktop { display: inline-flex; }
        .nav-badge { display: inline-flex; }
        @media (max-width: 768px) {
          .nav-desktop { display: none !important; }
          .nav-hamburger { display: flex !important; }
          .nav-hire-desktop { display: none !important; }
          .nav-badge { display: none !important; }
        }
      `}</style>

      <header style={{
        position:"fixed", top:0, left:0, right:0, zIndex:100,
        transition:"background 0.3s, border-color 0.3s",
        background: scrolled ? "var(--nav-bg)" : "transparent",
        backdropFilter: scrolled ? "blur(20px) saturate(160%)" : "none",
        borderBottom: `1px solid ${scrolled ? "var(--border)" : "transparent"}`,
      }}>
        <nav style={{
          maxWidth:"1200px", margin:"0 auto", padding:"0 1.25rem", height:"60px",
          display:"flex", alignItems:"center", justifyContent:"space-between",
        }}>

          {/* Logo */}
          <button onClick={() => window.scrollTo({top:0,behavior:"smooth"})}
            style={{ background:"none", border:"none", cursor:"pointer", padding:0, flexShrink:0 }}>
            <span style={{ fontFamily:"monospace", fontSize:"1.05rem", fontWeight:700,
              color:"var(--tx)", minWidth:"50px", display:"inline-block" }}>
              {logoText}
              <span style={{ display:"inline-block", width:"2px", height:"1em",
                background:"var(--tx)", verticalAlign:"text-bottom", marginLeft:"1px",
                animation:"pulse-dot 0.9s step-end infinite",
                opacity: logoText.length < 5 ? 1 : 0, transition:"opacity 0.5s" }} />
            </span>
          </button>

          {/* Desktop nav links */}
          <ul className="nav-desktop" style={{ alignItems:"center", gap:"1.75rem", listStyle:"none", margin:"0 auto" }}>
            {NAV.map(l => (
              <li key={l.label}>
                <button onClick={() => go(l.href)} className={`nav-link${active===l.href?" active":""}`}>
                  {l.label}
                </button>
              </li>
            ))}
          </ul>

          {/* Right side */}
          <div style={{ display:"flex", alignItems:"center", gap:"8px", flexShrink:0 }}>
            {personalInfo.available && (
              <span className="nav-badge" style={{
                alignItems:"center", gap:"5px", fontSize:"11px", fontWeight:600,
                padding:"4px 10px", borderRadius:"999px",
                color:"var(--green)", background:"rgba(52,211,153,0.1)",
                border:"1px solid rgba(52,211,153,0.25)", whiteSpace:"nowrap",
              }}>
                <span className="pulse-dot" style={{ width:"6px", height:"6px", background:"var(--green)", borderRadius:"50%", display:"inline-block" }} />
                Open to Work
              </span>
            )}

            <ThemeToggle />

            <button onClick={() => go("contact")} className="nav-hire-desktop" style={{
              alignItems:"center", gap:"6px", padding:"7px 16px",
              background:"var(--tx)", color:"var(--bg)", borderRadius:"8px",
              fontSize:"13px", fontWeight:600, border:"1px solid transparent",
              cursor:"pointer", transition:"all 0.2s", whiteSpace:"nowrap",
            }}
            onMouseEnter={e => { const b=e.currentTarget; b.style.opacity="0.8"; }}
            onMouseLeave={e => { const b=e.currentTarget; b.style.opacity="1"; }}>
              Hire Me
            </button>

            {/* Hamburger */}
            <button
              onClick={() => setMenuOpen(o=>!o)}
              className="nav-hamburger"
              style={{ background:"none", border:"none", cursor:"pointer",
                color:"var(--tx)", padding:"6px", borderRadius:"6px" }}
              aria-label="Menu"
            >
              <div style={{ width:"20px", display:"flex", flexDirection:"column", gap:"5px" }}>
                {[0,1,2].map(i => (
                  <span key={i} style={{
                    display:"block", height:"1.5px", background:"currentColor", borderRadius:"2px",
                    transition:"all 0.25s ease",
                    transform: menuOpen
                      ? (i===0?"rotate(45deg) translateY(6.5px)":i===2?"rotate(-45deg) translateY(-6.5px)":"none")
                      : "none",
                    opacity: menuOpen && i===1 ? 0 : 1,
                  }} />
                ))}
              </div>
            </button>
          </div>
        </nav>

        {/* Mobile dropdown menu */}
        <div style={{
          overflow:"hidden",
          maxHeight: menuOpen ? "400px" : "0",
          transition:"max-height 0.35s cubic-bezier(0.4,0,0.2,1)",
          background:"var(--nav-bg)",
          backdropFilter:"blur(20px)",
          borderTop: menuOpen ? "1px solid var(--border)" : "none",
        }}>
          <div style={{ padding:"8px 1.25rem 20px" }}>
            {NAV.map((l, i) => (
              <button key={l.label} onClick={() => go(l.href)} style={{
                display:"flex", alignItems:"center", gap:"12px", width:"100%",
                padding:"13px 0",
                color: active===l.href ? "var(--tx)" : "var(--tx2)",
                fontWeight: active===l.href ? 600 : 500,
                fontSize:"15px",
                borderBottom:"1px solid var(--border)",
                background:"none", border:"none",
                borderBottomColor:"var(--border)", borderBottomWidth:"1px", borderBottomStyle:"solid",
                cursor:"pointer", fontFamily:"'Inter', sans-serif",
                textAlign:"left",
              }}>
                <span style={{ fontSize:"10px", fontFamily:"monospace", color:"var(--tx3)", minWidth:"20px" }}>0{i+1}.</span>
                {l.label}
              </button>
            ))}

            {/* Mobile bottom actions */}
            <div style={{ display:"flex", alignItems:"center", justifyContent:"space-between", marginTop:"16px", flexWrap:"wrap", gap:"10px" }}>
              <ThemeToggle />
              <div style={{ display:"flex", alignItems:"center", gap:"8px" }}>
                {personalInfo.available && (
                  <span style={{ display:"inline-flex", alignItems:"center", gap:"5px",
                    fontSize:"11px", fontWeight:600, padding:"4px 10px", borderRadius:"999px",
                    color:"var(--green)", background:"rgba(52,211,153,0.1)", border:"1px solid rgba(52,211,153,0.25)" }}>
                    <span className="pulse-dot" style={{ width:"6px", height:"6px", background:"var(--green)", borderRadius:"50%", display:"inline-block" }} />
                    Open to Work
                  </span>
                )}
                <button onClick={() => go("contact")} style={{
                  padding:"8px 18px", background:"var(--tx)", color:"var(--bg)",
                  border:"none", borderRadius:"8px", fontSize:"13px", fontWeight:600, cursor:"pointer" }}>
                  Hire Me
                </button>
              </div>
            </div>
          </div>
        </div>
      </header>
    </>
  );
}