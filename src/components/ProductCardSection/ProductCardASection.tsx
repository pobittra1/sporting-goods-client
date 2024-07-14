import { useGetProductsQuery } from "@/redux/api/baseApi";
import { TProduct } from "@/types";
import { Button } from "../ui/button";
import Rating from "react-rating";
import { Star } from "lucide-react";
import { Link } from "react-router-dom";

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

  return (
    <div>
      <div
        className="card-grid grid grid-cols-1 md:grid-cols-3 gap-4 bg-white "
        // style={{
        //   backgroundImage:
        //     "linear-gradient(to right top, #d6c8d1, #d9c5c6, #d5c3bc, #ccc3b5, #bfc4b4)",
        // }}
      >
        {mainData.slice(0, 6).map((card: TProduct) => (
          <div
            key={card._id}
            className="p-4 flex gap-2 flex-col  m-4"
            style={{
              boxShadow: "0px 0px 100px 100px rgba(0, 0, 0, 0.1)",
              borderRadius: "6px",
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
              className="w-full py-4 h-[220px] object-cover hover:scale-105 ease-in duration-100"
              src={card.image}
              alt=""
            />
            <div className="flex justify-around">
              <div>
                <span className=" font-semibold capitalize mr-2">Rating:</span>
                {/* {card.rating} */}
                {/* @ts-expect-error their is no type declaration file for react rating*/}
                <Rating
                  emptySymbol={<Star size={15} color="orange" />}
                  fullSymbol={<Star size={15} color="orange" fill="orange" />}
                  fractions={2}
                  initialRating={card.rating}
                  stop={10}
                />
              </div>
              <div>
                <span className="font-semibold capitalize mr-2">Price:</span>
                {card.price}
              </div>
            </div>
            <div>
              <p>
                <span className="text-xl font-semibold capitalize mr-2">
                  Decription:
                </span>
                {card.description}
              </p>
            </div>
            <div className="see-more-button text-center my-2">
              <Link to={`/product/${card?._id}`}>
                <Button>View Details</Button>
              </Link>
            </div>
          </div>

          //   <ProductCard key={card?._id} card={card}></ProductCard>
        ))}
      </div>
      <div className="see-more-button text-center my-6">
        <Button>See More</Button>
      </div>
    </div>
  );
}

export default ProductCardSection;
