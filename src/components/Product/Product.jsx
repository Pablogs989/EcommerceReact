import React, { useState, useContext } from "react";
import { ProductContext } from "../../context/ProductContext/ProductState";
import { Spin, InputNumber, Input } from "antd";

const Product = () => {
  const { products, addCart } = useContext(ProductContext);
  const [searchTerm, setSearchTerm] = useState("");
  const [priceFilterMax, setPriceFilterMax] = useState("");
  const [priceFilterMin, setPriceFilterMin] = useState("");

  if (products.length === 0) {
    return <Spin size="large" />;
  }

  const onChangeMin = (e) => {
    setPriceFilterMin(e)
  };
  const onChangeMax = (e) => {
    setPriceFilterMax(e)
  };
  return (
    <div>
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
        .map((product) => {
          return (
            <div key={product.id}>
              <h2>{product.name}</h2>
              <p>{product.price}€</p>
              <button onClick={() => addCart(product)}>Add to Cart</button>
            </div>
          );
        })}
    </div>
  );
};

export default Product;
