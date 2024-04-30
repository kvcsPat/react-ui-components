import React from "react";
import "./Suggestions.css";

export default function Suggestions({ data, handleClick }) {
  return (
    <ul className="suggestions">
      {data && data.length ? (
        data.map((item, index) => (
          <li key={index} className="suggestion-item" onClick={handleClick}>
            {item}
          </li>
        ))
      ) : (
        <li className="no-suggestions">Not Found</li>
      )}
    </ul>
  );
}
