import React, { useState, useEffect } from "react";
import Layout from "../../routing/Layout";
import "./LoadMore.css";

export default function LoadMore() {
  const [loading, setLoading] = useState(false);
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
      console.log(error);
      setLoading(false);
    }
  }

  useEffect(() => {
    fetchProducts();
  }, [count]);

  useEffect(() => {
    if (products && products.length === 100) {
      setLimitReached(true);
    }
  }, [products]);

  if (loading) {
    return <div>Loading...</div>;
  }

  return (
    <Layout>
      <div className="load-more-container">
        {products && products.length
          ? products.map((item) => (
              <div className="load-more-product" key={item.id}>
                <div className="product-img-container">
                  <img
                    className="load-more-product-img"
                    src={item.thumbnail}
                    alt={item.title}
                  />
                </div>
                <p className="load-more-product-p">{item.title}</p>
              </div>
            ))
          : null}
      </div>
      <div className="load-more-btn-container">
        {limitReached ? (
          <h3 className="load-more-bottom-title">
            You have reached the bottom of this page!
          </h3>
        ) : (
          <button className="load-more-btn" onClick={() => setCount(count + 1)}>
            Load More Product
          </button>
        )}
      </div>
    </Layout>
  );
}
