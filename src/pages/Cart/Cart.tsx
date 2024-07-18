import AllCartProducts from "@/components/AllCartProducts/AllCartProducts";
import CartTotal from "@/components/TotalPrice/TotaPrice";

function Cart() {
  return (
    <div>
      <AllCartProducts></AllCartProducts>
      <CartTotal></CartTotal>
    </div>
  );
}

export default Cart;
