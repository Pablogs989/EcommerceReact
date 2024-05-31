import axios from "axios";
import { createContext } from "react";
import UserReducer from "./UserReducer";
import { useReducer } from "react";
import { notification } from "antd";

const token = localStorage.getItem("token") || "";
const user = JSON.parse(localStorage.getItem("user")) || null;

const initialState = {
  token: token,
  user: user,
};

const API_URL = "http://localhost:3001/users";

export const UserContext = createContext(initialState);

export const UserProvider = ({ children }) => {
  const [state, dispatch] = useReducer(UserReducer, initialState);

  const login = async (user) => {
    try {
      const res = await axios.post(API_URL + "/login", user);
      dispatch({
        type: "LOGIN",
        payload: res.data,
      });

      if (res.data) {
        localStorage.setItem("token", res.data.token);
      }
    } catch (error) {
      console.error(error);
      notification.error({
        message: "Wrong password or email!",
      });
    }
  };

  const getLoggedUserInfo = async () => {
    const token = localStorage.getItem("token");
    try {
      const res = await axios.get(API_URL + "/", {
        headers: {
          Authorization: token,
        },
      });
      if (res.data) {
        localStorage.setItem("user", JSON.stringify(res.data.user));
      }
      dispatch({
        type: "GET_USER_INFO",
        payload: res.data,
      });
    } catch (error) {
      console.error(error);
    }
  };

  const logout = async () => {
    try {
      const token = localStorage.getItem("token");
      const res = await axios.delete(API_URL + "/logout", {
        headers: {
          Authorization: token,
        },
      });
      if (res.data) {
        localStorage.removeItem("token");
        dispatch({
          type: "LOGOUT",
        });
      }
    } catch (error) {
      console.error(error);
    }
  };

  const register = async (user) => {
    try {
      const res = await axios.post(API_URL + "/", user);
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <UserContext.Provider
      value={{
        token: state.token,
        user: state.user,
        login,
        getLoggedUserInfo,
        logout,
        register,
      }}
    >
      {children}
    </UserContext.Provider>
  );
};
