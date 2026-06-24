/** @type {import('tailwindcss').Config} */

// ─────────────────────────────────────────────────────────────────────────────
// Rare Structure — design tokens (the single source of truth).
// Change a brand value HERE and it propagates everywhere. Nothing below this
// file should hardcode a hex, a font, a divider opacity, or a content width.
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

        // Text ramp — display → prose → metadata
        ink: "#ffffff", // primary display text
        body: "#cbd5e1", // body copy
        muted: "#94a3b8", // secondary / subtitles
        faint: "#64748b", // metadata / labels (dim)

        // Hairlines — three named tiers replace ~6 ad-hoc white/[0.x] opacities
        line: {
          DEFAULT: "rgba(255,255,255,0.08)", // standard rule / divider
          soft: "rgba(255,255,255,0.04)", // faintest structural edge
          strong: "rgba(255,255,255,0.20)", // emphasis / hover
        },

        // Signal — the one accent. A restrained brass for "live" states only
        // (active nav, active step, hover). Stealth-wealth: used sparingly.
        signal: {
          DEFAULT: "#b79a6b",
          dim: "rgba(183,154,107,0.4)",
        },
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
        meta: ["0.6875rem", { lineHeight: "1.4", letterSpacing: "0.18em" }],
        display: ["clamp(2.5rem, 4.6vw, 4rem)", { lineHeight: "1.08", letterSpacing: "-0.01em" }],
        "display-lg": ["clamp(3.5rem, 8vw, 6.5rem)", { lineHeight: "1.02", letterSpacing: "-0.02em" }],
      },

      // One content measure (prose column) — replaces per-section max-w soup
      maxWidth: {
        measure: "42rem", // ~70ch prose
        "measure-wide": "48rem", // two-column content blocks
      },

      // Reserved headline band — fixed slot height so body always starts at the
      // same y across tabs. Tuned against the longest corporate headline.
      minHeight: {
        headline: "10.5rem",
        "headline-lg": "9rem",
      },

      // Frame rhythm — the hang line and slot gaps, named once
      spacing: {
        "frame-top": "16rem", // canvas top offset (the hang line)
        "frame-top-md": "12rem",
        "frame-top-sm": "8rem",
      },

      transitionTimingFunction: {
        "out-quint": "cubic-bezier(0.22, 1, 0.36, 1)",
      },
    },
  },
  plugins: [],
};
