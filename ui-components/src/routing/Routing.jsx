import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "../components/structure/home/Home";
import Accordion from "../components/accordion/Accordion";
import StarRating from "../components/star-rating/StarRating";
import ImageSlider from "../components/image-slider/ImageSlider";
import LoadMore from "../components/load-more/LoadMore";
import ScrollIndicator from "../components/scroll-indicator/ScrollIndicator";
import TabsParent from "../components/custom-tabs/TabsParent";
import ModalParent from "../components/modal-popup/ModalParent";
import ClickOutside from "../components/click-outside/ClickOutside";
import ScrollToBottom from "../components/scroll-to-top-bottom/ScrollToBottom";
import SearchAutoComplete from "../components/search-autocomplete/SearchAutoComplete";
import MultiFilter from "../components/multi-filter/MultiFilter";
import ScrollToSection from "../components/scroll-to-section/ScrollToSection";

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
              baseUrl={"https://picsum.photos/v2/list"}
              page={"1"}
              limit={"10"}
            />
          }
        />
        <Route path="/load-more" element={<LoadMore />} />
        <Route
          path="/scroll-indicator"
          element={
            <ScrollIndicator
              baseUrl={"https://dummyjson.com/products?limit=194"}
            />
          }
        />
        <Route path="/custom-tabs" element={<TabsParent />} />
        <Route path="/modal-popup" element={<ModalParent />} />
        <Route path="/click-outside" element={<ClickOutside />} />
        <Route
          path="/scroll-to-bottom"
          element={
            <ScrollToBottom
              baseUrl={"https://dummyjson.com/products?limit=194"}
            />
          }
        />
        <Route
          path="/search-autocomplete"
          element={
            <SearchAutoComplete baseUrl={"https://dummyjson.com/users"} />
          }
        />
        <Route
          path="/multi-filter"
          element={
            <MultiFilter baseUrl={"https://dummyjson.com/products?limit=194"} />
          }
        />
        <Route path="/scroll-to-section" element={<ScrollToSection />} />
      </Routes>
    </BrowserRouter>
  );
}
