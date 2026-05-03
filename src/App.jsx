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
import "./styles.css";

const sections = [
  { id: "home", label: "Home" },
  { id: "about", label: "About" },
  { id: "services", label: "Services" },
  { id: "stack", label: "Stack" },
  { id: "projects", label: "Projects" },
  { id: "reviews", label: "Reviews" },
  { id: "contact", label: "Contact" },
];

const projects = [
  {
    id: "p1",
    name: "AI Outreach Assistant",
    type: "Automation",
    summary: "Automates lead qualification, follow-ups, and CRM updates using AI-powered n8n workflows integrated with HubSpot.",
    categories: ["Automation", "B2B"],
    tech: ["OpenAI", "n8n", "HubSpot", "PostgreSQL"],
    images: [],
  },
  {
    id: "p2",
    name: "Client Portal MVP",
    type: "SaaS",
    summary: "A responsive client portal with onboarding flows, billing management, and real-time project tracking.",
    categories: ["SaaS", "Web App"],
    tech: ["React", "Vite", "Supabase", "Stripe"],
    images: [],
  },
  {
    id: "p3",
    name: "Support Copilot",
    type: "AI Product",
    summary: "Internal AI support assistant with RAG-powered knowledge search and automated draft replies using Claude.",
    categories: ["AI", "Internal Tool"],
    tech: ["Claude API", "RAG", "Node.js", "PostgreSQL"],
    images: [],
  },
];

const reviews = [
  {
    id: "r1",
    person: "Sarah M.",
    role: "Startup Founder",
    quote: "Delivered our MVP in just one week. The quality was production-ready from day one. Absolutely exceeded expectations.",
    rating: 5,
  },
  {
    id: "r2",
    person: "James K.",
    role: "Agency Owner",
    quote: "The AI automation workflows he built saved us 20+ hours per week. Best investment we've made this year.",
    rating: 5,
  },
  {
    id: "r3",
    person: "Lisa R.",
    role: "Product Manager",
    quote: "Professional, fast, and proactive. He didn't just build what we asked — he suggested improvements we hadn't thought of.",
    rating: 5,
  },
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
  const [viewportWidth, setViewportWidth] = useState(
    typeof window !== "undefined" ? window.innerWidth : 1200
  );
  const [isTouch, setIsTouch] = useState(false);
  const [mouseGlowPosition, setMouseGlowPosition] = useState({ x: 0, y: 0 });
  const [revealedSections, setRevealedSections] = useState({});
  const [selectedProject, setSelectedProject] = useState(null);
  const [activeImageIndex, setActiveImageIndex] = useState(0);
  const [hoveredService, setHoveredService] = useState(null);
  const [hoveredTool, setHoveredTool] = useState("");
  const programmaticSectionRef = useRef(null);

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
      if (programmaticSectionRef.current) {
        const target = document.getElementById(programmaticSectionRef.current);
        if (!target) return;

        const rect = target.getBoundingClientRect();
        if (rect.top <= 120 && rect.bottom > 120) {
          setActiveSection(programmaticSectionRef.current);
          programmaticSectionRef.current = null;
        }
        return;
      }
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
      { threshold: 0.12, rootMargin: "50px" }
    );

    ids.forEach((id) => {
      const el = document.querySelector(`[data-reveal-id="${id}"]`);
      if (el) observer.observe(el);
    });

    return () => observer.disconnect();
  }, []);

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
    programmaticSectionRef.current = sectionId;
    setActiveSection(sectionId);
    const target = document.getElementById(sectionId);
    if (target) target.scrollIntoView({ behavior: "smooth", block: "start" });
    setMobileMenuOpen(false);
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

  const getRevealStyle = (sectionId) => ({
    opacity: revealedSections[sectionId] ? 1 : 0,
    transform: revealedSections[sectionId] ? "translateY(0)" : "translateY(60px)",
    transition: "opacity 720ms ease, transform 720ms cubic-bezier(0.22, 1, 0.36, 1)",
  });

  return (
    <div
      style={{
        width: "100%",
        minHeight: "100vh",
        background: colors.background,
        color: colors.text,
        fontFamily: "Inter, sans-serif",
        position: "relative",
        margin: 0,
        padding: 0,
      }}
    >
      {/* Mouse glow effect */}
      <div
        aria-hidden="true"
        style={{
          position: "fixed",
          inset: 0,
          pointerEvents: "none",
          zIndex: 1,
          background: `radial-gradient(360px circle at ${mouseGlowPosition.x}px ${mouseGlowPosition.y}px, rgba(232,98,44,0.1), transparent 72%)`,
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
        navItems={sections}
        activeSection={activeSection}
        setActiveSection={setActiveSection}
        navigateToSection={navigateToSection}
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

        <About
          shell={shell}
          colors={colors}
          getRevealStyle={getRevealStyle}
          cardBase={cardBase}
          isMobile={isMobile}
        />

        <Services
          shell={shell}
          colors={colors}
          getRevealStyle={getRevealStyle}
          isMobile={isMobile}
          isTablet={isTablet}
          isTouch={isTouch}
          hoveredService={hoveredService}
          setHoveredService={setHoveredService}
        />

        <Stack
          shell={shell}
          colors={colors}
          getRevealStyle={getRevealStyle}
          isMobile={isMobile}
          isTablet={isTablet}
          isTouch={isTouch}
          hoveredTool={hoveredTool}
          setHoveredTool={setHoveredTool}
        />

        <ProjectsList
          shell={shell}
          colors={colors}
          projects={projects}
          setSelectedProject={setSelectedProject}
          setActiveImageIndex={setActiveImageIndex}
          getRevealStyle={getRevealStyle}
          isMobile={isMobile}
          isTablet={isTablet}
          isTouch={isTouch}
          hoveredCard={hoveredCard}
          setHoveredCard={setHoveredCard}
          viewportWidth={viewportWidth}
        />

        <Reviews
          shell={shell}
          colors={colors}
          reviews={reviews}
          getRevealStyle={getRevealStyle}
          isMobile={isMobile}
          isTablet={isTablet}
          isTouch={isTouch}
          hoveredCard={hoveredCard}
          setHoveredCard={setHoveredCard}
          cardBase={cardBase}
        />

        <Contact
          shell={shell}
          colors={colors}
          getRevealStyle={getRevealStyle}
          isMobile={isMobile}
          isTouch={isTouch}
          sectionStyle={sectionStyle}
        />
      </main>

      <Footer
        shell={shell}
        colors={colors}
        getRevealStyle={getRevealStyle}
      />

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
