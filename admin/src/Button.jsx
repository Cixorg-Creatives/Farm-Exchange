import { ArrowUpRight } from 'lucide-react'
import React from 'react'

const Button = ({title}) => {
    return (
        <div className='clashdisplay group w-fit bg-[#859F3E] flex items-center justify-center gap-0.5 md:gap-1 lg:gap-1.5 mb-2 md:mb-4 xl:mb-6 text-white font-semibold text-base md:text-lg lg:text-2xl py-1 md:py-2 lg:py-3 px-2 md:px-4 lg:px-6 rounded-sm md:rounded-md lg:rounded-lg active:scale-50 duration-300 ease-in-out'>{title} <ArrowUpRight className='w-4 md:w-6 lg:w-8 h-auto group-active:rotate-45 duration-150 ease-in' /></div>
    )
}

export default Button