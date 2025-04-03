import { assets } from '@/assets/assets';
import { Minus, Plus } from 'lucide-react';
import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Heading from '../Heading';

const faqs = [
  {
    faq: "What types of properties are available on Farm Exchange?",
    answer: "Farm Exchange provides an extensive selection of properties, including farmlands, farmhouses, coffee estates, and agricultural land, along with managed farmlands. As the largest online platform for farmland listings, it offers the widest range of options to suit various needs.",
  },
  {
    faq: "How can I buy or sell farmland on your platform?",
    answer: "To buy or sell farmland, you need to register on our platform, list your property with details and images, and connect with potential buyers or sellers.",
  },
  {
    faq: "Are there financing options available for purchasing farmland?",
    answer: "Yes, we provide financing options through our banking partners. You can apply for loans directly through our platform.",
  },
  {
    faq: "What are the legal requirements for buying agricultural land?",
    answer: "Legal requirements vary by location, but typically include land titles, agricultural permits, and government approvals. Our platform provides legal assistance.",
  },
  {
    faq: "Can I visit the farmland before making a purchase?",
    answer: "Yes, you can schedule a visit to the farmland with the seller’s consent. We facilitate site visits for interested buyers.",
  },
  {
    faq: "How does managed farmland investment work?",
    answer: "Managed farmland investment allows you to own agricultural land while professionals manage it for you, ensuring hassle-free income generation.",
  },
  {
    faq: "Does Farm Exchange assist with legal documentation and due diligence?",
    answer: "Yes, we provide legal assistance to ensure smooth transactions. Our team helps with title verification, due diligence, and other legal formalities required for farmland purchases."
  }
];

const Faq = () => {
  const [show, setShow] = useState(Array(7).fill(false));

  const toggleFaq = (index) => {
    setShow((prev) => prev.map((item, i) => (i === index ? !item : item)));
  };

  return (
    <div className='py-6 md:py-10 xl:py-14'>
      <div className='flex items-start justify-between flex-row-reverse'>
        <div className='w-full lg:w-3/5 flex flex-col items-center gap-2 md:gap-3 lg:gap-4'>
          <Heading className='w-full mt-0 lg:mt-8 mb-2 md:mb-3 lg:mb-4'>
            Frequently Asked Questions
          </Heading>
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
          <img src={assets.faq_1} alt="FAQ Illustration" className='w-full h-auto aspect-1/2 object-cover rounded-md md:rounded-lg lg:rounded-xl' />
        </div>
      </div>
    </div>
  );
};

export default Faq;
