import React from 'react'
import Image from 'next/image'
import Best1 from '../../public/Best1.jpg'
import Best2 from '../../public/Best2.jpg'
import Best3 from '../../public/Best3.jpg'
import Best4 from '../../public/Best4.jpg'
import Best5 from '../../public/Best5.jpg'
import Best6 from '../../public/Best6.jpg'
import Best7 from '../../public/Best7.jpg'
import Best8 from '../../public/Best8.jpg'

const Bestseller = () => {
  return (
    <div className='mt-8 shadow-xl bg-white m-4 space-y-4 p-4 '>
        <div className='font-bold text-2xl '>Best Sellers in Clothing & Accessories</div>
        <div className='flex bg-white space-x-16 '>
            <Image src={Best1} alt='no image found'className='h-52 w-28'/>
            <Image src={Best2} alt='no image found'className='h-52'/>
            <Image src={Best3} alt='no image found'className='h-52 w-28'/>
            <Image src={Best4} alt='no image found'className='h-52 w-28'/>
            <Image src={Best5} alt='no image found'className='h-52 w-28'/>
            <Image src={Best6} alt='no image found'className='h-52 w-28'/>
            <Image src={Best7} alt='no image found'className='h-52 w-28'/>
            <Image src={Best8} alt='no image found' className='h-52 w-28'/>
            

        </div>
    </div>
  )
}

export default Bestseller