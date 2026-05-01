import React from "react";

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
  navRefs,
  indicatorStyle,
}) {
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

  return (
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
            <span style={{ display: "grid", gap: "4px" }}>
              <span style={{ width: "18px", height: "2px", background: colors.light, borderRadius: "2px" }} />
              <span style={{ width: "18px", height: "2px", background: colors.light, borderRadius: "2px" }} />
              <span style={{ width: "18px", height: "2px", background: colors.light, borderRadius: "2px" }} />
            </span>
          </button>
        ) : (
          <nav role="navigation" aria-label="Main navigation" style={{ display: "flex", flexWrap: "wrap", gap: "8px", position: "relative" }}>
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
                  style={{ ...(navLink || {}), ...(isActive ? navLinkActive : null) }}
                >
                  {section.label}
                </a>
              );
            })}
          </nav>
        )}

        {isMobile && mobileMenuOpen ? (
          <nav role="navigation" aria-label="Mobile navigation" style={{ position: "absolute", top: "68px", right: "0", display: "grid", gap: "8px", padding: "14px", minWidth: "220px", background: "rgba(25,25,29,0.98)", border: `1px solid ${colors.border}`, borderRadius: "18px", boxShadow: `0 24px 60px rgba(0,0,0,0.35)` }}>
            {navItems.map((section) => {
              const isActive = activeSection === section.id;

              return (
                <a key={section.id} href={`#${section.id}`} onClick={navigateToSection(section.id)} style={{ ...navLink, display: "block", ...(isActive ? navLinkActive : null) }}>
                  {section.label}
                </a>
              );
            })}
          </nav>
        ) : null}
      </div>
    </header>
  );
}
