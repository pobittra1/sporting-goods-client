import { useAddCartProductMutation } from "@/redux/api/baseApi";
import { useState, useEffect, FormEvent } from "react";
import { Button } from "../ui/button";
import { toast } from "sonner";

interface ProductData {
  name: string;
  category: string;
  stockQuantity: number;
  brand: string;
  rating: number;
  description: string;
  price: number;
  image: string;
}

const AddProduct = () => {
  const [name, setName] = useState<string>("");
  const [category, setCategory] = useState<string>("");
  const [stockQuantity, setStockQuantity] = useState<number>(1);
  const [brand, setBrand] = useState<string>("");
  const [rating, setRating] = useState<number>(1);
  const [description, setDescription] = useState<string>("");
  const [price, setPrice] = useState<number>(0);
  const [image, setImage] = useState<string>("");

  const [addProduct] = useAddCartProductMutation();

  useEffect(() => {
    console.log({
      name,
      category,
      stockQuantity,
      brand,
      rating,
      description,
      price,
      image,
    });
  }, [name, category, stockQuantity, brand, rating, description, price, image]);

  const handleAddProduct = async (e: FormEvent) => {
    e.preventDefault();
    const data: ProductData = {
      name,
      category,
      stockQuantity,
      brand,
      rating,
      description,
      price,
      image,
    };

    try {
      const res = await addProduct(data).unwrap();
      console.log(res);
      if (res?.success) {
        toast.success(res?.message);
        setName("");
        setCategory("");
        setStockQuantity(0);
        setBrand("");
        setRating(0);
        setDescription("");
        setPrice(0);
        setImage("");
      } else {
        toast.error("Failed to add product");
      }
    } catch (err) {
      console.error(err);
      toast.error("An error occurred");
    }
  };

  return (
    <div className="w-11/12 mx-auto my-8 bg-white p-8 rounded-lg shadow-md">
      <h2 className="text-2xl font-bold mb-6 text-center">Add Product</h2>
      <form
        onSubmit={handleAddProduct}
        className="space-y-4 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6 items-center justify-center w-full"
      >
        <div>
          <label
            htmlFor="name"
            className="block text-sm font-medium text-gray-700"
          >
            Name:
          </label>
          <input
            id="name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            className="mt-5 block w-full p-2 border border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500"
            required
          />
        </div>
        <div>
          <label
            htmlFor="category"
            className="block text-sm font-medium text-gray-700"
          >
            Category:
          </label>
          <input
            id="category"
            value={category}
            onChange={(e) => setCategory(e.target.value)}
            className="mt-1 block w-full p-2 border border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500"
            required
          />
        </div>
        <div>
          <label
            htmlFor="quantity"
            className="block text-sm font-medium text-gray-700"
          >
            Quantity:
          </label>
          <input
            id="quantity"
            value={stockQuantity}
            onChange={(e) => setStockQuantity(Number(e.target.value))}
            type="number"
            className="mt-1 block w-full p-2 border border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500"
            required
          />
        </div>
        <div>
          <label
            htmlFor="brand"
            className="block text-sm font-medium text-gray-700"
          >
            Brand:
          </label>
          <input
            id="brand"
            value={brand}
            onChange={(e) => setBrand(e.target.value)}
            className="mt-1 block w-full p-2 border border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500"
            required
          />
        </div>
        <div>
          <label
            htmlFor="rating"
            className="block text-sm font-medium text-gray-700"
          >
            Rating:
          </label>
          <input
            id="rating"
            value={rating}
            onChange={(e) => setRating(Number(e.target.value))}
            type="number"
            step="0.01"
            className="mt-1 block w-full p-2 border border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500"
            required
          />
        </div>
        <div>
          <label
            htmlFor="description"
            className="block text-sm font-medium text-gray-700"
          >
            Description:
          </label>
          <input
            id="description"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            className="mt-1 block w-full p-2 border border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500"
            required
          />
        </div>
        <div>
          <label
            htmlFor="price"
            className="block text-sm font-medium text-gray-700"
          >
            Price (৳):
          </label>
          <input
            id="price"
            value={price}
            onChange={(e) => setPrice(Number(e.target.value))}
            className="mt-1 block w-full p-2 border border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500"
            required
          />
        </div>
        <div>
          <label
            htmlFor="image"
            className="block text-sm font-medium text-gray-700"
          >
            Image:
          </label>
          <input
            id="image"
            value={image}
            onChange={(e) => setImage(e.target.value)}
            className="mt-1 block w-full p-2 border border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500"
            required
          />
        </div>
        <Button
          type="submit"
          className="w-full py-2 px-4 text-white rounded-md shadow-sm focus:outline-none"
        >
          Add Product
        </Button>
      </form>
    </div>
  );
};

export default AddProduct;
