import React, { useContext } from "react";
import { UserContext } from "../../context/UserContext/UserState";
import { Link } from "react-router-dom";
import "./Header.scss";

const Header = () => {
  const { user } = useContext(UserContext);
  return (
    <div className="header">
      <nav>
        <span>
          <Link to="/">Home</Link>
        </span>
        <span>
          <Link to="/products">Products</Link>
        </span>
        <span>
          <Link to="/cart">Cart</Link>
        </span>
        {user ? (
          <span>
            <Link to="/profile">Profile</Link>
          </span>
        ) : (
          <span>
            <Link to="/login">Login</Link>
          </span>
        )}
        {user && user.role === "admin" && (
          <span>
            <Link to="/admin">Admin</Link>
          </span>
        )}
      </nav>
    </div>
  );
};

export default Header;
