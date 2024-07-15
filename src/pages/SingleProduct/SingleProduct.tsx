import CardDetails from "@/components/CardDetails/CardDetails";
import basketball from "../../assets/for-category/basketball.png";
import football from "../../assets/for-category/football.png";
import tennis from "../../assets/for-category/tennis.png";
import volleyball from "../../assets/for-category/volleyball.png";

import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
function SingProduct() {
  return (
    <div>
      <CardDetails></CardDetails>
      <div className="my-16">
        <h2 className="text-3xl text-center font-bold my-4">
          Get your product here by select category
        </h2>
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-8 w-8/12 mx-auto my-12">
          <div
            className="flex flex-col justify-center items-center gap-4 py-4 hover:scale-90 duration-300 rounded-md hover:text-gray-500"
            style={{ boxShadow: "0px 10px 100px 72px rgba(0,0,0,0.1)" }}
          >
            <img
              className="w-[60px]"
              src={basketball}
              alt="basketball image here"
            />
            <Link to={`/product/category/Basketball`}>
              <Button className="bg-transparent border text-black hover:text-white">
                Basketball
              </Button>
            </Link>
          </div>
          <div
            className="flex flex-col justify-center items-center gap-2 py-4 hover:scale-90 duration-300 rounded-md hover:text-gray-500"
            style={{ boxShadow: "0px 10px 100px 72px rgba(0,0,0,0.1)" }}
          >
            <img
              className="w-[60px]"
              src={football}
              alt="football image here"
            />
            <Link to={`/product/category/Football`}>
              <Button className="bg-transparent border text-black hover:text-white">
                Football
              </Button>
            </Link>
          </div>
          <div
            className="flex flex-col justify-center items-center gap-2 py-4 hover:scale-90 duration-300 rounded-md hover:text-gray-500"
            style={{ boxShadow: "0px 10px 100px 72px rgba(0,0,0,0.1)" }}
          >
            <img className="w-[60px]" src={tennis} alt="tennis image here" />
            <Link to={`/product/category/Tennis`}>
              <Button className="bg-transparent border text-black hover:text-white">
                Tennis
              </Button>
            </Link>
          </div>
          <div
            className="flex flex-col justify-center items-center gap-2 py-4 hover:scale-90 duration-300 rounded-md hover:text-gray-500"
            style={{ boxShadow: "0px 10px 100px 72px rgba(0,0,0,0.1)" }}
          >
            <img
              className="w-[60px]"
              src={volleyball}
              alt="volleyball image here"
            />
            <Link to={`/product/category/Volleyball`}>
              <Button className="bg-transparent border text-black hover:text-white">
                Volleyball
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

export default SingProduct;
