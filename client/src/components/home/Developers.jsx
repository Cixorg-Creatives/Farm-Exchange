"use client"
import axios from 'axios'
import { motion } from 'framer-motion'
import React, { useEffect, useState } from 'react'

const Developers = () => {
  const [developer, setDeveloper] = useState([])

  const extended_data = [...developer, ...developer, ...developer, ...developer]
  const length = developer.length
  const moveBy = `-${length * 25}%`

  const fetchDevelopers = async () => {
    try {
      const response = await axios.get("http://localhost:3000/list", {
        params: { status: "published" },
      });

      // Extract both name and logo
      const developers = response.data.map(item => ({
        name: item.developer.name.trim(),
        logo: item.developer.logo // assuming this exists
      }));

      // Deduplicate based on name
      const uniqueDevelopers = Array.from(
        new Map(developers.map(dev => [dev.name, dev])).values()
      );

      setDeveloper(uniqueDevelopers);
      console.log("Developers:", uniqueDevelopers)
    } catch (err) {
      console.error("Error fetching developers:", err);
    }
  };

  useEffect(() => {
    fetchDevelopers();
  }, []);

  return (
    <div className='py-6 md:py-10 xl:py-14 flex flex-col items-center justify-center gap-2 md:gap-4 lg:gap-8 w-full'>
      <div className='w-full flex flex-col items-start justify-start gap-1 md:gap-2 lg:gap-3 px-4 md:px-6 lg:px-24'>
        <h1 className='boska font-normal text-[#859F3E] text-base md:text-xl lg:text-[1.75rem] leading-tight uppercase'>
          Featured Developer
        </h1>
        <p className='capitalize text-[#31511E] font-semibold text-xl md:text-3xl lg:text-6xl leading-tight'>
          The Most Renowned and <br /> Influential Developers in <br /> the Industry
        </p>
      </div>
      <div className='w-full overflow-hidden'>
        <motion.div
          className="flex"
          animate={{ x: ["0%", moveBy] }}
          transition={{ repeat: Infinity, repeatType: "loop", ease: "linear", duration: (length * 7.5) || 10 }}
        >
          {extended_data.map((item, index) => (
            <div key={index} className="min-w-1/4 h-fit px-1 md:px-2 lg:px-3">
              <div className='flex items-center justify-evenly bg-[#BFC9B9]/50 backdrop-blur-sm shadow-[inset_0px_0px_10px_-1px] shadow-[#758A68] rounded-md md:rounded-lg lg:rounded-xl gap-1 md:gap-2 lg:gap-3 p-1 md:p-2 lg:p-3'>
                <img src={item.logo} alt={item.name} className="w-1/4 h-auto aspect-square object-cover rounded-md md:rounded-lg lg:rounded-xl" />
                <div className="w-fit text-[8px] md:text-base lg:text-3xl font-medium text-left text-[#31511E] leading-tight">{item.name}</div>
              </div>
            </div>
          ))}
        </motion.div>
      </div>
    </div>
  )
}

export default Developers
