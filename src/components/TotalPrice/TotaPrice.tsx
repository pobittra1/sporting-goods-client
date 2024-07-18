import { useGetCartProductsQuery } from "@/redux/api/baseApi";
import { TProductCart } from "@/types";

const CartTotal = () => {
  const VAT_RATE = 0.15;
  const { data, isLoading } = useGetCartProductsQuery({});
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

  // Calculate total price
  const totalPrice = mainData.reduce(
    (acc: number, item: TProductCart) => acc + item.price * item.quantity,
    0
  );

  // Calculate VAT
  const vatAmount = totalPrice * VAT_RATE;

  // Calculate total price including VAT
  const totalPriceIncludingVAT = totalPrice + vatAmount;

  return (
    <div className="p-4 bg-white my-12 shadow-md rounded-lg max-w-6xl mx-auto border-2">
      <h2 className="text-2xl font-semibold mb-4 text-center">Cart Total</h2>
      <div className="flex justify-between mb-2">
        <span className="text-lg">Subtotal:</span>
        <span className="text-lg">${totalPrice.toFixed(2)}</span>
      </div>
      <div className="flex justify-between mb-2">
        <span className="text-lg">VAT (15%):</span>
        <span className="text-lg">${vatAmount.toFixed(2)}</span>
      </div>
      <div className="flex justify-between font-bold text-xl">
        <span>Total:</span>
        <span>${totalPriceIncludingVAT.toFixed(2)}</span>
      </div>
    </div>
  );
};

export default CartTotal;
