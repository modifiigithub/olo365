import { apiSlice } from "../api/apiSlice";

export const orderApi = apiSlice.injectEndpoints({
    endpoints: (builder) => ({
        getOrders: builder.query({
            query: () => ({
                url: "/table/order/list"
            }),
        }),
        addOrder: builder.mutation({
            query: () => ({
                url: "/table/order/place",
                method: "POST"
            }),
        }),
    }),
});

export const { useAddOrderMutation, useGetOrdersQuery } = orderApi;
