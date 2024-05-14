import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { ProductType } from '../../../types';

interface ProductState {
    productType: ProductType;
    productSort: "asc" | "desc";
}

const initialState: ProductState = {
    productType: "",
    productSort: "asc"
}

export const productSlice = createSlice({
    name: 'product',
    initialState,
    reducers: {
        filterProducts: (state, action: PayloadAction<ProductType>) => {
            state.productType = action.payload
        },
        sortProductsByPrice: (state, action: PayloadAction<"asc" | "desc">) => {
            state.productSort = action.payload
        }
    },
})

export const { filterProducts, sortProductsByPrice } = productSlice.actions

export default productSlice.reducer
