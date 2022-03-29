import React, { useEffect, useState } from "react";
import ProductCard from "../productCard/productCard";
import styles from "./productGrid.module.css";

 const ProductGrid = () => {
const [products, setProducts] = useState([])
     useEffect(() => {
        const requestOptions = {
            method: "GET",
            headers: { "Content-Type": "application/json" , 'access-control-allow-origin': '*'}
          };
        fetch ('https://pcmarkt.herokuapp.com/products', requestOptions).then(response => response.json()).then(response => setProducts(response.products)); 
    },[])
    return <div className={styles.tablet}>{products.map(product => <ProductCard picture={product.picture} name={product.name} description={product.description} price={product.price}></ProductCard>)} </div>
}

export default ProductGrid;
