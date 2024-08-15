import { configureStore } from "@reduxjs/toolkit";
import productReducer from '../features/product/productSlice'
import { productApi } from "../redux/api/productApi";


export const store = configureStore({
    reducer: {
        [productReducer.name]:productReducer,
        [productApi.reducerPath] : productApi.reducer,
    },
    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware().concat(productApi.middleware),
})
