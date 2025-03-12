import { StarIcon } from '@heroicons/react/16/solid'
import Image from 'next/image'
import React, { useState } from 'react'
import Currency from 'react-currency-formatter';

function Product({id, title, price, description, category, image}) {
    const [rating] = useState(Math.floor(Math.random()*5)+1);
    const [hasPrime] = useState(Math.random()<0.5)
  return (
    <div className='relative flex flex-col bg-white z-30 p-10 m-3'>
      <p className='absolute top-2 right-2 italics text-xs text-gray-500'>{category}</p>   
      <Image src={image} height={120} width={120} alt={title} className='mx-auto mb-auto object-contain'/>
     <p className='text-sm my-2 font-semibold'>{title}</p>
      <div className='flex mb-2'>
        {Array(rating)
          .fill()
          .map((_,i)=>(
          <StarIcon className='h-4 text-yellow-500'/>
          ))}
      </div>
      <p className='text-xs line-clamp-2 my-2'>{description}</p>
    
      <div className='font-semibold mb-5'>
        <Currency quantity={price} currency='INR'/>
      </div>
      {hasPrime&&
        <div className='flex items-center space-x-2 mb-5'>
         <img
          className='w-7' 
          src='https://upload.wikimedia.org/wikipedia/commons/thumb/e/e3/Amazon_Prime_Logo.svg/2560px-Amazon_Prime_Logo.svg.png' alt='prime'/>
         <p className='text-xs text-gray-500 mb-1 font-semibold'>Free next day delivery</p>
        </div>}
      <button className='mt-5 button'>Add to Basket</button>
    </div>
  )
}

export default Product
