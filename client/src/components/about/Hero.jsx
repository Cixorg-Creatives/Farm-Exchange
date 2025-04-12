import React, { useState } from "react";
import { assets } from "@/assets/assets";

const Hero = () => {
  const [loaded, setLoaded] = useState(false);
  return (
    <div className="grid cols-1 md:grid-cols-[3fr_2fr]  items-center justify-between gap-2 md:gap-0 py-6 md:py-10 xl:py-14">
      <div className="col-span-1 [&:nth-child(1)]:order-2 md:[&:nth-child(1)]:order-1">
        <p className="text-[#31511E] font-semibold text-[2.5rem] md:text-6xl lg:text-[5rem] leading-tight uppercase mb-2 md:mb-4 lg:mb-8">
          The Story <br /> Behind <br /> Farm exchange
        </p>
        <div className="flex items-center justify-start gap-3 md:gap-5 lg:gap-10">
          <img
            src={assets.about_1}
            alt=""
            className={`w-40 md:w-52 lg:w-58 xl:w-72 h-auto my-6 sm:my-8 transition-all duration-700 ease-in-out ${
              loaded ? "blur-0" : "blur-md"
            }`}
            loading="lazy"
            onLoad={() => setLoaded(true)}
          />
          <div>
            <div className="border-t-[2px] border-dashed border-[#859F3E]"></div>
            <div className="flex">
              <img
                src={assets.about_2}
                alt=""
                className={`w-40 md:w-52 lg:w-58 xl:w-72 h-auto my-2 md:my-4 lg:my-8 mr-2 md:mr-4 lg:mr-8 transition-all duration-700 ease-in-out ${
                  loaded ? "blur-0" : "blur-md"
                }`}
                loading="lazy"
                onLoad={() => setLoaded(true)}
              />
              <div className="h-48 sm:h-64 md:h-72 lg:h-80 border-r-[2px] border-dashed border-[#859F3E]"></div>
            </div>
          </div>
        </div>
      </div>
      <div className="h-full col-span-1 [&:nth-child(2)]:order-1 md:[&:nth-child(2)]:order-2 flex flex-col-reverse md:flex-col items-end justify-between gap-2 md:gap-4 lg:gap-0">
        <div className="flex items-end">
          <div className="h-60 md:h-80 lg:h-96 border-l-[2px] border-dashed border-[#859F3E]"></div>
          <div className="flex flex-col items-start">
            <div className="relative ml-4 sm:ml-6 lg:ml-9 mb-4 sm:mb-5 lg:mb-8">
              <img
                src={assets.about_3}
                alt=""
                className={`w-full md:w-[20rem] xl:w-[30rem] h-auto object-cover transition-all duration-700 ease-in-out ${
                  loaded ? "blur-0" : "blur-md"
                }`}
                loading="lazy"
                onLoad={() => setLoaded(true)}
              />
              <div className="absolute inset-0 h-full w-full flex flex-col items-end justify-end bg-gradient-to-b from-[#00000000] to-[#000000]">
                <p className="capitalize text-[#F6FCDF] font-normal text-xs md:text-base lg:text-xl text-right mx-2 md:mx-3 lg:mx-4 my-2 md:my-4 lg:my-6">
                  As the Farm Exchange, we make the farmers and the buyers meet
                  where it all started in its most efficient way. Fostering fair
                  trade, sustainability, and growth are things that we are
                  committed to, and unlock the true potential of every piece of
                  land.{" "}
                </p>
              </div>
            </div>
            <div className="w-1/2 border-t-[2px] border-dashed border-[#859F3E]"></div>
          </div>
        </div>
        <div className="flex flex-col items-end justify-center">
          <p className="uppercase text-[#073D2C]/50 font-semibold text-5xl md:text-6xl lg:text-7xl xl:text-[6.25rem] leading-tight text-center lg:text-right">
            About us
          </p>
          <div className="w-5/6 border-t-[2px] border-dashed border-[#073D2C]/50"></div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
