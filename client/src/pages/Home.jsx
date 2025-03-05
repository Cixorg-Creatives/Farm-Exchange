import { assets } from '@/assets/assets'
import Banner from '@/components/home/Banner'
import Cities from '@/components/home/Cities'
import Developers from '@/components/home/Developers'
import Grid from '@/components/home/Grid'
import HomeHero from '@/components/home/HomeHero'
import HomeJournal from '@/components/home/HomeJournal'
import Properties from '@/components/home/Properties'
import React from 'react'

const Home = () => {
  return (
    <>
      <div className='px-4 md:px-6 lg:px-24'>
        <HomeHero />
        <Grid />
        <Properties />
        <Cities />
        <HomeJournal />
      </div>
      <Banner />
      <div className='px-4 md:px-6 lg:px-24'>
        <Developers />
      </div>
    </>
  )
}

export default Home
