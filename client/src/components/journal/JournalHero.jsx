import React from 'react';

const JournalHero = () => {
    return (
        <div className='py-10 md:py-20 lg:py-44 flex flex-col items-start'>
            <p className='uppercase old-standard-tt text-[#31511E] font-normal text-lg md:text-2xl lg:text-[2rem]'>March 12, 2025</p>
            <p className='uppercase prata text-[#31511E] font-bold text-3xl md:text-6xl lg:text-[6.25rem] leading-tight md:leading-snug'>The Story Behind Farm Exchange</p>
            <div className='w-3/4 lg:w-1/2 flex flex-row items-start justify-between old-standard-tt gap-4 md:gap-8 mt-6'>
                <div className='flex flex-col items-start justify-between'>
                    <p className='capitalize text-black font-normal text-base md:text-xl lg:text-3xl'>Written By</p>
                    <p className='uppercase text-[#859F3E] font-medium text-lg md:text-2xl lg:text-[2rem]'>Abcdefghi</p>
                </div>
                <div className='flex flex-col items-start justify-between'>
                    <p className='capitalize text-black font-normal text-base md:text-xl lg:text-3xl'>Category</p>
                    <p className='uppercase text-[#859F3E] font-medium text-lg md:text-2xl lg:text-[2rem]'>Abcdefghi</p>
                </div>
            </div>
        </div>
    );
};

export default JournalHero;