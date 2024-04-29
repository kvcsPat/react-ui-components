import React from "react";
import "./Products.css";

export default function Products({ products }) {
  return (
    <div className="product-container">
      {products && products.length
        ? products.map((item) => (
            <div className="product" key={item.id}>
              <div className="product-img-container">
                <img
                  className="product-img"
                  src={item.thumbnail}
                  alt={item.title}
                />
              </div>
              <p className="product-p">{item.title}</p>
            </div>
          ))
        : null}
    </div>
  );
}
