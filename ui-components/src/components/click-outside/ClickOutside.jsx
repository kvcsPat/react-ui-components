import React, { useState } from "react";
import Layout from "../../routing/Layout";
import NavToHome from "../structure/nav-to-home/NavToHome";
import { useRef } from "react";
import useOutsideClick from "../../hooks/useClickOutside";
import "./ClickOutside.css";

export default function ClickOutside() {
  const ref = useRef();
  const [showContent, setShowContent] = useState(false);
  useOutsideClick(ref, () => setShowContent(false));

  return (
    <Layout>
      <NavToHome componentTitle={"ClickOutside"} />
      <div className="click-outside-container">
        {showContent ? (
          <div ref={ref} className="click-outside-content">
            <h3 className="click-outside-title">
              This is some random content.
            </h3>
            <p className="click-outside-text">
              Click outside of this content to close it.
            </p>
          </div>
        ) : (
          <button
            className="show-content-btn"
            onClick={() => setShowContent(true)}
          >
            Show Content
          </button>
        )}
      </div>
    </Layout>
  );
}
