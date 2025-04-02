import { assets } from '@/assets/assets'
import Build from '@/components/services/Build'
import Call from '@/components/services/Call'
import Difference from '@/components/services/Difference'
import Featured from '@/components/services/Featured'
import Grid from '@/components/home/Grid'
import Recommended from '@/components/services/Recommended'
import ServiceHero from '@/components/services/ServiceHero'
import React from 'react'

const Services = () => {
  return (
    <div>
      <div className='px-4 md:px-6 lg:px-24'>
        {/* <ServiceHero /> */}
        <Grid />
        <Build />
      </div>
      <div className='relative'>
        <div className='px-4 md:px-6 lg:px-24 relative'>
          <Featured />
        </div>
        <div className='absolute top-0 right-0'>
          <img src={assets.properties_2} alt="" className='w-24 md:w-48 lg:w-72 h-auto' />
        </div>
      </div>
      <div className='relative'>
        <div className='px-4 md:px-6 lg:px-24 relative'>
          <Recommended />
        </div>
        <div className='absolute top-0 right-0'>
          <img src={assets.properties_2} alt="" className='w-24 md:w-48 lg:w-72 h-auto' />
        </div>
      </div>
      <div className='px-4 md:px-6 lg:px-24'>
        <Call />
        <Difference />
      </div>
    </div>
  )
}

export default Services