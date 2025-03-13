import { assets } from '@/assets/assets'
import React from 'react'

const PropertiesHero = () => {
    return (
        <div className='py-6 md:py-10 xl:py-14 flex flex-col gap-5 md:gap-11 old-standard-tt'>
            <div className='flex flex-col lg:flex-row lg:justify-between gap-2 lg:gap-0 '>
                <div className='w-full lg:w-2/3 uppercase text-[#859F3E] font-bold text-2xl md:text-4xl lg:text-[4rem]'>Heading in two lines will be written</div>
                <div className='lg:w-1/3 flex items-end lg:justify-end'>
                    <p className='w-2/3 lg:w-3/4 capitalize text-[#747474] font-normal text-xs md:text-base lg:text-xl lg:text-right'>this beautiful city in Karnataka is famous for its cultural heritage, beautiful scenery.</p>
                </div>
            </div>
            <div className='relative'>
                <img src={assets.journal_1} alt="" className='w-full h-auto border-4 border-[#758A68]' />
                <div className='absolute inset-0 bg-[#0000004D] flex items-end justify-end'>
                    <p className='uppercase text-white font-bold text-xl md:text-2xl lg:text-[3.5rem] mr-3 md:mr-6 lg:mr-8'>Farm Lands</p>
                </div>
            </div>
        </div>
    )
}

export default PropertiesHero