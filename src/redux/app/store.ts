import { configureStore } from '@reduxjs/toolkit'
import { apiSlice } from "../features/api/apiSlice"
import authReducer from '../features/auth/authSlice'

import {
  persistReducer,
  persistStore,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import productReducer from '../features/product/productSlice';
import cartReducer from '../features/cart/cartSlice';
import categoryReducer from '../features/category/categorySlice';
import drawerReducer from "../features/drawer/drawerSlice"
import addressReducer from "../features/address/addressSlice"

const persistConfig = {
  key: 'auth',
  storage,
};

const persistedAuthReducer = persistReducer(persistConfig, authReducer);
const persistedCartReducer = persistReducer(persistConfig, cartReducer);
const persistedAddressReducer = persistReducer(persistConfig, addressReducer);

export const store = configureStore({
  reducer: {
    [apiSlice.reducerPath]: apiSlice.reducer,
    auth: persistedAuthReducer,
    product: productReducer,
    cart: persistedCartReducer,
    category: categoryReducer,
    drawer: drawerReducer,
    address: persistedAddressReducer
  },
  middleware: (getDefaultMiddlewares) =>
    getDefaultMiddlewares({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }).concat(apiSlice.middleware),
})

export type RootState = ReturnType<typeof store.getState>

export type AppDispatch = typeof store.dispatch

export const persistor = persistStore(store);