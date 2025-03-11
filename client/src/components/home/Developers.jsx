"use client"
import { assets } from '@/assets/assets'
import { ArrowUpRight } from 'lucide-react'
import React, { useRef, useState } from 'react'

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
    <div className='my-6 md:my-10 xl:my-14 old-standard-tt no-copy'>
      <div className='w-full md:w-3/5 flex flex-col items-start justify-start gap-2 md:gap-5'>
        <p className='uppercase text-[#859F3E] font-bold text-base md:text-[1.75rem] md:leading-8'>featured developer</p>
        <p className='capitalize text-[#31511E] font-normal text-2xl md:text-6xl md:leading-20'>The Most Renowned and Influential Developers in the Industry</p>
      </div>
      <div className='overflow-x-auto w-full cursor-pointer' ref={scrollRef} onMouseDown={handleMouseDown} onMouseMove={handleMouseMove} onMouseUp={handleMouseUp}>
        <div className='flex gap-6 md:gap-12 w-full md:w-[180%] h-66 md:h-88'>
          <div className='flex gap-2 md:gap-5'>
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
                <p className='uppercase text-[#859F3E] font-bold text-base md:text-2xl md:leading-8'>Blooms</p>
                <p className='capitalize text-[#5A744B] font-normal text-xs md:text-base md:leading-5'>Building dreams, shaping skylines Blooms is a trusted leader in real estate development. With a commitment to quality, innovation, and sustainability, we create spaces that inspire and elevate lifestyles.</p>
              </div>
              <div className='flex items-center justify-start gap-4 md:gap-7'>
                <div className='flex flex-col gap-0.5 md:gap-1'>
                  <p className='text-[#F2F9DE] font-bold text-base md:text-2xl md:leading-8'>2014</p>
                  <p className='capitalize text-[#5A744B] font-normal text-xs md:text-base md:leading-5'>Year Established</p>
                </div>
                <div className='flex flex-col gap-0.5 md:gap-1'>
                  <p className='text-[#F2F9DE] font-bold text-base md:text-2xl md:leading-8'>6</p>
                  <p className='capitalize text-[#5A744B] font-normal text-xs md:text-base md:leading-5'>Active Properties</p>
                </div>
                <div className='flex flex-col gap-0.5 md:gap-1'>
                  <p className='text-[#F2F9DE] font-bold text-base md:text-2xl md:leading-8'>14</p>
                  <p className='capitalize text-[#5A744B] font-normal text-xs md:text-base md:leading-5'>Total Properties</p>
                </div>
              </div>
              <div className='flex-col items-center justify-start w-44 gap-1 md:gap-3'>
                <p className='uppercase text-[#859F3E] font-normal text-xs md:text-base md:leading-5'>Popular Projects</p>
                <p className='capitalize text-[#F2F9DE] font-normal text-xs md:text-base md:leading-5 flex gap-2 items-start'>Tapovan <ArrowUpRight className='size-4' /> </p>
                <p className='capitalize text-[#F2F9DE] font-normal text-xs md:text-base md:leading-5 flex gap-2 items-start'>Mayurvan Farmland <ArrowUpRight className='size-4' /> </p>
              </div>
            </div>
          </div>
          <div className='flex gap-2 md:gap-5'>
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
                <p className='uppercase text-[#859F3E] font-bold text-base md:text-2xl md:leading-8'>Blooms</p>
                <p className='capitalize text-[#5A744B] font-normal text-xs md:text-base md:leading-5'>Building dreams, shaping skylines Blooms is a trusted leader in real estate development. With a commitment to quality, innovation, and sustainability, we create spaces that inspire and elevate lifestyles.</p>
              </div>
              <div className='flex items-center justify-start gap-4 md:gap-7'>
                <div className='flex flex-col gap-0.5 md:gap-1'>
                  <p className='text-[#F2F9DE] font-bold text-base md:text-2xl md:leading-8'>2014</p>
                  <p className='capitalize text-[#5A744B] font-normal text-xs md:text-base md:leading-5'>Year Established</p>
                </div>
                <div className='flex flex-col gap-0.5 md:gap-1'>
                  <p className='text-[#F2F9DE] font-bold text-base md:text-2xl md:leading-8'>6</p>
                  <p className='capitalize text-[#5A744B] font-normal text-xs md:text-base md:leading-5'>Active Properties</p>
                </div>
                <div className='flex flex-col gap-0.5 md:gap-1'>
                  <p className='text-[#F2F9DE] font-bold text-base md:text-2xl md:leading-8'>14</p>
                  <p className='capitalize text-[#5A744B] font-normal text-xs md:text-base md:leading-5'>Total Properties</p>
                </div>
              </div>
              <div className='flex-col items-center justify-start w-44 gap-1 md:gap-3'>
                <p className='uppercase text-[#859F3E] font-normal text-xs md:text-base md:leading-5'>Popular Projects</p>
                <p className='capitalize text-[#F2F9DE] font-normal text-xs md:text-base md:leading-5 flex gap-2 items-start'>Tapovan <ArrowUpRight className='size-4' /> </p>
                <p className='capitalize text-[#F2F9DE] font-normal text-xs md:text-base md:leading-5 flex gap-2 items-start'>Mayurvan Farmland <ArrowUpRight className='size-4' /> </p>
              </div>
            </div>
          </div>
          <div className='flex gap-2 md:gap-5'>
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
                <p className='uppercase text-[#859F3E] font-bold text-base md:text-2xl md:leading-8'>Blooms</p>
                <p className='capitalize text-[#5A744B] font-normal text-xs md:text-base md:leading-5'>Building dreams, shaping skylines Blooms is a trusted leader in real estate development. With a commitment to quality, innovation, and sustainability, we create spaces that inspire and elevate lifestyles.</p>
              </div>
              <div className='flex items-center justify-start gap-4 md:gap-7'>
                <div className='flex flex-col gap-0.5 md:gap-1'>
                  <p className='text-[#F2F9DE] font-bold text-base md:text-2xl md:leading-8'>2014</p>
                  <p className='capitalize text-[#5A744B] font-normal text-xs md:text-base md:leading-5'>Year Established</p>
                </div>
                <div className='flex flex-col gap-0.5 md:gap-1'>
                  <p className='text-[#F2F9DE] font-bold text-base md:text-2xl md:leading-8'>6</p>
                  <p className='capitalize text-[#5A744B] font-normal text-xs md:text-base md:leading-5'>Active Properties</p>
                </div>
                <div className='flex flex-col gap-0.5 md:gap-1'>
                  <p className='text-[#F2F9DE] font-bold text-base md:text-2xl md:leading-8'>14</p>
                  <p className='capitalize text-[#5A744B] font-normal text-xs md:text-base md:leading-5'>Total Properties</p>
                </div>
              </div>
              <div className='flex-col items-center justify-start w-44 gap-1 md:gap-3'>
                <p className='uppercase text-[#859F3E] font-normal text-xs md:text-base md:leading-5'>Popular Projects</p>
                <p className='capitalize text-[#F2F9DE] font-normal text-xs md:text-base md:leading-5 flex gap-2 items-start'>Tapovan <ArrowUpRight className='size-4' /> </p>
                <p className='capitalize text-[#F2F9DE] font-normal text-xs md:text-base md:leading-5 flex gap-2 items-start'>Mayurvan Farmland <ArrowUpRight className='size-4' /> </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Developers