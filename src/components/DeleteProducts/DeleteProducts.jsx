import React, { useContext, useEffect } from 'react'
import { ProductContext } from '../../context/ProductContext/ProductState'
import DeleteProduct from '../DeleteProduct/DeleteProduct'

const DeleteProducts = () => {
    const {getProducts} = useContext(ProductContext)

    useEffect(()=>{
        getProducts()
    },[])

  return (
    <div>
        <DeleteProduct/>
    </div>
  )
}

export default DeleteProducts