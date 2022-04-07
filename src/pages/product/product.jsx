import React, { useEffect, useState } from "react";

import styles from "./product.module.css";

import { useParams } from "react-router-dom";

const Product = () => {
  const params = useParams();
  console.log(params);

  const [product, setProduct] = useState([]);
  useEffect(() => {
    fetch(`https://pcmarkt.herokuapp.com/products/${params.id}`)
      .then((response) => response.json())
      .then((response) => setProduct(response));
  }, [params]);
  return (
    <div className={styles.father}>
      <div className={styles.image}>
        <img src={product.picture} width="350px" height={"350px"} alt="prod" />
        <div className={styles.container}>
          <b>{product.title}</b>
          <p>{product.description}</p>
          <p>color:{product.color}</p>
          <div className={styles.price}>
            <p className={styles.priceMin}>{product.priceMin} €</p>
            {product.priceMax && (
              <p className={styles.priceMax}>{product.priceMax} € PVP</p>
            )}
          </div>
        </div>
      </div>
      <div className={styles.features}>
        <h3>Características</h3>
        <p>{product.features}</p>
      </div>
    </div>
  );
};

export default Product;
