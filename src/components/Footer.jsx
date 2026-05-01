import React from "react";

export default function Footer({ getRevealStyle, shell }) {
  return (
    <footer
      data-reveal-id="footer"
      style={{
        ...getRevealStyle("footer"),
        position: "relative",
        zIndex: 2,
        borderTop: `1px solid rgba(255,255,255,0.06)`,
        padding: "40px 0 48px",
        textAlign: "center",
      }}
    >
      <div style={shell}>
        <p
          style={{
            margin: 0,
            fontSize: "0.82rem",
            color: "#7d7a72",
            opacity: 0.7,
            letterSpacing: "0.5px",
          }}
        >
          © 2026 Muhammad Hassan Idrees. Built to perform.
        </p>
      </div>
    </footer>
  );
}
