'use client'
import { MdOutlineMenu } from "react-icons/md";
import React, { useState, useEffect } from 'react';
import { MdArrowForwardIos } from "react-icons/md";

const Header1 = () => {

    const initialTime = 3 * 60 * 60 + 43 * 60 + 24; 
  const [timeRemaining, setTimeRemaining] = useState(initialTime);

  useEffect(() => {
    const intervalId = setInterval(() => {
      
      setTimeRemaining(prevTime => prevTime - 1);
    }, 1000);

 
    return () => clearInterval(intervalId);
  }, []);

  
  const hours = Math.floor(timeRemaining / 3600);
  const minutes = Math.floor((timeRemaining % 3600) / 60);
  const seconds = timeRemaining % 60;
  return (
    
    <div className='justify-evenly flex bg-gray-700 h-11 text-white items-center text-sm'> 
        <div>
            <div className='flex items-center text-white hover:border 1 '><MdOutlineMenu size={32} /> All</div>

        </div>
        <div className="hover:border 1 p-1">Fresh</div>
            <div className="hover:border 1 p-1">Amazon miniTv</div>
            <div className="hover:border 1 p-1">Sell</div>
            <div className="hover:border 1 p-1">Best Sellers</div>
            <div className="hover:border 1 p-1">Today's Deals</div>
            <div className="hover:border 1 p-1">Mobiles</div>
            <div className="hover:border 1 p-1">Electronics</div>
            <div className="hover:border 1 p-1">Prime</div>
            <div className="hover:border 1 p-1">Gift Ideas</div>
            <div className="hover:border 1 p-1">Customer Service</div>
            <div className="hover:border 1 p-1">New Releases</div>
            <div className='flex flex-col text-center'>Great Republic Day Sale <a>Ends in</a></div>
            <div className='text-xl' >  {String(hours).padStart(2, '0')} {String(minutes).padStart(2, '0')} {String(seconds).padStart(2, '0')}</div>
            <div className="cursor-pointer"><MdArrowForwardIos/></div>
    </div>
  ) 
}

export default Header1