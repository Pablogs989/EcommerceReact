import { Button, Form, Input } from "antd";
import { useContext, useEffect } from "react";
import { UserContext } from "../../context/UserContext/UserState";
import { useNavigate } from "react-router-dom";
import { notification } from "antd";
import "./Login.scss";

const Login = () => {
  const { login, token } = useContext(UserContext);
  const emailRegex = /^\w+@[a-zA-Z_]+?\.[a-zA-Z]{2,3}$/;
  const navigate = useNavigate();
  const onFinish = (values) => {
    login(values);
  };
  useEffect(() => {
    if (token) {
      navigate("/profile");
      notification.success({
        message: "Welcome",
      });
    }
  }, [token]);

  return (
    <div className="login">
      <div className="login-container">
        <h1 className="login-title">Login</h1>
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
            wrapperCol={{
              offset: 8,
              span: 16,
            }}
          >
            <div className="login-buttons">
              <Button type="primary" htmlType="submit" className="login-button">
                Login
              </Button>
            </div>
          </Form.Item>
        </Form>
        <div className="login-footer">
          <p>
            Don't have an account? <a href="/register">Register here</a>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Login;
