import React, { useEffect, useState } from "react";

import styles from "./product.module.css";

import { useParams } from "react-router-dom";

const Product = ({}) => {
  const params = useParams();
  console.log(params);

  const [product, setProduct] = useState([]);
  useEffect(() => {
    fetch(`http://localhost:8000/products/${params.id}`)
      .then((response) => response.json())
      .then((response) => setProduct(response));
  }, [params]);
  return (
    <div className={styles.container}>
      <img src={product.picture} width="300px" height={"300px"} alt="prod" />
      <div>
        <b>{product.title}</b>
        <p>{product.description}</p>
        <div className={styles.price}>
          <p>{product.priceMin} €</p>
          {product.priceMax && (
            <p className={styles.priceMax}>{product.priceMax} €</p>
          )}
          ;<div></div>
        </div>
      </div>
    </div>
  );
};

export default Product;
