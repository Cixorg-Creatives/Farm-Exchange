"use client"
import React, { useState } from 'react'
import { assets } from '@/assets/assets'
import { Link, NavLink } from 'react-router-dom'
import {
    Sheet,
    SheetContent,
    SheetHeader,
    SheetTrigger,
} from "@/components/ui/sheet"

const Hambar = () => {

    const [open, setOpen] = useState(false);
    const closeSheet = () => setOpen(false);

    return (
        <div className='lg:hidden'>
            <Sheet open={open} onOpenChange={setOpen}>
                <SheetTrigger className='active:scale-50 duration-300 ease-in'><img src={assets.menu} alt="" className='size-8' /></SheetTrigger>
                <SheetContent onClose={closeSheet}>
                    <SheetHeader className={`flex items-center justify-center w-full pt-10`}>
                        <Link to='/'><img src={assets.logo2} alt="" className='w-32 h-auto' /></Link>
                    </SheetHeader>
                    <div className='flex flex-col justify-center gap-7 pt-7'>
                        <NavLink to="/services" className="mx-6 py-2.5 bg-gradient-to-r from-[#859F3E] to-[#31511E] text-center align-middle text-white font-medium text-lg rounded-md transition-all duration-300 hover:to-[#9FBF4E] shadow-lg shadow-black/40 active:scale-75">Our Services</NavLink>
                        <NavLink to="/journal" className="mx-6 py-2.5 bg-gradient-to-r from-[#859F3E] to-[#31511E] text-center align-middle text-white font-medium text-lg rounded-md transition-all duration-300 hover:to-[#9FBF4E] shadow-lg shadow-black/40 active:scale-75">Farm Journal</NavLink>
                        <NavLink to="/about" className="mx-6 py-2.5 bg-gradient-to-r from-[#859F3E] to-[#31511E] text-center align-middle text-white font-medium text-lg rounded-md transition-all duration-300 hover:to-[#9FBF4E] shadow-lg shadow-black/40 active:scale-75">About Us</NavLink>
                        <NavLink to="/contact" className="mx-6 py-2.5 bg-gradient-to-r from-[#859F3E] to-[#31511E] text-center align-middle text-white font-medium text-lg rounded-md transition-all duration-300 hover:to-[#9FBF4E] shadow-lg shadow-black/40 active:scale-75">Contact Us</NavLink>
                    </div>
                </SheetContent>
            </Sheet>
        </div>
    )
}

export default Hambar