import { configureStore } from "@reduxjs/toolkit";
import productReducer from '../features/product/productSlice'
import cartReducer from '../features/cart/cartSlice'
import { productApi } from "../redux/api/productApi";


export const store = configureStore({
    reducer: {
        'product':productReducer,
        "cart":cartReducer,
        [productApi.reducerPath] : productApi.reducer,
    },
    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware().concat(productApi.middleware),
})
