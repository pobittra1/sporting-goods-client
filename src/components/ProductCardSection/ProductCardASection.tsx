import { useGetProductsQuery } from "@/redux/api/baseApi";
import ProductCard from "../ProductCard/ProductCard";
import { TProduct } from "@/types";

function ProductCardSection() {
  const { data, isLoading } = useGetProductsQuery({});
  if (isLoading) {
    return (
      <div>
        <p className="text-3xl text-center text-gray-600 font-semibold my-8">
          Loading.......
        </p>
      </div>
    );
  }
  const mainData = data.data;
  console.log(mainData);
  return (
    <div>
      <div
        className="card-grid grid grid-cols-1 md:grid-cols-3 gap-4"
        style={{
          backgroundImage:
            "linear-gradient(to right top, #d6c8d1, #d9c5c6, #d5c3bc, #ccc3b5, #bfc4b4)",
        }}
      >
        {mainData.slice(0, 6).map((card: TProduct) => (
          <div
            key={card._id}
            className="p-4 flex gap-2 flex-col  m-4"
            style={{
              boxShadow: "0px 0px 100px 100px rgba(0, 0, 0, 0.1)",
              borderRadius: "6ox",
            }}
          >
            <h1 className="text-xl capitalize font-semibold">{card.name}</h1>
            <div className="flex gap-2">
              <h3 className="text-sm">
                <span className="text-xl font-semibold capitalize">
                  category:
                </span>{" "}
                {card.category}
              </h3>
              <h3 className="text-sm">
                <span className="text-xl capitalize">brand:</span> {card.brand}
              </h3>
            </div>
            <img
              className="w-full py-8 h-[350px] object-cover hover:scale-105 ease-in duration-100"
              src={card.image}
              alt=""
            />
          </div>
          //   <ProductCard key={card?._id} card={card}></ProductCard>
        ))}
      </div>
    </div>
  );
}

export default ProductCardSection;
