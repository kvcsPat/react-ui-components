import React, { useState, useEffect } from "react";
import Layout from "../../routing/Layout";
import NavToHome from "../structure/nav-to-home/NavToHome";
import FetchedData from "../re-used/fetched-data/FetchedData";
import Button from "../re-used/button/Button";

export default function LoadMore() {
  const [loading, setLoading] = useState(false);
  const [errMsg, setErrMsg] = useState(null);
  const [products, setProducts] = useState([]);
  const [count, setCount] = useState(0);
  const [limitReached, setLimitReached] = useState(false);

  async function fetchProducts() {
    try {
      setLoading(true);

      const response = await fetch(
        `https://dummyjson.com/products?limit=10&skip=${
          count === 0 ? 0 : count * 10
        }`
      );

      const result = await response.json();

      if (result && result.products && result.products.length) {
        setProducts(() => [...products, ...result.products]);
        setLoading(false);
      }
    } catch (error) {
      setErrMsg(error.message);
      setLoading(false);
    }
  }

  useEffect(() => {
    fetchProducts();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [count]);

  useEffect(() => {
    if (products && products.length === 100) {
      setLimitReached(true);
    }
  }, [products]);

  return (
    <Layout>
      {loading ? <h3 className="msg">Loading...</h3> : null}
      {errMsg !== null ? (
        <h3 className="msg">Error occured! {errMsg}</h3>
      ) : null}
      {products && products.length ? (
        <>
          <NavToHome componentTitle={"LoadMore"} />
          <FetchedData data={products} />
          <div className="bottom-container">
            {limitReached ? (
              <h3 className="bottom-title">
                You have reached the bottom of this page!
              </h3>
            ) : (
              <Button
                btnClick={() => setCount(count + 1)}
                btnText={"Load More Product"}
              />
            )}
          </div>
        </>
      ) : null}
    </Layout>
  );
}
