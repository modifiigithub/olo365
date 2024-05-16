import { apiSlice } from "../api/apiSlice";

export const categoryApi = apiSlice.injectEndpoints({
    endpoints: (builder) => ({
        getProducts: builder.query({
            query: () => ({
                url: "/products"
            }),
        }),
        getProductById: builder.query({
            query: (productId) => ({
                url: `/products/${productId}`
            }),
        }),
    }),
});

export const { useGetProductsQuery, useGetProductByIdQuery } = categoryApi;
