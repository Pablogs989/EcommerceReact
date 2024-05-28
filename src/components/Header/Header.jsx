import React from "react";
import { Link } from "react-router-dom";
import './Header.scss';

const Header = () => {
  return (
    <div className="header">
      <nav>
        <span><Link to="/">Home</Link></span>
        <span><Link to="/products">Products</Link></span>
        <span><Link to="/profile">Profile</Link></span>
        <span><Link to="/cart">Cart</Link></span>
      </nav>
    </div>
  );
};

export default Header;
