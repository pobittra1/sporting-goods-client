// import Contact from "@/components/Contact/Contact";
import { HeroSection } from "@/components/HeroSection/HeroSection";
import AllProduct from "@/pages/AllProducts/AllProducts";
function Home() {
  return (
    <>
      <HeroSection></HeroSection>
      {/* <h2 className="text-center text-3xl font-extrabold text-gray-900 mb-6 mt-12">
        Latest Products
      </h2> */}
      <AllProduct></AllProduct>
      {/* <Contact></Contact> */}
    </>
  );
}

export default Home;
