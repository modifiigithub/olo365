import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { ICartItem } from '../../../types';

interface CartState {
    carts: ICartItem[];
    totalPrice: number;
    totalProduct: number;
    addToCartModal: ICartItem | null
}

const initialState: CartState = {
    carts: [],
    totalPrice: 0,
    totalProduct: 0,
    addToCartModal: null,
}

const calculateTotals = (carts: ICartItem[]) => {
    return carts.reduce(
        (totals, item) => {
            totals.totalPrice += item.price * item.quantity;
            totals.totalProduct += item.quantity;
            return totals;
        },
        { totalPrice: 0, totalProduct: 0 }
    );
};

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

            const { totalPrice, totalProduct } = calculateTotals(state.carts);
            state.totalPrice = Number(totalPrice.toFixed(2));
            state.totalProduct = totalProduct;
        },
        removeToCart: (state, action: PayloadAction<ICartItem>) => {
            const itemToRemove = action.payload;
            const indexToRemove = state.carts.findIndex(cartItem => cartItem.id === itemToRemove.id);

            if (indexToRemove !== -1) {
                state.carts[indexToRemove].quantity -= itemToRemove.quantity;

                if (state.carts[indexToRemove].quantity <= 0) {
                    state.carts.splice(indexToRemove, 1);
                }
            }

            const { totalPrice, totalProduct } = calculateTotals(state.carts);
            state.totalPrice = Number(totalPrice.toFixed(2));
            state.totalProduct = totalProduct;
        },
        removeItemFromCart: (state, action: PayloadAction<ICartItem>) => {
            const itemToRemove = action.payload;
            const indexToRemove = state.carts.findIndex(cartItem => cartItem.id === itemToRemove.id);

            if (indexToRemove !== -1) {
                state.carts.splice(indexToRemove, 1);
            }

            const { totalPrice, totalProduct } = calculateTotals(state.carts);
            state.totalPrice = Number(totalPrice.toFixed(2));
            state.totalProduct = totalProduct;
        },
        handleAddToCartModal: (state, action: PayloadAction<ICartItem>) => {
            state.addToCartModal = action.payload
        }
    },
});

export const { addToCart, removeToCart, removeItemFromCart, handleAddToCartModal } = cartSlice.actions;

export default cartSlice.reducer;
