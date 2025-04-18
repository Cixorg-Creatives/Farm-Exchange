import { assets } from '@/assets/assets'
import React, { useState } from 'react'

const termsAndConditions = [
  {
    title: "1. Introduction",
    content:
      "FarmExchange is an online platform that brings together users with an intention to buy, sell, or rent farmlands, agricultural properties, or farm houses. It is our intention to develop the most transparent and easy-to-use marketplace for individuals as well as businesses."
  },
  {
    title: "2. Eligibility",
    content:
      "By using our platform, you confirm you are 18 years old or over and are legally in a position to enter into a binding transaction. This site is intended for access by organizations, and you represent that you are authorized to act on behalf of the organization to which any such organization user is connected."
  },
  {
    title: "3. User Accounts",
    content:
      "You will need to register and create an account to use some of the features. You agree that the Account User is solely responsible for maintaining the confidentiality of their login credentials and for all activities done in connection with those credentials. FarmExchange is not responsible for any loss or damage caused as a result of unauthorized access to your account."
  },
  {
    title: "4. Listings and Content",
    content:
      "You can post listings, details, images, and contact information for the property. Doing this gives FarmExchange the right, without exclusivity and without any compensation, to use, display, or distribute your content for promotional or operational purposes. We agree that all submitted content remains your intellectual property, although you willingly agree to transfer rights for its use. You must ensure that your content is accurate, up to date, does not infringe on any third-party rights, and complies with all applicable laws and regulations. We reserve the right to reject, edit, or remove listings that violate our terms or harm the credibility of our platform."
  },
  {
    title: "5. Prohibited Conduct",
    content: [
      "Share misleading or false information.",
      "Access the website by automated means without prior consent.",
      "Harm other users or FarmExchange representatives.",
      "Engage in actions that disrupt or harm the site's functionality."
    ]
  },
  {
    title: "6. Third-Party Links and Services",
    content:
      "By using FarmExchange, you may be taken to third-party websites or services that are not owned or controlled by us. Content, privacy policies and practices, and other aspects of the linked page are not the responsibility of FarmExchange. You use third-party sites at your own risk."
  },
  {
    title: "7. Intellectual Property",
    content:
      "FarmExchange or its licensors own all intellectual property on FarmExchange, including text, graphics, logos, and software. Any unauthorized use of the site content is strictly forbidden."
  },
  {
    title: "8. Disclaimer of Warranties",
    content:
      "Services from FarmExchange are delivered “as is” without warranties of any kind. We make every effort to keep our listings current and up to date, but do not guarantee that any content or listing is accurate, complete, or current."
  },
  {
    title: "9. Limitation of Liability",
    content:
      "FarmExchange is not liable to you or any other person to the fullest extent permitted by law for harms, losses, or damages that result from the use of the platform or your inability to use it. This includes property transactions, data losses, actions of third parties, and the lack of proper platform functionality."
  },
  {
    title: "10. Termination",
    content:
      "In the event of conduct that violates these Terms or is detrimental to other users or the platform, we may suspend or terminate your access to the website at any time, with or without notice."
  },
  {
    title: "11. Changes to Terms",
    content:
      "FarmExchange reserves the right to change these Terms and Conditions. These changes take effect upon being posted. Continued use of the site after changes constitutes acceptance of the new terms."
  },
  {
    title: "12. Governing Law",
    content:
      "The laws of [Your Country/State] shall govern these Terms and the relationships between you and us. Any and all disputes shall be litigated or appealed in [Your Country/town] and exclusively resolved before the courts in [City, State]."
  }
];


const Terms = () => {

  const [isLoaded, setIsLoaded] = useState(false)

  return (
    <div>
      <div className='relative'>
        <img src={assets.journal_1} alt="" loading="lazy" onLoad={() => setIsLoaded(true)} className={`w-full h-auto aspect-3/1 object-cover transition-all duration-700 ease-in-out ${isLoaded ? 'blur-0' : 'blur-md'}`} />
        <div className='absolute inset-0 bg-black/60 flex items-center justify-center'>
          <h1 className='uppercase prata text-[#fff] font-semibold text-3xl md:text-6xl lg:text-[6.25rem] leading-tight'>Terms & Conditions</h1>
        </div>
      </div>
      <div className='px-4 md:px-6 lg:px-24 py-6 md:py-10 xl:py-14 flex flex-col gap-4 md:gap-8 lg:gap-12'>
        <h1 className='capitalize text-[#31511E] font-normal text-xs md:text-lg lg:text-2xl leading-tight'>Welcome to FarmExchange. By using and accessing our website <a href="https://farmexchange.co.in" className='underline hover:text-[#073D2C] lowercase'>www.farmexchange.co.in</a>, you agree and accept our Terms and Conditions. If you do not agree with any of these terms, you are not allowed to use this site.</h1>
        {
          termsAndConditions.map((item, index) => (
            <div key={index}>
              <h1 className='capitalize text-[#31511E] font-medium text-sm md:text-3xl lg:text-6xl leading-tight'>
                {item.title}
              </h1>
              {
                Array.isArray(item.content) ? (
                  <ul className='list-disc pl-6 md:pl-10 text-[#31511E] text-xs md:text-lg lg:text-2xl'>
                    {item.content.map((point, i) => (
                      <li key={i}>{point}</li>
                    ))}
                  </ul>
                ) : (
                  <p className='capitalize text-[#31511E] font-normal text-xs md:text-lg lg:text-2xl leading-tight'>
                    {item.content}
                  </p>
                )
              }
            </div>
          ))
        }
      </div>
    </div>
  )
}

export default Terms