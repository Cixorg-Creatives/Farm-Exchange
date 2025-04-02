import { assets } from "@/assets/assets";
import { ChevronLeft, ChevronRight, IndianRupee } from "lucide-react";
import React, { useRef, useState, useEffect } from "react";
import { Link } from "react-router-dom";
import Button from "../Button";
import { motion } from "framer-motion";
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

  const leftAnimation = {
    initial: { x: 200, opacity: 0 },
    animate: {
      x: 0,
      opacity: 1,
      transition: { duration: 2, ease: "easeOut", type: "spring", damping: 15 },
    },
    exit: {
      x: 200,
      opacity: 0,
      transition: {
        duration: 1,
        ease: "easeInOut",
        type: "spring",
        damping: 15,
      },
    },
  };

  const rightAnimation = {
    initial: { x: -200, opacity: 0 },
    animate: {
      x: 0,
      opacity: 1,
      transition: { duration: 2, ease: "easeOut", type: "spring", damping: 15 },
    },
    exit: {
      x: -200,
      opacity: 0,
      transition: {
        duration: 1,
        ease: "easeInOut",
        type: "spring",
        damping: 15,
      },
    },
  };

  if (loading) {
    return (
      <div className="my-6 md:my-10 xl:my-14">Loading elite properties...</div>
    );
  }

  if (error) {
    return (
      <div className="my-6 md:my-10 xl:my-14">
        Error loading elite properties: {error}
      </div>
    );
  }

  if (eliteProperties.length === 0) {
    return (
        <></>
    )
  }

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
      <div className="w-full flex flex-col-reverse lg:flex-row items-end justify-end gap-2 md:gap-3 lg:gap-0">
        <div className="w-full lg:w-fit relative z-2 lg:translate-y-1/3 lg:translate-x-1/2 flex items-center justify-center gap-3 md:gap-4 lg:gap-5">
          <button
            className="size-6 md:size-8 lg:size-12 flex items-center justify-center bg-[#859F3E] rounded-full hover:bg-[#5e722d] active:scale-50 ease-in duration-300 disabled:bg-[#D9E2C3]"
            onClick={() => handleScroll("left")}
            disabled={currentIndex === 0}
          >
            <ChevronLeft className="text-white size-2.5 md:size-3.5 lg:size-5" />
          </button>
          <button
            className="size-6 md:size-8 lg:size-12 flex items-center justify-center bg-[#859F3E] rounded-full hover:bg-[#5e722d] active:scale-50 ease-in duration-300 disabled:bg-[#D9E2C3]"
            onClick={() => handleScroll("right")}
            disabled={currentIndex === totalItems - 1}
          >
            <ChevronRight className="text-white size-2.5 md:size-3.5 lg:size-5" />
          </button>
        </div>
        <div
          ref={scrollRef}
          className="lg:w-4/5 h-full overflow-x-auto flex items-center justify-start"
        >
          {data.map((item, index) => (
            <div key={index} className="relative w-1/3 flex-shrink-0">
              <img src={item.image} alt="" className="w-full h-full aspect-[2/3] object-cover" />
              {index === currentIndex + 1 && (
                <>
                  <motion.div
                    variants={leftAnimation}
                    initial="initial"
                    animate="animate"
                    exit="exit"
                    className="absolute inset-0 -translate-x-full z-1 group bg-[#D9E2C3] hover:bg-[#5E722D66] hover:duration-300 ease-in flex items-start justify-center p-3 md:p-6 lg:p-9 hover:duration-400 hover:ease-in-out"
                  >
                    <p className="uppercase group-hover:text-white text-[#31511E] font-medium text-base md:text-xl lg:text-[2.5rem] leading-tight">
                      {item.title}
                    </p>
                  </motion.div>
                  <motion.div
                    variants={rightAnimation}
                    initial="initial"
                    animate="animate"
                    exit="exit"
                    className="absolute inset-0 translate-x-full z-1 group bg-[#5E722D] hover:bg-[#859F3E33] flex items-end justify-center p-1.5 md:p-3 lg:p-6 hover:duration-400 hover:ease-in-out"
                  >
                    <div className="group-hover:hidden w-full flex-col item-start gap-0.5 md:gap-1 lg:gap-2">
                      <div className="flex items-end">
                        <IndianRupee className="h-5 md:h-8 lg:h-11 w-auto text-white py-1 md:py-1.5 lg:py-2" />
                        <p className="text-white font-semibold text-sm md:text-xl lg:text-4xl mr-0.5 md:mr-1 lg:mr-1.5">
                          {item.price}
                        </p>
                        <p className="text-white font-semibold text-xs md:text-lg lg:text-3xl mr-0.5 md:mr-1 lg:mr-1.5">
                          {item.price_unit}
                        </p>
                        <p className="text-[#D9D9D9] font-normal text-[8px] md:text-xs lg:text-base my-0.5 md:my-[3px] lg:my-1 mr-0.5 md:mr-1 lg:mr-1.5">
                          Onwards
                        </p>
                      </div>
                      <p className="capitalize text-white font-medium text-[9px] md:text-sm lg:text-xl">
                        {item.location}
                      </p>
                      <p className="capitalize text-[#D9D9D9] font-medium text-[7px] md:text-xs lg:text-base">
                        Project Area - {item.area}
                      </p>
                    </div>
                  </motion.div>
                </>
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Elite;
