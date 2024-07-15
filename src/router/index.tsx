import MainLayout from "@/components/Layouts/MainLayout/MainLayout";
import Home from "@/pages/Home";
import { createBrowserRouter } from "react-router-dom";
import SingProduct from "@/pages/SingleProduct/SingleProduct";
import AllProduct from "@/pages/AllProducts/AllProducts";
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
      // {
      //   path: "/product?category",
      //   element: <SingProduct></SingProduct>,
      // },
    ],
  },
]);

export default router;
