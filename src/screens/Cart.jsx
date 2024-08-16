import React, { useEffect, useState } from 'react'
import CartItem from '../components/CartItem'
import { Link } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { addToCart, calculatePrice, removeFromCart } from '../features/cart/cartSlice'
import toast from 'react-hot-toast'

const Cart = () => {
    const [couponCode, setCouponCode] = useState("")
    const [isCouponValid, setIsCouponValid] = useState(false)

    const dispatch = useDispatch()

    
    const {cartItems, subtotal, tax, total, shippingCharges, discount, shippingAddress} = useSelector((state) => state.cart)
    console.log('cartItems: ', cartItems);
    useEffect(() => {
        dispatch(calculatePrice())
    }, [cartItems, dispatch])

    const changeQtyHandler = (cartItem, change) => {
        console.log("change qty handler", change);
        if(change === -1 && cartItem.quantity === 0) {
            toast.error("Quantity cannot be less than Zero.")
            return;
        }
        else if(change === 1 && cartItem.quantity === cartItem.stock) {
            toast.error("No more stock available.")
            return
        }
        
        
        dispatch(addToCart({...cartItem, quantity : cartItem.quantity + change}))
    }

    const removeCartItemHandler = (productId) => {
        console.log("remove handler",productId);
        
        dispatch(removeFromCart(productId))
    }
    

  return (
    <div className='h-[calc(100vh-4rem)] w-screen sm:w-full md:p-4 p-1 flex flex-auto flex-wrap md:flex-nowrap justify-between gap-4'>
        <main className='w-full md:w-3/4'>
        {
            cartItems.length > 0 ? (
                cartItems.map((item, idx) => (
                    <CartItem 
                        key={item.productId}
                        productId={item.productId}    
                        name={item.name}
                        image={item.productImage}
                        price={item.price}
                        category={item.category}
                        qty={item.quantity}
                        stock={item.stock}
                        changeQuantityHandler = {changeQtyHandler}
                        removeHandler={removeCartItemHandler}
                    />
                ))
            ) : (
                <h1 className='text-3xl'>No Items in the cart.</h1>
            )
        }

        </main>
        <aside className='w-full md:w-1/4 p-2 lg:p-4 m-2 flex flex-col justify-start gap-4 border-2 border-solid rounded-md shadow-lg'>
            <p>Subtotal: ₹{subtotal}</p>
            <p>Shipping Charges: ₹{shippingCharges}</p>
            <p>Tax: ₹{tax}</p>
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
