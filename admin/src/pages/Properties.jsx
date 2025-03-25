import Button from '@/components/Button'
import React from 'react'
import { Link } from 'react-router-dom'

const Properties = () => {
  return (
    <div className='px-5 md:px-8 lg:px-12'>
      <div className='flex items-center gap-2 md:gap-3 lg:gap-4'>
        <Link to={'/properties/add-property'}><Button title={"Add Properties"} variant='primary' icon={'show'} symbol={''} /></Link>
        <Button title={"Add City"} variant='primary' icon={'show'} symbol={''} />
      </div>
    </div>
  )
}

export default Properties