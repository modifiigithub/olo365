import { createSlice, PayloadAction } from '@reduxjs/toolkit';

type TDrawerType = "cart" | "address" | "category" | null

interface DrawerState {
    openCartDrawer: boolean;
    drawerType: TDrawerType | null;
    bottomCartDrawer: boolean;
}

const initialState: DrawerState = {
    openCartDrawer: false,
    drawerType: null,
    bottomCartDrawer: false
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
        },
        closeDrawer: (state) => {
            state.drawerType = null;
            state.openCartDrawer = false;
        },
        handleBottomCartDrawer: (state, action: PayloadAction<boolean>) => {
            state.bottomCartDrawer = action.payload
        }
    },
});

export const { handleSideDrawer, setDrawerType, closeDrawer, handleBottomCartDrawer } = drawerSlice.actions;

export default drawerSlice.reducer;
