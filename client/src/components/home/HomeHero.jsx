"use client"
import { assets } from '@/assets/assets'
import React from 'react'
import { Button } from '../ui/button'
import { ArrowUpRight } from 'lucide-react'
import { motion } from 'framer-motion'

const HomeHero = () => {
  return (
    <div className='my-6 md:my-10 xl:my-14'>
      <div className='hidden md:flex relative w-full h-full rounded-3xl'>
        <img src={assets.home_12} alt="" className='rounded-3xl w-full lg:h-[90vh]' />
        <div className='absolute left-16 top-1/3 bg-transparent flex flex-col'>
          <div className='flex gap-6'>
            <motion.p className='uppercase text-white prata font-normal text-7xl leading-24 mb-4' initial={{ opacity: 0, y: 50 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.5, delay: 0 }} viewport={{ once: true }}>CONNECTING</motion.p>
            <motion.p className='uppercase text-white prata font-normal text-7xl leading-24 mb-4' initial={{ opacity: 0, y: 50 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.5, delay: 0.5 }} viewport={{ once: true }}>FARMS,</motion.p>
          </div>
          <motion.p className='uppercase text-white prata font-normal text-6xl leading-20 mb-6' initial={{ opacity: 0, y: 50 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.5, delay: 1.0 }} viewport={{ once: true }}>GROWING TOGETHER</motion.p>
          <motion.p className='capitalize text-[#D9D9D9] old-standard-tt font-normal text-2xl leading-8 w-2/3' initial={{ opacity: 0, x: -50 }} whileInView={{ opacity: 1, x: 0 }} transition={{ duration: 0.5, delay: 1.5 }} viewport={{ once: true }}>Empowering Farms, Connecting Markets, and Growing Together for a Thriving Future.</motion.p>
        </div>
        <div className='absolute bottom-0 right-0  w-[46%]'>
          <div className='flex items-center justify-between pl-5 pt-5'>
            <div className='flex flex-col justify-between gap-12'>
              <div className='uppercase old-standard-tt text-[#859F3E] font-normal text-xl leading-7 w-80'>Seamlessly connect growers and buyers for a fair marketplace.</div>
              <div>
                <Button className='flex items-center justify-center gap-3 bg-[#859F3E] w-72 h-16 old-standard-tt text-white text-sm md:text-lg lg:text-2xl font-bold leading-6 md:leading-7 lg:leading-8'>
                  Explore Services <ArrowUpRight className='size-4 md:size-6 lg:size-8' />
                </Button>
              </div>
            </div>
            <div className='relative'>
              <img src={assets.home_2} alt="" className='h-52 w-52 rounded-r-3xl' />
              <div className='absolute inset-0 bg-[#859F3E66] rounded-r-3xl'>
                <p className='uppercase text-[#073D2C] old-standard-tt font-bold text-base leading-6 py-7 px-5'>28% Market Insights Processed</p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className='md:hidden'>
        <div className='relative w-full h-full rounded-xl'>
          <img src={assets.home_1} alt="" className='rounded-xl w-full h-full' />
          <div className='absolute inset-0 bg-black/30 rounded-xl flex flex-col items-start justify-center px-4'>
            <div className='flex gap-3'>
              <motion.p className='uppercase text-white prata font-normal text-xl mb-1' initial={{ opacity: 0, y: 50 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.5, delay: 0 }} viewport={{ once: true }}>CONNECTING</motion.p>
              <motion.p className='uppercase text-white prata font-normal text-2xl mb-1' initial={{ opacity: 0, y: 50 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.5, delay: 0.5 }} viewport={{ once: true }}>FARMS,</motion.p>
            </div>
            <motion.p className='uppercase text-white prata font-normal text-xl mb-1.5' initial={{ opacity: 0, y: 50 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.5, delay: 1.0 }} viewport={{ once: true }}>GROWING TOGETHER</motion.p>
            <motion.p className='capitalize text-[#D9D9D9] old-standard-tt font-normal text-[0.5rem] w-3/5' initial={{ opacity: 0, x: -50 }} whileInView={{ opacity: 1, x: 0 }} transition={{ duration: 0.5, delay: 1.5 }} viewport={{ once: true }}>Empowering Farms, Connecting Markets, and Growing Together for a Thriving Future.</motion.p>
          </div>
        </div>
        <div className='flex items-center justify-between pl-5 pt-5'>
          <div className='flex flex-col justify-between gap-12 w-1/2'>
            <div className='uppercase old-standard-tt text-[#859F3E] font-normal text-xs'>Seamlessly connect growers and buyers for a fair marketplace.</div>
            <div>
              <Button className='flex items-center justify-center gap-3 bg-[#859F3E] w-40 h-12 old-standard-tt text-white text-sm md:text-lg lg:text-2xl font-bold leading-6 md:leading-7 lg:leading-8'>
                Explore Services <ArrowUpRight className='size-4 md:size-6 lg:size-8' />
              </Button>
            </div>
          </div>
          <div className='relative'>
            <img src={assets.home_2} alt="" className='size-40 rounded-r-xl' />
            <div className='absolute inset-0 bg-[#859F3E66] rounded-r-xl'>
              <p className='uppercase text-[#073D2C] old-standard-tt font-bold text-sm py-4 px-3'>28% Market Insights Processed</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default HomeHero