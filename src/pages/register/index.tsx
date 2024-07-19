import { toast } from "react-toastify";
import AuthenLayout from "../../components/authen-layout";
import { Button, Form, Input } from "antd";
import api from "../../config/axios";
import { useNavigate } from "react-router-dom";

function Register() {

    const navigate = useNavigate();
  const handleRegister = async (values) => {
    try {
      const respone = await api.post("register", values);
      toast.success("Register success!");
      navigate("/login")

    } catch (error) {
      toast.error(error.respone.data);
    }
  };

  return (
    <AuthenLayout>
      <Form labelCol={{ span: 24 }}
      onFinish={handleRegister}>
        <Form.Item
          label="Phone"
          name="phone"
          rules={[
            { required: true, message: "Please input your phone number!" },
          ]}
        >
          <Input placeholder="Enter your phone number" />
        </Form.Item>

        <Form.Item
          label="Password"
          name="password"
          rules={[{ required: true, message: "Please input your password!" }]}
        >
          <Input.Password placeholder="Enter your password" />
        </Form.Item>

        <Form.Item
          label="Full Name"
          name="fullName"
          rules={[{ required: true, message: "Please input your full name!" }]}
        >
          <Input placeholder="Enter your full name" />
        </Form.Item>

        <Form.Item
          label="Email"
          name="email"
          rules={[
            { required: true, message: "Please input your email!" },
            { type: "email", message: "The input is not valid E-mail!" },
          ]}
        >
          <Input placeholder="Enter your email" />
        </Form.Item>

        <Form.Item wrapperCol={{ span: 16, offset: 8 }}>
          <Button type="primary" htmlType="submit">
            Register
          </Button>
        </Form.Item>
      </Form>
    </AuthenLayout>
  );
}

export default Register;
