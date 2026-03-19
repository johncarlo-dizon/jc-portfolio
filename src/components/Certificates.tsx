"use client";
import { useState, useEffect, useRef, useCallback } from "react";
import { X, ChevronLeft, ChevronRight } from "lucide-react";

function useReveal(threshold = 0.08) {
  const ref = useRef<HTMLDivElement>(null);
  const [on, setOn] = useState(false);
  useEffect(() => {
    const obs = new IntersectionObserver(
      ([e]) => { if (e.isIntersecting) { setOn(true); obs.disconnect(); } },
      { threshold }
    );
    if (ref.current) obs.observe(ref.current);
    return () => obs.disconnect();
  }, [threshold]);
  return { ref, on };
}

const certificates = [
  { file: "seclstop1.jpeg",                               title: "Top 1 Performer in the Department",                              category: "Academic Excellence", year: "SY 2024–2025" },
  { file: "overallrank9.jpeg",                            title: "Overall Rank 9 in the College",                                  category: "Academic Excellence", year: "SY 2024–2025" },
  { file: "pl2024-2025secondsem.jpeg",                    title: "President's Lister — 2nd Semester",                              category: "Academic Excellence", year: "SY 2024–2025" },
  { file: "pl2024-2025secondsemv2.jpeg",                  title: "President's Lister — 2nd Semester (v2)",                         category: "Academic Excellence", year: "SY 2024–2025" },
  { file: "pl2024-2025firstsem.jpeg",                     title: "President's Lister — 1st Semester",                              category: "Academic Excellence", year: "SY 2024–2025" },
  { file: "pl2024-2025firstsemv2.jpeg",                   title: "President's Lister — 1st Semester (v2)",                         category: "Academic Excellence", year: "SY 2024–2025" },
  { file: "pl2023-2024firstsem.jpeg",                     title: "President's Lister — 1st Semester",                              category: "Academic Excellence", year: "SY 2023–2024" },
  { file: "pl2023-2024secondsem.jpeg",                    title: "President's Lister — 2nd Semester",                              category: "Academic Excellence", year: "SY 2023–2024" },
  { file: "top3bestperformerindepartment.jpeg",            title: "Top 3 Best Performer in the Department",                         category: "Academic Excellence", year: "SY 2022–2023" },
  { file: "overallbestproject.jpeg",                      title: "Overall Best Project",                                           category: "Project Award",       year: "SY 2021–2022" },
  { file: "bestprojectforcommunityextension.jpeg",         title: "Best Project for Community Extension",                           category: "Project Award",       year: "SY 2021–2022" },
  { file: "bestinsystem.jpeg",                            title: "Best in System",                                                 category: "Project Award",       year: "SY 2021–2022" },
  { file: "bestpresenter.jpeg",                           title: "Best Presenter",                                                 category: "Project Award",       year: "SY 2021–2022" },
  { file: "bestinresearchpaper.jpeg",                     title: "Best in Research Paper",                                         category: "Project Award",       year: "SY 2021–2022" },
  { file: "cerofrecog_embracingthelightofinnovation.jpeg", title: "Certificate of Recognition — Embracing the Light of Innovation", category: "Recognition",         year: "2024" },
];

const CATEGORIES = ["Academic Excellence", "Project Award", "Recognition"];

const CAT_STYLE: Record<string, {
  dot: string;
  label: string;
  accentColor: string;
  groupBorder: string;
}> = {
  "Academic Excellence": {
    dot:          "#d97706",
    label:        "#d97706",
    accentColor:  "#d97706",
    groupBorder:  "rgba(217,119,6,0.3)",
  },
  "Project Award": {
    dot:          "#059669",
    label:        "#059669",
    accentColor:  "#059669",
    groupBorder:  "rgba(5,150,105,0.3)",
  },
  "Recognition": {
    dot:          "#7c3aed",
    label:        "#7c3aed",
    accentColor:  "#7c3aed",
    groupBorder:  "rgba(124,58,237,0.3)",
  },
};

export default function Certificates() {
  const header = useReveal();
  const body   = useReveal(0.04);

  const [lightbox, setLb] = useState<number | null>(null);

  const prev = useCallback(() =>
    setLb(i => i !== null ? (i - 1 + certificates.length) % certificates.length : null), []);
  const next = useCallback(() =>
    setLb(i => i !== null ? (i + 1) % certificates.length : null), []);

  const lbCert = lightbox !== null ? certificates[lightbox] : null;

  useEffect(() => {
    document.body.style.overflow = lightbox !== null ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [lightbox]);

  useEffect(() => {
    if (lightbox === null) return;
    const fn = (e: KeyboardEvent) => {
      if (e.key === "Escape") setLb(null);
      if (e.key === "ArrowLeft") prev();
      if (e.key === "ArrowRight") next();
    };
    window.addEventListener("keydown", fn);
    return () => window.removeEventListener("keydown", fn);
  }, [lightbox, prev, next]);

  return (
    <section id="certificates" style={{ padding: "4rem 0", background: "var(--bg3)" }}>
      <style>{`
        /* ── group block ── */
        .crt-group {
          border-radius: 16px;
          border: 1px solid var(--border);
          background: var(--card);
          overflow: hidden;
          margin-bottom: 12px;
        }
        .crt-group:last-child { margin-bottom: 0; }

        .crt-group-header {
          display: flex;
          align-items: center;
          gap: 8px;
          padding: 11px 16px;
          border-bottom: 1px solid var(--border);
          background: var(--bg2);
        }
        .crt-group-dot {
          width: 8px; height: 8px;
          border-radius: 50%; flex-shrink: 0;
        }
        .crt-group-label {
          font-size: 11px; font-weight: 700;
          letter-spacing: .09em; text-transform: uppercase;
          flex: 1;
        }
        .crt-group-count {
          font-size: 11px; font-family: monospace; color: var(--tx3);
        }

        .crt-group-pills {
          padding: 14px 16px;
          display: flex;
          flex-wrap: wrap;
          gap: 8px;
        }

        /* ── pill — white card, colored left border ── */
        .crt-pill {
          padding: 9px 13px;
          border-radius: 0 10px 10px 0;
          border: 1px solid var(--border);
          border-left-width: 3px;
          background: var(--bg3);
          cursor: pointer;
          transition: background .15s, transform .15s;
          display: inline-flex;
          flex-direction: column;
          gap: 3px;
        }
        .crt-pill:hover {
          background: var(--bg2);
          transform: translateY(-1px);
        }
        .crt-pill-title {
          font-size: 13px;
          font-weight: 600;
          color: var(--tx);
          line-height: 1.35;
        }
        .crt-pill-year {
          font-size: 10px;
          font-family: monospace;
          color: var(--tx3);
        }

        /* ── lightbox ── */
        .crt-lb {
          position: fixed; inset: 0; z-index: 9999;
          background: rgba(0,0,0,0.93);
          display: flex; align-items: center; justify-content: center;
          padding: 20px; animation: lbIn .18s ease;
        }
        @keyframes lbIn { from { opacity:0 } to { opacity:1 } }
        .crt-lb-inner {
          max-width: 800px; width: 100%;
          display: flex; flex-direction: column;
          align-items: center; gap: 16px;
        }
        .crt-lb-img {
          max-width: 100%; max-height: 74vh;
          object-fit: contain; border-radius: 12px; display: block;
          box-shadow: 0 24px 80px rgba(0,0,0,.85);
          animation: imgIn .22s ease;
        }
        @keyframes imgIn {
          from { opacity:0; transform:scale(.97) }
          to   { opacity:1; transform:scale(1) }
        }
        .crt-lb-title {
          font-size: 14px; font-weight: 600;
          color: #fff; text-align: center;
        }
        .crt-lb-sub {
          font-size: 11px; color: rgba(255,255,255,.38);
          font-family: monospace; text-align: center; margin-top: 3px;
        }
        .crt-lb-close {
          position: fixed; top: 18px; right: 18px;
          width: 34px; height: 34px; border-radius: 9px;
          background: rgba(255,255,255,.1);
          border: 1px solid rgba(255,255,255,.14);
          display: flex; align-items: center; justify-content: center;
          color: #fff; cursor: pointer; transition: background .15s;
        }
        .crt-lb-close:hover { background: rgba(255,255,255,.22); }
        .crt-lb-nav {
          position: fixed; top: 50%; transform: translateY(-50%);
          width: 38px; height: 38px; border-radius: 50%;
          background: rgba(255,255,255,.1);
          border: 1px solid rgba(255,255,255,.14);
          display: flex; align-items: center; justify-content: center;
          color: #fff; cursor: pointer; transition: background .15s;
        }
        .crt-lb-nav:hover { background: rgba(255,255,255,.22); }
        .crt-lb-cnt {
          position: fixed; bottom: 18px; left: 50%; transform: translateX(-50%);
          font-size: 11px; color: rgba(255,255,255,.32); font-family: monospace;
          background: rgba(0,0,0,.5); padding: 4px 14px; border-radius: 999px;
          border: 1px solid rgba(255,255,255,.07);
        }
      `}</style>

      <div style={{ maxWidth: "900px", margin: "0 auto", padding: "0 1.25rem" }}>

        {/* Header */}
        <div ref={header.ref} style={{
          marginBottom: "28px",
          opacity: header.on ? 1 : 0,
          transform: header.on ? "none" : "translateY(16px)",
          transition: "opacity .55s ease, transform .55s ease",
        }}>
          <span className="section-label">Achievements</span>
          <h2 className="section-heading" style={{ marginBottom: "6px" }}>
            Certificates &amp; <span>Awards</span>
          </h2>
          <p style={{ fontSize: "14px", color: "var(--tx2)", lineHeight: 1.7, maxWidth: "440px" }}>
            Academic recognitions and project awards from Holy Cross College.
          </p>
        </div>

        {/* Groups */}
        <div ref={body.ref} style={{
          opacity: body.on ? 1 : 0,
          transform: body.on ? "none" : "translateY(16px)",
          transition: "opacity .55s ease .08s, transform .55s ease .08s",
        }}>
          {CATEGORIES.map((cat, gi) => {
            const s = CAT_STYLE[cat];
            const items = certificates.filter(c => c.category === cat);
            return (
              <div
                key={cat}
                className="crt-group"
                style={{
                  borderColor: s.groupBorder,
                  animationDelay: `${gi * 80}ms`,
                }}
              >
                {/* Header */}
                <div className="crt-group-header">
                  <span className="crt-group-dot" style={{ background: s.dot }} />
                  <span className="crt-group-label" style={{ color: s.label }}>
                    {cat}
                  </span>
                  <span className="crt-group-count">
                    {items.length} award{items.length !== 1 ? "s" : ""}
                  </span>
                </div>

                {/* Pills */}
                <div className="crt-group-pills">
                  {items.map(c => {
                    const globalIdx = certificates.findIndex(x => x.file === c.file);
                    return (
                      <div
                        key={c.file}
                        className="crt-pill"
                        style={{ borderLeftColor: s.accentColor }}
                        onClick={() => setLb(globalIdx)}
                      >
                        <span className="crt-pill-title">{c.title}</span>
                        <span className="crt-pill-year">{c.year}</span>
                      </div>
                    );
                  })}
                </div>
              </div>
            );
          })}
        </div>
      </div>

      {/* Lightbox */}
      {lightbox !== null && lbCert && (
        <div className="crt-lb" onClick={() => setLb(null)}>
          <div className="crt-lb-inner" onClick={e => e.stopPropagation()}>
            <img
              key={lightbox}
              src={`/certificates/${lbCert.file}`}
              alt={lbCert.title}
              className="crt-lb-img"
            />
            <div>
              <p className="crt-lb-title">{lbCert.title}</p>
              <p className="crt-lb-sub">{lbCert.category} · {lbCert.year}</p>
            </div>
          </div>
          <button className="crt-lb-close" onClick={() => setLb(null)}>
            <X size={13} />
          </button>
          <button className="crt-lb-nav" style={{ left: 16 }}
            onClick={e => { e.stopPropagation(); prev(); }}>
            <ChevronLeft size={17} />
          </button>
          <button className="crt-lb-nav" style={{ right: 16 }}
            onClick={e => { e.stopPropagation(); next(); }}>
            <ChevronRight size={17} />
          </button>
          <div className="crt-lb-cnt">{lightbox + 1} / {certificates.length}</div>
        </div>
      )}
    </section>
  );
}