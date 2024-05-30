import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface DrawerState {
    openCartDrawer: boolean;
    drawerType: "cart" | "location" | null
}

const initialState: DrawerState = {
    openCartDrawer: true,
    drawerType: null
}

export const drawerSlice = createSlice({
    name: 'drawer',
    initialState,
    reducers: {
        handleSideDrawer: (state, action: PayloadAction<boolean>) => {
            state.openCartDrawer = action.payload
        },
        setDrawerType: (state, action: PayloadAction<"cart" | "location">) => {
            state.drawerType = action.payload
        }
    },
});

export const { handleSideDrawer, setDrawerType } = drawerSlice.actions;

export default drawerSlice.reducer;
