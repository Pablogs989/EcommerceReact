import React, { useContext, useEffect } from "react";
import { UserContext } from "../../context/UserContext/UserState";
import { Button, Spin } from "antd";
import "./Profile.scss";


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
    <div className="profile">
      <div className="user-info">
        <p>Name: {user.user.name}</p>
        <p>Email: {user.user.email}</p>
        <p>Shipping Address: {user.user.shippingAddress}</p>
      </div>
      <div className="orders">
        <p>Orders:</p>
        {user.user.Orders.map((order) => (
          <div key={order.id} className="order-card">
            <h2>Pedido ID: {order.id}</h2>
            {order.Products.length === 0 ? (
              <p>Este pedido no tiene productos.</p>
            ) : (
              <ul>
                {order.Products.map((product) => (
                  <p key={product.ProductOrder.ProductId}>
                    <strong>{product.name}</strong>
                  </p>
                ))}
              </ul>
            )}
          </div>
        ))}
      </div>
      <Button danger onClick={handleLogout}>
        Logout
      </Button>
    </div>
  );
};

export default Profile;
