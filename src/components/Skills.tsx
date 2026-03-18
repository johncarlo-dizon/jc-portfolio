"use client";
import { useEffect, useRef, useState } from "react";
import { softSkills } from "@/lib/data";
import { ChibiCoder } from "./ChibiScenes";
import { ChevronDown, ChevronUp } from "lucide-react";

function useReveal(threshold = 0.1) {
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

/* ─── SVG logo components (inline, no external deps) ──────────── */

const LogoLaravel = () => (
  <svg viewBox="0 0 50 52" fill="none" xmlns="http://www.w3.org/2000/svg" width="32" height="32">
    <path d="M49.626 11.564a.809.809 0 0 1 .028.209v10.972a.8.8 0 0 1-.402.694l-9.209 5.302V39.25c0 .286-.152.55-.4.694L20.42 51.01c-.044.025-.092.041-.14.058-.018.006-.035.017-.054.022a.805.805 0 0 1-.41 0c-.022-.006-.042-.018-.063-.026-.044-.016-.09-.03-.132-.054L.402 39.944A.801.801 0 0 1 0 39.25V6.255c0-.073.01-.146.028-.216.007-.027.02-.053.028-.079.016-.05.032-.1.06-.147.023-.037.053-.07.082-.105.026-.031.051-.064.082-.09.024-.02.055-.036.082-.054.033-.02.064-.04.1-.057h.002L10.15.828c.25-.143.554-.143.804 0l9.585 5.386h.002c.035.017.066.038.1.057.026.018.056.033.08.054.032.026.056.059.082.09.03.035.059.068.082.105.028.048.043.098.06.147.01.026.02.052.028.079.018.069.028.143.028.216v20.988l8.4-4.84v-10.97c0-.073.01-.146.028-.216.007-.027.02-.053.028-.079.016-.05.032-.1.06-.148.023-.036.053-.07.082-.104.026-.031.051-.064.082-.09.024-.02.055-.036.082-.054.033-.02.064-.04.1-.057h.002l9.584-5.386c.25-.143.554-.143.804 0l9.585 5.386c.037.018.068.038.1.057.028.018.058.034.083.055.03.026.055.058.081.09.03.034.059.067.082.104.028.048.043.097.06.147.01.026.02.052.027.079zm-1.574 10.718v-9.124l-3.928 2.263-4.477 2.577v9.124l8.405-4.84zm-9.586 16.505v-9.13l-4.405 2.53-12.58 7.208v9.216l16.985-9.824zM1.574 7.017v31.234l16.987 9.823v-9.216l-8.874-5.085-.002-.002-.002-.002c-.034-.018-.065-.040-.097-.06-.03-.018-.06-.035-.086-.056-.025-.02-.048-.044-.072-.066-.025-.022-.052-.043-.074-.068-.021-.024-.039-.05-.058-.075-.02-.026-.042-.05-.059-.078-.016-.03-.028-.060-.041-.09-.014-.032-.029-.063-.039-.096-.009-.027-.014-.056-.021-.084-.007-.032-.016-.063-.019-.096-.004-.031-.004-.063-.005-.094 0-.032-.001-.064.001-.095l.005-.09v-.006V9.397L5.502 6.82 1.574 7.017zm8.81-5.992L1.78 5.386l8.404 4.84 8.404-4.84-8.404-4.84zm4.477 29.937l4.476-2.578V7.017l-3.927 2.263-4.477 2.577v22.350l3.928-2.263zm16.987-19.924l-8.404 4.84 8.404 4.84 8.405-4.84-8.405-4.84zm-9.586 5.533v9.125l4.477-2.578 3.928-2.262V11.91l-8.405 4.84zm18.387 3.927l-8.404 4.84v9.131l8.404-4.84v-9.131z" fill="#FF2D20"/>
  </svg>
);

const LogoPHP = () => (
  <svg viewBox="0 0 64 40" xmlns="http://www.w3.org/2000/svg" width="44" height="28">
    <rect width="64" height="40" rx="8" fill="#8892BF"/>
    <text x="32" y="28" textAnchor="middle" fontFamily="Arial Black, sans-serif" fontWeight="900" fontSize="22" fill="white" letterSpacing="1">PHP</text>
  </svg>
);

const LogoFlutter = () => (
  <svg viewBox="0 0 128 128" xmlns="http://www.w3.org/2000/svg" width="32" height="32">
    <path d="M12.3 64.2L76.2 0h39.5L27.9 88.2z" fill="#47C5FB"/>
    <path d="M76.2 128h39.5L81.3 93.6 115.7 59H76.2L41.8 93.6z" fill="#47C5FB"/>
    <path d="M76.2 128h39.5L81.3 93.6z" fill="#00B5F8" opacity=".8"/>
    <path d="M41.8 93.6l20.6 20.6 13.9-20.6-13.9-20.6z" fill="#00569E"/>
    <path d="M41.8 93.6l20.6 20.6-20.6-20.6z" fill="#00B5F8" opacity=".5"/>
    <path d="M76.2 64.4L56.8 83.8l-15-14.8 19.4-19.4z" fill="#47C5FB"/>
  </svg>
);

const LogoJava = () => (
  <svg viewBox="0 0 128 128" xmlns="http://www.w3.org/2000/svg" width="32" height="32">
    <path fill="#0074BD" d="M47.617 98.12s-4.767 2.774 3.397 3.71c9.892 1.13 14.947.968 25.845-1.092 0 0 2.871 1.795 6.873 3.351-24.439 10.47-55.308-.607-36.115-5.969zM44.629 84.455s-5.348 3.959 2.823 4.805c10.567 1.091 18.91 1.18 33.354-1.6 0 0 1.993 2.025 5.132 3.131-29.542 8.64-62.446.68-41.309-6.336z"/>
    <path fill="#EA2D2E" d="M69.802 61.271c6.025 6.935-1.58 13.17-1.58 13.17s15.289-7.891 8.269-17.777c-6.559-9.215-11.587-13.792 15.635-29.58 0 0-42.731 10.67-22.324 34.187z"/>
    <path fill="#0074BD" d="M102.123 108.229s3.529 2.91-3.888 5.159c-14.102 4.272-58.706 5.56-71.094.171-4.451-1.938 3.899-4.625 6.526-5.192 2.739-.593 4.303-.485 4.303-.485-4.953-3.487-32.013 6.85-13.743 9.815 49.821 8.076 90.817-3.637 77.896-9.468zM49.921 70.294s-22.686 5.389-8.033 7.348c6.188.828 18.518.638 30.011-.326 9.39-.789 18.813-2.474 18.813-2.474s-3.308 1.419-5.704 3.053c-23.042 6.061-67.544 3.238-54.731-2.958 10.832-5.239 19.644-4.643 19.644-4.643zM90.239 93.552c23.421-12.167 12.591-23.86 5.032-22.285-1.848.385-2.677.72-2.677.72s.688-1.079 2-1.543c14.953-5.255 26.451 15.503-4.823 23.725 0 .001.359-.327.468-.617z"/>
    <path fill="#EA2D2E" d="M76.491 1.587s12.968 12.97-12.303 32.923c-20.266 16.006-4.621 25.13-.007 35.559-11.831-10.673-20.509-20.07-14.688-28.815 8.549-12.916 32.229-19.198 26.998-39.667z"/>
    <path fill="#0074BD" d="M52.214 126.021c22.476 1.437 57-.8 57.817-11.436 0 0-1.571 4.032-18.577 7.231-19.186 3.612-42.854 3.191-56.887.874 0 .001 2.875 2.381 17.647 3.331z"/>
  </svg>
);

const LogoPostgres = () => (
  <svg viewBox="0 0 128 128" xmlns="http://www.w3.org/2000/svg" width="32" height="32">
    <path fill="#336791" d="M93.809 92.112c.785-6.533.55-7.492 5.416-6.433l1.235.108c3.742.17 8.637-.602 11.513-1.938 6.191-2.873 9.861-7.668 3.758-6.409-13.924 2.873-14.881-1.842-14.881-1.842 14.703-21.815 20.849-49.508 15.543-56.287-14.47-18.489-39.517-9.746-39.927-9.52l-.134.025c-2.751-.571-5.83-.912-9.289-.968-6.301-.104-11.082 1.652-14.709 4.402 0 0-44.683-18.409-42.604 23.17.442 8.841 12.672 66.898 27.26 49.362 5.332-6.412 10.484-11.834 10.484-11.834 2.558 1.699 5.622 2.567 8.834 2.255l.249-.212c-.078.796-.044 1.575.099 2.497-3.757 4.199-2.653 4.936-10.166 6.482-7.602 1.566-3.136 4.355-.22 5.084 3.534.884 11.712 2.136 17.237-5.598l-.221.882c1.473 1.18 2.501 7.672 2.327 13.557-.174 5.885-.29 9.926.871 13.082 1.162 3.156 2.322 10.267 12.231 8.14 8.285-1.79 12.568-6.436 13.166-14.172z"/>
    <path fill="#fff" d="M85.444 96.297c-1.476 10.975-1.015 12.391.487 12.391.997 0 1.944-.282 2.84-.845l-.027-.025-.027-.024c1.176-.796 2.343-2.122 3.504-3.949.822-1.298 1.692-2.922 2.611-4.874.093-1.298.13-2.597.108-3.897-.092-5.479-.879-9.428-1.672-11.886-1.005-2.892-.888-4.272-.641-4.717.245-.444-.048-.741-.786-.761-.998-.004-2.122.399-3.188.958-1.065.559-1.955 1.348-2.51 2.163-.543.801-.66 1.571-.34 2.319.342.78.765 3.374.641 12.147z"/>
    <path fill="#fff" d="M66.916 89.548c-.256 2.613.201 12.358.843 16.449.643 4.091 1.561 12.39 7.773 11.078 6.213-1.312 8.404-5.096 8.891-12.527.487-7.431.456-11.987-.133-13.997-.589-2.01-1.174-5.285-6.613-4.89-5.439.395-10.485 1.274-10.761 3.887z"/>
    <path fill="#336791" d="M58.665 48.5c-.743 4.975.088 9.621.074 9.621.029-.014-.411-4.518 2.016-8.574 2.427-4.057 6.759-5.611 9.903-7.104 3.144-1.494 8.107-3.695 13.553-3.32-5.445-.462-11.078.648-15.045 3.027-3.967 2.379-9.756 2.375-10.501 6.35z"/>
    <path fill="#fff" d="M68.574 35.785c-6.012-.131-9.931 2.131-12.079 4.048-2.148 1.916-4.305 5.765-4.744 10.255-.438 4.49.263 8.785.263 8.785-.04-1.148-.097-4.451 1.109-7.836 1.207-3.384 3.599-7.208 7.836-9.327 4.238-2.119 9.571-2.601 15.228-.883-5.002-3.163-7.613-5.042-7.613-5.042z"/>
    <path fill="#fff" d="M48.128 54.285c-.146-13.25 10.29-22.013 23.424-22.366-3.286-.434-7.183-.105-11.067 1.367-3.884 1.472-9.282 5.453-11.543 11.178-2.262 5.725-1.869 11.416-.814 9.821z"/>
    <path fill="#fff" d="M40.979 57.048c.498-13.836 11.36-23.428 25.484-23.428-3.567-.457-7.791.125-11.983 1.737-4.192 1.611-9.986 5.87-12.306 12.039-2.32 6.168-2.16 12.04-.814 10.595-.381-.943-.381-.943-.381-.943z"/>
  </svg>
);

const LogoMySQL = () => (
  <svg viewBox="0 0 80 46" xmlns="http://www.w3.org/2000/svg" width="48" height="28">
    <rect width="80" height="46" rx="7" fill="#00618A"/>
    <path d="M10 35 Q14 24 20 29 Q16 18 25 16 Q22 27 29 25 Q27 33 20 35Z" fill="#E48E00"/>
    <text x="52" y="31" textAnchor="middle" fontFamily="Arial Black, sans-serif" fontWeight="900" fontSize="14" fill="white">MySQL</text>
  </svg>
);

const LogoGit = () => (
  <svg viewBox="0 0 128 128" xmlns="http://www.w3.org/2000/svg" width="32" height="32">
    <path fill="#F34F29" d="M124.737 58.378L69.621 3.264c-3.172-3.174-8.32-3.174-11.497 0L46.68 14.71l14.518 14.518c3.375-1.139 7.243-.375 9.932 2.314 2.703 2.706 3.462 6.607 2.293 9.993l13.992 13.993c3.385-1.167 7.292-.413 9.994 2.295 3.78 3.777 3.78 9.9 0 13.679a9.673 9.673 0 0 1-13.683 0 9.677 9.677 0 0 1-2.105-10.521L68.574 47.933l-.002 34.341a9.708 9.708 0 0 1 2.559 1.828c3.778 3.777 3.778 9.898 0 13.683-3.779 3.777-9.904 3.777-13.679 0-3.778-3.785-3.778-9.906 0-13.683a9.65 9.65 0 0 1 3.167-2.11V47.333a9.581 9.581 0 0 1-3.167-2.111c-2.862-2.86-3.551-7.06-2.083-10.576L41.056 20.333 3.264 58.123a8.133 8.133 0 0 0 0 11.5l55.117 55.114c3.174 3.174 8.32 3.174 11.499 0l54.858-54.858a8.135 8.135 0 0 0-.001-11.501z"/>
  </svg>
);

const LogoReact = () => (
  <svg viewBox="0 0 128 128" xmlns="http://www.w3.org/2000/svg" width="36" height="36">
    <g fill="#61DAFB">
      <circle cx="64" cy="64" r="11.4"/>
      <path d="M107.3 45.2c-2.2-.8-4.5-1.6-6.9-2.3.6-2.4 1.1-4.8 1.5-7.1 2.1-13.2-.2-22.5-6.6-26.1-1.9-1.1-4-1.6-6.4-1.6-7 0-15.9 5.2-24.9 13.9-9-8.7-17.9-13.9-24.9-13.9-2.4 0-4.5.5-6.4 1.6-6.4 3.7-8.7 13-6.6 26.1.4 2.3.9 4.7 1.5 7.1-2.4.7-4.7 1.4-6.9 2.3C8.2 50 1.4 56.6 1.4 64s6.8 14 19.3 18.8c2.2.8 4.5 1.6 6.9 2.3-.6 2.4-1.1 4.8-1.5 7.1-2.1 13.2.2 22.5 6.6 26.1 1.9 1.1 4 1.6 6.4 1.6 7.1 0 16-5.2 24.9-13.9 9 8.7 17.9 13.9 24.9 13.9 2.4 0 4.5-.5 6.4-1.6 6.4-3.7 8.7-13 6.6-26.1-.4-2.3-.9-4.7-1.5-7.1 2.4-.7 4.7-1.4 6.9-2.3 12.5-4.8 19.3-11.4 19.3-18.8s-6.8-14-19.3-18.8zM92.5 14.7c4.1 2.4 5.5 9.8 3.8 20.3-.3 2.1-.8 4.3-1.4 6.6-5.2-1.2-10.7-2-16.5-2.5-3.4-4.8-6.9-9.1-10.4-13 7.4-7.3 14.9-12.3 21-12.3 1.3 0 2.5.3 3.5.9zM81.3 74c-1.8 3.2-3.9 6.4-6.1 9.6-3.7.3-7.4.4-11.2.4-3.9 0-7.6-.1-11.2-.4-2.2-3.2-4.2-6.4-6-9.6-1.9-3.3-3.7-6.7-5.3-10 1.6-3.3 3.4-6.7 5.3-10 1.8-3.2 3.9-6.4 6.1-9.6 3.7-.3 7.4-.4 11.2-.4 3.9 0 7.6.1 11.2.4 2.2 3.2 4.2 6.4 6 9.6 1.9 3.3 3.7 6.7 5.3 10-1.7 3.3-3.4 6.6-5.3 10zm8.3-3.3c1.5 3.5 2.7 6.9 3.8 10.3-3.4.8-7 1.4-10.8 1.9 1.2-1.9 2.5-3.9 3.6-6 1.2-2.1 2.3-4.2 3.4-6.2zM64 97.8c-2.4-2.6-4.7-5.4-6.9-8.3 2.3.1 4.6.2 6.9.2 2.3 0 4.6-.1 6.9-.2-2.2 2.9-4.5 5.7-6.9 8.3zm-18.6-15c-3.8-.5-7.4-1.1-10.8-1.9 1.1-3.3 2.3-6.8 3.8-10.3 1.1 2 2.2 4.1 3.4 6.1 1.2 2.2 2.4 4.1 3.6 6.1zm-7-25.5c-1.5-3.5-2.7-6.9-3.8-10.3 3.4-.8 7-1.4 10.8-1.9-1.2 1.9-2.5 3.9-3.6 6-1.2 2.1-2.3 4.2-3.4 6.2zM64 30.2c2.4 2.6 4.7 5.4 6.9 8.3-2.3-.1-4.6-.2-6.9-.2-2.3 0-4.6.1-6.9.2 2.2-2.9 4.5-5.7 6.9-8.3zm22.2 21l-3.6-6c3.8.5 7.4 1.1 10.8 1.9-1.1 3.3-2.3 6.8-3.8 10.3-1.1-2-2.2-4.1-3.4-6.2zM31.7 35c-1.7-10.5-.3-17.9 3.8-20.3 1-.6 2.2-.9 3.5-.9 6 0 13.5 4.9 21 12.3-3.5 3.8-7 8.2-10.4 13-5.8.5-11.3 1.4-16.5 2.5-.6-2.3-1-4.5-1.4-6.6zM7 64c0-4.7 5.7-9.7 15.7-13.4 2-.8 4.2-1.5 6.4-2.1 1.6 5 3.6 10.3 6 15.6-2.4 5.3-4.5 10.5-6 15.5C15.3 75.6 7 69.6 7 64zm28.5 49.3c-4.1-2.4-5.5-9.8-3.8-20.3.3-2.1.8-4.3 1.4-6.6 5.2 1.2 10.7 2 16.5 2.5 3.4 4.8 6.9 9.1 10.4 13-7.4 7.3-14.9 12.3-21 12.3-1.3 0-2.5-.3-3.5-.9zM96.3 93c1.7 10.5.3 17.9-3.8 20.3-1 .6-2.2.9-3.5.9-6 0-13.5-4.9-21-12.3 3.5-3.8 7-8.2 10.4-13 5.8-.5 11.3-1.4 16.5-2.5.6 2.3 1 4.5 1.4 6.6zm9.4-20.7c-2 .8-4.2 1.5-6.4 2.1-1.6-5-3.6-10.3-6-15.6 2.4-5.3 4.5-10.5 6-15.5 13.8 4 22.1 10 22.1 15.7-.1 4.7-5.8 9.7-15.7 13.3z"/>
    </g>
  </svg>
);

/* ─── Featured 8 with real logos ──────────────────────────────── */
const FEATURED = [
  { name: "Laravel",    desc: "PHP Framework",       Logo: LogoLaravel,  glow: "rgba(255,45,32,0.15)"  },
  { name: "PHP",        desc: "Server-side",         Logo: LogoPHP,      glow: "rgba(97,129,182,0.15)" },
  { name: "Flutter",    desc: "Cross-platform",      Logo: LogoFlutter,  glow: "rgba(71,197,251,0.15)" },
  { name: "Java",       desc: "Desktop & Backend",   Logo: LogoJava,     glow: "rgba(0,116,189,0.15)"  },
  { name: "PostgreSQL", desc: "Relational DB",       Logo: LogoPostgres, glow: "rgba(51,103,145,0.15)" },
  { name: "MySQL",      desc: "Relational DB",       Logo: LogoMySQL,    glow: "rgba(0,97,138,0.15)"   },
  { name: "Git",        desc: "Version Control",     Logo: LogoGit,      glow: "rgba(243,79,41,0.15)"  },
  { name: "React",      desc: "UI Framework",        Logo: LogoReact,    glow: "rgba(97,218,251,0.15)" },
];

/* ─── Extra skills (shown in "View All") ─────────────────────── */
const EXTRA_GROUPS = [
  { category: "Frontend", items: ["Next.js", "JavaScript", "TypeScript", "PHP (native)", "Java Swing"] },
  { category: "Backend",  items: ["CodeIgniter 4", "Django", "Spring Boot", "RESTful APIs"] },
  { category: "Mobile",   items: ["Dart", "PHP REST API", "Play Store Deployment"] },
  { category: "Tools",    items: ["Supabase", "Docker", "Vercel"] },
];

export default function Skills() {
  const header  = useReveal();
  const feat    = useReveal(0.06);
  const soft    = useReveal();
  const chibi   = useReveal(0.04);
  const [expanded, setExpanded] = useState(false);
  const [hovered, setHovered]   = useState<number | null>(null);

  return (
    <section id="skills" style={{ padding: "5rem 0", background: "var(--bg2)", position: "relative", overflow: "hidden" }}>
      <style>{`
        /* ── featured grid ── */
        .sk-grid {
          display: grid;
          grid-template-columns: repeat(4, 1fr);
          gap: 14px;
          margin-bottom: 20px;
        }
        .sk-card {
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;
          gap: 10px;
          padding: 22px 14px 18px;
          border-radius: 16px;
          background: var(--card);
          border: 1px solid var(--border);
          cursor: default;
          transition: transform .28s cubic-bezier(.34,1.56,.64,1),
                      box-shadow .25s ease,
                      background .2s,
                      border-color .2s;
          text-align: center;
          position: relative;
          overflow: hidden;
        }
        .sk-card::before {
          content: '';
          position: absolute;
          inset: 0;
          opacity: 0;
          transition: opacity .3s ease;
          border-radius: inherit;
        }
        .sk-card:hover {
          transform: translateY(-6px) scale(1.03);
          border-color: var(--border-h);
        }
        .sk-card:hover::before { opacity: 1; }
        .sk-logo-wrap {
          width: 52px; height: 52px;
          display: flex; align-items: center; justify-content: center;
          border-radius: 12px;
          background: var(--bg3);
          border: 1px solid var(--border-h);
          transition: background .2s, border-color .2s, transform .25s;
          flex-shrink: 0;
        }
        .sk-card:hover .sk-logo-wrap {
          transform: scale(1.08);
        }
        .sk-name {
          font-size: 13px;
          font-weight: 700;
          color: var(--tx);
          line-height: 1.2;
        }
        .sk-desc {
          font-size: 10px;
          color: var(--tx3);
          letter-spacing: .04em;
        }
        /* ── extra groups ── */
        .sk-extra-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(210px, 1fr));
          gap: 12px;
        }
        .sk-extra-collapse {
          overflow: hidden;
          transition: max-height .5s cubic-bezier(.4,0,.2,1), opacity .4s ease, margin .4s ease;
        }
        /* ── toggle btn ── */
        .sk-toggle {
          display: inline-flex; align-items: center; gap: 6px;
          padding: 9px 20px; border-radius: 999px;
          font-size: 13px; font-weight: 600;
          color: var(--tx2); background: var(--card);
          border: 1px solid var(--border-h);
          cursor: pointer; transition: all .2s;
          font-family: 'Inter', sans-serif;
        }
        .sk-toggle:hover {
          background: var(--ac-dim); border-color: var(--ac-b); color: var(--tx);
        }
        /* ── chibi ── */
        .sk-chibi-wrap {
          display: flex; justify-content: center; align-items: flex-end; margin-top: 8px;
        }
        /* ── responsive ── */
        @media (max-width:900px) { .sk-grid { grid-template-columns: repeat(4, 1fr) !important; } }
        @media (max-width:640px) {
          .sk-grid { grid-template-columns: repeat(2, 1fr) !important; }
          .sk-card { padding: 18px 10px 14px !important; }
          .sk-logo-wrap { width: 44px !important; height: 44px !important; }
          .sk-extra-grid { grid-template-columns: 1fr !important; }
          .sk-chibi-wrap { display: none !important; }
        }
        @media (max-width:400px) { .sk-grid { grid-template-columns: repeat(2, 1fr) !important; } }
      `}</style>

      <div style={{ maxWidth: "1200px", margin: "0 auto", padding: "0 1.25rem", position: "relative", zIndex: 1 }}>

        {/* Header */}
        <div ref={header.ref} style={{
          marginBottom: "32px",
          opacity: header.on ? 1 : 0, transform: header.on ? "none" : "translateY(24px)",
          transition: "opacity .6s ease, transform .6s ease",
        }}>
          <span className="section-label">Technical Skills</span>
          <h2 className="section-heading">Technologies<br /><span>I Work With</span></h2>
        </div>

        {/* Featured 8 */}
        <div ref={feat.ref} className="sk-grid">
          {FEATURED.map((sk, i) => (
            <div
              key={sk.name}
              className="sk-card"
              style={{
                opacity: feat.on ? 1 : 0,
                transform: feat.on ? "none" : "translateY(24px) scale(.95)",
                transition: `opacity .5s ease ${i * .07}s, transform .5s ease ${i * .07}s`,
                boxShadow: hovered === i ? `0 14px 40px ${sk.glow}` : "none",
              }}
              onMouseEnter={() => setHovered(i)}
              onMouseLeave={() => setHovered(null)}
            >
              {/* glow pseudo-element done via inline style */}
              <div style={{
                position: "absolute", inset: 0, borderRadius: "16px",
                background: `radial-gradient(circle at 50% 0%, ${sk.glow}, transparent 70%)`,
                opacity: hovered === i ? 1 : 0, transition: "opacity .3s ease",
                pointerEvents: "none",
              }} />
              <div className="sk-logo-wrap" style={{
                background: hovered === i ? sk.glow.replace("0.15", "0.1") : "var(--bg3)",
                borderColor: hovered === i ? "var(--border-h)" : "var(--border)",
              }}>
                <sk.Logo />
              </div>
              <span className="sk-name">{sk.name}</span>
              <span className="sk-desc">{sk.desc}</span>
            </div>
          ))}
        </div>

        {/* View All toggle */}
        <div style={{
          display: "flex", justifyContent: "center",
          marginBottom: expanded ? "20px" : "32px",
          opacity: feat.on ? 1 : 0, transition: "opacity .6s ease .5s",
        }}>
          <button className="sk-toggle" onClick={() => setExpanded(e => !e)}>
            {expanded ? <><ChevronUp size={14} /> Show Less</> : <><ChevronDown size={14} /> View All Skills</>}
          </button>
        </div>

        {/* Extra skills */}
        <div className="sk-extra-collapse" style={{
          maxHeight: expanded ? "600px" : "0",
          opacity: expanded ? 1 : 0,
          marginBottom: expanded ? "28px" : "0",
        }}>
          <div className="sk-extra-grid">
            {EXTRA_GROUPS.map(group => (
              <div key={group.category} style={{
                borderRadius: "14px", padding: "16px 18px",
                background: "var(--card)", border: "1px solid var(--border)",
              }}>
                <div style={{ display: "flex", alignItems: "center", gap: "8px", marginBottom: "12px" }}>
                  <div style={{ width: "3px", height: "14px", background: "linear-gradient(180deg,var(--tx),var(--tx3))", borderRadius: "2px" }} />
                  <h3 style={{ fontSize: "10px", fontWeight: 700, letterSpacing: ".16em", textTransform: "uppercase", color: "var(--tx3)", margin: 0 }}>{group.category}</h3>
                </div>
                <div style={{ display: "flex", flexWrap: "wrap", gap: "7px" }}>
                  {group.items.map(skill => (
                    <span key={skill} style={{
                      padding: "5px 12px", fontSize: "12px", fontWeight: 500, borderRadius: "8px",
                      background: "var(--bg3)", border: "1px solid var(--border-h)", color: "var(--tx2)",
                      cursor: "default", transition: "all .2s",
                    }}
                      onMouseEnter={e => { const el = e.currentTarget as HTMLElement; el.style.background = "var(--ac-dim)"; el.style.borderColor = "var(--ac-b)"; el.style.color = "var(--tx)"; el.style.transform = "translateY(-2px)"; }}
                      onMouseLeave={e => { const el = e.currentTarget as HTMLElement; el.style.background = "var(--bg3)"; el.style.borderColor = "var(--border-h)"; el.style.color = "var(--tx2)"; el.style.transform = "none"; }}
                    >{skill}</span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Soft Skills */}
        <div ref={soft.ref} style={{
          opacity: soft.on ? 1 : 0, transform: soft.on ? "none" : "translateY(20px)",
          transition: "opacity .6s ease, transform .6s ease", marginBottom: "8px",
        }}>
          <p style={{ fontSize: "10px", fontWeight: 700, letterSpacing: ".16em", textTransform: "uppercase", color: "var(--tx3)", marginBottom: "14px", textAlign: "center" }}>
            Soft Skills
          </p>
          <div style={{ display: "flex", flexWrap: "wrap", justifyContent: "center", gap: "8px" }}>
            {softSkills.map((s, i) => (
              <span key={s} style={{
                padding: "7px 16px", fontSize: "13px", fontWeight: 500, borderRadius: "999px",
                background: "var(--card)", border: "1px solid var(--border-h)", color: "var(--tx2)",
                opacity: soft.on ? 1 : 0, transform: soft.on ? "none" : "scale(.9)",
                transition: `opacity .4s ease ${i * .06}s, transform .4s ease ${i * .06}s`, cursor: "default",
              }}
                onMouseEnter={e => { const el = e.currentTarget as HTMLElement; el.style.color = "var(--tx)"; el.style.background = "var(--ac-dim)"; el.style.transform = "translateY(-2px)"; }}
                onMouseLeave={e => { const el = e.currentTarget as HTMLElement; el.style.color = "var(--tx2)"; el.style.background = "var(--card)"; el.style.transform = "none"; }}
              >{s}</span>
            ))}
          </div>
        </div>

        {/* Chibi */}
        <div ref={chibi.ref} className="sk-chibi-wrap" style={{
          opacity: chibi.on ? 1 : 0, transform: chibi.on ? "none" : "translateY(30px)",
          transition: "opacity .7s ease .3s, transform .7s ease .3s",
        }}>
          <div style={{ position: "relative" }}>
            <div style={{ position: "absolute", bottom: "8px", left: "50%", transform: "translateX(-50%)", width: "300px", height: "1px", background: "var(--border-h)" }} />
            <ChibiCoder />
          </div>
        </div>
      </div>
    </section>
  );
}