import { Button, Form, Input } from "antd";
import { useContext } from "react";
import { UserContext } from "../../context/UserContext/UserState";
import { useNavigate } from "react-router-dom";
import { notification } from "antd";
import "./Register.scss";

const Register = () => {
  const { register } = useContext(UserContext);
  const emailRegex = /^\w+@[a-zA-Z_]+?\.[a-zA-Z]{2,3}$/;

  const navigate = useNavigate();
  const onFinish = (values) => {
    register(values);
    navigate("/login");
    notification.success({
      message: "Registered successfully! Please login.",
    });
  };

  return (
    <div className="register">
      <div className="register-container">
        <h1 className="register-title">Register</h1>
        <Form
          name="basic"
          layout="vertical"
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
                message: "Please input your name!",
              },
            ]}
          >
            <Input />
          </Form.Item>
          <Form.Item
            label="Email"
            name="email"
            rules={[
              {
                required: true,
                message: "Please input your email!",
              },
              {
                pattern: emailRegex,
                message: "Please input a correct email!",
              },
            ]}
          >
            <Input />
          </Form.Item>

          <Form.Item
            label="Password"
            name="password"
            rules={[
              {
                required: true,
                message: "Please input your password!",
              },
            ]}
          >
            <Input.Password />
          </Form.Item>
          <Form.Item
            label="Shipping Address"
            name="shippingAddress"
            rules={[
              {
                required: true,
                message: "Please input your address!",
              },
            ]}
          >
            <Input />
          </Form.Item>
          <Form.Item>
            <div className="register-buttons">
              <Button type="primary" htmlType="submit" className="register-button">
                Submit
              </Button>
            </div>
          </Form.Item>
        </Form>
      </div>
    </div>
  );
};

export default Register;
