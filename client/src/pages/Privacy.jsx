import { assets } from '@/assets/assets'
import React, { useState } from 'react'

const privacyPolicy = [
  {
    title: "1. Information Collection",
    content:
      "If you register with us to help us, contact us, or use any of the services we offer, we may collect some personal information (for example, your full name, email address, phone number, physical address, and so on). In addition, we obtain information on you (non personally identifiable, such as your IP address) about you to help diagnose and solve server problems regarding our website and to also help us analyze and improve such functionality."
  },
  {
    title: "2. Cookies and Tracking Technologies",
    content:
      "If you continue, we will assume that you agree to receive all cookies from this site. It is in order to assist us in knowing how users use the platform and adding some customizations based on your preferences, and to understand how it is used. However, disabling cookies may mean that some functions of the website no longer work."
  },
  {
    title: "3. Third-Party Advertisements",
    content:
      "Third-party ad networks that serve ads for our website may use cookies to serve you advertisements based on your online activity. Third-party ad networks that offer cookies include Google AdSense. We do not have access to these cookies, and these cookies are managed by the advertisers."
  },
  {
    title: "4. Data Usage and Sharing",
    content:
      "We will not sell, trade, or rent your personal information to others. We, however, are sharing some limited personal data with trustworthy partners and service suppliers to improve our display, and this is always with a strict confidentiality agreement."
  },
  {
    title: "5. Links to Other Websites",
    content:
      "External websites with their own privacy practices may also link to FarmExchange. These sites are not under our responsibility, nor do we have any control over what is happening on their sites."
  },
  {
    title: "6. Policy Updates",
    content:
      "You should note that we retain the right to amend this Privacy Policy from time to time. The latest revision date will be written on this page, and updates will be regularly posted on it. This will be communicated via email or site notifications and will entail major changes."
  },
  {
    title: "7. Contact Us",
    content:
      "In case of questions or concerns, please email us at support@farmexchange.com."
  }
]

const Privacy = () => {

  const [isLoaded, setIsLoaded] = useState(false)

  return (
    <div>
      <div className='relative'>
        <img src={assets.journal_1} alt="" loading="lazy" onLoad={() => setIsLoaded(true)} className={`w-full h-auto aspect-3/1 object-cover transition-all duration-700 ease-in-out ${isLoaded ? 'blur-0' : 'blur-md'}`} />
        <div className='absolute inset-0 bg-black/60 flex items-center justify-center'>
          <h1 className='uppercase prata text-[#fff] font-semibold text-3xl md:text-6xl lg:text-[6.25rem] leading-tight'>Privacy Policy</h1>
        </div>
      </div>
      <div className='px-4 md:px-6 lg:px-24 py-6 md:py-10 xl:py-14 flex flex-col gap-4 md:gap-8 lg:gap-12'>
        <h1 className='capitalize text-[#31511E] font-normal text-xs md:text-lg lg:text-2xl leading-tight'>FarmExchange places a high value on protecting your privacy. By using our website and granting us access to it, you understand, accept, and agree to our Privacy Policy. This explains how we collect, use, disclose, or protect your personal information. Below is what is defined by our platform practices.</h1>
        {
          privacyPolicy.map((item, index) => (
            <div key={index}>
              <h1 className='capitalize text-[#31511E] font-medium text-sm md:text-3xl lg:text-6xl leading-tight'>{item.title}</h1>
              <p className='capitalize text-[#31511E] font-normal text-xs md:text-lg lg:text-2xl leading-tight'>{item.content}</p>
            </div>
          ))
        }
      </div>
    </div>
  )
}

export default Privacy