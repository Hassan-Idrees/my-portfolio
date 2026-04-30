import { useEffect, useState, useRef } from "react";

const colors = {
  background: "#111113",
  card: "#19191d",
  cardHover: "#1e1e23",
  accent: "#e8622c",
  accentDark: "#9e3a16",
  accentLight: "#f2854f",
  accentGlow: "rgba(232,98,44,0.15)",
  text: "#c8c5be",
  muted: "#7d7a72",
  light: "#f0ede8",
  border: "rgba(255,255,255,0.06)",
};

const sections = [
  { id: "home", label: "Home" },
  { id: "about", label: "About" },
  { id: "services", label: "Services" },
  { id: "stack", label: "Stack" },
  { id: "projects", label: "Projects" },
  { id: "reviews", label: "Reviews" },
  { id: "contact", label: "Contact" },
];

const animatedSectionIds = [
  "about",
  "services",
  "stack",
  "projects",
  "reviews",
  "contact",
  "footer",
];

const services = [
  {
    title: "⚡ MVP Development",
    text: "From idea to launch in days, not months. Rapid prototyping with modern no-code & vibe coding tools.",
  },
  {
    title: "🧩 SaaS Platforms",
    text: "Subscription apps, client portals, admin dashboards with auth, payments & real-time data.",
  },
  {
    title: "🤖 AI-Powered Apps",
    text: "GPT/Claude-integrated tools, chatbots, AI copilots, RAG systems & knowledge bases.",
  },
  {
    title: "🔧 Internal Tools",
    text: "Custom CRMs, reporting panels, workflow tools tailored to your business needs.",
  },
  {
    title: "🔄 AI Automations",
    text: "n8n, Make, Zapier pipelines & marketing automation connected to your app.",
  },
  {
    title: "🔗 API Integrations",
    text: "Stripe, Twilio, Google APIs, and third-party services wired into your product.",
  },
];

const techStackCategories = [
  {
    category: "No-Code / Vibe Coding",
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
    tools: ["Supabase", "Firebase", "PostgreSQL", "MongoDB"],
  },
  {
    category: "AI & LLM",
    tools: ["OpenAI GPT", "Anthropic Claude", "AI Agents", "RAG Systems"],
  },
  {
    category: "Automation",
    tools: ["n8n", "Make", "Zapier", "Power Automate", "Axiom.ai", "Airtable"],
  },
  {
    category: "APIs & Payments",
    tools: ["Stripe", "Google APIs", "Twilio", "REST APIs"],
  },
];

const projects = [
  {
    name: "Feury Image Group — Multi-Role Sales & Inventory Management Platform",
    categories: ["Internal Tool", "SaaS", "B2B"],
    summary:
      "A custom internal business platform with role-based dashboards for sales teams, inventory managers, and admins to manage clients, product catalogs, and sales activity in one centralized system.",
    tech: [
      "React",
      "TypeScript",
      "Node.js",
      "PostgreSQL",
      "Tailwind CSS",
      "shadcn/ui",
      "Recharts",
      "Replit",
    ],
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
    type: "Internal Business Tool / B2B Operations Dashboard",
  },
  {
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

const reviews = [
  {
    quote:
      "Delivered our MVP in just one week. The quality was production-ready from day one. Absolutely exceeded expectations.",
    person: "Sarah M.",
    role: "Startup Founder",
    rating: 5,
  },
  {
    quote:
      "The AI automation workflows he built saved us 20+ hours per week. Best investment we've made this year.",
    person: "James K.",
    role: "Agency Owner",
    rating: 5,
  },
  {
    quote:
      "Professional, fast, and proactive. He didn't just build what we asked — he suggested improvements we hadn't thought of.",
    person: "Lisa R.",
    role: "Product Manager",
    rating: 5,
  },
];

function App() {
  const [hoveredCard, setHoveredCard] = useState(null);
  const [activeSection, setActiveSection] = useState("home");
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [isMobile, setIsMobile] = useState(false);
  const [isTablet, setIsTablet] = useState(false);
  const [isLaptop, setIsLaptop] = useState(false);
  const [viewportWidth, setViewportWidth] = useState(1200);
  const [isTouch, setIsTouch] = useState(false);
  const [mouseGlowPosition, setMouseGlowPosition] = useState({ x: 0, y: 0 });
  const [revealedSections, setRevealedSections] = useState({});
  const [hoveredService, setHoveredService] = useState(null);
  const [hoveredTool, setHoveredTool] = useState("");
  const [indicatorStyle, setIndicatorStyle] = useState({ left: 0, width: 0 });
  const [selectedProject, setSelectedProject] = useState(null);
  const [activeImageIndex, setActiveImageIndex] = useState(0);
  const navRefs = useRef({});

  useEffect(() => {
    document.documentElement.style.scrollBehavior = "smooth";

    const sectionIds = sections.map((section) => section.id);

    const updateState = () => {
      setScrolled(window.scrollY > 8);
      const width = window.innerWidth;
      setViewportWidth(width);
      setIsMobile(width < 768);
      setIsTablet(width >= 768 && width < 1024);
      setIsLaptop(width >= 1024 && width < 1200);

      const probe = window.scrollY + window.innerHeight * 0.35;
      let current = "home";

      sectionIds.forEach((sectionId) => {
        const element = document.getElementById(sectionId);

        if (!element) {
          return;
        }

        const top = element.offsetTop;
        const bottom = top + element.offsetHeight;

        if (probe >= top && probe < bottom) {
          current = sectionId;
        }
      });

      setActiveSection(current);
    };

    let updateMouseGlowScheduled = false;
    const updateMouseGlow = (event) => {
      if (updateMouseGlowScheduled) {
        return;
      }
      updateMouseGlowScheduled = true;
      setTimeout(() => {
        setMouseGlowPosition({ x: event.clientX, y: event.clientY });
        updateMouseGlowScheduled = false;
      }, 16);
    };

    updateState();
    setMouseGlowPosition({
      x: window.innerWidth * 0.5,
      y: window.innerHeight * 0.3,
    });

    // Detect touch capability
    const isTouchDevice = () => {
      return (
        "ontouchstart" in window ||
        navigator.maxTouchPoints > 0 ||
        navigator.msMaxTouchPoints > 0
      );
    };
    setIsTouch(isTouchDevice());

    window.addEventListener("scroll", updateState, { passive: true });
    window.addEventListener("resize", updateState);
    window.addEventListener("mousemove", updateMouseGlow);

    return () => {
      document.documentElement.style.scrollBehavior = "";
      window.removeEventListener("scroll", updateState);
      window.removeEventListener("resize", updateState);
      window.removeEventListener("mousemove", updateMouseGlow);
    };
  }, []);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (!entry.isIntersecting) {
            return;
          }

          const revealId = entry.target.getAttribute("data-reveal-id");

          if (!revealId) {
            return;
          }

          setRevealedSections((previous) => {
            if (previous[revealId]) {
              return previous;
            }

            return { ...previous, [revealId]: true };
          });
          observer.unobserve(entry.target);
        });
      },
      {
        threshold: 0.18,
        rootMargin: "50px 0px 50px 0px",
      },
    );

    animatedSectionIds.forEach((sectionId) => {
      const target = document.querySelector(`[data-reveal-id="${sectionId}"]`);

      if (target) {
        observer.observe(target);
      }
    });

    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    const updateIndicatorPosition = () => {
      const activeButton = navRefs.current[activeSection];
      if (activeButton && !isMobile) {
        const { offsetLeft, offsetWidth } = activeButton;
        setIndicatorStyle({
          left: offsetLeft,
          width: offsetWidth,
        });
      }
    };

    updateIndicatorPosition();
    window.addEventListener("resize", updateIndicatorPosition);
    return () => window.removeEventListener("resize", updateIndicatorPosition);
  }, [activeSection, isMobile]);

  useEffect(() => {
    const handleEscapeKey = (event) => {
      if (event.key === "Escape" && selectedProject) {
        setSelectedProject(null);
        setActiveImageIndex(0);
      }
    };

    if (selectedProject) {
      document.body.style.overflow = "hidden";
      window.addEventListener("keydown", handleEscapeKey);
    }

    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("keydown", handleEscapeKey);
    };
  }, [selectedProject]);

  const page = {
    width: "100%",
    minHeight: "100vh",
    background: colors.background,
    color: colors.text,
    fontFamily: "Inter, sans-serif",
    position: "relative",
    margin: 0,
    padding: 0,
  };

  const shell = {
    width: "min(1200px, calc(100% - 32px))",
    margin: "0 auto",
  };

  const cardBase = {
    background: colors.card,
    border: `1px solid ${colors.border}`,
    borderRadius: "24px",
    boxShadow: `0 0 0 1px ${colors.accentGlow}, 0 20px 60px rgba(0,0,0,0.28)`,
    transition:
      "transform 180ms ease, background 180ms ease, border-color 180ms ease",
  };

  const sectionStyle = {
    padding: "clamp(40px, 8vw, 88px) 0",
  };

  const sectionLabel = {
    fontFamily: "JetBrains Mono, monospace",
    fontSize: "clamp(0.70rem, 1.5vw, 0.78rem)",
    letterSpacing: "0.14em",
    textTransform: "uppercase",
    color: colors.accentLight,
    marginBottom: "clamp(12px, 2vw, 18px)",
  };

  const heading = {
    margin: 0,
    color: colors.light,
    lineHeight: 1,
    letterSpacing: "-0.05em",
    fontSize: "clamp(1.8rem, 5vw, 3.2rem)",
  };

  const navLink = {
    color: colors.text,
    textDecoration: "none",
    fontSize: "12px",
    fontWeight: 600,
    letterSpacing: "0.4px",
    textTransform: "uppercase",
    padding: "10px 12px",
    borderRadius: "8px",
    border: "none",
    position: "relative",
    zIndex: 1,
    transition: "background 0.25s ease",
  };

  const navLinkActive = {
    color: "#ffffff",
  };

  const navigateToSection = (sectionId) => (event) => {
    event.preventDefault();

    const target = document.getElementById(sectionId);

    if (target) {
      target.scrollIntoView({ behavior: "smooth", block: "start" });
    }

    setMobileMenuOpen(false);
  };

  const navItems = sections;

  const getRevealStyle = (sectionId) => ({
    opacity: revealedSections[sectionId] ? 1 : 0,
    transform: revealedSections[sectionId]
      ? "translateY(0)"
      : "translateY(60px)",
    transition:
      "opacity 720ms ease, transform 720ms cubic-bezier(0.22, 1, 0.36, 1)",
    willChange: "opacity, transform",
  });

  return (
    <div style={page}>
      <style>
        {`
          @keyframes profilePulse {
            0% {
              box-shadow: 0 0 0 0 rgba(232,98,44,0.22), 0 18px 48px rgba(232,98,44,0.22);
            }
            50% {
              box-shadow: 0 0 0 14px rgba(232,98,44,0), 0 24px 62px rgba(232,98,44,0.33);
            }
            100% {
              box-shadow: 0 0 0 0 rgba(232,98,44,0.22), 0 18px 48px rgba(232,98,44,0.22);
            }
          }

          @keyframes gradientShift {
            0% {
              background-position: 0% 50%;
            }
            100% {
              background-position: 200% 50%;
            }
          }

          @keyframes dotPulse {
            0% {
              transform: scale(0.9);
              box-shadow: 0 0 0 0 rgba(76, 209, 111, 0.45);
            }
            70% {
              transform: scale(1);
              box-shadow: 0 0 0 9px rgba(76, 209, 111, 0);
            }
            100% {
              transform: scale(0.9);
              box-shadow: 0 0 0 0 rgba(76, 209, 111, 0);
            }
          }

          @keyframes shineSwipe {
            0% {
              transform: translateX(-100%) skewX(-20deg);
              opacity: 0;
            }
            50% {
              opacity: 0.4;
            }
            100% {
              transform: translateX(400%) skewX(-20deg);
              opacity: 0;
            }
          }

          ::selection {
            background: rgba(232, 98, 44, 0.4);
            color: #f0ede8;
          }

          ::-moz-selection {
            background: rgba(232, 98, 44, 0.4);
            color: #f0ede8;
          }

          nav a:not(:where([style*="#ffffff"])):hover {
            background: rgba(255,255,255,0.05) !important;
            transition: background 0.25s ease;
          }
        `}
      </style>
      <div
        aria-hidden="true"
        style={{
          position: "fixed",
          inset: 0,
          pointerEvents: "none",
          zIndex: 1,
          background: `radial-gradient(360px circle at ${mouseGlowPosition.x}px ${mouseGlowPosition.y}px, rgba(232,98,44,0.12), transparent 72%)`,
          transition: "background 80ms linear",
        }}
      />
      <header
        style={{
          position: "fixed",
          top: "0",
          left: 0,
          right: 0,
          zIndex: 20,
          backdropFilter: "blur(18px)",
          background: scrolled ? "rgba(17,17,19,0.88)" : "rgba(17,17,19,0.72)",
          borderBottom: `1px solid ${colors.border}`,
        }}
      >
        <div
          style={{
            ...shell,
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            padding: "18px 0",
            gap: "20px",
            position: "relative",
          }}
        >
          <a
            href="#home"
            onClick={navigateToSection("home")}
            style={{
              display: "inline-flex",
              alignItems: "baseline",
              gap: "0px",
              color: colors.light,
              textDecoration: "none",
              fontWeight: 900,
              letterSpacing: "-1px",
              fontSize: "24px",
              lineHeight: 1,
            }}
          >
            <span style={{ color: colors.accent }}>M</span>
            <span>H</span>
            <span style={{ color: colors.accent }}>I</span>
          </a>
          {isMobile ? (
            <button
              type="button"
              aria-label="Toggle navigation menu"
              aria-expanded={mobileMenuOpen}
              onClick={() => setMobileMenuOpen((value) => !value)}
              style={{
                width: "44px",
                height: "44px",
                display: "inline-flex",
                alignItems: "center",
                justifyContent: "center",
                borderRadius: "12px",
                border: `1px solid ${colors.border}`,
                background: colors.card,
                color: colors.light,
                cursor: "pointer",
              }}
            >
              <span
                style={{
                  display: "grid",
                  gap: "4px",
                }}
              >
                <span
                  style={{
                    width: "18px",
                    height: "2px",
                    background: colors.light,
                    borderRadius: "2px",
                  }}
                />
                <span
                  style={{
                    width: "18px",
                    height: "2px",
                    background: colors.light,
                    borderRadius: "2px",
                  }}
                />
                <span
                  style={{
                    width: "18px",
                    height: "2px",
                    background: colors.light,
                    borderRadius: "2px",
                  }}
                />
              </span>
            </button>
          ) : (
            <nav
              role="navigation"
              aria-label="Main navigation"
              style={{
                display: "flex",
                flexWrap: "wrap",
                gap: "8px",
                position: "relative",
              }}
            >
              <div
                aria-hidden="true"
                style={{
                  position: "absolute",
                  left: indicatorStyle.left,
                  top: 0,
                  width: indicatorStyle.width,
                  height: "100%",
                  background: "linear-gradient(135deg, #e8622c, #c44d1a)",
                  borderRadius: "8px",
                  boxShadow: "0 2px 12px rgba(232,98,44,0.3)",
                  transition: "all 0.4s cubic-bezier(0.16, 1, 0.3, 1)",
                  pointerEvents: "none",
                }}
              />
              {navItems.map((section) => {
                const isActive = activeSection === section.id;

                return (
                  <a
                    key={section.id}
                    ref={(el) => {
                      if (el) {
                        navRefs.current[section.id] = el;
                      }
                    }}
                    href={`#${section.id}`}
                    onClick={navigateToSection(section.id)}
                    style={{
                      ...navLink,
                      ...(isActive ? navLinkActive : null),
                    }}
                  >
                    {section.label}
                  </a>
                );
              })}
            </nav>
          )}
          {isMobile && mobileMenuOpen ? (
            <nav
              role="navigation"
              aria-label="Mobile navigation"
              style={{
                position: "absolute",
                top: "68px",
                right: "0",
                display: "grid",
                gap: "8px",
                padding: "14px",
                minWidth: "220px",
                background: "rgba(25,25,29,0.98)",
                border: `1px solid ${colors.border}`,
                borderRadius: "18px",
                boxShadow: `0 24px 60px rgba(0,0,0,0.35)`,
              }}
            >
              {navItems.map((section) => {
                const isActive = activeSection === section.id;

                return (
                  <a
                    key={section.id}
                    href={`#${section.id}`}
                    onClick={navigateToSection(section.id)}
                    style={{
                      ...navLink,
                      display: "block",
                      ...(isActive ? navLinkActive : null),
                    }}
                  >
                    {section.label}
                  </a>
                );
              })}
            </nav>
          ) : null}
        </div>
      </header>

      <main
        style={{ paddingTop: "0px", position: "relative", zIndex: 2 }}
        role="main"
        aria-label="Primary content"
      >
        <a
          href="#home"
          style={{
            position: "absolute",
            top: "-40px",
            left: "0",
            background: colors.accent,
            color: colors.background,
            padding: "8px 16px",
            borderRadius: "6px",
            textDecoration: "none",
            fontWeight: 600,
            fontSize: "14px",
            zIndex: 1000,
          }}
          onFocus={(e) => {
            e.target.style.top = "16px";
          }}
          onBlur={(e) => {
            e.target.style.top = "-40px";
          }}
        >
          Skip to main content
        </a>
        <section
          id="home"
          style={{
            minHeight: "auto",
            padding: isMobile
              ? "90px 24px 40px"
              : isTablet
                ? "80px 24px 60px"
                : isLaptop
                  ? "80px 24px 40px"
                  : viewportWidth >= 1400
                    ? "110px 24px 60px"
                    : "100px 24px 60px",
            scrollMarginTop: "90px",
          }}
        >
          <div style={{ maxWidth: "1200px", width: "100%", margin: "0 auto" }}>
            <div
              style={{
                display: "flex",
                flexDirection: isMobile ? "column-reverse" : "row",
                alignItems: isLaptop ? "flex-start" : "center",
                gap: isMobile
                  ? "32px"
                  : isTablet
                    ? "30px"
                    : isLaptop
                      ? "24px"
                      : "40px",
              }}
            >
              <div
                style={{
                  width: isMobile ? "100%" : "55%",
                  textAlign: isMobile ? "center" : "left",
                }}
              >
                <div
                  style={{
                    display: "flex",
                    justifyContent: isMobile ? "center" : "flex-start",
                    marginBottom: isLaptop ? "16px" : "20px",
                    marginTop: 0,
                  }}
                >
                  <span
                    style={{
                      display: "inline-flex",
                      alignItems: "center",
                      gap: "10px",
                      borderRadius: "999px",
                      border: `1px solid ${colors.border}`,
                      background: "rgba(255,255,255,0.03)",
                      color: colors.light,
                      padding: "9px 14px",
                      fontSize: "13px",
                      fontWeight: 600,
                    }}
                  >
                    <span
                      aria-hidden="true"
                      style={{
                        width: "8px",
                        height: "8px",
                        borderRadius: "50%",
                        background: "#4cd16f",
                        animation: "dotPulse 1.8s ease-in-out infinite",
                      }}
                    />
                    Available for projects
                  </span>
                </div>

                <p
                  style={{
                    margin: "0 0 10px",
                    color: colors.muted,
                    fontSize: "clamp(13px, 1.2vw, 15px)",
                  }}
                >
                  Hi, I&apos;m{" "}
                  <span style={{ color: colors.accent, fontWeight: 700 }}>
                    Muhammad Hassan Idrees
                  </span>
                </p>

                <h1
                  style={{
                    margin: `0 0 ${isLaptop ? "13px" : "16px"}`,
                    fontSize: "clamp(30px, 4vw, 58px)",
                    fontWeight: 900,
                    lineHeight: isTablet ? 1.06 : 1.04,
                    letterSpacing: "-2px",
                    backgroundImage: `linear-gradient(100deg, ${colors.light}, ${colors.accent}, ${colors.light})`,
                    backgroundSize: "220% 220%",
                    backgroundPosition: "0% 50%",
                    WebkitBackgroundClip: "text",
                    backgroundClip: "text",
                    color: "transparent",
                    animation: "gradientShift 6s linear infinite",
                  }}
                >
                  AI Automation Engineer &amp; SaaS Builder
                </h1>

                <p
                  style={{
                    maxWidth: isMobile ? "100%" : "480px",
                    fontSize: "clamp(14px, 1.5vw, 17px)",
                    lineHeight: 1.7,
                    color: colors.muted,
                    margin: `0 0 ${isLaptop ? "22px" : "28px"}`,
                  }}
                >
                  Building MVPs, SaaS Platforms &amp; AI-Powered Automations. I
                  help startups &amp; businesses go from idea to production —
                  fast.
                </p>

                <div
                  style={{
                    display: "flex",
                    flexDirection: isMobile ? "column" : "row",
                    gap: "12px",
                    justifyContent: isMobile ? "center" : "flex-start",
                    marginBottom: isLaptop ? "29px" : "36px",
                    width: isMobile ? "100%" : "auto",
                  }}
                >
                  <a
                    href="#contact"
                    onClick={navigateToSection("contact")}
                    style={{
                      background: `linear-gradient(120deg, ${colors.accent}, ${colors.accentLight})`,
                      color: colors.light,
                      padding: isMobile
                        ? "14px 28px"
                        : isTablet || isLaptop
                          ? "14px 32px"
                          : "17px 42px",
                      fontSize: isMobile
                        ? "13px"
                        : isTablet || isLaptop
                          ? "13px"
                          : "14px",
                      borderRadius: "999px",
                      textDecoration: "none",
                      fontWeight: 700,
                      boxShadow: `0 16px 34px ${colors.accentGlow}`,
                      width: isMobile ? "100%" : "auto",
                      textAlign: "center",
                      boxSizing: "border-box",
                    }}
                  >
                    Let&apos;s Work Together →
                  </a>
                  <a
                    href="#projects"
                    onClick={navigateToSection("projects")}
                    style={{
                      color: colors.light,
                      textDecoration: "none",
                      padding: isMobile
                        ? "14px 28px"
                        : isTablet || isLaptop
                          ? "14px 32px"
                          : "17px 42px",
                      fontSize: isMobile
                        ? "13px"
                        : isTablet || isLaptop
                          ? "13px"
                          : "14px",
                      borderRadius: "999px",
                      border: `1px solid ${colors.border}`,
                      background: "transparent",
                      width: isMobile ? "100%" : "auto",
                      textAlign: "center",
                      boxSizing: "border-box",
                    }}
                  >
                    View Projects
                  </a>
                </div>

                <div
                  style={{
                    display: isMobile ? "grid" : "flex",
                    gridTemplateColumns: isMobile
                      ? "repeat(3, 1fr)"
                      : undefined,
                    gap: isMobile ? "16px" : "clamp(24px, 4vw, 56px)",
                    width: isMobile ? "100%" : "auto",
                    justifyContent: isMobile ? undefined : "flex-start",
                  }}
                >
                  {[
                    { value: "4+", label: "Years Experience" },
                    { value: "50+", label: "Projects Delivered" },
                    { value: "100%", label: "Client Satisfaction" },
                  ].map((item) => (
                    <div key={item.label} style={{ textAlign: "center" }}>
                      <p
                        style={{
                          margin: 0,
                          color: colors.accent,
                          fontWeight: 900,
                          fontSize: isMobile
                            ? "clamp(22px, 6vw, 28px)"
                            : "clamp(24px, 3vw, 40px)",
                          lineHeight: 1,
                        }}
                      >
                        {item.value}
                      </p>
                      <p
                        style={{
                          margin: "8px 0 0",
                          color: colors.muted,
                          fontSize: isMobile
                            ? "8px"
                            : "clamp(8px, 0.8vw, 10px)",
                          fontWeight: 600,
                          textTransform: "uppercase",
                          letterSpacing: "1.3px",
                        }}
                      >
                        {item.label}
                      </p>
                    </div>
                  ))}
                </div>
              </div>

              <div
                style={{
                  width: isMobile ? "100%" : "45%",
                  display: "flex",
                  justifyContent: "center",
                }}
              >
                {isMobile ? (
                  // Mobile: Circular image with orange border glow
                  <div className="hero-image--mobile">
                    <div className="hero-image--mobile-inner">
                      <img
                        className="hero-image__img--mobile"
                        src="https://res.cloudinary.com/dd9zq4nvl/image/upload/v1777506102/ChatGPT_Image_Apr_30_2026_04_29_24_AM-Photoroom_qeaon1.png"
                        alt="Muhammad Hassan Idrees, AI Automation Engineer and SaaS Builder"
                        loading="lazy"
                      />
                    </div>
                  </div>
                ) : (
                  // Desktop: Masked image with transparent fade blending
                  <div
                    style={{
                      width: "100%",
                      maxWidth: isTablet
                        ? "300px"
                        : isLaptop
                          ? "350px"
                          : viewportWidth >= 1400
                            ? "480px"
                            : "420px",
                      margin: 0,
                    }}
                  >
                    <div className="hero-image">
                      <img
                        className="hero-image__img"
                        src="https://res.cloudinary.com/dd9zq4nvl/image/upload/v1777506102/ChatGPT_Image_Apr_30_2026_04_29_24_AM-Photoroom_qeaon1.png"
                        alt="Muhammad Hassan Idrees, AI Automation Engineer and SaaS Builder"
                        loading="lazy"
                        style={{
                          width: "100%",
                          height: "auto",
                          maxHeight: "85vh",
                          objectFit: "contain",
                          objectPosition: "center bottom",
                          display: "block",
                        }}
                      />
                    </div>
                  </div>
                )}
              </div>
            </div>
          </div>
        </section>

        <section
          id="about"
          data-reveal-id="about"
          style={{
            ...sectionStyle,
            scrollMarginTop: "120px",
            ...getRevealStyle("about"),
          }}
        >
          <div style={shell}>
            <div
              style={{
                ...cardBase,
                padding: isMobile ? "28px 22px" : "38px 40px",
                background:
                  "radial-gradient(circle at top right, rgba(232,98,44,0.12), transparent 42%), linear-gradient(180deg, #19191d 0%, #17171b 100%)",
              }}
            >
              <div
                style={{
                  display: "inline-flex",
                  alignItems: "center",
                  gap: "12px",
                  marginBottom: "20px",
                }}
              >
                <span
                  aria-hidden="true"
                  style={{
                    width: "36px",
                    height: "2px",
                    borderRadius: "999px",
                    background: colors.accent,
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
                  ABOUT ME
                </span>
              </div>
              <h2
                style={{
                  ...heading,
                  fontSize: isMobile
                    ? "1.95rem"
                    : "clamp(2.3rem, 4.2vw, 3.2rem)",
                  lineHeight: 1.15,
                  marginBottom: "18px",
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
              <p
                style={{
                  margin: 0,
                  maxWidth: "92ch",
                  color: colors.text,
                  lineHeight: 1.85,
                  fontSize: isMobile ? "1rem" : "1.08rem",
                }}
              >
                I'm an AI Automation Engineer and SaaS Builder based in
                Pakistan, currently serving as Team Lead at Flowveo — where I
                lead a team delivering production-ready MVPs, SaaS platforms,
                and intelligent automation systems for clients across
                industries. I've built and shipped AI-powered web applications,
                RAG systems, and multi-agent workflows integrating OpenAI GPT
                and Anthropic Claude — alongside scalable automation pipelines
                on n8n, Make, and Zapier. I work with tools like Lovable,
                Replit, Supabase, Firebase, HubSpot, and GoHighLevel to take
                products from concept to launch quickly and reliably. Alongside
                my team role, I work as an independent freelancer serving
                startups, agencies, and businesses worldwide — bringing the same
                production-ready quality to every engagement, regardless of
                scale or timezone.
              </p>
            </div>
          </div>
        </section>

        <section
          id="services"
          data-reveal-id="services"
          style={{
            ...sectionStyle,
            scrollMarginTop: "120px",
            ...getRevealStyle("services"),
          }}
        >
          <div style={shell}>
            <div style={sectionLabel}>Services</div>
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
              {services.map((service) => {
                const isServiceHovered = hoveredService === service.title;

                return (
                  <article
                    key={service.title}
                    onMouseEnter={() =>
                      !isTouch && setHoveredService(service.title)
                    }
                    onMouseLeave={() => !isTouch && setHoveredService(null)}
                    style={{
                      background: isServiceHovered
                        ? colors.cardHover
                        : "#19191d",
                      border: `1px solid ${isServiceHovered ? colors.accentGlow : colors.border}`,
                      borderRadius: "14px",
                      padding: isMobile ? "24px" : isTablet ? "28px" : "36px",
                      transform:
                        isServiceHovered && !isTouch
                          ? "translateY(-8px)"
                          : "translateY(0)",
                      boxShadow:
                        isServiceHovered && !isTouch
                          ? `0 0 0 1px ${colors.accentGlow}, 0 22px 44px rgba(0,0,0,0.34)`
                          : "0 12px 30px rgba(0,0,0,0.2)",
                      transition:
                        "transform 280ms cubic-bezier(0.22, 1, 0.36, 1), box-shadow 280ms cubic-bezier(0.22, 1, 0.36, 1), border-color 280ms cubic-bezier(0.22, 1, 0.36, 1), background 280ms cubic-bezier(0.22, 1, 0.36, 1)",
                    }}
                  >
                    <h3
                      style={{
                        margin: "0 0 12px",
                        color: colors.light,
                        fontSize: "clamp(1rem, 2.5vw, 1.18rem)",
                      }}
                    >
                      {service.title}
                    </h3>
                    <p
                      style={{
                        margin: 0,
                        lineHeight: 1.75,
                        color: colors.text,
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

        <section
          id="stack"
          data-reveal-id="stack"
          style={{
            ...sectionStyle,
            scrollMarginTop: "120px",
            ...getRevealStyle("stack"),
          }}
        >
          <div style={shell}>
            <div style={sectionLabel}>Tech Stack</div>
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
              {techStackCategories.map((group) => (
                <article
                  key={group.category}
                  style={{
                    ...cardBase,
                    borderRadius: "14px",
                    padding: isMobile ? "20px" : "24px",
                  }}
                >
                  <p
                    style={{
                      margin: "0 0 14px",
                      color: colors.muted,
                      textTransform: "uppercase",
                      fontSize: "clamp(0.8rem, 1.5vw, 0.85rem)",
                      letterSpacing: "3px",
                      fontWeight: 600,
                    }}
                  >
                    {group.category}
                  </p>
                  <div
                    style={{ display: "flex", flexWrap: "wrap", gap: "10px" }}
                  >
                    {group.tools.map((tool) => {
                      const toolKey = `${group.category}-${tool}`;
                      const isToolHovered = hoveredTool === toolKey;

                      return (
                        <span
                          key={tool}
                          onMouseEnter={() =>
                            !isTouch && setHoveredTool(toolKey)
                          }
                          onMouseLeave={() => !isTouch && setHoveredTool("")}
                          style={{
                            borderRadius: "999px",
                            border: `1px solid ${isToolHovered && !isTouch ? colors.accent : colors.border}`,
                            background: colors.card,
                            color:
                              isToolHovered && !isTouch
                                ? colors.accent
                                : colors.light,
                            padding: "10px 14px",
                            fontFamily: "JetBrains Mono, monospace",
                            fontSize: "clamp(0.78rem, 1.2vw, 0.84rem)",
                            lineHeight: 1.2,
                            transform:
                              isToolHovered && !isTouch
                                ? "translateY(-3px)"
                                : "translateY(0)",
                            boxShadow:
                              isToolHovered && !isTouch
                                ? `0 8px 18px ${colors.accentGlow}`
                                : "none",
                            transition:
                              "transform 220ms cubic-bezier(0.22, 1, 0.36, 1), border-color 220ms cubic-bezier(0.22, 1, 0.36, 1), color 220ms cubic-bezier(0.22, 1, 0.36, 1), box-shadow 220ms cubic-bezier(0.22, 1, 0.36, 1)",
                          }}
                        >
                          {tool}
                        </span>
                      );
                    })}
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section
          id="projects"
          data-reveal-id="projects"
          style={{
            ...sectionStyle,
            scrollMarginTop: "120px",
            ...getRevealStyle("projects"),
          }}
        >
          <div style={shell}>
            <div style={sectionLabel}>Projects</div>
            <div
              style={{
                display: "grid",
                gap: "24px",
                gridTemplateColumns: isMobile
                  ? "1fr"
                  : "repeat(2, minmax(0, 1fr))",
              }}
            >
              {projects.map((project) => {
                const isHovered = hoveredCard === project.name;

                return (
                  <article
                    key={project.name}
                    onClick={() => {
                      setSelectedProject(project);
                      setActiveImageIndex(0);
                    }}
                    onMouseEnter={() =>
                      !isTouch && setHoveredCard(project.name)
                    }
                    onMouseLeave={() => !isTouch && setHoveredCard(null)}
                    style={{
                      ...cardBase,
                      padding: 0,
                      overflow: "hidden",
                      display: "flex",
                      flexDirection: "column",
                      cursor: "pointer",
                      transform:
                        isHovered && !isTouch
                          ? "translateY(-8px)"
                          : "translateY(0)",
                      boxShadow:
                        isHovered && !isTouch
                          ? `0 0 0 1px ${colors.accentGlow}, 0 24px 50px rgba(0,0,0,0.35)`
                          : `0 0 0 1px ${colors.accentGlow}, 0 12px 30px rgba(0,0,0,0.2)`,
                      transition:
                        "transform 280ms cubic-bezier(0.22, 1, 0.36, 1), box-shadow 280ms cubic-bezier(0.22, 1, 0.36, 1)",
                    }}
                  >
                    {project.thumbnail ? (
                      <img
                        src={project.thumbnail}
                        alt={project.name}
                        style={{
                          width: "100%",
                          height: isMobile ? "140px" : "170px",
                          objectFit: "cover",
                          borderRadius: "24px 24px 0 0",
                        }}
                      />
                    ) : (
                      <div
                        style={{
                          position: "relative",
                          width: "100%",
                          height: isMobile ? "140px" : "170px",
                          background: `linear-gradient(135deg, ${colors.accent}22, ${colors.accentDark}44, ${colors.accent}22)`,
                          overflow: "hidden",
                        }}
                      >
                        <div
                          aria-hidden="true"
                          style={{
                            position: "absolute",
                            top: 0,
                            left: 0,
                            right: 0,
                            bottom: 0,
                            width: "30%",
                            height: "100%",
                            background:
                              "linear-gradient(90deg, transparent, rgba(255,255,255,0.25), transparent)",
                            animation: "shineSwipe 3s ease-in-out infinite",
                          }}
                        />
                      </div>
                    )}
                    <div style={{ padding: "20px 24px", position: "relative" }}>
                      {isHovered && !isTouch && (
                        <div
                          style={{
                            position: "absolute",
                            top: "20px",
                            right: "24px",
                            color: colors.accent,
                            fontSize: "0.9rem",
                            fontWeight: 600,
                          }}
                        >
                          View Details →
                        </div>
                      )}
                      <div
                        style={{
                          display: "flex",
                          flexWrap: "wrap",
                          gap: "8px",
                          marginBottom: "10px",
                        }}
                      >
                        {project.categories.map((cat) => (
                          <span
                            key={cat}
                            style={{
                              fontFamily: "JetBrains Mono, monospace",
                              fontSize: "0.7rem",
                              fontWeight: 700,
                              letterSpacing: "0.08em",
                              textTransform: "uppercase",
                              color: colors.accent,
                            }}
                          >
                            {cat}
                          </span>
                        ))}
                      </div>
                      <h3
                        style={{
                          margin: "0 0 8px",
                          color: colors.light,
                          fontSize: "1.24rem",
                          fontWeight: 700,
                        }}
                      >
                        {project.name}
                      </h3>
                      <p
                        style={{
                          margin: "0 0 14px",
                          lineHeight: 1.75,
                          color: colors.text,
                          fontSize: "0.95rem",
                        }}
                      >
                        {project.summary}
                      </p>
                      <div
                        style={{
                          display: "flex",
                          flexWrap: "wrap",
                          gap: "8px",
                        }}
                      >
                        {project.tech.map((toolTag) => (
                          <span
                            key={toolTag}
                            style={{
                              borderRadius: "999px",
                              border: `1px solid ${colors.accent}`,
                              background: "transparent",
                              color: colors.accent,
                              padding: "6px 12px",
                              fontFamily: "JetBrains Mono, monospace",
                              fontSize: "0.75rem",
                              fontWeight: 600,
                              lineHeight: 1.2,
                            }}
                          >
                            {toolTag}
                          </span>
                        ))}
                      </div>
                    </div>
                  </article>
                );
              })}
            </div>
          </div>
        </section>

        <section
          id="reviews"
          data-reveal-id="reviews"
          style={{
            ...sectionStyle,
            scrollMarginTop: "120px",
            ...getRevealStyle("reviews"),
          }}
        >
          <div style={shell}>
            <div style={sectionLabel}>Reviews</div>
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
                const isReviewHovered = hoveredCard === review.person;

                return (
                  <blockquote
                    key={review.person}
                    onMouseEnter={() =>
                      !isTouch && setHoveredCard(review.person)
                    }
                    onMouseLeave={() => !isTouch && setHoveredCard(null)}
                    style={{
                      ...cardBase,
                      margin: 0,
                      padding: isMobile ? "20px" : "26px",
                      position: "relative",
                      border: `1px solid ${isReviewHovered && !isTouch ? colors.accent : colors.border}`,
                      boxShadow:
                        isReviewHovered && !isTouch
                          ? `0 0 0 1px ${colors.accent}, 0 16px 40px ${colors.accentGlow}`
                          : `0 0 0 1px ${colors.accentGlow}, 0 12px 30px rgba(0,0,0,0.2)`,
                      transition:
                        "border-color 220ms ease, box-shadow 220ms ease",
                    }}
                  >
                    <div
                      aria-hidden="true"
                      style={{
                        position: "absolute",
                        top: "16px",
                        right: "18px",
                        fontSize: "3.6rem",
                        color: `${colors.accent}22`,
                        lineHeight: 1,
                        fontFamily: "Georgia, serif",
                      }}
                    >
                      "
                    </div>
                    <div
                      style={{
                        display: "flex",
                        gap: "4px",
                        marginBottom: "14px",
                      }}
                    >
                      {Array.from({ length: review.rating }).map((_, idx) => (
                        <svg
                          key={idx}
                          width="16"
                          height="16"
                          viewBox="0 0 16 16"
                          fill="none"
                          style={{ color: colors.accent }}
                        >
                          <path
                            d="M8 1.5L10.5 6H15.5L11.75 9.5L13.25 14.5L8 11L2.75 14.5L4.25 9.5L0.5 6H5.5L8 1.5Z"
                            fill="currentColor"
                          />
                        </svg>
                      ))}
                    </div>
                    <p
                      style={{
                        margin: "0 0 18px",
                        fontSize: "1.02rem",
                        lineHeight: 1.75,
                        color: colors.light,
                        fontStyle: "italic",
                        fontWeight: 500,
                      }}
                    >
                      {review.quote}
                    </p>
                    <div
                      style={{
                        height: "1px",
                        background: colors.border,
                        margin: "16px 0",
                      }}
                    />
                    <footer style={{ color: colors.muted }}>
                      <strong style={{ color: colors.light, fontWeight: 700 }}>
                        {review.person}
                      </strong>
                      <p
                        style={{
                          margin: "4px 0 0",
                          fontSize: "0.85rem",
                          color: colors.muted,
                        }}
                      >
                        {review.role}
                      </p>
                    </footer>
                  </blockquote>
                );
              })}
            </div>
          </div>
        </section>

        <section
          id="contact"
          data-reveal-id="contact"
          style={{
            ...sectionStyle,
            scrollMarginTop: "120px",
            ...getRevealStyle("contact"),
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <div
            style={{
              width: "100%",
              maxWidth: isMobile ? "100%" : "600px",
              margin: "0 auto",
              padding: isMobile ? "0 16px" : "0",
              position: "relative",
            }}
          >
            <div
              style={{
                position: "relative",
                padding: "clamp(28px, 5vw, 40px) clamp(20px, 4vw, 32px)",
                borderRadius: "24px",
                border: `2px solid ${colors.accent}`,
                background: `linear-gradient(135deg, rgba(255, 153, 0, 0.05) 0%, rgba(255, 153, 0, 0.02) 100%)`,
                textAlign: "center",
              }}
            >
              <div
                style={{
                  position: "absolute",
                  top: 0,
                  left: "24px",
                  right: "24px",
                  height: "2px",
                  background: `linear-gradient(90deg, transparent, ${colors.accent}, transparent)`,
                  borderRadius: "24px 24px 0 0",
                }}
              />

              <div
                style={{
                  position: "absolute",
                  bottom: "-60px",
                  right: "-60px",
                  width: "200px",
                  height: "200px",
                  background: `radial-gradient(circle, ${colors.accentGlow} 0%, transparent 70%)`,
                  borderRadius: "50%",
                  pointerEvents: "none",
                  zIndex: -1,
                }}
              />

              <div style={{ position: "relative", zIndex: 1 }}>
                <h2
                  style={{
                    margin: "0 0 16px",
                    fontSize: "clamp(1.6rem, 5vw, 2.1rem)",
                    lineHeight: 1.3,
                    fontWeight: 700,
                    color: colors.light,
                  }}
                >
                  Let's Build Something{" "}
                  <span
                    style={{
                      background: `linear-gradient(135deg, ${colors.accent} 0%, #ff8533 100%)`,
                      WebkitBackgroundClip: "text",
                      WebkitTextFillColor: "transparent",
                      backgroundClip: "text",
                    }}
                  >
                    Powerful
                  </span>
                </h2>

                <p
                  style={{
                    margin: "0 0 28px",
                    fontSize: "clamp(0.9rem, 2vw, 0.95rem)",
                    lineHeight: 1.8,
                    color: colors.light,
                    opacity: 0.85,
                  }}
                >
                  Whether you're a founder validating an idea, an agency needing
                  a white-label solution, or a business ready to automate �
                  let's talk.
                </p>

                <div
                  style={{
                    display: "flex",
                    gap: "12px",
                    flexWrap: "wrap",
                    justifyContent: "center",
                  }}
                >
                  <a
                    href="mailto:your@email.com"
                    style={{
                      padding: "clamp(10px, 2vw, 12px) clamp(18px, 3vw, 24px)",
                      borderRadius: "999px",
                      textDecoration: "none",
                      fontWeight: 700,
                      fontSize: "clamp(0.9rem, 1.5vw, 0.95rem)",
                      background: colors.accent,
                      color: colors.dark,
                      border: `2px solid ${colors.accent}`,
                      transition: "all 200ms ease",
                      cursor: "pointer",
                    }}
                    onMouseEnter={(e) => {
                      if (!isTouch) {
                        e.target.style.background = "transparent";
                        e.target.style.color = colors.accent;
                      }
                    }}
                    onMouseLeave={(e) => {
                      if (!isTouch) {
                        e.target.style.background = colors.accent;
                        e.target.style.color = colors.dark;
                      }
                    }}
                  >
                    Send a Message
                  </a>

                  <a
                    href="https://linkedin.com/in/yourprofile"
                    target="_blank"
                    rel="noopener noreferrer"
                    style={{
                      padding: "clamp(10px, 2vw, 12px) clamp(18px, 3vw, 24px)",
                      borderRadius: "999px",
                      textDecoration: "none",
                      fontWeight: 700,
                      fontSize: "clamp(0.9rem, 1.5vw, 0.95rem)",
                      background: "transparent",
                      color: colors.light,
                      border: `2px solid ${colors.border}`,
                      transition: "all 200ms ease",
                      cursor: "pointer",
                    }}
                    onMouseEnter={(e) => {
                      if (!isTouch) {
                        e.target.style.borderColor = colors.accent;
                        e.target.style.color = colors.accent;
                      }
                    }}
                    onMouseLeave={(e) => {
                      if (!isTouch) {
                        e.target.style.borderColor = colors.border;
                        e.target.style.color = colors.light;
                      }
                    }}
                  >
                    LinkedIn
                  </a>

                  <a
                    href="https://upwork.com/yourprofile"
                    target="_blank"
                    rel="noopener noreferrer"
                    style={{
                      padding: "clamp(10px, 2vw, 12px) clamp(18px, 3vw, 24px)",
                      borderRadius: "999px",
                      textDecoration: "none",
                      fontWeight: 700,
                      fontSize: "clamp(0.9rem, 1.5vw, 0.95rem)",
                      background: "transparent",
                      color: colors.light,
                      border: `2px solid ${colors.border}`,
                      transition: "all 200ms ease",
                      cursor: "pointer",
                    }}
                    onMouseEnter={(e) => {
                      if (!isTouch) {
                        e.target.style.borderColor = colors.accent;
                        e.target.style.color = colors.accent;
                      }
                    }}
                    onMouseLeave={(e) => {
                      if (!isTouch) {
                        e.target.style.borderColor = colors.border;
                        e.target.style.color = colors.light;
                      }
                    }}
                  >
                    Upwork
                  </a>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>

      {selectedProject && (
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
              background: colors.card,
              border: `1px solid ${colors.border}`,
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
              {`
                @keyframes modalEntrance {
                  from {
                    transform: scale(0.95);
                    opacity: 0;
                  }
                  to {
                    transform: scale(1);
                    opacity: 1;
                  }
                }
                @keyframes imageFade {
                  from {
                    opacity: 0;
                  }
                  to {
                    opacity: 1;
                  }
                }
              `}
            </style>

            <button
              onClick={() => {
                setSelectedProject(null);
                setActiveImageIndex(0);
              }}
              style={{
                position: "fixed",
                top: "20px",
                right: "20px",
                background: colors.card,
                border: `1px solid ${colors.border}`,
                borderRadius: "8px",
                width: "40px",
                height: "40px",
                cursor: "pointer",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                color: colors.light,
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
                    background: colors.background,
                    borderRadius: "24px 24px 0 0",
                    overflow: "hidden",
                  }}
                >
                  <img
                    src={selectedProject.images[activeImageIndex]}
                    alt={`${selectedProject.name} - Image ${activeImageIndex + 1}`}
                    style={{
                      width: "100%",
                      height: "100%",
                      objectFit: "cover",
                      animation: "imageFade 200ms ease-in-out",
                    }}
                  />

                  <div
                    style={{
                      position: "absolute",
                      top: "16px",
                      right: "16px",
                      background: "rgba(0, 0, 0, 0.6)",
                      color: colors.light,
                      padding: "6px 12px",
                      borderRadius: "6px",
                      fontSize: "12px",
                      fontWeight: 600,
                    }}
                  >
                    {activeImageIndex + 1} / {selectedProject.images.length}
                  </div>

                  {activeImageIndex > 0 && (
                    <button
                      onClick={() => setActiveImageIndex(activeImageIndex - 1)}
                      style={{
                        position: "absolute",
                        left: "16px",
                        top: "50%",
                        transform: "translateY(-50%)",
                        background: "rgba(0, 0, 0, 0.5)",
                        border: "none",
                        color: colors.light,
                        width: "40px",
                        height: "40px",
                        borderRadius: "50%",
                        cursor: "pointer",
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        fontSize: "18px",
                        transition: "background 200ms ease",
                      }}
                      onMouseEnter={(e) => {
                        e.target.style.background = "rgba(0, 0, 0, 0.8)";
                      }}
                      onMouseLeave={(e) => {
                        e.target.style.background = "rgba(0, 0, 0, 0.5)";
                      }}
                      aria-label="Previous image"
                    >
                      ←
                    </button>
                  )}

                  {activeImageIndex < selectedProject.images.length - 1 && (
                    <button
                      onClick={() => setActiveImageIndex(activeImageIndex + 1)}
                      style={{
                        position: "absolute",
                        right: "16px",
                        top: "50%",
                        transform: "translateY(-50%)",
                        background: "rgba(0, 0, 0, 0.5)",
                        border: "none",
                        color: colors.light,
                        width: "40px",
                        height: "40px",
                        borderRadius: "50%",
                        cursor: "pointer",
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        fontSize: "18px",
                        transition: "background 200ms ease",
                      }}
                      onMouseEnter={(e) => {
                        e.target.style.background = "rgba(0, 0, 0, 0.8)";
                      }}
                      onMouseLeave={(e) => {
                        e.target.style.background = "rgba(0, 0, 0, 0.5)";
                      }}
                      aria-label="Next image"
                    >
                      →
                    </button>
                  )}
                </div>

                {selectedProject.images.length > 1 && (
                  <div
                    style={{
                      display: "flex",
                      gap: "8px",
                      padding: "16px",
                      background: colors.background,
                      overflowX: "auto",
                      borderBottom: `1px solid ${colors.border}`,
                    }}
                  >
                    {selectedProject.images.map((img, idx) => (
                      <button
                        key={idx}
                        onClick={() => setActiveImageIndex(idx)}
                        style={{
                          minWidth: "80px",
                          height: "56px",
                          borderRadius: "8px",
                          border:
                            activeImageIndex === idx
                              ? `2px solid ${colors.accent}`
                              : `1px solid ${colors.border}`,
                          padding: 0,
                          cursor: "pointer",
                          overflow: "hidden",
                          background: "transparent",
                        }}
                        aria-label={`View image ${idx + 1}`}
                      >
                        <img
                          src={img}
                          alt={`Thumbnail ${idx + 1}`}
                          style={{
                            width: "100%",
                            height: "100%",
                            objectFit: "cover",
                          }}
                        />
                      </button>
                    ))}
                  </div>
                )}
              </div>
            )}

            <div style={{ padding: "32px" }}>
              <div
                style={{
                  display: "flex",
                  flexWrap: "wrap",
                  gap: "8px",
                  marginBottom: "16px",
                }}
              >
                {selectedProject.categories.map((cat) => (
                  <span
                    key={cat}
                    style={{
                      fontFamily: "JetBrains Mono, monospace",
                      fontSize: "0.7rem",
                      fontWeight: 700,
                      letterSpacing: "0.08em",
                      textTransform: "uppercase",
                      color: colors.accent,
                    }}
                  >
                    {cat}
                  </span>
                ))}
              </div>

              <h2
                style={{
                  margin: "0 0 8px",
                  color: colors.light,
                  fontSize: "1.75rem",
                  fontWeight: 700,
                }}
              >
                {selectedProject.name}
              </h2>

              {selectedProject.type && (
                <span
                  style={{
                    display: "inline-block",
                    background: colors.accentGlow,
                    color: colors.accent,
                    padding: "6px 12px",
                    borderRadius: "999px",
                    fontSize: "0.8rem",
                    fontWeight: 600,
                    marginBottom: "16px",
                  }}
                >
                  {selectedProject.type}
                </span>
              )}

              <p
                style={{
                  margin: "0 0 24px",
                  lineHeight: 1.8,
                  color: colors.text,
                  fontSize: "1rem",
                }}
              >
                {selectedProject.summary}
              </p>

              {selectedProject.problem && (
                <div style={{ marginBottom: "24px" }}>
                  <h3
                    style={{
                      margin: "0 0 12px",
                      color: colors.light,
                      fontSize: "1.1rem",
                      fontWeight: 700,
                    }}
                  >
                    The Problem
                  </h3>
                  <p
                    style={{
                      margin: 0,
                      lineHeight: 1.75,
                      color: colors.muted,
                      fontSize: "0.95rem",
                    }}
                  >
                    {selectedProject.problem}
                  </p>
                </div>
              )}

              {selectedProject.features &&
                selectedProject.features.length > 0 && (
                  <div style={{ marginBottom: "24px" }}>
                    <h3
                      style={{
                        margin: "0 0 16px",
                        color: colors.light,
                        fontSize: "1.1rem",
                        fontWeight: 700,
                      }}
                    >
                      Key Features
                    </h3>
                    <div
                      style={{
                        display: "grid",
                        gridTemplateColumns: isMobile
                          ? "1fr"
                          : "repeat(2, 1fr)",
                        gap: "12px",
                      }}
                    >
                      {selectedProject.features.map((feature, idx) => (
                        <div
                          key={idx}
                          style={{
                            background: colors.background,
                            border: `1px solid ${colors.border}`,
                            borderRadius: "12px",
                            padding: "16px",
                          }}
                        >
                          <h4
                            style={{
                              margin: "0 0 8px",
                              color: colors.light,
                              fontSize: "0.95rem",
                              fontWeight: 700,
                            }}
                          >
                            {feature.title}
                          </h4>
                          <p
                            style={{
                              margin: 0,
                              color: colors.muted,
                              fontSize: "0.85rem",
                              lineHeight: 1.6,
                            }}
                          >
                            {feature.desc}
                          </p>
                        </div>
                      ))}
                    </div>
                  </div>
                )}

              {selectedProject.tech && selectedProject.tech.length > 0 && (
                <div>
                  <h3
                    style={{
                      margin: "0 0 12px",
                      color: colors.light,
                      fontSize: "1.1rem",
                      fontWeight: 700,
                    }}
                  >
                    Tech Stack
                  </h3>
                  <div
                    style={{
                      display: "flex",
                      flexWrap: "wrap",
                      gap: "8px",
                    }}
                  >
                    {selectedProject.tech.map((toolTag) => (
                      <span
                        key={toolTag}
                        style={{
                          borderRadius: "999px",
                          border: `1px solid ${colors.accent}`,
                          background: "transparent",
                          color: colors.accent,
                          padding: "6px 12px",
                          fontFamily: "JetBrains Mono, monospace",
                          fontSize: "0.75rem",
                          fontWeight: 600,
                          lineHeight: 1.2,
                        }}
                      >
                        {toolTag}
                      </span>
                    ))}
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      )}

      <footer
        data-reveal-id="footer"
        style={{
          ...getRevealStyle("footer"),
          position: "relative",
          zIndex: 2,
          borderTop: `1px solid ${colors.border}`,
          padding: "40px 0 48px",
          textAlign: "center",
        }}
      >
        <div style={shell}>
          <p
            style={{
              margin: 0,
              fontSize: "0.82rem",
              color: colors.muted,
              opacity: 0.7,
              letterSpacing: "0.5px",
            }}
          >
            © 2026 Muhammad Hassan Idrees. Built to perform.
          </p>
        </div>
      </footer>
    </div>
  );
}

export default App;
