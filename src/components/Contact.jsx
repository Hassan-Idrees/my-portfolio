import React, { useState } from "react";

const socialLinks = [
  {
    id: "linkedin",
    label: "LinkedIn",
    href: "https://www.linkedin.com/in/mhassanidrees/",
    icon: "💼",
  },
  {
    id: "upwork",
    label: "Upwork",
    href: "https://www.upwork.com/freelancers/mhassanidrees?mp_source=share",
    icon: "🟢",
  },
  {
    id: "email",
    label: "mhassanidrees575@gmail.com",
    href: "mailto:mhassanidrees575@gmail.com",
    icon: "✉️",
  },
];

const highlights = [
  { icon: "⚡", label: "Response Time", value: "< 24 Hours" },
  { icon: "🌍", label: "Timezone", value: "EST (UTC-5)" },
  { icon: "📅", label: "Availability", value: "Open to Projects" },
];

export default function Contact({
  sectionStyle,
  getRevealStyle,
  isMobile,
  isTablet,
  colors,
  shell,
  isTouch,
}) {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    budget: "",
    message: "",
  });
  const [status, setStatus] = useState("idle"); // idle | sending | success | error
  const [focusedField, setFocusedField] = useState(null);

  const handleChange = (e) => {
    setFormData((p) => ({ ...p, [e.target.name]: e.target.value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus("sending");
    try {
      const res = await fetch("https://formspree.io/f/YOUR_FORM_ID", {
        method: "POST",
        headers: { "Content-Type": "application/json", Accept: "application/json" },
        body: JSON.stringify({
          name: formData.name,
          email: formData.email,
          budget: formData.budget,
          message: formData.message,
        }),
      });
      if (res.ok) {
        setStatus("success");
        setFormData({ name: "", email: "", budget: "", message: "" });
      } else {
        setStatus("error");
      }
    } catch {
      setStatus("error");
    }
  };

  const inputStyle = (field) => ({
    width: "100%",
    background: focusedField === field ? "rgba(232,98,44,0.04)" : "rgba(255,255,255,0.02)",
    border: `1px solid ${focusedField === field ? colors.accent : "rgba(255,255,255,0.08)"}`,
    borderRadius: "12px",
    padding: "13px 16px",
    fontSize: "0.9rem",
    color: colors.light,
    outline: "none",
    transition: "border-color 200ms ease, background 200ms ease",
    boxSizing: "border-box",
    fontFamily: "Inter, sans-serif",
  });

  const labelStyle = {
    display: "block",
    fontSize: "11px",
    fontWeight: 700,
    color: colors.muted,
    textTransform: "uppercase",
    letterSpacing: "1.2px",
    marginBottom: "8px",
  };

  return (
    <section
      id="contact"
      data-reveal-id="contact"
      style={{
        ...getRevealStyle("contact"),
        scrollMarginTop: "120px",
        padding: isMobile ? "48px 0 64px" : "80px 0 96px",
      }}
    >
      <div style={shell}>
        {/* Section Label */}
        <div style={{ display: "inline-flex", alignItems: "center", gap: "12px", marginBottom: "16px" }}>
          <span style={{ width: "36px", height: "2px", borderRadius: "999px", background: colors.accent, display: "inline-block" }} />
          <span style={{ color: colors.accent, textTransform: "uppercase", letterSpacing: "4px", fontSize: "12px", fontWeight: 700 }}>
            Contact
          </span>
        </div>

        {/* Section Title */}
        <h2 style={{ margin: "0 0 12px", fontSize: isMobile ? "1.9rem" : "clamp(2rem, 4vw, 3rem)", fontWeight: 800, letterSpacing: "-1px", lineHeight: 1.1, color: colors.light }}>
          Let's Build Something{" "}
          <span style={{ backgroundImage: `linear-gradient(90deg, ${colors.accent}, ${colors.accentLight})`, WebkitBackgroundClip: "text", backgroundClip: "text", color: "transparent" }}>
            Powerful
          </span>
        </h2>

        {/* Subtitle */}
        <p style={{ margin: "0 0 48px", color: colors.muted, fontSize: "0.95rem", lineHeight: 1.7, maxWidth: "540px" }}>
          Whether you're a founder validating an idea, an agency needing a white-label solution, or a business ready to automate — I'm ready to deliver.
        </p>

        {/* Split layout */}
        <div style={{ display: "flex", flexDirection: isMobile ? "column" : "row", gap: "24px", alignItems: "flex-start" }}>

          {/* LEFT — Contact Form */}
          <div style={{ flex: "1 1 58%", background: colors.card, border: `1px solid rgba(255,255,255,0.07)`, borderRadius: "24px", padding: isMobile ? "24px 20px" : "36px 36px", position: "relative", overflow: "hidden" }}>
            {/* Top accent line */}
            <div style={{ position: "absolute", top: 0, left: 0, right: 0, height: "2px", background: `linear-gradient(90deg, transparent, ${colors.accent}, transparent)` }} />

            <h3 style={{ margin: "0 0 6px", fontSize: "1.15rem", fontWeight: 700, color: colors.light }}>
              Send a Message
            </h3>
            <p style={{ margin: "0 0 28px", fontSize: "0.82rem", color: colors.muted, lineHeight: 1.6 }}>
              I'll respond within 24 hours. Tell me about your project and let's get started.
            </p>

            {/* Success state */}
            {status === "success" ? (
              <div style={{ textAlign: "center", padding: "48px 24px" }}>
                <div style={{ fontSize: "48px", marginBottom: "16px" }}>✅</div>
                <h4 style={{ margin: "0 0 8px", color: colors.light, fontSize: "1.1rem", fontWeight: 700 }}>Message Sent!</h4>
                <p style={{ margin: 0, color: colors.muted, fontSize: "0.9rem" }}>
                  Thanks for reaching out. I'll get back to you within 24 hours.
                </p>
                <button
                  onClick={() => setStatus("idle")}
                  style={{ marginTop: "24px", background: "transparent", border: `1px solid ${colors.border}`, color: colors.muted, padding: "10px 24px", borderRadius: "999px", cursor: "pointer", fontSize: "0.82rem", fontFamily: "Inter, sans-serif" }}
                >
                  Send another message
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} style={{ display: "flex", flexDirection: "column", gap: "18px" }}>
                {/* Name + Email row */}
                <div style={{ display: "grid", gridTemplateColumns: isMobile ? "1fr" : "1fr 1fr", gap: "14px" }}>
                  <div>
                    <label style={labelStyle} htmlFor="contact-name">Your Name</label>
                    <input
                      id="contact-name"
                      name="name"
                      type="text"
                      required
                      placeholder="Muhammad Hassan"
                      value={formData.name}
                      onChange={handleChange}
                      onFocus={() => setFocusedField("name")}
                      onBlur={() => setFocusedField(null)}
                      style={inputStyle("name")}
                    />
                  </div>
                  <div>
                    <label style={labelStyle} htmlFor="contact-email">Email Address</label>
                    <input
                      id="contact-email"
                      name="email"
                      type="email"
                      required
                      placeholder="you@company.com"
                      value={formData.email}
                      onChange={handleChange}
                      onFocus={() => setFocusedField("email")}
                      onBlur={() => setFocusedField(null)}
                      style={inputStyle("email")}
                    />
                  </div>
                </div>

                {/* Budget */}
                <div>
                  <label style={labelStyle} htmlFor="contact-budget">Project Budget</label>
                  <select
                    id="contact-budget"
                    name="budget"
                    value={formData.budget}
                    onChange={handleChange}
                    onFocus={() => setFocusedField("budget")}
                    onBlur={() => setFocusedField(null)}
                    style={{ ...inputStyle("budget"), cursor: "pointer", appearance: "none", WebkitAppearance: "none" }}
                  >
                    <option value="" style={{ background: "#19191d" }}>Select a budget range</option>
                    <option value="< $500" style={{ background: "#19191d" }}>Less than $500</option>
                    <option value="$500 - $1,500" style={{ background: "#19191d" }}>$500 – $1,500</option>
                    <option value="$1,500 - $5,000" style={{ background: "#19191d" }}>$1,500 – $5,000</option>
                    <option value="$5,000 - $10,000" style={{ background: "#19191d" }}>$5,000 – $10,000</option>
                    <option value="$10,000+" style={{ background: "#19191d" }}>$10,000+</option>
                    <option value="Not sure" style={{ background: "#19191d" }}>Not sure yet</option>
                  </select>
                </div>

                {/* Message */}
                <div>
                  <label style={labelStyle} htmlFor="contact-message">Project Details</label>
                  <textarea
                    id="contact-message"
                    name="message"
                    required
                    rows={5}
                    placeholder="Tell me about your project, goals, and timeline..."
                    value={formData.message}
                    onChange={handleChange}
                    onFocus={() => setFocusedField("message")}
                    onBlur={() => setFocusedField(null)}
                    style={{ ...inputStyle("message"), resize: "vertical", minHeight: "120px" }}
                  />
                </div>

                {/* Submit */}
                <button
                  type="submit"
                  disabled={status === "sending"}
                  style={{
                    width: "100%",
                    padding: "14px 28px",
                    borderRadius: "12px",
                    border: "none",
                    background: status === "sending"
                      ? "rgba(232,98,44,0.5)"
                      : `linear-gradient(135deg, ${colors.accent}, #c44d1a)`,
                    color: "#ffffff",
                    fontSize: "0.92rem",
                    fontWeight: 700,
                    cursor: status === "sending" ? "not-allowed" : "pointer",
                    fontFamily: "Inter, sans-serif",
                    letterSpacing: "0.3px",
                    boxShadow: status === "sending" ? "none" : `0 4px 20px rgba(232,98,44,0.3)`,
                    transition: "all 200ms ease",
                  }}
                  onMouseEnter={(e) => {
                    if (!isTouch && status !== "sending") {
                      e.currentTarget.style.boxShadow = `0 6px 28px rgba(232,98,44,0.45)`;
                      e.currentTarget.style.transform = "translateY(-1px)";
                    }
                  }}
                  onMouseLeave={(e) => {
                    if (!isTouch) {
                      e.currentTarget.style.boxShadow = `0 4px 20px rgba(232,98,44,0.3)`;
                      e.currentTarget.style.transform = "translateY(0)";
                    }
                  }}
                >
                  {status === "sending" ? "Sending..." : "Send Message →"}
                </button>

                {/* Error message */}
                {status === "error" && (
                  <p style={{ margin: 0, fontSize: "0.82rem", color: "#f87171", textAlign: "center" }}>
                    Something went wrong. Please email me directly at{" "}
                    <a href="mailto:mhassanidrees575@gmail.com" style={{ color: colors.accent }}>
                      mhassanidrees575@gmail.com
                    </a>
                  </p>
                )}
              </form>
            )}
          </div>

          {/* RIGHT — Info */}
          <div style={{ flex: "1 1 38%", display: "flex", flexDirection: "column", gap: "16px" }}>
            {/* Available badge */}
            <div style={{ display: "inline-flex", alignItems: "center", gap: "8px", background: "rgba(34,197,94,0.08)", border: "1px solid rgba(34,197,94,0.2)", borderRadius: "999px", padding: "8px 18px", alignSelf: "flex-start" }}>
              <span style={{ width: "7px", height: "7px", borderRadius: "50%", background: "#22c55e", boxShadow: "0 0 8px rgba(34,197,94,0.5)", animation: "dotPulse 1.8s ease-in-out infinite", flexShrink: 0 }} />
              <span style={{ fontSize: "12px", fontWeight: 600, color: "#22c55e" }}>Available for new projects</span>
            </div>

            {/* Highlight cards */}
            {highlights.map((h) => (
              <div key={h.label} style={{ display: "flex", alignItems: "center", gap: "14px", padding: "14px 18px", background: colors.card, border: `1px solid rgba(255,255,255,0.06)`, borderRadius: "14px", transition: "border-color 200ms ease" }}
                onMouseEnter={(e) => { if (!isTouch) e.currentTarget.style.borderColor = "rgba(232,98,44,0.2)"; }}
                onMouseLeave={(e) => { if (!isTouch) e.currentTarget.style.borderColor = "rgba(255,255,255,0.06)"; }}
              >
                <span style={{ fontSize: "20px", flexShrink: 0 }}>{h.icon}</span>
                <div>
                  <p style={{ margin: 0, fontSize: "10px", fontWeight: 700, color: colors.muted, textTransform: "uppercase", letterSpacing: "1.5px" }}>{h.label}</p>
                  <p style={{ margin: "3px 0 0", fontSize: "0.88rem", fontWeight: 600, color: colors.light }}>{h.value}</p>
                </div>
              </div>
            ))}

            {/* Divider */}
            <div style={{ height: "1px", background: "rgba(255,255,255,0.06)", margin: "4px 0" }} />

            {/* Social links */}
            <p style={{ margin: 0, fontSize: "11px", fontWeight: 700, color: colors.muted, textTransform: "uppercase", letterSpacing: "1.5px" }}>
              Also find me on
            </p>
            {socialLinks.map((link) => (
              <a key={link.id} href={link.href} target={link.id !== "email" ? "_blank" : undefined} rel="noopener noreferrer"
                style={{ display: "flex", alignItems: "center", gap: "12px", padding: "13px 18px", background: colors.card, border: `1px solid rgba(255,255,255,0.06)`, borderRadius: "14px", textDecoration: "none", transition: "all 200ms ease" }}
                onMouseEnter={(e) => { if (!isTouch) { e.currentTarget.style.borderColor = colors.accent; e.currentTarget.style.background = "rgba(232,98,44,0.04)"; } }}
                onMouseLeave={(e) => { if (!isTouch) { e.currentTarget.style.borderColor = "rgba(255,255,255,0.06)"; e.currentTarget.style.background = colors.card; } }}
              >
                <span style={{ fontSize: "18px", flexShrink: 0 }}>{link.icon}</span>
                <span style={{ fontSize: "0.85rem", fontWeight: 600, color: colors.text, overflow: "hidden", textOverflow: "ellipsis", whiteSpace: "nowrap" }}>{link.label}</span>
                <span style={{ marginLeft: "auto", color: colors.muted, fontSize: "12px", flexShrink: 0 }}>→</span>
              </a>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
