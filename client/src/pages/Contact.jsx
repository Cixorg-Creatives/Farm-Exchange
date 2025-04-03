// import Benefits from '@/components/contact/benefits'
import Faq from '@/components/contact/Faq'
import HeroForm from '@/components/contact/Hero_form'

import React from 'react'

const Contact = () => {
  return (
    <div className='sm:px-28 sm:py-10 px-4 py-5'>
      <HeroForm />
      {/* <Benefits /> */}
      <Faq />
    </div>
  )
}

export default Contact
