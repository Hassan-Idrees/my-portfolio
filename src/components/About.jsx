import React from "react";

export default function About({ shell, cardBase, isMobile, colors, getRevealStyle }) {
  return (
    <section id="about" data-reveal-id="about" style={{ ...getRevealStyle("about"), paddingTop: 0 }}>
      <div style={shell}>
        <div style={{ ...cardBase, padding: isMobile ? "28px 22px" : "38px 40px", background: "radial-gradient(circle at top right, rgba(232,98,44,0.12), transparent 42%), linear-gradient(180deg, #19191d 0%, #17171b 100%)" }}>
          <div style={{ display: "inline-flex", alignItems: "center", gap: "12px", marginBottom: "20px" }}>
            <span aria-hidden="true" style={{ width: "36px", height: "2px", borderRadius: "999px", background: colors.accent }} />
            <span style={{ color: colors.accent, textTransform: "uppercase", letterSpacing: "4px", fontSize: "12px", fontWeight: 700 }}>ABOUT ME</span>
          </div>

          <h2 style={{ margin: 0, color: "#f0ede8", lineHeight: 1.15, marginBottom: "18px", fontSize: isMobile ? "1.95rem" : "clamp(2.3rem, 4.2vw, 3.2rem)" }}>
            Turning ideas into <span style={{ backgroundImage: `linear-gradient(90deg, ${colors.accent}, ${colors.accentLight})`, WebkitBackgroundClip: "text", backgroundClip: "text", color: "transparent" }}>production-ready</span> products
          </h2>

          <p style={{ margin: 0, maxWidth: "92ch", color: colors.text, lineHeight: 1.85, fontSize: isMobile ? "1rem" : "1.08rem" }}>
            I'm an AI Automation Engineer and SaaS Builder based in Pakistan, currently serving as Team Lead at Flowveo — where I lead a team delivering production-ready MVPs, SaaS platforms, and intelligent automation systems for clients across industries. I've built and shipped AI-powered web applications, RAG systems, and multi-agent workflows integrating OpenAI GPT and Anthropic Claude — alongside scalable automation pipelines on n8n, Make, and Zapier. I work with tools like Lovable, Replit, Supabase, Firebase, HubSpot, and GoHighLevel to take products from concept to launch quickly and reliably. Alongside my team role, I work as an independent freelancer serving startups, agencies, and businesses worldwide — bringing the same production-ready quality to every engagement, regardless of scale or timezone.
          </p>
        </div>
      </div>
    </section>
  );
}
