import React, { useState } from 'react'
import Filter from '../Filter';

const HeaderBar = () => {

    return (
        <div className='mb-2 md:mb-4 xl:mb-6'>
            <div className='w-full md:h-24 bg-[#D9E1C3] flex flex-col md:flex-row items-center justify-between boska py-3 md:py-0 px-2 md:px-4 lg:px-8 rounded-sm md:rounded-md lg:rounded-lg gap-3 md:gap-6 lg:gap-0'>
                <h1 className="boska w-full uppercase text-black font-semibold text-base md:text-lg lg:text-[2rem] text-start align-middle">
                    Admin Dashboard
                </h1>
            </div>
        </div>
    )
}

export default HeaderBar