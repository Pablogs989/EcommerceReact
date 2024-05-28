import React from "react";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <div>
      <nav>
        <span><Link to="/">Home</Link> </span>
        <span><Link to="/products">Products</Link> </span>
        <span><Link to="/profile">Profile</Link> </span>
        <span><Link to="/cart">Cart</Link> </span>
        <hr />
      </nav>
    </div>
  );
};

export default Header;