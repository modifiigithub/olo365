import { base_url } from "../../../config";
import { apiSlice } from "../api/apiSlice";

export const authApi = apiSlice.injectEndpoints({
    endpoints: (builder) => ({
        register: builder.mutation({
            query: (data) => ({
                url: `${base_url.AUTH_API_URL}/register`,
                method: "POST",
                body: data,
            }),

        }),
        login: builder.mutation({
            query: (data) => ({
                url: `${base_url.AUTH_API_URL}/login`,
                method: "POST",
                body: data,
            }),
        }),
        updateProfileInfo: builder.mutation({
            query: (data) => ({
                url: `${base_url.AUTH_API_URL}/update-profile`,
                method: "POST",
                body: data,
            }),
        }),
    }),
});

export const { useLoginMutation, useRegisterMutation, useUpdateProfileInfoMutation } = authApi;
