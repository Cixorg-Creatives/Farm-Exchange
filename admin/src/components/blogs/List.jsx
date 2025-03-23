import { assets } from '@/assets/assets'
import React from 'react'
import { Link } from 'react-router-dom'

const List = () => {
    return (
        <div className='my-6 md:my-10 xl:my-14 clashdisplay'>
            <div className='grid grid-cols-1 md:grid-cols-[1fr_1fr] lg:grid-cols-[1fr_1fr_1fr] gap-1.5 md:gap-x-3 lg:gap-x-5 gap-y-2.5 md:gap-y-5 lg:gap-y-9'>
                {
                    [...Array(6)].map((item, index) => (
                        <Link to={'/journal/blog/1'} key={index} className='grid-cols-1 px-2 md:px-4 lg:px-8 py-2.5 md:py-5 lg:py-9 border-1 border-[#D9E1C3] flex flex-col items-start gap-1 md:gap-2 lg:gap-4 cursor-pointer'>
                            <img src={assets.blogs_1} alt="" className='w-full h-auto border-1 border-[#000000]' />
                            <p className='uppercase text-[#859F3E] font-semibold text-[8px] md:text-[10px] lg:text-xs'>Small Text</p>
                            <p className='capitalize text-[#31511E] font-medium text-sm md:text-lg lg:text-2xl'>Women’s Day Special: Honoring India’s Women Farmers and Their Legacy of Resilience</p>
                            <p className='capitalize text-[#758A68] font-normal text-xs md:text-sm lg:text-base'>India’s agricultural landscape has long been shaped by the resilience and ingenuity of women farmers. </p>
                        </Link>
                    ))
                }
            </div>
        </div>
    )
}

export default List