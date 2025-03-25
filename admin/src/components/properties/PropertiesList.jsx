import { assets } from '@/assets/assets'
import { IndianRupee } from 'lucide-react'
import React from 'react'
import { Link } from 'react-router-dom'

const PropertiesList = () => {
    return (
        <div className='my-2 md:my-4 xl:my-6 relative clashdisplay'>
            <div className='grid md:grid-cols-[1fr_1fr] lg:grid-cols-[1fr_1fr_1fr] gap-1.5 md:gap-x-3 lg:gap-x-5 gap-y-2 md:gap-y-4 lg:gap-y-6'>
                {
                    [...Array(6)].map((item, index) => (
                        <Link to={'/properties/1'} key={index} className='flex flex-col items-start justify-between gap-2 md:gap-4 lg:gap-6 text-[#31511E]'>
                            <div className='relative'>
                                <img src={assets.properties_1} alt="" className='w-full h-auto' />
                                <div className='absolute inset-0 bg-[#00000033]'></div>
                            </div>
                            <div className='flex flex-col items-start gap-2 md:gap-3 lg:gap-4'>
                                <div className='flex flex-col gap-0.5 md:gap-1 lg:gap-2'>
                                    <p className='capitalize font-bold text-xs md:text-lg lg:text-2xl'>VM's Lakeview Farms</p>
                                    <p className='capitalize font-normal text-[0.625rem] md:text-base lg:text-xl'>Nandi Hills, Chikballapur, Karnataka</p>
                                </div>
                                <div className="flex gap-2 md:gap-4 h-full items-end">
                                    <p className="flex items-end font-bold text-xl md:text-2xl lg:text-4xl">
                                        <IndianRupee className="size-4 md:size-6 lg:size-8 -translate-y-2" />
                                        1.75
                                        <span className="text-base md:text-xl lg:text-3xl pl-1 md:pl-2">cr</span>
                                    </p>
                                    <p className="text-[#A0AF98] font-normal text-xs md:text-sm lg:text-base -translate-y-0.5">Onwards</p>
                                </div>
                            </div>
                        </Link>
                    ))
                }
            </div>
        </div>
    )
}

export default PropertiesList