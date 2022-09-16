import React from 'react'
import { useState } from 'react';
import { MenuIcon, XIcon } from '@heroicons/react/outline'
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';

const Navbar = () => {
  const [nav, setNav] = useState(false)
  const handleClick = () => setNav(!nav)
  const handleClose = () => setNav(!nav)
  const state = useSelector((state) => state.manageCart)
  return (
    <div className='w-screen h-14 bg-black  drop-shadow-lg fixed'>
      <div className='px-2 flex items-center justify-between h-full w-full'>
        <div className='flex items-center px-4'>
          <Link to="/"><h1 className='md:text-3xl font-extrabold font-nunito xs:mr-2 md:mr-4 xs:text-2xl text-black uppercase bg-white px-5 py-1 rounded-sm tracking-wider'>ShopKart</h1></Link>
          <ul className='hidden md:flex'>
            <li className='px-10 sm:px-5 py-2 rounded-md hover:text-grey-800 text-white font-bold hover:bg-white hover:text-black'><Link to='/'>Home</Link></li>
            <li className='px-10 py-2 rounded-md hover:text-grey-800 text-white font-bold hover:bg-white hover:text-black'><Link to='/products'>Products</Link></li>
            <li className='px-10 sm:px-5 py-2 rounded-md hover:text-grey-800 text-white font-bold hover:bg-white hover:text-black'><Link to='/about'>About</Link></li>
            <li className='px-10 py-2 rounded-md hover:text-grey-800 text-white font-bold hover:bg-white hover:text-black'><Link to='/contact'>Contact Us</Link></li>
          </ul>
        </div>
        <div className='hidden md:flex md:flex-row md:justify-end pr-4'>
          <Link to="/signin" className='flex flex-row bg-white text-black font-extrabold px-5 py-1.5 rounded-lg mr-4'>
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="mr-2 w-5 h-6">
              <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 9V5.25A2.25 2.25 0 0013.5 3h-6a2.25 2.25 0 00-2.25 2.25v13.5A2.25 2.25 0 007.5 21h6a2.25 2.25 0 002.25-2.25V15m3 0l3-3m0 0l-3-3m3 3H9" />
            </svg>
            Sign In
          </Link>
          <Link to="/register" className='flex flex-row bg-white text-black font-extrabold px-5 py-1.5 rounded-lg mr-4'>
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="mr-2 w-5 h-6">
              <path strokeLinecap="round" strokeLinejoin="round" d="M18 7.5v3m0 0v3m0-3h3m-3 0h-3m-2.25-4.125a3.375 3.375 0 11-6.75 0 3.375 3.375 0 016.75 0zM3 19.235v-.11a6.375 6.375 0 0112.75 0v.109A12.318 12.318 0 019.374 21c-2.331 0-4.512-.645-6.374-1.766z" />
            </svg>
            Join Us
          </Link>
          <Link to="/cart" className='flex flex-row bg-indigo-200 text-black font-extrabold px-5 py-1.5 rounded-lg'>
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="mr-3 w-5 h-6">
              <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 10.5V6a3.75 3.75 0 10-7.5 0v4.5m11.356-1.993l1.263 12c.07.665-.45 1.243-1.119 1.243H4.25a1.125 1.125 0 01-1.12-1.243l1.264-12A1.125 1.125 0 015.513 7.5h12.974c.576 0 1.059.435 1.119 1.007zM8.625 10.5a.375.375 0 11-.75 0 .375.375 0 01.75 0zm7.5 0a.375.375 0 11-.75 0 .375.375 0 01.75 0z" />
            </svg>
            Cart ({state.length})
          </Link>
        </div>
        <div className='md:hidden mr-4 cursor-pointer w-auto' onClick={handleClick}>
          {!nav ? <MenuIcon className='text-white w-8' /> : <XIcon className='text-white w-8' />}
        </div>
      </div>
      <ul className={!nav ? 'hidden' : 'absolute w-full px-6 pb-10 bg-black text-center font-bold text-white'}>
        <li className='border-b-2 border-white w-full py-5' onClick={handleClose}><Link to="/products">Products</Link></li>
        <li className='border-b-2 border-white w-full py-5' onClick={handleClose}><Link to="/about">About</Link></li>
        <li className='border-b-2 border-white w-full py-5' onClick={handleClose}><Link to="/contact">Contact Us</Link></li>
        <button className='border-b-2 border-white w-full py-5' onClick={handleClose}><Link to="signin">Sign In</Link></button>
        <button className='border-b-2 border-white w-full py-5 bg-gray-500 text-white' onClick={handleClose}><Link to='/register'>Sign Up</Link></button>
        <Link to="/cart" className='border-b-2 border-white w-full py-5'>Cart ({state.length})
        </Link>
      </ul>
    </div>
  )
}

export default Navbar;
