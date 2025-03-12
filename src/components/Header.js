import { Bars3Icon } from '@heroicons/react/24/outline'
import { Bars3CenterLeftIcon, MagnifyingGlassIcon, ShoppingCartIcon } from '@heroicons/react/24/outline'
import Image from 'next/image'
import React from 'react'

function Header() {
  return (
    <div className='text-white w-fit'>
      <div className='bg-[#131A22] flex items-center w-full'>
      <div className='flex-grow md:flex-grow-0'>
      <Image width={110} height={40} objectFit='contain' className='w-26 mr-3 ml-2 h-12 text-white p-2 cursor-pointer' src='https://links.papareact.com/f90' alt='amazon'/>
      </div>
       <div className='hidden sm:flex items-center flex-grow bg-yellow-600 hover:bg-yellow-500 my-5 rounded-md cursor-pointer'>
       <input className='rounded-l-md flex-grow flex-shrink outline-none text-black px-2 py-2 font-semibold text-sm'/>
       <MagnifyingGlassIcon className='h-5 w-5 mx-3 text-black font-bold '/>
       </div>
      <div className='flex text-xs whitespace-nowrap items-center space-x-5 mx-5 px-2'>
      <div className='link'>
        <p className='text-xs'>Hello, Amogh Patil</p>
        <p className='font-extrabold md:text-sm'>Account & Lists</p>
       </div>
       <div className='link'>
        <p className='text-xs'>Returns</p>
        <p className='font-extrabold md:text-sm'>& Orders</p>
       </div>
       <div className='flex items-center link relative py-1'>
       <span className='text-black font-bold h-4 w-4 rounded-full bg-yellow-500 text-center absolute top-1 left-8 cursor-pointer'>0</span>
        <ShoppingCartIcon className='w-9 h-9'/>
          <p className='hidden md:inline mt-3 font-extrabold md:text-sm'>Basket</p>
       </div>
      </div>
      </div>
      <div className='bg-[#232F3E] py-2 px-3 flex items-center text-xs w-fit space-x-3'>
        <div className='flex items-center'>
        <Bars3Icon className='w-5 h-5'/>
        <p className='mx-1 link'>All</p>
        </div>
        <p className='link'>Prime Video</p>
        <p className='link'>Amazzon Business</p>
        <p className='link'>Today's Deals</p>
        <p className='link hidden md:inline-flex'>Electronics</p>
        <p className='link hidden md:inline-flex'>Food & Grocery</p>
        <p className='link hidden md:inline-flex'>Prime</p>
        <p className='link hidden md:inline-flex'>Buy Again</p>
        <p className='link hidden md:inline-flex'>Shoopers Toolkit</p>
        <p className='link hidden md:inline-flex'>Health & Personal care</p>
      </div>
    </div>
  )
}

export default Header
