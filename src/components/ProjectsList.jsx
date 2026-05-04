import React from "react";

const projects = [
  {
    id: "p1",
    name: "Feury Image Group — Multi-Role Sales & Inventory Management Platform",
    categories: ["Internal Tool", "SaaS", "B2B"],
    summary:
      "A custom internal business platform with role-based dashboards for sales teams, inventory managers, and admins to manage clients, product catalogs, and sales activity in one centralized system.",
    tech: ["React", "TypeScript", "Node.js", "PostgreSQL", "Tailwind CSS", "shadcn/ui", "Recharts", "Replit"],
    thumbnail:
      "https://drive.google.com/thumbnail?id=1MLqCUoqzgxLQjFHu1cxNlk5U7uwQ4ZBo&sz=w1200",
    images: [
      "https://drive.google.com/thumbnail?id=1MLqCUoqzgxLQjFHu1cxNlk5U7uwQ4ZBo&sz=w1200",
      "https://drive.google.com/thumbnail?id=1xpWKgQZ8iRztWMryOa57n9ntkLTiwD5i&sz=w1200",
      "https://drive.google.com/thumbnail?id=1j3rG-YrBE4TasLPemKVfOM34vcyMB7KF&sz=w1200",
      "https://drive.google.com/thumbnail?id=1oUzI-Div5VwXYcSqA3qi-OsWYR6RRfHK&sz=w1200",
      "https://drive.google.com/thumbnail?id=1DeYQnyRyIA6PtSox23Jd5kLfY0Oa15xx&sz=w1200",
      "https://drive.google.com/thumbnail?id=1xoD-F5-vh6c1XHkQSOJ9S68VyU1eMucT&sz=w1200",
      "https://drive.google.com/thumbnail?id=1iw4EoAakQS5ccTsI6LHzfRwfp8VTgJP7&sz=w1200",
    ],
    problem:
      "Promotional product companies struggle to coordinate between departments when relying on spreadsheets and disconnected tools — causing version conflicts, missing data, and inefficient processes. This platform centralizes everything into a single role-based system.",
    features: [
      {
        title: "Role-Based Access Control",
        desc: "Four distinct roles: Sales, Developer, Admin, and Inventory Manager — each with their own dashboard, navigation, and permissions.",
      },
      {
        title: "Client & Product List Management",
        desc: "Sales reps manage client accounts and build product quote lists from a live catalog of 4,800+ SKUs organized by vendor.",
      },
      {
        title: "Variant-Level Pricing & GP Tracking",
        desc: "Each product variant includes quantity, cost, quoted price, and real-time gross profit percentage for margin insights while quoting.",
      },
      {
        title: "Admin Analytics Dashboard",
        desc: "Four analytics views: sales activity overview, developer export reports, product performance trends, and a full activity timeline — with bar charts, line graphs, and pie charts.",
      },
      {
        title: "Inventory Manager Panel",
        desc: "Collapsible vendor cards, a full vendor directory with contact info, and product creation/editing workflows.",
      },
      {
        title: "CSV Export & Activity Logging",
        desc: "Developers can export product lists with full variant and pricing data. Every export is logged with user, role, date, and format for a complete audit trail.",
      },
    ],
    type: "B2B Operations Dashboard",
  },
  {
    id: "p2",
    name: "AI Customer Support Platform",
    categories: ["SaaS", "AI", "Automation"],
    summary:
      "Built a full-stack SaaS platform with GPT-powered chatbot, ticket management, and automated escalation workflows using n8n.",
    tech: ["Lovable.dev", "Supabase", "OpenAI", "n8n", "Stripe"],
    thumbnail: null,
    images: [],
    problem: "",
    features: [],
    type: "SaaS",
  },
  {
    id: "p3",
    name: "Lead Generation Dashboard",
    categories: ["Internal Tool", "CRM"],
    summary:
      "Custom CRM dashboard with real-time analytics, lead scoring powered by AI, and automated email sequences via Make.",
    tech: ["Replit", "PostgreSQL", "Claude API", "Make"],
    thumbnail: null,
    images: [],
    problem: "",
    features: [],
    type: "Internal Tool",
  },
  {
    id: "p4",
    name: "E-Commerce MVP",
    categories: ["MVP", "Payments"],
    summary:
      "Launched a marketplace MVP in 5 days with Stripe payments, vendor management, and automated order notifications.",
    tech: ["Bolt.new", "Firebase", "Stripe", "Zapier"],
    thumbnail: null,
    images: [],
    problem: "",
    features: [],
    type: "MVP",
  },
  {
    id: "p5",
    name: "Document AI Processor",
    categories: ["AI", "RAG", "Automation"],
    summary:
      "AI-powered document processing tool with RAG system for intelligent search across company knowledge bases.",
    tech: ["Base44", "Supabase", "OpenAI", "Webhooks"],
    thumbnail: null,
    images: [],
    problem: "",
    features: [],
    type: "AI Tool",
  },
];

export default function ProjectsList({
  shell,
  getRevealStyle,
  isMobile,
  isTablet,
  isTouch,
  hoveredCard,
  setHoveredCard,
  setSelectedProject,
  setActiveImageIndex,
  colors,
}) {
  return (
    <section
      id="projects"
      data-reveal-id="projects"
      style={{
        ...getRevealStyle("projects"),
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
            Projects
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
          Featured{" "}
          <span
            style={{
              backgroundImage: `linear-gradient(90deg, ${colors.accent}, ${colors.accentLight})`,
              WebkitBackgroundClip: "text",
              backgroundClip: "text",
              color: "transparent",
            }}
          >
            Work
          </span>
        </h2>

        {/* Projects Grid */}
        <div
          style={{
            display: "grid",
            gap: "24px",
            gridTemplateColumns: isMobile
              ? "1fr"
              : isTablet
              ? "repeat(2, minmax(0, 1fr))"
              : "repeat(3, minmax(0, 1fr))",
          }}
        >
          {projects.map((project) => {
            const isHovered = hoveredCard === project.id;
            const visibleTech = (project.tech || []).slice(0, 4);
            const extraTechCount = (project.tech || []).length - visibleTech.length;

            return (
              <article
                key={project.id}
                onClick={() => {
                  setSelectedProject(project);
                  setActiveImageIndex(0);
                }}
                onMouseEnter={() => !isTouch && setHoveredCard(project.id)}
                onMouseLeave={() => !isTouch && setHoveredCard(null)}
                style={{
                  background: colors.card,
                  border: `1px solid ${
                    isHovered && !isTouch ? colors.accent : colors.border
                  }`,
                  borderRadius: "20px",
                  overflow: "hidden",
                  cursor: "pointer",
                  transition:
                    "transform 220ms ease, border-color 220ms ease, box-shadow 220ms ease",
                  transform:
                    isHovered && !isTouch ? "translateY(-6px)" : "translateY(0)",
                  boxShadow:
                    isHovered && !isTouch
                      ? `0 16px 48px rgba(232,98,44,0.12), 0 0 0 1px rgba(232,98,44,0.15)`
                      : "0 4px 20px rgba(0,0,0,0.2)",
                  display: "flex",
                  flexDirection: "column",
                }}
              >
                {/* Thumbnail */}
                {project.thumbnail ? (
                  <div
                    style={{
                      width: "100%",
                      height: "200px",
                      background: "#0d0d0f",
                      position: "relative",
                      overflow: "hidden",
                      borderBottom: `1px solid rgba(255,255,255,0.04)`,
                    }}
                  >
                    <img
                      src={project.thumbnail}
                      alt={project.name}
                      loading="lazy"
                      style={{
                        width: "100%",
                        height: "100%",
                        objectFit: "cover",
                        objectPosition: "center top",
                        transition: "transform 300ms ease",
                        transform:
                          isHovered && !isTouch ? "scale(1.04)" : "scale(1)",
                        display: "block",
                      }}
                    />
                    {/* Hover overlay */}
                    <div
                      style={{
                        position: "absolute",
                        inset: 0,
                        background:
                          isHovered && !isTouch
                            ? "rgba(0,0,0,0.5)"
                            : "rgba(0,0,0,0)",
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        transition: "background 220ms ease",
                        pointerEvents: "none",
                      }}
                    >
                      {isHovered && !isTouch && (
                        <span
                          style={{
                            background: colors.accent,
                            color: "#fff",
                            fontWeight: 700,
                            fontSize: "13px",
                            padding: "10px 22px",
                            borderRadius: "999px",
                            letterSpacing: "0.3px",
                          }}
                        >
                          View Details →
                        </span>
                      )}
                    </div>
                  </div>
                ) : (
                  /* Placeholder */
                  <div
                    style={{
                      width: "100%",
                      height: "160px",
                      background: `linear-gradient(135deg, rgba(232,98,44,0.06), rgba(232,98,44,0.02))`,
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      borderBottom: `1px solid rgba(255,255,255,0.04)`,
                    }}
                  >
                    <svg
                      width="36"
                      height="36"
                      viewBox="0 0 24 24"
                      fill="none"
                      style={{ opacity: 0.2 }}
                    >
                      <rect x="3" y="3" width="8" height="8" rx="2" stroke={colors.muted} strokeWidth="1.4" />
                      <rect x="13" y="3" width="8" height="8" rx="2" stroke={colors.muted} strokeWidth="1.4" />
                      <rect x="3" y="13" width="8" height="8" rx="2" stroke={colors.muted} strokeWidth="1.4" />
                      <rect x="13" y="13" width="8" height="8" rx="2" stroke={colors.muted} strokeWidth="1.4" />
                    </svg>
                  </div>
                )}

                {/* Card Body */}
                <div
                  style={{
                    padding: "20px",
                    display: "flex",
                    flexDirection: "column",
                    flex: 1,
                  }}
                >
                  {/* Categories */}
                  <div
                    style={{
                      display: "flex",
                      gap: "6px",
                      flexWrap: "wrap",
                      marginBottom: "10px",
                    }}
                  >
                    {(project.categories || []).map((cat) => (
                      <span
                        key={cat}
                        style={{
                          fontSize: "10px",
                          fontWeight: 700,
                          letterSpacing: "0.08em",
                          textTransform: "uppercase",
                          color: colors.accentLight,
                          background: "rgba(232,98,44,0.1)",
                          borderRadius: 999,
                          padding: "3px 10px",
                        }}
                      >
                        {cat}
                      </span>
                    ))}
                  </div>

                  {/* Name */}
                  <h3
                    style={{
                      fontSize: "1rem",
                      fontWeight: 700,
                      color: colors.light,
                      lineHeight: 1.4,
                      margin: "0 0 8px",
                      display: "-webkit-box",
                      WebkitLineClamp: 2,
                      WebkitBoxOrient: "vertical",
                      overflow: "hidden",
                    }}
                  >
                    {project.name}
                  </h3>

                  {/* Summary */}
                  <p
                    style={{
                      fontSize: "0.82rem",
                      color: colors.muted,
                      lineHeight: 1.65,
                      margin: "0 0 16px",
                      display: "-webkit-box",
                      WebkitLineClamp: 3,
                      WebkitBoxOrient: "vertical",
                      overflow: "hidden",
                      flex: 1,
                    }}
                  >
                    {project.summary}
                  </p>

                  {/* Tech Tags */}
                  <div
                    style={{
                      display: "flex",
                      flexWrap: "wrap",
                      gap: "6px",
                      marginBottom: "16px",
                    }}
                  >
                    {visibleTech.map((tag) => (
                      <span
                        key={tag}
                        style={{
                          fontSize: "0.72rem",
                          color: colors.text,
                          background: colors.background,
                          border: `1px solid ${colors.border}`,
                          borderRadius: 999,
                          padding: "3px 10px",
                          fontFamily: "JetBrains Mono, monospace",
                        }}
                      >
                        {tag}
                      </span>
                    ))}
                    {extraTechCount > 0 && (
                      <span
                        style={{
                          fontSize: "0.72rem",
                          color: colors.muted,
                          background: colors.background,
                          border: `1px solid ${colors.border}`,
                          borderRadius: 999,
                          padding: "3px 10px",
                        }}
                      >
                        +{extraTechCount} more
                      </span>
                    )}
                  </div>

                  {/* Footer — type on left, CTA on right, always one line */}
                  <div
                    style={{
                      borderTop: `1px solid rgba(255,255,255,0.06)`,
                      paddingTop: "12px",
                      display: "flex",
                      justifyContent: "space-between",
                      alignItems: "center",
                      gap: "8px",
                    }}
                  >
                    {/* Type — truncated to 1 line */}
                    <span
                      style={{
                        color: colors.muted,
                        fontSize: "0.72rem",
                        fontWeight: 500,
                        overflow: "hidden",
                        textOverflow: "ellipsis",
                        whiteSpace: "nowrap",
                        flex: "1 1 0",
                        minWidth: 0,
                      }}
                    >
                      {project.type || ""}
                    </span>

                    {/* CTA — never wraps */}
                    <span
                      style={{
                        color: colors.accent,
                        fontSize: "0.78rem",
                        fontWeight: 700,
                        whiteSpace: "nowrap",
                        flexShrink: 0,
                        display: "flex",
                        alignItems: "center",
                        gap: "4px",
                        transition: "gap 0.2s ease",
                      }}
                    >
                      View Details
                      <span
                        style={{
                          display: "inline-block",
                          transition: "transform 0.2s ease",
                          transform:
                            isHovered && !isTouch
                              ? "translateX(3px)"
                              : "translateX(0)",
                        }}
                      >
                        →
                      </span>
                    </span>
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
