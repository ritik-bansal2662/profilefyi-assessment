import React, { useState } from 'react'
import CartItem from '../components/CartItem'
import { Link } from 'react-router-dom'

const cartItems = [{
    productId:"1",
    productName:'Titan Watch',
    productImage:"https://media.istockphoto.com/id/1359180038/photo/wristwatch.jpg?s=612x612&w=0&k=20&c=AWkZ-gaLo601vG5eiQcsjYRjCjDxZdGL7v-jWvvAjEM=",
    price:2000,
    quantity:1,
    stock:20,
    description: "Antique Titan watch."
}]
const subTotal = 4000
const tax = Math.round(subTotal * 0.18)
const shippingCharges = 200
const discount = 400
const total = subTotal + tax + shippingCharges - discount

const Cart = () => {
    const [couponCode, setCouponCode] = useState("")
    const [isCouponValid, setIsCouponValid] = useState(false)
  return (
    <div className='h-[calc(100vh-4rem)] w-full p-4 flex justify-between gap-4'>
        <main className='w-3/4'>
        {
            cartItems.length > 0 ? (
                cartItems.map((item, idx) => (
                    <CartItem 
                        key={item.productId}
                        productId={item.productId}    
                        name={item.productName}
                        image={item.productImage}
                        price={item.price}
                        description={item.description}
                        qty={item.quantity}
                    />
                ))
            ) : (
                <h1 className='text-3xl'>No Items in the cart.</h1>
            )
        }

        </main>
        <aside className='w-1/4 flex flex-col justify-start gap-4'>
            <p>Subtotal: ₹{subTotal}</p>
            <p>Shipping Charges: ₹{shippingCharges}</p>
            <p>tax: ₹{tax}</p>
            <p>Discount: <em className='text-[#ff0000]'> - ₹{discount} </em></p>
            <b  className=''>Total: ₹{total}</b>
            <input type='text' className='p-1 outline-none border-2 border-zinc-950 rounded' value={couponCode} placeholder='Enter Coupon Code' onChange={(e) => setCouponCode(e.target.value)} />
            {
                couponCode && (isCouponValid ? (
                    <span className='text-[#1b9600]'>₹{discount} off using the <code>{couponCode}</code></span>
                ) : (
                    <span className='text-[#ff0000]'>Invalid Coupon Code</span>
                )
            )}

            { cartItems.length > 0 && <Link to='/shipping' className='bg-black px-4 p-2 text-white uppercase tracking-widest w-fit rounded hover:opacity-80'>Checkout</Link>}
        </aside>
      
    </div>
  )
}

export default Cart
