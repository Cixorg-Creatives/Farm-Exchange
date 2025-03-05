import React from 'react'
import { assets } from '@/assets/assets';
import { ArrowUpRight, Play } from 'lucide-react';

const Weekend = () => {
    return (
        <div className='flex flex-col lg:flex-row items-center justify-center gap-4 lg:gap-11 my-6 md:my-10 lg:my-14 lg:h-[49.375rem]'>
            <div className='flex w-full lg:w-[36.4375rem]'>
                <div className='w-full old-standard-tt flex flex-col items-start gap-4 md:gap-6'>
                    <div className='w-full flex flex-col gap-3 md:gap-4'>
                        <h2 className='text-[#859F3E] font-bold text-lg md:text-xl lg:text-[1.75rem] leading-8 md:leading-10 uppercase'>
                            BUILD A COOL AND <br /> COMFORTABLE
                        </h2>
                        <h1 className='text-[#31511E] font-bold text-3xl md:text-4xl lg:text-5xl leading-10 md:leading-[3.5rem] lg:leading-[4rem]'>
                            Weekend home in a pristine 100 acres
                        </h1>
                    </div>
                    <div>
                        <p className='text-[#31511E] font-normal text-base md:text-lg lg:text-2xl leading-6 md:leading-7 lg:leading-8 mb-4 md:mb-6'>
                            A luxurious weekend home in a pristine landscape in the countryside. No more congested spaces. Own a sprawling space and build a lovely farm house on it. A pristine piece of land untouched by pollution, trespassing, city smoke, or any such nuisance. Thick greenery, landscaped areas, party amenities, club games, pools are a few highlights of this holiday home project. So as a resident you get to enjoy vacations without leaving your home.
                        </p>
                        <p className='flex gap-2 md:gap-3 text-[#859F3E] font-normal text-base md:text-lg lg:text-2xl leading-6 md:leading-7 lg:leading-8 cursor-pointer'>
                            View All <ArrowUpRight className='size-6 md:size-7' />
                        </p>
                    </div>
                </div>
            </div>
            <div className='relative w-full lg:w-[40.375rem]'>
                <img src={assets.about_4} alt='' className='h-auto lg:h-[49.375rem] w-full lg:w-[40.375rem] object-cover' />
                <div className='z-10 border-[0.1875rem] md:border-[0.25rem] lg:border-[0.3125rem] border-white rounded-full size-16 md:size-20 lg:size-[6.2rem] bg-[#859F3E] absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2'>
                    <div className='flex items-center justify-center h-full w-full'><Play className='size-8 md:size-12 lg:size-[3.75rem] text-white fill-white' /></div>
                </div>
                <div className='absolute w-full h-full top-0 left-0 bg-black/50'></div>
            </div>
        </div>
    )
}

export default Weekend