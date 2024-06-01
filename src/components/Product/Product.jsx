import React, { useState, useContext, useEffect } from "react";
import { ProductContext } from "../../context/ProductContext/ProductState";
import {
  Spin,
  InputNumber,
  Input,
  Dropdown,
  Space,
  notification,
} from "antd";
import { CategoryContext } from "../../context/CategoryContext/CategoryState";
import { DownOutlined } from "@ant-design/icons";
import "./Product.scss";

const Product = () => {
  const { products, addCart, cart } = useContext(ProductContext);
  const { categories } = useContext(CategoryContext);
  const [searchTerm, setSearchTerm] = useState("");
  const [categoryFilter, setCategoryFilter] = useState("");
  const [priceFilterMax, setPriceFilterMax] = useState("");
  const [priceFilterMin, setPriceFilterMin] = useState("");

  const handleAddToCart = (product) => {
    addCart(product);
    notification.success({
      message: "Product added to the cart",
    });
  };

  if (products.length === 0) {
    return <Spin size="large" />;
  }

  const onChangeMin = (e) => {
    setPriceFilterMin(e);
  };
  const onChangeMax = (e) => {
    setPriceFilterMax(e);
  };
  const onClick = ({ key }) => {
    setCategoryFilter(key);
  };
  const items = categories.map((category) => ({
    label: category.name_category.toLowerCase(),
    key: category.name_category.toLowerCase(),
  }));

  return (
    <div className="product-container">
      <Dropdown
        menu={{
          items,
          onClick,
        }}
        className="dropdown-category"
      >
        <a onClick={(e) => e.preventDefault()}>
          <Space>
            Category: {categoryFilter || "All"}
            <DownOutlined />
          </Space>
        </a>
      </Dropdown>

      <div className="input-container">
        <Input
          type="text"
          placeholder="Search by product name"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
        <InputNumber
          max={priceFilterMax}
          placeholder="Min price"
          value={priceFilterMin}
          onChange={onChangeMin}
        />
        <InputNumber
          min={priceFilterMin}
          placeholder="Max price"
          value={priceFilterMax}
          onChange={onChangeMax}
        />
      </div>

      <div className="product-list">
        {products.products
          .filter((product) =>
            product.name.toLowerCase().includes(searchTerm.toLowerCase())
          )
          .filter((product) =>
            priceFilterMax ? product.price <= parseFloat(priceFilterMax) : true
          )
          .filter((product) =>
            priceFilterMin ? product.price >= parseFloat(priceFilterMin) : true
          )
          .filter((product) =>
            categoryFilter
              ? product.Categories[0]?.name_category.toLowerCase() ===
                categoryFilter.toLowerCase()
              : true
          )
          .map((product) => {
            return (
              <div className="product-card" key={product.id}>
                <h2>{product.name}</h2>
                <p>{product.price}€</p>
                <button onClick={() => handleAddToCart(product)}>Add to Cart</button>
              </div>
            );
          })}
      </div>
    </div>
  );
};

export default Product;
