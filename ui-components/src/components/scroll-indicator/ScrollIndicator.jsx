import React, { useState, useEffect } from "react";
import Layout from "../../routing/Layout";
import NavToHome from "../structure/nav-to-home/NavToHome";
import useFetch from "../../hooks/useFetch";
import FetchedData from "../re-used/fetched-data/FetchedData";
import "./ScrollIndicator.css";

export default function ScrollIndicator({ baseUrl }) {
  const [scrollPrecentage, setScrollPercentage] = useState(0);
  const [products, setProducts] = useState([]);

  const { data, pending, error } = useFetch(baseUrl, {});

  function handleScrollPercentage() {
    const scrollRate =
      document.body.scrollTop || document.documentElement.scrollTop;

    const height =
      document.documentElement.scrollHeight -
      document.documentElement.clientHeight;

    setScrollPercentage((scrollRate / height) * 100);
  }

  useEffect(() => {
    if (data && data.products && data.products.length > 0) {
      setProducts(data.products);
    }
  }, [data]);

  useEffect(() => {
    window.addEventListener("scroll", handleScrollPercentage);

    return () => {
      window.removeEventListener("scroll", () => {});
    };
  }, []);

  return (
    <Layout>
      {pending ? <h3 className="msg">Loading...</h3> : null}
      {error !== null ? <h3 className="msg">Error occured! {error}</h3> : null}
      {products && products.length ? (
        <>
          <NavToHome componentTitle={"ScrollIndicator"} />
          <div
            className={
              scrollPrecentage > 0
                ? "scroll-progress-container visible"
                : "scroll-progress-container"
            }
          >
            <h2 className="scrolling component-title">How much you scrolled</h2>
            <div className="scroll-progress-tracking">
              <div
                className="current-progress-bar"
                style={{ width: `${scrollPrecentage}%` }}
              ></div>
            </div>
          </div>
          <FetchedData data={products} />
          <div className="bottom-container">
            <h3 className="bottom-title">
              You have reached the bottom of this page!
            </h3>
          </div>
        </>
      ) : null}
    </Layout>
  );
}
