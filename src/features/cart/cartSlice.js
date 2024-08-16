import { createSlice} from "@reduxjs/toolkit";

const cartItems = localStorage.getItem('cart') !== null ? JSON.parse(localStorage.getItem('cart')) :  []

const initialState = {
    loading:false,
    cartItems:cartItems,
    subtotal:0,
    tax:0,
    shippingCharges:0,
    discount:0,
    total:0,
    shippingAddress:{
        address:"",
        city:"",
        state:"",
        country:"",
        pinCode:""
    }
}

export const cartSlice = createSlice({
    name:"cart",
    initialState,
    reducers: {
        addToCart:(state, action) => {
            state.loading=true
            
            const index = state.cartItems.findIndex((item) => item.productId === action.payload.productId)
            
            if(index !== -1) state.cartItems[index] = action.payload
            else state.cartItems.push(action.payload)

            localStorage.setItem('cart', JSON.stringify(state.cartItems.map(item => item)))

        },
        removeFromCart:(state, action) => {
            console.log('payload: ', action.payload);
            
            state.loading=true
            state.cartItems = state.cartItems.filter((item) => item.productId !== action.payload)
            state.loading=false

            localStorage.setItem('cart', JSON.stringify(state.cartItems.map(item => item)))
        },

        calculatePrice: (state) => {
            let subtotal = state.cartItems.reduce((acc, item) => acc + item.quantity*item.price , 0)

            state.subtotal = subtotal
            state.tax=Math.round(subtotal*0.18)
            state.discount = Math.round(subtotal*0.02)
            state.shippingCharges = subtotal < 1000 ? 0 : 200
            state.total = subtotal + state.tax + state.discount + state.shippingCharges

            localStorage.setItem('cart', JSON.stringify(state.cartItems.map(item => item)))
        }
    }
})

export const {addToCart, removeFromCart, calculatePrice } = cartSlice.actions

export default cartSlice.reducer