import { assets } from '@/assets/assets'
import React from 'react'
import { Link, NavLink } from 'react-router-dom'

const Header = () => {
    return (
        <div className='flex items-center justify-between mt-3 py-1 px-7 md:my-5 md:py-2 md:px-28 w-full bg-[#31511E]'>
            <Link to="/">
                <img src={assets.logo2} alt="" className='h-[57.6px] w-[54px] sm:h-[76.8px] sm:w-[71.91px]' />
            </Link>
            <div className='hidden sm:flex gap-6 items-center justify-evenly inter'>
                <NavLink to="/services" className="text-[#859F3E] font-normal text-xl leading-[24.2px] text-center">Our Services</NavLink>
                <NavLink to="/journal" className="text-[#859F3E] font-normal text-xl leading-[24.2px] text-center">Farm Journal</NavLink>
                <NavLink to="/about" className="text-[#859F3E] font-normal text-xl leading-[24.2px] text-center">About Us</NavLink>
                <NavLink to="/contact" className="text-[#859F3E] font-normal text-xl leading-[24.2px] text-center">Contact Us</NavLink>
            </div>
        </div>
    )
}

export default Header