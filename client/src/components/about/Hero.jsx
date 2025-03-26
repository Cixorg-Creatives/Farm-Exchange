import React from 'react'
import { assets } from '@/assets/assets'

const Hero = () => {
    return (
        <div className='flex flex-col-reverse lg:flex-row items-center justify-between gap-2 md:gap-4 lg:gap-0 py-6 md:py-10 xl:py-14'>
            <div className='w-full lg:w-7/12'>
                <p className='text-[#31511E] font-semibold text-[2.5rem] md:text-6xl lg:text-[5rem] leading-tight uppercase mb-2 md:mb-4 lg:mb-8'>The Story <br /> Behind <br /> Farm exchange</p>
                <div className='flex items-center justify-start gap-3 md:gap-5 lg:gap-10'>
                    <img src={assets.about_1} alt="" className='w-40 md:w-56 lg:w-72 h-auto my-6 sm:my-8' />
                    <div>
                        <div className='border-t-[2px] border-dashed border-[#859F3E]'></div>
                        <div className='flex'>
                            <img src={assets.about_2} alt="" className='w-40 md:w-64 lg:w-72 h-auto my-3 sm:my-8 mr-3 sm:mr-8' />
                            <div className='h-48 sm:h-64 md:h-72 lg:h-80 border-r-[2px] border-dashed border-[#859F3E]'></div>
                        </div>
                    </div>
                </div>
            </div>
            <div className='h-full flex flex-col-reverse lg:flex-col items-end justify-between gap-2 md:gap-4 lg:gap-0'>
                <div className='flex items-end'>
                    <div className='h-60 md:h-80 lg:h-96 border-l-[2px] border-dashed border-[#859F3E]'></div>
                    <div className='flex flex-col items-start'>
                        <div className="relative ml-4 sm:ml-6 lg:ml-9 mb-4 sm:mb-5 lg:mb-8">
                            <img src={assets.about_3} alt="" className='w-72 md:w-[20rem] lg:w-[30rem] h-auto' />
                            <div className='absolute inset-0 h-full w-full flex flex-col items-end justify-end bg-gradient-to-b from-[#00000000] to-[#000000]'>
                                <p className='capitalize text-[#F6FCDF] font-normal text-xs md:text-base lg:text-xl text-right mx-2 md:mx-3 lg:mx-4 my-2 md:my-4 lg:my-6'>Connecting farmers and buyers through a seamless marketplace, fostering fair trade, sustainability, and agricultural growth.</p>
                            </div>
                        </div>
                        <div className='w-1/2 border-t-[2px] border-dashed border-[#859F3E]'></div>
                    </div>
                </div>
                <div className='flex flex-col items-end justify-center'>
                    <p className='uppercase text-[#073D2C]/50 font-semibold text-5xl md:text-7xl lg:text-[6.25rem] leading-tight text-center lg:text-right'>About us</p>
                    <div className='w-5/6 border-t-[2px] border-dashed border-[#073D2C]/50'></div>
                </div>
            </div>
        </div>
    )
}

export default Hero