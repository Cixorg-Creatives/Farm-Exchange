import { assets } from '@/assets/assets'
import Banner from '@/components/home/Banner'
import Cities from '@/components/home/Cities'
import Developers from '@/components/home/Developers'
import Grid from '@/components/home/Grid'
import HomeHero from '@/components/home/HomeHero'
import HomeJournal from '@/components/home/HomeJournal'
import Properties from '@/components/home/Properties'
import Testimonials from '@/components/home/Testimonials'
import React from 'react'

const Home = () => {
  return (
    <>
      <div className='px-4 md:px-6 lg:px-24'>
        <HomeHero />
        <Grid />
        <Properties />
        <HomeJournal />
        <Testimonials />
      </div>
      {/* <div className='relative'>
        <div className='px-4 md:px-6 lg:px-24 relative'>
        </div>
        <div className='absolute top-0 left-0'>
          <img src={assets.home_23} alt="" className='w-24 md:w-48 lg:w-72 h-auto' />
        </div>
      </div> */}
      <div className='px-4 md:px-6 lg:px-24'>
      </div>
      <Banner />
      <div className='px-4 md:px-6 lg:px-24'>
        {/* <Developers /> */}
      </div>
    </>
  )
}

export default Home
