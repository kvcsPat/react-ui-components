import React, { useState } from "react";
import Layout from "../../routing/Layout.jsx";
import NavToHome from "../structure/nav-to-home/NavToHome.jsx";
import useFetch from "../../hooks/useFetch.js";
import "./ImageSlider.css";

export default function ImageSlider({ baseUrl, limit = 5, page = 1 }) {
  const [currentSlide, setCurrentSlide] = useState(0);

  const url = `${baseUrl}?page=${page}&limit=${limit}`;

  const {
    data: images,
    pending,
    error,
  } = useFetch(url, { options: {} }, [url]);

  function handlePrevious() {
    setCurrentSlide(currentSlide === 0 ? images.length - 1 : currentSlide - 1);
  }

  function handleNext() {
    setCurrentSlide(currentSlide === images.length - 1 ? 0 : currentSlide + 1);
  }

  return (
    <Layout>
      {pending ? <h3 className="msg">Loading...</h3> : null}
      {error !== null ? <h3 className="msg">Error occured! {error}</h3> : null}
      {images && images.length ? (
        <>
          <NavToHome componentTitle={"ImageSlider"} />
          <div className="img-slider-container">
            <button
              className="img-slider-btn arrow-left"
              onClick={handlePrevious}
            >
              <span className="material-icons-round">chevron_left</span>
            </button>
            {images && images.length
              ? images.map((imageItem, index) => (
                  <img
                    key={imageItem.id}
                    alt={imageItem.download_url}
                    src={imageItem.download_url}
                    className={
                      currentSlide === index
                        ? "img-slider-current-image"
                        : "img-slider-current-image hide-current-image"
                    }
                  />
                ))
              : null}
            <button className="img-slider-btn arrow-right" onClick={handleNext}>
              <span className="material-icons-round">chevron_right</span>
            </button>
            <span className="circle-indicator">
              {images && images.length
                ? images.map((_, index) => (
                    <button
                      key={index}
                      className={
                        currentSlide === index
                          ? "current-indicator"
                          : "current-indicator inactive-indicator"
                      }
                      onClick={() => setCurrentSlide(index)}
                    ></button>
                  ))
                : null}
            </span>
          </div>
        </>
      ) : null}
    </Layout>
  );
}
