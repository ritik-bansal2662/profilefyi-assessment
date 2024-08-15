import React from 'react'
import Product from '../components/Product'

const addToCart = () => {
    console.log("Product added to cart");
    
}

const HomeScreen = () => {
  return (
    <div>
      <h1 className='text-3xl'>Latest Products</h1>
      <section className=''>
        <Product productId="1" name={`Titan Watch`} productImage={`https://media.istockphoto.com/id/1359180038/photo/wristwatch.jpg?s=612x612&w=0&k=20&c=AWkZ-gaLo601vG5eiQcsjYRjCjDxZdGL7v-jWvvAjEM=`} price={2000} stock={20} handler={addToCart} />
      </section>
    </div>
  )
}

export default HomeScreen
