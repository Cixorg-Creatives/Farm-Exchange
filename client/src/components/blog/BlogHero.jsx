import React from 'react';

const BlogHero = () => {
    return (
        <div className='py-6 md:py-10 xl:py-14 flex flex-col items-start'>
            <p className='uppercase text-[#31511E] font-normal text-lg md:text-2xl lg:text-[2rem]'>March 12, 2025</p>
            <p className='uppercase prata text-[#31511E] font-semibold text-[2.5rem] md:text-6xl lg:text-[5rem] leading-tight'>The Story Behind Farm Exchange</p>
            <div className='w-3/4 lg:w-1/2 flex flex-row items-start justify-between old-standard-tt gap-4 md:gap-8 mt-6'>
                <div className='flex flex-col items-start justify-between'>
                    <p className='capitalize text-black text-base md:text-xl lg:text-[1.75rem] leading-tight'>Written By</p>
                    <p className='uppercase text-[#859F3E] font-medium text-lg md:text-2xl lg:text-[2rem]'>Abcdefghi</p>
                </div>
                <div className='flex flex-col items-start justify-between'>
                    <p className='capitalize text-black text-base md:text-xl lg:text-[1.75rem] leading-tight'>Category</p>
                    <p className='uppercase text-[#859F3E] font-medium text-lg md:text-2xl lg:text-[2rem]'>Abcdefghi</p>
                </div>
            </div>
        </div>
    );
};

export default BlogHero;