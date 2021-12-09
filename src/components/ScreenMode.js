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
    return (
      <button
        aria-label="Switch theme color"
        className="cursor-pointer"
        onClick={() => {
          this.toggleTheme();
        }}
      >
        <ScreenModeIcon icon={this.state.theme}></ScreenModeIcon>
      </button>
    );
  }
}

export default ScreenMode;
