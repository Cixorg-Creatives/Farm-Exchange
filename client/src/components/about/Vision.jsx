import { assets } from "@/assets/assets";
import React, { useState } from "react";

const Vision = () => {
  const [loaded, setLoaded] = useState(false);
  return (
    <div className="py-6 md:py-10 xl:py-0 xl:pt-14 flex flex-col lg:flex-row items-center justify-between">
      <div className="w-full lg:w-3/5 flex flex-col xl:flex-row justify-between lg:relative">
        <div className="xl:w-2/5">
          <div className="xl:absolute xl:inset-0 xl:-translate-x-1/6 z-10 xl:w-[85vh] uppercase text-[#073D2C]/50 font-semibold text-5xl md:text-7xl lg:text-[6.25rem] leading-tight xl:-rotate-90 text-left">
            our Vision
          </div>
        </div>
        <div className="lg:w-[3/5] flex flex-col items-start">
          <div className="w-2/3 border-t-[2px] border-dashed border-[#859F3E]"></div>
          <div className="flex">
            <div className="lg:h-full border-r-[2px] border-dashed border-[#859F3E]"></div>
            <div className="flex flex-col items-start justify-start gap-4 sm:gap-6 md:gap-7 mt-3 md:mt-5 lg:mt-7 ml-4 md:ml-6 lg:ml-8">
              <p className="w-full capitalize text-[#31511E] font-semibold text-xl md:text-3xl lg:text-6xl leading-tight">
                Leading the Future of Sustainable Land Development
              </p>
              <p className="w-full capitalize text-black font-normal text-[1rem] sm:text-[1.25rem] lg:text-[1.5rem] leading-[1.5rem] sm:leading-[1.75rem] md:leading-[2rem] pr-0 sm:pr-6 md:pr-12 text-left">
                Our mission at Farm Exchange isn't just to build more farmland,
                but to fuel a movement. We are dedicated to promoting organic
                farming, environmental stewardship, and an ethical business
                future for everyone with a strong focus on organic farming and
                environmental stewardship. We live by innovation, preserve soil
                health, and implement practices that hold the interest of the
                earth as we create value for partners, customers, and our
                communities.
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="hidden lg:flex w-full lg:w-2/5 flex-col items-end">
        <div className="h-screen w-full flex flex-col items-end">
          <div className="flex w-full justify-end">
            <div className="h-50 lg:h-[70%] border-r-[0.5px] md:border-r-1 lg:border-r-2 border-dashed border-[#859F3E]"></div>
            <img
              src={assets.about_6}
              alt=""
              className={`w-3/5 h-auto ml-3 md:ml-4 lg:ml-5 mb-3 md:mb-4 lg:mb-5 transition-all duration-700 ease-in-out ${
                loaded ? "blur-0" : "blur-md"
              }`}
              loading="lazy"
              onLoad={() => setLoaded(true)}
            />
          </div>
          <div className="w-[30%] border-t-[0.5px] md:border-t-1 lg:border-t-2 border-dashed border-[#859F3E]"></div>
          <div className="h-full flex flex-col item-start -translate-y-[30%] translate-x-[5%] ">
            <div className="w-[30%] border-t-[0.5px] md:border-t-1 lg:border-t-2 border-dashed border-[#859F3E]"></div>
            <div className="flex items-end">
              <img
                src={assets.about_7}
                alt=""
                className={`w-3/5 h-auto mr-3 md:mr-4 lg:mr-5 mt-3 md:mt-4 lg:mt-5 transition-all duration-700 ease-in-out ${
                  loaded ? "blur-0" : "blur-md"
                }`}
                loading="lazy"
                onLoad={() => setLoaded(true)}
              />
              <div className="h-50 lg:h-[70%] border-r-[0.5px] md:border-r-1 lg:border-r-2 border-dashed border-[#859F3E]"></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Vision;
