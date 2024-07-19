import { Button, Form, Input } from "antd";
import "./index.scss";
import AuthenLayout from "../../components/authen-layout";
import api from "../../config/axios";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { login } from "../../redux/features/userSlice";
function Login() {
  const dispatch = useDispatch();

  const nav = useNavigate();
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const handleLogin = async (values: any) => {
    try {
      const respone = await api.post("login", values);
      toast.success("Login success");

      //respone,data => user
      dispatch(login(respone.data));
      nav("/");
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
    } catch (error: any) {
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
        className="form"
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
          <Button
            type="primary"
            htmlType="submit"
            onClick={() => nav("/register")}
          >
            Register
          </Button>
        </Form.Item>
      </Form>
    </AuthenLayout>
  );
}

export default Login;
