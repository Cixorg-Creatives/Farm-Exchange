import React from 'react'
import Overview from './Overview'
import About from './About'
import Amenities from './Amenities'
import Gallery from './Gallery'
import Location from './Location'

const Details = () => {
    return (
        <div className='py-6 md:py-10 xl:py-14 flex justify-between old-standard-tt'>
            <div className='h-auto w-full lg:w-3/5 flex flex-col items-start justify-start'>
                <Overview />
                <About />
                <Amenities />
                <Gallery />
                <Location />
            </div>
            <div className='hidden lg:sticky lg:flex w-[30%] flex-col items-end gap-1'>
                <div className='capitalize text-[#31511E] font-bold text-[2rem] w-full h-28 flex items-center justify-end border-b-1 border-[#ADBF7E]'>Overview</div>
                <div className='capitalize text-[#31511E] font-bold text-[2rem] w-full h-28 flex items-center justify-end border-b-1 border-[#ADBF7E]'>About</div>
                <div className='capitalize text-[#31511E] font-bold text-[2rem] w-full h-28 flex items-center justify-end border-b-1 border-[#ADBF7E]'>Amenities</div>
                <div className='capitalize text-[#31511E] font-bold text-[2rem] w-full h-28 flex items-center justify-end border-b-1 border-[#ADBF7E]'>Gallery</div>
                <div className='capitalize text-[#31511E] font-bold text-[2rem] w-full h-28 flex items-center justify-end border-b-1 border-[#ADBF7E]'>Location</div>
            </div>
        </div>
    )
}

export default Details