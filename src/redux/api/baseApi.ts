// Need to use the React-specific entry point to import createApi
import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

// Define a service using a base URL and expected endpoints
export const baseApi = createApi({
  reducerPath: "baseApi",
  baseQuery: fetchBaseQuery({ baseUrl: "http://localhost:5000/api/v1" }),
  tagTypes: ["product"],
  endpoints: (builder) => ({
    getProducts: builder.query({
      query: (data = {}) => {
        return data?.category
          ? `/product?category=${data?.category}`
          : "/product";
      },
      providesTags: ["product"],
    }),
    getSingleProduct: builder.query({
      query: ({ id }) => ({
        url: `/product/${id}`,
        method: "GET",
      }),
    }),
    getProductByCategory: builder.query({
      query: (category) => ({
        url: `/product?category=${category}`,
        method: "GET",
      }),
    }),
    addCartProduct: builder.mutation({
      query: (cartProduct) => {
        return {
          url: "/product/add-product",
          method: "POST",
          body: cartProduct,
        };
      },
      invalidatesTags: ["product"],
    }),
    updateProduct: builder.mutation({
      query: ({ id, ...updatedProduct }) => ({
        url: `/product/${id}`,
        method: "PATCH",
        body: updatedProduct,
      }),
    }),
    getCartProducts: builder.query({
      query: () => ({
        url: `/product/cart-products/product`,
        method: "GET",
      }),
      providesTags: ["product"],
    }),
    increaseQuantity: builder.mutation({
      query: (id) => {
        console.log(id);
        return {
          url: `/product/quantity/increase/${id}`,
          method: "PATCH",
        };
      },
      invalidatesTags: ["product"],
    }),
    decreaseQuantity: builder.mutation({
      query: (id) => {
        console.log(id);
        return {
          url: `/product/quantity/decrease/${id}`,
          method: "PATCH",
        };
      },
      invalidatesTags: ["product"],
    }),
    addUser: builder.mutation({
      query: (user) => {
        return {
          url: "/user/add-user",
          method: "POST",
          body: user,
        };
      },
      invalidatesTags: ["product"],
    }),
  }),
});

export const {
  useGetProductsQuery,
  useGetSingleProductQuery,
  useGetProductByCategoryQuery,
  useAddCartProductMutation,
  useUpdateProductMutation,
  useGetCartProductsQuery,
  useIncreaseQuantityMutation,
  useDecreaseQuantityMutation,
  useAddUserMutation,
} = baseApi;
