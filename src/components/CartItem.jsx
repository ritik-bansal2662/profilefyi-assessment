import React from 'react'
import { Link } from 'react-router-dom'

const CartItem = ({productId, image, price, name, description, qty}) => {
  return (
    <div class="w-full p-2 flex flex-row justify-start items-center gap-3">
        <img src={image} alt={name} class="w-40 h-40 object-contain" />
        
        <article className='flex flex-col items-center gap-1'>
            <Link to={`/product/${productId}`} className='text-xl hover:text-slate-600	'>{name}</Link>
            <span className='font-bold'>₹ {price}</span>
        </article>
        <div className='ml-auto flex items-center'>
            <button className='bg-red-600 hover:bg-red-500 text-white font-bold w-full h-full px-2 m-2 rounded'>-</button>
            <p>{qty}</p>
            <button className='bg-green-700 hover:bg-green-600 text-white font-bold w-full h-full px-2 m-2 rounded'>+</button>
        </div>

        <button className='bg-red-600 hover:bg-red-500 text-white px-4 m-4 rounded'>Remove</button>
    </div>
  )
}

export default CartItem
