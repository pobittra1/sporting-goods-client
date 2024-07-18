import {
  useDecreaseQuantityMutation,
  useGetCartProductsQuery,
  useIncreaseQuantityMutation,
} from "@/redux/api/baseApi";
import { Star } from "lucide-react";
import { Button } from "../ui/button";
import { TProductCart } from "@/types";
import Rating from "react-rating";
import { Link } from "react-router-dom";

function AllCartProducts() {
  const { data, isLoading } = useGetCartProductsQuery({});
  const [increaseQuantity] = useIncreaseQuantityMutation();
  const [decreaseQuantity] = useDecreaseQuantityMutation();

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
    <div className="card-grid grid grid-cols-1 md:grid-cols-3 gap-4 bg-white border-2 m-2">
      {mainData.map((card: TProductCart) => (
        <div
          key={card._id}
          className="p-4 flex gap-2 flex-col  m-4 bg-white rounded-md"
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
            src={card?.image}
            alt="product image here"
          />
          <div className="flex justify-around">
            <div>
              <span className=" font-semibold capitalize mr-2">Rating:</span>
              {/* @ts-expect-error there is no type declaration file for react rating*/}
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
                Description:
              </span>
              {card.description}
            </p>
          </div>
          <div>
            <p>
              <span className="text-xl font-semibold capitalize mr-2">
                Quantity:
              </span>
              {/* {Number(card.quantity) + Number(updatedQuantity)} */}
              {card.quantity}
            </p>
          </div>
          <div className="flex items-center gap-2">
            <Button
              onClick={() => decreaseQuantity(card._id)}
              className="px-2 py-1 rounded"
            >
              Decrease
            </Button>

            <Button
              onClick={() => increaseQuantity(card._id)}
              className=" px-2 py-1 rounded"
            >
              Increase
            </Button>
          </div>
          <div className="see-more-button text-center my-2">
            <Link to={`/product/${card?.product}`}>
              <Button>View Details</Button>
            </Link>
          </div>
        </div>
      ))}
    </div>
  );
}

export default AllCartProducts;
