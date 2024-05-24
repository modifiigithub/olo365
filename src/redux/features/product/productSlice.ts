import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { ProductType } from '../../../types';

interface ProductState {
    productType: ProductType;
    productSort: "asc" | "desc";
    searchKeyword: string;
}

const initialState: ProductState = {
    productType: "",
    productSort: "asc",
    searchKeyword: ""
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
        },
        searchProducts: (state, action: PayloadAction<string>) => {
            state.searchKeyword = action.payload
        }
    },
})

export const { filterProducts, sortProductsByPrice, searchProducts } = productSlice.actions

export default productSlice.reducer
