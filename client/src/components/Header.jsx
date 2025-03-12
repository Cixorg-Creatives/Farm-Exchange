"use client"
import { assets } from '@/assets/assets'
import React, { useState } from 'react'
import { Link, NavLink } from 'react-router-dom'
import Hambar from './Hambar'


const Header = () => {

    const [closeMenuTrigger, setCloseMenuTrigger] = useState(false);

    const handleLogoClick = () => {
        setCloseMenuTrigger(prev => !prev);
    };

    return (
        <div className='relative flex items-center justify-between mt-3 py-1 px-7 md:my-5 md:py-2 md:px-28 w-full h-[5.625rem]'>
            <div className='absolute inset-0 bg-[#073D2C] h-full w-full px-7 md:px-28'>
                <div className='flex items-center justify-between w-full h-full'>
                    <Link onClick={handleLogoClick} to="/">
                        <img src={assets.logo} alt="" className='h-[57.6px] w-[54px] sm:h-[76.8px] sm:w-[71.91px]' />
                    </Link>
                    <div className='header hidden lg:flex gap-6 items-center justify-evenly inter'>
                        <NavLink to="/services" className="text-[#859F3E] font-normal text-xl leading-[24.2px] text-center">Our Services</NavLink>
                        <NavLink to="/journals" className="text-[#859F3E] font-normal text-xl leading-[24.2px] text-center">Farm Journal</NavLink>
                        <NavLink to="/about" className="text-[#859F3E] font-normal text-xl leading-[24.2px] text-center">About Us</NavLink>
                        <NavLink to="/contact" className="text-[#859F3E] font-normal text-xl leading-[24.2px] text-center">Contact Us</NavLink>
                    </div>
                    <Hambar closeMenuTrigger={closeMenuTrigger} />
                </div>
            </div>
        </div>
    )
}

export default Header