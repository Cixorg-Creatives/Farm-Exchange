import Build from '@/components/services/Build'
import Call from '@/components/services/Call'
import Difference from '@/components/services/Difference'
import Featured from '@/components/services/Featured'
import Grid from '@/components/services/Grid'
import Recommended from '@/components/services/Recommended'
import ServiceHero from '@/components/services/ServiceHero'
import React from 'react'

const Services = () => {
  return (
    <div className='px-4 md:px-6 lg:px-24'>
      <ServiceHero />
      <Grid />
      <Build />
      <Featured />
      <Recommended />
      <Call />
      <Difference />
    </div>
  )
}

export default Services