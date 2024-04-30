import React from "react";
import { beers } from "./beers";
import "./Sections.css";

export default function Sections({ sectionRef }) {
  return (
    <div className="sections container">
      {beers.cards.map((item, index) => (
        <section
          key={index}
          ref={index === 6 ? sectionRef : null}
          className="section"
        >
          <h2 className="section-title">{item.title}</h2>
          <h3 className="section-sub">{item.sub}</h3>
          <p className="section-text">{item.text}</p>
        </section>
      ))}
    </div>
  );
}
