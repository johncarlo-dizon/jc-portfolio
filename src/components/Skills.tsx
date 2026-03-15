"use client";
import { skills } from "@/lib/data";
import { useEffect, useState } from "react";

// Chibi coder SVG animation component
function ChibiCoder() {
  return (
    <div className="chibi-wrapper">
      <style>{`
        .chibi-wrapper {
          position: relative;
          width: 260px;
          height: 200px;
          flex-shrink: 0;
        }

        /* Desk */
        .desk {
          position: absolute;
          bottom: 10px;
          left: 50%;
          transform: translateX(-50%);
          width: 240px;
          height: 14px;
          background: linear-gradient(180deg, #3d2b1f 0%, #2a1d14 100%);
          border-radius: 4px 4px 2px 2px;
          box-shadow: 0 4px 12px rgba(0,0,0,0.5);
        }
        .desk-leg {
          position: absolute;
          bottom: -28px;
          width: 10px;
          height: 28px;
          background: #2a1d14;
          border-radius: 0 0 3px 3px;
        }
        .desk-leg.left { left: 20px; }
        .desk-leg.right { right: 20px; }

        /* Monitors */
        .monitor {
          position: absolute;
          bottom: 24px;
          background: #1a1a2e;
          border-radius: 6px 6px 3px 3px;
          border: 2px solid #2d2d4e;
          overflow: hidden;
          box-shadow: 0 0 15px rgba(99,102,241,0.3), inset 0 0 8px rgba(0,0,0,0.5);
        }
        .monitor.left {
          width: 72px;
          height: 50px;
          left: 8px;
          transform: perspective(200px) rotateY(12deg);
        }
        .monitor.right {
          width: 72px;
          height: 50px;
          right: 8px;
          transform: perspective(200px) rotateY(-12deg);
        }
        .monitor-screen {
          width: 100%;
          height: 100%;
          padding: 4px;
          display: flex;
          flex-direction: column;
          gap: 2px;
          overflow: hidden;
        }
        .code-line {
          height: 3px;
          border-radius: 2px;
          background: rgba(99,102,241,0.6);
          animation: codePulse 2s ease-in-out infinite;
        }
        .code-line:nth-child(1) { width: 80%; animation-delay: 0s; }
        .code-line:nth-child(2) { width: 60%; animation-delay: 0.15s; background: rgba(139,92,246,0.5); }
        .code-line:nth-child(3) { width: 90%; animation-delay: 0.3s; }
        .code-line:nth-child(4) { width: 50%; animation-delay: 0.45s; background: rgba(34,211,238,0.4); }
        .code-line:nth-child(5) { width: 70%; animation-delay: 0.6s; }
        .code-line:nth-child(6) { width: 40%; animation-delay: 0.75s; background: rgba(139,92,246,0.5); }
        .code-line:nth-child(7) { width: 85%; animation-delay: 0.9s; }
        .code-line:nth-child(8) { width: 55%; animation-delay: 1.05s; background: rgba(34,211,238,0.4); }

        @keyframes codePulse {
          0%, 100% { opacity: 0.4; }
          50% { opacity: 1; }
        }

        /* Cursor blink on left monitor */
        .cursor {
          position: absolute;
          bottom: 40px;
          left: 22px;
          width: 2px;
          height: 5px;
          background: #22d3ee;
          border-radius: 1px;
          animation: blink 1s step-end infinite;
        }
        @keyframes blink { 0%,100%{opacity:1} 50%{opacity:0} }

        /* Keyboard glow */
        .keyboard {
          position: absolute;
          bottom: 22px;
          left: 50%;
          transform: translateX(-50%);
          width: 60px;
          height: 12px;
          background: linear-gradient(180deg, #23232f 0%, #1a1a25 100%);
          border-radius: 3px;
          border: 1px solid #2d2d4e;
          box-shadow: 0 0 8px rgba(99,102,241,0.2);
          z-index: 10;
        }
        .keyboard::after {
          content: '';
          position: absolute;
          inset: 2px;
          background: repeating-linear-gradient(
            90deg,
            rgba(99,102,241,0.3) 0px,
            rgba(99,102,241,0.3) 3px,
            transparent 3px,
            transparent 6px
          );
          border-radius: 1px;
          animation: keyGlow 0.3s ease infinite alternate;
        }
        @keyframes keyGlow {
          from { opacity: 0.5; }
          to { opacity: 1; }
        }

        /* Chibi character body */
        .chibi {
          position: absolute;
          bottom: 28px;
          left: 50%;
          transform: translateX(-50%);
          z-index: 5;
        }

        /* Head */
        .chibi-head {
          width: 38px;
          height: 38px;
          background: linear-gradient(160deg, #fdd9b5 60%, #f5b97c 100%);
          border-radius: 50%;
          position: relative;
          margin: 0 auto;
          animation: headBob 2s ease-in-out infinite;
          box-shadow: 0 2px 8px rgba(0,0,0,0.3);
        }
        @keyframes headBob {
          0%, 100% { transform: translateY(0) rotate(-3deg); }
          50% { transform: translateY(-3px) rotate(3deg); }
        }

        /* Hair */
        .chibi-hair {
          position: absolute;
          top: -4px;
          left: -3px;
          right: -3px;
          height: 20px;
          background: #1a0a00;
          border-radius: 50% 50% 0 0;
          z-index: 1;
        }
        .chibi-hair::after {
          content: '';
          position: absolute;
          top: 12px;
          right: -5px;
          width: 10px;
          height: 16px;
          background: #1a0a00;
          border-radius: 0 50% 50% 0;
        }
        .chibi-hair::before {
          content: '';
          position: absolute;
          top: 10px;
          left: -2px;
          width: 8px;
          height: 14px;
          background: #1a0a00;
          border-radius: 50% 0 50% 50%;
        }

        /* Eyes */
        .chibi-eyes {
          position: absolute;
          top: 16px;
          left: 0;
          right: 0;
          display: flex;
          justify-content: center;
          gap: 8px;
          z-index: 2;
          animation: eyeBlink 4s ease-in-out infinite;
        }
        .chibi-eye {
          width: 6px;
          height: 7px;
          background: #1a0a00;
          border-radius: 50%;
          position: relative;
        }
        .chibi-eye::after {
          content: '';
          position: absolute;
          top: 1px;
          right: 1px;
          width: 2px;
          height: 2px;
          background: white;
          border-radius: 50%;
        }
        @keyframes eyeBlink {
          0%, 90%, 100% { transform: scaleY(1); }
          95% { transform: scaleY(0.1); }
        }

        /* Mouth */
        .chibi-mouth {
          position: absolute;
          bottom: 8px;
          left: 50%;
          transform: translateX(-50%);
          width: 10px;
          height: 5px;
          border-bottom: 2px solid #c97b5a;
          border-radius: 0 0 50% 50%;
          z-index: 2;
        }

        /* Ears */
        .chibi-ear {
          position: absolute;
          top: 12px;
          width: 8px;
          height: 10px;
          background: #fdd9b5;
          border-radius: 50%;
        }
        .chibi-ear.left { left: -3px; }
        .chibi-ear.right { right: -3px; }

        /* Headphones */
        .chibi-headphones {
          position: absolute;
          top: -2px;
          left: -5px;
          right: -5px;
          height: 14px;
          border: 3px solid #4f46e5;
          border-bottom: none;
          border-radius: 50% 50% 0 0;
          z-index: 3;
        }
        .chibi-headphones::before {
          content: '';
          position: absolute;
          bottom: -8px;
          left: -5px;
          width: 8px;
          height: 8px;
          background: #4f46e5;
          border-radius: 3px;
        }
        .chibi-headphones::after {
          content: '';
          position: absolute;
          bottom: -8px;
          right: -5px;
          width: 8px;
          height: 8px;
          background: #4f46e5;
          border-radius: 3px;
        }

        /* Body */
        .chibi-body {
          width: 36px;
          height: 30px;
          background: linear-gradient(160deg, #312e81 0%, #1e1b4b 100%);
          border-radius: 8px 8px 4px 4px;
          margin: 0 auto;
          position: relative;
          margin-top: -2px;
        }
        .chibi-body::before {
          content: '';
          position: absolute;
          top: 4px;
          left: 50%;
          transform: translateX(-50%);
          width: 14px;
          height: 10px;
          border: 1.5px solid rgba(99,102,241,0.5);
          border-radius: 0 0 50% 50%;
        }

        /* Arms */
        .chibi-arm {
          position: absolute;
          top: 4px;
          width: 12px;
          height: 22px;
          background: linear-gradient(160deg, #312e81 0%, #1e1b4b 100%);
          border-radius: 6px;
        }
        .chibi-arm.left {
          left: -10px;
          transform-origin: top center;
          animation: leftArm 0.4s ease-in-out infinite alternate;
        }
        .chibi-arm.right {
          right: -10px;
          transform-origin: top center;
          animation: rightArm 0.4s ease-in-out infinite alternate;
        }
        @keyframes leftArm {
          from { transform: rotate(25deg); }
          to { transform: rotate(35deg); }
        }
        @keyframes rightArm {
          from { transform: rotate(-30deg); }
          to { transform: rotate(-20deg); }
        }

        /* Hands */
        .chibi-hand {
          position: absolute;
          bottom: -4px;
          left: 50%;
          transform: translateX(-50%);
          width: 9px;
          height: 9px;
          background: #fdd9b5;
          border-radius: 50%;
        }

        /* Legs */
        .chibi-legs {
          display: flex;
          justify-content: center;
          gap: 4px;
          margin-top: -1px;
        }
        .chibi-leg {
          width: 13px;
          height: 16px;
          background: #1e1b4b;
          border-radius: 4px 4px 6px 6px;
          position: relative;
          animation: legSwing 2s ease-in-out infinite;
        }
        .chibi-leg:nth-child(2) { animation-delay: 0.1s; }
        .chibi-leg::after {
          content: '';
          position: absolute;
          bottom: -4px;
          left: -2px;
          width: 16px;
          height: 7px;
          background: #312e81;
          border-radius: 3px 5px 5px 3px;
        }
        @keyframes legSwing {
          0%, 100% { transform: none; }
          50% { transform: translateY(1px); }
        }

        /* Coffee cup */
        .coffee {
          position: absolute;
          bottom: 24px;
          right: 90px;
          z-index: 10;
        }
        .coffee-cup {
          width: 14px;
          height: 14px;
          background: #c8a97e;
          border-radius: 1px 1px 4px 4px;
          position: relative;
        }
        .coffee-cup::before {
          content: '';
          position: absolute;
          top: 2px;
          left: 1px;
          right: 1px;
          height: 4px;
          background: #6b3f1f;
          border-radius: 2px;
        }
        .coffee-cup::after {
          content: '';
          position: absolute;
          right: -5px;
          top: 4px;
          width: 6px;
          height: 6px;
          border: 2px solid #c8a97e;
          border-radius: 0 50% 50% 0;
          border-left: none;
        }
        .steam {
          position: absolute;
          top: -10px;
          left: 2px;
          display: flex;
          gap: 3px;
        }
        .steam-line {
          width: 2px;
          height: 8px;
          background: rgba(255,255,255,0.3);
          border-radius: 2px;
          animation: steam 1.5s ease-in-out infinite;
        }
        .steam-line:nth-child(2) { animation-delay: 0.5s; height: 6px; }
        @keyframes steam {
          0% { transform: translateY(0) scaleX(1); opacity: 0.3; }
          50% { transform: translateY(-5px) scaleX(1.5); opacity: 0.6; }
          100% { transform: translateY(-10px) scaleX(0.5); opacity: 0; }
        }

        /* Glow effects */
        .monitor-glow {
          position: absolute;
          bottom: 24px;
          width: 80px;
          height: 60px;
          border-radius: 6px;
          pointer-events: none;
          filter: blur(12px);
          opacity: 0.15;
          background: #6366f1;
          animation: glowPulse 2s ease-in-out infinite;
        }
        .monitor-glow.left { left: 4px; }
        .monitor-glow.right { right: 4px; }
        @keyframes glowPulse {
          0%, 100% { opacity: 0.12; }
          50% { opacity: 0.22; }
        }
      `}</style>

      <div className="monitor-glow left" />
      <div className="monitor-glow right" />

      <div className="monitor left">
        <div className="monitor-screen">
          {[...Array(8)].map((_, i) => <div key={i} className="code-line" />)}
        </div>
        <div className="cursor" />
      </div>

      <div className="monitor right">
        <div className="monitor-screen">
          {[...Array(8)].map((_, i) => <div key={i} className="code-line" />)}
        </div>
      </div>

      <div className="keyboard" />

      <div className="coffee">
        <div className="steam">
          <div className="steam-line" />
          <div className="steam-line" />
        </div>
        <div className="coffee-cup" />
      </div>

      <div className="chibi">
        <div className="chibi-head">
          <div className="chibi-hair" />
          <div className="chibi-ear left" />
          <div className="chibi-ear right" />
          <div className="chibi-headphones" />
          <div className="chibi-eyes">
            <div className="chibi-eye" />
            <div className="chibi-eye" />
          </div>
          <div className="chibi-mouth" />
        </div>
        <div className="chibi-body">
          <div className="chibi-arm left"><div className="chibi-hand" /></div>
          <div className="chibi-arm right"><div className="chibi-hand" /></div>
        </div>
        <div className="chibi-legs">
          <div className="chibi-leg" />
          <div className="chibi-leg" />
        </div>
      </div>

      <div className="desk">
        <div className="desk-leg left" />
        <div className="desk-leg right" />
      </div>
    </div>
  );
}

function SkillTag({ name }: { name: string }) {
  return (
    <span
      style={{
        display: "inline-block",
        padding: "6px 14px",
        fontSize: "13px",
        fontWeight: 500,
        borderRadius: "8px",
        background: "rgba(99,102,241,0.08)",
        border: "1px solid rgba(99,102,241,0.18)",
        color: "#a5b4fc",
        transition: "all 0.2s ease",
        cursor: "default",
        letterSpacing: "0.01em",
      }}
      onMouseEnter={e => {
        const el = e.currentTarget as HTMLElement;
        el.style.background = "rgba(99,102,241,0.18)";
        el.style.borderColor = "rgba(99,102,241,0.5)";
        el.style.color = "#c7d2fe";
        el.style.transform = "translateY(-2px)";
        el.style.boxShadow = "0 4px 15px rgba(99,102,241,0.2)";
      }}
      onMouseLeave={e => {
        const el = e.currentTarget as HTMLElement;
        el.style.background = "rgba(99,102,241,0.08)";
        el.style.borderColor = "rgba(99,102,241,0.18)";
        el.style.color = "#a5b4fc";
        el.style.transform = "translateY(0)";
        el.style.boxShadow = "none";
      }}
    >
      {name}
    </span>
  );
}

export default function Skills() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setVisible(true), 100);
    return () => clearTimeout(timer);
  }, []);

  return (
    <section
      id="skills"
      className="py-24 relative overflow-hidden"
      style={{ background: "rgba(255,255,255,0.015)" }}
    >
      {/* Ambient glow */}
      <div style={{
        position: "absolute",
        top: "10%",
        left: "50%",
        transform: "translateX(-50%)",
        width: "600px",
        height: "300px",
        background: "radial-gradient(ellipse, rgba(99,102,241,0.06) 0%, transparent 70%)",
        pointerEvents: "none",
      }} />

      <div className="max-w-6xl mx-auto px-6 relative z-10">

        {/* Header + chibi */}
        <div style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          marginBottom: "56px",
          gap: "24px",
          flexWrap: "wrap",
        }}>
          <div>
            <p style={{
              fontSize: "11px",
              fontWeight: 700,
              letterSpacing: "0.2em",
              textTransform: "uppercase",
              color: "#818cf8",
              marginBottom: "10px",
            }}>
              Technical Skills
            </p>
            <h2 style={{
              fontSize: "clamp(28px, 4vw, 42px)",
              fontWeight: 800,
              color: "#f1f5f9",
              lineHeight: 1.15,
              letterSpacing: "-0.02em",
              margin: 0,
            }}>
              Technologies<br />
              <span style={{ color: "#818cf8" }}>I Work With</span>
            </h2>
          </div>
          <ChibiCoder />
        </div>

        {/* Skill groups grid */}
        <div style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(260px, 1fr))",
          gap: "20px",
        }}>
          {skills.map((group, gi) => (
            <div
              key={group.category}
              style={{
                borderRadius: "16px",
                padding: "24px",
                background: "rgba(255,255,255,0.025)",
                border: "1px solid rgba(255,255,255,0.07)",
                backdropFilter: "blur(8px)",
                opacity: visible ? 1 : 0,
                transform: visible ? "translateY(0)" : "translateY(20px)",
                transition: `opacity 0.5s ease ${gi * 0.08}s, transform 0.5s ease ${gi * 0.08}s`,
              }}
            >
              <div style={{ marginBottom: "18px", display: "flex", alignItems: "center", gap: "8px" }}>
                <div style={{
                  width: "3px",
                  height: "14px",
                  background: "linear-gradient(180deg, #6366f1, #8b5cf6)",
                  borderRadius: "2px",
                  flexShrink: 0,
                }} />
                <h3 style={{
                  fontSize: "11px",
                  fontWeight: 700,
                  letterSpacing: "0.18em",
                  textTransform: "uppercase",
                  color: "#818cf8",
                  margin: 0,
                }}>
                  {group.category}
                </h3>
              </div>

              <div style={{ display: "flex", flexWrap: "wrap", gap: "8px" }}>
                {group.items.map((skill) => (
                  <SkillTag key={skill.name} name={skill.name} />
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Tools */}
        <div style={{
          marginTop: "48px",
          textAlign: "center",
          opacity: visible ? 1 : 0,
          transform: visible ? "translateY(0)" : "translateY(16px)",
          transition: "opacity 0.5s ease 0.5s, transform 0.5s ease 0.5s",
        }}>
          <p style={{
            fontSize: "11px",
            fontWeight: 700,
            letterSpacing: "0.18em",
            textTransform: "uppercase",
            color: "#4b5563",
            marginBottom: "20px",
          }}>
            Also familiar with
          </p>
          <div style={{ display: "flex", flexWrap: "wrap", justifyContent: "center", gap: "10px" }}>
            {[
              "Git", "GitHub Actions", "Fastlane", "Agile / Scrum",
              "Docker (basics)", "Linux CLI", "VS Code", "Android Studio",
            ].map((tool) => (
              <span
                key={tool}
                style={{
                  padding: "6px 16px",
                  fontSize: "13px",
                  borderRadius: "999px",
                  background: "rgba(255,255,255,0.04)",
                  border: "1px solid rgba(255,255,255,0.08)",
                  color: "#6b7280",
                  transition: "all 0.2s ease",
                  cursor: "default",
                }}
                onMouseEnter={e => {
                  const el = e.currentTarget as HTMLElement;
                  el.style.color = "#94a3b8";
                  el.style.borderColor = "rgba(255,255,255,0.15)";
                  el.style.background = "rgba(255,255,255,0.07)";
                }}
                onMouseLeave={e => {
                  const el = e.currentTarget as HTMLElement;
                  el.style.color = "#6b7280";
                  el.style.borderColor = "rgba(255,255,255,0.08)";
                  el.style.background = "rgba(255,255,255,0.04)";
                }}
              >
                {tool}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}