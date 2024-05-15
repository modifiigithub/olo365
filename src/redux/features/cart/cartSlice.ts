import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { ICartItem } from '../../../types';

interface CartState {
    carts: ICartItem[];
    totalPrice: number;
}

const initialState: CartState = {
    carts: [],
    totalPrice: 0
}

export const cartSlice = createSlice({
    name: 'cart',
    initialState,
    reducers: {
        addToCart: (state, action: PayloadAction<ICartItem>) => {
            const item = action.payload;
            const existingItem = state.carts.find(cartItem => cartItem.id === item.id);

            if (existingItem) {
                existingItem.quantity += item.quantity;
            } else {
                state.carts.push(item);
            }

            state.totalPrice = state.carts.reduce((total, item) => total + item.price * item.quantity, 0);
        }
    },
})

export const { addToCart } = cartSlice.actions;

export default cartSlice.reducer;
