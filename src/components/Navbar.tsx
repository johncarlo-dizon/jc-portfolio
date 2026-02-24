"use client";
import { useState, useEffect } from "react";
import { personalInfo } from "@/lib/data";

const navLinks = [
  { label: "About", href: "#about" },
  { label: "Skills", href: "#skills" },
  { label: "Projects", href: "#projects" },
  { label: "Experience", href: "#experience" },
  { label: "Contact", href: "#contact" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handler = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handler);
    return () => window.removeEventListener("scroll", handler);
  }, []);

  return (
    <header
      className="fixed top-0 left-0 right-0 z-50 transition-all duration-300"
      style={
        scrolled
          ? {
              background: "rgba(10,10,15,0.90)",
              backdropFilter: "blur(12px)",
              borderBottom: "1px solid rgba(255,255,255,0.05)",
              boxShadow: "0 4px 24px rgba(0,0,0,0.4)",
            }
          : {}
      }
    >
      <nav className="max-w-6xl mx-auto px-6 py-4 flex items-center justify-between">
        <a href="#" className="font-bold text-xl tracking-tight text-white hover:text-indigo-400 transition-colors">
          <span style={{ color: "#818cf8" }}>&lt;</span>
          JC
          <span style={{ color: "#818cf8" }}>/&gt;</span>
        </a>

        {/* Desktop */}
        <ul className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <li key={link.label}>
              <a
                href={link.href}
                className="text-sm font-medium transition-colors duration-200 relative group"
                style={{ color: "#94a3b8" }}
                onMouseEnter={e => (e.currentTarget.style.color = "#fff")}
                onMouseLeave={e => (e.currentTarget.style.color = "#94a3b8")}
              >
                {link.label}
                <span
                  className="absolute -bottom-1 left-0 h-px bg-indigo-400 transition-all duration-300 w-0 group-hover:w-full"
                  style={{ display: "block" }}
                />
              </a>
            </li>
          ))}
          {personalInfo.available && (
            <li>
              <span
                className="flex items-center gap-2 text-xs font-medium px-3 py-1.5 rounded-full"
                style={{
                  color: "#34d399",
                  background: "rgba(52,211,153,0.1)",
                  border: "1px solid rgba(52,211,153,0.2)",
                }}
              >
                <span className="w-1.5 h-1.5 bg-emerald-400 rounded-full animate-pulse" />
                Open to Work
              </span>
            </li>
          )}
        </ul>

        {/* Mobile button */}
        <button
          onClick={() => setMenuOpen(!menuOpen)}
          className="md:hidden p-2"
          style={{ color: "#94a3b8" }}
        >
          <div className="w-5 space-y-1">
            <span
              className="block h-0.5 bg-current transition-all duration-200"
              style={{ transform: menuOpen ? "rotate(45deg) translateY(6px)" : undefined }}
            />
            <span
              className="block h-0.5 bg-current transition-all duration-200"
              style={{ opacity: menuOpen ? 0 : 1 }}
            />
            <span
              className="block h-0.5 bg-current transition-all duration-200"
              style={{ transform: menuOpen ? "rotate(-45deg) translateY(-6px)" : undefined }}
            />
          </div>
        </button>
      </nav>

      {/* Mobile menu */}
      {menuOpen && (
        <div
          className="md:hidden px-6 py-4"
          style={{
            background: "rgba(13,13,20,0.97)",
            backdropFilter: "blur(12px)",
            borderTop: "1px solid rgba(255,255,255,0.05)",
          }}
        >
          {navLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              onClick={() => setMenuOpen(false)}
              className="block py-3 font-medium transition-colors"
              style={{
                color: "#94a3b8",
                borderBottom: "1px solid rgba(255,255,255,0.05)",
              }}
            >
              {link.label}
            </a>
          ))}
        </div>
      )}
    </header>
  );
}