import HeaderBar from '@/components/dashboard/HeaderBar'
import Stats from '@/components/dashboard/Stats'
import React from 'react'

const Dashboard = () => {
  return (
    <div className='px-5 md:px-8 lg:px-12'>
      <HeaderBar />
      <Stats />
    </div>
  )
}

export default Dashboard