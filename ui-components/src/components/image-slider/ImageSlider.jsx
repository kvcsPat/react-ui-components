import React, { useState, useEffect } from "react";
import "./ImageSlider.css";

export default function ImageSlider({ url, limit = 5, page = 1 }) {
  const [images, setImages] = useState([]);
  const [currentSlide, setCurrentSlide] = useState(0);
  const [errMsg, setErrMsg] = useState(null);
  const [loading, setLoading] = useState(false);

  async function fetchImages(getUrl) {
    try {
      setLoading(true);

      const response = await fetch(`${getUrl}?page=${page}&limit=${limit}`);
      const data = await response.json();

      if (data) {
        setImages(data);
        setLoading(false);
      }
    } catch (error) {
      setErrMsg(error.message);
      setLoading(false);
    }
  }

  useEffect(() => {
    if (url !== "") {
      fetchImages(url);
    }
  }, [url]);

  function handlePrevious() {
    setCurrentSlide(currentSlide === 0 ? images.length - 1 : currentSlide - 1);
  }

  function handleNext() {
    setCurrentSlide(currentSlide === images.length - 1 ? 0 : currentSlide + 1);
  }

  if (loading) {
    return <div>Loading...</div>;
  }

  if (errMsg !== null) {
    return <div>Error occured! {errMsg}</div>;
  }

  return (
    <div className="img-slider-wrapper">
      <div className="img-slider-container">
        <button className="img-slider-btn arrow-left" onClick={handlePrevious}>
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
    </div>
  );
}