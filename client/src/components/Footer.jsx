import { assets } from '@/assets/assets';
import { Facebook, Instagram, Linkedin, Mail, MapPin, MapPinned, Phone, Youtube } from 'lucide-react';
import React from 'react';
import { Link, NavLink } from 'react-router-dom';

const data = [
    // {
    //     name: 'Our Services',
    //     link: '/services',
    // },
    // {
    //     name: 'Farm Journal',
    //     link: '/journal',
    // },
    {
        name: 'About Us',
        link: '/about',
    },
    {
        name: 'Contact Us',
        link: '/contact',
    },
    {
        name: 'Privacy Policy',
        link: '/privacy-policy',
    },
    {
        name: 'Terms & Conditions',
        link: '/terms-and-conditions',
    },
]

const connect = [
    {
        icon: <Phone className='size-4 md:size-5 lg:size-6 text-[#EFE6DD]' />,
        detail: '+91 7259722448',
        link: 'tel:+917259722448',
    },
    {
        icon: <Mail className='size-4 md:size-5 lg:size-6 text-[#EFE6DD]' />,
        detail: 'support@farmexchange.co.in',
        link: 'mailto:support@farmexchange.co.in',
    },
    {
        icon: <MapPinned className='size-4 md:size-5 lg:size-6 text-[#EFE6DD]' />,
        detail: '#475, block 13, valmark cityville, chandrasekharapura village, begur hobli, Bannerghatta road, hulimavu, Bangalore - 560076, Karnataka, India.',
        link: 'https://maps.app.goo.gl/zojMAaowJ1Wk516j6',
    },
]

const social = [
    {
        icon: <Instagram className='size-4 md:size-5 lg:size-6 text-[#EFE6DD]' />,
        link: "instagram.com"
    },
    {
        icon: <Facebook className='size-4 md:size-5 lg:size-6 text-[#EFE6DD]' />,
        link: "facebook.com"
    },
    {
        icon: <Youtube className='size-4 md:size-5 lg:size-6 text-[#EFE6DD]' />,
        link: "youtube.com"
    },
    {
        icon: <Linkedin className='size-4 md:size-5 lg:size-6 text-[#EFE6DD]' />,
        link: "linkedin.com"
    },
]

const Footer = () => {
    return (
        <div className='bg-gradient-to-b from-[#0A1901] to-[#073D2C] px-5 md:px-10 lg:px-22 pt-4.5 md:pt-9 lg:pt-18 flex flex-col gap-5 md:gap-7 lg:gap-9'>
            <div className='grid md:grid-cols-2 w-full gap-5 md:gap-0'>
                <div className='col-span-1 w-full flex flex-col items-start justify-between gap-5 md:gap-0'>
                    <Link to="/" className='items-start'>
                        <img src={assets.logo} alt="logo" className='w-16 md:w-18 lg:w-24 h-auto aspect-square' />
                    </Link>
                    <div className='flex flex-col items-start justify-between gap-5 md:gap-7 lg:gap-9'>
                        <h1 className='text-[#FFFFFF] text-base md:text-lg lg:text-2xl font-medium'>Explore Farm Exchange</h1>
                        <div className='flex flex-col items-start justify-center gap-2 md:gap-3 lg:gap-4'>
                            {
                                data.map((item, index) => (
                                    <NavLink to={item.link} key={index} className="text-[#EFE6DD] font-normal text-xs md:text-base lg:text-xl">{item.name}</NavLink>
                                ))
                            }
                        </div>
                    </div>
                </div>
                <div className='col-span-1 w-full flex flex-col items-start justify-between gap-5 md:gap-7 lg:gap-9'>
                    <h1 className='text-[#FFFFFF] text-base md:text-lg lg:text-2xl font-medium'>Contact</h1>
                    <div className='flex flex-col items-start justify-center gap-4 md:gap-6'>
                        {
                            connect.map((item, index) => (
                                <div key={index} className='w-full flex items-center justify-start gap-2 md:gap-3 lg:gap-4'>
                                    <Link to={item.link} className='bg-[#859F3E] flex items-center justify-center size-8 md:size-10 lg:size-12 aspect-square'>
                                        {item.icon}
                                    </Link>
                                    <span className='text-[#859F3E] text-xs md:text-sm lg:text-base leading-tight text-left'>{item.detail}</span>
                                </div>
                            ))
                        }
                    </div>
                    <h1 className='text-[#FFFFFF] text-base md:text-lg lg:text-2xl font-medium capitalize'>Connect with us</h1>
                    <div className='flex items-start justify-center gap-4 md:gap-6'>
                        {
                            social.map((item, index) => (
                                <div key={index} className='w-full flex items-center justify-start gap-2 md:gap-3 lg:gap-4'>
                                    <Link to={item.link} className='bg-[#859F3E] flex items-center justify-center size-8 md:size-10 lg:size-12 aspect-square'>
                                        {item.icon}
                                    </Link>
                                </div>
                            ))
                        }
                    </div>
                </div>
            </div>
            <h1 className='text-[#FFFFFF] text-[8px] md:text-xs lg:text-base font-medium capitalize w-full text-center pb-2 md:pb-4 lg:pb-6'>Copyright © 2025 Farm Exchange  Nirmaankara venture Ltd.  All Rights Reserved.</h1>
        </div>
    );
};

export default Footer;