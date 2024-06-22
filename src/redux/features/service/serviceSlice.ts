import { createSlice } from '@reduxjs/toolkit';


interface ServiceState {
    service: "pickup" | "";
    date: string | "now";
    time: string | "asap";
}

const initialState: ServiceState = {
    service: "",
    date: "",
    time: ""
}

export const serviceSlice = createSlice({
    name: 'service',
    initialState,
    reducers: {

    }
})

export const { } = serviceSlice.actions

export default serviceSlice.reducer
