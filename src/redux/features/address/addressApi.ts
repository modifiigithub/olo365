import { base_url } from "../../../config";
import { apiSlice } from "../api/apiSlice";

export const addressApi = apiSlice.injectEndpoints({
    endpoints: (builder) => ({
        getAllAddress: builder.query({
            query: () => ({
                url: `${base_url.COMMON_API_URL}/addresses`
            }),
        }),
        createNewAddress: builder.mutation({
            query: (data) => ({
                url: `https://olo365.modifii.com/api/addresses`,
                headers: data?.headers,
                method: "POST",
                body: data?.body,
            }),
        }),
    }),
});

export const {
    useGetAllAddressQuery,
    useCreateNewAddressMutation
} = addressApi;
