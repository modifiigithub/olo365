import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { IAddress } from '../../../types';

interface AddressState {
    address: IAddress | null
}

const initialState: AddressState = {
    address: null
}

export const addressSlice = createSlice({
    name: 'address',
    initialState,
    reducers: {
        handleDeliverAddress: (state, action: PayloadAction<IAddress>) => {
            state.address = action.payload
        }
    },
});

export const { handleDeliverAddress } = addressSlice.actions;

export default addressSlice.reducer;
