import { assets } from '@/assets/assets'
import React from 'react'
const data = [assets.journal_15, assets.journal_16, assets.journal_17, assets.journal_18, assets.journal_16, assets.journal_15]

const JournalHero = () => {
  return (
    <div className='py-6 md:py-10 xl:py-14'>
      <div className='bg-[#F6FCDF] w-full px-4 md:px-6 lg:px-32 flex flex-col items-center justify-center gap-2 md:gap-4 lg:gap-8'>
        <p className='boska font-normal text-[#859F3E] text-base md:text-xl lg:text-[1.75rem] leading-tight uppercase text-center'>farm journal</p>
        <p className='uppercase text-[#859F3E] font-semibold text-lg md:text-3xl lg:text-[3.5rem] text-center'>&apos;&apos;Where Every Seed Tells a Story, And Every Field Holds a Memory.&apos;&apos;</p>
      </div>
      <div className='relative flex flex-col items-center gap-2 md:gap-3 lg:gap-4 w-full overflow-hidden '>
        <img src={assets.ellipse1} alt="" className='w-full absolute top-0 -translate-y-1/2 scale-105' />
        <div className='flex items-center justify-center gap-2 md:gap-4 lg:gap-6'>
          {
            data.map((item, index) => (
              <img key={index} src={data[index]} alt="" className='w-1/5 h-auto' />
            ))
          }
        </div>
        <img src={assets.ellipse2} alt="" className='w-full absolute bottom-0 translate-y-1/2 scale-105' />
      </div>
    </div>
  )
}

export default JournalHero