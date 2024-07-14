import MainLayout from "@/components/Layouts/MainLayout/MainLayout";
import Home from "@/pages/Home";
import SingProductDetails from "@/pages/SingleProductDetails/SingleProductDetails";

import { createBrowserRouter } from "react-router-dom";
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
        element: <SingProductDetails></SingProductDetails>,
      },
      {
        path: "/product/category:category",
        element: <SingProductDetails></SingProductDetails>,
      },
    ],
  },
]);

export default router;
