import MainLayout from "@/components/Layouts/MainLayout/MainLayout";
import Home from "@/pages/Home";
import { createBrowserRouter } from "react-router-dom";
import SingProduct from "@/pages/SingleProduct/SingleProduct";
import AllProduct from "@/pages/AllProducts/AllProducts";
import AboutUs from "@/pages/AboutUs/AboutUs";
import ManageProducts from "@/pages/ManageProducts/ManageProducts";
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
        path: `/product`,
        element: <AllProduct></AllProduct>,
      },
      {
        path: "/product/:id",
        element: <SingProduct></SingProduct>,
      },
      {
        path: "/about-us",
        element: <AboutUs></AboutUs>,
      },
      {
        path: "/product/add-product-to-cart",
        element: <ManageProducts></ManageProducts>,
      },
    ],
  },
]);

export default router;
