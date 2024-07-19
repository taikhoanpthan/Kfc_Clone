import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Layout from "./components/layout";
import Home from "./pages/home";
import Login from "./pages/login";
import Register from "./pages/register";

function App() {
  const router = createBrowserRouter([
    {
      path: "",
      element: <Layout />,
      children: [
        { path: "", element: <Home /> },
        { path: "/login", element: <Login /> },
        { path: "/Register", element: <Register /> },
      ],
    },
  ]);
  return <RouterProvider router={router} />;
}

export default App;
