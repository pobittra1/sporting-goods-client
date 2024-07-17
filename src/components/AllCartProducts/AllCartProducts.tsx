import {
  useGetCartProductsQuery,
  useUpdateQuantityMutation,
} from "@/redux/api/baseApi";
import { Star } from "lucide-react";
import { Button } from "../ui/button";
import { TProductCart } from "@/types";
import Rating from "react-rating";
import { Link } from "react-router-dom";
import { useState } from "react";

function AllCartProducts() {
  const { data, isLoading } = useGetCartProductsQuery({});
  const [quantities, setQuantities] = useState<{ [key: string]: number }>({});
  const [genuineUpdatedQuantity] = useUpdateQuantityMutation();
  console.log(quantities);

  // implement here -----------------------------
  console.log(Object.values(quantities));
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
  // console.log(mainData);
  // const updatedQuantity = Object.values(quantities)[0];
  const handleIncrease = (id: string) => {
    const newQuantity = (quantities[id] || 0) + 1;
    setQuantities((prevQuantities) => ({
      ...prevQuantities,
      [id]: newQuantity,
    }));
    updateQuantity(id, newQuantity);
  };

  const handleDecrease = (id: string) => {
    const newQuantity = Math.max((quantities[id] || 0) - 1, 0);
    setQuantities((prevQuantities) => ({
      ...prevQuantities,
      [id]: newQuantity,
    }));
    updateQuantity(id, newQuantity);
  };

  const handleQuantityChange = (id: string, value: number) => {
    setQuantities((prevQuantities) => ({
      ...prevQuantities,
      [id]: value,
    }));
    updateQuantity(id, value);
  };

  const updateQuantity = async (id: string, quantity: number) => {
    const data = {
      quantity: quantity,
    };
    console.log("form", data);
    const du = await genuineUpdatedQuantity({ id, data });
    console.log(du);
  };

  return (
    <div className="card-grid grid grid-cols-1 md:grid-cols-3 gap-4 bg-white">
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
            <button
              onClick={() => handleDecrease(card._id)}
              className="bg-gray-200 px-2 py-1 rounded"
            >
              -
            </button>
            <input
              value={quantities[card._id] || 0}
              onChange={(e) =>
                handleQuantityChange(card._id, Number(e.target.value))
              }
              placeholder="Quantity"
              type="number"
              className="w-12 text-center"
            />
            <button
              onClick={() => handleIncrease(card._id)}
              className="bg-gray-200 px-2 py-1 rounded"
            >
              +
            </button>
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
