import React, { useEffect, useState, useRef } from "react";
import Header from "./components/Header";
import Footer from "./components/Footer";
import ProjectModal from "./components/ProjectModal";
import Hero from "./components/Hero";
import About from "./components/About";
import Services from "./components/Services";
import Stack from "./components/Stack";
import ProjectsList from "./components/ProjectsList";
import Reviews from "./components/Reviews";
import Contact from "./components/Contact";

// Data used across components (kept minimal but representative)
const sections = [
  { id: "home", label: "Home" },
  { id: "about", label: "About" },
  { id: "services", label: "Services" },
  { id: "stack", label: "Stack" },
  { id: "projects", label: "Projects" },
  { id: "reviews", label: "Reviews" },
  { id: "contact", label: "Contact" },
];

const services = [
  { id: "automation", title: "AI Automations", text: "Build AI workflows and integrations." },
  { id: "saas", title: "SaaS MVPs", text: "From idea to production-ready MVPs." },
  { id: "consulting", title: "Consulting", text: "Product and engineering consulting." },
];

const techStackCategories = [
  { category: "Frontend", tools: ["React", "Vite", "Tailwind"] },
  { category: "Backend", tools: ["Node", "Express", "Postgres"] },
  { category: "AI + Automation", tools: ["OpenAI", "Claude", "n8n", "Zapier"] },
];

const projects = [
  {
    id: "p1",
    name: "AI Outreach Assistant",
    type: "Automation",
    summary: "Automates lead qualification, follow-ups, and CRM updates.",
    categories: ["Automation", "B2B"],
    tech: ["OpenAI", "n8n", "HubSpot", "Postgres"],
    images: [],
  },
  {
    id: "p2",
    name: "Client Portal MVP",
    type: "SaaS",
    summary: "A responsive client portal with onboarding and billing flows.",
    categories: ["SaaS", "Web App"],
    tech: ["React", "Vite", "Supabase", "Stripe"],
    images: [],
  },
  {
    id: "p3",
    name: "Support Copilot",
    type: "AI Product",
    summary: "Internal support assistant for knowledge search and draft replies.",
    categories: ["AI", "Internal Tool"],
    tech: ["Claude", "RAG", "Node", "Postgres"],
    images: [],
  },
];

const reviews = [
  { id: "r1", person: "Client A", role: "Founder", quote: "Great work!", rating: 5 },
  { id: "r2", person: "Client B", role: "Operations Lead", quote: "Fast, clear, and reliable delivery.", rating: 5 },
];

const colors = {
  background: "#111113",
  card: "#19191d",
  cardHover: "#1e1e23",
  border: "rgba(255,255,255,0.06)",
  accent: "#e8622c",
  accentLight: "#f2854f",
  accentGlow: "rgba(232,98,44,0.15)",
  muted: "#7d7a72",
  light: "#f0ede8",
  text: "#c8c5be",
  dark: "#111113",
};

export default function App() {
  const [hoveredCard, setHoveredCard] = useState(null);
  const [activeSection, setActiveSection] = useState("home");
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [isMobile, setIsMobile] = useState(false);
  const [isTablet, setIsTablet] = useState(false);
  const [isLaptop, setIsLaptop] = useState(false);
  const [viewportWidth, setViewportWidth] = useState(typeof window !== 'undefined' ? window.innerWidth : 1200);
  const [isTouch, setIsTouch] = useState(false);
  const [mouseGlowPosition, setMouseGlowPosition] = useState({ x: 0, y: 0 });
  const [revealedSections, setRevealedSections] = useState({});
  const [indicatorStyle, setIndicatorStyle] = useState({ left: 0, width: 0 });
  const [selectedProject, setSelectedProject] = useState(null);
  const [activeImageIndex, setActiveImageIndex] = useState(0);
  const [hoveredService, setHoveredService] = useState(null);
  const [hoveredTool, setHoveredTool] = useState("");

  const navRefs = useRef({});

  useEffect(() => {
    const onResize = () => {
      const w = window.innerWidth;
      setViewportWidth(w);
      setIsMobile(w < 640);
      setIsTablet(w >= 640 && w < 1024);
      setIsLaptop(w >= 1024 && w < 1400);
    };

    const onScroll = () => {
      setScrolled(window.scrollY > 10);

      // determine active section roughly by bounding boxes
      for (const s of sections) {
        const el = document.getElementById(s.id);
        if (!el) continue;
        const rect = el.getBoundingClientRect();
        if (rect.top <= 120 && rect.bottom > 120) {
          setActiveSection(s.id);
          break;
        }
      }
    };

    onResize();
    onScroll();

    window.addEventListener("resize", onResize);
    window.addEventListener("scroll", onScroll, { passive: true });

    return () => {
      window.removeEventListener("resize", onResize);
      window.removeEventListener("scroll", onScroll);
    };
  }, []);

  useEffect(() => {
    const onPointerMove = (e) => {
      setMouseGlowPosition({ x: e.clientX, y: e.clientY });
      setIsTouch(e.pointerType === "touch");
    };

    window.addEventListener("pointermove", onPointerMove);
    return () => window.removeEventListener("pointermove", onPointerMove);
  }, []);

  useEffect(() => {
    const ids = sections.map((s) => s.id);
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const id = entry.target.getAttribute("data-reveal-id");
            if (id) setRevealedSections((p) => ({ ...p, [id]: true }));
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.12 }
    );

    ids.forEach((id) => {
      const el = document.querySelector(`[data-reveal-id="${id}"]`);
      if (el) observer.observe(el);
    });

    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    const updateIndicator = () => {
      const active = navRefs.current[activeSection];
      if (active && !isMobile) {
        setIndicatorStyle({ left: active.offsetLeft, width: active.offsetWidth });
      }
    };
    updateIndicator();
    window.addEventListener("resize", updateIndicator);
    return () => window.removeEventListener("resize", updateIndicator);
  }, [activeSection, isMobile]);

  useEffect(() => {
    const onKey = (e) => {
      if (e.key === "Escape" && selectedProject) {
        setSelectedProject(null);
        setActiveImageIndex(0);
      }
    };
    if (selectedProject) {
      document.body.style.overflow = "hidden";
      window.addEventListener("keydown", onKey);
    }
    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("keydown", onKey);
    };
  }, [selectedProject]);

  const navigateToSection = (sectionId) => (e) => {
    e.preventDefault();
    const target = document.getElementById(sectionId);
    if (target) target.scrollIntoView({ behavior: "smooth", block: "start" });
    setMobileMenuOpen(false);
  };

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

  const shell = { width: "min(1200px, calc(100% - 32px))", margin: "0 auto" };
  const cardBase = {
    background: colors.card,
    border: `1px solid ${colors.border}`,
    borderRadius: "24px",
    boxShadow: `0 0 0 1px ${colors.accentGlow}, 0 20px 60px rgba(0,0,0,0.28)`,
    transition: "transform 180ms ease, background 180ms ease, border-color 180ms ease",
  };
  const sectionStyle = { padding: "clamp(40px, 8vw, 88px) 0" };

  const navItems = sections;

  const getRevealStyle = (sectionId) => ({
    opacity: revealedSections[sectionId] ? 1 : 0,
    transform: revealedSections[sectionId] ? "translateY(0)" : "translateY(60px)",
    transition: "opacity 720ms ease, transform 720ms cubic-bezier(0.22, 1, 0.36, 1)",
  });

  return (
    <div style={page}>
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

      <Header
        shell={shell}
        colors={colors}
        scrolled={scrolled}
        isMobile={isMobile}
        mobileMenuOpen={mobileMenuOpen}
        setMobileMenuOpen={setMobileMenuOpen}
        navItems={navItems}
        activeSection={activeSection}
        navigateToSection={navigateToSection}
        navRefs={navRefs}
        indicatorStyle={indicatorStyle}
      />

      <main style={{ paddingTop: "0px", position: "relative", zIndex: 2 }} role="main">
        <a href="#home" style={{ position: "absolute", top: "-40px", left: "0" }}>
          Skip to main content
        </a>

        <Hero
          isMobile={isMobile}
          isTablet={isTablet}
          isLaptop={isLaptop}
          viewportWidth={viewportWidth}
          shell={shell}
          colors={colors}
          navigateToSection={navigateToSection}
          setHoveredCard={setHoveredCard}
        />

        <About shell={shell} colors={colors} getRevealStyle={getRevealStyle} cardBase={cardBase} isMobile={isMobile} />
        <Services shell={shell} colors={colors} services={services} getRevealStyle={getRevealStyle} isMobile={isMobile} isTablet={isTablet} isTouch={isTouch} hoveredService={hoveredService} setHoveredService={setHoveredService} cardBase={cardBase} />
        <Stack shell={shell} colors={colors} techStackCategories={techStackCategories} getRevealStyle={getRevealStyle} isMobile={isMobile} isTablet={isTablet} isTouch={isTouch} hoveredTool={hoveredTool} setHoveredTool={setHoveredTool} cardBase={cardBase} />
        <ProjectsList shell={shell} colors={colors} projects={projects} setSelectedProject={setSelectedProject} setActiveImageIndex={setActiveImageIndex} getRevealStyle={getRevealStyle} isMobile={isMobile} isTablet={isTablet} isTouch={isTouch} hoveredCard={hoveredCard} setHoveredCard={setHoveredCard} viewportWidth={viewportWidth} />
        <Reviews shell={shell} colors={colors} reviews={reviews} getRevealStyle={getRevealStyle} isMobile={isMobile} isTablet={isTablet} isTouch={isTouch} hoveredCard={hoveredCard} setHoveredCard={setHoveredCard} cardBase={cardBase} />
        <Contact shell={shell} colors={colors} getRevealStyle={getRevealStyle} isMobile={isMobile} isTouch={isTouch} sectionStyle={sectionStyle} />
      </main>

      <Footer shell={shell} colors={colors} getRevealStyle={getRevealStyle} />

      <ProjectModal
        selectedProject={selectedProject}
        setSelectedProject={setSelectedProject}
        activeImageIndex={activeImageIndex}
        setActiveImageIndex={setActiveImageIndex}
        isMobile={isMobile}
        colors={colors}
      />
    </div>
  );
}
