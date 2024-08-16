import React from 'react'
import { Link } from 'react-router-dom'

const CartItem = ({productId, image, price, name, category, qty, stock, changeQuantityHandler, removeHandler}) => {
  const cartItem = {
    productId, 
    productImage:image, 
    name, 
    price,
    category,
    quantity:qty,
    stock,
  }
  return (
    <div className="w-full p-2 m-2 flex flex-col xs:flex-col sm:flex-col md:flex-col lg:flex-row xl:flex-row justify-start items-center gap-3 border-2 border-solid rounded-md shadow-lg">
        <img src={image} alt={name} className="w-40 h-40 object-contain" />
        
        <article className='flex flex-col items-left gap-1'>
            <span class="bg-green-100 w-fit text-green-800 text-xs font-medium me-2 px-3 py-1 rounded-full dark:bg-green-900 dark:text-green-300">{category}</span>
            <Link to={`/product/${productId}`} className='text-base md:text-xl  w-fit hover:text-slate-600'>{name}</Link>
            <span className='font-bold'>₹ {price}</span>
        </article>
        <div className='lg:ml-auto lg:mr-0 mx-auto flex md:flex-row flex-col'>
          <div className='flex lg:justify-end justify-center items-center'>
              <button className='bg-red-600 hover:bg-red-500 text-white font-bold w-8 h-8 px-2 m-2 rounded' onClick={() => changeQuantityHandler(cartItem, -1)}>-</button>
              <p>{qty}</p>
              <button className='bg-green-700 hover:bg-green-600 text-white font-bold w-8 h-8 px-2 m-2 rounded' onClick={() => changeQuantityHandler(cartItem, 1)}>+</button>
          </div>

          <button className='bg-red-600 hover:bg-red-500 text-white px-4 m-4 rounded' onClick={() => removeHandler(productId)}>Remove</button>
        </div>
    </div>
  )
}

export default CartItem
