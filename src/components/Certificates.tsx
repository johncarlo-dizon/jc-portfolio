"use client";
import { useState, useEffect, useRef, useCallback } from "react";
import { Award, ChevronRight, X, ChevronLeft } from "lucide-react";

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
  { file: "overallrank9.jpeg",                             title: "Overall Rank 9 in the College",                                  category: "Academic Excellence", year: "SY 2024–2025" },
  { file: "pl2024-2025secondsem.jpeg",                     title: "President's Lister — 2nd Semester",                              category: "Academic Excellence", year: "SY 2024–2025" },
  { file: "pl2024-2025secondsemv2.jpeg",                   title: "President's Lister — 2nd Semester (v2)",                         category: "Academic Excellence", year: "SY 2024–2025" },
  { file: "pl2024-2025firstsem.jpeg",                      title: "President's Lister — 1st Semester",                              category: "Academic Excellence", year: "SY 2024–2025" },
  { file: "pl2024-2025firstsemv2.jpeg",                    title: "President's Lister — 1st Semester (v2)",                         category: "Academic Excellence", year: "SY 2024–2025" },
  { file: "pl2023-2024firstsem.jpeg",                      title: "President's Lister — 1st Semester",                              category: "Academic Excellence", year: "SY 2023–2024" },
  { file: "pl2023-2024secondsem.jpeg",                     title: "President's Lister — 2nd Semester",                              category: "Academic Excellence", year: "SY 2023–2024" },
  { file: "top3bestperformerindepartment.jpeg",             title: "Top 3 Best Performer in the Department",                         category: "Academic Excellence", year: "SY 2022–2023" },
  { file: "overallbestproject.jpeg",                       title: "Overall Best Project",                                           category: "Project Award",       year: "SY 2021–2022" },
  { file: "bestprojectforcommunityextension.jpeg",          title: "Best Project for Community Extension",                           category: "Project Award",       year: "SY 2021–2022" },
  { file: "bestinsystem.jpeg",                             title: "Best in System",                                                 category: "Project Award",       year: "SY 2021–2022" },
  { file: "bestpresenter.jpeg",                            title: "Best Presenter",                                                 category: "Project Award",       year: "SY 2021–2022" },
  { file: "bestinresearchpaper.jpeg",                      title: "Best in Research Paper",                                         category: "Project Award",       year: "SY 2021–2022" },
  { file: "cerofrecog_embracingthelightofinnovation.jpeg", title: "Certificate of Recognition — Embracing the Light of Innovation", category: "Recognition",         year: "2024" },
];

const CATS = ["All", "Academic Excellence", "Project Award", "Recognition"];

const CAT_META: Record<string, { color: string; bg: string; border: string; dot: string }> = {
  "Academic Excellence": { color: "#fbbf24", bg: "rgba(251,191,36,0.1)",  border: "rgba(251,191,36,0.25)",  dot: "#fbbf24" },
  "Project Award":       { color: "#34d399", bg: "rgba(52,211,153,0.1)",  border: "rgba(52,211,153,0.25)",  dot: "#34d399" },
  "Recognition":         { color: "#c084fc", bg: "rgba(192,132,252,0.1)", border: "rgba(192,132,252,0.25)", dot: "#c084fc" },
};

export default function Certificates() {
  const header = useReveal();
  const body   = useReveal(0.04);

  const [filter, setFilter]   = useState("All");
  const [idx, setIdx]         = useState(0);
  const [animKey, setAnimKey] = useState(0);
  const [lightbox, setLb]     = useState(false);
  const listRef               = useRef<HTMLDivElement>(null);

  const list    = filter === "All" ? certificates : certificates.filter(c => c.category === filter);
  const safeIdx = Math.min(idx, list.length - 1);
  const cert    = list[safeIdx] ?? list[0];
  const meta    = CAT_META[cert?.category ?? ""] ?? { color: "var(--ac-l)", bg: "var(--ac-dim)", border: "var(--border-h)", dot: "var(--tx3)" };

  const go = useCallback((i: number) => {
    setIdx(i);
    setAnimKey(k => k + 1);
    requestAnimationFrame(() => {
      listRef.current?.children[i]?.scrollIntoView({ block: "nearest", behavior: "smooth" });
    });
  }, []);

  const prev = useCallback(() => go((safeIdx - 1 + list.length) % list.length), [safeIdx, list.length, go]);
  const next = useCallback(() => go((safeIdx + 1) % list.length), [safeIdx, list.length, go]);

  useEffect(() => { setIdx(0); setAnimKey(k => k + 1); }, [filter]);

  useEffect(() => {
    document.body.style.overflow = lightbox ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [lightbox]);

  useEffect(() => {
    if (!lightbox) return;
    const fn = (e: KeyboardEvent) => {
      if (e.key === "Escape") setLb(false);
      if (e.key === "ArrowLeft") prev();
      if (e.key === "ArrowRight") next();
    };
    window.addEventListener("keydown", fn);
    return () => window.removeEventListener("keydown", fn);
  }, [lightbox, prev, next]);

  return (
    <section id="certificates" style={{ padding: "5rem 0", background: "var(--bg3)" }}>
      <style>{`
        /* ── filters ─────────────────────────── */
        .crt-filter-btn {
          padding: 6px 16px; border-radius: 999px; font-size: 13px;
          font-weight: 500; cursor: pointer; transition: all .2s;
          font-family: 'Inter', sans-serif; line-height: 1.5;
        }

        /* ── layout ──────────────────────────── */
        .crt-body {
          display: grid;
          grid-template-columns: 1fr 300px;
          gap: 20px;
          align-items: start;
        }

        /* ── viewer card ─────────────────────── */
        .crt-viewer {
          border-radius: 16px;
          border: 1px solid var(--border);
          background: var(--card);
          overflow: hidden;
        }

        /* The image box — fills 100% width, fixed height, NO background gap */
        .crt-img-box {
          width: 100%;
          height: 460px;
          position: relative;
          overflow: hidden;
          /* no background color — image covers everything */
        }

        /* Image covers the entire box, cropped to center */
        .crt-img {
          width: 100%;
          height: 100%;
          display: block;
          object-fit: cover;
          object-position: center center;
          animation: crtFade .3s ease;
        }
        @keyframes crtFade {
          from { opacity: 0; transform: scale(1.02); }
          to   { opacity: 1; transform: none; }
        }

        /* subtle dark vignette so arrows/text stay readable */
        .crt-vignette {
          position: absolute; inset: 0; pointer-events: none;
          background: radial-gradient(ellipse at center, transparent 55%, rgba(0,0,0,0.28) 100%);
        }

        /* prev/next arrows */
        .crt-arrow {
          position: absolute; top: 50%; transform: translateY(-50%);
          width: 38px; height: 38px; border-radius: 50%;
          background: rgba(0,0,0,0.45); backdrop-filter: blur(8px);
          border: 1px solid rgba(255,255,255,0.18);
          display: flex; align-items: center; justify-content: center;
          cursor: pointer; color: #fff; z-index: 4;
          transition: background .2s, transform .2s;
        }
        .crt-arrow:hover { background: rgba(0,0,0,0.72); transform: translateY(-50%) scale(1.1); }
        .crt-arrow-l { left: 14px; }
        .crt-arrow-r { right: 14px; }

        /* info bar */
        .crt-info-bar {
          padding: 13px 16px;
          border-top: 1px solid var(--border);
          display: flex;
          align-items: center;
          gap: 10px;
          flex-wrap: wrap;
        }
        .crt-info-main { flex: 1; min-width: 0; }
        .crt-info-title {
          font-size: 14px; font-weight: 700; color: var(--tx);
          white-space: nowrap; overflow: hidden; text-overflow: ellipsis;
          margin-bottom: 2px;
        }
        .crt-info-sub { font-size: 11px; color: var(--tx3); font-family: monospace; }

        .crt-counter-chip {
          font-size: 11px; font-family: monospace; color: var(--tx3);
          background: var(--bg3); border: 1px solid var(--border);
          padding: 3px 9px; border-radius: 999px; white-space: nowrap; flex-shrink: 0;
        }
        .crt-enlarge-btn {
          display: flex; align-items: center; gap: 5px;
          padding: 6px 12px; border-radius: 8px;
          background: var(--ac-dim); border: 1px solid var(--border-h);
          font-size: 12px; font-weight: 600; color: var(--tx2);
          cursor: pointer; transition: all .2s; flex-shrink: 0;
          font-family: 'Inter', sans-serif;
        }
        .crt-enlarge-btn:hover { background: var(--ac-glow); color: var(--tx); }

        /* ── list panel ──────────────────────── */
        .crt-list {
          border-radius: 14px; border: 1px solid var(--border);
          background: var(--card); overflow-y: auto; max-height: 510px;
          scrollbar-width: thin; scrollbar-color: var(--tx3) transparent;
        }
        .crt-list::-webkit-scrollbar { width: 3px; }
        .crt-list::-webkit-scrollbar-thumb { background: var(--tx3); border-radius: 3px; }

        .crt-item {
          display: flex; align-items: center; gap: 10px;
          padding: 12px 14px; cursor: pointer;
          border-bottom: 1px solid var(--border);
          transition: background .15s;
        }
        .crt-item:last-child { border-bottom: none; }
        .crt-item:hover { background: var(--card-h); }
        .crt-item.crt-active {
          background: var(--ac-dim);
          border-left: 3px solid var(--ac);
          padding-left: 11px;
        }
        .crt-dot { width: 7px; height: 7px; border-radius: 50%; flex-shrink: 0; }
        .crt-num { font-size: 9px; font-family: monospace; color: var(--tx3); flex-shrink: 0; min-width: 16px; }
        .crt-item-body { flex: 1; min-width: 0; }
        .crt-item-title { font-size: 12px; font-weight: 600; color: var(--tx); line-height: 1.45; }
        .crt-item-yr { font-size: 10px; color: var(--tx3); font-family: monospace; margin-top: 2px; }
        .crt-chev { flex-shrink: 0; opacity: 0; transition: opacity .15s, transform .15s; }
        .crt-item:hover .crt-chev,
        .crt-item.crt-active .crt-chev { opacity: 1; transform: translateX(2px); }

        /* ── lightbox ────────────────────────── */
        .crt-lb {
          position: fixed; inset: 0; z-index: 9999;
          background: rgba(0,0,0,0.94); backdrop-filter: blur(20px);
          display: flex; align-items: center; justify-content: center;
          padding: 24px; animation: crtLbIn .2s ease;
        }
        @keyframes crtLbIn { from{opacity:0} to{opacity:1} }
        .crt-lb-wrap {
          position: relative; max-width: 860px; width: 100%;
          display: flex; flex-direction: column; align-items: center; gap: 14px;
        }
        .crt-lb-img {
          max-width: 100%; max-height: 80vh; object-fit: contain;
          border-radius: 10px; border: 1px solid rgba(255,255,255,0.08);
          box-shadow: 0 24px 80px rgba(0,0,0,.7);
          animation: crtFade .25s ease;
        }
        .crt-lb-close {
          position: absolute; top: -12px; right: -12px;
          width: 36px; height: 36px; background: rgba(255,255,255,0.12);
          border: 1px solid rgba(255,255,255,0.2); border-radius: 50%;
          display: flex; align-items: center; justify-content: center;
          cursor: pointer; color: #fff; transition: background .2s;
        }
        .crt-lb-close:hover { background: rgba(255,255,255,0.24); }
        .crt-lb-nav {
          position: fixed; top: 50%; transform: translateY(-50%);
          width: 44px; height: 44px;
          background: rgba(255,255,255,0.1); border: 1px solid rgba(255,255,255,0.18);
          border-radius: 50%; display: flex; align-items: center; justify-content: center;
          cursor: pointer; color: #fff; transition: background .2s; z-index: 10;
        }
        .crt-lb-nav:hover { background: rgba(255,255,255,0.22); }
        .crt-lb-cnt {
          position: fixed; bottom: 18px; left: 50%; transform: translateX(-50%);
          font-size: 11px; color: rgba(255,255,255,.4); font-family: monospace;
          background: rgba(0,0,0,.45); padding: 4px 12px;
          border-radius: 999px; border: 1px solid rgba(255,255,255,.08);
        }

        /* ── responsive ──────────────────────── */
        @media (max-width: 768px) {
          .crt-body { grid-template-columns: 1fr !important; }
          .crt-img-box { height: 300px !important; }
          .crt-list { max-height: 300px !important; }
        }
        @media (max-width: 480px) {
          .crt-img-box { height: 240px !important; }
          .crt-info-title { font-size: 13px; }
        }
      `}</style>

      <div style={{ maxWidth: "1200px", margin: "0 auto", padding: "0 1.25rem" }}>

        {/* header */}
        <div ref={header.ref} style={{
          marginBottom: "24px",
          opacity: header.on ? 1 : 0, transform: header.on ? "none" : "translateY(22px)",
          transition: "opacity .6s ease, transform .6s ease",
        }}>
          <span className="section-label">Achievements</span>
          <h2 className="section-heading" style={{ marginBottom: "10px" }}>
            Certificates &amp; <span>Awards</span>
          </h2>
          <p style={{ fontSize: "14px", color: "var(--tx2)", maxWidth: "420px", lineHeight: 1.7 }}>
            Academic recognitions and project awards earned throughout my studies at Holy Cross College.
          </p>
        </div>

        {/* filters */}
        <div style={{
          display: "flex", gap: "8px", flexWrap: "wrap", marginBottom: "24px",
          opacity: header.on ? 1 : 0, transition: "opacity .5s ease .1s",
        }}>
          {CATS.map(cat => (
            <button key={cat} className="crt-filter-btn" onClick={() => setFilter(cat)} style={{
              background: filter === cat ? "var(--tx)" : "var(--card)",
              color:      filter === cat ? "var(--bg)" : "var(--tx2)",
              border:     filter === cat ? "1px solid transparent" : "1px solid var(--border-h)",
            }}>{cat}</button>
          ))}
        </div>

        {/* body */}
        <div ref={body.ref} className="crt-body" style={{
          opacity: body.on ? 1 : 0, transform: body.on ? "none" : "translateY(26px)",
          transition: "opacity .65s ease .1s, transform .65s ease .1s",
        }}>

          {/* LEFT — image viewer */}
          <div className="crt-viewer">
            <div className="crt-img-box">
              {cert && (
                <img
                  key={animKey}
                  src={`/certificates/${cert.file}`}
                  alt={cert.title}
                  className="crt-img"
                />
              )}
              {/* vignette — helps arrows stay visible on bright images */}
              <div className="crt-vignette" />

              {list.length > 1 && (
                <>
                  <button className="crt-arrow crt-arrow-l" onClick={prev}><ChevronLeft size={16} /></button>
                  <button className="crt-arrow crt-arrow-r" onClick={next}><ChevronRight size={16} /></button>
                </>
              )}
            </div>

            {/* info bar */}
            <div className="crt-info-bar">
              <span style={{
                display: "inline-flex", alignItems: "center", gap: "5px",
                fontSize: "10px", fontWeight: 700, letterSpacing: ".08em",
                textTransform: "uppercase", padding: "3px 9px", borderRadius: "999px",
                background: meta.bg, color: meta.color, border: `1px solid ${meta.border}`,
                flexShrink: 0,
              }}>
                <Award size={8} />{cert?.category}
              </span>

              <div className="crt-info-main">
                <p className="crt-info-title">{cert?.title}</p>
                <p className="crt-info-sub">{cert?.year}</p>
              </div>

              <span className="crt-counter-chip">{safeIdx + 1}/{list.length}</span>

              <button className="crt-enlarge-btn" onClick={() => setLb(true)}>
                <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round">
                  <path d="M15 3h6v6M9 21H3v-6M21 3l-7 7M3 21l7-7"/>
                </svg>
                Enlarge
              </button>
            </div>
          </div>

          {/* RIGHT — list */}
          <div ref={listRef} className="crt-list">
            {list.map((c, i) => {
              const m = CAT_META[c.category];
              const active = i === safeIdx;
              return (
                <div key={c.file} className={`crt-item${active ? " crt-active" : ""}`} onClick={() => go(i)}>
                  <span className="crt-dot" style={{ background: m?.dot ?? "var(--tx3)" }} />
                  <span className="crt-num">{String(i + 1).padStart(2, "0")}</span>
                  <div className="crt-item-body">
                    <p className="crt-item-title">{c.title}</p>
                    <p className="crt-item-yr">{c.year}</p>
                  </div>
                  <ChevronRight size={12} className="crt-chev" color={active ? "var(--ac-l)" : "var(--tx3)"} />
                </div>
              );
            })}
          </div>
        </div>
      </div>

      {/* lightbox */}
      {lightbox && cert && (
        <div className="crt-lb" onClick={() => setLb(false)}>
          <div className="crt-lb-wrap" onClick={e => e.stopPropagation()}>
            <button className="crt-lb-close" onClick={() => setLb(false)}><X size={14} /></button>
            <img key={`lb-${animKey}`} src={`/certificates/${cert.file}`} alt={cert.title} className="crt-lb-img" />
            <div style={{ textAlign: "center" }}>
              <p style={{ fontSize: "14px", fontWeight: 700, color: "#fff", marginBottom: "4px" }}>{cert.title}</p>
              <p style={{ fontSize: "11px", color: "rgba(255,255,255,.45)", fontFamily: "monospace" }}>{cert.category} · {cert.year}</p>
            </div>
          </div>
          {list.length > 1 && (
            <>
              <button className="crt-lb-nav" style={{ left: "16px" }} onClick={e => { e.stopPropagation(); prev(); }}><ChevronLeft size={20} /></button>
              <button className="crt-lb-nav" style={{ right: "16px" }} onClick={e => { e.stopPropagation(); next(); }}><ChevronRight size={20} /></button>
            </>
          )}
          <div className="crt-lb-cnt">{safeIdx + 1} / {list.length}</div>
        </div>
      )}
    </section>
  );
}