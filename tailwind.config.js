module.exports = {
  mode: "jit",
  darkMode: "class",
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    listStyleType: {
      none: "none",
      disc: "disc",
      decimal: "decimal",
      square: "square",
    },
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
        "vega-white": "#FFFFFF",
        "vega-black": "#000000",
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
        "vega-dark-100": "#161616",
        "vega-dark-200": "#404040",
        "vega-dark-300": "#8b8b8b",
        "vega-dark-400": "#C0C0C0",
        "vega-light-100": "#F0F0F0",
        "vega-light-200": "#D2D2D2",
        "vega-light-300": "#A7A7A7",
        "vega-light-400": "#626262",
      },
      scale: {
        185: "1.85",
      },
      typography: (theme) => ({
        DEFAULT: {
          css: {
            "--tw-prose-bullets": theme("colors.vega-black"),
            "--tw-prose-invert-bullets": theme("colors.vega-white"),
          },
        },
      }),
      keyframes: {
        "fairground-marquee": {
          from: { backgroundPositionX: 0 },
          to: { backgroundPositionX: "-1326px" },
        },
      },
      animation: {
        "fairground-marquee": "fairground-marquee 10s linear infinite;",
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
