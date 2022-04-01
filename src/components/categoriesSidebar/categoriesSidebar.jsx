import React, { useEffect, useState } from "react";
import styles from './categoriesSidebar.module.css';
import { Link } from "react-router-dom"; 

const CategoriesSidebar = () => {

    const[categories,setCategories]= useState([])
    useEffect(()=>{
        fetch('https://pcmarkt.herokuapp.com/categories').then(response=> response.json()).then(response=>setCategories(response))
    },[])


    return (
    <div className={styles.container}>
        <h1 className={styles.span}>Categories</h1>
        <ul>
            {categories.map(category => <Link to={`/categories/${category.slug}`} className={styles.link}><li className={styles.li}>{category.name}</li></Link>)}
        </ul>

    </div>)


}

export default CategoriesSidebar;