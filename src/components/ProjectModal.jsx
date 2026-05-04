import React, { useEffect } from "react";

export default function ProjectModal({
  selectedProject,
  setSelectedProject,
  activeImageIndex,
  setActiveImageIndex,
  isMobile,
  colors,
}) {
  // Keyboard navigation
  useEffect(() => {
    if (!selectedProject) return;
    const handleKey = (e) => {
      if (e.key === "Escape") { setSelectedProject(null); setActiveImageIndex(0); }
      if (e.key === "ArrowRight" && selectedProject.images?.length > 0)
        setActiveImageIndex((i) => Math.min(i + 1, selectedProject.images.length - 1));
      if (e.key === "ArrowLeft" && selectedProject.images?.length > 0)
        setActiveImageIndex((i) => Math.max(i - 1, 0));
    };
    window.addEventListener("keydown", handleKey);
    return () => window.removeEventListener("keydown", handleKey);
  }, [selectedProject, setSelectedProject, setActiveImageIndex]);

  if (!selectedProject) return null;

  const hasImages = selectedProject.images && selectedProject.images.length > 0;
  const hasFeatures = selectedProject.features && selectedProject.features.length > 0;

  const close = () => { setSelectedProject(null); setActiveImageIndex(0); };

  const navBtn = (onClick, label, content) => (
    <button
      onClick={onClick}
      aria-label={label}
      style={{
        position: "absolute",
        top: "50%",
        transform: "translateY(-50%)",
        background: "rgba(17,17,19,0.8)",
        border: `1px solid rgba(255,255,255,0.1)`,
        color: colors.light,
        width: isMobile ? "36px" : "44px",
        height: isMobile ? "36px" : "44px",
        borderRadius: "50%",
        cursor: "pointer",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        fontSize: isMobile ? "16px" : "20px",
        backdropFilter: "blur(8px)",
        transition: "background 0.2s ease, border-color 0.2s ease",
        zIndex: 2,
        ...(label.includes("Previous") ? { left: isMobile ? "8px" : "16px" } : { right: isMobile ? "8px" : "16px" }),
      }}
      onMouseEnter={(e) => { e.currentTarget.style.background = colors.accent; e.currentTarget.style.borderColor = colors.accent; }}
      onMouseLeave={(e) => { e.currentTarget.style.background = "rgba(17,17,19,0.8)"; e.currentTarget.style.borderColor = "rgba(255,255,255,0.1)"; }}
    >
      {content}
    </button>
  );

  return (
    <>
      <style>{`
        @keyframes modalIn {
          from { transform: scale(0.96) translateY(12px); opacity: 0; }
          to { transform: scale(1) translateY(0); opacity: 1; }
        }
        @keyframes backdropIn {
          from { opacity: 0; }
          to { opacity: 1; }
        }
        .modal-scroll::-webkit-scrollbar { width: 6px; }
        .modal-scroll::-webkit-scrollbar-track { background: transparent; }
        .modal-scroll::-webkit-scrollbar-thumb { background: rgba(255,255,255,0.1); border-radius: 3px; }
        .thumb-btn:hover { border-color: rgba(232,98,44,0.5) !important; }
      `}</style>

      {/* Backdrop */}
      <div
        onClick={close}
        style={{
          position: "fixed",
          inset: 0,
          background: "rgba(0,0,0,0.88)",
          backdropFilter: "blur(10px)",
          WebkitBackdropFilter: "blur(10px)",
          zIndex: 1000,
          animation: "backdropIn 200ms ease",
        }}
      />

      {/* Modal */}
      <div
        role="dialog"
        aria-modal="true"
        aria-label={selectedProject.name}
        style={{
          position: "fixed",
          inset: 0,
          zIndex: 1001,
          display: "flex",
          alignItems: isMobile ? "flex-end" : "center",
          justifyContent: "center",
          padding: isMobile ? "0" : "24px",
          pointerEvents: "none",
        }}
      >
        <div
          onClick={(e) => e.stopPropagation()}
          className="modal-scroll"
          style={{
            background: "#19191d",
            border: `1px solid rgba(255,255,255,0.08)`,
            borderRadius: isMobile ? "24px 24px 0 0" : "24px",
            width: "100%",
            maxWidth: "920px",
            maxHeight: isMobile ? "92vh" : "88vh",
            overflow: "auto",
            position: "relative",
            animation: "modalIn 240ms cubic-bezier(0.16, 1, 0.3, 1)",
            pointerEvents: "all",
            boxShadow: "0 32px 80px rgba(0,0,0,0.6), 0 0 0 1px rgba(255,255,255,0.04)",
          }}
        >
          {/* Close Button */}
          <button
            onClick={close}
            aria-label="Close"
            style={{
              position: "absolute",
              top: "16px",
              right: "16px",
              zIndex: 10,
              width: "36px",
              height: "36px",
              borderRadius: "10px",
              background: "rgba(255,255,255,0.06)",
              border: `1px solid rgba(255,255,255,0.1)`,
              color: colors.light,
              cursor: "pointer",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              fontSize: "18px",
              lineHeight: 1,
              transition: "background 0.2s ease",
            }}
            onMouseEnter={(e) => (e.currentTarget.style.background = "rgba(232,98,44,0.2)")}
            onMouseLeave={(e) => (e.currentTarget.style.background = "rgba(255,255,255,0.06)")}
          >
            ✕
          </button>

          {/* Image Gallery */}
          {hasImages && (
            <div>
              {/* Main Image */}
              <div
                style={{
                  position: "relative",
                  width: "100%",
                  height: isMobile ? "220px" : "420px",
                  background: "#0d0d0f",
                  borderRadius: isMobile ? "24px 24px 0 0" : "24px 24px 0 0",
                  overflow: "hidden",
                }}
              >
                <img
                  key={activeImageIndex}
                  src={selectedProject.images[activeImageIndex]}
                  alt={`${selectedProject.name} screenshot ${activeImageIndex + 1}`}
                  style={{
                    width: "100%",
                    height: "100%",
                    objectFit: "cover",
                    objectPosition: "center top",
                    display: "block",
                    animation: "modalIn 180ms ease",
                  }}
                />

                {/* Image counter badge */}
                <div
                  style={{
                    position: "absolute",
                    top: "16px",
                    left: "16px",
                    background: "rgba(17,17,19,0.75)",
                    backdropFilter: "blur(8px)",
                    color: colors.light,
                    padding: "5px 12px",
                    borderRadius: "999px",
                    fontSize: "11px",
                    fontWeight: 600,
                    border: `1px solid rgba(255,255,255,0.1)`,
                  }}
                >
                  {activeImageIndex + 1} / {selectedProject.images.length}
                </div>

                {/* Prev button */}
                {activeImageIndex > 0 &&
                  navBtn(
                    () => setActiveImageIndex(activeImageIndex - 1),
                    "Previous image",
                    "←"
                  )}

                {/* Next button */}
                {activeImageIndex < selectedProject.images.length - 1 &&
                  navBtn(
                    () => setActiveImageIndex(activeImageIndex + 1),
                    "Next image",
                    "→"
                  )}
              </div>

              {/* Thumbnail Strip */}
              {selectedProject.images.length > 1 && (
                <div
                  style={{
                    display: "flex",
                    gap: "8px",
                    padding: "12px 16px",
                    background: "#0d0d0f",
                    borderBottom: `1px solid rgba(255,255,255,0.06)`,
                    overflowX: "auto",
                    scrollbarWidth: "none",
                  }}
                >
                  {selectedProject.images.map((img, idx) => (
                    <button
                      key={idx}
                      className="thumb-btn"
                      onClick={() => setActiveImageIndex(idx)}
                      aria-label={`View image ${idx + 1}`}
                      style={{
                        minWidth: isMobile ? "64px" : "80px",
                        height: isMobile ? "44px" : "52px",
                        borderRadius: "8px",
                        border: `2px solid ${
                          activeImageIndex === idx
                            ? colors.accent
                            : "rgba(255,255,255,0.08)"
                        }`,
                        padding: 0,
                        cursor: "pointer",
                        overflow: "hidden",
                        background: "#0d0d0f",
                        transition: "border-color 180ms ease, transform 180ms ease",
                        transform: activeImageIndex === idx ? "scale(1.06)" : "scale(1)",
                        flexShrink: 0,
                      }}
                    >
                      <img
                        src={img}
                        alt={`Thumbnail ${idx + 1}`}
                        style={{
                          width: "100%",
                          height: "100%",
                          objectFit: "cover",
                          objectPosition: "center top",
                          display: "block",
                        }}
                      />
                    </button>
                  ))}
                </div>
              )}
            </div>
          )}

          {/* Content */}
          <div style={{ padding: isMobile ? "24px 20px" : "36px 40px" }}>
            {/* Categories */}
            <div style={{ display: "flex", flexWrap: "wrap", gap: "8px", marginBottom: "14px" }}>
              {selectedProject.categories.map((cat) => (
                <span
                  key={cat}
                  style={{
                    fontSize: "10px",
                    fontWeight: 700,
                    letterSpacing: "0.1em",
                    textTransform: "uppercase",
                    color: colors.accent,
                    background: "rgba(232,98,44,0.1)",
                    border: `1px solid rgba(232,98,44,0.2)`,
                    borderRadius: "999px",
                    padding: "4px 12px",
                  }}
                >
                  {cat}
                </span>
              ))}
            </div>

            {/* Title */}
            <h2
              style={{
                margin: "0 0 10px",
                color: colors.light,
                fontSize: isMobile ? "1.35rem" : "1.8rem",
                fontWeight: 800,
                lineHeight: 1.2,
                letterSpacing: "-0.5px",
              }}
            >
              {selectedProject.name}
            </h2>

            {/* Type badge */}
            {selectedProject.type && (
              <span
                style={{
                  display: "inline-block",
                  background: "rgba(232,98,44,0.08)",
                  color: colors.accentLight,
                  padding: "5px 14px",
                  borderRadius: "999px",
                  fontSize: "0.78rem",
                  fontWeight: 600,
                  marginBottom: "20px",
                  border: `1px solid rgba(232,98,44,0.15)`,
                }}
              >
                {selectedProject.type}
              </span>
            )}

            {/* Summary */}
            <p
              style={{
                margin: "0 0 28px",
                lineHeight: 1.8,
                color: colors.text,
                fontSize: isMobile ? "0.92rem" : "1rem",
              }}
            >
              {selectedProject.summary}
            </p>

            {/* Divider */}
            <div
              style={{
                height: "1px",
                background: "rgba(255,255,255,0.06)",
                margin: "0 0 28px",
              }}
            />

            {/* Problem */}
            {selectedProject.problem && (
              <div style={{ marginBottom: "28px" }}>
                <h3
                  style={{
                    margin: "0 0 12px",
                    color: colors.light,
                    fontSize: "1.05rem",
                    fontWeight: 700,
                    display: "flex",
                    alignItems: "center",
                    gap: "8px",
                  }}
                >
                  <span
                    style={{
                      width: "20px",
                      height: "20px",
                      borderRadius: "50%",
                      background: "rgba(232,98,44,0.15)",
                      display: "inline-flex",
                      alignItems: "center",
                      justifyContent: "center",
                      fontSize: "11px",
                    }}
                  >
                    🎯
                  </span>
                  The Problem
                </h3>
                <p
                  style={{
                    margin: 0,
                    lineHeight: 1.8,
                    color: colors.muted,
                    fontSize: "0.92rem",
                    paddingLeft: "28px",
                  }}
                >
                  {selectedProject.problem}
                </p>
              </div>
            )}

            {/* Features */}
            {hasFeatures && (
              <div style={{ marginBottom: "28px" }}>
                <h3
                  style={{
                    margin: "0 0 16px",
                    color: colors.light,
                    fontSize: "1.05rem",
                    fontWeight: 700,
                    display: "flex",
                    alignItems: "center",
                    gap: "8px",
                  }}
                >
                  <span
                    style={{
                      width: "20px",
                      height: "20px",
                      borderRadius: "50%",
                      background: "rgba(232,98,44,0.15)",
                      display: "inline-flex",
                      alignItems: "center",
                      justifyContent: "center",
                      fontSize: "11px",
                    }}
                  >
                    ✨
                  </span>
                  Key Features
                </h3>
                <div
                  style={{
                    display: "grid",
                    gridTemplateColumns: isMobile ? "1fr" : "repeat(2, 1fr)",
                    gap: "12px",
                  }}
                >
                  {selectedProject.features.map((feature, idx) => (
                    <div
                      key={idx}
                      style={{
                        background: "#111113",
                        border: `1px solid rgba(255,255,255,0.05)`,
                        borderRadius: "14px",
                        padding: "18px",
                        transition: "border-color 200ms ease",
                      }}
                      onMouseEnter={(e) =>
                        (e.currentTarget.style.borderColor =
                          "rgba(232,98,44,0.2)")
                      }
                      onMouseLeave={(e) =>
                        (e.currentTarget.style.borderColor =
                          "rgba(255,255,255,0.05)")
                      }
                    >
                      <div
                        style={{
                          display: "flex",
                          alignItems: "center",
                          gap: "8px",
                          marginBottom: "8px",
                        }}
                      >
                        <div
                          style={{
                            width: "6px",
                            height: "6px",
                            borderRadius: "50%",
                            background: colors.accent,
                            flexShrink: 0,
                          }}
                        />
                        <h4
                          style={{
                            margin: 0,
                            color: colors.light,
                            fontSize: "0.9rem",
                            fontWeight: 700,
                          }}
                        >
                          {feature.title}
                        </h4>
                      </div>
                      <p
                        style={{
                          margin: 0,
                          color: colors.muted,
                          fontSize: "0.82rem",
                          lineHeight: 1.65,
                          paddingLeft: "14px",
                        }}
                      >
                        {feature.desc}
                      </p>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* Tech Stack */}
            {selectedProject.tech && selectedProject.tech.length > 0 && (
              <div>
                <h3
                  style={{
                    margin: "0 0 14px",
                    color: colors.light,
                    fontSize: "1.05rem",
                    fontWeight: 700,
                    display: "flex",
                    alignItems: "center",
                    gap: "8px",
                  }}
                >
                  <span
                    style={{
                      width: "20px",
                      height: "20px",
                      borderRadius: "50%",
                      background: "rgba(232,98,44,0.15)",
                      display: "inline-flex",
                      alignItems: "center",
                      justifyContent: "center",
                      fontSize: "11px",
                    }}
                  >
                    🛠️
                  </span>
                  Tech Stack
                </h3>
                <div style={{ display: "flex", flexWrap: "wrap", gap: "8px" }}>
                  {selectedProject.tech.map((tag) => (
                    <span
                      key={tag}
                      style={{
                        borderRadius: "999px",
                        border: `1px solid rgba(232,98,44,0.25)`,
                        background: "rgba(232,98,44,0.06)",
                        color: colors.accentLight,
                        padding: "6px 14px",
                        fontFamily: "JetBrains Mono, monospace",
                        fontSize: "0.75rem",
                        fontWeight: 600,
                        letterSpacing: "0.2px",
                      }}
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </>
  );
}
