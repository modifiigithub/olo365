import { apiSlice } from "../api/apiSlice";

export const categoryApi = apiSlice.injectEndpoints({
    endpoints: (builder) => ({
        getProducts: builder.query({
            query: () => ({
                url: "/products/latest"
            }),
        }),
        getProductById: builder.query({
            query: (productId) => ({
                url: `/server/products/${productId}`
            }),
        }),
    }),
});

export const { useGetProductsQuery, useGetProductByIdQuery } = categoryApi;
