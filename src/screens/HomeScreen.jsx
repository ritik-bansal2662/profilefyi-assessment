import React from 'react'
import Product from '../components/Product'
import { useLatestProductsQuery } from '../redux/api/productApi';
import { toast } from 'react-toastify';
import SkeletalLoader from '../components/SkeletalLoader';
import { useDispatch, useSelector } from 'react-redux';
import { addToCart } from '../features/cart/cartSlice';


const HomeScreen = () => {

    // const {products} = useSelector((state) => state.products)
    // console.log('products, in home screen: ', products);

    const { data, isLoading, isError } = useLatestProductsQuery();
    console.log('data: ', data);
    console.log('isLoading: ', isLoading);
    console.log('isError: ', isError);
    

    if(isError) toast.error("Could not fetch the products") 

    
    const dispatch = useDispatch()
    
    
    const addToCartHandler = (cartItem) => {
        console.log("Product added to cart");
        if(cartItem.stock < 1) return toast.error("Out of Stock.")

        
          dispatch(addToCart(cartItem))

          toast.success("Added to Cart")

    }

  return (
    <div className='p-2 md:p-0'>
      <h1 className='text-3xl m-2'>Latest Products</h1>
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
                    price={(product.price * 80).toFixed(2)}
                    category={product.category} 
                    stock={5} 
                    handler={addToCartHandler} 
                />
            )))
        }
      </section>
    </div>
  )
}

export default HomeScreen
