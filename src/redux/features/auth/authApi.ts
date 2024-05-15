import { apiSlice } from "../api/apiSlice";

export const authApi = apiSlice.injectEndpoints({
    endpoints: (builder) => ({
        register: builder.mutation({
            query: (data) => ({
                url: `${import.meta.env.VITE_AUTH_API_URL}/register`,
                method: "POST",
                body: data,
            }),

        }),
        login: builder.mutation({
            query: (data) => ({
                url: `${import.meta.env.VITE_AUTH_API_URL}/login`,
                method: "POST",
                body: data,
            }),


        }),
    }),
});

export const { useLoginMutation, useRegisterMutation } = authApi;
