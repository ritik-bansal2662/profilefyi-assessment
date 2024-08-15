import React from 'react'

type ProductProps = {
    productId:String,
    image:String,
    name: String,
    price:number,
    stock:Number,
    handler: () => void
}

const Product = ({ productId, productImage, name, price,stock,handler }) => {
  return (
    <div>
      
    </div>
  )
}

export default Product
