import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    products: [{ id:1, name: "sneaker", price:"4000", rating:"4.7", brand:"nike"}]
}

export const productSlice = createSlice({
    name: 'product',
    initialState,
    reducers: {
        getProducts: (state, action) => {} 
    }
})

export const {getProducts} = productSlice.actions

export default productSlice.reducer
