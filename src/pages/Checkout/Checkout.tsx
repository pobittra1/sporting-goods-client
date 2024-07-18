import UserDetails from "@/components/UserDetails/UserDetails";

function Checkout() {
  return (
    <div className="my-6">
      <h2 className="text-center font-bold text-3xl my-3 p-4">
        For placing order give your Info here
      </h2>
      <UserDetails></UserDetails>
    </div>
  );
}

export default Checkout;
