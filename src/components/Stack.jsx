import React from "react";

export default function Stack({ shell, getRevealStyle, techStackCategories, isMobile, isTablet, hoveredTool, setHoveredTool, colors, cardBase, isTouch }) {
  return (
    <section id="stack" data-reveal-id="stack" style={{ ...getRevealStyle("stack"), scrollMarginTop: "120px" }}>
      <div style={shell}>
        <div style={{ marginBottom: "12px", color: colors.accent }}>Tech Stack</div>
        <div style={{ display: "grid", gap: "20px", gridTemplateColumns: isMobile ? "1fr" : isTablet ? "repeat(2, minmax(0, 1fr))" : "repeat(2, minmax(0, 1fr))" }}>
          {techStackCategories.map((group) => (
            <article key={group.category} style={{ ...cardBase, borderRadius: "14px", padding: isMobile ? "20px" : "24px" }}>
              <p style={{ margin: "0 0 14px", color: colors.muted, textTransform: "uppercase", fontSize: "clamp(0.8rem, 1.5vw, 0.85rem)", letterSpacing: "3px", fontWeight: 600 }}>{group.category}</p>
              <div style={{ display: "flex", flexWrap: "wrap", gap: "10px" }}>
                {group.tools.map((tool) => {
                  const toolKey = `${group.category}-${tool}`;
                  const isToolHovered = hoveredTool === toolKey;

                  return (
                    <span key={tool} onMouseEnter={() => !isTouch && setHoveredTool(toolKey)} onMouseLeave={() => !isTouch && setHoveredTool("")} style={{ borderRadius: "999px", border: `1px solid ${isToolHovered && !isTouch ? colors.accent : "rgba(255,255,255,0.06)"}`, background: colors.card, color: isToolHovered && !isTouch ? colors.accent : colors.light, padding: "10px 14px", fontFamily: "JetBrains Mono, monospace", fontSize: "clamp(0.78rem, 1.2vw, 0.84rem)", lineHeight: 1.2, transform: isToolHovered && !isTouch ? "translateY(-3px)" : "translateY(0)", boxShadow: isToolHovered && !isTouch ? `0 8px 18px ${colors.accentGlow}` : "none", transition: "transform 220ms cubic-bezier(0.22, 1, 0.36, 1), border-color 220ms cubic-bezier(0.22, 1, 0.36, 1), color 220ms cubic-bezier(0.22, 1, 0.36, 1), box-shadow 220ms cubic-bezier(0.22, 1, 0.36, 1)" }}>{tool}</span>
                  );
                })}
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
