import { assets } from '@/assets/assets';
import { ArrowUpRight } from 'lucide-react';
import React from 'react';
import { Link } from 'react-router-dom';

const Grid = () => {
  return (
    <div className='py-6 md:py-10 lg:py-14 grid grid-cols-[1fr_1fr] md:grid-cols-[1fr_1fr_1fr] gap-2 md:gap-3 lg:gap-5'>
      <Link to={'/properties?type=farmland'} className='relative group overflow-hidden col-span-1 md:row-span-3 rounded-2xl h-[15rem] sm:h-[18rem] md:h-[36rem]'>
        <img src={assets.home_3} alt='' className='w-full h-full group-hover:scale-105 duration-200 ease-in rounded-2xl object-cover' />
        <div className='absolute inset-0 bg-black/40 rounded-2xl p-5 md:p-6'>
          <div className='h-full flex flex-col items-start justify-end md:justify-start gap-2 md:gap-3 duration-200 ease-in'>
            <p className='uppercase boska text-[#F6FCDF] font-normal text-xl md:text-3xl lg:text-[3.25rem] leading-tight w-full text-right md:text-start'>Farm Land</p>
            <p className='uppercase text-[#F6FCDF] font-light text-sm md:text-base lg:text-2xl leading-tight text-right md:text-start'>Buy, Sell & Invest in Farm Lands with Ease</p>
            {/* <p className='text-[#859F3E] text-xs sm:text-base md:text-xl font-normal leading-7 flex items-center w-full justify-end lg:justify-start gap-1 md:gap-2 lg:gap-3'>Explore Now <ArrowUpRight className='size-3 md:size-4 lg:size-5' /></p> */}
          </div>
        </div>
      </Link>
      <Link to={'/properties?type=coffee'} className='relative group overflow-hidden col-span-1 md:col-span-2 rounded-2xl md:row-span-3 h-[15rem] sm:h-[18rem] md:h-[36rem]'>
        <img src={assets.home_4} alt='' className='w-full h-full group-hover:scale-105 duration-200 ease-in rounded-2xl object-cover' />
        <div className='absolute inset-0 bg-black/40 rounded-2xl p-5 md:p-6'>
          <div className='flex flex-col items-start justify-end gap-2 md:gap-3 duration-200 ease-in h-full w-full md:w-1/2'>
            <p className='uppercase boska text-[#F6FCDF] font-normal text-xl md:text-3xl lg:text-[3.25rem] leading-tight w-full text-right md:text-start'>Coffee Estate</p>
            <p className='uppercase text-[#F6FCDF] font-light text-sm md:text-base lg:text-2xl leading-tight text-right md:text-start'>Buy, Sell & Invest in Coffee Estate with Ease</p>
            {/* <p className='text-[#859F3E] text-xs sm:text-base md:text-xl font-normal leading-7 flex items-center w-full justify-end lg:justify-start gap-1 md:gap-2 lg:gap-3'>Explore Now <ArrowUpRight className='size-3 md:size-4 lg:size-5' /></p> */}
          </div>
        </div>
      </Link>
      <Link to={'/properties?type=agricultureland'} className='relative group overflow-hidden col-span-1 md:col-span-2 rounded-2xl h-[15rem] sm:h-[18rem] md:h-[24rem]'>
        <img src={assets.home_5} alt='' className='w-full h-full group-hover:scale-105 duration-200 ease-in rounded-2xl object-cover' />
        <div className='absolute inset-0 bg-black/40 rounded-2xl p-5 md:p-6'>
          <div className='flex flex-col items-start justify-end md:justify-center gap-2 md:gap-3 duration-200 ease-in h-full w-full'>
            <p className='uppercase boska text-[#F6FCDF] font-normal text-xl md:text-3xl lg:text-[3.25rem] leading-tight w-full text-right md:text-start'>Agriculture Land</p>
            <p className='uppercase text-[#F6FCDF] font-light text-sm md:text-base lg:text-2xl leading-tight text-right md:text-start'>Buy, Sell & Invest in Agriculture <br /> Land with Ease</p>
            {/* <p className='text-[#859F3E] text-xs sm:text-base md:text-xl font-normal leading-7 flex items-center w-full justify-end lg:justify-start gap-1 md:gap-2 lg:gap-3'>Explore Now <ArrowUpRight className='size-3 md:size-4 lg:size-5' /></p> */}
          </div>
        </div>
      </Link>
      <Link to={'/properties?type=farmhouse'} className='relative group overflow-hidden col-span-1 rounded-2xl h-[15rem] sm:h-[18rem] md:h-[24rem]'>
        <img src={assets.home_6} alt='' className='w-full h-full group-hover:scale-105 duration-200 ease-in rounded-2xl object-cover' />
        <div className='absolute inset-0 bg-black/40 rounded-2xl p-5 md:p-6'>
          <div className='flex flex-col items-start justify-end gap-2 md:gap-3 duration-200 ease-in h-full text-right'>
            <p className='uppercase boska text-[#F6FCDF] font-normal text-xl md:text-3xl lg:text-[3.25rem] leading-tight text-right w-full'>Farm House</p>
            <p className='uppercase text-[#F6FCDF] font-light text-sm md:text-base lg:text-2xl leading-tight text-right'>Buy, Sell & Invest in Farm House with Ease</p>
            {/* <p className='text-[#859F3E] text-xs sm:text-base md:text-xl font-normal leading-7 flex w-full items-center justify-end gap-1 md:gap-2 lg:gap-3'>Explore Now <ArrowUpRight className='size-3 md:size-4 lg:size-5' /></p> */}
          </div>
        </div>
      </Link>
    </div>
  );
};

export default Grid;