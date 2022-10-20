module.exports = {
  mode: "jit",
  darkMode: "class",
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      backgroundImage: {
        "four-oh-four": "url('/404.png')",
        fairground: "url('/fairground-bg.png')",
        "experiment-on-fairground": "url('/experiment-on-fairground.svg')",
        buildersClubHero: "url('/builders-club-hero-background.jpg')",
        buildersClubFooter: "url('/builders-club-footer-background.jpg')",
        buildersClubFooterLight:
          "url('/builders-club-footer-background-light.jpg')",
      },
      opacity: {
        15: ".15",
      },
      colors: {
        "vega-off-black": "#252525",
        "vega-lightest-grey": "#EDEDED",
        "vega-light-grey": "#F2F2F2",
        "vega-grey": "#C0C0C0",
        "vega-mid-grey": "#828282",
        "vega-border-grey": "#4f4f4f",
        "vega-box-grey": "#161616",
        "vega-yellow": "#DFFF0B",
        "vega-mint": "#00F780",
        "vega-pink": "#FF077F",
        "vega-purple": "#633DFF",
        "vega-text-muted": "#BFCCD6",
        "vega-border-muted": "#696969",
      },
      scale: {
        185: "1.85",
      },
      typography: (theme) => ({
        gray: {
          css: {
            "--tw-prose-body": theme("colors.vega-mid-grey"),
            "--tw-prose-headings": theme("colors.vega-mid-grey"),
            "--tw-prose-lead": theme("colors.vega-mid-grey"),
            "--tw-prose-links": theme("colors.vega-mid-grey"),
            "--tw-prose-bold": theme("colors.vega-mid-grey"),
            "--tw-prose-counters": theme("colors.vega-mid-grey"),
            "--tw-prose-bullets": theme("colors.vega-mid-grey"),
            "--tw-prose-hr": theme("colors.vega-mid-grey"),
            "--tw-prose-quotes": theme("colors.vega-mid-grey"),
            "--tw-prose-quote-borders": theme("colors.vega-mid-grey"),
            "--tw-prose-captions": theme("colors.vega-mid-grey"),
            "--tw-prose-code": theme("colors.vega-mid-grey"),
            "--tw-prose-pre-code": theme("colors.vega-mid-grey"),
            "--tw-prose-pre-bg": theme("colors.vega-mid-grey"),
            "--tw-prose-th-borders": theme("colors.vega-mid-grey"),
            "--tw-prose-td-borders": theme("colors.vega-mid-grey"),
            "--tw-prose-invert-body": theme("colors.vega-grey"),
            "--tw-prose-invert-headings": theme("colors.vega-grey"),
            "--tw-prose-invert-lead": theme("colors.vega-grey"),
            "--tw-prose-invert-links": theme("colors.vega-grey"),
            "--tw-prose-invert-bold": theme("colors.vega-grey"),
            "--tw-prose-invert-counters": theme("colors.vega-grey"),
            "--tw-prose-invert-bullets": theme("colors.vega-grey"),
            "--tw-prose-invert-hr": theme("colors.vega-grey"),
            "--tw-prose-invert-quotes": theme("colors.vega-grey"),
            "--tw-prose-invert-quote-borders": theme("colors.vega-grey"),
            "--tw-prose-invert-captions": theme("colors.vega-grey"),
            "--tw-prose-invert-code": theme("colors.vega-grey"),
            "--tw-prose-invert-pre-code": theme("colors.vega-grey"),
            "--tw-prose-invert-pre-bg": theme("colors.vega-grey"),
            "--tw-prose-invert-th-borders": theme("colors.vega-grey"),
            "--tw-prose-invert-td-borders": theme("colors.vega-grey"),
            lineHeight: "1.4",

            p: {
              lineHeight: "1.4",
            },
            a: {
              "&:hover": {
                color: "#FF077F !important",
              },
            },
            li: {
              lineHeight: "1.4",
            },
            h2: {
              textTransform: "uppercase",
              borderTop: "solid 1px currentColor",
              paddingTop: "0.4rem",
              marginTop: "2rem",
              marginBottom: "0.75rem",
              lineHeight: "1",
            },
          },
        },
      }),
      keyframes: {
        "fairground-marquee": {
          from: { backgroundPositionX: 0 },
          to: { backgroundPositionX: "-1326px" },
        },
        blink: {
          to: { visibility: "hidden" },
        },
      },
      animation: {
        "fairground-marquee": "fairground-marquee 10s linear infinite",
        blink: "blink 1.5s steps(2, start) infinite",
      },
    },
  },
  plugins: [
    require("@tailwindcss/aspect-ratio"),
    require("@tailwindcss/typography"),
    require("tailwindcss-hyphens"),
    require("@tailwindcss/line-clamp"),
  ],
};
