import React from 'react'
import { assets } from '@/assets/assets'

const Hero = () => {
    return (
        <div className='flex flex-col-reverse xl:flex-row items-center justify-between py-6 md:py-10 xl:py-14 clashdisplay'>
            <div className='w-full mt-14 xl:mt-0 xl:w-7/12'>
                <p className='text-[#31511E] font-semibold text-4xl sm:text-5xl md:text-6xl xl:text-8xl leading-tight uppercase mb-10 sm:mb-14'>The Story Behind Farm exchange</p>
                <div className='flex items-center justify-start gap-3 md:gap-5 xl:gap-10'>
                    <img src={assets.about_1} alt="" className='w-40 sm:w-56 md:w-64 xl:w-72 h-60 sm:h-72 md:h-80 xl:h-96 my-6 sm:my-8' />
                    <div>
                        <div className='border-t-[2px] border-dashed border-[#859F3E]'></div>
                        <div className='flex'>
                            <img src={assets.about_2} alt="" className='w-40 sm:w-56 md:w-64 xl:w-72 h-60 sm:h-72 md:h-80 xl:h-96 my-3 sm:my-8 mr-3 sm:mr-8' />
                            <div className='h-48 sm:h-64 md:h-72 xl:h-80 border-r-[2px] border-dashed border-[#859F3E]'></div>
                        </div>
                    </div>
                </div>
            </div>
            <div className='h-full flex flex-col-reverse xl:flex-col items-end justify-between gap-6 sm:gap-20 xl:gap-28'>
                <div className='flex items-end'>
                    <div className='h-60 sm:h-72 md:h-80 xl:h-96 border-l-[2px] border-dashed border-[#859F3E]'></div>
                    <div className='flex flex-col items-start'>
                        <div className="relative ml-4 sm:ml-6 xl:ml-9 mb-4 sm:mb-5 xl:mb-8">
                            <img src={assets.about_3} alt="" className='w-72 sm:w-80 md:w-[24rem] xl:w-[30rem] h-80 sm:h-96 md:h-[28rem] xl:h-[34rem]' />
                            <div className='absolute inset-0 h-full w-full flex flex-col items-end justify-end bg-gradient-to-b from-[#00000000] to-[#000000]'>
                                <p className='capitalize text-[#F6FCDF] font-normal text-xs md:text-base lg:text-xl text-right  mx-2 md:mx-3 lg:mx-4 my-2 md:my-4 lg:my-6'>Connecting farmers and buyers through a seamless marketplace, fostering fair trade, sustainability, and agricultural growth.</p>
                            </div>
                        </div>
                        <div className='w-1/2 border-t-[2px] border-dashed border-[#859F3E]'></div>
                    </div>
                </div>
                <div className='flex flex-col items-end justify-center'>
                    <p className='uppercase text-[#073D2C]/50 font-semibold text-5xl sm:text-6xl md:text-7xl xl:text-8xl leading-tight text-center xl:text-right'>About us</p>
                    <div className='w-5/6 border-t-[2px] border-dashed border-[#073D2C]/50'></div>
                </div>
            </div>
        </div>
    )
}

export default Hero