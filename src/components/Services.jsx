import React from "react";

const servicesList = [
  {
    icon: "⚡",
    title: "MVP Development",
    text: "From idea to launch in days, not months. I build rapid, production-ready MVPs using modern no-code and vibe coding tools — so you can validate fast and iterate faster.",
  },
  {
    icon: "🧩",
    title: "SaaS Platforms",
    text: "Subscription apps, client portals, admin dashboards with auth, payments, and real-time data. Built to scale from day one using Supabase, Firebase, and Stripe.",
  },
  {
    icon: "🤖",
    title: "AI-Powered Apps",
    text: "GPT and Claude-integrated tools, intelligent chatbots, AI copilots, RAG systems, and knowledge bases — I connect LLMs to your product seamlessly.",
  },
  {
    icon: "🔧",
    title: "Internal Tools & Dashboards",
    text: "Custom CRMs, reporting panels, workflow tools, and data dashboards tailored exactly to your business — replace spreadsheets and manual processes permanently.",
  },
  {
    icon: "🔄",
    title: "AI Automation Workflows",
    text: "End-to-end automation pipelines using n8n, Make, and Zapier. From lead nurturing and marketing automation to CRM syncs and multi-step AI workflows.",
  },
  {
    icon: "🔗",
    title: "API & Third-Party Integrations",
    text: "Stripe, Twilio, Google APIs, HubSpot, GoHighLevel, and any REST API — I wire your tools together so your product works as one connected system.",
  },
];

export default function Services({
  shell,
  getRevealStyle,
  isMobile,
  isTablet,
  isTouch,
  hoveredService,
  setHoveredService,
  colors,
}) {
  return (
    <section
      id="services"
      data-reveal-id="services"
      style={{
        ...getRevealStyle("services"),
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
            Services
          </span>
        </div>

        {/* Section Title */}
        <h2
          style={{
            margin: "0 0 48px",
            fontSize: isMobile ? "1.9rem" : "clamp(2rem, 4vw, 3rem)",
            fontWeight: 800,
            letterSpacing: "-1px",
            lineHeight: 1.1,
            color: colors.light,
          }}
        >
          What I{" "}
          <span
            style={{
              backgroundImage: `linear-gradient(90deg, ${colors.accent}, ${colors.accentLight})`,
              WebkitBackgroundClip: "text",
              backgroundClip: "text",
              color: "transparent",
            }}
          >
            Build
          </span>
        </h2>

        {/* Services Grid */}
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
          {servicesList.map((service) => {
            const isHovered = hoveredService === service.title;

            return (
              <article
                key={service.title}
                onMouseEnter={() => !isTouch && setHoveredService(service.title)}
                onMouseLeave={() => !isTouch && setHoveredService(null)}
                style={{
                  background: isHovered ? colors.cardHover : colors.card,
                  border: `1px solid ${
                    isHovered
                      ? "rgba(232,98,44,0.25)"
                      : colors.border
                  }`,
                  borderRadius: "14px",
                  padding: isMobile ? "24px" : isTablet ? "28px" : "32px",
                  transform:
                    isHovered && !isTouch
                      ? "translateY(-8px)"
                      : "translateY(0)",
                  boxShadow:
                    isHovered && !isTouch
                      ? `0 0 0 1px rgba(232,98,44,0.1), 0 22px 44px rgba(0,0,0,0.34)`
                      : "0 12px 30px rgba(0,0,0,0.2)",
                  transition:
                    "transform 280ms cubic-bezier(0.22, 1, 0.36, 1), box-shadow 280ms cubic-bezier(0.22, 1, 0.36, 1), border-color 280ms cubic-bezier(0.22, 1, 0.36, 1), background 280ms cubic-bezier(0.22, 1, 0.36, 1)",
                  cursor: "default",
                  position: "relative",
                  overflow: "hidden",
                }}
              >
                {/* Top accent line on hover */}
                <div
                  style={{
                    position: "absolute",
                    top: 0,
                    left: 0,
                    right: 0,
                    height: "2px",
                    background: `linear-gradient(90deg, transparent, ${colors.accent}, transparent)`,
                    opacity: isHovered ? 1 : 0,
                    transition: "opacity 280ms ease",
                  }}
                />

                {/* Icon */}
                <div
                  style={{
                    fontSize: "36px",
                    marginBottom: "18px",
                    lineHeight: 1,
                  }}
                >
                  {service.icon}
                </div>

                {/* Title */}
                <h3
                  style={{
                    margin: "0 0 10px",
                    color: colors.light,
                    fontSize: "clamp(1rem, 2vw, 1.15rem)",
                    fontWeight: 700,
                    lineHeight: 1.3,
                  }}
                >
                  {service.title}
                </h3>

                {/* Description */}
                <p
                  style={{
                    margin: 0,
                    lineHeight: 1.75,
                    color: colors.muted,
                    fontSize: "0.9rem",
                  }}
                >
                  {service.text}
                </p>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
