"use client";
import { useState, useRef, useEffect } from "react";
import { personalInfo } from "@/lib/data";
import { Mail, Github, Linkedin, MapPin, ArrowUpRight, Send, CheckCircle, AlertCircle } from "lucide-react";
import { ChibiContact } from "./ChibiScenes";

function useReveal(threshold=0.1) {
  const ref = useRef<HTMLDivElement>(null);
  const [on, setOn] = useState(false);
  useEffect(() => {
    const obs = new IntersectionObserver(([e]) => { if (e.isIntersecting) { setOn(true); obs.disconnect(); } }, { threshold });
    if (ref.current) obs.observe(ref.current);
    return () => obs.disconnect();
  }, [threshold]);
  return { ref, on };
}

type Status = "idle"|"loading"|"success"|"error";

export default function Contact() {
  const header  = useReveal();
  const content = useReveal();
  const [fields, setFields] = useState({ name:"", email:"", subject:"", message:"" });
  const [status, setStatus] = useState<Status>("idle");
  const [errMsg, setErrMsg] = useState("");

  const set = (k: keyof typeof fields) => (e: React.ChangeEvent<HTMLInputElement|HTMLTextAreaElement>) =>
    setFields(f => ({ ...f, [k]: e.target.value }));

  const submit = async (e: React.FormEvent) => {
    e.preventDefault(); setStatus("loading"); setErrMsg("");
    try {
      const res  = await fetch("/api/contact", { method:"POST", headers:{"Content-Type":"application/json"}, body:JSON.stringify(fields) });
      const data = await res.json();
      if (!res.ok) { setErrMsg(data.error||"Something went wrong."); setStatus("error"); return; }
      setStatus("success"); setFields({ name:"", email:"", subject:"", message:"" });
      setTimeout(() => setStatus("idle"), 6000);
    } catch { setErrMsg("Network error. Please try again."); setStatus("error"); }
  };

  const links = [
    { icon:Mail,     label:"Email",    value:personalInfo.email,           href:`mailto:${personalInfo.email}` },
    { icon:Github,   label:"GitHub",   value:"github.com/johncarlo-dizon", href:personalInfo.github },
    { icon:Linkedin, label:"LinkedIn", value:"linkedin.com/in/jcdizon",    href:personalInfo.linkedin },
  ];

  return (
    <section id="contact" style={{ padding:"5rem 0", background:"var(--bg3)" }}>
      <style>{`
        .ct-header { display: flex; align-items: flex-end; justify-content: space-between; gap: 24px; margin-bottom: 36px; flex-wrap: wrap; }
        .ct-chibi { flex-shrink: 0; align-self: flex-end; }
        .ct-grid { display: grid; grid-template-columns: 1fr 1fr; gap: 24px; }
        .ct-form-row { display: grid; grid-template-columns: 1fr 1fr; gap: 10px; }
        @media (max-width: 768px) {
          .ct-chibi { display: none !important; }
          .ct-grid { grid-template-columns: 1fr !important; }
        }
        @media (max-width: 480px) {
          .ct-form-row { grid-template-columns: 1fr !important; }
        }
      `}</style>
      <div style={{ maxWidth:"1100px", margin:"0 auto", padding:"0 1.25rem" }}>

        <div className="ct-header">
          <div ref={header.ref} style={{
            opacity:header.on?1:0, transform:header.on?"none":"translateY(24px)",
            transition:"opacity 0.6s ease, transform 0.6s ease" }}>
            <span className="section-label">Contact</span>
            <h2 className="section-heading" style={{ marginBottom:"10px" }}>Let&apos;s Work <span>Together</span></h2>
            <p style={{ fontSize:"14px", color:"var(--tx2)", maxWidth:"380px", lineHeight:1.7 }}>
              Open to full-time roles and freelance projects. I reply within 24–48 hours.
            </p>
          </div>
          <div className="ct-chibi" style={{ opacity:header.on?1:0, transition:"opacity 0.7s ease 0.3s" }}>
            <ChibiContact />
          </div>
        </div>

        <div ref={content.ref} className="ct-grid" style={{
          opacity:content.on?1:0, transform:content.on?"none":"translateY(24px)",
          transition:"opacity 0.65s ease 0.1s, transform 0.65s ease 0.1s" }}>

          {/* Form */}
          <div style={{ background:"var(--card)", border:"1px solid var(--border)", borderRadius:"16px", padding:"24px" }}>
            <h3 style={{ fontSize:"14px", fontWeight:700, color:"var(--tx)", marginBottom:"18px" }}>Send a Message</h3>
            <form onSubmit={submit} style={{ display:"flex", flexDirection:"column", gap:"12px" }}>
              <div className="ct-form-row">
                <div>
                  <label style={{ display:"block", fontSize:"10px", fontWeight:600, color:"var(--tx3)", marginBottom:"5px", letterSpacing:"0.06em", textTransform:"uppercase" }}>Name *</label>
                  <input className="form-input" placeholder="Your name" value={fields.name} onChange={set("name")} required/>
                </div>
                <div>
                  <label style={{ display:"block", fontSize:"10px", fontWeight:600, color:"var(--tx3)", marginBottom:"5px", letterSpacing:"0.06em", textTransform:"uppercase" }}>Email *</label>
                  <input className="form-input" type="email" placeholder="you@email.com" value={fields.email} onChange={set("email")} required/>
                </div>
              </div>
              <div>
                <label style={{ display:"block", fontSize:"10px", fontWeight:600, color:"var(--tx3)", marginBottom:"5px", letterSpacing:"0.06em", textTransform:"uppercase" }}>Subject</label>
                <input className="form-input" placeholder="What's this about?" value={fields.subject} onChange={set("subject")}/>
              </div>
              <div>
                <label style={{ display:"block", fontSize:"10px", fontWeight:600, color:"var(--tx3)", marginBottom:"5px", letterSpacing:"0.06em", textTransform:"uppercase" }}>Message *</label>
                <textarea className="form-input" rows={5} placeholder="Tell me about your project..." value={fields.message} onChange={set("message")} required/>
              </div>
              {status==="error" && (
                <div style={{ display:"flex", alignItems:"center", gap:"7px", padding:"10px 13px",
                  background:"rgba(239,68,68,0.06)", border:"1px solid rgba(239,68,68,0.2)", borderRadius:"9px" }}>
                  <AlertCircle size={13} color="#ef4444"/><span style={{ fontSize:"12px", color:"#ef4444" }}>{errMsg}</span>
                </div>
              )}
              {status==="success" && (
                <div style={{ display:"flex", alignItems:"center", gap:"7px", padding:"10px 13px",
                  background:"rgba(22,163,74,0.06)", border:"1px solid rgba(22,163,74,0.2)", borderRadius:"9px" }}>
                  <CheckCircle size={13} color="var(--green)"/><span style={{ fontSize:"12px", color:"var(--green)" }}>Sent! Check your inbox for confirmation.</span>
                </div>
              )}
              <button type="submit" disabled={status==="loading"} style={{
                display:"flex", alignItems:"center", justifyContent:"center", gap:"8px",
                padding:"12px", borderRadius:"9px",
                background:status==="loading"?"var(--tx3)":"var(--tx)", color:"var(--bg)",
                border:"none", fontSize:"14px", fontWeight:600,
                cursor:status==="loading"?"not-allowed":"pointer", transition:"all 0.2s" }}
                onMouseEnter={e => { if(status!=="loading")(e.currentTarget as HTMLButtonElement).style.opacity="0.85"; }}
                onMouseLeave={e => { (e.currentTarget as HTMLButtonElement).style.opacity="1"; }}>
                {status==="loading"
                  ? <><svg className="spin" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M12 2v4M12 18v4M4.93 4.93l2.83 2.83M16.24 16.24l2.83 2.83M2 12h4M18 12h4M4.93 19.07l2.83-2.83M16.24 7.76l2.83-2.83"/></svg> Sending...</>
                  : <><Send size={13}/> Send Message</>
                }
              </button>
            </form>
          </div>

          {/* Links */}
          <div style={{ display:"flex", flexDirection:"column", gap:"10px" }}>
            {links.map((c, i) => (
              <a key={c.label} href={c.href}
                target={c.label!=="Email"?"_blank":undefined} rel="noopener noreferrer"
                style={{ display:"flex", alignItems:"center", gap:"12px", padding:"14px 18px",
                  background:"var(--card)", border:"1px solid var(--border)", borderRadius:"12px",
                  textDecoration:"none", transition:"all 0.2s" }}
                onMouseEnter={e => { const el=e.currentTarget as HTMLAnchorElement; el.style.borderColor="var(--border-h)"; el.style.background="var(--card-h)"; el.style.transform="translateY(-2px)"; el.style.boxShadow="0 6px 20px var(--ac-glow)"; }}
                onMouseLeave={e => { const el=e.currentTarget as HTMLAnchorElement; el.style.borderColor="var(--border)"; el.style.background="var(--card)"; el.style.transform="none"; el.style.boxShadow="none"; }}>
                <div style={{ width:"36px", height:"36px", flexShrink:0, borderRadius:"10px",
                  background:"var(--ac-dim)", border:"1px solid var(--border-h)",
                  display:"flex", alignItems:"center", justifyContent:"center" }}>
                  <c.icon size={15} color="var(--tx2)"/>
                </div>
                <div style={{ flex:1, minWidth:0 }}>
                  <p style={{ fontSize:"10px", fontWeight:600, letterSpacing:"0.08em", textTransform:"uppercase", color:"var(--tx3)", marginBottom:"2px" }}>{c.label}</p>
                  <p style={{ fontSize:"13px", fontWeight:500, color:"var(--tx)", overflow:"hidden", textOverflow:"ellipsis", whiteSpace:"nowrap" }}>{c.value}</p>
                </div>
                <ArrowUpRight size={13} color="var(--tx3)"/>
              </a>
            ))}
            <div style={{ display:"flex", alignItems:"center", gap:"8px", padding:"12px 18px",
              background:"var(--ac-dim)", border:"1px solid var(--border-h)", borderRadius:"10px" }}>
              <MapPin size={13} color="var(--tx3)"/>
              <span style={{ fontSize:"13px", color:"var(--tx2)" }}>Based in {personalInfo.location} · Remote-friendly</span>
            </div>
            <div style={{ padding:"12px 16px", background:"rgba(251,191,36,0.05)", border:"1px solid rgba(251,191,36,0.15)", borderRadius:"10px" }}>
              <p style={{ fontSize:"11px", color:"var(--amber)", fontWeight:700, marginBottom:"3px" }}>⚙️ SMTP Setup</p>
              <p style={{ fontSize:"11px", color:"var(--tx3)", lineHeight:1.6 }}>
                Add <code style={{ color:"var(--tx2)", background:"var(--bg3)", padding:"1px 5px", borderRadius:"3px" }}>SMTP_USER</code> and{" "}
                <code style={{ color:"var(--tx2)", background:"var(--bg3)", padding:"1px 5px", borderRadius:"3px" }}>SMTP_PASS</code> to <code style={{ color:"var(--amber)" }}>.env.local</code>.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}