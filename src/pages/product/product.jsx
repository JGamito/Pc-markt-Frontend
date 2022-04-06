import React, { PureComponent, useEffect, useState } from "react";
import { Provider } from "react-redux";
import { createStore, combineReducers } from "redux";
import styles from "./product.module.css";

import "bootstrap/dist/css/bootstrap.css";
import "animate.css/animate.min.css";
import "font-awesome/css/font-awesome.min.css";
import { useLocation, useParams } from "react-router-dom";

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
      <img src={product.picture} width="300px" height={"300px"} />
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
