"use client";
import React from "react";

/* All chibi CSS is scoped with a unique wrapper ID to prevent global leakage */

export function ChibiHero() {
  return (
    <div id="chibi-hero" style={{ position:"relative", width:"300px", height:"220px", flexShrink:0 }}>
      <style>{`
        #chibi-hero .hl-screen { position:absolute; bottom:52px; left:30px; width:200px; height:130px; background:#0f0f1a; border-radius:10px 10px 0 0; border:3px solid #444; overflow:hidden; box-shadow:0 0 30px rgba(124,109,250,.4); }
        #chibi-hero .hl-screen-bg { width:100%; height:100%; background:linear-gradient(135deg,#0f0f1a,#1a1a2e); padding:10px; }
        #chibi-hero .hl-editor { background:#1e1e2e; border-radius:6px; padding:8px; height:100%; }
        #chibi-hero .hl-tabs { display:flex; gap:4px; margin-bottom:6px; }
        #chibi-hero .hl-tab { width:8px; height:8px; border-radius:50%; }
        #chibi-hero .hl-code { display:flex; flex-direction:column; gap:4px; }
        #chibi-hero .hl-cl { height:3px; border-radius:2px; animation:hlPulse 2.5s ease-in-out infinite; }
        @keyframes hlPulse { 0%,100%{opacity:.35} 50%{opacity:1} }
        #chibi-hero .hl-base { position:absolute; bottom:36px; left:20px; width:218px; height:16px; background:linear-gradient(180deg,#555,#333); border-radius:2px 2px 0 0; }
        #chibi-hero .hl-stand { position:absolute; bottom:20px; left:89px; width:42px; height:16px; background:#444; border-radius:0 0 2px 2px; }
        #chibi-hero .hl-foot { position:absolute; bottom:18px; left:50px; width:120px; height:5px; background:#555; border-radius:3px; }
        #chibi-hero .hl-chibi { position:absolute; bottom:178px; left:122px; }
        #chibi-hero .hl-head { width:28px; height:28px; background:linear-gradient(160deg,#fdd9b5,#f5b97c); border-radius:50%; position:relative; animation:hlBob 2s ease-in-out infinite; }
        @keyframes hlBob { 0%,100%{transform:translateY(0)} 50%{transform:translateY(-3px)} }
        #chibi-hero .hl-hair { position:absolute; top:-3px; left:-2px; right:-2px; height:14px; background:#1a0a00; border-radius:50% 50% 0 0; z-index:1; }
        #chibi-hero .hl-eyes { position:absolute; top:11px; left:0; right:0; display:flex; justify-content:center; gap:5px; z-index:2; }
        #chibi-hero .hl-eye { width:4px; height:5px; background:#1a0a00; border-radius:50%; }
        #chibi-hero .hl-eye::after { content:''; position:absolute; top:1px; right:1px; width:1.5px; height:1.5px; background:#fff; border-radius:50%; }
        #chibi-hero .hl-smile { position:absolute; bottom:5px; left:50%; transform:translateX(-50%); width:7px; height:3px; border-bottom:2px solid #c97b5a; border-radius:0 0 50% 50%; }
        #chibi-hero .hl-body { width:24px; height:18px; background:#312e81; border-radius:5px 5px 2px 2px; margin:0 auto; margin-top:-1px; position:relative; }
        #chibi-hero .hl-leg { width:7px; height:20px; background:#312e81; border-radius:2px 2px 4px 4px; position:relative; }
        #chibi-hero .hl-leg::after { content:''; position:absolute; bottom:-2px; left:-1px; width:9px; height:4px; background:#1e1b4b; border-radius:1px 3px 3px 1px; }
        #chibi-hero .hl-leg.l { animation:hlLegSwing 1.8s ease-in-out infinite; transform-origin:top center; }
        #chibi-hero .hl-leg.r { animation:hlLegSwing 1.8s ease-in-out infinite 0.2s; transform-origin:top center; }
        @keyframes hlLegSwing { 0%,100%{transform:rotate(-12deg)} 50%{transform:rotate(12deg)} }
        #chibi-hero .hl-tiny-arm { position:absolute; width:7px; height:14px; background:#312e81; border-radius:3px; top:2px; }
        #chibi-hero .hl-tiny-arm.l { left:-6px; transform:rotate(20deg); transform-origin:top; }
        #chibi-hero .hl-tiny-arm.r { right:-6px; transform:rotate(-20deg); transform-origin:top; }
        #chibi-hero .hl-spark { position:absolute; font-size:12px; animation:hlSpark 2s ease-in-out infinite; }
        @keyframes hlSpark { 0%,100%{opacity:1;transform:translateY(0) scale(1)} 50%{opacity:.5;transform:translateY(-4px) scale(1.2)} }
        #chibi-hero .hl-mug { position:absolute; bottom:55px; right:16px; }
        #chibi-hero .hl-mug-body { width:20px; height:22px; background:#c8a97e; border-radius:2px 2px 5px 5px; position:relative; }
        #chibi-hero .hl-mug-body::before { content:''; position:absolute; top:3px; left:2px; right:2px; height:6px; background:#6b3f1f; border-radius:2px; }
        #chibi-hero .hl-mug-body::after { content:''; position:absolute; right:-7px; top:5px; width:8px; height:9px; border:2px solid #c8a97e; border-radius:0 50% 50% 0; border-left:none; }
        #chibi-hero .hl-steam { position:absolute; top:-12px; left:3px; display:flex; gap:3px; }
        #chibi-hero .hl-st { width:2px; height:8px; background:rgba(200,169,126,.5); border-radius:2px; animation:hlSteam 1.5s ease-in-out infinite; }
        #chibi-hero .hl-st:nth-child(2) { animation-delay:.5s; height:6px; }
        @keyframes hlSteam { 0%{transform:translateY(0);opacity:.5} 100%{transform:translateY(-8px);opacity:0} }
      `}</style>
      <div className="hl-screen">
        <div className="hl-screen-bg"><div className="hl-editor">
          <div className="hl-tabs">
            <div className="hl-tab" style={{background:"#ff5f57"}}/><div className="hl-tab" style={{background:"#febc2e"}}/><div className="hl-tab" style={{background:"#28c840"}}/>
          </div>
          <div className="hl-code">
            {[{w:"70%",c:"rgba(124,109,250,.7)",d:0},{w:"90%",c:"rgba(192,132,252,.5)",d:.2},{w:"55%",c:"rgba(34,211,238,.4)",d:.4},{w:"80%",c:"rgba(124,109,250,.6)",d:.6},{w:"65%",c:"rgba(192,132,252,.4)",d:.8},{w:"75%",c:"rgba(34,211,238,.3)",d:1},{w:"45%",c:"rgba(124,109,250,.5)",d:1.2}].map((l,i)=>(
              <div key={i} className="hl-cl" style={{width:l.w,background:l.c,animationDelay:`${l.d}s`}}/>
            ))}
          </div>
        </div></div>
      </div>
      <div className="hl-base"/><div className="hl-stand"/><div className="hl-foot"/>
      <div className="hl-chibi">
        <div className="hl-head"><div className="hl-hair"/><div className="hl-eyes"><div className="hl-eye"/><div className="hl-eye"/></div><div className="hl-smile"/></div>
        <div className="hl-body"><div className="hl-tiny-arm l"/><div className="hl-tiny-arm r"/></div>
        <div style={{display:"flex",justifyContent:"center",gap:"2px",marginTop:"-1px"}}>
          <div className="hl-leg l"/><div className="hl-leg r"/>
        </div>
      </div>
      <div className="hl-mug"><div className="hl-steam"><div className="hl-st"/><div className="hl-st"/></div><div className="hl-mug-body"/></div>
      <div className="hl-spark" style={{top:"30px",left:"14px",animationDelay:"0s"}}>✨</div>
      <div className="hl-spark" style={{top:"50px",right:"40px",animationDelay:"0.7s",fontSize:"9px"}}>⭐</div>
    </div>
  );
}

export function ChibiAbout() {
  return (
    <div id="chibi-about" style={{position:"relative",width:"180px",height:"230px",flexShrink:0}}>
      <style>{`
        #chibi-about .ab-board { position:absolute; top:0; left:20px; width:130px; height:130px; background:#f8f8f8; border:3px solid #ccc; border-radius:6px; box-shadow:2px 4px 12px rgba(0,0,0,.15); }
        [data-theme="light"] #chibi-about .ab-board { background:#fff; border-color:#999; }
        #chibi-about .ab-board-top { position:absolute; top:-8px; left:50%; transform:translateX(-50%); width:60%; height:10px; background:#888; border-radius:3px; }
        #chibi-about .ab-board-top::before,#chibi-about .ab-board-top::after { content:''; position:absolute; bottom:-14px; width:6px; height:14px; background:#777; border-radius:0 0 3px 3px; }
        #chibi-about .ab-board-top::before { left:8px; } #chibi-about .ab-board-top::after { right:8px; }
        #chibi-about .ab-writing { position:absolute; top:14px; left:10px; right:10px; }
        #chibi-about .ab-w-line { height:3px; border-radius:2px; background:#555; margin-bottom:7px; animation:abWrite 2.5s ease-in-out infinite; }
        [data-theme="light"] #chibi-about .ab-w-line { background:#333; }
        #chibi-about .ab-w-line:nth-child(1){width:85%;animation-delay:0s}#chibi-about .ab-w-line:nth-child(2){width:65%;animation-delay:.4s}#chibi-about .ab-w-line:nth-child(3){width:90%;animation-delay:.8s}#chibi-about .ab-w-line:nth-child(4){width:50%;animation-delay:1.2s}
        @keyframes abWrite{0%,100%{opacity:.4}50%{opacity:1}}
        #chibi-about .ab-sticky { position:absolute; width:26px; height:26px; border-radius:2px; box-shadow:1px 2px 5px rgba(0,0,0,.2); }
        #chibi-about .ab-sticky.y { background:#fef08a; bottom:10px; left:8px; animation:abStick 3s ease-in-out infinite; }
        #chibi-about .ab-sticky.p { background:#fbcfe8; bottom:10px; right:8px; animation:abStick2 3s ease-in-out infinite .6s; }
        @keyframes abStick{0%,100%{transform:rotate(-5deg)}50%{transform:rotate(3deg)}}
        @keyframes abStick2{0%,100%{transform:rotate(4deg)}50%{transform:rotate(-3deg)}}
        #chibi-about .ab-marker-tray { position:absolute; bottom:-8px; left:8px; right:8px; height:6px; background:#ddd; border-radius:3px; }
        #chibi-about .ab-chibi { position:absolute; bottom:4px; left:0; }
        #chibi-about .ab-big-head { width:44px; height:44px; background:linear-gradient(160deg,#fdd9b5,#f5b97c); border-radius:50%; position:relative; animation:abBob 2.4s ease-in-out infinite; box-shadow:0 3px 10px rgba(0,0,0,.2); }
        @keyframes abBob{0%,100%{transform:translateY(0) rotate(-2deg)}50%{transform:translateY(-4px) rotate(2deg)}}
        #chibi-about .ab-big-hair { position:absolute; top:-5px; left:-3px; right:-3px; height:22px; background:#1a0a00; border-radius:50% 50% 0 0; z-index:1; }
        #chibi-about .ab-big-hair::after { content:''; position:absolute; top:12px; right:-5px; width:10px; height:16px; background:#1a0a00; border-radius:0 50% 50% 0; }
        #chibi-about .ab-big-eyes { position:absolute; top:18px; left:0; right:0; display:flex; justify-content:center; gap:8px; z-index:2; animation:abBlink 4.5s ease-in-out infinite; }
        #chibi-about .ab-big-eye { width:6px; height:7px; background:#1a0a00; border-radius:50%; position:relative; }
        #chibi-about .ab-big-eye::after { content:''; position:absolute; top:1px; right:1px; width:2px; height:2px; background:#fff; border-radius:50%; }
        @keyframes abBlink{0%,88%,100%{transform:scaleY(1)}93%{transform:scaleY(.1)}}
        #chibi-about .ab-big-smile { position:absolute; bottom:9px; left:50%; transform:translateX(-50%); width:11px; height:5px; border-bottom:2px solid #c97b5a; border-radius:0 0 50% 50%; }
        #chibi-about .ab-big-body { width:38px; height:32px; background:linear-gradient(160deg,#312e81,#1e1b4b); border-radius:9px 9px 4px 4px; margin:0 auto; margin-top:-2px; position:relative; }
        #chibi-about .ab-arm-down { position:absolute; top:4px; width:13px; height:24px; background:linear-gradient(160deg,#312e81,#1e1b4b); border-radius:6px; }
        #chibi-about .ab-arm-down.l { left:-11px; transform:rotate(15deg); transform-origin:top; }
        #chibi-about .ab-arm-point { position:absolute; top:-8px; right:-10px; width:13px; height:26px; background:linear-gradient(160deg,#312e81,#1e1b4b); border-radius:6px; transform:rotate(-50deg); transform-origin:bottom center; animation:abPoint 2s ease-in-out infinite alternate; }
        @keyframes abPoint{from{transform:rotate(-55deg)}to{transform:rotate(-42deg)}}
        #chibi-about .ab-pointer-hand { position:absolute; top:-4px; left:50%; transform:translateX(-50%); width:9px; height:9px; background:#fdd9b5; border-radius:50%; }
        #chibi-about .ab-big-legs { display:flex; justify-content:center; gap:4px; margin-top:-1px; }
        #chibi-about .ab-big-leg { width:14px; height:18px; background:#1e1b4b; border-radius:5px 5px 7px 7px; position:relative; }
        #chibi-about .ab-big-leg::after { content:''; position:absolute; bottom:-4px; left:-2px; width:17px; height:7px; background:#312e81; border-radius:3px 5px 5px 3px; }
      `}</style>
      <div className="ab-board"><div className="ab-board-top"/><div className="ab-writing">{[0,1,2,3].map(i=><div key={i} className="ab-w-line"/>)}</div><div className="ab-sticky y"/><div className="ab-sticky p"/><div className="ab-marker-tray"/></div>
      <div className="ab-chibi">
        <div className="ab-big-head"><div className="ab-big-hair"/><div className="ab-big-eyes"><div className="ab-big-eye"/><div className="ab-big-eye"/></div><div className="ab-big-smile"/></div>
        <div className="ab-big-body">
          <div className="ab-arm-down l"><div style={{position:"absolute",bottom:"-3px",left:"50%",transform:"translateX(-50%)",width:"9px",height:"9px",background:"#fdd9b5",borderRadius:"50%"}}/></div>
          <div className="ab-arm-point"><div className="ab-pointer-hand"/></div>
        </div>
        <div className="ab-big-legs"><div className="ab-big-leg"/><div className="ab-big-leg"/></div>
      </div>
    </div>
  );
}

export function ChibiCoder() {
  return (
    <div id="chibi-coder" style={{position:"relative",width:"280px",height:"200px",flexShrink:0}}>
      <style>{`
        #chibi-coder .sk-desk { position:absolute; bottom:6px; left:10px; right:10px; height:14px; background:linear-gradient(180deg,#5c3d2e,#3d2518); border-radius:4px 4px 2px 2px; box-shadow:0 5px 14px rgba(0,0,0,.4); }
        #chibi-coder .sk-desk-leg { position:absolute; bottom:-22px; width:10px; height:22px; background:#3d2518; border-radius:0 0 4px 4px; }
        #chibi-coder .sk-desk-leg.l { left:18px; } #chibi-coder .sk-desk-leg.r { right:18px; }
        #chibi-coder .sk-mon-l { position:absolute; bottom:20px; left:12px; width:90px; height:110px; background:#1a1a2e; border-radius:7px 7px 3px 3px; border:2.5px solid #333; overflow:hidden; box-shadow:0 0 18px rgba(124,109,250,.35); }
        #chibi-coder .sk-mon-r { position:absolute; bottom:20px; right:8px; width:110px; height:80px; background:#1a1a2e; border-radius:7px 7px 3px 3px; border:2.5px solid #333; overflow:hidden; box-shadow:0 0 14px rgba(192,132,252,.25); }
        #chibi-coder .sk-mon-stand { position:absolute; bottom:14px; width:8px; height:8px; background:#444; border-radius:0 0 3px 3px; }
        #chibi-coder .sk-mon-stand.l { left:55px; } #chibi-coder .sk-mon-stand.r { right:60px; }
        #chibi-coder .sk-screen { width:100%; height:100%; padding:6px; background:#0f0f1a; display:flex; flex-direction:column; gap:3px; }
        #chibi-coder .sk-tabs { display:flex; gap:3px; margin-bottom:4px; }
        #chibi-coder .sk-dot { width:6px; height:6px; border-radius:50%; }
        #chibi-coder .sk-cline { height:3px; border-radius:2px; animation:skPulse 2.2s ease-in-out infinite; }
        @keyframes skPulse{0%,100%{opacity:.35}50%{opacity:1}}
        #chibi-coder .sk-cursor { position:absolute; bottom:18px; left:12px; width:2px; height:6px; background:#22d3ee; animation:skBlink 1s step-end infinite; border-radius:1px; }
        @keyframes skBlink{0%,100%{opacity:1}50%{opacity:0}}
        #chibi-coder .sk-kb { position:absolute; bottom:22px; left:108px; width:56px; height:11px; background:linear-gradient(180deg,#2a2a3a,#1e1e2a); border-radius:3px; border:1px solid #3a3a4a; z-index:8; }
        #chibi-coder .sk-kb::after { content:''; position:absolute; inset:2px; background:repeating-linear-gradient(90deg,rgba(124,109,250,.3) 0,rgba(124,109,250,.3) 2px,transparent 2px,transparent 5px); border-radius:1px; animation:skKeys .35s ease infinite alternate; }
        @keyframes skKeys{from{opacity:.5}to{opacity:1}}
        #chibi-coder .sk-chibi { position:absolute; bottom:34px; left:108px; z-index:10; }
        #chibi-coder .sk-head { width:26px; height:26px; background:linear-gradient(160deg,#fdd9b5,#f5b97c); border-radius:50%; position:relative; animation:skBobC 2s ease-in-out infinite; box-shadow:0 2px 6px rgba(0,0,0,.3); }
        @keyframes skBobC{0%,100%{transform:translateY(0)}50%{transform:translateY(-4px)}}
        #chibi-coder .sk-hair { position:absolute; top:-3px; left:-2px; right:-2px; height:13px; background:#1a0a00; border-radius:50% 50% 0 0; z-index:1; }
        #chibi-coder .sk-hp { position:absolute; top:-2px; left:-4px; right:-4px; height:11px; border:2.5px solid #4f46e5; border-bottom:none; border-radius:50% 50% 0 0; z-index:3; }
        #chibi-coder .sk-hp::before,#chibi-coder .sk-hp::after { content:''; position:absolute; bottom:-6px; width:6px; height:6px; background:#4f46e5; border-radius:2px; }
        #chibi-coder .sk-hp::before{left:-4px} #chibi-coder .sk-hp::after{right:-4px}
        #chibi-coder .sk-eyes { position:absolute; top:13px; left:0; right:0; display:flex; justify-content:center; gap:6px; z-index:2; animation:skEyeB 4s ease-in-out infinite; }
        #chibi-coder .sk-eye { width:4px; height:5px; background:#1a0a00; border-radius:50%; }
        #chibi-coder .sk-eye::after{content:'';position:absolute;top:1px;right:1px;width:1.5px;height:1.5px;background:#fff;border-radius:50%}
        @keyframes skEyeB{0%,88%,100%{transform:scaleY(1)}93%{transform:scaleY(.1)}}
        #chibi-coder .sk-mouth { position:absolute; bottom:5px; left:50%; transform:translateX(-50%); width:8px; height:3px; border-bottom:1.5px solid #c97b5a; border-radius:0 0 50% 50%; }
        #chibi-coder .sk-body { width:22px; height:20px; background:linear-gradient(160deg,#312e81,#1e1b4b); border-radius:5px 5px 2px 2px; margin:0 auto; margin-top:-1px; position:relative; }
        #chibi-coder .sk-arm { position:absolute; top:2px; width:9px; height:16px; background:linear-gradient(160deg,#312e81,#1e1b4b); border-radius:4px; }
        #chibi-coder .sk-arm.l { left:-8px; transform-origin:top; animation:skAL .4s ease-in-out infinite alternate; }
        #chibi-coder .sk-arm.r { right:-8px; transform-origin:top; animation:skAR .4s ease-in-out infinite alternate; }
        @keyframes skAL{from{transform:rotate(22deg)}to{transform:rotate(34deg)}}
        @keyframes skAR{from{transform:rotate(-28deg)}to{transform:rotate(-16deg)}}
        #chibi-coder .sk-hand{position:absolute;bottom:-3px;left:50%;transform:translateX(-50%);width:7px;height:7px;background:#fdd9b5;border-radius:50%}
        #chibi-coder .sk-legs{display:flex;justify-content:center;gap:2px;margin-top:-1px}
        #chibi-coder .sk-leg{width:9px;height:12px;background:#1e1b4b;border-radius:3px 3px 4px 4px;position:relative;animation:skLg 2.2s ease-in-out infinite}
        #chibi-coder .sk-leg:nth-child(2){animation-delay:.1s}
        #chibi-coder .sk-leg::after{content:'';position:absolute;bottom:-2px;left:-1px;width:11px;height:5px;background:#312e81;border-radius:2px 4px 4px 2px}
        @keyframes skLg{0%,100%{transform:none}50%{transform:translateY(1px)}}
        #chibi-coder .sk-coffee { position:absolute; bottom:22px; right:122px; z-index:9; }
        #chibi-coder .sk-cup { width:14px; height:14px; background:#c8a97e; border-radius:1px 1px 4px 4px; position:relative; }
        #chibi-coder .sk-cup::before{content:'';position:absolute;top:2px;left:2px;right:2px;height:4px;background:#6b3f1f;border-radius:2px}
        #chibi-coder .sk-cup::after{content:'';position:absolute;right:-5px;top:3px;width:6px;height:7px;border:1.5px solid #c8a97e;border-radius:0 50% 50% 0;border-left:none}
        #chibi-coder .sk-stm{position:absolute;top:-9px;left:2px;display:flex;gap:2px}
        #chibi-coder .sk-s{width:2px;height:7px;background:rgba(255,255,255,.3);border-radius:2px;animation:skSt 1.5s ease-in-out infinite}
        #chibi-coder .sk-s:nth-child(2){animation-delay:.5s;height:5px}
        @keyframes skSt{0%{transform:translateY(0);opacity:.4}100%{transform:translateY(-7px);opacity:0}}
        #chibi-coder .sk-glow{position:absolute;bottom:20px;pointer-events:none;filter:blur(14px);opacity:.12;background:#7c6dfa;animation:skGl 2s ease-in-out infinite;border-radius:6px}
        #chibi-coder .sk-glow.l{width:95px;height:115px;left:12px}
        #chibi-coder .sk-glow.r{width:115px;height:85px;right:8px}
        @keyframes skGl{0%,100%{opacity:.1}50%{opacity:.2}}
      `}</style>
      <div className="sk-glow l"/><div className="sk-glow r"/>
      <div className="sk-mon-l"><div className="sk-screen"><div className="sk-tabs"><div className="sk-dot" style={{background:"#ff5f57"}}/><div className="sk-dot" style={{background:"#febc2e"}}/><div className="sk-dot" style={{background:"#28c840"}}/></div>{[{w:"75%",c:"rgba(124,109,250,.7)",d:0},{w:"90%",c:"rgba(192,132,252,.5)",d:.2},{w:"60%",c:"rgba(34,211,238,.4)",d:.4},{w:"80%",c:"rgba(124,109,250,.6)",d:.6},{w:"50%",c:"rgba(192,132,252,.4)",d:.8},{w:"70%",c:"rgba(34,211,238,.3)",d:1},{w:"85%",c:"rgba(124,109,250,.5)",d:1.2},{w:"45%",c:"rgba(192,132,252,.3)",d:1.4}].map((l,i)=><div key={i} className="sk-cline" style={{width:l.w,background:l.c,animationDelay:`${l.d}s`}}/>)}</div><div className="sk-cursor"/></div>
      <div className="sk-mon-stand l"/>
      <div className="sk-mon-r"><div className="sk-screen"><div className="sk-tabs"><div className="sk-dot" style={{background:"#ff5f57"}}/><div className="sk-dot" style={{background:"#febc2e"}}/><div className="sk-dot" style={{background:"#28c840"}}/></div>{[{w:"85%",c:"rgba(34,211,238,.5)",d:.1},{w:"65%",c:"rgba(124,109,250,.4)",d:.3},{w:"90%",c:"rgba(192,132,252,.5)",d:.5},{w:"55%",c:"rgba(34,211,238,.3)",d:.7},{w:"75%",c:"rgba(124,109,250,.6)",d:.9}].map((l,i)=><div key={i} className="sk-cline" style={{width:l.w,background:l.c,animationDelay:`${l.d}s`}}/>)}</div></div>
      <div className="sk-mon-stand r"/>
      <div className="sk-kb"/>
      <div className="sk-coffee"><div className="sk-stm"><div className="sk-s"/><div className="sk-s"/></div><div className="sk-cup"/></div>
      <div className="sk-chibi">
        <div className="sk-head"><div className="sk-hair"/><div className="sk-hp"/><div className="sk-eyes"><div className="sk-eye"/><div className="sk-eye"/></div><div className="sk-mouth"/></div>
        <div className="sk-body"><div className="sk-arm l"><div className="sk-hand"/></div><div className="sk-arm r"><div className="sk-hand"/></div></div>
        <div className="sk-legs"><div className="sk-leg"/><div className="sk-leg"/></div>
      </div>
      <div className="sk-desk"><div className="sk-desk-leg l"/><div className="sk-desk-leg r"/></div>
    </div>
  );
}

export function ChibiProjects() {
  return (
    <div id="chibi-projects" style={{position:"relative",width:"280px",height:"200px",flexShrink:0}}>
      <style>{`
        #chibi-projects .pr-sign { position:absolute; top:8px; left:20px; right:20px; height:55px; background:#1a1a2e; border-radius:8px; border:2px solid #333; display:flex; align-items:center; justify-content:center; box-shadow:0 0 20px rgba(124,109,250,.4), inset 0 0 20px rgba(0,0,0,.5); }
        #chibi-projects .pr-sign-text { font-size:18px; font-weight:900; letter-spacing:3px; font-family:monospace; background:linear-gradient(90deg,#9d91ff,#c084fc,#9d91ff); background-size:200% auto; -webkit-background-clip:text; -webkit-text-fill-color:transparent; background-clip:text; animation:prShimmer 2s linear infinite; }
        @keyframes prShimmer{0%{background-position:0% center}100%{background-position:200% center}}
        #chibi-projects .pr-bulb { position:absolute; width:8px; height:8px; border-radius:50%; background:#fbbf24; box-shadow:0 0 6px #fbbf24; animation:prBlink 1.2s step-end infinite; }
        #chibi-projects .pr-bulb:nth-child(1){top:4px;left:8px}#chibi-projects .pr-bulb:nth-child(2){top:4px;left:28px;animation-delay:.3s}#chibi-projects .pr-bulb:nth-child(3){top:4px;right:28px;animation-delay:.6s}#chibi-projects .pr-bulb:nth-child(4){top:4px;right:8px;animation-delay:.9s}#chibi-projects .pr-bulb:nth-child(5){bottom:4px;left:8px;animation-delay:.15s}#chibi-projects .pr-bulb:nth-child(6){bottom:4px;left:28px;animation-delay:.45s}#chibi-projects .pr-bulb:nth-child(7){bottom:4px;right:28px;animation-delay:.75s}#chibi-projects .pr-bulb:nth-child(8){bottom:4px;right:8px;animation-delay:1.05s}
        @keyframes prBlink{0%,100%{opacity:1;background:#fbbf24}50%{opacity:.2;background:#f59e0b}}
        #chibi-projects .pr-stage { position:absolute; bottom:44px; left:90px; width:100px; height:10px; background:linear-gradient(180deg,#555,#333); border-radius:3px; }
        #chibi-projects .pr-stage-front { position:absolute; bottom:36px; left:88px; width:104px; height:8px; background:#444; border-radius:0 0 3px 3px; }
        #chibi-projects .pr-chibi { position:absolute; bottom:52px; left:118px; }
        #chibi-projects .pr-head { width:38px; height:38px; background:linear-gradient(160deg,#fdd9b5,#f5b97c); border-radius:50%; position:relative; animation:prHead 1.8s ease-in-out infinite; box-shadow:0 3px 10px rgba(0,0,0,.25); }
        @keyframes prHead{0%,100%{transform:translateY(0) rotate(0deg)}30%{transform:translateY(-5px) rotate(-5deg)}60%{transform:translateY(-3px) rotate(4deg)}}
        #chibi-projects .pr-hair{position:absolute;top:-4px;left:-3px;right:-3px;height:19px;background:#1a0a00;border-radius:50% 50% 0 0;z-index:1}
        #chibi-projects .pr-eyes{position:absolute;top:16px;left:0;right:0;display:flex;justify-content:center;gap:7px;z-index:2}
        #chibi-projects .pr-eye{width:5px;height:6px;background:#1a0a00;border-radius:50%;position:relative}
        #chibi-projects .pr-eye::after{content:'';position:absolute;top:1px;right:1px;width:2px;height:2px;background:#fff;border-radius:50%}
        #chibi-projects .pr-smile{position:absolute;bottom:7px;left:50%;transform:translateX(-50%);width:14px;height:7px;border-bottom:2.5px solid #c97b5a;border-radius:0 0 50% 50%}
        #chibi-projects .pr-blush{position:absolute;bottom:12px;width:8px;height:5px;background:rgba(255,180,180,.5);border-radius:50%}
        #chibi-projects .pr-blush.l{left:2px}#chibi-projects .pr-blush.r{right:2px}
        #chibi-projects .pr-body{width:32px;height:26px;background:linear-gradient(160deg,#312e81,#1e1b4b);border-radius:8px 8px 3px 3px;margin:0 auto;margin-top:-1px;position:relative}
        #chibi-projects .pr-arm-up{position:absolute;width:11px;height:22px;background:linear-gradient(160deg,#312e81,#1e1b4b);border-radius:5px}
        #chibi-projects .pr-arm-up.l{left:-9px;top:-10px;transform:rotate(-45deg);transform-origin:bottom center;animation:prAL 1s ease-in-out infinite alternate}
        #chibi-projects .pr-arm-up.r{right:-9px;top:-10px;transform:rotate(45deg);transform-origin:bottom center;animation:prAR 1s ease-in-out infinite alternate}
        @keyframes prAL{from{transform:rotate(-50deg)}to{transform:rotate(-35deg)}}
        @keyframes prAR{from{transform:rotate(50deg)}to{transform:rotate(35deg)}}
        #chibi-projects .pr-hand{position:absolute;top:-3px;left:50%;transform:translateX(-50%);width:8px;height:8px;background:#fdd9b5;border-radius:50%}
        #chibi-projects .pr-legs{display:flex;justify-content:center;gap:3px;margin-top:-1px}
        #chibi-projects .pr-leg{width:13px;height:15px;background:#1e1b4b;border-radius:4px 4px 6px 6px;position:relative}
        #chibi-projects .pr-leg::after{content:'';position:absolute;bottom:-3px;left:-2px;width:16px;height:6px;background:#312e81;border-radius:2px 5px 5px 2px}
        #chibi-projects .pr-star{position:absolute;animation:prStarFloat 2s ease-in-out infinite}
        @keyframes prStarFloat{0%,100%{transform:translateY(0) rotate(0deg);opacity:1}50%{transform:translateY(-8px) rotate(20deg);opacity:.6}}
      `}</style>
      <div className="pr-sign">{[1,2,3,4,5,6,7,8].map(i=><div key={i} className="pr-bulb"/>)}<span className="pr-sign-text">PROJECTS</span></div>
      <div className="pr-stage"/><div className="pr-stage-front"/>
      <div className="pr-chibi">
        <div className="pr-head"><div className="pr-hair"/><div className="pr-eyes"><div className="pr-eye"/><div className="pr-eye"/></div><div className="pr-smile"/><div className="pr-blush l"/><div className="pr-blush r"/></div>
        <div className="pr-body"><div className="pr-arm-up l"><div className="pr-hand"/></div><div className="pr-arm-up r"><div className="pr-hand"/></div></div>
        <div className="pr-legs"><div className="pr-leg"/><div className="pr-leg"/></div>
      </div>
      <div className="pr-star" style={{top:"68px",left:"28px",fontSize:"14px"}}>⭐</div>
      <div className="pr-star" style={{top:"68px",right:"24px",fontSize:"11px",animationDelay:".5s"}}>✨</div>
    </div>
  );
}

export function ChibiExperience() {
  return (
    <div id="chibi-exp" style={{position:"relative",width:"220px",height:"210px",flexShrink:0}}>
      <style>{`
        #chibi-exp .ex-wall { position:absolute; top:0; left:0; right:0; height:110px; background:var(--bg2); border-bottom:2px solid var(--border-h); border-radius:6px 6px 0 0; }
        #chibi-exp .ex-calendar { position:absolute; top:10px; right:16px; width:52px; height:60px; background:#fff; border:1px solid #ccc; border-radius:4px; box-shadow:1px 2px 6px rgba(0,0,0,.15); }
        [data-theme="dark"] #chibi-exp .ex-calendar { background:#1e1e2e; border-color:#333; }
        #chibi-exp .ex-cal-header { height:16px; background:#ef4444; border-radius:3px 3px 0 0; display:flex; align-items:center; justify-content:center; }
        #chibi-exp .ex-cal-header span { font-size:7px; font-weight:700; color:#fff; font-family:sans-serif; letter-spacing:1px; }
        #chibi-exp .ex-cal-body { padding:4px; display:grid; grid-template-columns:repeat(7,1fr); gap:1px; }
        #chibi-exp .ex-cal-day { width:5px; height:5px; border-radius:1px; background:#e5e7eb; }
        [data-theme="dark"] #chibi-exp .ex-cal-day { background:#333; }
        #chibi-exp .ex-cal-day.marked{background:#ef4444!important}
        #chibi-exp .ex-cal-day.today{background:#fbbf24!important;animation:exTodayP 1s ease-in-out infinite}
        @keyframes exTodayP{0%,100%{transform:scale(1)}50%{transform:scale(1.3)}}
        #chibi-exp .ex-pinned { position:absolute; top:-3px; left:50%; transform:translateX(-50%); width:6px; height:6px; background:#6366f1; border-radius:50%; }
        #chibi-exp .ex-plant { position:absolute; top:8px; left:10px; }
        #chibi-exp .ex-pot { width:16px; height:14px; background:#c8855a; border-radius:1px 1px 4px 4px; }
        #chibi-exp .ex-soil { position:absolute; top:0; left:2px; right:2px; height:4px; background:#6b3f1f; border-radius:2px 2px 0 0; }
        #chibi-exp .ex-stem { position:absolute; top:-18px; left:50%; width:2px; height:18px; background:#22c55e; transform:translateX(-50%); }
        #chibi-exp .ex-leaf { position:absolute; width:10px; height:6px; background:#16a34a; border-radius:0 50% 50% 0; animation:exLW 3s ease-in-out infinite; }
        #chibi-exp .ex-leaf.l { top:-14px; left:-8px; transform:scaleX(-1); animation:exLWL 3s ease-in-out infinite .5s; }
        #chibi-exp .ex-leaf.r { top:-10px; right:-8px; }
        @keyframes exLW{0%,100%{transform:rotate(-5deg)}50%{transform:rotate(5deg)}}
        @keyframes exLWL{0%,100%{transform:scaleX(-1) rotate(-5deg)}50%{transform:scaleX(-1) rotate(5deg)}}
        #chibi-exp .ex-desk { position:absolute; bottom:28px; left:8px; right:8px; height:14px; background:linear-gradient(180deg,#6b4c2a,#4a3318); border-radius:3px 3px 0 0; box-shadow:0 3px 10px rgba(0,0,0,.3); }
        #chibi-exp .ex-desk-side { position:absolute; bottom:22px; left:8px; right:8px; height:6px; background:#4a3318; }
        #chibi-exp .ex-laptop { position:absolute; bottom:42px; right:28px; }
        #chibi-exp .ex-lscreen { width:36px; height:26px; background:#0f0f1a; border-radius:3px 3px 0 0; border:2px solid #555; overflow:hidden; }
        #chibi-exp .ex-lscreen-inner { width:100%; height:100%; padding:3px; display:flex; flex-direction:column; gap:2px; }
        #chibi-exp .ex-ll { height:2px; border-radius:1px; background:rgba(124,109,250,.6); animation:exLP 2s ease-in-out infinite; }
        @keyframes exLP{0%,100%{opacity:.3}50%{opacity:.9}}
        #chibi-exp .ex-lbase { width:38px; height:4px; background:#555; border-radius:0 0 2px 2px; }
        #chibi-exp .ex-chair { position:absolute; bottom:14px; left:26px; }
        #chibi-exp .ex-chair-seat { width:36px; height:6px; background:#555; border-radius:3px; }
        #chibi-exp .ex-chair-back { position:absolute; top:-40px; left:0; width:6px; height:40px; background:#555; border-radius:3px; }
        #chibi-exp .ex-chair-leg { position:absolute; bottom:-16px; width:4px; height:16px; background:#444; border-radius:2px; }
        #chibi-exp .ex-chair-leg.l{left:4px}#chibi-exp .ex-chair-leg.r{right:4px}
        #chibi-exp .ex-chibi { position:absolute; bottom:18px; left:30px; }
        #chibi-exp .ex-head { width:30px; height:30px; background:linear-gradient(160deg,#fdd9b5,#f5b97c); border-radius:50%; position:relative; animation:exHT 3s ease-in-out infinite; box-shadow:0 2px 6px rgba(0,0,0,.2); }
        @keyframes exHT{0%,100%{transform:rotate(-5deg)}50%{transform:rotate(5deg)}}
        #chibi-exp .ex-hair{position:absolute;top:-3px;left:-2px;right:-2px;height:15px;background:#1a0a00;border-radius:50% 50% 0 0;z-index:1}
        #chibi-exp .ex-eyes{position:absolute;top:13px;left:0;right:0;display:flex;justify-content:center;gap:6px;z-index:2}
        #chibi-exp .ex-eye{width:4px;height:5px;background:#1a0a00;border-radius:50%;position:relative}
        #chibi-exp .ex-eye::after{content:'';position:absolute;top:1px;right:1px;width:1.5px;height:1.5px;background:#fff;border-radius:50%}
        #chibi-exp .ex-eyebrow{position:absolute;top:10px;left:0;right:0;display:flex;justify-content:center;gap:8px;z-index:2}
        #chibi-exp .ex-brow{width:5px;height:1.5px;background:#1a0a00;border-radius:2px}
        #chibi-exp .ex-brow.r{transform:rotate(-10deg)}
        #chibi-exp .ex-smile-sm{position:absolute;bottom:6px;left:50%;transform:translateX(-50%);width:8px;height:3px;border-bottom:1.5px solid #c97b5a;border-radius:0 0 50% 50%}
        #chibi-exp .ex-body-sit{width:28px;height:22px;background:#92400e;border-radius:6px 6px 2px 2px;margin:0 auto;margin-top:-1px;position:relative}
        #chibi-exp .ex-arm-clip{position:absolute;top:-2px;right:-10px;width:10px;height:18px;background:#92400e;border-radius:4px;transform:rotate(-20deg);transform-origin:top;animation:exAC .8s ease-in-out infinite alternate}
        @keyframes exAC{from{transform:rotate(-22deg)}to{transform:rotate(-14deg)}}
        #chibi-exp .ex-clipboard-sm{position:absolute;top:-4px;right:-8px;width:16px;height:20px;background:#e5e7eb;border-radius:2px;border:1px solid #9ca3af}
        [data-theme="dark"] #chibi-exp .ex-clipboard-sm{background:#2a2a3a;border-color:#444}
        #chibi-exp .ex-clip-lines{position:absolute;top:6px;left:2px;right:2px;display:flex;flex-direction:column;gap:2px}
        #chibi-exp .ex-cll{height:1.5px;background:#9ca3af;border-radius:1px}
        #chibi-exp .ex-cll:nth-child(1){width:85%}#chibi-exp .ex-cll:nth-child(2){width:65%}#chibi-exp .ex-cll:nth-child(3){width:75%}
        #chibi-exp .ex-arm-rest{position:absolute;top:4px;left:-9px;width:10px;height:16px;background:#92400e;border-radius:4px;transform:rotate(15deg);transform-origin:top}
        #chibi-exp .ex-hand-s{position:absolute;bottom:-2px;left:50%;transform:translateX(-50%);width:7px;height:7px;background:#fdd9b5;border-radius:50%}
        #chibi-exp .ex-sit-legs{display:flex;gap:3px;margin-top:-1px}
        #chibi-exp .ex-sit-leg{width:12px;height:10px;background:#78350f;border-radius:3px 3px 4px 4px;position:relative}
        #chibi-exp .ex-sit-leg::after{content:'';position:absolute;bottom:-3px;left:-1px;width:14px;height:5px;background:#92400e;border-radius:2px 4px 4px 2px}
        #chibi-exp .ex-briefcase { position:absolute; bottom:8px; right:10px; }
        #chibi-exp .ex-bc-body { width:30px; height:22px; background:#6366f1; border-radius:4px; border:2px solid #4f46e5; }
        #chibi-exp .ex-bc-handle { position:absolute; top:-7px; left:50%; transform:translateX(-50%); width:14px; height:8px; border:2px solid #4f46e5; border-bottom:none; border-radius:4px 4px 0 0; }
        #chibi-exp .ex-bc-mid { position:absolute; top:50%; left:0; right:0; height:2px; background:#4f46e5; transform:translateY(-50%); }
        #chibi-exp .ex-bc-clasp { position:absolute; top:50%; left:50%; transform:translate(-50%,-50%); width:6px; height:6px; background:#818cf8; border-radius:50%; }
        #chibi-exp .ex-bc-float { animation:exBF 3.5s ease-in-out infinite; }
        @keyframes exBF{0%,100%{transform:translateY(0)}50%{transform:translateY(-4px)}}
      `}</style>
      <div className="ex-wall">
        <div className="ex-plant"><div style={{position:"relative"}}><div className="ex-stem"/><div className="ex-leaf l"/><div className="ex-leaf r"/></div><div className="ex-pot"><div className="ex-soil"/></div></div>
        <div className="ex-calendar"><div className="ex-pinned"/><div className="ex-cal-header"><span>DEC</span></div><div className="ex-cal-body">{[...Array(21)].map((_,i)=><div key={i} className={`ex-cal-day${i===14?"today":i===8||i===12?" marked":""}`}/>)}</div></div>
      </div>
      <div className="ex-desk"/><div className="ex-desk-side"/>
      <div className="ex-laptop"><div className="ex-lscreen"><div className="ex-lscreen-inner">{[...Array(4)].map((_,i)=><div key={i} className="ex-ll"/>)}</div></div><div className="ex-lbase"/></div>
      <div className="ex-chair"><div className="ex-chair-back"/><div className="ex-chair-seat"/><div className="ex-chair-leg l"/><div className="ex-chair-leg r"/></div>
      <div className="ex-chibi">
        <div className="ex-head"><div className="ex-hair"/><div className="ex-eyebrow"><div className="ex-brow"/><div className="ex-brow r"/></div><div className="ex-eyes"><div className="ex-eye"/><div className="ex-eye"/></div><div className="ex-smile-sm"/></div>
        <div className="ex-body-sit"><div className="ex-arm-rest"><div className="ex-hand-s"/></div><div className="ex-arm-clip"><div className="ex-clipboard-sm"><div className="ex-clip-lines"><div className="ex-cll"/><div className="ex-cll"/><div className="ex-cll"/></div></div></div></div>
        <div className="ex-sit-legs"><div className="ex-sit-leg"/><div className="ex-sit-leg"/></div>
      </div>
      <div className="ex-briefcase ex-bc-float"><div className="ex-bc-body"><div className="ex-bc-handle"/><div className="ex-bc-mid"/><div className="ex-bc-clasp"/></div></div>
    </div>
  );
}

export function ChibiContact() {
  return (
    <div id="chibi-contact" style={{position:"relative",width:"260px",height:"170px",flexShrink:0}}>
      <style>{`
        #chibi-contact .ct-ground { position:absolute; bottom:20px; left:0; right:0; height:2px; background:var(--border-h); }
        #chibi-contact .ct-mailbox { position:absolute; bottom:21px; right:20px; }
        #chibi-contact .ct-mb-post { width:8px; height:50px; background:#6b7280; border-radius:2px; margin:0 auto; }
        #chibi-contact .ct-mb-body { position:absolute; top:0; left:50%; transform:translateX(-50%); width:50px; height:34px; background:#6366f1; border-radius:5px 5px 3px 3px; border:2px solid #4f46e5; box-shadow:0 4px 12px rgba(99,102,241,.4); }
        #chibi-contact .ct-mb-door { position:absolute; bottom:0; left:4px; right:4px; height:14px; background:#4f46e5; border-radius:0 0 2px 2px; }
        #chibi-contact .ct-mb-slot { position:absolute; top:4px; left:50%; transform:translateX(-50%); width:22px; height:4px; background:#312e81; border-radius:2px; }
        #chibi-contact .ct-mb-flag-post { width:2px; height:14px; background:#9ca3af; }
        #chibi-contact .ct-mb-flag { position:absolute; top:-12px; right:-4px; }
        #chibi-contact .ct-mb-flag-rect { position:absolute; top:0; left:2px; width:12px; height:8px; background:#ef4444; border-radius:1px; animation:ctFW .6s ease-in-out infinite alternate; }
        @keyframes ctFW{from{transform:rotate(-5deg) skewX(-3deg)}to{transform:rotate(5deg) skewX(3deg)}}
        #chibi-contact .ct-stars { position:absolute; top:-20px; right:-10px; }
        #chibi-contact .ct-star-pop { font-size:10px; position:absolute; animation:ctSP 1.5s ease-in-out infinite; }
        @keyframes ctSP{0%,100%{opacity:1;transform:scale(1)}50%{opacity:.4;transform:scale(1.4) rotate(20deg)}}
        #chibi-contact .ct-chibi { position:absolute; bottom:22px; left:20px; animation:ctRun .4s ease-in-out infinite alternate; }
        @keyframes ctRun{from{transform:translateY(0)}to{transform:translateY(-4px)}}
        #chibi-contact .ct-r-head { width:40px; height:40px; background:linear-gradient(160deg,#fdd9b5,#f5b97c); border-radius:50%; position:relative; box-shadow:0 2px 8px rgba(0,0,0,.2); transform:rotate(12deg); }
        #chibi-contact .ct-r-hair{position:absolute;top:-4px;left:-3px;right:-3px;height:20px;background:#1a0a00;border-radius:50% 50% 0 0;z-index:1}
        #chibi-contact .ct-r-hair-fly{position:absolute;top:2px;right:-10px;width:14px;height:10px;background:#1a0a00;border-radius:0 50% 50% 0;animation:ctHF .4s ease-in-out infinite alternate}
        @keyframes ctHF{from{transform:rotate(-10deg)}to{transform:rotate(5deg)}}
        #chibi-contact .ct-r-eyes{position:absolute;top:16px;left:0;right:0;display:flex;justify-content:center;gap:8px;z-index:2}
        #chibi-contact .ct-r-eye{width:5px;height:6px;background:#1a0a00;border-radius:50%;position:relative}
        #chibi-contact .ct-r-eye::after{content:'';position:absolute;top:1px;right:1px;width:2px;height:2px;background:#fff;border-radius:50%}
        #chibi-contact .ct-r-mouth{position:absolute;bottom:9px;left:52%;transform:translateX(-50%);width:10px;height:5px;border-right:2px solid #c97b5a;border-bottom:2px solid #c97b5a;border-radius:0 0 50% 0}
        #chibi-contact .ct-sweat{position:absolute;top:2px;left:-4px;width:5px;height:7px;background:rgba(100,200,255,.7);border-radius:50% 50% 50% 0;animation:ctSW 1s ease-in-out infinite}
        @keyframes ctSW{0%,100%{transform:translateY(0)}50%{transform:translateY(3px)}}
        #chibi-contact .ct-r-body{width:34px;height:28px;background:linear-gradient(160deg,#065f46,#064e3b);border-radius:8px 8px 3px 3px;margin:0 auto;margin-top:-2px;position:relative;transform:rotate(8deg)}
        #chibi-contact .ct-run-arm{position:absolute;width:11px;height:20px;background:linear-gradient(160deg,#065f46,#064e3b);border-radius:5px}
        #chibi-contact .ct-run-arm.l{left:-9px;top:0;transform:rotate(50deg);transform-origin:top;animation:ctAL .4s ease-in-out infinite alternate}
        #chibi-contact .ct-run-arm.r{right:-9px;top:2px;transform:rotate(-30deg);transform-origin:top;animation:ctAR .4s ease-in-out infinite alternate}
        @keyframes ctAL{from{transform:rotate(45deg)}to{transform:rotate(60deg)}}
        @keyframes ctAR{from{transform:rotate(-25deg)}to{transform:rotate(-40deg)}}
        #chibi-contact .ct-run-hand{position:absolute;top:-3px;left:50%;transform:translateX(-50%);width:8px;height:8px;background:#fdd9b5;border-radius:50%}
        #chibi-contact .ct-run-legs{display:flex;justify-content:center;gap:2px;margin-top:-1px;transform:rotate(8deg)}
        #chibi-contact .ct-run-leg{width:12px;height:16px;background:#064e3b;border-radius:4px 4px 5px 5px;position:relative}
        #chibi-contact .ct-run-leg.l{transform-origin:top;animation:ctLL .4s ease-in-out infinite alternate}
        #chibi-contact .ct-run-leg.r{transform-origin:top;animation:ctLR .4s ease-in-out infinite alternate}
        @keyframes ctLL{from{transform:rotate(-20deg)}to{transform:rotate(20deg)}}
        @keyframes ctLR{from{transform:rotate(20deg)}to{transform:rotate(-20deg)}}
        #chibi-contact .ct-run-leg::after{content:'';position:absolute;bottom:-3px;left:-2px;width:15px;height:6px;background:#065f46;border-radius:2px 5px 5px 2px}
        #chibi-contact .ct-speed { position:absolute; height:2px; background:var(--border-h); border-radius:2px; opacity:0.5; animation:ctSpd .4s linear infinite; }
        @keyframes ctSpd{0%{opacity:.6;transform:scaleX(1)}100%{opacity:0;transform:scaleX(.3) translateX(-20px)}}
        #chibi-contact .ct-letter{position:absolute;top:30px;left:70px;width:22px;height:16px;background:#fef9c3;border:1.5px solid #fde047;border-radius:2px;animation:ctLF .8s ease-in-out infinite alternate;transform:rotate(-15deg)}
        @keyframes ctLF{from{transform:rotate(-15deg) translateY(0)}to{transform:rotate(-5deg) translateY(-6px)}}
        #chibi-contact .ct-letter::after{content:'';position:absolute;top:0;left:0;right:0;height:0;border-left:11px solid transparent;border-right:11px solid transparent;border-top:8px solid #fde047}
      `}</style>
      <div className="ct-ground"/>
      <div className="ct-speed" style={{top:"55px",left:"60px",width:"30px"}}/>
      <div className="ct-speed" style={{top:"65px",left:"50px",width:"20px",animationDelay:".15s"}}/>
      <div className="ct-speed" style={{top:"75px",left:"68px",width:"25px",animationDelay:".3s"}}/>
      <div className="ct-letter"/>
      <div className="ct-chibi">
        <div style={{position:"relative"}}>
          <div className="ct-r-head"><div className="ct-r-hair"><div className="ct-r-hair-fly"/></div><div className="ct-r-eyes"><div className="ct-r-eye"/><div className="ct-r-eye"/></div><div className="ct-r-mouth"/><div className="ct-sweat"/></div>
        </div>
        <div className="ct-r-body"><div className="ct-run-arm l"><div className="ct-run-hand"/></div><div className="ct-run-arm r"><div className="ct-run-hand"/></div></div>
        <div className="ct-run-legs"><div className="ct-run-leg l"/><div className="ct-run-leg r"/></div>
      </div>
      <div className="ct-mailbox">
        <div className="ct-mb-body"><div className="ct-mb-slot"/><div className="ct-mb-door"/><div className="ct-mb-flag"><div className="ct-mb-flag-post"/><div className="ct-mb-flag-rect"/></div></div>
        <div className="ct-mb-post"/>
        <div className="ct-stars"><div className="ct-star-pop" style={{top:"0px",left:"0px"}}>💌</div><div className="ct-star-pop" style={{top:"-14px",left:"14px",animationDelay:".4s",fontSize:"8px"}}>✨</div></div>
      </div>
    </div>
  );
}