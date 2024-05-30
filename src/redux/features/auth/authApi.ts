import { base_url } from "../../../config";
import { apiSlice } from "../api/apiSlice";

export const authApi = apiSlice.injectEndpoints({
    endpoints: (builder) => ({
        getProfileInfo: builder.query({
            query: (data) => {
                console.log(data)
                return {
                    url: `${base_url.AUTH_API_URL}/get-profile`,
                    headers: data.headers,
                }
            }
        }),
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
                body: data.body,
                headers: data.headers,
            })
        }),
        verifyOtp: builder.mutation({
            query: (data) => ({
                url: `${base_url.AUTH_API_URL}/verify-otp`,
                method: "POST",
                body: data
            })
        }),
        resetPassword: builder.mutation({
            query: (data) => ({
                url: `${base_url.AUTH_API_URL}/reset-password`,
                method: "POST",
                body: data
            })
        })
    }),
});

export const {
    useGetProfileInfoQuery,
    useLoginMutation,
    useRegisterMutation,
    useUpdateProfileInfoMutation,
    useVerifyOtpMutation,
    useResetPasswordMutation
} = authApi;
