import React, { useState, useContext } from "react";
import { ProductContext } from "../../context/ProductContext/ProductState";
import { Spin, Input, Modal, notification } from "antd";
import { UserContext } from "../../context/UserContext/UserState";
import "./DeleteProduct.scss";

const DeleteProduct = () => {
  const { products, deleteProduct } = useContext(ProductContext);
  const [searchTerm, setSearchTerm] = useState("");
  const { user } = useContext(UserContext);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const showModal = () => {
    setIsModalOpen(true);
  };
  const handleCancel = () => {
    setIsModalOpen(false);
  };
  const handleClick = (id) => {
    if (user.role === "admin") {
      deleteProduct(id);
      setIsModalOpen(false);
      window.location.reload();
    } else {
      notification.error({
        message: "Unauthorized",
      });
    }
  };

  if (products.length === 0) {
    return <Spin size="large" />;
  }
  return (
    <div className="delete-product-container">
      <Input
        type="text"
        placeholder="Search by product name"
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
        className="search-input"
      />
      <div className="product-list">
        {products.products
          .filter((product) =>
            product.name.toLowerCase().includes(searchTerm.toLowerCase())
          )
          .map((product) => {
            return (
              <div key={product.id} className="product-item">
                <div>
                  <h2>{product.name}</h2>
                  <p>{product.price}€</p>
                </div>
                <button onClick={showModal} className="delete-button">
                  Delete product
                </button>
                <Modal
                  title="Are you sure you want to delete this product?"
                  open={isModalOpen}
                  onOk={() => handleClick(product.id)}
                  onCancel={handleCancel}
                >
                  <p>{product.name}</p>
                  <p>{product.price}€</p>
                </Modal>
              </div>
            );
          })}
      </div>
    </div>
  );
};

export default DeleteProduct;
