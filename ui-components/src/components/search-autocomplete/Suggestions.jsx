import React, { useRef } from "react";
import useOutsideClick from "../../hooks/useClickOutside";
import "./Suggestions.css";

export default function Suggestions({ data, handleClick, setShowDropDown }) {
  const ref = useRef();

  useOutsideClick(ref, () => setShowDropDown(false));

  return (
    <ul ref={ref} className="suggestions">
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
