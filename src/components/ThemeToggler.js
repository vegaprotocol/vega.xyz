import React from "react";
import { ThemeToggler } from "gatsby-plugin-dark-mode";

export default function ThemeToggle() {
  return (
    <ThemeToggler>
      {({ theme, toggleTheme }) => (
        <div>
          <label>
            <input
              type="checkbox"
              onChange={(e) => toggleTheme(e.target.checked ? "dark" : "light")}
              checked={theme === "dark"}
            />{" "}
            Dark mode
          </label>
        </div>
      )}
    </ThemeToggler>
  );
}
