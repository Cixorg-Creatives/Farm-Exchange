import { assets } from '@/assets/assets';
import { Mail, MapPin, MapPinned, Phone } from 'lucide-react';
import React from 'react';
import { Link, NavLink } from 'react-router-dom';

const data = [
    {
        name: 'Our Services',
        link: '/services',
    },
    {
        name: 'Farm Journal',
        link: '/journal',
    },
    {
        name: 'About Us',
        link: '/about',
    },
    {
        name: 'Contact Us',
        link: '/contact',
    },
]

const item = [
    {
        icon: <Phone className='size-4 md:size-5 lg:size-6 text-[#EFE6DD]' />,
        detail: '+91 9848022338',
    },
    {
        icon: <Mail className='size-4 md:size-5 lg:size-6 text-[#EFE6DD]' />,
        detail: 'info@email.com',
    },
    {
        icon: <MapPinned className='size-4 md:size-5 lg:size-6 text-[#EFE6DD]' />,
        detail: 'Here comes the address of the company might be in two or three lines',
    },
]

const Footer = () => {
    return (
        <div className='relative w-full footer_bg'>
            <div className='bg-black/40 h-full w-full p-8 sm:p-12 md:p-16 lg:p-24 flex flex-col md:flex-row items-center justify-center md:justify-between gap-8 md:gap-12 lg:gap-0'>
                <div className='z-10 flex flex-col items-center md:items-start w-full md:w-auto gap-6 lg:gap-12'>
                    <Link to="/" className='self-center md:self-start'>
                        <img src={assets.logo} alt="logo" className='h-32 w-auto md:h-48 lg:h-[203.34px] lg:w-[190.38px]' />
                    </Link>
                    <div className='flex flex-wrap justify-center md:justify-start gap-4 md:gap-6'>
                        {
                            data.map((item, index) => (
                                <NavLink to={item.link} key={index} className="text-[#EFE6DD] text-xs md:text-base lg:text-xl">{item.name}</NavLink>
                            ))
                        }
                    </div>
                </div>
                <div className='z-10 flex flex-col items-center lg:items-start justify-center w-4/5 md:w-1/4 gap-6'>
                    <h1 className='text-[#FFFFFF] text-base md:text-lg lg::text-xl font-medium'>Contact</h1>
                    <div className='flex flex-col items-start justify-center gap-4 md:gap-6'>
                        {
                            item.map((item, index) => (
                                <div key={index} className='w-full flex items-center justify-evenly lg:justify-around'>
                                    <div className='bg-[#859F3E] flex items-center justify-center size-8 md:size-10 lg:size-12'>
                                        {item.icon}
                                    </div>
                                    <span className='w-3/5 md:w-3/4 text-[#859F3E] text-xs md:text-sm lg:text-base leading-tight text-left'>{item.detail}</span>
                                </div>
                            ))
                        }
                    </div>
                </div></div>

        </div>
    );
};

export default Footer;