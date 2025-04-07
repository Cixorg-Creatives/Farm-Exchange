import { assets } from '@/assets/assets';
import { Minus, Plus } from 'lucide-react';
import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Heading from '../Heading';

const faqs = [
  {
    faq: "How can FarmExchange facilitate the sale of my property?",
    answer:
      "FarmExchange uses targeted marketing to demonstrate your property to the most appropriate viewers. In addition, we offer highly detailed listings, descriptions, and personal direct contact with potential customers to secure you a hassle-free and successful sale.",
  },
  {
    faq: "How much would it cost to list my property?",
    answer:
      "The commission is only charged after a purchase is successfully sold on FarmExchange. We have no upfront listing fees, but we strive to act as value by providing intelligent marketing, strategic reach, and customary time with the end objective to set you up with the best deal.",
  },
  {
    faq: "How long before my property sells?",
    answer:
      "The time for selling is dependent on several factors, among which include property type, location, and the market demand. The platform that we work on is designed to generate targeted leads faster. Usually, our tailored marketing strategies result in faster property sales.",
  },
  {
    faq: "Is it possible to change my listing once it has been posted?",
    answer:
      "Yes! It’s got the flexibility that you can any time update your listing. We wish to simplify your next task — adjusting the price, adding new photos to, or rewording your description.",
  },
  {
    faq: "Are buyers able to see my property listing through FarmExchange's national system?",
    answer:
      "Yes! FarmExchange is a property marketing platform that reaches out to buyers across India. Regardless of the location, our platform has the ability to target marketing strategies to get serious buyers to see your land, attracting them to your property.",
  },
];


const Faq = () => {
  const [show, setShow] = useState(Array(5).fill(false));

  const toggleFaq = (index) => {
    setShow((prev) => prev.map((item, i) => (i === index ? !item : item)));
  };

  return (
    <div className='py-6 md:py-10 xl:py-14'>
      <div className='flex items-start justify-between flex-row-reverse'>
        <div className='w-full lg:w-3/5 flex flex-col items-center gap-2 md:gap-3 lg:gap-4'>
          <h1 className='w-full font-medium text-[#31511E] text-xl md:text-3xl lg:text-6xl leading-tight mb-2 md:mb-3 lg:mb-4'>
            Frequently Asked Questions
          </h1>
          {faqs.map((item, index) => (
            <div key={index} className='flex flex-col gap-2 md:gap-3 lg:gap-4 w-full h-auto'>
              <div
                onClick={() => toggleFaq(index)}
                className='cursor-pointer flex items-center justify-between border border-[#D9D9D9] py-3 md:py-4 lg:py-5 px-3 md:px-5 lg:px-7 rounded-lg'
              >
                <div className='capitalize text-[#31511E] font-medium text-[10px] md:text-lg lg:text-2xl'>
                  {item.faq}
                </div>
                <div className='text-[#31511E]'>
                  {show[index] ? <Minus className='h-4 md:h-5 lg:h-6 w-auto' /> : <Plus className='h-4 md:h-5 lg:h-6 w-auto' />}
                </div>
              </div>
              <AnimatePresence>
                {show[index] && (
                  <motion.div
                    initial={{ maxHeight: 0, opacity: 0 }}
                    animate={{ maxHeight: 500, opacity: 1 }}
                    exit={{ maxHeight: 0, opacity: 0 }}
                    transition={{ duration: 0.4, ease: "easeInOut" }}
                    className='overflow-hidden'
                  >
                    <p className='w-[90%] capitalize text-[#758A68] font-normal text-[10px] md:text-sm lg:text-xl py-1 md:py-2 lg:py-3 px-3 md:px-5 lg:px-7'>
                      {item.answer}
                    </p>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          ))}
        </div>
        <div className='w-1/3 flex-shrink-0 hidden lg:block'>
          <img src={assets.faq_1} alt="FAQ Illustration" className='w-full h-full object-cover rounded-md md:rounded-lg lg:rounded-xl' />
        </div>
      </div>
    </div>
  );
};

export default Faq;
