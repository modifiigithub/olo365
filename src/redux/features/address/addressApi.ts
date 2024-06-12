import { base_url } from "../../../config";
import { RootState, store } from "../../app/store";
import { apiSlice } from "../api/apiSlice";

export const addressApi = apiSlice.injectEndpoints({
    endpoints: (builder) => ({
        getAllAddress: builder.query({
            query: () => {
                const token = (store.getState() as RootState).auth.device_token;

                return {
                    url: `${base_url.COMMON_API_URL}/addresses`,
                    headers: {
                        Authorization: `Bearer ${token}`,
                    },
                };
            },
        }),
        createNewAddress: builder.mutation({
            query: (data) => ({
                url: `${base_url.COMMON_API_URL}/addresses`,
                headers: {
                    Authorization: data?.headers.Authorization,
                },
                method: "POST",
                body: data?.body,
            }),
        }),
    }),
});

export const {
    useGetAllAddressQuery,
    useCreateNewAddressMutation,
} = addressApi;
