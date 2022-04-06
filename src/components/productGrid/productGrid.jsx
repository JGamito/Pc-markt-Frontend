import React, { useEffect, useState } from "react";
import ProductCard from "../productCard/productCard";
import styles from "./productGrid.module.css";

const ProductGrid = () => {
  const [products, setProducts] = useState([]);
  useEffect(() => {
    const requestOptions = {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        "access-control-allow-origin": "*",
      },
    };
    fetch("https://pcmarkt.herokuapp.com/products", requestOptions)
      .then((response) => response.json())
      .then((response) => setProducts(response.products));
  }, []);
  return (
    <div className={styles.tablet}>
      {products.map((product) => (
        <ProductCard
          id={product._id}
          picture={product.picture}
          title={product.title}
          description={product.description}
          priceMin={product.priceMin}
          priceMax={product.priceMax}
        ></ProductCard>
      ))}{" "}
    </div>
  );
};

export default ProductGrid;
