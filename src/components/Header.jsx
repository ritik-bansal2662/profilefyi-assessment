import { Bars3BottomRightIcon, BeakerIcon, XMarkIcon } from '@heroicons/react/16/solid'
import React, { useState } from 'react'
import { Link } from 'react-router-dom';

const Header = () => {
    let [open, setOpen] =useState(false);

    let links = [
        {name:'Home', path:'/'},
        {name:'Cart', path:'/cart'},
        {name:'Contact Us', path:'/contact-us'},
    ]

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
                    {
                        links.map( link => <li className='font-semifold my-7 md:my-0 md:ml-8'><Link to={link.path}>{link.name}</Link></li>)
                    }
                    <Link to='/login' className='btn bg-blue-600 text-white md:ml-8 font-semibold px-3 py-1 rounded duration-500 md:static'>Login</Link>
                </ul>
            </div>
        </div>
    </div>
  )
}

export default Header
