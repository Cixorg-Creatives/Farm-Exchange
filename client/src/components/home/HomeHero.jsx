"use client"
import { assets } from '@/assets/assets'
import React from 'react'
import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import Button from '../Button'

const HomeHero = () => {
  return (
    <div className='py-6 md:py-10 xl:py-14'>
      <div className='hidden md:flex relative w-full h-full rounded-3xl'>
        <img src={assets.home_12} alt="" className='rounded-3xl w-full lg:h-[90vh]' />
        <div className='absolute left-16 top-1/3 bg-transparent flex flex-col'>
          <div className='flex gap-2 md:gap-4 lg:gap-6'>
            <motion.p className='uppercase text-white font-semibold text-[5rem] leading-tight' initial={{ opacity: 0, y: 50 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.5, delay: 0 }} viewport={{ once: true }}>CONNECTING</motion.p>
            <motion.p className='uppercase text-white font-semibold text-[5rem] leading-tight' initial={{ opacity: 0, y: 50 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.5, delay: 0.5 }} viewport={{ once: true }}>FARMS,</motion.p>
          </div>
          <motion.p className='uppercase text-white font-semibold text-[4rem] leading-tight lg:mb-3' initial={{ opacity: 0, y: 50 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.5, delay: 1.0 }} viewport={{ once: true }}>GROWING TOGETHER</motion.p>
          <motion.p className='capitalize text-[#D9D9D9] font-semibold text-xs md:text-lg lg:text-2xl leading-tight' initial={{ opacity: 0, x: -50 }} whileInView={{ opacity: 1, x: 0 }} transition={{ duration: 0.5, delay: 1.5 }} viewport={{ once: true }}>Empowering Farms, Connecting Markets, <br /> and Growing Together for a Thriving <br /> Future.</motion.p>
        </div>
        <div className='h-52 absolute bottom-0 right-0  w-[46%]'>
          <div className='h-full flex items-center justify-between pl-5'>
            <div className='h-full flex flex-col justify-between'>
              <div className='uppercase boska text-[#859F3E] font-normal text-2xl leading-tight w-80'>Seamlessly connect <br /> growers and buyers <br /> for a fair <br /> marketplace.</div>
              <Link to={'/post-property'}><Button title='Explore Services' variant='primary' icon='show' /></Link>
            </div>
            <div className='relative'>
              <img src={assets.home_2} alt="" className='h-52 w-52 rounded-r-3xl' />
              <div className='absolute inset-0 bg-[#859F3E66] rounded-r-3xl'>
                <p className=' uppercase text-[#073D2C] font-semibold text-base leading-tight py-6 px-4'>28% Market Insights Processed</p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className='md:hidden flex flex-col gap-2'>
        <div className='relative w-full h-full rounded-xl'>
          <img src={assets.home_1} alt="" className='rounded-xl w-full h-full' />
          <div className='absolute inset-0 bg-black/30 rounded-xl flex flex-col items-start justify-center px-4'>
            <div className='flex gap-2 md:gap-4 lg:gap-6'>
              <motion.p className='uppercase text-white font-semibold text-3xl md:text-5xl leading-tight' initial={{ opacity: 0, y: 50 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.5, delay: 0 }} viewport={{ once: true }}>CONNECTING</motion.p>
              <motion.p className='uppercase text-white font-semibold text-3xl md:text-5xl leading-tight' initial={{ opacity: 0, y: 50 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.5, delay: 0.5 }} viewport={{ once: true }}>FARMS,</motion.p>
            </div>
            <motion.p className='uppercase text-white font-semibold text-2xl md:text-4xl leading-tight mb-1 md:mb-2' initial={{ opacity: 0, y: 50 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.5, delay: 1.0 }} viewport={{ once: true }}>GROWING TOGETHER</motion.p>
            <motion.p className='capitalize text-[#D9D9D9] font-semibold text-[10px] md:text-sm leading-tight' initial={{ opacity: 0, x: -50 }} whileInView={{ opacity: 1, x: 0 }} transition={{ duration: 0.5, delay: 1.5 }} viewport={{ once: true }}>Empowering Farms, Connecting Markets, <br /> and Growing Together for a Thriving <br /> Future.</motion.p>
          </div>
        </div>
        <div className='h-32 md:h-44 flex items-center justify-between pl-4'>
          <div className='h-full flex flex-col justify-between w-1/2'>
            <div className='uppercase boska text-[#859F3E] font-normal text-sm md:text-base leading-tight'>Seamlessly connect <br /> growers and buyers <br /> for a fair <br />marketplace.</div>
            <Link to={'/post-property'}><Button title='Explore Services' variant='primary' icon='show' /></Link>
          </div>
          <div className='relative w-1/3'>
            <img src={assets.home_2} alt="" className='h-32 md:h-44 w-full rounded-r-xl' />
            <div className='absolute inset-0 bg-[#859F3E66] rounded-r-xl'>
              <p className='uppercase text-[#073D2C] font-semibold text-[11px] md:text-sm leading-tight py-4 md:py-5 px-2 md:px-3'>28% Market Insights Processed</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default HomeHero