import { Bars3BottomRightIcon, BeakerIcon, XMarkIcon } from '@heroicons/react/16/solid'
import React, { useState } from 'react'
import { AiFillHome } from 'react-icons/ai';
import { FaCartShopping } from 'react-icons/fa6';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';



const Header = () => {
    let [open, setOpen] =useState(false);

    const {cartItems} = useSelector((state) => state.cart)
    // console.log('cartItems: ', cartItems);

  return (
    <div className='shadow-md w-full fixed top-0 left-0'>
        <div className='md:px-10 py-4 px-7 md:flex justify-between items-center bg-white py-4'>
            {/* logo Here */}
            <div className='flex text-2xl cursor-pointer items-center gap-2'>
                <BeakerIcon className='w-7 h-7 text-blue-600' />
                <span className='font-bold'>ProfileFYI</span>
            </div>

            {/* Menu icon */}
            <div onClick={()=>setOpen(!open)} className='absolute right-8 top-6 cursor-pointer md:hidden w-7 h-7'>
            {
                open ? <XMarkIcon/> : <Bars3BottomRightIcon />
            }
            </div>

            {/* Nav Links Here */}
            <div>
                <ul className={`md:flex md:items-center md:pb-0 pb-12 absolute md:static bg-white md:z-auto z-[-1] left-0 w-full md:w-auto md:pl-0 pl-9 transition-all duration-500 ease-in ${open ? 'top-12' : 'top-[-490px]'}`}>
                    <li className='font-semifold my-7 md:my-0 md:ml-8'>
                        <Link to="/" className='text-3xl' onClick={() => setOpen(false)}>
                            <AiFillHome />
                        </Link>
                    </li>
                    <li className='font-semifold my-7 md:my-0 md:ml-8'>
                        <Link className='relative text-3xl' to="/cart" onClick={() => setOpen(false)}>
                            <FaCartShopping />
                            {
                                cartItems.length > 0 && <span class="absolute bg-red-600 text-red-100 px-2 py-1 text-xs font-bold rounded-full -top-3 left-5 md:-right-4">{cartItems.length}</span>
                            }
                        </Link>
                    </li>
                    <li className='font-semifold my-7 md:my-0 md:ml-8'><Link to="/contact-us" className='text-xl' onClick={() => setOpen(false)}>Contact Us</Link></li>
                    {
                        // links.map( (link, index) => <li key={index} className='font-semifold my-7 md:my-0 md:ml-8'><Link to={link.path}>{link.name}</Link></li>)
                    }
                    <Link to='/login' onClick={() => setOpen(false)} className='text-xl btn bg-blue-600 text-white md:ml-8 font-semibold px-3 py-1 rounded duration-500 md:static'>Login</Link>
                </ul>
            </div>
        </div>
    </div>
  )
}

export default Header
