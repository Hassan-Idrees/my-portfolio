import React from "react";

export default function Services({ shell, getRevealStyle, services, isMobile, isTablet, isTouch, hoveredService, setHoveredService, colors, cardBase }) {
  return (
    <section id="services" data-reveal-id="services" style={{ ...getRevealStyle("services"), scrollMarginTop: "120px" }}>
      <div style={shell}>
        <div style={{ marginBottom: "12px", color: colors.accent, fontWeight: 700 }}>Services</div>
        <div style={{ display: "grid", gap: "20px", gridTemplateColumns: isMobile ? "1fr" : isTablet ? "repeat(2, minmax(0, 1fr))" : "repeat(3, minmax(0, 1fr))" }}>
          {services.map((service) => {
            const isServiceHovered = hoveredService === service.title;

            return (
              <article key={service.title} onMouseEnter={() => !isTouch && setHoveredService(service.title)} onMouseLeave={() => !isTouch && setHoveredService(null)} style={{ ...cardBase, background: isServiceHovered ? colors.cardHover : colors.card, border: `1px solid ${isServiceHovered ? colors.accentGlow : colors.border}`, borderRadius: "14px", padding: isMobile ? "24px" : isTablet ? "28px" : "36px", transform: isServiceHovered && !isTouch ? "translateY(-8px)" : "translateY(0)", boxShadow: isServiceHovered && !isTouch ? `0 0 0 1px ${colors.accentGlow}, 0 22px 44px rgba(0,0,0,0.34)` : "0 12px 30px rgba(0,0,0,0.2)", transition: "transform 280ms cubic-bezier(0.22, 1, 0.36, 1), box-shadow 280ms cubic-bezier(0.22, 1, 0.36, 1), border-color 280ms cubic-bezier(0.22, 1, 0.36, 1), background 280ms cubic-bezier(0.22, 1, 0.36, 1)" }}>
                <h3 style={{ margin: "0 0 12px", color: colors.light, fontSize: "clamp(1rem, 2.5vw, 1.18rem)" }}>{service.title}</h3>
                <p style={{ margin: 0, lineHeight: 1.75, color: colors.text }}>{service.text}</p>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
