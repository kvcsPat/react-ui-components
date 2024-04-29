import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "../components/home/Home";
import Accordion from "../components/accordion/Accordion";
import StarRating from "../components/star-rating/StarRating";
import ImageSlider from "../components/image-slider/ImageSlider";
import LoadMore from "../components/load-more/LoadMore";
import ScrollIndicator from "../components/scroll-indicator/ScrollIndicator";

export default function Routing() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/accordion" element={<Accordion />} />
        <Route path="/star-rating" element={<StarRating />} />
        <Route
          path="/image-slider"
          element={
            <ImageSlider
              url={"https://picsum.photos/v2/list"}
              page={"1"}
              limit={"10"}
            />
          }
        />
        <Route path="/load-more" element={<LoadMore />} />
        <Route
          path="/scroll-indicator"
          element={
            <ScrollIndicator url={"https://dummyjson.com/products?limit=100"} />
          }
        />
      </Routes>
    </BrowserRouter>
  );
}
