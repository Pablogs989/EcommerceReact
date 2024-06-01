import { createContext, useReducer } from "react";
import axios from "axios"
import CategoryReducer from "./CategoryReducer.jsx"

const initialState = {
  categories: [],
};

const API_URL = "http://localhost:3001/categories";

export const CategoryContext = createContext(initialState);

export const CategoryProvider = ({ children }) => {
    const [state, dispatch] = useReducer(CategoryReducer, initialState);
  
    const getCategories = async () => {
      const res = await axios.get(API_URL);

      dispatch({
        type: "GET_CATEGORIES",
        payload: res.data.categories,
      });
      return res;
    };
    
    return (
        <CategoryContext.Provider
          value={{
            categories: state.categories,
            getCategories,
          }}
        >
          {children}
        </CategoryContext.Provider>
      );
    };
    