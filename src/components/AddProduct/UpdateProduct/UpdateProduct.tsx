// src/components/UpdateProduct.tsx
import {
  useGetProductsQuery,
  useUpdateProductMutation,
} from "@/redux/api/baseApi";
import { TProduct } from "@/types";
import { useEffect, useState, FormEvent } from "react";

interface UpdateProductProps {
  productId: string;
}

const UpdateProduct = ({ productId }: UpdateProductProps) => {
  const { data: products, isLoading } = useGetProductsQuery({});
  const [product, setProduct] = useState<TProduct | null>(null);
  console.log(product);

  const [name, setName] = useState("");
  const [category, setCategory] = useState("");
  const [quantity, setQuantity] = useState(0);
  const [brand, setBrand] = useState("");
  const [rating, setRating] = useState(0);
  const [description, setDescription] = useState("");
  const [price, setPrice] = useState(0);
  const [image, setImage] = useState("");

  const [updateProduct] = useUpdateProductMutation();

  useEffect(() => {
    if (products) {
      const foundProduct = products.find(
        (p: TProduct) => p.product === productId
      );
      if (foundProduct) {
        setProduct(foundProduct);
        setName(foundProduct.name);
        setCategory(foundProduct.category);
        setQuantity(foundProduct.quantity);
        setBrand(foundProduct.brand);
        setRating(foundProduct.rating);
        setDescription(foundProduct.description);
        setPrice(foundProduct.price);
        setImage(foundProduct.image);
      }
    }
  }, [products, productId]);

  const handleUpdateProduct = async (e: FormEvent) => {
    e.preventDefault();
    await updateProduct({
      id: productId,
      name,
      category,
      quantity,
      brand,
      rating,
      description,
      price,
      image,
    });
    // Handle success
  };

  if (isLoading) return <div>Loading...</div>;

  return (
    <div>
      <h2>Update Product</h2>
      <form onSubmit={handleUpdateProduct}>
        <input
          value={name}
          onChange={(e) => setName(e.target.value)}
          placeholder="Name"
        />
        <input
          value={category}
          onChange={(e) => setCategory(e.target.value)}
          placeholder="Category"
        />
        <input
          value={quantity}
          onChange={(e) => setQuantity(Number(e.target.value))}
          placeholder="Quantity"
          type="number"
        />
        <input
          value={brand}
          onChange={(e) => setBrand(e.target.value)}
          placeholder="Brand"
        />
        <input
          value={rating}
          onChange={(e) => setRating(Number(e.target.value))}
          placeholder="Rating"
          type="number"
          step="0.1"
        />
        <input
          value={description}
          onChange={(e) => setDescription(e.target.value)}
          placeholder="Description"
        />
        <input
          value={price}
          onChange={(e) => setPrice(Number(e.target.value))}
          placeholder="Price"
          type="number"
          step="0.01"
        />
        <input
          value={image}
          onChange={(e) => setImage(e.target.value)}
          placeholder="Image URL"
        />
        <button type="submit">Update Product</button>
      </form>
    </div>
  );
};

export default UpdateProduct;
