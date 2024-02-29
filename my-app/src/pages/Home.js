'use client'
import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import Amazon1 from '../../public/Amazon.jpg';
import Amazon2 from '../../public/Amazon2.png';
import Amazon3 from '../../public/Amazon3.jpg';
import Amazon4 from '../../public/Amazon4.jpg';
import Amazon5 from '../../public/Amazon5.jpg';
import Amazon6 from '../../public/Amazon6.jpg';
import Amazon7 from '../../public/Amzon7.jpg';
import Amazon8 from '../../public/Amazon8.jpg';
import Grid1 from '../../public/Grid1.jpg'
import Grid2 from '../../public/Grid2.jpg'
import Grid3 from '../../public/Grid3.jpg'
import Grid4 from '../../public/Grid4.jpg'
import Grid5 from '../../public/Grid5.jpg'
import Grid6 from '../../public/Grid6.jpg'
import Grid7 from '../../public/Grid7.jpg'
import Grid8 from '../../public/Grid8.jpg'
import Grid9 from '../../public/Grid9.jpg'
import Grid10 from '../../public/Grid10.jpg'
import Grid11 from '../../public/Grid11.jpg'
import Grid12 from '../../public/Grid12.jpg'
import Grid13 from '../../public/Grid13.jpg'
import Grid14 from '../../public/Grid14.jpg'
import Grid15 from '../../public/Grid15.jpg'
import Grid16 from '../../public/Grid16.jpg'
import Grid17 from '../../public/Grid17.jpg'
import Grid18 from '../../public/Grid18.jpg'
import Grid19 from '../../public/Grid19.jpg'
import Grid20 from '../../public/Grid20.jpg'
import Grid21 from '../../public/Grid21.jpg'
import Grid22 from '../../public/Grid22.jpg'
import Grid23 from '../../public/Grid23.jpg'
import Grid24 from '../../public/Grid24.jpg'
import Grid25 from '../../public/Grid25.jpg'
import Grid26 from '../../public/Grid26.jpg'
import Bestseller from './Bestseller';





const Home = () => {
  const images = [Amazon1, Amazon2, Amazon3, Amazon4, Amazon5, Amazon6, Amazon7, Amazon8];

  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  useEffect(() => {
    const intervalId = setInterval(() => {
      setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length);
    },10000);

    return () => clearInterval(intervalId);
  }, [images.length]);

  return (
    <div className="relative">
      <div className="flex transition-transform duration-500 ease-in-out " style={{ transform: `translateX(${-currentImageIndex * 100}%)` }}>
        {images.map((image, index) => (
          <Image
            key={index}
            src={image}
            alt={`Image ${index + 1}`}
            className=''
          />
        ))}
        
      </div>
     <div className='grid grid-rows-2 grid-cols-4 gap-4 absolute top-96 left-4 right-4  '>

        <div className='shadow-2xl p-4 space-y-10 bg-white h-[500px]'>
        <span className='text-2xl font-bold'>Starting ₹79 | Home decor and furnitures</span>
        <div className='grid grid-rows-2 grid-cols-2 gap-2 h-[350px]'>
            
            <div><Image src={Grid1} className='h-32'/> <div className='text-sm'>Curtains, carpets and more</div></div>
            <div><Image src={Grid2} className='h-32'/><div className='text-sm'>Showpieces, idols and more</div></div>
            <div><Image src={Grid3} className='h-32'/><div className='text-sm'>Storage Boxes, drawers and more</div></div>
            <div><Image src={Grid4} className='h-32'/><div className='text-sm'>Lighting for home</div></div>
        </div>
        <a className='cursor-pointer text-sm text-sky-700' href=''>See all offers </a>
        </div>
        <div className='shadow-2xl p-4 space-y-10 bg-white h-[500px]'>
        <span className='text-2xl font-bold'>Up to 65% off | Deals on wide range of TVs</span>
        <div className='grid grid-rows-2 grid-cols-2 gap-2 h-[350px]'>
            
            <div><Image src={Grid5} className='h-32'/> <div className='text-[12px]'>Budgets TVs | Starting ₹5,499</div></div>
            <div><Image src={Grid6} className='h-32'/><div className='text-[12px]'>4k TVs | Up to 18 months No cost EMI</div></div>
            <div><Image src={Grid7} className='h-32'/><div className='text-sm'>Storage Boxes, drawers and more</div></div>
            <div><Image src={Grid8} className='h-32'/><div className='text-sm'>Lighting for home</div></div>
        </div>
        <a className='cursor-pointer text-sm text-sky-700' href=''>See all deals </a>
        </div>
        <div className='shadow-2xl p-4 space-y-10 bg-white h-[500px]'>
        <span className='text-2xl font-bold'>Welcome offers just for you</span>
        <div className='h-[350px]'>
            
            <div><Image src={Grid9} className='h-80'/></div>
        </div>
        <a className='cursor-pointer text-sm text-sky-700' href=''>See all offers </a>
        </div>
        <div className='shadow-2xl p-4 space-y-10 bg-white h-[500px]'>
        <span className='text-2xl font-bold'>Deals on smartphones that suits your budget</span>
        <div className='grid grid-rows-2 grid-cols-2 gap-2 h-[350px]'>
            
            <div><Image src={Grid10} className='h-32'/> <div className='text-[12px]'>Budget | Under ₹10,000 </div></div>
            <div><Image src={Grid11}  className='h-32'/><div className='text-[12px]'>Mid range | ₹10,000 - ₹25,000</div></div>
            <div><Image src={Grid12} className='h-32'/><div className='text-[12px]'>Premium | ₹25,000 - ₹40,000</div></div>
            <div><Image src={Grid13} className='h-32'/><div className='text-[12px]'>Ultra-premium | Above ₹40,000 </div></div>
        </div>
        <a className='cursor-pointer text-sm text-sky-700' href=''>See all offers </a>
        </div>
        <div className='shadow-2xl p-4 space-y-10 bg-white h-[500px]'>
        <span className='text-xl font-bold'>Up to 70% off | Best sellers curated for your delight</span>
        <div className='grid grid-rows-2 grid-cols-2 gap-2 h-[350px]'>
            
            <div><Image src={Grid14} className='h-32'/> <div className='text-[13px]'>Upto 60% off | Appliances</div></div>
            <div><Image src={Grid15} className='h-32'/><div className='text-[13px]'>Upto 40% off | Furniture</div></div>
            <div><Image src={Grid16} className='h-32'/><div className='text-[13px]'>Upto 50% off | Home decors </div></div>
            <div><Image src={Grid17} className='h-32'/><div className='text-[13px]'>Upto 70% off | Kitchen </div></div>
        </div>
        <a className='cursor-pointer text-sm text-sky-700' href=''>See all deals </a>
        </div>
        <div className='shadow-2xl p-4 space-y-10 bg-white h-[500px]'>
        <span className='text-xl font-bold'>Up to 65% off | Bestselling appliances for your home</span>
        <div className='grid grid-rows-2 grid-cols-2 gap-4 h-[350px]'>
            
            <div><Image src={Grid18} className='h-32'/> <div className='text-[12px]'>Refrigerators | Up to 60% off</div></div>
            <div><Image src={Grid19} className='h-32'/><div className='text-[12px]'>Washing machines | Up to 60% off</div></div>
            <div><Image src={Grid20} className='h-32'/><div className='text-[12px]'>Ac | Up to 55% off</div></div>
            <div><Image src={Grid21} className='h-32'/><div className='text-[12px]'>Microwaves | Up to 60% off</div></div>
        </div>
        <a className='cursor-pointer text-sm text-sky-700' href=''>See all offers </a>
        </div>
        <div className='shadow-2xl p-4 space-y-10 bg-white h-[500px]'>
        <span className='text-xl font-bold'>Up to 75% off | Electronics & accessories</span>
        <div className=' h-[350px]'>
            
            <div><Image src={Grid22} className='h-80'/></div>
        
        </div>
        <a className='cursor-pointer text-sm text-sky-700' href=''>See all offers </a>
        </div>
        <div className='shadow-2xl p-4 space-y-10 bg-white h-[500px]'>
        <span className='text-xl font-bold'>Minimum 60% off | Deals on top brands</span>
        <div className='grid grid-rows-2 grid-cols-2 gap-4 h-[350px]'>
            
            <div><Image src={Grid23} className='h-32'/> <div className='text-sm'>Tops & tees</div></div>
            <div><Image src={Grid24} className='h-32'/><div className='text-sm'>Kurtas & kurtis</div></div>
            <div><Image src={Grid25} className='h-32'/><div className='text-sm'>Dresses & jumpsuits</div></div>
            <div><Image src={Grid26} className='h-32'/><div className='text-sm'>Sarees</div></div>
        </div>
        <a className='cursor-pointer text-sm text-sky-700' href=''>See all deals </a>
        </div>
    
     </div>
     <div className='absolute top-[1400px]'> 
      <div><Bestseller/></div>
      </div>
    </div>
    
  );
};

export default Home;
