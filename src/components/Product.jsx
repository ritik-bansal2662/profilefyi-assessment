import React from 'react'

const Product = ({ productId, productImage, name, price,stock,handler }) => {
  return (
    <div className="max-w-sm p-2 overflow-hidden shadow-lg border-2 rounded-sm justify-center">
        <img className='w-full' src={productImage} alt='product' />
        <p className='w-full flex justify-center'>{name}</p>
        <span className='w-full flex justify-center text-xl font-bold block'>₹ {price}</span>
        <div className=' flex justify-center'>
            <button className='bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full' onClick={handler()}>Add to Cart</button>
        </div>
    </div>
  )
}

export default Product
