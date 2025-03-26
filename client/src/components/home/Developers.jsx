"use client"
import { assets } from '@/assets/assets'
import { ArrowUpRight } from 'lucide-react'
import React, { useRef, useState } from 'react'
import Button from '../Button'

const data = [
  {
    stat: '2014',
    detail: 'Year Established',
  },
  {
    stat: '6',
    detail: 'Active Properties',
  },
  {
    stat: '14',
    detail: 'Total Properties',
  }
]

const Developers = () => {

  const scrollRef = useRef(null);
  const [isDragging, setIsDragging] = useState(false);
  const [startX, setStartX] = useState(0);
  const [scrollLeft, setScrollLeft] = useState(0);

  // Mouse Down (Start Drag)
  const handleMouseDown = (e) => {
    if (e.button !== 0) return; // Only allow left mouse button
    setIsDragging(true);
    setStartX(e.pageX - scrollRef.current.offsetLeft);
    setScrollLeft(scrollRef.current.scrollLeft);
  };

  // Mouse Move (While Dragging)
  const handleMouseMove = (e) => {
    if (!isDragging) return;
    e.preventDefault();
    const x = e.pageX - scrollRef.current.offsetLeft;
    const walk = (x - startX) * 1; // Adjust speed
    scrollRef.current.scrollLeft = scrollLeft - walk;
  };

  // Mouse Up (End Drag)
  const handleMouseUp = () => {
    setIsDragging(false);
  };

  return (
    <div className='py-6 md:py-10 xl:py-14 no-copy'>
      <div className='w-full md:w-3/5 flex flex-col items-start justify-start gap-2 md:gap-5'>
        <h1 className='boska font-normal text-[#859F3E] text-base md:text-xl lg:text-[1.75rem] leading-tight uppercase'>featured developer</h1>
        <p className='capitalize text-[#31511E] font-semibold text-xl md:text-3xl lg:text-6xl leading-tight'>The Most Renowned and <br /> Influential Developers in <br /> the Industry</p>
      </div>
      <div className='overflow-x-auto w-full cursor-pointer mt-4 md:mt-8 lg:mt-12' ref={scrollRef} onMouseDown={handleMouseDown} onMouseMove={handleMouseMove} onMouseUp={handleMouseUp}>
        <div className='flex gap-6 md:gap-12 w-full md:w-[180%] h-66 md:h-88'>
          {
            [...Array(3)].map((item, index) => (
              <div key={index} className='flex gap-2 md:gap-5'>
                <div className='relative'>
                  <img src={assets.home_22} alt="" className='w-66 h-66 md:h-88' />
                  <div className='absolute inset-0 bg-black/30'></div>
                  <div className='absolute bottom-0 right-0 bg-[#F6FCDF] size-16 md:size-20'>
                    <div className='bg-[#233A15] mt-2 ml-2 flex size-[3.5rem] md:size-[4.5rem] items-center justify-center'>
                      <ArrowUpRight className='text-[#F2F9DE] size-10' />
                    </div>
                  </div>
                </div>
                <div className='bg-[#233A15] w-[35rem] p-6 flex flex-col items-start justify-center gap-6 md:gap-10'>
                  <div className='flex flex-col gap-1 md:gap-2'>
                    <p className='uppercase text-[#859F3E] font-bold text-xs md:text-lg lg:text-2xl leading-tight'>Blooms</p>
                    <p className='capitalize text-[#5A744B] font-normal text-[10px] md:text-xs lg:text-sm leading-tight'>Building dreams, shaping skylines Blooms is a trusted leader in real estate development. With a commitment to quality, innovation, and sustainability, we create spaces that inspire and elevate lifestyles.</p>
                  </div>
                  <div className='flex items-center justify-start gap-4 md:gap-7'>
                    {
                      data.map((item, index) => (
                        <div key={index} className='flex flex-col gap-0.5 md:gap-1'>
                          <p className='text-[#F2F9DE] font-semibold text-xs md:text-lg lg:text-2xl leading-tight'>{item.stat}</p>
                          <p className='capitalize text-[#5A744B] font-normal text-[10px] md:text-xs lg:text-sm leading-tight'>{item.detail}</p>
                        </div>
                      ))
                    }
                  </div>
                  <div className='flex-col items-center justify-start'>
                    <div className='uppercase text-[#859F3E] font-semibold text-xs md:text-sm lg:text-base leading-tight mb-1 md:mb-2 lg:mb-3'>Popular Projects</div>
                    <div className='flex flex-col items-start gap-0'>
                      <Button title='Tapovan' icon='show' className='text-[#F2F9DE] font-semibold text-xs md:text-sm lg:text-base leading-tight !p-0' />
                      <Button title='Mayurvan Farmland' icon='show' className='text-[#F2F9DE] font-semibold text-xs md:text-sm lg:text-base leading-tight !p-0' />
                    </div>
                  </div>
                </div>
              </div>
            ))
          }
        </div>
      </div>
    </div>
  )
}

export default Developers