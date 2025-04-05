import React from 'react'
import { assets } from '@/assets/assets'

const Benefits = () => {
    return (
        <div className='py-6 md:py-10 xl:py-14 flex flex-col gap-4 md:gap-6 lg:gap-8'>
            <h1 className='uppercase text-[#073D2C]/50 font-semibold text-5xl md:text-6xl lg:text-7xl xl:text-[6.25rem] leading-tight text-left'>
                Our Benefits
            </h1>
            <div className='flex flex-col items-end'>
                <div className='border-t-2 border-dashed border-[#859F3E] w-4/5'></div>
                <div className='flex'>
                    <div className='flex flex-col gap-2.5 md:gap-4 lg:gap-5 mt-3 md:mt-5 lg:mt-7 mr-4 md:mr-6 lg:mr-8'>
                        <h1 className='boska font-normal text-[#859F3E] text-base md:text-xl lg:text-[1.75rem] leading-tight uppercase text-right'>
                            WHY PARTNER WITH US?
                        </h1>
                        <p className='capitalize font-medium text-[#31511E] text-xl md:text-3xl lg:text-6xl leading-tight text-right'>
                            Experience growth, support, and <br className='hidden lg:block' /> success with our community.
                        </p>
                    </div>
                    <div className='border-r-2 border-dashed border-[#859F3E] h-20 md:h-48'></div>
                </div>
            </div>
            <div className='mb-0 lg:mb-52 flex flex-col xl:flex-row justify-between items-center lg:items-start gap-10'>
                <div className='relative w-full lg:w-auto'>
                    <img src={assets.contact_2} alt='' className='w-full xl:!w-[868px] h-auto xl:h-[491px]' />
                    <div className='hidden xl:flex lg:absolute lg:top-84 lg:right-4 bg-[#31511E] bg-opacity-50 lg:bg-opacity-100 sm:w-full lg:w-[40.563rem] sm:h-full lg:h-[22.813rem]'></div>
                    <div className='cursor-pointer absolute inset-0 xl:inset-auto hover:xl:top-84 hover:xl:right-4 xl:top-80 xl:right-8 duration-200 ease-in-out bg-[#859F3E]/80 xl:bg-[#859F3E] sm:w-full xl:w-[40.563rem] sm:h-full xl:h-[22.813rem] flex flex-col justify-between p-6 sm:p-10'>
                        <h1 className='uppercase boska text-[#F6FCDF] font-normal text-2xl md:text-3xl lg:text-5xl leading-tight '>
                            Join Us to Grow, <br /> Succeed, and Thrive <br /> Together!
                        </h1>
                        <div className='w-full flex justify-end'>
                            <h2 className='text-[#F6FCDF] font-semibold text-base md:text-xl lg:text-[1.75rem] leading-tight'>
                                Farm Exchange
                            </h2>
                        </div>
                    </div>
                </div>
                <div className='border-[1px] border-[#859F3E] w-full xl:w-[25rem] lg:h-[30.688rem] p-6 sm:py-10 sm:px-4'>
                    <h1 className='text-[#31511E] uppercase font-semibold text-2xl md:text-3xl lg:text-4xl leading-tight text-start'>
                        Benefits
                    </h1>
                    <div className='flex flex-col items-start gap-5 md:gap-7 lg:gap-9 mt-5 sm:mt-7'>
                        {[
                            'Profitable Farmland Investment',
                            'Sustainable & Organic Farming',
                            'Expert Support & Guidance',
                            'Guaranteed Returns & Growth',
                            'Hassle-Free Land Management',
                            'Thriving Farming Community',
                        ].map((benefit, index) => (
                            <div key={index} className='flex items-center gap-1 md:gap-2 lg::gap-3 group'>
                                <img src={assets.contact_leaf} alt='' className='w-4 md:w-5 lg:w-6 h-auto' />
                                <p className='font-normal text-base md:text-lg lg:text-xl leading-tight hover:text-[#31511E] text-black'>
                                    {benefit}
                                </p>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Benefits