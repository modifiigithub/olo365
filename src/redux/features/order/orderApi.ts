import { apiSlice } from "../api/apiSlice";

export const orderApi = apiSlice.injectEndpoints({
    endpoints: (builder) => ({
        getOrders: builder.query({
            query: () => ({
                url: "/table/order/list"
            }),
        }),
        placeOrder: builder.mutation({
            query: (data) => ({
                url: "https://staging.modifii.com/api/v1/olo/order/place",
                method: "POST",
                body: data
            }),
        }),
    }),
});

export const { usePlaceOrderMutation, useGetOrdersQuery } = orderApi;
