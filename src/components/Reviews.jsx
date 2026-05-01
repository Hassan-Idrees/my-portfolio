import React from "react";

export default function Reviews({ shell, getRevealStyle, reviews, isMobile, isTablet, hoveredCard, setHoveredCard, cardBase, colors, isTouch }) {
  return (
    <section id="reviews" data-reveal-id="reviews" style={{ ...getRevealStyle("reviews"), scrollMarginTop: "120px" }}>
      <div style={shell}>
        <div style={{ marginBottom: "12px", color: colors.accent }}>Reviews</div>
        <div style={{ display: "grid", gap: "20px", gridTemplateColumns: isMobile ? "1fr" : isTablet ? "repeat(2, minmax(0, 1fr))" : "repeat(3, minmax(0, 1fr))" }}>
          {reviews.map((review) => {
            const isReviewHovered = hoveredCard === review.person;

            return (
              <blockquote key={review.person} onMouseEnter={() => !isTouch && setHoveredCard(review.person)} onMouseLeave={() => !isTouch && setHoveredCard(null)} style={{ ...cardBase, margin: 0, padding: isMobile ? "20px" : "26px", position: "relative", border: `1px solid ${isReviewHovered && !isTouch ? colors.accent : colors.border}`, boxShadow: isReviewHovered && !isTouch ? `0 0 0 1px ${colors.accent}, 0 16px 40px ${colors.accentGlow}` : `0 0 0 1px ${colors.accentGlow}, 0 12px 30px rgba(0,0,0,0.2)`, transition: "border-color 220ms ease, box-shadow 220ms ease" }}>
                <div aria-hidden="true" style={{ position: "absolute", top: "16px", right: "18px", fontSize: "3.6rem", color: `${colors.accent}22`, lineHeight: 1, fontFamily: "Georgia, serif" }}>
                  "
                </div>
                <div style={{ display: "flex", gap: "4px", marginBottom: "14px" }}>{Array.from({ length: review.rating || 5 }).map((_, idx) => (<svg key={idx} width="16" height="16" viewBox="0 0 16 16" fill="none" style={{ color: colors.accent }}><path d="M8 1.5L10.5 6H15.5L11.75 9.5L13.25 14.5L8 11L2.75 14.5L4.25 9.5L0.5 6H5.5L8 1.5Z" fill="currentColor" /></svg>))}</div>
                <p style={{ margin: "0 0 18px", fontSize: "1.02rem", lineHeight: 1.75, color: colors.light, fontStyle: "italic", fontWeight: 500 }}>{review.quote}</p>
                <div style={{ height: "1px", background: "rgba(255,255,255,0.06)", margin: "16px 0" }} />
                <footer style={{ color: colors.muted }}>
                  <strong style={{ color: colors.light, fontWeight: 700 }}>{review.person}</strong>
                  <p style={{ margin: "4px 0 0", fontSize: "0.85rem", color: colors.muted }}>{review.role}</p>
                </footer>
              </blockquote>
            );
          })}
        </div>
      </div>
    </section>
  );
}
