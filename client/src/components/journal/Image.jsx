import { assets } from "@/assets/assets";
import React, { useState } from "react";
import { Link } from "react-router-dom";
import Button from "../Button";

const front = [assets.journal_15, assets.journal_16, assets.journal_17];
const back = [assets.journal_19, assets.journal_22];

const Image = () => {
  const [loaded, setLoaded] = useState(false);
  return (
    <div className="py-6 md:py-10 xl:py-14 old-standard-tt flex flex-col gap-5 md:gap-10 lg:gap-20">
      <div className="flex items-center justify-center">
        <div className="relative w-4/5 md:w-3/4 lg:w-[64%] pl-2 md:pl-4 lg:pl-8">
          <p className="uppercase text-[#859F3E] font-medium text-2xl md:text-4xl lg:text-[3.5rem] leading-tight text-center">
            Celebrating The inspiring Beauty Of Every Field{" "}
          </p>
          <img
            src={assets.open_double_quotes}
            alt=""
            className={`absolute top-0 -translate-x-full -translate-y-1/3 left-0 size-5 md:size-10 lg:size-20 transition-all duration-700 ease-in-out ${
              loaded ? "blur-0" : "blur-md"
            }`}
            loading="lazy"
            onLoad={() => setLoaded(true)}
          />
          <img
            src={assets.close_double_quotes}
            alt=""
            className={`absolute bottom-0 translate-x-full translate-y-1/3 right-0 size-5 md:size-10 lg:size-20 transition-all duration-700 ease-in-out ${
              loaded ? "blur-0" : "blur-md"
            }`}
            loading="lazy"
            onLoad={() => setLoaded(true)}
          />
        </div>
      </div>
      <div className="relative">
        <div className="w-full flex items-center justify-evenly">
          <div className="w-[27.5%] flex flex-col items-center gap-11">
            {back.map((item, index) => (
              <div key={index} className="relative">
                <img
                  src={back[index]}
                  alt=""
                  className={`w-full h-auto border-2 lg:border-4 border-[#859F3E] transition-all duration-700 ease-in-out ${
                    loaded ? "blur-0" : "blur-md"
                  }`}
                  loading="lazy"
                  onLoad={() => setLoaded(true)}
                />
                <div className="absolute inset-0 bg-[#00000033]"></div>
              </div>
            ))}
          </div>
          <div className="relative w-[27.5%]">
            <img
              src={assets.journal_18}
              alt=""
              className={`w-full h-auto border-2 lg:border-4 border-[#859F3E] transition-all duration-700 ease-in-out ${
                loaded ? "blur-0" : "blur-md"
              }`}
              loading="lazy"
              onLoad={() => setLoaded(true)}
            />
            <div className="absolute inset-0 bg-[#00000033]"></div>
          </div>
        </div>
        <div className="absolute inset-0 flex items-center justify-between">
          {front.map((item, index) => (
            <div key={index} className="relative w-[22.5%]">
              <img
                src={front[index]}
                alt=""
                className={`w-full h-auto border-2 lg:border-4 border-[#859F3E] transition-all duration-700 ease-in-out ${
                  loaded ? "blur-0" : "blur-md"
                }`}
                loading="lazy"
                onLoad={() => setLoaded(true)}
              />
              <div className="absolute inset-0 bg-[#00000033]"></div>
            </div>
          ))}
        </div>
      </div>
      <div className="px-4 md:px-6 lg:px-24 flex flex-col lg:flex-row items-start lg:items-center justify-between gap-2 md:gap-4 lg:gap-0">
        <div className="capitalize text-[#747474] font-medium text-[10px] md:text-base lg:text-xl">
          Our colourful gallery will let you discover the true side of farming .{" "}
          <br className="hidden lg:block" /> Each image is captured in its
          dedication, love of each field from <br className="hidden lg:block" />{" "}
          the very first sprouts of spring to the yellow harvests of autumn.{" "}
          <br className="hidden lg:block" /> Observe the unity of nature and the
          naturers.{" "}
        </div>
        <Link to={"/services"}>
          <Button title="Explore Services" variant="primary" icon="show" />
        </Link>
      </div>
    </div>
  );
};

export default Image;
