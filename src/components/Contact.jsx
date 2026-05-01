import React from "react";

export default function Contact({ sectionStyle, getRevealStyle, isMobile, colors, shell, isTouch }) {
  return (
    <section id="contact" data-reveal-id="contact" style={{ ...sectionStyle, scrollMarginTop: "120px", ...getRevealStyle("contact"), display: "flex", alignItems: "center", justifyContent: "center" }}>
      <div style={{ width: "100%", maxWidth: isMobile ? "100%" : "600px", margin: "0 auto", padding: isMobile ? "0 16px" : "0", position: "relative" }}>
        <div style={{ position: "relative", padding: "clamp(28px, 5vw, 40px) clamp(20px, 4vw, 32px)", borderRadius: "24px", border: `2px solid ${colors.accent}`, background: `linear-gradient(135deg, rgba(255, 153, 0, 0.05) 0%, rgba(255, 153, 0, 0.02) 100%)`, textAlign: "center" }}>
          <div style={{ position: "absolute", top: 0, left: "24px", right: "24px", height: "2px", background: `linear-gradient(90deg, transparent, ${colors.accent}, transparent)`, borderRadius: "24px 24px 0 0" }} />

          <div style={{ position: "absolute", bottom: "-60px", right: "-60px", width: "200px", height: "200px", background: `radial-gradient(circle, ${colors.accentGlow} 0%, transparent 70%)`, borderRadius: "50%", pointerEvents: "none", zIndex: -1 }} />

          <div style={{ position: "relative", zIndex: 1 }}>
            <h2 style={{ margin: "0 0 16px", fontSize: "clamp(1.6rem, 5vw, 2.1rem)", lineHeight: 1.3, fontWeight: 700, color: colors.light }}>Let's Build Something <span style={{ background: `linear-gradient(135deg, ${colors.accent} 0%, #ff8533 100%)`, WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent", backgroundClip: "text" }}>Powerful</span></h2>

            <p style={{ margin: "0 0 28px", fontSize: "clamp(0.9rem, 2vw, 0.95rem)", lineHeight: 1.8, color: colors.light, opacity: 0.85 }}>Whether you're a founder validating an idea, an agency needing a white-label solution, or a business ready to automate — let's talk.</p>

            <div style={{ display: "flex", gap: "12px", flexWrap: "wrap", justifyContent: "center" }}>
              <a href="mailto:your@email.com" style={{ padding: "clamp(10px, 2vw, 12px) clamp(18px, 3vw, 24px)", borderRadius: "999px", textDecoration: "none", fontWeight: 700, fontSize: "clamp(0.9rem, 1.5vw, 0.95rem)", background: colors.accent, color: colors.dark, border: `2px solid ${colors.accent}`, transition: "all 200ms ease", cursor: "pointer" }} onMouseEnter={(e)=>{ if(!isTouch){ e.currentTarget.style.background = "transparent"; e.currentTarget.style.color = colors.accent; }}} onMouseLeave={(e)=>{ if(!isTouch){ e.currentTarget.style.background = colors.accent; e.currentTarget.style.color = colors.dark; }}}>Send a Message</a>

              <a href="https://linkedin.com/in/yourprofile" target="_blank" rel="noopener noreferrer" style={{ padding: "clamp(10px, 2vw, 12px) clamp(18px, 3vw, 24px)", borderRadius: "999px", textDecoration: "none", fontWeight: 700, fontSize: "clamp(0.9rem, 1.5vw, 0.95rem)", background: "transparent", color: colors.light, border: `2px solid ${colors.border}`, transition: "all 200ms ease", cursor: "pointer" }} onMouseEnter={(e)=>{ if(!isTouch){ e.currentTarget.style.borderColor = colors.accent; e.currentTarget.style.color = colors.accent; }}} onMouseLeave={(e)=>{ if(!isTouch){ e.currentTarget.style.borderColor = colors.border; e.currentTarget.style.color = colors.light; }}}>LinkedIn</a>

              <a href="https://upwork.com/yourprofile" target="_blank" rel="noopener noreferrer" style={{ padding: "clamp(10px, 2vw, 12px) clamp(18px, 3vw, 24px)", borderRadius: "999px", textDecoration: "none", fontWeight: 700, fontSize: "clamp(0.9rem, 1.5vw, 0.95rem)", background: "transparent", color: colors.light, border: `2px solid ${colors.border}`, transition: "all 200ms ease", cursor: "pointer" }} onMouseEnter={(e)=>{ if(!isTouch){ e.currentTarget.style.borderColor = colors.accent; e.currentTarget.style.color = colors.accent; }}} onMouseLeave={(e)=>{ if(!isTouch){ e.currentTarget.style.borderColor = colors.border; e.currentTarget.style.color = colors.light; }}}>Upwork</a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
