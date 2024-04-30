import React, { useState, useEffect } from "react";
import Layout from "../../routing/Layout";
import NavToHome from "../structure/nav-to-home/NavToHome";
import useFetch from "../../hooks/useFetch";
import FetchedData from "../re-used/fetched-data/FetchedData";
import Categories from "./Categories";

export default function MultiFilter({ baseUrl }) {
  const [products, setProducts] = useState([]);
  const [selectedFilters, setSelectedFilters] = useState([]);

  const categoriesUrl = "https://dummyjson.com/products/categories";

  const { data, pending, error } = useFetch(baseUrl, {});

  const { data: categories } = useFetch(categoriesUrl, {});

  function handleFilter(selectedCategory) {
    if (selectedFilters.includes(selectedCategory)) {
      let filters = selectedFilters.filter((item) => item !== selectedCategory);
      setSelectedFilters(filters);
    } else {
      setSelectedFilters([...selectedFilters, selectedCategory]);
    }
  }

  useEffect(() => {
    if (data && data.products && data.products.length > 0) {
      if (selectedFilters.length > 0) {
        let filteredProducts = selectedFilters
          .map((selectedCategory) => {
            return data.products.filter(
              (product) => product.category === selectedCategory
            );
          })
          .flat();
        setProducts(filteredProducts);
      } else {
        setProducts(data.products);
      }
    }
  }, [data, selectedFilters]);

  return (
    <Layout>
      <NavToHome componentTitle={"MultiFilter"} />
      {pending ? <h3 className="msg">Loading...</h3> : null}
      {error !== null ? <h3 className="msg">Error occured! {error}</h3> : null}
      <Categories
        categories={categories}
        setSelectedFilters={setSelectedFilters}
        selectedFilters={selectedFilters}
        handleClick={handleFilter}
      />
      {products && products.length ? <FetchedData data={products} /> : null}
    </Layout>
  );
}
