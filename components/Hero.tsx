"use client";
import React from 'react';
import Image from "next/image";
import CustomButton from './CustomButton';
const Hero = () => {
const handleScroll=()=>{
}

  return (
    <div className='hero '>
    <div className='  flex-1 pt-36 padding-x'>
     <h1 className='hero__title'>
   Find,book,or rent a car-quickly and easily !
     </h1>
     <p className='hero__subtitle'>

         Streamline your travel experience with the best car rental deals around.
     </p>

     <CustomButton
          title="Explore Cars"
          handleClick={handleScroll}
          containerStyles="bg-primary-blue text-white rounded-full mt-10"
        />
    </div>
    
    <div className="hero__image-container">
        <div className="hero__image">
        <div className="hero__image-overlay w-full" />
   
          <Image src="/hero.png" alt="hero" fill className="object-contain" />
         
        </div>
        <div className="hero__image-overlay " />
     
      </div>
    </div>
    
    
  )
}

export default Hero;