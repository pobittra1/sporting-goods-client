import { Link } from "react-router-dom";
import { Button } from "../ui/button";

const Success = () => {
  return (
    <div className="max-w-md mx-auto p-4 bg-white shadow-md rounded-md text-center my-6">
      <h2 className="text-xl font-bold mb-4">Order Placed Successfully!</h2>
      <p className="mb-4">
        Thank you for your purchase. Your order will be processed and delivered
        soon.
      </p>
      <Link to="/">
        <Button>Go To Home</Button>
      </Link>
    </div>
  );
};

export default Success;
