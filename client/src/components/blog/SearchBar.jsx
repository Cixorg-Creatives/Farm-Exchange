import { Search } from 'lucide-react'
import React from 'react'

const SearchBar = () => {
    return (
        <div className='pb-6 md:pb-10 xl:pb-14 inter'>
            <div className='w-full md:h-24 bg-[#D9E1C3] flex flex-col md:flex-row items-center justify-between old-standard-tt py-3 md:py-0 px-2 md:px-4 lg:px-8'>
                <div className='uppercase text-[#31511E] font-bold text-xl md:text-2xl lg:text-[1.75rem]'>FARM BLOGS</div>
                <div className='w-full md:w-1/3 bg-[#C7D3A6] h-4 md:h-8 lg:h-14 py-4 px-6 flex items-center justify-start gap-1 md:gap-2 lg:gap-3'>
                    <Search className='size-4 md:size-6 text-black -translate-y-[1px]' />
                    <input className="h-4 md:h-6 capitalize text-sm md:text-base lg:text-xl font-normal outline-none bg-transparent" placeholder="Search" />
                </div>
            </div>
        </div>
    )
}

export default SearchBar