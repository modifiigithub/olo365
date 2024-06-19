import { apiSlice } from "../api/apiSlice";

export const categoryApi = apiSlice.injectEndpoints({
    endpoints: (builder) => ({
        getProducts: builder.query({
            query: (query) => {
                let url = "/olo/products"

                if (query?.category_ids) {
                    url += `?category_ids=${query?.category_ids}`
                }

                if (query?.limit) {
                    url += `?limit=${query?.limit}`
                }

                if (query?.keyword) {
                    url += `?keyword=${query?.keyword}`
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
