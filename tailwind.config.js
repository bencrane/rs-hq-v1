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

      // Fluid display scale — ONE size for every headline on every view (tabs and
      // the dossier alike). The 3.5rem cap is load-bearing: it is the largest size
      // that keeps the longest headline (Structure, 80 chars) at 3 lines inside the
      // reserved band, so content stays pinned. No second/"vehicle" tier exists.
      fontSize: {
        eyebrow: ["0.625rem", { lineHeight: "1", letterSpacing: "0.2em" }],
        display: ["clamp(2.5rem, 4vw, 3.5rem)", { lineHeight: "1.1", letterSpacing: "-0.01em" }],
      },

      // Content measures — one prose column, one wide (two-up), one narrow (contact)
      maxWidth: {
        measure: "42rem", // ~70ch prose
        "measure-wide": "48rem", // two-column content blocks
        "measure-narrow": "28rem", // contact / short forms
      },

      // Reserved headline band — ONE fixed slot height for every view, so the
      // content slot begins at the same y everywhere. Fits the longest headline
      // (Structure, 3 lines) with slack; absorbs the dossier name + role sub-label.
      minHeight: {
        "headline-band": "11.5rem",
      },

      // Sidebar — a deliberate fixed width, not a loose fraction.
      width: {
        sidebar: "17rem",
      },
      margin: {
        sidebar: "17rem",
      },

      // Chrome shadow — keep the one drop-shadow off the literal color plane
      boxShadow: {
        nav: "4px 0 24px rgba(0,0,0,0.2)",
      },
    },
  },
  plugins: [],
};
