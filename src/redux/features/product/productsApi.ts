import { apiSlice } from "../api/apiSlice";

export const categoryApi = apiSlice.injectEndpoints({
    endpoints: (builder) => ({
        getProducts: builder.query({
            query: (query) => {
                let url = "/products/latest"

                if (query?.category_ids) {
                    url += `?category_ids=${query?.category_ids}`
                }

                return { url }
            }
        }),
        getProductById: builder.query({
            query: (productId) => ({
                url: `/server/products/${productId}`
            }),
        }),
    }),
});

export const { useGetProductsQuery, useGetProductByIdQuery } = categoryApi;
