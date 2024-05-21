import {
    createApi,
    fetchBaseQuery,
} from '@reduxjs/toolkit/query/react';
import { userLoggedOut } from '../auth/authSlice';
import { RootState } from '../../app/store';
import { base_url } from '../../../config';

const baseQuery = fetchBaseQuery({
    baseUrl: base_url.API_URL,
    // credentials: 'include',
    prepareHeaders: (headers, { getState }) => {
        (getState() as RootState).auth.device_token;
        const token = (getState() as RootState).auth.device_token;

        if (token) {
            // headers.set('authorization', `${token}`);
        }

        return headers;
    },
});

export const apiSlice = createApi({
    reducerPath: 'api',
    baseQuery: async (args, api, extraOptions) => {
        const result = await baseQuery(args, api, extraOptions);

        if (result?.error?.status === 401) {
            api.dispatch(userLoggedOut());
            localStorage.clear();
        }
        return result;
    },
    tagTypes: [],

    endpoints: () => ({}),
});
