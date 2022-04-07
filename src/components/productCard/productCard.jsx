import React from "react";
import styles from "./productCard.module.css";
import { Link } from "react-router-dom";

const ProductCard = (props) => {
  return (
    <div className={styles.container}>
      <div className={styles.headerCard}>
        <div>
          <p className={styles.freeSheep}>Envio gratis</p>
        </div>
        <div>
          <img src={props.picture} width="120px" height={"120px"} alt="prod" />
        </div>
      </div>
      <div className={styles.write}>
        <div className={styles.title}>
          <Link to={`/product/${props.id}`}>{props.title}</Link>
          <h5 className={styles.h5}>{props.description}</h5>
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
