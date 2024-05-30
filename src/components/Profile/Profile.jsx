import React, { useContext, useEffect } from "react";
import { UserContext } from "../../context/UserContext/UserState";
import { Button, Spin } from "antd";

const Profile = () => {
  const { getLoggedUserInfo, user, token, logout } = useContext(UserContext);

  useEffect(() => {
    getLoggedUserInfo();
  }, [token]);
  
  const handleLogout = () => {
    logout();
  };

  if (!user) {
    return <Spin size="large" />;
  }
  return (
    <div>
      <p>Name: {user.user.name}</p>
      <p>Email: {user.user.email}</p>
      <p>Shipping Address: {user.user.shippingAddress}</p>
      <p>Orders:</p>
      {
        user.user.Orders.map((order) => (
          <div key={order.id} style={{ marginBottom: "20px" }}>
            <h2>Pedido ID: {order.id}</h2>
            {order.Products.length === 0 ? (
              <p>Este pedido no tiene productos.</p>
            ) : (
              <ul>
                {order.Products.map((product) => (
                  <li key={product.ProductOrder.ProductId}>
                    <strong>{product.name}</strong>
                  </li>
                ))}
              </ul>
            )}
          </div>
        ))
      }
      <Button danger onClick={handleLogout}>
        Logout
      </Button>
    </div>
  );
};

export default Profile;
