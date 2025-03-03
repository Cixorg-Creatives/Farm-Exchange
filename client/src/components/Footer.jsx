import { assets } from '@/assets/assets'
import { Mail, MapPin, Phone } from 'lucide-react'
import React from 'react'
import { Link, NavLink } from 'react-router-dom'

const Footer = () => {
    return (
        <div className='relative w-full footer_bg sm:p-24 p-12 flex sm:flex-row flex-col sm:items-center items-start sm:justify-between justify-center gap-12 sm:gap-0'>
            <div className='bg-black/60 absolute h-full w-full top-0 left-0'></div>
            <div className='z-10 flex flex-col items-start sm:items-start sm:gap-20 gap-8 w-full sm:w-auto'>
                <Link to="/" className='self-center sm:self-start'>
                    <img src={assets.logo} alt="logo" className='sm:h-[203.34px] sm:w-[190.38px] h-32 w-auto' />
                </Link>
                <div className='flex sm:gap-6 gap-3 items-center justify-center'>
                    <NavLink to="/services" className="text-[#EFE6DD] font-normal text-xs sm:text-xl leading-[24.2px] text-center">Our Services</NavLink>
                    <NavLink to="/journal" className="text-[#EFE6DD] font-normal text-xs sm:text-xl leading-[24.2px] text-center">Farm Journal</NavLink>
                    <NavLink to="/about" className="text-[#EFE6DD] font-normal text-xs sm:text-xl leading-[24.2px] text-center">About Us</NavLink>
                    <NavLink to="/contact" className="text-[#EFE6DD] font-normal text-xs sm:text-xl leading-[24.2px] text-center">Contact Us</NavLink>
                </div>
            </div>
            <div className='z-10 flex flex-col items-start sm:items-start w-full sm:w-72 gap-7'>
                <h1 className='text-[#FFFFFF] font-medium text-xl leading-[24.2px] text-center sm:text-left w-full'>Contact</h1>
                <div className='flex flex-col items-start justify-center gap-6'>
                    <div className='flex items-center gap-3 sm:gap-6'>
                        <div className='bg-[#859F3E] size-7 sm:size-11 flex items-center justify-center'><Phone size={17} className='size-[10px] sm:size-[17px]' color='#EFE6DD' /></div>
                        <div className='text-[#859F3E] font-normal text-xs sm:text-base leading-4 sm:leading-[19.36px] w-56 inter text-left'>+91 9848022338</div>
                    </div>
                    <div className='flex items-center gap-3 sm:gap-6'>
                        <div className='bg-[#859F3E] size-7 sm:size-11 flex items-center justify-center'><Mail size={17} className='size-[10px] sm:size-[17px]' color='#EFE6DD' /></div>
                        <div className='text-[#859F3E] font-normal text-xs sm:text-base leading-4 sm:leading-[19.36px] w-56 inter text-left'>info@email.com</div>
                    </div>
                    <div className='flex items-center gap-3 sm:gap-6'>
                        <div className='bg-[#859F3E] size-7 sm:size-11 flex items-center justify-center'><MapPin size={17} className='size-[10px] sm:size-[17px]' color='#EFE6DD' /></div>
                        <div className='text-[#859F3E] font-normal text-xs sm:text-base leading-4 sm:leading-[19.36px] w-56 inter text-left'>Here comes the address of the company might be in two or three lines</div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Footer
