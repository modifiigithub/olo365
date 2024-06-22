import { base_url } from "../../../config";
import { apiSlice } from "../api/apiSlice";

export const commonApi = apiSlice.injectEndpoints({
    endpoints: (builder) => ({
        getTables: builder.query({
            query: () => ({
                url: `https://staging.modifii.com/api/v1/olo/get-tables`
            }),
        }),
        bookTable: builder.mutation({
            query: (data) => ({
                url: `https://staging.modifii.com/api/v1/olo/book-table`,
                method: "POST",
                body: data
            }),
        }),
        getBars: builder.query({
            query: () => ({
                url: `${base_url.COMMON_API_URL}/get-bars`
            }),
        }),
    }),
});

export const { useGetBarsQuery, useGetTablesQuery, useBookTableMutation } = commonApi;
