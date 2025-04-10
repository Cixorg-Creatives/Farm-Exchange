import { assets } from '@/assets/assets';
import React from 'react';
import { Link } from 'react-router-dom';
import { motion, useSpring, useTransform } from 'framer-motion';

const Grid = () => {
  const propertyTypes = [
    {
      type: 'farmland',
      title: 'Farm Land',
      description: 'Effortless Buying, Selling & Investing in Agricultural Land',
      image: assets.home_3,
      colSpan: 'col-span-1 md:row-span-3',
      height: 'h-[15rem] sm:h-[18rem] md:h-[36rem]',
      textAlign: 'text-right md:text-start'
    },
    {
      type: 'organic',
      title: 'Organic Farm',
      description: 'Market-Ready Land for Organic Farming & Agri Ventures',
      image: assets.home_4,
      colSpan: 'col-span-1 md:col-span-2 md:row-span-3',
      height: 'h-[15rem] sm:h-[18rem] md:h-[36rem]',
      textAlign: 'text-right md:text-start'
    },
    {
      type: 'agricultureland',
      title: 'Agriculture Land',
      description: 'Smart Deals for Agricultural Landowners & Investors ',
      image: assets.home_5,
      colSpan: 'col-span-1 md:col-span-2',
      height: 'h-[15rem] sm:h-[18rem] md:h-[24rem]',
      textAlign: 'text-right md:text-start'
    },
    {
      type: 'farmhouse',
      title: 'Farm House',
      description: 'Sell and Find Idyllic French Farmhouses ',
      image: assets.home_6,
      colSpan: 'col-span-1',
      height: 'h-[15rem] sm:h-[18rem] md:h-[24rem]',
      textAlign: 'text-right'
    }
  ];

  return (
    <div className='py-6 md:py-10 xl:py-14 grid grid-cols-[1fr_1fr] md:grid-cols-[1fr_1fr_1fr] gap-2 md:gap-3 lg:gap-5'>
      {propertyTypes.map((property) => {
        const springX = useSpring(0, { stiffness: 60, damping: 5 });
        const springY = useSpring(0, { stiffness: 60, damping: 5 });
        const scale = useSpring(1, { stiffness: 100, damping: 10 });

        const transformX = useTransform(springX, (x) => `${x}px`);
        const transformY = useTransform(springY, (y) => `${y}px`);

        const handleMouseMove = (e) => {
          const { clientX, clientY, currentTarget } = e;
          const { left, top, width, height } = currentTarget.getBoundingClientRect();
          const x = ((clientX - (left + width / 2)) / width) * -20;
          const y = ((clientY - (top + height / 2)) / height) * -20;

          springX.set(x);
          springY.set(y);
          scale.set(0.95);
        };

        return (
          <Link
            to={`/properties?type=${property.type}`}
            key={property.type}
            className={`relative group overflow-hidden ${property.colSpan} rounded-2xl ${property.height} cursor-pointer`}
            onMouseMove={handleMouseMove}
            onMouseLeave={() => {
              springX.set(0);
              springY.set(0);
              scale.set(1);
            }}
          >
            <motion.img
              src={property.image}
              alt={property.title}
              className='w-full h-full object-cover rounded-2xl scale-120'
              style={{ x: transformX, y: transformY, scale }}
              transition={{ type: 'spring', stiffness: 80, damping: 15 }}
            />
            <div className='absolute inset-0 bg-black/40 rounded-2xl p-5 md:p-6'>
              <div className={`h-full flex flex-col items-start justify-end md:justify-start gap-2 md:gap-3 duration-200 ease-in ${property.colSpan.includes('col-span-2') ? 'w-full md:w-1/2' : 'w-full'}`}>
                <p className={`uppercase boska text-[#F6FCDF] font-normal text-xl md:text-3xl lg:text-[3.25rem] leading-tight w-full ${property.textAlign}`}>
                  {property.title}
                </p>
                <p className={`uppercase text-[#F6FCDF] font-light text-sm md:text-base lg:text-2xl leading-tight ${property.textAlign}`}>
                  {property.description}
                </p>
              </div>
            </div>
          </Link>
        );
      })}
    </div>
  );
};

export default Grid;
