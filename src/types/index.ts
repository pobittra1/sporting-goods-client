export type TProduct = {
  _id: string;
  name: string;
  category: string;
  stockQuantity: number;
  brand: string;
  rating: number;
  description: string;
  price: number;
  image: string;
  product: string;
};
export type TProductCart = {
  _id: string;
  name: string;
  category: string;
  quantity: number;
  brand: string;
  rating: number;
  description: string;
  price: number;
  image: string;
  product: string;
  stockQuantity: number;
};

export type TUser = {
  name: string;
  email: string;
  phone: string;
  deliveryAddress: string;
};

type TCartState = {
  items: TProduct[];
};

// Define initial state
export const initialState: TCartState = {
  items: [],
};
