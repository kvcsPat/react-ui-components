import React from "react";
import useLocalStorage from "../hooks/useLocalStorage";
import Header from "../components/structure/header/Header";

export default function Layout({ children }) {
  const [theme, setTheme] = useLocalStorage("theme", "dark");

  return (
    <div className="ui-elements" data-theme={theme}>
      <Header theme={theme} setTheme={setTheme} />
      <main>{children}</main>
    </div>
  );
}
