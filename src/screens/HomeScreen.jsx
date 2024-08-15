import React from 'react'
import Product from '../components/Product'
import { useLatestProductsQuery } from '../redux/api/productApi';
import toast from 'react-hot-toast';
import SkeletalLoader from '../components/SkeletalLoader';


const HomeScreen = () => {
    
    const { data, isLoading, isError } = useLatestProductsQuery();
    // const response = useLatestProductsQuery();
    console.log('data: ', data);
    console.log('isLoading: ', isLoading);
    console.log('isError: ', isError);
    // console.log('response: ', response);

    if(isError) toast.error("Could not fetch the products") 
    
    
    const addToCart = () => {
        console.log("Product added to cart");
    }

  return (
    <div>
      <h1 className='text-3xl'>Latest Products</h1>
      <section className='flex flex-row justify-between gap-2 flex-wrap'> 
        {
            isLoading ? (
                <SkeletalLoader />
            ) : isError ? (
                <h1>Some Error Occurred. :&#40; </h1>
            ) :(
            data?.map((product) => (
                <Product 
                    productId={product.id} 
                    name={product.title} 
                    productImage={product.image} 
                    price={product.price} 
                    stock={20} 
                    handler={addToCart} 
                />
            )))
        }
      </section>
    </div>
  )
}

export default HomeScreen
