import React, { useState, useEffect, useRef } from "react";
import Layout from "../../routing/Layout";
import NavToHome from "../structure/nav-to-home/NavToHome";
import useFetch from "../../hooks/useFetch";
import Button from "../re-used/button/Button";
import FetchedData from "../re-used/fetched-data/FetchedData";

export default function ScrollToBottom({ baseUrl }) {
  const [products, setProducts] = useState([]);
  const { data, pending, error } = useFetch(baseUrl, {});

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
          <Button
            btnClick={handleScrollToBottom}
            btnText={"Scroll To Bottom"}
          />
          <FetchedData data={products} />
          <div className="bottom-container">
            <h3 ref={bottomRef} className="bottom-title">
              You have reached the bottom of this page!
            </h3>
            <Button btnClick={handleScrollToTop} btnText={"Scroll To Top"} />
          </div>
        </>
      ) : null}
    </Layout>
  );
}
