import React, { useState } from "react";
import Layout from "../../routing/Layout";
import "./StarRating.css";

export default function StarRating({ numOfStars = 5 }) {
  const [rating, setRating] = useState(0);
  const [hover, setHover] = useState(0);

  function handleClick(getCurrentIndex) {
    setRating(getCurrentIndex);
  }

  function handleMouseEnter(getCurrentIndex) {
    setHover(getCurrentIndex);
  }

  function handleMouseLeave() {
    setHover(rating);
  }

  function handleDeleteRating() {
    setRating(0);
    setHover(0);
  }

  return (
    <Layout>
      <div className="star-rating-wrapper">
        <button onClick={handleDeleteRating} className="star-rating-btn">
          Delete Rating
        </button>
        <div className="star-rating">
          {[...Array(numOfStars)].map((_, index) => {
            index += 1;
            return (
              <span
                key={index}
                className={
                  index <= (hover || rating)
                    ? "material-icons-round star-active"
                    : "material-icons-round star-inactive"
                }
                onClick={() => handleClick(index)}
                onMouseMove={() => handleMouseEnter(index)}
                onMouseLeave={handleMouseLeave}
              >
                {index <= (hover || rating) ? "star" : "star_border"}
              </span>
            );
          })}
        </div>
      </div>
    </Layout>
  );
}
