import MainLayout from "@/components/Layouts/MainLayout/MainLayout";
import Home from "@/pages/Home";
import { createBrowserRouter } from "react-router-dom";
import SingProduct from "@/pages/SingleProduct/SingleProduct";
const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout></MainLayout>,
    children: [
      {
        index: true,
        element: <Home></Home>,
      },
      {
        path: "/product/:id",
        element: <SingProduct></SingProduct>,
      },
    ],
  },
]);

export default router;
