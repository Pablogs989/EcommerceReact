import React, { useContext, useEffect } from 'react'
import { ProductContext } from '../../context/ProductContext/ProductState'
import Product from '../Product/Product'
import { CategoryContext } from "../../context/CategoryContext/CategoryState";
import './Products.scss';

const Products = () => {
    const {getProducts} = useContext(ProductContext)
    const { getCategories } = useContext(CategoryContext);

    useEffect(()=>{
        getProducts()
        getCategories()
    },[])
  return (
    <div className="products-container">
        <Product/>
    </div>
  )
}

export default Products
