import { Bars3BottomRightIcon, BeakerIcon, XMarkIcon } from '@heroicons/react/16/solid'
import React, { useState } from 'react'
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
                        <Link to="/">
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="size-6">
                                <path d="M11.47 3.841a.75.75 0 0 1 1.06 0l8.69 8.69a.75.75 0 1 0 1.06-1.061l-8.689-8.69a2.25 2.25 0 0 0-3.182 0l-8.69 8.69a.75.75 0 1 0 1.061 1.06l8.69-8.689Z" />
                                <path d="m12 5.432 8.159 8.159c.03.03.06.058.091.086v6.198c0 1.035-.84 1.875-1.875 1.875H15a.75.75 0 0 1-.75-.75v-4.5a.75.75 0 0 0-.75-.75h-3a.75.75 0 0 0-.75.75V21a.75.75 0 0 1-.75.75H5.625a1.875 1.875 0 0 1-1.875-1.875v-6.198a2.29 2.29 0 0 0 .091-.086L12 5.432Z" />
                            </svg>
                        </Link>
                    </li>
                    <li className='font-semifold my-7 md:my-0 md:ml-8'>
                        <Link className='relative' to="/cart">
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="size-6">
                                <path d="M2.25 2.25a.75.75 0 0 0 0 1.5h1.386c.17 0 .318.114.362.278l2.558 9.592a3.752 3.752 0 0 0-2.806 3.63c0 .414.336.75.75.75h15.75a.75.75 0 0 0 0-1.5H5.378A2.25 2.25 0 0 1 7.5 15h11.218a.75.75 0 0 0 .674-.421 60.358 60.358 0 0 0 2.96-7.228.75.75 0 0 0-.525-.965A60.864 60.864 0 0 0 5.68 4.509l-.232-.867A1.875 1.875 0 0 0 3.636 2.25H2.25ZM3.75 20.25a1.5 1.5 0 1 1 3 0 1.5 1.5 0 0 1-3 0ZM16.5 20.25a1.5 1.5 0 1 1 3 0 1.5 1.5 0 0 1-3 0Z" />
                            </svg>
                            {
                                cartItems.length > 0 && <span class="absolute bg-red-600 text-red-100 px-2 py-1 text-xs font-bold rounded-full -top-3 -right-4">{cartItems.length}</span>
                            }
                        </Link>
                    </li>
                    <li className='font-semifold my-7 md:my-0 md:ml-8'><Link to="/contact-us">Contact Us</Link></li>
                    {
                        // links.map( (link, index) => <li key={index} className='font-semifold my-7 md:my-0 md:ml-8'><Link to={link.path}>{link.name}</Link></li>)
                    }
                    <Link to='/login' className='btn bg-blue-600 text-white md:ml-8 font-semibold px-3 py-1 rounded duration-500 md:static'>Login</Link>
                </ul>
            </div>
        </div>
    </div>
  )
}

export default Header
