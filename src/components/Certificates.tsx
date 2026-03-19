"use client";
import { useState, useEffect, useRef, useCallback } from "react";
import { X, ChevronLeft, ChevronRight, ArrowUpRight } from "lucide-react";

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

const CATS = ["All", "Academic Excellence", "Project Award", "Recognition"];

const CAT_META: Record<string, { dot: string; bg: string; border: string; text: string }> = {
  "Academic Excellence": { dot: "#d97706", bg: "rgba(217,119,6,0.08)",  border: "rgba(217,119,6,0.2)",  text: "#d97706" },
  "Project Award":       { dot: "#059669", bg: "rgba(5,150,105,0.08)",  border: "rgba(5,150,105,0.2)",  text: "#059669" },
  "Recognition":         { dot: "#7c3aed", bg: "rgba(124,58,237,0.08)", border: "rgba(124,58,237,0.2)", text: "#7c3aed" },
};

const groupByYear = (list: typeof certificates) => {
  const map = new Map<string, typeof certificates>();
  list.forEach(c => {
    if (!map.has(c.year)) map.set(c.year, []);
    map.get(c.year)!.push(c);
  });
  return Array.from(map.entries()).sort((a, b) => b[0].localeCompare(a[0]));
};

export default function Certificates() {
  const header = useReveal();
  const body   = useReveal(0.04);

  const [filter, setFilter] = useState("All");
  const [lightbox, setLb]   = useState<number | null>(null);

  const list   = filter === "All" ? certificates : certificates.filter(c => c.category === filter);
  const groups = groupByYear(list);
  const lbCert = lightbox !== null ? list[lightbox] : null;

  const prev = useCallback(() => setLb(i => i !== null ? (i - 1 + list.length) % list.length : null), [list.length]);
  const next = useCallback(() => setLb(i => i !== null ? (i + 1) % list.length : null), [list.length]);

  useEffect(() => { setLb(null); }, [filter]);
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
        @import url('https://fonts.googleapis.com/css2?family=DM+Serif+Display&display=swap');

        /* pills */
        .crt-pill {
          padding: 4px 14px; border-radius: 999px; font-size: 12px; font-weight: 500;
          cursor: pointer; border: 1px solid var(--border); background: var(--card);
          color: var(--tx2); transition: all .15s; white-space: nowrap;
        }
        .crt-pill.active { background: var(--tx); color: var(--bg); border-color: transparent; }
        .crt-pill:hover:not(.active) { border-color: var(--border-h); color: var(--tx); }

        /* stats — inline, compact */
        .crt-stats {
          display: inline-flex;
          align-items: center;
          gap: 0;
          background: var(--card);
          border: 1px solid var(--border);
          border-radius: 12px;
          overflow: hidden;
          margin-bottom: 20px;
        }
        .crt-stat {
          padding: 10px 18px;
          border-right: 1px solid var(--border);
          display: flex; flex-direction: column; gap: 1px;
        }
        .crt-stat:last-child { border-right: none; }
        .crt-stat-num {
          font-size: 18px; font-weight: 700; color: var(--tx); line-height: 1;
        }
        .crt-stat-lbl { font-size: 10px; color: var(--tx3); white-space: nowrap; }

        /* year divider */
        .crt-year-label {
          font-size: 10px; font-weight: 700; letter-spacing: .12em;
          text-transform: uppercase; color: var(--tx3);
          display: flex; align-items: center; gap: 10px;
          margin: 24px 0 0;
          padding-bottom: 8px;
        }
        .crt-year-label::after {
          content: ''; flex: 1; height: 1px; background: var(--border);
        }

        /* cert row — key fix: block layout, not flex stretching */
        .crt-row {
          display: flex;
          align-items: center;
          gap: 12px;
          padding: 12px 4px;
          border-bottom: 1px solid var(--border);
          cursor: pointer;
          transition: padding-left .15s;
        }
        .crt-row:first-of-type { border-top: 1px solid var(--border); }
        .crt-row:hover { padding-left: 8px; }
        .crt-row:hover .crt-row-title { color: var(--tx); }
        .crt-row:hover .crt-row-arrow { opacity: 1; transform: translate(1px,-1px); }

        .crt-row-num {
          font-size: 10px; font-family: monospace; color: var(--tx3);
          width: 22px; flex-shrink: 0; text-align: right;
        }
        .crt-row-badge {
          display: inline-flex; align-items: center; gap: 4px;
          padding: 2px 9px; border-radius: 999px;
          font-size: 9px; font-weight: 700; letter-spacing: .06em;
          text-transform: uppercase; flex-shrink: 0; white-space: nowrap;
        }
        .crt-row-dot { width: 4px; height: 4px; border-radius: 50%; flex-shrink: 0; }

        /* title takes remaining space — flex:1 + min-width:0 prevents overflow */
        .crt-row-title {
          font-family: 'DM Serif Display', Georgia, serif;
          font-size: 16px; color: var(--tx2);
          flex: 1; min-width: 0;
          white-space: nowrap; overflow: hidden; text-overflow: ellipsis;
          transition: color .15s; line-height: 1.3;
        }
        .crt-row-year {
          font-size: 10px; color: var(--tx3); font-family: monospace;
          flex-shrink: 0; white-space: nowrap;
        }
        .crt-row-arrow {
          flex-shrink: 0; color: var(--tx3);
          opacity: 0; transition: opacity .15s, transform .15s;
        }

        /* lightbox */
        .crt-lb {
          position: fixed; inset: 0; z-index: 9999;
          background: rgba(0,0,0,0.93);
          display: flex; align-items: center; justify-content: center;
          padding: 20px; animation: lbIn .18s ease;
        }
        @keyframes lbIn { from { opacity:0 } to { opacity:1 } }
        .crt-lb-inner {
          max-width: 800px; width: 100%;
          display: flex; flex-direction: column; align-items: center; gap: 14px;
        }
        .crt-lb-img {
          max-width: 100%; max-height: 76vh; object-fit: contain;
          border-radius: 10px; display: block;
          box-shadow: 0 24px 80px rgba(0,0,0,.8);
          animation: imgIn .25s ease;
        }
        @keyframes imgIn { from { opacity:0; transform:scale(.97) } to { opacity:1; transform:scale(1) } }
        .crt-lb-title { font-size: 13px; font-weight: 600; color:#fff; text-align:center; }
        .crt-lb-sub   { font-size: 11px; color:rgba(255,255,255,.38); font-family:monospace; text-align:center; margin-top:3px; }
        .crt-lb-close {
          position: fixed; top:18px; right:18px;
          width:34px; height:34px; border-radius:9px;
          background:rgba(255,255,255,.1); border:1px solid rgba(255,255,255,.14);
          display:flex; align-items:center; justify-content:center;
          color:#fff; cursor:pointer; transition:background .18s;
        }
        .crt-lb-close:hover { background:rgba(255,255,255,.2); }
        .crt-lb-nav {
          position:fixed; top:50%; transform:translateY(-50%);
          width:38px; height:38px; border-radius:50%;
          background:rgba(255,255,255,.1); border:1px solid rgba(255,255,255,.14);
          display:flex; align-items:center; justify-content:center;
          color:#fff; cursor:pointer; transition:background .18s;
        }
        .crt-lb-nav:hover { background:rgba(255,255,255,.2); }
        .crt-lb-cnt {
          position:fixed; bottom:18px; left:50%; transform:translateX(-50%);
          font-size:11px; color:rgba(255,255,255,.32); font-family:monospace;
          background:rgba(0,0,0,.5); padding:4px 14px; border-radius:999px;
          border:1px solid rgba(255,255,255,.07);
        }

        @media (max-width: 600px) {
          .crt-row-badge { display: none; }
          .crt-row-title { font-size: 14px; }
          .crt-stat { padding: 8px 12px; }
        }
      `}</style>

      <div style={{ maxWidth: "900px", margin: "0 auto", padding: "0 1.25rem" }}>

        {/* Header */}
        <div ref={header.ref} style={{
          marginBottom: "20px",
          opacity: header.on ? 1 : 0,
          transform: header.on ? "none" : "translateY(18px)",
          transition: "opacity .6s ease, transform .6s ease",
        }}>
          <span className="section-label">Achievements</span>
          <h2 className="section-heading" style={{ marginBottom: "6px" }}>
            Certificates &amp; <span>Awards</span>
          </h2>
          <p style={{ fontSize: "14px", color: "var(--tx2)", lineHeight: 1.7, maxWidth: "460px" }}>
            Academic recognitions and project awards from Holy Cross College.
          </p>
        </div>

        <div ref={body.ref} style={{
          opacity: body.on ? 1 : 0,
          transform: body.on ? "none" : "translateY(18px)",
          transition: "opacity .6s ease .08s, transform .6s ease .08s",
        }}>

          {/* Stats — compact inline card */}
          <div className="crt-stats">
            {[
              { num: certificates.length, lbl: "Total" },
              { num: certificates.filter(c => c.category === "Academic Excellence").length, lbl: "Academic" },
              { num: certificates.filter(c => c.category === "Project Award").length,       lbl: "Projects" },
              { num: certificates.filter(c => c.category === "Recognition").length,         lbl: "Recognition" },
            ].map(s => (
              <div key={s.lbl} className="crt-stat">
                <span className="crt-stat-num">{s.num}</span>
                <span className="crt-stat-lbl">{s.lbl}</span>
              </div>
            ))}
          </div>

          {/* Filters */}
          <div style={{ display: "flex", gap: "6px", flexWrap: "wrap", marginBottom: "4px" }}>
            {CATS.map(cat => (
              <button key={cat} className={`crt-pill${filter === cat ? " active" : ""}`} onClick={() => setFilter(cat)}>
                {cat}
              </button>
            ))}
          </div>

          {/* Year groups → rows */}
          {groups.map(([year, items]) => (
            <div key={year}>
              <div className="crt-year-label">{year}</div>
              {items.map(c => {
                const globalIdx = list.findIndex(l => l.file === c.file);
                const m = CAT_META[c.category];
                return (
                  <div key={c.file} className="crt-row" onClick={() => setLb(globalIdx)}>
                    <span className="crt-row-num">{String(globalIdx + 1).padStart(2, "0")}</span>
                    <span className="crt-row-badge" style={{ background: m.bg, border: `1px solid ${m.border}`, color: m.text }}>
                      <span className="crt-row-dot" style={{ background: m.dot }} />
                      {c.category}
                    </span>
                    <span className="crt-row-title">{c.title}</span>
                    <ArrowUpRight size={14} className="crt-row-arrow" />
                  </div>
                );
              })}
            </div>
          ))}
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
          <button className="crt-lb-close" onClick={() => setLb(null)}><X size={13} /></button>
          {list.length > 1 && (
            <>
              <button className="crt-lb-nav" style={{ left: 16 }} onClick={e => { e.stopPropagation(); prev(); }}><ChevronLeft size={17} /></button>
              <button className="crt-lb-nav" style={{ right: 16 }} onClick={e => { e.stopPropagation(); next(); }}><ChevronRight size={17} /></button>
            </>
          )}
          <div className="crt-lb-cnt">{lightbox + 1} / {list.length}</div>
        </div>
      )}
    </section>
  );
}