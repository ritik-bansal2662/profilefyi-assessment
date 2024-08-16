import React from 'react'

const Product = ({ productId, productImage, name, price, category, stock, handler }) => {
  const cartItem = {
    productId, 
    productImage, 
    name, 
    price,
    stock,
    category,
    quantity:1
  }
  return (
    <div className="w-72 p-4 mx-auto overflow-hidden shadow-lg border-2 rounded-sm justify-center">
          <img src={productImage} alt='product' />
        <span class="bg-green-100 w-fit text-green-800 text-xs font-medium me-2 px-3 py-1 rounded-full dark:bg-green-900 dark:text-green-300">{category}</span>
        <p className='w-full flex justify-center'>{name}</p>
        <span className='w-full flex justify-center text-xl font-bold block'>₹ {price}</span>
        <div className=' flex justify-center'>
            <button className='bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full' onClick={() => handler(cartItem)}>Add to Cart</button>
        </div>
    </div>
  )
}

export default Product
