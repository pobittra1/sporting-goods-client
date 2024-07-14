// Need to use the React-specific entry point to import createApi
import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

// Define a service using a base URL and expected endpoints
export const baseApi = createApi({
  reducerPath: "baseApi",
  baseQuery: fetchBaseQuery({ baseUrl: "http://localhost:5000/api/v1" }),
  tagTypes: ["product"],
  endpoints: (builder) => ({
    getProducts: builder.query({
      query: () => ({
        method: "GET",
        url: "/product",
      }),
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
        url: `/product/${category}`,
        method: "GET",
      }),
    }),
  }),
});

export const {
  useGetProductsQuery,
  useGetSingleProductQuery,
  useGetProductByCategoryQuery,
} = baseApi;
