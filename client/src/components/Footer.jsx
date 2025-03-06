import { assets } from '@/assets/assets';
import { Mail, MapPin, Phone } from 'lucide-react';
import React from 'react';
import { Link, NavLink } from 'react-router-dom';

const Footer = () => {
    return (
        <div className='relative w-full footer_bg p-8 sm:p-12 md:p-16 lg:p-24 flex flex-col md:flex-row md:items-start lg:items-center md:justify-between gap-8 md:gap-12 lg:gap-0'>
            <div className='bg-black/70 backdrop-blur-xs absolute h-full w-full top-0 left-0'></div>
            <div className='z-10 flex flex-col items-center md:items-start w-full md:w-auto gap-6 lg:gap-12'>
                <Link to="/" className='self-center md:self-start'>
                    <img src={assets.logo} alt="logo" className='h-24 w-auto md:h-32 lg:h-[203.34px] lg:w-[190.38px]' />
                </Link>
                <div className='flex flex-wrap justify-center md:justify-start gap-4 md:gap-6'>
                    <NavLink to="/services" className="text-[#EFE6DD] text-sm md:text-base lg:text-xl">Our Services</NavLink>
                    <NavLink to="/journal" className="text-[#EFE6DD] text-sm md:text-base lg:text-xl">Farm Journal</NavLink>
                    <NavLink to="/about" className="text-[#EFE6DD] text-sm md:text-base lg:text-xl">About Us</NavLink>
                    <NavLink to="/contact" className="text-[#EFE6DD] text-sm md:text-base lg:text-xl">Contact Us</NavLink>
                </div>
            </div>
            <div className='z-10 flex flex-col items-center md:items-start w-full md:w-72 gap-6'>
                <h1 className='text-[#FFFFFF] text-lg md:text-xl font-medium'>Contact</h1>
                <div className='flex flex-col gap-4 md:gap-6'>
                    <div className='flex items-center gap-4 md:gap-6'>
                        <div className='bg-[#859F3E] flex items-center justify-center p-2 md:p-3 size-11'>
                            <Phone size={17} className='text-[#EFE6DD]' />
                        </div>
                        <span className='text-[#859F3E] text-sm leading-4 md:text-base w-48 md:w-56 text-left'>+91 9848022338</span>
                    </div>
                    <div className='flex items-center gap-4 md:gap-6'>
                        <div className='bg-[#859F3E] flex items-center justify-center p-2 md:p-3 size-11'>
                            <Mail size={17} className='text-[#EFE6DD]' />
                        </div>
                        <span className='text-[#859F3E] text-sm leading-4 md:text-base w-48 md:w-56 text-left'>info@email.com</span>
                    </div>
                    <div className='flex items-center gap-4 md:gap-6'>
                        <div className='bg-[#859F3E] flex items-center justify-center p-2 md:p-3 size-11'>
                            <MapPin size={17} className='text-[#EFE6DD]' />
                        </div>
                        <span className='text-[#859F3E] text-sm leading-4 md:text-base w-48 md:w-56 text-left'>Here comes the address of the company might be in two or three lines</span>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Footer;