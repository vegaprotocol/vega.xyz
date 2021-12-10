import React from "react";
import ScreenModeIcon from "./ScreenModeIcon";

class ScreenMode extends React.Component {
  state = {
    theme: typeof window !== "undefined" ? window.__theme : null,
  };

  componentDidMount() {
    window.__onThemeChange = () => {
      this.setState({ theme: window.__theme });
    };
  }

  toggleTheme() {
    window.__setPreferredTheme(this.state.theme === "dark" ? "light" : "dark");
  }

  render() {
    console.log(this.state.theme);
    return (
      <button
        aria-label="Switch theme color"
        className="hover:bg-vega-light-grey dark:hover:bg-vega-off-black rounded-full cursor-pointer"
        onClick={() => {
          this.toggleTheme();
        }}
      >
        <svg width="45" height="45">
          <ScreenModeIcon icon={this.state.theme}></ScreenModeIcon>
        </svg>
      </button>
    );
  }
}

export default ScreenMode;
