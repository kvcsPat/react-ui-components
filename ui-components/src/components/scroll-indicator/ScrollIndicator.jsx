import React, { useState, useEffect } from "react";
import Layout from "../../routing/Layout";
import NavToHomeBtn from "../nav-to-home/NavToHomeBtn";
import "./ScrollIndicator.css";

export default function ScrollIndicator({ url }) {
  const [loading, setLoading] = useState(false);
  const [errMsg, setErrMsg] = useState(null);
  const [products, setProducts] = useState([]);
  const [scrollPrecentage, setScrollPercentage] = useState(0);

  async function fetchProducts(getUrl) {
    try {
      setLoading(true);

      const response = await fetch(url);

      const result = await response.json();

      if (result && result.products && result.products.length > 0) {
        setProducts(result.products);
        setLoading(false);
      }
    } catch (error) {
      setErrMsg(error.message);
      setLoading(false);
    }
  }

  useEffect(() => {
    fetchProducts(url);
  }, [url]);

  function handleScrollPercentage() {
    const scrollRate =
      document.body.scrollTop || document.documentElement.scrollTop;

    const height =
      document.documentElement.scrollHeight -
      document.documentElement.clientHeight;

    setScrollPercentage((scrollRate / height) * 100);
  }

  useEffect(() => {
    window.addEventListener("scroll", handleScrollPercentage);

    return () => {
      window.removeEventListener("scroll", () => {});
    };
  }, []);

  return (
    <Layout>
      {loading ? <h3 className="msg">Loading...</h3> : null}
      {errMsg !== null ? (
        <h3 className="msg">Error occured! {errMsg}</h3>
      ) : null}
      {products && products.length ? (
        <>
          <div className="component-title-container">
            <NavToHomeBtn />
            <h2 className="component-title">ScrollIndicator</h2>
          </div>
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
        </>
      ) : null}
    </Layout>
  );
}
