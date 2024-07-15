// src/components/AddProduct.js
import { useAddCartProductMutation } from "@/redux/api/baseApi";
import { useState } from "react";

const AddProductCart = () => {
  const [name, setName] = useState("");
  const [category, setCategory] = useState("");
  const [quantity, setQuantity] = useState(0);
  const [brand, setBrand] = useState("");
  const [rating, setRating] = useState(0);
  const [description, setDescription] = useState("");
  const [price, setPrice] = useState("");
  const [image, setImage] = useState("");

  const [addProduct] = useAddCartProductMutation();

  const handleAddProduct = async () => {
    await addProduct({
      name,
      category,
      quantity,
      brand,
      rating,
      description,
      price,
      image,
    });
    // Reset form or handle success
  };

  return (
    <div>
      <h2>Add Product</h2>
      <form onSubmit={handleAddProduct}>
        <div>
          <label htmlFor="name">Name:</label>
          <input value={name} onChange={(e) => setName(e.target.value)} />
        </div>
        <div>
          <label htmlFor="category">Category:</label>
          <input
            value={category}
            onChange={(e) => setCategory(e.target.value)}
          />
        </div>
        <div>
          <label htmlFor="quantity">Quantity:</label>
          <input
            value={quantity}
            onChange={(e) => setQuantity(Number(e.target.value))}
            type="number"
          />
        </div>
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
        />
        <input
          value={description}
          onChange={(e) => setDescription(e.target.value)}
          placeholder="Description"
        />
        <input
          value={price}
          onChange={(e) => setPrice(e.target.value)}
          placeholder="Price"
          type="string"
          defaultValue={"৳"}
        />
        <input
          value={image}
          onChange={(e) => setImage(e.target.value)}
          placeholder="Image URL"
        />

        <button type="submit">Add Product</button>
      </form>
    </div>
  );
};

export default AddProductCart;
