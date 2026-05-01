import React from "react";

export default function Hero({
  isMobile,
  isTablet,
  isLaptop,
  viewportWidth,
  shell,
  colors,
  navigateToSection,
  setHoveredCard,
}) {
  return (
    <section
      id="home"
      style={{
        minHeight: "auto",
        padding: isMobile
          ? "90px 24px 40px"
          : isTablet
          ? "80px 24px 60px"
          : isLaptop
          ? "80px 24px 40px"
          : viewportWidth >= 1400
          ? "110px 24px 60px"
          : "100px 24px 60px",
        scrollMarginTop: "90px",
      }}
    >
      <div style={{ maxWidth: "1200px", width: "100%", margin: "0 auto" }}>
        <div
          style={{
            display: "flex",
            flexDirection: isMobile ? "column-reverse" : "row",
            alignItems: isLaptop ? "flex-start" : "center",
            gap: isMobile ? "32px" : isTablet ? "30px" : isLaptop ? "24px" : "40px",
          }}
        >
          <div style={{ width: isMobile ? "100%" : "55%", textAlign: isMobile ? "center" : "left" }}>
            <div style={{ display: "flex", justifyContent: isMobile ? "center" : "flex-start", marginBottom: isLaptop ? "16px" : "20px", marginTop: 0 }}>
              <span style={{ display: "inline-flex", alignItems: "center", gap: "10px", borderRadius: "999px", border: `1px solid ${colors.border}`, background: "rgba(255,255,255,0.03)", color: colors.light, padding: "9px 14px", fontSize: "13px", fontWeight: 600 }}>
                <span aria-hidden="true" style={{ width: "8px", height: "8px", borderRadius: "50%", background: "#4cd16f", animation: "dotPulse 1.8s ease-in-out infinite" }} />
                Available for projects
              </span>
            </div>

            <p style={{ margin: "0 0 10px", color: colors.muted, fontSize: "clamp(13px, 1.2vw, 15px)" }}>
              Hi, I&apos;m <span style={{ color: colors.accent, fontWeight: 700 }}>Muhammad Hassan Idrees</span>
            </p>

            <h1 style={{ margin: `0 0 ${isLaptop ? "13px" : "16px"}`, fontSize: "clamp(30px, 4vw, 58px)", fontWeight: 900, lineHeight: isTablet ? 1.06 : 1.04, letterSpacing: "-2px", backgroundImage: `linear-gradient(100deg, ${colors.light}, ${colors.accent}, ${colors.light})`, backgroundSize: "220% 220%", backgroundPosition: "0% 50%", WebkitBackgroundClip: "text", backgroundClip: "text", color: "transparent", animation: "gradientShift 6s linear infinite" }}>
              AI Automation Engineer &amp; SaaS Builder
            </h1>

            <p style={{ maxWidth: isMobile ? "100%" : "480px", fontSize: "clamp(14px, 1.5vw, 17px)", lineHeight: 1.7, color: colors.muted, margin: `0 0 ${isLaptop ? "22px" : "28px"}` }}>
              Building MVPs, SaaS Platforms &amp; AI-Powered Automations. I help startups &amp; businesses go from idea to production — fast.
            </p>

            <div style={{ display: "flex", flexDirection: isMobile ? "column" : "row", gap: "12px", justifyContent: isMobile ? "center" : "flex-start", marginBottom: isLaptop ? "29px" : "36px", width: isMobile ? "100%" : "auto" }}>
              <a href="#contact" onClick={navigateToSection("contact") } style={{ background: `linear-gradient(120deg, ${colors.accent}, ${colors.accentLight})`, color: colors.light, padding: isMobile ? "14px 28px" : isTablet || isLaptop ? "14px 32px" : "17px 42px", fontSize: isMobile ? "13px" : isTablet || isLaptop ? "13px" : "14px", borderRadius: "999px", textDecoration: "none", fontWeight: 700, boxShadow: `0 16px 34px ${colors.accentGlow}`, width: isMobile ? "100%" : "auto", textAlign: "center", boxSizing: "border-box" }}>
                Let&apos;s Work Together →
              </a>
              <a href="#projects" onClick={navigateToSection("projects")} style={{ color: colors.light, textDecoration: "none", padding: isMobile ? "14px 28px" : isTablet || isLaptop ? "14px 32px" : "17px 42px", fontSize: isMobile ? "13px" : isTablet || isLaptop ? "13px" : "14px", borderRadius: "999px", border: `1px solid ${colors.border}`, background: "transparent", width: isMobile ? "100%" : "auto", textAlign: "center", boxSizing: "border-box" }}>
                View Projects
              </a>
            </div>

            <div style={{ display: isMobile ? "grid" : "flex", gridTemplateColumns: isMobile ? "repeat(3, 1fr)" : undefined, gap: isMobile ? "16px" : "clamp(24px, 4vw, 56px)", width: isMobile ? "100%" : "auto", justifyContent: isMobile ? undefined : "flex-start" }}>
              {[{ value: "4+", label: "Years Experience" }, { value: "50+", label: "Projects Delivered" }, { value: "100%", label: "Client Satisfaction" }].map((item) => (
                <div key={item.label} style={{ textAlign: "center" }}>
                  <p style={{ margin: 0, color: colors.accent, fontWeight: 900, fontSize: isMobile ? "clamp(22px, 6vw, 28px)" : "clamp(24px, 3vw, 40px)", lineHeight: 1 }}>{item.value}</p>
                  <p style={{ margin: "8px 0 0", color: colors.muted, fontSize: isMobile ? "8px" : "clamp(8px, 0.8vw, 10px)", fontWeight: 600, textTransform: "uppercase", letterSpacing: "1.3px" }}>{item.label}</p>
                </div>
              ))}
            </div>
          </div>

          <div style={{ width: isMobile ? "100%" : "45%", display: "flex", justifyContent: "center" }}>
            {isMobile ? (
              <div className="hero-image--mobile">
                <div className="hero-image--mobile-inner">
                  <img className="hero-image__img--mobile" src="https://res.cloudinary.com/dd9zq4nvl/image/upload/v1777506102/ChatGPT_Image_Apr_30_2026_04_29_24_AM-Photoroom_qeaon1.png" alt="Muhammad Hassan Idrees, AI Automation Engineer and SaaS Builder" loading="lazy" style={{ objectFit: "cover", objectPosition: "center top" }} />
                </div>
              </div>
            ) : (
              <div style={{ width: "100%", maxWidth: isTablet ? "300px" : isLaptop ? "350px" : viewportWidth >= 1400 ? "480px" : "420px", margin: 0 }}>
                <div className="hero-image">
                  <img className="hero-image__img" src="https://res.cloudinary.com/dd9zq4nvl/image/upload/v1777506102/ChatGPT_Image_Apr_30_2026_04_29_24_AM-Photoroom_qeaon1.png" alt="Muhammad Hassan Idrees, AI Automation Engineer and SaaS Builder" loading="lazy" style={{ width: "100%", height: "auto", maxHeight: isTablet ? "64vh" : "85vh", objectFit: "contain", objectPosition: "center bottom", display: "block" }} />
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
