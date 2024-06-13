import { createSlice, PayloadAction } from '@reduxjs/toolkit';

type TDrawerType = "cart" | "address" | "category" | null

interface DrawerState {
    openDrawer: boolean;
    drawerType: TDrawerType | null;
    bottomCartDrawer: boolean;
    searchModalMode: boolean
}

const initialState: DrawerState = {
    openDrawer: false,
    drawerType: null,
    bottomCartDrawer: false,
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
        handleBottomCartDrawer: (state, action: PayloadAction<boolean>) => {
            state.bottomCartDrawer = action.payload
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
    handleBottomCartDrawer,
    handleSearchModal
} = drawerSlice.actions;

export default drawerSlice.reducer;
