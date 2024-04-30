import React, { useState } from "react";
import Layout from "../../routing/Layout";
import NavToHome from "../structure/nav-to-home/NavToHome";
import { useRef } from "react";
import useOutsideClick from "../../hooks/useClickOutside";
import "./ClickOutside.css";
import Button from "../re-used/button/Button";

export default function ClickOutside() {
  const ref = useRef();
  const [showContent, setShowContent] = useState(false);
  useOutsideClick(ref, () => setShowContent(false));

  return (
    <Layout>
      <NavToHome componentTitle={"ClickOutside"} />
      <div className="container">
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
          <Button
            btnClick={() => setShowContent(true)}
            btnText={"Show Content"}
          />
        )}
      </div>
    </Layout>
  );
}
