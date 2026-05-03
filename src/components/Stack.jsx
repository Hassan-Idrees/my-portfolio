import React from "react";

const stackCategories = [
  {
    category: "No-Code / Vibe Coding",
    emoji: "🛠️",
    tools: [
      "Lovable.dev",
      "Replit",
      "Bolt.new",
      "Base44",
      "Cursor",
      "Windsurf",
      "v0.dev",
      "GitHub Copilot",
    ],
  },
  {
    category: "Backend & Database",
    emoji: "🗄️",
    tools: ["Supabase", "Firebase", "PostgreSQL", "MongoDB", "REST APIs"],
  },
  {
    category: "AI & LLM Integration",
    emoji: "🤖",
    tools: [
      "OpenAI GPT",
      "Anthropic Claude",
      "AI Agents",
      "RAG Systems",
      "LLM Pipelines",
      "Knowledge Bases",
    ],
  },
  {
    category: "Automation & Workflows",
    emoji: "🔄",
    tools: [
      "n8n",
      "Make (Integromat)",
      "Zapier",
      "Power Automate",
      "Axiom.ai",
      "Airtable",
      "Webhooks",
    ],
  },
  {
    category: "APIs, CRM & Payments",
    emoji: "🔗",
    tools: [
      "Stripe",
      "Google APIs",
      "Twilio",
      "HubSpot",
      "GoHighLevel",
      "WhatsApp API",
      "Slack API",
    ],
  },
];

export default function Stack({
  shell,
  getRevealStyle,
  isMobile,
  isTablet,
  isTouch,
  hoveredTool,
  setHoveredTool,
  colors,
}) {
  return (
    <section
      id="stack"
      data-reveal-id="stack"
      style={{
        ...getRevealStyle("stack"),
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
            Tech Stack
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
          Tools &{" "}
          <span
            style={{
              backgroundImage: `linear-gradient(90deg, ${colors.accent}, ${colors.accentLight})`,
              WebkitBackgroundClip: "text",
              backgroundClip: "text",
              color: "transparent",
            }}
          >
            Platforms
          </span>
        </h2>

        {/* Stack Grid */}
        <div
          style={{
            display: "grid",
            gap: "20px",
            gridTemplateColumns: isMobile
              ? "1fr"
              : isTablet
              ? "repeat(2, minmax(0, 1fr))"
              : "repeat(2, minmax(0, 1fr))",
          }}
        >
          {stackCategories.map((group) => (
            <article
              key={group.category}
              style={{
                background: colors.card,
                border: `1px solid ${colors.border}`,
                borderRadius: "14px",
                padding: isMobile ? "22px" : "28px",
                boxShadow: "0 12px 30px rgba(0,0,0,0.2)",
                transition: "border-color 250ms ease",
              }}
              onMouseEnter={(e) =>
                (e.currentTarget.style.borderColor =
                  "rgba(232,98,44,0.2)")
              }
              onMouseLeave={(e) =>
                (e.currentTarget.style.borderColor = colors.border)
              }
            >
              {/* Category header */}
              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                  gap: "10px",
                  marginBottom: "18px",
                }}
              >
                <span style={{ fontSize: "20px" }}>{group.emoji}</span>
                <p
                  style={{
                    margin: 0,
                    color: colors.muted,
                    textTransform: "uppercase",
                    fontSize: "clamp(0.75rem, 1.2vw, 0.82rem)",
                    letterSpacing: "3px",
                    fontWeight: 700,
                  }}
                >
                  {group.category}
                </p>
              </div>

              {/* Tools */}
              <div style={{ display: "flex", flexWrap: "wrap", gap: "10px" }}>
                {group.tools.map((tool) => {
                  const toolKey = `${group.category}-${tool}`;
                  const isHovered = hoveredTool === toolKey;

                  return (
                    <span
                      key={tool}
                      onMouseEnter={() =>
                        !isTouch && setHoveredTool(toolKey)
                      }
                      onMouseLeave={() => !isTouch && setHoveredTool("")}
                      style={{
                        borderRadius: "999px",
                        border: `1px solid ${
                          isHovered && !isTouch
                            ? colors.accent
                            : "rgba(255,255,255,0.08)"
                        }`,
                        background:
                          isHovered && !isTouch
                            ? "rgba(232,98,44,0.08)"
                            : colors.card,
                        color:
                          isHovered && !isTouch ? colors.accent : colors.text,
                        padding: "8px 16px",
                        fontFamily: "JetBrains Mono, monospace",
                        fontSize: "clamp(0.75rem, 1.1vw, 0.82rem)",
                        lineHeight: 1.2,
                        fontWeight: 500,
                        transform:
                          isHovered && !isTouch
                            ? "translateY(-3px)"
                            : "translateY(0)",
                        boxShadow:
                          isHovered && !isTouch
                            ? `0 8px 18px rgba(232,98,44,0.15)`
                            : "none",
                        transition:
                          "transform 220ms cubic-bezier(0.22, 1, 0.36, 1), border-color 220ms ease, color 220ms ease, background 220ms ease, box-shadow 220ms ease",
                        cursor: "default",
                      }}
                    >
                      {tool}
                    </span>
                  );
                })}
              </div>
            </article>
          ))}

          {/* Fifth category spans full width on desktop */}
          {!isMobile && !isTablet && (
            <div style={{ gridColumn: "1 / -1" }}>
              {/* already rendered above in the map — 
                  this is handled by the grid naturally */}
            </div>
          )}
        </div>
      </div>
    </section>
  );
}
