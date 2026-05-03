import React, { useState } from "react";

export default function Header({
  shell,
  colors,
  scrolled,
  isMobile,
  mobileMenuOpen,
  setMobileMenuOpen,
  navItems,
  activeSection,
  navigateToSection,
}) {
  const [hoveredNav, setHoveredNav] = useState(null);
  const [pressedNav, setPressedNav] = useState(null);

  const handleNavClick = (sectionId) => (e) => {
    setPressedNav(sectionId);
    setTimeout(() => setPressedNav(null), 300);
    navigateToSection(sectionId)(e);
  };

  return (
    <header
      style={{
        position: "fixed",
        top: 0,
        left: 0,
        right: 0,
        zIndex: 100,
        backdropFilter: "blur(20px)",
        WebkitBackdropFilter: "blur(20px)",
        background: scrolled ? "rgba(17,17,19,0.94)" : "rgba(17,17,19,0.75)",
        borderBottom: `1px solid ${
          scrolled ? "rgba(255,255,255,0.07)" : "rgba(255,255,255,0.04)"
        }`,
        transition: "background 0.3s ease, border-color 0.3s ease",
      }}
    >
      <div
        style={{
          ...shell,
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          padding: "15px 0",
          position: "relative",
        }}
      >
        {/* Logo */}
        <a
          href="#home"
          onClick={handleNavClick("home")}
          style={{
            display: "inline-flex",
            alignItems: "baseline",
            color: colors.light,
            textDecoration: "none",
            fontWeight: 900,
            letterSpacing: "-1px",
            fontSize: "24px",
            lineHeight: 1,
            transition: "opacity 0.2s ease",
          }}
          onMouseEnter={(e) => (e.currentTarget.style.opacity = "0.8")}
          onMouseLeave={(e) => (e.currentTarget.style.opacity = "1")}
        >
          <span style={{ color: colors.accent }}>M</span>
          <span style={{ color: colors.light }}>H</span>
          <span style={{ color: colors.accent }}>I</span>
        </a>

        {/* Desktop Nav */}
        {!isMobile && (
          <nav
            role="navigation"
            aria-label="Main navigation"
            style={{
              display: "flex",
              alignItems: "center",
              gap: "4px",
            }}
          >
            {navItems.map((section) => {
              const isActive = activeSection === section.id;
              const isHovered = hoveredNav === section.id && !isActive;
              const isPressed = pressedNav === section.id;

              // Determine background and text color
              let bg = "transparent";
              let color = colors.muted;
              let scale = "scale(1)";
              let boxShadow = "none";

              if (isPressed) {
                // Click effect — filled solid orange, scale down slightly
                bg = colors.accent;
                color = "#ffffff";
                scale = "scale(0.96)";
                boxShadow = `0 0 0 3px rgba(232,98,44,0.25)`;
              } else if (isActive) {
                // Active — solid orange gradient background
                bg = `linear-gradient(135deg, ${colors.accent}, #c44d1a)`;
                color = "#ffffff";
                boxShadow = `0 2px 14px rgba(232,98,44,0.3)`;
              } else if (isHovered) {
                // Hover — subtle light background, slightly brighter text
                bg = "rgba(255,255,255,0.06)";
                color = colors.text;
              }

              return (
                <a
                  key={section.id}
                  href={`#${section.id}`}
                  onClick={handleNavClick(section.id)}
                  onMouseEnter={() => setHoveredNav(section.id)}
                  onMouseLeave={() => setHoveredNav(null)}
                  style={{
                    color,
                    textDecoration: "none",
                    fontSize: "12px",
                    fontWeight: 600,
                    letterSpacing: "0.5px",
                    textTransform: "uppercase",
                    padding: "9px 14px",
                    borderRadius: "8px",
                    background: bg,
                    boxShadow,
                    transform: scale,
                    transition: "none",
                    cursor: "pointer",
                    whiteSpace: "nowrap",
                    userSelect: "none",
                  }}
                >
                  {section.label}
                </a>
              );
            })}
          </nav>
        )}

        {/* Mobile Hamburger */}
        {isMobile && (
          <button
            type="button"
            aria-label="Toggle navigation menu"
            aria-expanded={mobileMenuOpen}
            onClick={() => setMobileMenuOpen((v) => !v)}
            style={{
              width: "44px",
              height: "44px",
              display: "inline-flex",
              alignItems: "center",
              justifyContent: "center",
              borderRadius: "12px",
              border: `1px solid ${
                mobileMenuOpen ? "rgba(232,98,44,0.3)" : colors.border
              }`,
              background: mobileMenuOpen ? colors.cardHover : colors.card,
              color: colors.light,
              cursor: "pointer",
              transition: "background 0.2s ease, border-color 0.2s ease",
            }}
          >
            <div
              style={{
                width: "18px",
                height: "14px",
                position: "relative",
                display: "flex",
                flexDirection: "column",
                justifyContent: "space-between",
              }}
            >
              <span
                style={{
                  display: "block",
                  width: "18px",
                  height: "2px",
                  background: colors.light,
                  borderRadius: "2px",
                  transform: mobileMenuOpen
                    ? "translateY(6px) rotate(45deg)"
                    : "none",
                  transition: "transform 0.3s ease",
                }}
              />
              <span
                style={{
                  display: "block",
                  width: "18px",
                  height: "2px",
                  background: colors.light,
                  borderRadius: "2px",
                  opacity: mobileMenuOpen ? 0 : 1,
                  transition: "opacity 0.3s ease",
                }}
              />
              <span
                style={{
                  display: "block",
                  width: "18px",
                  height: "2px",
                  background: colors.light,
                  borderRadius: "2px",
                  transform: mobileMenuOpen
                    ? "translateY(-6px) rotate(-45deg)"
                    : "none",
                  transition: "transform 0.3s ease",
                }}
              />
            </div>
          </button>
        )}

        {/* Mobile Dropdown */}
        {isMobile && (
          <nav
            role="navigation"
            aria-label="Mobile navigation"
            style={{
              position: "absolute",
              top: "68px",
              right: 0,
              display: "grid",
              gap: "4px",
              padding: "12px",
              minWidth: "200px",
              background: "rgba(22,22,26,0.98)",
              border: `1px solid rgba(255,255,255,0.08)`,
              borderRadius: "16px",
              boxShadow: "0 24px 60px rgba(0,0,0,0.4)",
              backdropFilter: "blur(20px)",
              WebkitBackdropFilter: "blur(20px)",
              opacity: mobileMenuOpen ? 1 : 0,
              transform: mobileMenuOpen
                ? "translateY(0) scale(1)"
                : "translateY(-10px) scale(0.97)",
              pointerEvents: mobileMenuOpen ? "all" : "none",
              transition:
                "opacity 0.25s ease, transform 0.25s cubic-bezier(0.16, 1, 0.3, 1)",
              zIndex: 200,
            }}
          >
            {navItems.map((section) => {
              const isActive = activeSection === section.id;
              return (
                <a
                  key={section.id}
                  href={`#${section.id}`}
                  onClick={(e) => {
                    handleNavClick(section.id)(e);
                    setMobileMenuOpen(false);
                  }}
                  style={{
                    display: "block",
                    padding: "12px 16px",
                    borderRadius: "10px",
                    textDecoration: "none",
                    fontSize: "13px",
                    fontWeight: 600,
                    letterSpacing: "0.4px",
                    textTransform: "uppercase",
                    color: isActive ? "#ffffff" : colors.muted,
                    background: isActive
                      ? `linear-gradient(135deg, ${colors.accent}, #c44d1a)`
                      : "transparent",
                    transition: "none",
                  }}
                  onMouseEnter={(e) => {
                    if (!isActive) {
                      e.currentTarget.style.background =
                        "rgba(255,255,255,0.05)";
                      e.currentTarget.style.color = colors.text;
                    }
                  }}
                  onMouseLeave={(e) => {
                    if (!isActive) {
                      e.currentTarget.style.background = "transparent";
                      e.currentTarget.style.color = colors.muted;
                    }
                  }}
                >
                  {section.label}
                </a>
              );
            })}
          </nav>
        )}
      </div>
    </header>
  );
}
