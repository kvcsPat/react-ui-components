import React from "react";
import "./Header.css";

export default function Header({ theme, setTheme }) {
  function handleToggleTheme() {
    setTheme(theme === "dark" ? "light" : "dark");
  }

  return (
    <header className="header">
      <h1 className="header-title">UI Components</h1>
      <div className="theme-btn-border" onClick={handleToggleTheme}>
        {theme === "dark" ? (
          <span className="material-icons-round dark theme-btn">dark_mode</span>
        ) : (
          <span className="material-icons-round light theme-btn">
            light_mode
          </span>
        )}
      </div>
    </header>
  );
}
