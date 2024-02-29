'use client'
import React from 'react'
import '../app/globals.css'
import Logo from '../../public/Logo.png'
import { GrLocation } from "react-icons/gr"
import Image from 'next/image'
import { MdOutlineArrowDropDown } from "react-icons/md"
import { IoSearch } from "react-icons/io5";
import { useState, useEffect } from 'react'
import { FiShoppingCart } from "react-icons/fi";


const Header = () => {
    const[drop, openDrop] = useState(false);
    const handleClick= () => {openDrop(!drop)}


  return (
    <div className='justify-evenly '> 
        <div className='bg-black h-auto px-2 py-4 flex items-center justify-evenly'> 
        <div>< Image src={Logo} className='w-36 h-12 hover:border 1 p-2 cursor-pointer' alt='No Image Found'/></div>
        <div className='flex hover:border 1 p-1 cursor-pointer space-x-1 '>
            <GrLocation className='text-white mt-3'  /> 
            <div className='flex flex-col' >
                <span className='text-white text-[12px] font-extralight '>Delivering to Hyderabad 500076</span> 
                <span className='text-white text-sm font-bold'>Update Location</span>
                </div>
                </div>
                <div className='flex items-center hover:border-2 hover:border-orange-400 hover:rounded-xl'>
                    <div className='text-black bg-gray-300 text-[10px] font-mono h-10 w-16 p-3 flex rounded-l-lg'>All
                    <div className='ml-2 h-10 w-20'><MdOutlineArrowDropDown className='w-4 h-4 cursor-pointer' onClick={handleClick}/>{
                        drop &&(
                            <ul className='w-48 h-auto bg-black p-4 text-[15px] text-white rounded-lg opacity-60 font-sans static cursor-pointer mt-2'>
                                <li>All categories</li>
                                <li>Alexa Skills</li>
                                <li>Amazon Devices</li>
                                <li>Amazon Fashion</li>
                                <li>Amazon Fresh</li>
                                <li>Amazon Pharmacy</li>
                                <li>Appliances</li>
                                <li>Apps & Games</li>
                                <li>Audible Audibooks</li>
                                <li>Baby</li>
                                <li>Beauty</li>
                                <li>Books</li>
                                <li>Car and Motorbike</li>
                                <li>Clothing & Accessories</li>
                                <li>Collectibles</li>
                                <li>Computer & Accessories</li>
                                <li>Electronics</li>
                                <li>Furniture</li>
                                <li>Garden & Outdoors</li>
                                <li>Gift Cards</li>
                                <li>Grocery & Gourment Food</li>
                                <li>Health & Personal Care</li>
                                <li>Home & Kitchen</li>
                                <li>Industrial & Scientific</li>
                                <li>Jewellery</li>
                                <li>Kindle Store</li>
                                <li>Luggage & Bags</li>
                                <li>Luxury Beauty</li>
                                <li>Movies & Tv Shows</li>
                                <li>Music</li>
                                <li>Musical Instruments</li>
                                <li>Office Products</li>
                                <li>Pet Supplies</li>
                                <li>Prime Video</li>
                                <li>Shoes & Handbags</li>
                                <li>Software</li>
                                <li>Sports, Fitness & Outdoors</li>
                                <li>Subscribe & Save</li>
                                <li>Tools & Home Improvement</li>
                                <li>Toys & Games</li>
                                <li>Under ₹500</li>
                                <li>Video Games</li>
                                <li>Watches</li>
                                </ul>
                            

                        )
                    }</div>
                    </div>
                    <input type='search' 
                    className='w-[600px] h-10 pl-4 text-[14px] '
                    placeholder='Search Amazon.in'/>
                    <div className='bg-orange-300 h-10 w-12 rounded-r-lg p-3'> <IoSearch size={20}/></div>
                </div>
                <div className='text-white flex hover:border 1 p-1 cursor-pointer'>EN <MdOutlineArrowDropDown/> </div>
                <div className='flex flex-col hover:border 1 p-1' >
                <span className='text-white text-[12px] font-extralight '>Hello, Sign in </span> 
                <span className='text-white text-sm font-bold'>Accounts & Lists</span>
                
                </div>
                <div className='flex flex-col hover:border 1 p-1' >
                <span className='text-white text-[12px] font-extralight '>Returns</span> 
                <span className='text-white text-sm font-bold'>& Orders</span>
                
                </div>
                <div className='flex'><FiShoppingCart  className='text-white' size={30}/> <div className='text-white mt-2'>Cart</div></div>
        </div>
        
    </div>
  )
}

export default Header