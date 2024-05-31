import React, { useState } from "react";
import { Form, Input, Button } from "antd";

const CreateProduct = () => {
  const [name, setName] = useState("");
  const [price, setPrice] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Nombre:", name);
    console.log("Precio:", price);
  };

  return (
    <Form onSubmit={handleSubmit}>
      <Form.Item label="Nombre">
        <Input
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
      </Form.Item>
      <Form.Item label="Precio">
        <Input
          type="number"
          value={price}
          onChange={(e) => setPrice(e.target.value)}
        />
      </Form.Item>
      <Form.Item>
        <Button type="primary" htmlType="submit">
          Crear Producto
        </Button>
      </Form.Item>
    </Form>
    
  );
};

export default CreateProduct;
