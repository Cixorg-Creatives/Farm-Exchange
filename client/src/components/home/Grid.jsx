import { assets } from '@/assets/assets';
import { ArrowUpRight } from 'lucide-react';
import React from 'react';

const Grid = () => {
  return (
    <div className='bg-[#F6FCDF] py-8 lg:py-20 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5'>
      <div className='relative group overflow-hidden col-span-1 lg:row-span-3 rounded-2xl h-[23.438rem] md:h-[36rem] sm:h-[15rem]'>
        <img src={assets.home_3} alt='' className='w-full h-full group-hover:scale-105 duration-200 ease-in rounded-2xl object-cover' />
        <div className='absolute inset-0 bg-black/40 rounded-2xl p-5 md:p-6'>
          <div className='flex flex-col items-start gap-2 md:gap-3 group-hover:translate-y-2.5 duration-200 ease-in'>
            <p className='uppercase buda text-[#F6FCDF] font-light text-4xl md:text-5xl lg:text-[3.5rem] leading-tight'>Farm Land</p>
            <p className='buda text-[#F6FCDF] font-light text-2xl md:text-3xl leading-snug'>Buy, Sell & Invest in Agricultural Lands with Ease</p>
            <p className='text-[#859F3E] old-standard-tt text-lg md:text-xl font-normal leading-7 flex gap-3'>Explore Now <ArrowUpRight /></p>
          </div>
        </div>
      </div>
      <div className='relative group overflow-hidden col-span-1 lg:col-span-2 rounded-2xl lg:row-span-3 h-[23.438rem] md:h-[36rem] sm:h-[15rem]'>
        <img src={assets.home_4} alt='' className='w-full h-full group-hover:scale-105 duration-200 ease-in rounded-2xl object-cover' />
        <div className='absolute inset-0 bg-black/40 rounded-2xl p-5 md:p-6'>
          <div className='flex flex-col items-start justify-end gap-2 md:gap-3 group-hover:-translate-y-2.5 duration-200 ease-in h-full w-full md:w-1/2'>
            <p className='uppercase buda text-[#F6FCDF] font-light text-4xl md:text-5xl lg:text-[3.5rem] leading-tight'>Farm House</p>
            <p className='buda text-[#F6FCDF] font-light text-2xl md:text-3xl leading-snug'>Buy, Sell & Invest in Farm House with Ease</p>
            <p className='text-[#859F3E] old-standard-tt text-lg md:text-xl font-normal leading-7 flex gap-3'>Explore Now <ArrowUpRight /></p>
          </div>
        </div>
      </div>
      <div className='relative group overflow-hidden col-span-1 lg:col-span-2 rounded-2xl h-[23.438rem] md:h-[24rem] sm:h-[15rem]'>
        <img src={assets.home_5} alt='' className='w-full h-full group-hover:scale-105 duration-200 ease-in rounded-2xl object-cover' />
        <div className='absolute inset-0 bg-black/40 rounded-2xl p-5 md:p-6'>
          <div className='flex flex-col items-start justify-end gap-2 md:gap-3 group-hover:translate-x-2.5 duration-200 ease-in h-full w-full md:w-1/2'>
            <p className='uppercase buda text-[#F6FCDF] font-light text-4xl md:text-5xl lg:text-[3.5rem] leading-tight'>Agriculture Land</p>
            <p className='buda text-[#F6FCDF] font-light text-2xl md:text-3xl leading-snug'>Buy, Sell & Invest in Agriculture Land with Ease</p>
            <p className='text-[#859F3E] old-standard-tt text-lg md:text-xl font-normal leading-7 flex gap-3'>Explore Now <ArrowUpRight /></p>
          </div>
        </div>
      </div>
      <div className='relative group overflow-hidden col-span-1 h-[23.438rem] rounded-2xl md:h-[24rem] sm:h-[15rem]'>
        <img src={assets.home_6} alt='' className='w-full h-full group-hover:scale-105 duration-200 ease-in rounded-2xl object-cover' />
        <div className='absolute inset-0 bg-black/40 rounded-2xl p-5 md:p-6'>
          <div className='flex flex-col items-start justify-end gap-2 md:gap-3 group-hover:-translate-x-2.5 duration-200 ease-in h-full text-right'>
            <p className='uppercase buda text-[#F6FCDF] font-light text-4xl md:text-5xl lg:text-[3.5rem] leading-tight text-right w-full'>Farm House</p>
            <p className='buda text-[#F6FCDF] font-light text-2xl md:text-3xl leading-snug text-right'>Buy, Sell & Invest in Farm House with Ease</p>
            <p className='text-[#859F3E] old-standard-tt text-lg md:text-xl font-normal leading-7 flex w-full justify-end gap-3'>Explore Now <ArrowUpRight /></p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Grid;