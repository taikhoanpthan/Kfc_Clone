import { Button, Form, Input } from "antd";
import "./index.scss";
import AuthenLayout from "../../components/authen-layout";
import api from "../../config/axios";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";
function Login() {
  const nav = useNavigate()
  const handleLogin = async (values) => {
    try {
      await api.post("login", values);
      toast.success("Login success");
      nav("/")
    } catch (error) {
      toast.error(error.response.data);
    }
  };
  return (
    <AuthenLayout>
      <Form
        labelCol={{
          span: 24,
        }}
        onFinish={handleLogin}
      >
        <Form.Item
          label="Username"
          name="phone"
          rules={[
            { required: true, message: "Please input your email!" },
            { type: "email", message: "The input is not valid E-mail!" },
          ]}
        >
          <Input placeholder="Enter your email" />
        </Form.Item>
        <Form.Item
          label="Password"
          name="password"
          rules={[{ required: true, message: "Please input your password!" }]}
        >
          <Input.Password placeholder="Enter your password" />
        </Form.Item>
        <Form.Item>
          <Button type="primary" htmlType="submit">
            Login
          </Button>
        </Form.Item>
      </Form>
    </AuthenLayout>
  );
}

export default Login;
