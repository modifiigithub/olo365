import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { ICategory } from '../../../types';

interface CategoryState {
    category: ICategory | null;
}

const initialState: CategoryState = {
    category: null
}

export const categorySlice = createSlice({
    name: 'category',
    initialState,
    reducers: {
        categoryFilter: (state, action: PayloadAction<ICategory>) => {
            if (state.category?.id === action.payload.id) {
                state.category = null
            } else {
                state.category = action.payload
            }
        }
    },
})

export const { categoryFilter } = categorySlice.actions

export default categorySlice.reducer
