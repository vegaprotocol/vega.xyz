module.exports = {
  mode: "jit",
  darkMode: "class",
  purge: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        "vega-off-black": "#252525",
        "vega-light-grey": "#F2F2F2",
        "vega-mid-grey": "#828282",
        "vega-border-grey": "#4f4f4f",
        "vega-box-grey": "#161616",
        "vega-yellow": "#DFFF0B",
        "vega-mint": "#00F780",
      },
    },
  },
  variants: {},
  plugins: [],
};
