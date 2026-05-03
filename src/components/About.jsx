import React from "react";

export default function About({ shell, cardBase, isMobile, colors, getRevealStyle }) {
  const highlights = [
    { icon: "🌍", label: "Global Clients", value: "Worldwide" },
    { icon: "⏰", label: "Timezone", value: "EST (UTC-5)" },
    { icon: "⚡", label: "Delivery", value: "Fast & Reliable" },
    { icon: "✅", label: "Quality", value: "Production-Ready" },
  ];

  return (
    <section
      id="about"
      data-reveal-id="about"
      style={{
        ...getRevealStyle("about"),
        padding: isMobile ? "48px 0" : "80px 0",
      }}
    >
      <div style={shell}>
        <div
          style={{
            ...cardBase,
            padding: isMobile ? "28px 22px" : "48px 52px",
            background:
              "radial-gradient(circle at top right, rgba(232,98,44,0.1), transparent 42%), linear-gradient(180deg, #19191d 0%, #17171b 100%)",
            borderRadius: "20px",
          }}
        >
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
              About Me
            </span>
          </div>

          {/* Heading */}
          <h2
            style={{
              margin: "0 0 24px",
              color: "#f0ede8",
              lineHeight: 1.1,
              fontSize: isMobile ? "1.95rem" : "clamp(2.2rem, 4vw, 3rem)",
              fontWeight: 800,
              letterSpacing: "-1px",
            }}
          >
            Turning ideas into{" "}
            <span
              style={{
                backgroundImage: `linear-gradient(90deg, ${colors.accent}, ${colors.accentLight})`,
                WebkitBackgroundClip: "text",
                backgroundClip: "text",
                color: "transparent",
              }}
            >
              production-ready
            </span>{" "}
            products
          </h2>

          {/* Bio */}
          <p
            style={{
              margin: "0 0 36px",
              maxWidth: "92ch",
              color: colors.text,
              lineHeight: 1.85,
              fontSize: isMobile ? "1rem" : "1.08rem",
            }}
          >
            I'm an AI Automation Engineer and SaaS Builder with years of
            experience delivering production-ready MVPs, SaaS platforms, and
            intelligent automation systems for clients across industries and
            timezones. I currently serve as Team Lead at Flowveo — where I lead
            a team building AI-powered web applications, RAG systems, and
            multi-agent workflows integrating OpenAI GPT and Anthropic Claude,
            alongside scalable automation pipelines on n8n, Make, and Zapier. I
            work with tools like Lovable, Replit, Supabase, Firebase, HubSpot,
            and GoHighLevel to take products from concept to launch quickly and
            reliably. Operating in the EST timezone, I work seamlessly with
            clients across Europe, the US, and beyond — delivering
            production-quality results with clear communication, fast
            turnaround, and proactive collaboration regardless of location or
            scale.
          </p>

          {/* Highlight Pills */}
          <div
            style={{
              display: "grid",
              gridTemplateColumns: isMobile
                ? "repeat(2, 1fr)"
                : "repeat(4, 1fr)",
              gap: "14px",
            }}
          >
            {highlights.map((h) => (
              <div
                key={h.label}
                style={{
                  background: "rgba(255,255,255,0.03)",
                  border: `1px solid rgba(255,255,255,0.06)`,
                  borderRadius: "12px",
                  padding: isMobile ? "14px 16px" : "18px 20px",
                  display: "flex",
                  flexDirection: "column",
                  gap: "6px",
                  transition: "border-color 250ms ease",
                }}
                onMouseEnter={(e) =>
                  (e.currentTarget.style.borderColor =
                    "rgba(232,98,44,0.2)")
                }
                onMouseLeave={(e) =>
                  (e.currentTarget.style.borderColor =
                    "rgba(255,255,255,0.06)")
                }
              >
                <span style={{ fontSize: "20px" }}>{h.icon}</span>
                <span
                  style={{
                    fontSize: "0.75rem",
                    color: colors.muted,
                    textTransform: "uppercase",
                    letterSpacing: "1.5px",
                    fontWeight: 600,
                  }}
                >
                  {h.label}
                </span>
                <span
                  style={{
                    fontSize: "0.95rem",
                    color: colors.accent,
                    fontWeight: 700,
                  }}
                >
                  {h.value}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
