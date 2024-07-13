import Footer from "@/components/Footer/Footer";
import Navbar from "@/components/Navbar/Navbar";
import { useGetProductsQuery } from "@/redux/api/baseApi";

function Home() {
  const { data, isLoading } = useGetProductsQuery({});
  if (isLoading) {
    console.log("Loading.....");
  }
  console.log(data);
  return (
    <>
      <div className="mx-auto max-w-[1280px]">
        <Navbar></Navbar>

        <Footer></Footer>
      </div>
    </>
  );
}

export default Home;
