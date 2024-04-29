import React from "react";
import { NavLink } from "react-router-dom";
import Layout from "../../../routing/Layout";
import "./Home.css";

export default function Home() {
  return (
    <Layout>
      <div className="component-title-container">
        <h2 className="component-title">Collection</h2>
      </div>
      <div className="component-container">
        <NavLink to="/accordion" className="component-card">
          &lt;Accordion/&gt;
        </NavLink>
        <NavLink to="/star-rating" className="component-card">
          &lt;StarRating/&gt;
        </NavLink>
        <NavLink to="/image-slider" className="component-card">
          &lt;ImageSlider/&gt;
        </NavLink>
        <NavLink to="/load-more" className="component-card">
          &lt;LoadMore/&gt;
        </NavLink>
        <NavLink to="/scroll-indicator" className="component-card">
          &lt;ScrollIndicator/&gt;
        </NavLink>
        <NavLink to="/custom-tabs" className="component-card">
          &lt;CustomTabs/&gt;
        </NavLink>
        <NavLink to="/modal-popup" className="component-card">
          &lt;ModalPopup/&gt;
        </NavLink>
      </div>
    </Layout>
  );
}
