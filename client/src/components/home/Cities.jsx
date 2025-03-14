import React, { useState } from 'react';
import { assets } from '@/assets/assets';
import CitiesList from './CitiesList';

const citiesDetails = {
  Hyderabad: {
    title: 'Hyderabad',
    properties: [assets.home_13, assets.home_14, assets.home_15, assets.home_16],
  },
  Bengaluru: {
    title: 'Bengaluru',
    properties: [assets.home_15, assets.home_14, assets.home_13, assets.home_16],
  },
  Chennai: {
    title: 'Chennai',
    properties: [assets.home_13, assets.home_16, assets.home_15, assets.home_14],
  },
  Delhi: {
    title: 'Delhi',
    properties: [assets.home_15, assets.home_16, assets.home_13, assets.home_14],
  },
  Kolkata: {
    title: 'Kolkata',
    properties: [assets.home_13, assets.home_14, assets.home_15, assets.home_16],
  },
};

const Cities = () => {
  const [selectedCity, setSelectedCity] = useState('Hyderabad');

  return (
    <div className='py-6 md:py-10 xl:py-14 old-standard-tt'>
      <div className='w-full flex items-center justify-end text-right capitalize text-[#31511E] font-normal text-[11px] md:text-xl lg:text-[2.5rem]'>
        <p className='w-4/5'>Our Farm Exchange is now available in five major cities, connecting farmers and buyers seamlessly. Explore our trusted network in</p>
      </div>
      <div className='grid grid-cols-1 lg:grid-cols-[1fr_3fr] relative'>
      <div className='bg-[#F6FCDF] rounded-lg grid-cols-1 lg:hidden max-w-full overflow-x-auto flex items-center justify-between py-2'>
          {
            Object.keys(citiesDetails).map((city) => (
              <p key={city} className={`capitalize font-normal text-xs cursor-pointer transition-all duration-200 w-1/5 py-1.5 flex items-center justify-center text-[#747474] rounded-md ${selectedCity === city ? 'bg-[#31511E] text-[#F6FCDF]' : ''}`} onClick={() => setSelectedCity(city)}>{citiesDetails[city].title}</p>
            ))
          }
        </div>
        <div className='hidden lg:sticky top-25 left-0 overflow-y-auto max-h-screen col-span-1 lg:flex flex-col items-start justify-start gap-1 md:gap-1.5 lg:gap-2.5'>
          {Object.keys(citiesDetails).map((city) => (
            <p
              key={city}
              className={`capitalize font-normal text-2xl cursor-pointer transition-all duration-200 ${selectedCity === city ? 'text-[#31511E]' : 'text-[#747474]'}`}
              onClick={() => setSelectedCity(city)}
            >
              {citiesDetails[city].title}
            </p>
          ))}
        </div>
        <CitiesList cityImages={citiesDetails[selectedCity].properties} city={citiesDetails[selectedCity].title} />
      </div>
    </div>
  );
};

export default Cities;
