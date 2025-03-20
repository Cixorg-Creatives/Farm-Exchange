import { assets } from '@/assets/assets'
import { ArrowUpRight } from 'lucide-react'
import React from 'react'
import { Link } from 'react-router-dom'

const Suggestions = () => {
    return (
        <div className='py-6 md:py-10 xl:py-14 old-standard-tt'>
            <div className='w-full h-12 flex items-center justify-between pb-2 md:pb-4 lg:pb-8'>
                <p className='uppercase text-[#859F3E] font-bold text-xl sm:text-2xl md:text-3xl lg:text-4xl'>people also read</p>
                <p className='flex group gap-2 md:gap-4 text-[#859F3E] font-normal text-base lg:text-2xl leading-6 md:leading-8 cursor-pointer'>View More <ArrowUpRight className='size-5 sm:size-6 md:size-8 group-hover:rotate-45 ease-in duration-150' /></p>
            </div>
            <div className='grid grid-cols-[1fr_1fr] lg:grid-cols-[1fr_1fr_1fr] gap-1.5 md:gap-x-3 lg:gap-x-5 gap-y-2.5 md:gap-y-5 lg:gap-y-9'>
                {
                    [...Array(3)].map((item, index) => (
                        <Link to={'/journal/blog/1'} key={index} className='grid-cols-1 px-2 md:px-4 lg:px-8 py-2.5 md:py-5 lg:py-9 border-1 border-[#D9E1C3] flex flex-col items-start gap-1 md:gap-2 lg:gap-4 cursor-pointer'>
                            <img src={assets.journal_5} alt="" className='w-full h-auto border-1 border-black' />
                            <p className='uppercase text-black font-bold text-[8px] md:text-[10px] lg:text-xs'>Small Text</p>
                            <p className='capitalize text-black font-bold text-sm md:text-lg lg:text-2xl'>Women’s Day Special: Honoring India’s Women Farmers and Their Legacy of Resilience</p>
                            <p className='capitalize text-[#747474] font-normal text-xs md:text-sm lg:text-base'>India’s agricultural landscape has long been shaped by the resilience and ingenuity of women farmers. </p>
                        </Link>
                    ))
                }
            </div>
        </div>
    )
}

export default Suggestions