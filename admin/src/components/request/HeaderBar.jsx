import React, { useState } from 'react'
import Filter from '../Filter';

const HeaderBar = () => {

    const [selectedFilter, setSelectedFilter] = useState("latest");

    const filterOptions = [
        { value: "latest", label: "Date Modified" },
        { value: "earliest", label: "Date Modified" },
    ];

    return (
        <div className='my-2 md:my-4 xl:my-6'>
            <div className='w-full md:h-24 bg-[#D9E1C3] flex flex-col md:flex-row items-center justify-between boska py-3 md:py-0 px-2 md:px-4 lg:px-8 rounded-sm md:rounded-md lg:rounded-lg gap-3 md:gap-6 lg:gap-0'>
                <h1 className="boska w-full uppercase text-black font-semibold text-base md:text-lg lg:text-[2rem] text-start align-middle">
                    post property request
                </h1>
                <div className='lg:w-[15rem]'><Filter options={filterOptions} onSelect={setSelectedFilter} selectedOption={selectedFilter} /></div>
                {/* <div className='w-full md:w-1/3 bg-[#C7D3A6] h-4 md:h-8 lg:h-14 py-4 px-6 flex items-center justify-start gap-1 md:gap-2 lg:gap-3 rounded-sm md:rounded-md lg:rounded-lg clashdisplay'>
                    <Search className='h-4 md:h-6 w-auto text-black' />
                    <input className="h-4 md:h-6 capitalize text-sm md:text-base lg:text-xl font-normal outline-none bg-transparent" placeholder="Search" />
                </div> */}
            </div>
        </div>
    )
}

export default HeaderBar