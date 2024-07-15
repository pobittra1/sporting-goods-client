import { useGetProductsQuery } from "@/redux/api/baseApi";
import { TProduct } from "@/types";
import { Button } from "../../components/ui/button";
import Rating from "react-rating";
import { Star } from "lucide-react";
import { Link, useLocation } from "react-router-dom";
import Contact from "@/components/Contact/Contact";
import { useState } from "react";

function AllProduct() {
  // const [searchTerm, setSearchTerm] = useState("");
  // const [selectedCategory, setSelectedCategory] = useState("");

  const location = useLocation();
  const [searchTerm, setSearchTerm] = useState<string>("");
  const [selectedCategory, setSelectedCategory] = useState<string>("");
  console.log(selectedCategory);
  const [sortBy, setSortBy] = useState<"price-asc" | "price-desc">("price-asc");
  const searchParams = new URLSearchParams(location.search);
  const category = searchParams.get("category");
  const currentPath = window.location.pathname;

  // Extracting the last segment of the URL path
  const segments = currentPath.split("/").filter((segment) => segment !== "");
  const lastSegment = segments[0];
  const { data, isLoading } = useGetProductsQuery(
    category ? { category } : undefined
  );
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

  // const filteredProducts = mainData.filter((product: TProduct) =>
  //   product.name.toLowerCase().includes(searchTerm.toLowerCase())
  // );
  // const filteredByCategory = selectedCategory
  //   ? mainData.filter(
  //       (product: TProduct) => product.category === selectedCategory
  //     )
  //   : mainData;

  // let products;
  // if (filteredProducts) {
  //   products =
  //     lastSegment === "product"
  //       ? filteredProducts
  //       : filteredProducts.slice(0, 6);
  // } else if (filteredByCategory) {
  //   products =
  //     lastSegment === "product"
  //       ? filteredByCategory
  //       : filteredByCategory.slice(0, 6);
  // }

  const products = lastSegment === "product" ? mainData : mainData.slice(0, 6);

  // Filtered products based on search term and selected category
  let filteredProducts = [...products];

  const categgoryUniqueByKey = [
    ...new Map(
      products.map((item: TProduct) => [item.category, item._id, item])
    ).keys(),
  ];

  if (searchTerm.trim() !== "") {
    filteredProducts = mainData.filter((product: TProduct) =>
      product.name.toLowerCase().includes(searchTerm.toLowerCase())
    );
  }

  if (selectedCategory !== "") {
    filteredProducts = mainData.filter(
      (product: TProduct) => product.category === selectedCategory
    );
  }

  // Sorting products
  if (sortBy === "price-desc") {
    filteredProducts.sort((a, b) => b.price - a.price);
  } else {
    filteredProducts.sort((a, b) => a.price - b.price);
  }

  // Clear filters function
  const clearFilters = () => {
    setSearchTerm("");
    setSelectedCategory("");
    // Reset other filter states as needed
  };

  return (
    <div>
      {lastSegment === "product" ? (
        <h2 className="text-3xl text-center font-bold my-4 capitalize">
          all products
        </h2>
      ) : (
        <h2 className="text-3xl text-center font-bold my-4 capitalize">
          Latest product
        </h2>
      )}
      {/* ------------------------------------ */}
      {/* Filter and sort controls */}
      <div className="flex flex-wrap justify-between mb-4">
        <input
          type="text"
          placeholder="Search by name..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          className="p-2 border border-gray-300 rounded-md mr-2 mb-2 md:mb-0 w-full md:w-auto"
        />
        <select
          value={selectedCategory}
          onChange={(e) => setSelectedCategory(e.target.value)}
          className="p-2 border border-gray-300 rounded-md mr-2 mb-2 md:mb-0 w-full md:w-auto"
        >
          <option value="all-categories">All Categories</option>
          {categgoryUniqueByKey.map((category, index) => (
            <option
              key={index}
              value={category as string}
              className="text-black"
            >
              {category as string}
            </option>
          ))}
          {/* Render your categories dynamically */}
          {/* Example: <option value="basketball">Basketball</option> */}
        </select>
        <select
          value={sortBy}
          onChange={(e) =>
            setSortBy(e.target.value as "price-asc" | "price-desc")
          }
          className="p-2 border border-gray-300 rounded-md mr-2 mb-2 md:mb-0 w-full md:w-auto"
        >
          <option value="price-asc">Price: Low to High</option>
          <option value="price-desc">Price: High to Low</option>
        </select>
        <button
          onClick={clearFilters}
          className="bg-gray-200 hover:bg-gray-300 text-gray-800 font-semibold py-2 px-4 rounded-md transition duration-300"
        >
          Clear Filters
        </button>
      </div>

      {/* Product grid */}
      {/* <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        {filteredProducts.map(product => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div> */}
      {/* search filter sort area */}
      {/* <div className="relative my-12 flex items-center left-8">
        <input
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          type="text"
          placeholder="Search your product by name..."
          className="w-[300px] py-2 px-4 ps-12 border-b-2 border-gray-300 shadow-sm outline-none"
        />
        <button
          type="submit"
          className="absolute left-4 top-0 mt-3 mr-4 text-gray-300"
        >
          <Search></Search>
        </button>
      </div> */}
      {/* Filter */}
      {/* <div className="relative my-12 flex items-center left-8">
        <input
          value={selectedCategory}
          onChange={(e) => setSelectedCategory(e.target.value)}
          type="text"
          placeholder="Search your product by name..."
          className="w-[300px] py-2 px-4 ps-12 border-b-2 border-gray-300 shadow-sm outline-none"
        />
        <button
          type="submit"
          className="absolute left-4 top-0 mt-3 mr-4 text-gray-300"
        >
          <Search></Search>
        </button>
      </div> */}

      <div
        className="card-grid grid grid-cols-1 md:grid-cols-3 gap-4 "
        style={{
          backgroundImage:
            "linear-gradient(to right top, #d6c8d1, #d9c5c6, #d5c3bc, #ccc3b5, #bfc4b4)",
        }}
      >
        {filteredProducts.map((card: TProduct) => (
          <div
            key={card._id}
            className="p-4 flex gap-2 flex-col  m-4 bg-white rounded-md"
            // style={{
            //   boxShadow: "0px 0px 100px 100px rgba(0, 0, 0, 0.1)",
            //   borderRadius: "6px",
            // }}
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
      {/* if we do slice product, then we need to show see more button */}
      {lastSegment !== "product" ? (
        <div className="see-more-button text-center my-6">
          <Link to={"/product"}>
            <Button>See More</Button>
          </Link>
        </div>
      ) : (
        <div></div>
      )}
      {lastSegment === "product" ? <Contact></Contact> : ""}
    </div>
  );
}

export default AllProduct;
