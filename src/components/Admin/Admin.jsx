import React from "react";
import { Button } from "antd";
import { Link } from "react-router-dom";
import "./Admin.scss";

const Admin = () => {
  return (
    <div className="admin-panel">
      <h1>Admin Panel</h1>
      <Button type="primary" size="large">
        <Link to="/createproduct">Create Product</Link>
      </Button>
      <Button type="danger" size="large">
        <Link to="/deleteproducts">Delete Product</Link>
      </Button>
    </div>
  );
};

export default Admin;