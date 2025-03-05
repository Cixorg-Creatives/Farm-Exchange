import { assets } from '@/assets/assets'
import React from 'react'

const Vision = () => {
    return (
        <div className='my-6 md:my-10 lg:my-14 flex flex-col xl:flex-row old-standard-tt xl:h-[95vh]'>
            <div className='xl:w-36 xl:relative'>
                <div className='xl:absolute xl:inset-0 xl:left-0 xl:bottom-0 z-10 w-[95vh] uppercase prata text-[#073D2C]/50 font-normal text-5xl sm:text-6xl md:text-7xl xl:text-8xl xl:-rotate-90'>our Vision</div>
            </div>
            <div className='my-6 md:my-10 lg:my-14 w-full xl:w-1/2 flex flex-col items-start'>
                <div className='w-2/3 border-t-[2px] border-dashed border-[#859F3E]'></div>
                <div className='flex'>
                    <div className='xl:h-full border-r-[2px] border-dashed border-[#859F3E]'></div>
                    <div className='flex flex-col items-start justify-start gap-4 sm:gap-6 md:gap-7 mt-2 sm:mt-4 xl:mt-7 ml-4 sm:ml-8 xl:ml-14'>
                        <p className='w-full capitalize text-[#31511E] font-bold text-[2rem] sm:text-[2.5rem] md:text-[3rem] leading-[2.5rem] sm:leading-[3rem] md:leading-[3.5rem]'>farm exchange Pioneering Sustainable Agro-Realty</p>
                        <p className='w-full capitalize text-black font-normal text-[1rem] sm:text-[1.25rem] xl:text-[1.5rem] leading-[1.5rem] sm:leading-[1.75rem] md:leading-[2rem] pr-0 sm:pr-6 md:pr-12 text-left'>We strive to be the most trusted agro-realty company, creating profitable and ethical farming businesses. Committed to organic farming, we prioritize soil  health, sustainability, and eco-friendly practices. By avoiding chemicals and embracing innovative  technologies, we ensure long-term fertility, environmental protection, and prosperity for our customers, employees, and vendors.</p>
                    </div>
                </div>
            </div>
            <div className='w-full xl:w-[40%] h-[65vh] sm:h-[75vh] md:[85vh] flex flex-col items-end'>
                <div className='flex'>
                    <div className='h-2/3 border-r-[2px] border-dashed border-[#859F3E]'></div>
                    <div className='relative flex flex-col items-end'>
                        <img src={assets.about_6} alt="" className='w-40 sm:w-56 md:w-64 xl:w-72 h-60 sm:h-72 md:h-80 xl:h-96 ml-5 mb-5' />
                        <div className='w-2/3 border-t-[2px] border-dashed border-[#859F3E]'></div>
                        <div className='absolute top-2/3 -left-2/3'>
                            <div className='flex flex-row-reverse items-end'>
                                <div className='h-[24vh] sm:h-[27vh] md:h-[32vh] xl:h-[37vh] border-r-[2px] border-dashed border-[#859F3E]'></div>
                                <div className='flex flex-col items-start'>
                                    <div className='w-2/3 border-t-[2px] border-dashed border-[#859F3E]'></div>
                                    <img src={assets.about_7} alt="" className='w-40 sm:w-56 md:w-64 xl:w-72 h-60 sm:h-72 md:h-80 xl:h-96 mr-5 mt-5' />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Vision