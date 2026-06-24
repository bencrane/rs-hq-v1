/** @type {import('tailwindcss').Config} */

// ─────────────────────────────────────────────────────────────────────────────
// Rare Structure — design tokens (the single source of truth).
// Change a brand value HERE and it propagates everywhere. Nothing below this
// file should hardcode a hex, a font, a divider opacity, or a content width.
// (Webfont *loading* also lives in index.html's Google Fonts link — keep the
//  family names there in sync with fontFamily below.)
//
// Two type voices encode the positioning:
//   serif (Cormorant Garamond) → the display / "wealth" voice
//   mono  (IBM Plex Mono)      → the label / "data terminal" voice
//   sans  (Inter)              → the neutral prose substrate
// ─────────────────────────────────────────────────────────────────────────────

export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        // Surfaces — the dark field, semantic not literal
        canvas: "#040a18", // page background
        sunken: "#030814", // recessed surface (footer)

        // Text ramp — display → prose → metadata. faint clears WCAG AA (4.7:1)
        // on canvas; it is the resting color of nav/pager controls.
        ink: "#ffffff", // primary display text
        body: "#cbd5e1", // body copy
        muted: "#94a3b8", // secondary / subtitles
        faint: "#717f95", // metadata / labels (dim, AA-compliant)

        // Hairlines — three named tiers replace ~6 ad-hoc white/[0.x] opacities
        line: {
          DEFAULT: "rgba(255,255,255,0.08)", // standard rule / divider
          soft: "rgba(255,255,255,0.04)", // faintest structural edge
          strong: "rgba(255,255,255,0.20)", // emphasis / hover
        },

        // Signal — the one accent. A restrained brass for "live" states only
        // (active nav, hover). Stealth-wealth: used sparingly.
        signal: "#b79a6b",
      },

      fontFamily: {
        serif: ["'Cormorant Garamond'", "serif"],
        mono: ["'IBM Plex Mono'", "ui-monospace", "monospace"],
        sans: ["Inter", "system-ui", "sans-serif"],
      },

      // Fluid display scale — ONE size for all corporate heroes (auto-consistent
      // across breakpoints, no 4xl/6xl/8xl jumps), plus a larger vehicle tier.
      fontSize: {
        eyebrow: ["0.625rem", { lineHeight: "1", letterSpacing: "0.2em" }],
        display: ["clamp(2.5rem, 4vw, 3.5rem)", { lineHeight: "1.1", letterSpacing: "-0.01em" }],
        "display-lg": ["clamp(3.25rem, 7vw, 5.5rem)", { lineHeight: "1.04", letterSpacing: "-0.02em" }],
      },

      // Content measures — one prose column, one wide (two-up), one narrow (contact)
      maxWidth: {
        measure: "42rem", // ~70ch prose
        "measure-wide": "48rem", // two-column content blocks
        "measure-narrow": "28rem", // contact / short forms
      },

      // Reserved headline bands — fixed slot heights so the content slot starts
      // at the same y across tabs. Named by ROLE (the vehicle band is shorter
      // because the dossier name is one line; the section band fits 3 lines).
      minHeight: {
        "section-band": "11.5rem",
        "vehicle-band": "9rem",
      },

      // Frame rhythm — the hang line, named once
      spacing: {
        "frame-top": "16rem",
        "frame-top-md": "12rem",
        "frame-top-sm": "8rem",
      },

      // Chrome shadow — keep the one drop-shadow off the literal color plane
      boxShadow: {
        nav: "4px 0 24px rgba(0,0,0,0.2)",
      },
    },
  },
  plugins: [],
};
