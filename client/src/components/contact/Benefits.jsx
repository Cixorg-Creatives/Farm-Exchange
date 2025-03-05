import React from 'react'
import { assets } from '@/assets/assets'

const Benefits = () => {
    return (
        <div className=''>
            <div className='lg:w-[47.313rem] my-10 sm:my-20 flex flex-col gap-5'>
                <h1 className='old-standard-tt font-bold text-[#859F3E] text-lg sm:text-[1.75rem] leading-8 sm:leading-10 uppercase'>
                    Benefits of joining us
                </h1>
                <p className='old-standard-tt font-bold text-[#31511E] text-xl sm:text-[2rem] leading-8 sm:leading-11'>
                    Experience growth, support, and success with our community.
                </p>
            </div>
            <div className='mt-10 sm:mt-20 mb-20 lg:mb-52 flex flex-col xl:flex-row justify-between items-center lg:items-start gap-10'>
                <div className='relative w-full lg:w-auto'>
                    <img src={assets.contact_2} alt='' className='w-full xl:!w-[868px] h-auto xl:h-[491px]' />
                    <div className='hidden xl:flex lg:absolute lg:top-84 lg:right-4 bg-[#31511E] bg-opacity-50 lg:bg-opacity-100 sm:w-full lg:w-[40.563rem] sm:h-full lg:h-[22.813rem]'></div>
                    <div className='absolute inset-0 xl:inset-auto xl:top-80 xl:right-8 bg-[#859F3E]/80 xl:bg-[#859F3E] sm:w-full xl:w-[40.563rem] sm:h-full xl:h-[22.813rem] flex flex-col justify-between p-6 sm:p-10'>
                        <h1 className='uppercase old-standard-tt text-[#F6FCDF] font-normal text-xl sm:text-2xl lg:text-[2.5rem] leading-8 sm:leading-10 lg:leading-14'>
                            Join Us to Grow, Succeed, and Thrive Together!
                        </h1>
                        <div className='w-full flex justify-end'>
                            <h2 className='old-standard-tt text-[#F6FCDF] font-bold text-lg sm:text-xl lg:text-[1.75rem] leading-6 sm:leading-8 lg:leading-10'>
                                Farm Exchange
                            </h2>
                        </div>
                    </div>
                </div>
                <div className='border-[1px] border-[#859F3E] w-full xl:w-[25rem] lg:h-[30.688rem] p-6 sm:py-10 sm:px-4'>
                    <h1 className='text-[#31511E] uppercase old-standard-tt font-bold text-2xl sm:text-4xl leading-8 sm:leading-12 text-start'>
                        Benefits
                    </h1>
                    <div className='flex flex-col items-start gap-5 sm:gap-7 mt-5 sm:mt-7'>
                        {[
                            'Profitable Farmland Investment',
                            'Sustainable & Organic Farming',
                            'Expert Support & Guidance',
                            'Guaranteed Returns & Growth',
                            'Hassle-Free Land Management',
                            'Thriving Farming Community',
                        ].map((benefit, index) => (
                            <div key={index} className='flex items-center gap-3'>
                                <img src={assets.contact_leaf} alt='' className='w-6 sm:w-auto' />
                                <p className='old-standard-tt font-normal text-lg sm:text-xl leading-6 sm:leading-8 text-[#31511E]'>
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