import { useGetSingleProductQuery } from "@/redux/api/baseApi";
import { useParams } from "react-router-dom";
import { Button } from "../ui/button";
import { Star } from "lucide-react";
import Rating from "react-rating";

const CardDetails = () => {
  const productId = useParams();
  const { data, isLoading } = useGetSingleProductQuery(productId);
  if (isLoading) {
    return (
      <div>
        <p className="text-3xl text-center text-gray-600 font-semibold my-8">
          Loading.......
        </p>
      </div>
    );
  }
  const product = data.data;
  const {
    name,
    image,
    description,
    category,
    brand,
    stockQuantity,
    rating,
    price,
  } = product;
  return (
    <div className="max-w-full grid grid-cols-1 justify-center items-center sm:grid-cols-2 p-4 rounded overflow-hidden shadow-lg bg-white">
      <img className="w-full h-full object-cover" src={image} alt={name} />
      <div className="px-6 py-4 ">
        <div className="font-bold text-xl mb-2">{name}</div>
        <p className="text-gray-700 text-base">{description}</p>
        <div className="mt-4">
          <span className="text-gray-600">Category: </span>
          <span className="font-semibold">{category}</span>
        </div>
        <div className="mt-2">
          <span className="text-gray-600">Brand: </span>
          <span className="font-semibold">{brand}</span>
        </div>
        <div className="mt-2">
          <span className="text-gray-600">Quantity: </span>
          <span className="font-semibold">{stockQuantity}</span>
        </div>
        <div className="mt-2">
          <span className="text-gray-600">Rating: </span>
          {/* @ts-expect-error their is no type declaration file for react rating*/}
          <Rating
            emptySymbol={<Star size={15} color="orange" />}
            fullSymbol={<Star size={15} color="orange" fill="orange" />}
            fractions={2}
            initialRating={rating}
            stop={10}
          />
        </div>
        <div className="mt-2">
          <span className="text-gray-600">Price: </span>
          <span className="font-semibold">{price}</span>
        </div>
        {
          <div
            className={` py-2 rounded ${
              stockQuantity <= 0 ? "opacity-50 cursor-not-allowed" : ""
            }`}
          >
            <Button>Add To Cart</Button>
          </div>
        }
      </div>
    </div>
  );
};

export default CardDetails;
