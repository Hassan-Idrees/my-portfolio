import React from "react";

const reviews = [
  {
    id: "r1",
    person: "Sarah M.",
    role: "Startup Founder · United States",
    quote:
      "Delivered our MVP in just one week. The quality was production-ready from day one. Hassan understood the brief immediately and delivered beyond expectations — fast, professional, and proactive throughout.",
    rating: 5,
    platform: "Upwork",
  },
  {
    id: "r2",
    person: "James K.",
    role: "Agency Owner · United Kingdom",
    quote:
      "The AI automation workflows he built saved us 20+ hours per week. He connected our CRM, email tools, and reporting into one seamless pipeline. Best investment we've made this year.",
    rating: 5,
    platform: "Upwork",
  },
  {
    id: "r3",
    person: "Lisa R.",
    role: "Product Manager · Germany",
    quote:
      "Professional, fast, and proactive. He didn't just build what we asked — he flagged edge cases, suggested improvements we hadn't thought of, and delivered on time every single sprint.",
    rating: 5,
    platform: "Upwork",
  },
];

const StarIcon = ({ color }) => (
  <svg width="15" height="15" viewBox="0 0 16 16" fill="none">
    <path
      d="M8 1.5L10.5 6H15.5L11.75 9.5L13.25 14.5L8 11L2.75 14.5L4.25 9.5L0.5 6H5.5L8 1.5Z"
      fill={color}
    />
  </svg>
);

export default function Reviews({
  shell,
  getRevealStyle,
  isMobile,
  isTablet,
  isTouch,
  hoveredCard,
  setHoveredCard,
  colors,
}) {
  return (
    <section
      id="reviews"
      data-reveal-id="reviews"
      style={{
        ...getRevealStyle("reviews"),
        scrollMarginTop: "120px",
        padding: isMobile ? "48px 0" : "80px 0",
      }}
    >
      <div style={shell}>
        {/* Section Label */}
        <div
          style={{
            display: "inline-flex",
            alignItems: "center",
            gap: "12px",
            marginBottom: "16px",
          }}
        >
          <span
            style={{
              width: "36px",
              height: "2px",
              borderRadius: "999px",
              background: colors.accent,
              display: "inline-block",
            }}
          />
          <span
            style={{
              color: colors.accent,
              textTransform: "uppercase",
              letterSpacing: "4px",
              fontSize: "12px",
              fontWeight: 700,
            }}
          >
            Testimonials
          </span>
        </div>

        {/* Section Title */}
        <h2
          style={{
            margin: "0 0 12px",
            fontSize: isMobile ? "1.9rem" : "clamp(2rem, 4vw, 3rem)",
            fontWeight: 800,
            letterSpacing: "-1px",
            lineHeight: 1.1,
            color: colors.light,
          }}
        >
          What Clients{" "}
          <span
            style={{
              backgroundImage: `linear-gradient(90deg, ${colors.accent}, ${colors.accentLight})`,
              WebkitBackgroundClip: "text",
              backgroundClip: "text",
              color: "transparent",
            }}
          >
            Say
          </span>
        </h2>

        {/* Subtitle */}
        <p
          style={{
            margin: "0 0 48px",
            color: colors.muted,
            fontSize: "0.95rem",
            lineHeight: 1.6,
            maxWidth: "520px",
          }}
        >
          Trusted by founders, agencies, and businesses across the US, UK, Europe and beyond.
        </p>

        {/* Reviews Grid */}
        <div
          style={{
            display: "grid",
            gap: "20px",
            gridTemplateColumns: isMobile
              ? "1fr"
              : isTablet
              ? "repeat(2, minmax(0, 1fr))"
              : "repeat(3, minmax(0, 1fr))",
          }}
        >
          {reviews.map((review) => {
            const isHovered = hoveredCard === review.id;

            return (
              <blockquote
                key={review.id}
                onMouseEnter={() => !isTouch && setHoveredCard(review.id)}
                onMouseLeave={() => !isTouch && setHoveredCard(null)}
                style={{
                  margin: 0,
                  padding: isMobile ? "22px" : "28px",
                  background: colors.card,
                  border: `1px solid ${
                    isHovered && !isTouch ? colors.accent : colors.border
                  }`,
                  borderRadius: "18px",
                  position: "relative",
                  overflow: "hidden",
                  transition:
                    "border-color 220ms ease, box-shadow 220ms ease, transform 220ms ease",
                  boxShadow:
                    isHovered && !isTouch
                      ? `0 0 0 1px rgba(232,98,44,0.2), 0 16px 40px rgba(232,98,44,0.1)`
                      : `0 4px 20px rgba(0,0,0,0.2)`,
                  transform:
                    isHovered && !isTouch ? "translateY(-4px)" : "translateY(0)",
                  display: "flex",
                  flexDirection: "column",
                }}
              >
                {/* Decorative quote mark */}
                <div
                  aria-hidden="true"
                  style={{
                    position: "absolute",
                    top: "12px",
                    right: "16px",
                    fontSize: "4rem",
                    color: `rgba(232,98,44,0.1)`,
                    lineHeight: 1,
                    fontFamily: "Georgia, serif",
                    userSelect: "none",
                    pointerEvents: "none",
                  }}
                >
                  "
                </div>

                {/* Top accent line on hover */}
                <div
                  style={{
                    position: "absolute",
                    top: 0,
                    left: 0,
                    right: 0,
                    height: "2px",
                    background: `linear-gradient(90deg, transparent, ${colors.accent}, transparent)`,
                    opacity: isHovered && !isTouch ? 1 : 0,
                    transition: "opacity 220ms ease",
                    borderRadius: "18px 18px 0 0",
                  }}
                />

                {/* Stars + Platform */}
                <div
                  style={{
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "space-between",
                    marginBottom: "16px",
                  }}
                >
                  <div style={{ display: "flex", gap: "3px" }}>
                    {Array.from({ length: review.rating || 5 }).map((_, idx) => (
                      <StarIcon key={idx} color={colors.accent} />
                    ))}
                  </div>
                  {review.platform && (
                    <span
                      style={{
                        fontSize: "10px",
                        fontWeight: 700,
                        color: colors.muted,
                        textTransform: "uppercase",
                        letterSpacing: "1px",
                        background: "rgba(255,255,255,0.04)",
                        padding: "3px 10px",
                        borderRadius: "999px",
                        border: `1px solid rgba(255,255,255,0.06)`,
                      }}
                    >
                      {review.platform}
                    </span>
                  )}
                </div>

                {/* Quote */}
                <p
                  style={{
                    margin: "0 0 20px",
                    fontSize: isMobile ? "0.92rem" : "0.97rem",
                    lineHeight: 1.8,
                    color: colors.text,
                    fontStyle: "italic",
                    fontWeight: 400,
                    flex: 1,
                  }}
                >
                  "{review.quote}"
                </p>

                {/* Divider */}
                <div
                  style={{
                    height: "1px",
                    background: "rgba(255,255,255,0.06)",
                    margin: "0 0 16px",
                  }}
                />

                {/* Person */}
                <footer>
                  <div
                    style={{
                      display: "flex",
                      alignItems: "center",
                      gap: "12px",
                    }}
                  >
                    {/* Avatar initials */}
                    <div
                      style={{
                        width: "38px",
                        height: "38px",
                        borderRadius: "50%",
                        background: `linear-gradient(135deg, rgba(232,98,44,0.2), rgba(232,98,44,0.08))`,
                        border: `1px solid rgba(232,98,44,0.2)`,
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        fontSize: "13px",
                        fontWeight: 700,
                        color: colors.accent,
                        flexShrink: 0,
                      }}
                    >
                      {review.person
                        .split(" ")
                        .map((n) => n[0])
                        .join("")
                        .slice(0, 2)}
                    </div>
                    <div>
                      <p
                        style={{
                          margin: 0,
                          fontSize: "0.9rem",
                          fontWeight: 700,
                          color: colors.light,
                        }}
                      >
                        {review.person}
                      </p>
                      <p
                        style={{
                          margin: "2px 0 0",
                          fontSize: "0.75rem",
                          color: colors.muted,
                          lineHeight: 1.3,
                        }}
                      >
                        {review.role}
                      </p>
                    </div>
                  </div>
                </footer>
              </blockquote>
            );
          })}
        </div>
      </div>
    </section>
  );
}
