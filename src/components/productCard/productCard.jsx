import React from "react";
import styles from "./productCard.module.css";

const ProductCard = (props) => {
  return (
    <div className={styles.container}>
      <img src={props.picture} width="120px" height={"120px"} />
      <div>
        <b>{props.title}</b>
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
