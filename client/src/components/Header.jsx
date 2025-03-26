"use client"
import { assets } from '@/assets/assets'
import React, { useState } from 'react'
import { Link, NavLink } from 'react-router-dom'
import Hambar from './Hambar'

const data=[
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

const Header = () => {

    const [closeMenuTrigger, setCloseMenuTrigger] = useState(false);

    const handleLogoClick = () => {
        setCloseMenuTrigger(prev => !prev);
    };

    return (
        <div className='bg-[#073D2C] flex items-center justify-between mt-3 py-1 px-7 md:mt-5 md:py-2 md:px-28 w-full h-fit'>
            <Link onClick={handleLogoClick} to="/">
                <img src={assets.logo} alt="" className='h-[57.6px] w-[54px] sm:h-[76.8px] sm:w-[71.91px]' />
            </Link>
            <div className='header hidden lg:flex gap-6 items-center justify-evenly inter'>
                {
                    data.map((item,index)=>(
                        <NavLink key={index} to={item.link} className='text-[#859F3E] font-normal text-xl leading-tight text-center'>{item.name}</NavLink>
                    ))
                }
            </div>
            <Hambar closeMenuTrigger={closeMenuTrigger} />
        </div>
    )
}

export default Header