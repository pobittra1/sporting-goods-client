import Contact from "@/components/Contact/Contact";
import { HeroSection } from "@/components/HeroSection/HeroSection";
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
      <HeroSection></HeroSection>
      <h2 className="text-center text-3xl font-extrabold text-gray-900 mb-6 mt-12">
        Latest Products
      </h2>
      <ProductCardSection></ProductCardSection>
      <Contact></Contact>
    </>
  );
}

export default Home;
