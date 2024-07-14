import CardDetails from "@/components/CardDetails/CardDetails";
import MainLayout from "@/components/Layouts/MainLayout/MainLayout";
import Home from "@/pages/Home";

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
        element: <CardDetails></CardDetails>,
      },
    ],
  },
]);

export default router;
