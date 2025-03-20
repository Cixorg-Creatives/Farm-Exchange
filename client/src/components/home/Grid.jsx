import { assets } from '@/assets/assets';
import { ArrowUpRight } from 'lucide-react';
import React from 'react';

const Grid = () => {
  return (
    <div className='bg-[#F6FCDF] my-6 md:my-10 xl:my-14 grid grid-cols-[1fr_1fr] lg:grid-cols-[1fr_1fr_1fr] gap-2 md:gap-3 lg:gap-5'>
      <div className='relative group overflow-hidden col-span-1 lg:row-span-3 rounded-2xl h-[15rem] sm:h-[18rem] md:h-[36rem]'>
        <img src={assets.home_3} alt='' className='w-full h-full group-hover:scale-105 duration-200 ease-in rounded-2xl object-cover' />
        <div className='absolute inset-0 bg-black/40 rounded-2xl p-5 md:p-6'>
          <div className='h-full flex flex-col items-start justify-end lg:justify-start gap-2 md:gap-3 duration-200 ease-in'>
            <p className='uppercase buda text-[#F6FCDF] font-light text-xl sm:text-3xl md:text-5xl lg:text-[3.5rem] leading-tight w-full text-right lg:text-start'>Farm Land</p>
            <p className='buda text-[#F6FCDF] font-light text-sm sm:text-xl md:text-3xl leading-snug text-right lg:text-start'>Buy, Sell & Invest in Agricultural Lands with Ease</p>
            <p className='text-[#859F3E] old-standard-tt text-xs sm:text-base md:text-xl font-normal leading-7 flex items-center w-full justify-end lg:justify-start gap-1 md:gap-2 lg:gap-3'>Explore Now <ArrowUpRight className='size-3 md:size-4 lg:size-5' /></p>
          </div>
        </div>
      </div>
      <div className='relative group overflow-hidden col-span-1 lg:col-span-2 rounded-2xl lg:row-span-3 h-[15rem] sm:h-[18rem] md:h-[36rem]'>
        <img src={assets.home_4} alt='' className='w-full h-full group-hover:scale-105 duration-200 ease-in rounded-2xl object-cover' />
        <div className='absolute inset-0 bg-black/40 rounded-2xl p-5 md:p-6'>
          <div className='flex flex-col items-start justify-end gap-2 md:gap-3 duration-200 ease-in h-full w-full md:w-1/2'>
            <p className='uppercase buda text-[#F6FCDF] font-light text-xl sm:text-3xl md:text-5xl lg:text-[3.5rem] leading-tight w-full text-right lg:text-start'>Farm House</p>
            <p className='buda text-[#F6FCDF] font-light text-sm sm:text-xl md:text-3xl leading-snug text-right lg:text-start'>Buy, Sell & Invest in Farm House with Ease</p>
            <p className='text-[#859F3E] old-standard-tt text-xs sm:text-base md:text-xl font-normal leading-7 flex items-center w-full justify-end lg:justify-start gap-1 md:gap-2 lg:gap-3'>Explore Now <ArrowUpRight className='size-3 md:size-4 lg:size-5' /></p>
          </div>
        </div>
      </div>
      <div className='relative group overflow-hidden col-span-1 lg:col-span-2 rounded-2xl h-[15rem] sm:h-[18rem] md:h-[24rem]'>
        <img src={assets.home_5} alt='' className='w-full h-full group-hover:scale-105 duration-200 ease-in rounded-2xl object-cover' />
        <div className='absolute inset-0 bg-black/40 rounded-2xl p-5 md:p-6'>
          <div className='flex flex-col items-start justify-end gap-2 md:gap-3 duration-200 ease-in h-full w-full md:w-1/2'>
            <p className='uppercase buda text-[#F6FCDF] font-light text-xl sm:text-3xl md:text-5xl lg:text-[3.5rem] leading-tight w-full text-right lg:text-start'>Agriculture Land</p>
            <p className='buda text-[#F6FCDF] font-light text-sm sm:text-xl md:text-3xl leading-snug text-right lg:text-start'>Buy, Sell & Invest in Agriculture Land with Ease</p>
            <p className='text-[#859F3E] old-standard-tt text-xs sm:text-base md:text-xl font-normal leading-7 flex items-center w-full justify-end lg:justify-start gap-1 md:gap-2 lg:gap-3'>Explore Now <ArrowUpRight className='size-3 md:size-4 lg:size-5' /></p>
          </div>
        </div>
      </div>
      <div className='relative group overflow-hidden col-span-1 rounded-2xl h-[15rem] sm:h-[18rem] md:h-[24rem]'>
        <img src={assets.home_6} alt='' className='w-full h-full group-hover:scale-105 duration-200 ease-in rounded-2xl object-cover' />
        <div className='absolute inset-0 bg-black/40 rounded-2xl p-5 md:p-6'>
          <div className='flex flex-col items-start justify-end gap-2 md:gap-3 duration-200 ease-in h-full text-right'>
            <p className='uppercase buda text-[#F6FCDF] font-light text-xl sm:text-3xl md:text-5xl lg:text-[3.5rem] leading-tight text-right w-full'>Farm House</p>
            <p className='buda text-[#F6FCDF] font-light text-sm sm:text-xl md:text-3xl leading-snug text-right'>Buy, Sell & Invest in Farm House with Ease</p>
            <p className='text-[#859F3E] old-standard-tt text-xs sm:text-base md:text-xl font-normal leading-7 flex w-full items-center justify-end gap-1 md:gap-2 lg:gap-3'>Explore Now <ArrowUpRight className='size-3 md:size-4 lg:size-5' /></p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Grid;