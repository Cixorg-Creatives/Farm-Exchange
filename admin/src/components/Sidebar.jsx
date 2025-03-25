import React from 'react'
import { NavLink } from 'react-router-dom'
import { assets } from '../assets/assets'
import { BookOpen, Home, LayoutDashboard, Mail, Podcast } from 'lucide-react';

const data = [
    {
        link: '/',
        title: "Dashboard",        
        component: <div><LayoutDashboard size={24} /></div>,
    },
    {
        link: '/properties',
        title: "Properties",
        component: <div><Home size={24} /></div>,
    },
    {
        link: '/blogs',
        title: "Blogs",
        component:<div><BookOpen size={24} /></div>,
    },
    {
        link: '/contact',
        title: "Messages",
        component:<div><Mail size={24} /></div>,
    },
    {
        link: '/post-property-request',
        title: "Request",
        component:<div><Podcast size={24} /></div>,
    },
]

const Sidebar = () => {
    return (
        <div className='w-[18%] h-screen border-r border-[#c7d3a7] flex flex-col justify-between clashdisplay'>
            <div className='flex flex-col gap-4 pt-6 pl-[20%] text-[15px]'>
                {
                    data.map((item, index) => (
                        <NavLink to={item.link} key={index} className='flex items-center gap-3 border border-[#c7d3a7] border-r-0 px-3 py-2 rounded-lg text-gray-800'>
                            {item.component}
                            <p className='boska text-base font-semibold hidden md:block'>{item.title}</p>
                        </NavLink>
                    ))
                }
            </div>
            <div className='md:px-5 text-lg mb-24 lg:mb-32'>
                <div className='flex items-center justify-center md:gap-3 md:bg-[#c7d3a7] md:border md:border-[#85a03f] p-0 md:p-3 rounded-full'>
                    <img src={assets.avatar} alt="" className='w-10 h-10 md:w-14 md:h-14 rounded-full' />
                    <div className='hidden md:block'>
                        <div className='flex flex-col'>
                            <p className='boska font-semibold text-2xl text-gray-800'> Admin</p>
                            <p className='text-sm font-normal text-[#505050]'>admin@luxeloom.com</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Sidebar