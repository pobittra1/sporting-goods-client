import Footer from "@/components/Footer/Footer";
import Navbar from "@/components/Navbar/Navbar";
import { useGetProductsQuery } from "@/redux/api/baseApi";
import { Outlet } from "react-router-dom";
function MainLayout() {
  const { data, isLoading } = useGetProductsQuery({});
  if (isLoading) {
    console.log("Loading.....");
  }
  console.log(data);
  return (
    <>
      <div className="mx-auto max-w-[1280px]">
        <Navbar></Navbar>
        <Outlet></Outlet>
        <Footer></Footer>
      </div>
    </>
  );
}

export default MainLayout;
