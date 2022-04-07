import React from "react";
import styles from "./productCard.module.css";
import { Link } from "react-router-dom";

const ProductCard = (props) => {
  return (
    <div className={styles.container}>
      <img src={props.picture} width="120px" height={"120px"} alt="prod" />
      <div className={styles.write}>
        <div className={styles.title}>
          <Link to={`/product/${props.id}`}>{props.title}</Link>
          <p>{props.description}</p>
        </div>
        <div className={styles.price}>
          <p className={styles.priceMin}>{props.priceMin} €</p>
          {props.priceMax && (
            <p className={styles.priceMax}>{props.priceMax} €</p>
          )}
        </div>
        <div>
          <p className={styles.receive}>Recíbelo mañana</p>
        </div>
      </div>
    </div>
  );
};
export default ProductCard;
