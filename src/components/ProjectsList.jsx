import React from "react";

export default function ProjectsList({ shell, getRevealStyle, projects, isMobile, isTablet, isTouch, hoveredCard, setHoveredCard, setSelectedProject, setActiveImageIndex, colors, viewportWidth }) {
  return (
    <section id="projects" data-reveal-id="projects" style={{ ...getRevealStyle("projects"), scrollMarginTop: "120px" }}>
      <div style={shell}>
        <div style={{ marginBottom: "12px", color: colors.accent }}>Projects</div>
        <div style={{ display: "grid", gap: "24px", gridTemplateColumns: isMobile ? "1fr" : isTablet ? "repeat(2, minmax(0, 1fr))" : "repeat(3, minmax(0, 1fr))" }}>
          {projects.map((project) => {
            const isHovered = hoveredCard === project.name;
            const visibleTech = (project.tech || []).slice(0, 4);
            const extraTechCount = (project.tech || []).length - visibleTech.length;

            return (
              <article key={project.name} onClick={() => { setSelectedProject(project); setActiveImageIndex(0); }} onMouseEnter={() => !isTouch && setHoveredCard(project.name)} onMouseLeave={() => !isTouch && setHoveredCard(null)} style={{ background: colors.card, border: `1px solid ${isHovered && !isTouch ? colors.accent : colors.border}`, borderRadius: "20px", overflow: "hidden", cursor: "pointer", transition: "transform 200ms ease, border-color 200ms ease, box-shadow 200ms ease", transform: isHovered && !isTouch ? "translateY(-4px)" : "translateY(0)", boxShadow: isHovered && !isTouch ? "0 12px 40px rgba(232,98,44,0.15)" : "none", display: "flex", flexDirection: "column" }}>
                {project.thumbnail ? (
                  <div style={{ width: "100%", height: "200px", background: "#0d0d0f", position: "relative", overflow: "hidden" }}>
                    <img src={project.thumbnail} alt={project.name} style={{ width: "100%", height: "200px", objectFit: "contain", objectPosition: "center", background: "#0d0d0f", borderRadius: "16px 16px 0 0", padding: "12px", boxSizing: "border-box" }} />
                    <div aria-hidden={!isHovered} style={{ position: "absolute", inset: 0, display: "flex", alignItems: "center", justifyContent: "center", background: isHovered ? "rgba(0,0,0,0.45)" : "transparent", color: colors.accent, fontWeight: 600, fontSize: 14, transition: "background 180ms ease, opacity 180ms ease", pointerEvents: "none" }}>{isHovered && !isTouch ? "View Details →" : null}</div>
                  </div>
                ) : (
                  <div style={{ width: "100%", height: "160px", background: colors.background, display: "flex", alignItems: "center", justifyContent: "center", borderBottom: `1px solid rgba(255,255,255,0.06)` }}>
                    <svg width="40" height="40" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" style={{ opacity: 0.4 }}>
                      <rect x="3" y="3" width="8" height="8" rx="2" stroke={colors.muted} strokeWidth="1.4" />
                      <rect x="13" y="3" width="8" height="8" rx="2" stroke={colors.muted} strokeWidth="1.4" />
                      <rect x="3" y="13" width="8" height="8" rx="2" stroke={colors.muted} strokeWidth="1.4" />
                      <rect x="13" y="13" width="8" height="8" rx="2" stroke={colors.muted} strokeWidth="1.4" />
                    </svg>
                  </div>
                )}

                <div style={{ padding: "20px", display: "flex", flexDirection: "column", flex: 1 }}>
                  <div style={{ display: "flex", gap: "6px", flexWrap: "wrap", marginBottom: "8px" }}>{(project.categories || []).map((cat) => (<span key={cat} style={{ fontSize: "10px", fontWeight: 700, letterSpacing: "0.1em", textTransform: "uppercase", color: colors.accentLight, background: "rgba(232,98,44,0.1)", borderRadius: 999, padding: "3px 10px" }}>{cat}</span>))}</div>

                  <div style={{ display: "block" }}>
                    <div style={{ fontSize: "1rem", fontWeight: 700, color: "#f0ede8", lineHeight: 1.4, margin: "10px 0 8px", display: "-webkit-box", WebkitLineClamp: 2, WebkitBoxOrient: "vertical", overflow: "hidden" }}>{project.name}</div>

                    <div style={{ fontSize: "0.82rem", color: colors.muted, lineHeight: 1.6, margin: "0 0 16px", display: "-webkit-box", WebkitLineClamp: 3, WebkitBoxOrient: "vertical", overflow: "hidden" }}>{project.summary}</div>

                    <div style={{ display: "flex", flexWrap: "wrap", gap: "6px", marginBottom: "16px" }}>{visibleTech.map((toolTag) => (<span key={toolTag} style={{ fontSize: "0.72rem", color: colors.text, background: colors.background, border: `1px solid ${colors.border}`, borderRadius: 999, padding: "3px 10px" }}>{toolTag}</span>))}{extraTechCount > 0 && (<span style={{ fontSize: "0.72rem", color: colors.muted, background: colors.background, border: `1px solid ${colors.border}`, borderRadius: 999, padding: "3px 10px" }}>+{extraTechCount} more</span>)}</div>
                  </div>

                  <div style={{ borderTop: `1px solid rgba(255,255,255,0.06)`, paddingTop: 14, marginTop: 4, display: "flex", justifyContent: "space-between", alignItems: "center" }}>
                    <div style={{ color: colors.muted, fontSize: "0.75rem" }}>{project.type || ""}</div>
                    <div style={{ color: colors.accent, fontSize: "0.8rem", fontWeight: 600 }}>View Details →</div>
                  </div>
                </div>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
