import React from 'react'
import Featured from './Featured'
import Elite from './Elite'
import Recently from './Recently'
import Recommended from './Recommended'

const Properties = () => {
  return (
    <div className='py-6 md:py-10 xl:py-14'>
      <Featured />
      <Elite />
      <Recently />
      <Recommended />
    </div>
  )
}

export default Properties