import React from "react";

export default function ProjectModal({
  selectedProject,
  setSelectedProject,
  activeImageIndex,
  setActiveImageIndex,
  isMobile,
  colors,
}) {
  if (!selectedProject) return null;

  return (
    <div
      onClick={() => {
        setSelectedProject(null);
        setActiveImageIndex(0);
      }}
      style={{
        position: "fixed",
        inset: 0,
        background: "rgba(0, 0, 0, 0.85)",
        backdropFilter: "blur(8px)",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        zIndex: 1000,
        padding: "20px",
      }}
    >
      <div
        onClick={(e) => e.stopPropagation()}
        style={{
          background: "#19191d",
          border: `1px solid rgba(255,255,255,0.06)`,
          borderRadius: "24px",
          maxWidth: "900px",
          width: "100%",
          maxHeight: "90vh",
          overflowY: "auto",
          position: "relative",
          animation: "modalEntrance 220ms ease-out",
        }}
      >
        <style>
          {`@keyframes modalEntrance { from { transform: scale(0.95); opacity: 0; } to { transform: scale(1); opacity: 1; } }`}
        </style>

        <button
          onClick={() => {
            setSelectedProject(null);
            setActiveImageIndex(0);
          }}
          style={{
              position: "absolute",
              top: isMobile ? "14px" : "20px",
              right: isMobile ? "14px" : "20px",
            background: "#19191d",
            border: `1px solid rgba(255,255,255,0.06)`,
            borderRadius: "8px",
              width: isMobile ? "44px" : "40px",
              height: isMobile ? "44px" : "40px",
            cursor: "pointer",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            color: "#f0ede8",
            fontSize: "24px",
            zIndex: 1001,
          }}
          aria-label="Close modal"
        >
          ✕
        </button>

        {selectedProject.images && selectedProject.images.length > 0 && (
          <div>
            <div
              style={{
                position: "relative",
                width: "100%",
                height: isMobile ? "240px" : "420px",
                background: "#0d0d0f",
                borderRadius: "24px 24px 0 0",
                overflow: "hidden",
              }}
            >
              <img
                src={selectedProject.images[activeImageIndex]}
                alt={`${selectedProject.name} - Image ${activeImageIndex + 1}`}
                style={{
                  width: "100%",
                  height: isMobile ? "240px" : "420px",
                  objectFit: "contain",
                  objectPosition: "center",
                  background: "#0d0d0f",
                  borderRadius: "16px 16px 0 0",
                }}
              />

              <div style={{ position: "absolute", top: "16px", right: "16px", background: "rgba(0,0,0,0.6)", color: "#f0ede8", padding: "6px 12px", borderRadius: "6px", fontSize: "12px", fontWeight: 600 }}>
                {activeImageIndex + 1} / {selectedProject.images.length}
              </div>

              {activeImageIndex > 0 && (
                <button onClick={() => setActiveImageIndex(activeImageIndex - 1)} style={{ position: "absolute", left: "16px", top: "50%", transform: "translateY(-50%)", background: "rgba(0, 0, 0, 0.5)", border: "none", color: "#f0ede8", width: "40px", height: "40px", borderRadius: "50%", cursor: "pointer", display: "flex", alignItems: "center", justifyContent: "center", fontSize: "18px" }} aria-label="Previous image">←</button>
              )}

              {activeImageIndex < selectedProject.images.length - 1 && (
                <button onClick={() => setActiveImageIndex(activeImageIndex + 1)} style={{ position: "absolute", right: "16px", top: "50%", transform: "translateY(-50%)", background: "rgba(0, 0, 0, 0.5)", border: "none", color: "#f0ede8", width: "40px", height: "40px", borderRadius: "50%", cursor: "pointer", display: "flex", alignItems: "center", justifyContent: "center", fontSize: "18px" }} aria-label="Next image">→</button>
              )}
            </div>

            {selectedProject.images.length > 1 && (
              <div style={{ display: "flex", gap: "8px", padding: "16px", background: "#0d0d0f", overflowX: "auto", borderBottom: `1px solid rgba(255,255,255,0.06)` }}>
                {selectedProject.images.map((img, idx) => (
                  <button key={idx} onClick={() => setActiveImageIndex(idx)} style={{ minWidth: "80px", height: "56px", borderRadius: "8px", border: activeImageIndex === idx ? `2px solid ${colors.accent}` : `1px solid rgba(255,255,255,0.06)`, padding: 0, cursor: "pointer", overflow: "hidden", background: "transparent" }} aria-label={`View image ${idx + 1}`}>
                    <img src={img} alt={`Thumbnail ${idx + 1}`} style={{ width: "80px", height: "56px", objectFit: "contain", objectPosition: "center", background: "#0d0d0f", borderRadius: "6px" }} />
                  </button>
                ))}
              </div>
            )}
          </div>
        )}

        <div style={{ padding: "32px" }}>
          <div style={{ display: "flex", flexWrap: "wrap", gap: "8px", marginBottom: "16px" }}>
            {selectedProject.categories.map((cat) => (
              <span key={cat} style={{ fontFamily: "JetBrains Mono, monospace", fontSize: "0.7rem", fontWeight: 700, letterSpacing: "0.08em", textTransform: "uppercase", color: colors.accent }}>{cat}</span>
            ))}
          </div>

          <h2 style={{ margin: "0 0 8px", color: "#f0ede8", fontSize: "1.75rem", fontWeight: 700 }}>{selectedProject.name}</h2>

          {selectedProject.type && (
            <span style={{ display: "inline-block", background: "rgba(232,98,44,0.15)", color: colors.accent, padding: "6px 12px", borderRadius: "999px", fontSize: "0.8rem", fontWeight: 600, marginBottom: "16px" }}>{selectedProject.type}</span>
          )}

          <p style={{ margin: "0 0 24px", lineHeight: 1.8, color: "#c8c5be", fontSize: "1rem" }}>{selectedProject.summary}</p>

          {selectedProject.problem && (
            <div style={{ marginBottom: "24px" }}>
              <h3 style={{ margin: "0 0 12px", color: "#f0ede8", fontSize: "1.1rem", fontWeight: 700 }}>The Problem</h3>
              <p style={{ margin: 0, lineHeight: 1.75, color: "#7d7a72", fontSize: "0.95rem" }}>{selectedProject.problem}</p>
            </div>
          )}

          {selectedProject.features && selectedProject.features.length > 0 && (
            <div style={{ marginBottom: "24px" }}>
              <h3 style={{ margin: "0 0 16px", color: "#f0ede8", fontSize: "1.1rem", fontWeight: 700 }}>Key Features</h3>
              <div style={{ display: "grid", gridTemplateColumns: isMobile ? "1fr" : "repeat(2, 1fr)", gap: "12px" }}>
                {selectedProject.features.map((feature, idx) => (
                  <div key={idx} style={{ background: "#0d0d0f", border: `1px solid rgba(255,255,255,0.06)`, borderRadius: "12px", padding: "16px" }}>
                    <h4 style={{ margin: "0 0 8px", color: "#f0ede8", fontSize: "0.95rem", fontWeight: 700 }}>{feature.title}</h4>
                    <p style={{ margin: 0, color: "#7d7a72", fontSize: "0.85rem", lineHeight: 1.6 }}>{feature.desc}</p>
                  </div>
                ))}
              </div>
            </div>
          )}

          {selectedProject.tech && selectedProject.tech.length > 0 && (
            <div>
              <h3 style={{ margin: "0 0 12px", color: "#f0ede8", fontSize: "1.1rem", fontWeight: 700 }}>Tech Stack</h3>
              <div style={{ display: "flex", flexWrap: "wrap", gap: "8px" }}>
                {selectedProject.tech.map((toolTag) => (
                  <span key={toolTag} style={{ borderRadius: "999px", border: `1px solid ${colors.accent}`, background: "transparent", color: colors.accent, padding: "6px 12px", fontFamily: "JetBrains Mono, monospace", fontSize: "0.75rem", fontWeight: 600, lineHeight: 1.2 }}>{toolTag}</span>
                ))}
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
