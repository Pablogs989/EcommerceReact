import { createContext, useReducer } from "react";
import axios from "axios"
import ProductReducer from "./ProductReducer.jsx"

const cart = JSON.parse(localStorage.getItem("cart")) || []

const initialState = {
  products: [],
  cart:cart
};

const API_URL = "http://localhost:3001/products";

export const ProductContext = createContext(initialState);

export const ProductProvider = ({ children }) => {
    const [state, dispatch] = useReducer(ProductReducer, initialState);
  
    const getProducts = async () => {
      const res = await axios.get(API_URL);
      dispatch({
        type: "GET_PRODUCTS",
        payload: res.data,
      });
      return res;
    };
  
    const addCart =(product)=>{
        dispatch({
            type:"ADD_CART",
            payload:product
        })
    }

    const clearCart =()=>{
        dispatch({
            type:"CLEAR_CART"
        })
    }

    const createProduct = async (product) => {
      try {
        const res = await axios.post(API_URL + "/", product, {
          headers: {
            Authorization: localStorage.getItem("token"),
          },
        });
      } catch (error) {
        console.error(error);
      }
    };

    const deleteProduct = async (id) => {
      try {
        const res = await axios.delete(API_URL + "/id/" + id, {
          headers: {
            Authorization: localStorage.getItem("token"),
          },
        });
      } catch (error) {
        console.error(error);
      }
    }

    return (
        <ProductContext.Provider
          value={{
            products: state.products,
            cart:state.cart,
            getProducts,
            addCart,
            clearCart,
            createProduct,
            deleteProduct
          }}
        >
          {children}
        </ProductContext.Provider>
      );
    };
    