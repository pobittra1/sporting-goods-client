import Footer from "@/components/Footer/Footer";
import { HeroSection } from "@/components/HeroSection/HeroSection";

import Navbar from "@/components/Navbar/Navbar";
import ProductCardSection from "@/components/ProductCardSection/ProductCardASection";
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
        <HeroSection></HeroSection>
        <h2 className="text-center text-3xl border-b-2 mb-6 pb-2 border-b-black">
          Latest Products
        </h2>
        <ProductCardSection></ProductCardSection>
        <Footer></Footer>
      </div>
    </>
  );
}

export default Home;
