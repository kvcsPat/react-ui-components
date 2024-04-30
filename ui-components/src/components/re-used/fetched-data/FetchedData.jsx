import React from "react";
import "./FetchedData.css";

export default function Products({ data }) {
  return (
    <div className="data-container">
      {data && data.length
        ? data.map((item) => (
            <div className="data" key={item.id}>
              <div className="data-img-container">
                <img
                  className="data-img"
                  src={item?.thumbnail || item?.image}
                  alt={item?.title || item?.firstName}
                />
              </div>
              <p className="data-p">{item?.title || item?.firstName}</p>
            </div>
          ))
        : null}
    </div>
  );
}
