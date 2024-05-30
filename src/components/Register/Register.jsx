import { Button, Form, Input } from "antd";
import { useContext } from "react";
import { UserContext } from "../../context/UserContext/UserState";
import { useNavigate } from "react-router-dom";
import { notification } from "antd";

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
    <div>
      <Form
        name="basic"
        labelCol={{
          span: 8,
        }}
        wrapperCol={{
          span: 16,
        }}
        style={{
          maxWidth: 600,
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
              message: "Please input your adress!",
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
            Submit
          </Button>
        </Form.Item>
      </Form>
    </div>
  );
};

export default Register;
