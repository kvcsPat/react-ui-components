import React from "react";
import Button from "../re-used/button/Button";
import "./Categories.css";

export default function Categories({
  categories,
  setSelectedFilters,
  selectedFilters,
  handleClick,
}) {
  function handleClearFilters() {
    setSelectedFilters([]);
  }
  return (
    <div className="categories-container">
      {selectedFilters.length > 0 ? (
        <Button
          btnClass={"general-btn clear-filters"}
          btnText={
            <>
              <span>Clear Filters</span>
              <span className="material-icons-round">close</span>
            </>
          }
          btnClick={handleClearFilters}
        />
      ) : null}
      <ul className="categories">
        {categories && categories.length
          ? categories.map((category, index) => (
              <li
                key={index}
                className={`category-item ${
                  selectedFilters?.includes(category) ? "item-active" : ""
                }`}
                onClick={() => handleClick(category)}
              >
                {category}
              </li>
            ))
          : null}
      </ul>
    </div>
  );
}
