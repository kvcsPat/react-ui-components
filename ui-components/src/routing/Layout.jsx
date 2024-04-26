import React from "react";
import Header from "../components/header/Header";

export default function Layout({ children }) {
  return (
    <div className="ui-elements">
      <Header />
      <main>{children}</main>
    </div>
  );
}
