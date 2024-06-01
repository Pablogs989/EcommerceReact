import React, { useContext } from "react";
import { Form, Input, Button, notification } from "antd";
import { ProductContext } from "../../context/ProductContext/ProductState";
import { useNavigate } from "react-router-dom";
import { UserContext } from "../../context/UserContext/UserState";
import "./CreateProduct.scss";

const CreateProduct = () => {
  const { createProduct } = useContext(ProductContext);
  const navigate = useNavigate();
  const { user } = useContext(UserContext);
  console.log(user);
  const onFinish = (values) => {
    if (user.role === "admin") {
      createProduct(values);
      navigate("/admin");
      notification.success({
        message: "Product created successfully!.",
      });
    } else {
      notification.error({
        message: "Unauthorized",
      });
    }
  };

  return (
    <div className="create-product-container">
      <div className="form-wrapper">
        <h2 className="form-title">Create New Product</h2>
        <Form
          name="basic"
          labelCol={{
            span: 8,
          }}
          wrapperCol={{
            span: 16,
          }}
          initialValues={{
            remember: true,
          }}
          onFinish={onFinish}
          autoComplete="on"
        >
          <Form.Item
            label="Name"
            name="name"
            rules={[
              {
                required: true,
                message: "Please input the product name!",
              },
            ]}
          >
            <Input />
          </Form.Item>
          <Form.Item
            label="Price"
            name="price"
            rules={[
              {
                required: true,
                message: "Please input the product price!",
              },
            ]}
          >
            <Input />
          </Form.Item>

          <Form.Item
            wrapperCol={{
              offset: 8,
              span: 16,
            }}
          >
            <Button type="primary" htmlType="submit">
              Create
            </Button>
          </Form.Item>
        </Form>
      </div>
    </div>
  );
};

export default CreateProduct;
