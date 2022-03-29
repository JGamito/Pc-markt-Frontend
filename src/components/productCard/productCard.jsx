import React from "react";
import styles from './productCard.module.css';

const ProductCard = (props) => {
   return (<div className={styles.container}>
       <img src={props.picture} width= "120px" height={"120px"}/>
       <div>
           <b>{props.name}</b>
           <p>{props.description}</p>
           <p>{props.price}</p>
        </div>
   </div>)
}
export default ProductCard;