import { assets } from '@/assets/assets'
import { Mail, MapPin, Phone } from 'lucide-react'
import React from 'react'
import { Link, NavLink } from 'react-router-dom'

const Footer = () => {
    return (
        <div className='relative w-full footer_bg sm:p-24 p-12 flex items-center justify-between'>
            <div className='bg-black/60 absolute h-full w-full top-0 left-0'></div>
            <div className='z-10 flex flex-col items-start justify-between gap-20'>
                <Link to="/">
                    <img src={assets.logo} alt="logo" className='sm:h-[203.34px] sm:w-[190.38px]' />
                </Link>
                <div className='flex gap-6 items-center justify-evenly inter'>
                    <NavLink to="/services" className="text-[#EFE6DD] font-normal text-xl leading-[24.2px] text-center">Our Services</NavLink>
                    <NavLink to="/journal" className="text-[#EFE6DD] font-normal text-xl leading-[24.2px] text-center">Farm Journal</NavLink>
                    <NavLink to="/about" className="text-[#EFE6DD] font-normal text-xl leading-[24.2px] text-center">About Us</NavLink>
                    <NavLink to="/contact" className="text-[#EFE6DD] font-normal text-xl leading-[24.2px] text-center">Contact Us</NavLink>
                </div>
            </div>
            <div className='z-10 flex flex-col items-start justify-between w-72 gap-7'>
                <h1 className='text-[#FFFFFF] font-medium text-xl leading-[24.2px] text-center'>Contact</h1>
                <div className='flex flex-col items-center justify-center gap-8'>
                    <div className='flex items-center justify-between gap-6'>
                        <div className='bg-[#859F3E] size-11 flex items-center justify-center'><Phone size={17} color='#EFE6DD' /></div>
                        <div className='text-[#859F3E] font-normal text-base leading-[19.36px] w-56 inter'>+91 9848022338</div>
                    </div>
                    <div className='flex items-center justify-between gap-6'>
                        <div className='bg-[#859F3E] size-11 flex items-center justify-center'><Mail size={17} color='#EFE6DD' /></div>
                        <div className='text-[#859F3E] font-normal text-base leading-[19.36px] w-56 inter'>info@email.com</div>
                    </div>
                    <div className='flex items-center justify-between gap-6'>
                        <div className='bg-[#859F3E] size-11 flex items-center justify-center'><MapPin size={17} color='#EFE6DD' /></div>
                        <div className='text-[#859F3E] font-normal text-base leading-[19.36px] w-56 inter'>Here comes the address of the company might be in two or three lines</div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Footer