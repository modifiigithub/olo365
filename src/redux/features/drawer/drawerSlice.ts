import { createSlice, PayloadAction } from '@reduxjs/toolkit';

type TDrawerType = "cart" | "address"

interface DrawerState {
    openCartDrawer: boolean;
    drawerType: TDrawerType | null
}

const initialState: DrawerState = {
    openCartDrawer: false,
    drawerType: null
}

export const drawerSlice = createSlice({
    name: 'drawer',
    initialState,
    reducers: {
        handleSideDrawer: (state, action: PayloadAction<boolean>) => {
            state.openCartDrawer = action.payload
        },
        setDrawerType: (state, action: PayloadAction<TDrawerType>) => {
            state.drawerType = action.payload
        }
    },
});

export const { handleSideDrawer, setDrawerType } = drawerSlice.actions;

export default drawerSlice.reducer;
