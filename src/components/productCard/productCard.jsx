import React from "react";
import styles from "./productCard.module.css";
import { Link } from "react-router-dom";

const ProductCard = (props) => {
  return (
    <div className={styles.container}>
      <img src={props.picture} width="120px" height={"120px"} />
      <div>
        <Link to={`/product/${props.id}`}>{props.title}</Link>
        <p>{props.description}</p>
        <div className={styles.price}>
          <p>{props.priceMin} €</p>
          {props.priceMax && (
            <p className={styles.priceMax}>{props.priceMax} €</p>
          )}
        </div>
      </div>
    </div>
  );
};
export default ProductCard;
