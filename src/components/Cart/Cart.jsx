import React, { useContext, useState, useEffect } from "react";
import { ProductContext } from "../../context/ProductContext/ProductState";
import { UserContext } from "../../context/UserContext/UserState";
import { Link } from "react-router-dom";
import { Button, Empty, notification } from "antd";
import orderService from "../../services/OrderService";
import "./Cart.scss";

const Cart = () => {
  const { cart, clearCart } = useContext(ProductContext);
  const { getLoggedUserInfo } = useContext(UserContext);
  const token = localStorage.getItem("token");
  const [totalPrice, setTotalPrice] = useState(0);

  useEffect(() => {
    // Calcular el precio total cada vez que el carrito cambie
    calculateTotalPrice();
  }, [cart]);

  const calculateTotalPrice = () => {
    let total = 0;
    cart.forEach((product) => {
      total += parseFloat(product.price);
    });
    setTotalPrice(total);
  };

  if (cart.length === 0) {
    return (
      <div className="empty-cart">
        <Empty description={<span>Empty cart</span>}>
          <Button type="primary">
            <Link to="/products">Buy Now</Link>
          </Button>
        </Empty>
      </div>
    );
  }

  return (
    <div className="cart">
      <div className="cart-actions">
        <button onClick={clearCart}>Clear Cart</button>
        <button
          onClick={() => {
            if (token) {
              orderService.createOrder(cart);
              clearCart();
              getLoggedUserInfo();
            } else {
              notification.error({
                message: "You need to be logged in to create an order",
              });
            }
          }}
        >
          Create Order
        </button>
      </div>

      {cart.map((product) => (
        <div key={product._id} className="cart-item">
          <h2>{product.name}</h2>
          <p>{product.price}</p>
        </div>
      ))}
      
      <div className="total-price">
        <h3>Total Price: {totalPrice}€</h3>
      </div>
    </div>
  );
};

export default Cart;
