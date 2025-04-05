import { assets } from "@/assets/assets";
import { ChevronLeft, ChevronRight, IndianRupee } from "lucide-react";
import React, { useRef, useState, useEffect } from "react";
import { Link } from "react-router-dom";
import Button from "../Button";
import { AnimatePresence, motion } from "framer-motion";
import axios from "axios";

const Elite = () => {
  const scrollRef = useRef(null);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [eliteProperties, setEliteProperties] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchEliteProperties = async () => {
      try {
        const response = await axios.get("http://localhost:3000/list", {
          params: {
            category: "elite",
            status: "published",
          },
        });
        setEliteProperties(response.data);
        setLoading(false);
      } catch (err) {
        setError(err.message);
        setLoading(false);
        console.error("Error fetching elite properties:", err);
      }
    };

    fetchEliteProperties();
  }, []);

  const data = [
    { image: assets.home_24 },
    ...eliteProperties.map((property) => ({
      _id: property._id,
      image: property.banner,
      title: property.name,
      area: `${property.plotArea.value} ${property.plotArea.unit}`,
      location: `${property.location.locality}, ${property.location.city}, ${property.location.state}`,
      price: property.price.value.toString(),
      price_unit: property.price.unit,
    })),
    { image: assets.home_25 },
  ];

  const totalItems = Math.max(0, data.length - 2);

  const handleScroll = (direction) => {
    if (scrollRef.current) {
      let newIndex =
        direction === "left"
          ? Math.max(0, currentIndex - 1)
          : Math.min(totalItems - 1, currentIndex + 1);
      setCurrentIndex(newIndex);
      const scrollElement = scrollRef.current.children[newIndex];
      if (scrollElement) {
        scrollElement.scrollIntoView({
          behavior: "smooth",
          block: "nearest",
          inline: "start",
        });
      }
    }
  };

  return (
    <div className="my-6 md:my-10 xl:my-14 flex flex-col gap-3 md:gap-6 lg:gap-12">
      <div className="flex items-end justify-between">
        <div className="flex flex-col items-start gap-2.5 md:gap-3.5 lg:gap-5">
          <div className="boska font-normal text-[#859F3E] text-base md:text-xl lg:text-[1.75rem] leading-tight uppercase">
            Elite Properties
          </div>
          <div className="capitalize text-[#31511E] font-medium text-sm md:text-3xl lg:text-6xl leading-tight lg:leading-[4.5rem]">
            Explore top farms and <br /> premium produce, handpicked <br /> for
            quality.
          </div>
        </div>
        <Link to="/properties?category=elite">
          <Button title="View More" variant="primary" icon="show" />
        </Link>
      </div>
      <div className="relative w-full flex flex-col-reverse lg:flex-row items-end justify-end gap-2 md:gap-3 lg:gap-0">
        <div className="w-full lg:w-fit relative z-2 lg:translate-y-1/3 lg:translate-x-1/2 flex items-center justify-center gap-3 md:gap-4 lg:gap-5">
          <button
            className="cursor-pointer size-6 md:size-8 lg:size-12 flex items-center justify-center bg-[#859F3E] rounded-full hover:bg-[#5e722d] active:scale-50 ease-in duration-300 disabled:bg-[#D9E2C3]"
            onClick={() => handleScroll("left")}
            disabled={currentIndex === 0}
          >
            <ChevronLeft className="text-white size-2.5 md:size-3.5 lg:size-5" />
          </button>
          <button
            className="cursor-pointer size-6 md:size-8 lg:size-12 flex items-center justify-center bg-[#859F3E] rounded-full hover:bg-[#5e722d] active:scale-50 ease-in duration-300 disabled:bg-[#D9E2C3]"
            onClick={() => handleScroll("right")}
            disabled={currentIndex === totalItems - 1}
          >
            <ChevronRight className="text-white size-2.5 md:size-3.5 lg:size-5" />
          </button>
        </div>
        <div ref={scrollRef} className="lg:w-4/5 h-full overflow-x-auto flex items-center justify-start">
          {data.map((item, index) => (
            <div key={index} className="relative w-1/3 flex-shrink-0">
              {
                loading || error || eliteProperties.length === 0 ? (
                  <div className="w-full h-auto aspect-2/3 bg-[#c7d3a7] animate-pulse"></div>
                ) : (
                  <img src={item.image} alt="" className="w-full h-full aspect-[2/3] object-cover" />
                )
              }
            </div>
          ))}
        </div>
        <div className="absolute top-0 right-0 w-full lg:w-4/5 h-full flex items-start justify-between">
          <div className='cursor-pointer w-1/3 aspect-2/3 bg-[#BFC9B9] border border-[#31511E] group hover:bg-[#5E722D66] flex items-start p-3 md:p-6 lg:p-9 hover:duration-400 hover:ease-in-out'>
            {
              loading || error || eliteProperties.length === 0 ? (
                <div className="w-full h-1/5 bg-[#c7d3a7] animate-pulse rounded-md lg:rounded-lg"></div>
              ) : (
                <AnimatePresence mode='wait'>
                  <motion.div key={currentIndex} initial={{ opacity: 0, filter: "blur(10px)", scale: 0.9 }} animate={{ opacity: 1, filter: "blur(0px)", scale: 1 }} exit={{ opacity: 0, filter: "blur(10px)", scale: 0.9 }} transition={{ duration: 1, ease: "easeInOut" }} className='uppercase group-hover:text-white text-[#31511E] font-medium text-base md:text-xl lg:text-[2.5rem] leading-tight text-left hover:duration-400 hover:ease-in-out'>{data[currentIndex + 1].title}</motion.div>
                </AnimatePresence>
              )
            }
          </div>
          <Link to={loading || error || eliteProperties.length === 0 ? '' : `/properties/${data[currentIndex + 1]._id}`} className='w-1/3 h-full bg-transparent'></Link>
          <div className='cursor-pointer w-1/3 aspect-2/3 bg-[#5E722D] border border-[#31511E] group hover:bg-[#859F3E33] flex items-end justify-center p-1.5 md:p-3 lg:p-6 hover:duration-400 hover:ease-in-out'>
            {
              loading || error || eliteProperties.length === 0 ? (
                <div className='animate-pulse w-full flex-col item-start gap-0.5 md:gap-1 lg:gap-2'>
                  <div className='flex items-end'>
                    <div className='h-5 md:h-8 lg:h-11 w-5 md:w-8 lg:w-11 bg-[#c7d3a7] rounded' />
                    <div className='h-5 md:h-8 lg:h-11 w-12 md:w-20 lg:w-28 bg-[#c7d3a7] rounded ml-1' />
                    <div className='h-4 md:h-6 lg:h-8 w-8 md:w-12 lg:w-16 bg-[#c7d3a7] rounded ml-1' />
                    <div className='h-3 md:h-5 lg:h-7 w-10 md:w-14 lg:w-20 bg-[#c7d3a7] rounded ml-1' />
                  </div>
                  <div className='h-4 md:h-6 lg:h-8 w-32 md:w-48 lg:w-64 bg-[#c7d3a7] rounded my-1' />
                  <div className='h-3 md:h-5 lg:h-7 w-24 md:w-40 lg:w-56 bg-[#c7d3a7] rounded' />
                </div>
              ) : (
                <AnimatePresence mode='wait'>
                  <motion.div key={currentIndex} initial={{ opacity: 0, filter: "blur(10px)", scale: 0.9 }} animate={{ opacity: 1, filter: "blur(0px)", scale: 1 }} exit={{ opacity: 0, filter: "blur(10px)", scale: 0.9 }} transition={{ duration: 1, ease: "easeInOut" }} className='group-hover:hidden w-full flex-col item-start gap-0.5 md:gap-1 lg:gap-2'>
                    <div className='flex items-end'>
                      <IndianRupee className='h-5 md:h-8 lg:h-11 w-auto text-white py-1 md:py-1.5 lg:py-2' />
                      <p className='text-white font-semibold text-sm md:text-xl lg:text-4xl mr-0.5 md:mr-1 lg:mr-1.5'>{data[currentIndex + 1].price}</p>
                      <p className='text-white font-semibold text-xs md:text-lg lg:text-3xl mr-0.5 md:mr-1 lg:mr-1.5'>{data[currentIndex + 1].price_unit}</p>
                      <p className='text-[#D9D9D9] font-normal text-[8px] md:text-xs lg:text-base my-0.5 md:my-[3px] lg:my-1 mr-0.5 md:mr-1 lg:mr-1.5'>Onwards</p>
                    </div>
                    <p className='capitalize text-white font-medium text-[9px] md:text-sm lg:text-xl'>{data[currentIndex + 1].location}</p>
                    <p className='capitalize text-[#D9D9D9] font-medium text-[7px] md:text-xs lg:text-base'>Project Area - {data[currentIndex + 1].area}</p>
                  </motion.div>
                </AnimatePresence>
              )
            }
          </div>
        </div>
      </div >
    </div >
  );
};

export default Elite;
