import React from "react";
import { Button } from "antd";
import { Link } from "react-router-dom";

const Admin = () => {
  return (
    <div>
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
