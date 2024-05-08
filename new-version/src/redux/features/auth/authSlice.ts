import { createSlice } from "@reduxjs/toolkit";

interface IUser {
    id: number;
    role_id: number;
    name: string;
    email: string;
}

interface InitialState {
    device_token: undefined | string,
    user: undefined | IUser,
}

const initialState: InitialState = {
    device_token: undefined,
    user: undefined,
};

const authSlice = createSlice({
    name: "auth",
    initialState,
    reducers: {
        userLoggedIn: (state, action) => {
            console.log(action)
            state.device_token = action.payload.device_token;
            state.user = action.payload.user;
        },
        userLoggedOut: (state) => {
            state.device_token = undefined;
            state.user = undefined;
        },
    },
});

export const { userLoggedIn, userLoggedOut } = authSlice.actions;

export default authSlice.reducer;
