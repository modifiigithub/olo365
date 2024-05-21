import { base_url } from "../../../config";
import { apiSlice } from "../api/apiSlice";

export const commonApi = apiSlice.injectEndpoints({
    endpoints: (builder) => ({
        getTables: builder.query({
            query: () => ({
                url: `${base_url.COMMON_API_URL}/get-tables`
            }),
        }),
        getBars: builder.query({
            query: () => ({
                url: `${base_url.COMMON_API_URL}/get-bars`
            }),
        }),
    }),
});

export const { useGetBarsQuery, useGetTablesQuery } = commonApi;
