import React from "react";
import "./FetchedData.css";

export default function Products({ data }) {
  return (
    <div className="product-container">
      {data && data.length
        ? data.map((item) => (
            <div className="product" key={item.id}>
              <div className="product-img-container">
                <img
                  className="product-img"
                  src={item?.thumbnail || item?.image}
                  alt={item?.title || item?.firstName}
                />
              </div>
              <p className="product-p">{item?.title || item?.firstName}</p>
            </div>
          ))
        : null}
    </div>
  );
}
