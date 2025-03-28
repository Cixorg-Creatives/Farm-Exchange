import { assets } from '@/assets/assets'
import React from 'react'

const VideoHero = () => {
    return (
        <div className='py-6 md:py-10 xl:py-14'>
            <div className='relative grid grid-cols-2'>
                <img src={assets.video_1} alt="" className='col-span-1 w-full h-full' />
                <img src={assets.video_2} alt="" className='col-span-1 w-full h-full' />
                <div className='absolute inset-0 bg-black/30 flex pt-3.5 md:pt-7 lg:pt-14 flex-col'>
                    <p className='w-2/3 text-right text-[#F6FCDF] font-semibold text-[3.4rem] md:text-9xl lg:text-[12.5rem] prata leading-relaxed'>Green </p>
                    <p className='w-[84%] text-right text-[#F6FCDF] font-semibold text-[3.4rem] md:text-9xl lg:text-[12.5rem] prata leading-[50%]'>Fields </p>
                </div>
            </div>
        </div>
    )
}

export default VideoHero