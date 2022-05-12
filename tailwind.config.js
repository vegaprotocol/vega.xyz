module.exports = {
  mode: "jit",
  darkMode: "class",
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      backgroundImage: {
        "four-oh-four": "url('/404.png')",
      },
      opacity: {
        15: ".15",
      },
      colors: {
        "vega-off-black": "#252525",
        "vega-light-grey": "#F2F2F2",
        "vega-grey": "#C0C0C0",
        "vega-mid-grey": "#828282",
        "vega-border-grey": "#4f4f4f",
        "vega-box-grey": "#161616",
        "vega-yellow": "#DFFF0B",
        "vega-mint": "#00F780",
        "vega-pink": "#FF077F",
      },
      typography: {
        DEFAULT: {
          css: {
            lineHeight: "1.4",

            p: {
              color: "#828282",
              lineHeight: "1.4",
            },
            a: {
              color: "#828282",
              "&:hover": {
                color: "#FF077F !important",
              },
            },
            li: {
              color: "#828282",
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
        dark: {
          css: {
            color: "#C0C0C0",

            p: {
              color: "#C0C0C0",
            },

            a: {
              color: "#C0C0C0",
              "&:hover": {
                color: "#C0C0C0",
              },
            },
          },
        },
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
