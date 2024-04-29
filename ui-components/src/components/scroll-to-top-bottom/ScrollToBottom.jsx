import React, { useState, useEffect, useRef } from "react";
import Layout from "../../routing/Layout";
import NavToHome from "../structure/nav-to-home/NavToHome";
import useFetch from "../../hooks/useFetch";
import Products from "../re-used/products/Products";
import "./ScrollToBottom.css";

export default function ScrollToBottom({ baseUrl }) {
  const [products, setProducts] = useState([]);
  const { data, pending, error } = useFetch(baseUrl, { options: {} });

  const bottomRef = useRef(null);

  useEffect(() => {
    if (data && data.products && data.products.length > 0) {
      setProducts(data.products);
    }
  }, [data]);

  function handleScrollToBottom() {
    bottomRef.current.scrollIntoView({
      behavior: "smooth",
    });
  }

  function handleScrollToTop() {
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: "smooth",
    });
  }

  return (
    <Layout>
      {pending ? <h3 className="msg">Loading...</h3> : null}
      {error !== null ? <h3 className="msg">Error occured! {error}</h3> : null}
      {products && products.length ? (
        <>
          <NavToHome componentTitle={"ScrollToBottom"} />
          <button className="scroll-to-btn" onClick={handleScrollToBottom}>
            Scroll To Bottom
          </button>
          <Products products={products} />
          <div className="bottom-container">
            <h3 className="bottom-title">
              You have reached the bottom of this page!
            </h3>
            <button
              className="scroll-to-btn"
              ref={bottomRef}
              onClick={handleScrollToTop}
            >
              Scroll To Top
            </button>
          </div>
        </>
      ) : null}
    </Layout>
  );
}
