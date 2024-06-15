import { createSlice, PayloadAction } from '@reduxjs/toolkit';

type TDrawerType = null | "cart" | "address" | "category" | "order"

interface DrawerState {
    openDrawer: boolean;
    drawerType: TDrawerType | null;
    searchModalMode: boolean
}

const initialState: DrawerState = {
    openDrawer: false,
    drawerType: null,
    searchModalMode: false
}

export const drawerSlice = createSlice({
    name: 'drawer',
    initialState,
    reducers: {
        handleSideDrawer: (state, action: PayloadAction<boolean>) => {
            state.openDrawer = action.payload
        },
        setDrawerType: (state, action: PayloadAction<TDrawerType>) => {
            state.drawerType = action.payload
            state.openDrawer = true
        },
        closeDrawer: (state) => {
            state.drawerType = null;
            state.openDrawer = false;
        },
        handleSearchModal: (state, action: PayloadAction<boolean>) => {
            state.searchModalMode = action.payload
        }
    },
});

export const {
    handleSideDrawer,
    setDrawerType,
    closeDrawer,
    handleSearchModal
} = drawerSlice.actions;

export default drawerSlice.reducer;
