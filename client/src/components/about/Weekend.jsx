import React, { useState } from "react";
import { assets } from "@/assets/assets";
import { Play } from "lucide-react";
import { Link } from "react-router-dom";
import Button from "../Button";

const Weekend = () => {
  const [loaded, setLoaded] = useState(false);
  return (
    <div className="flex flex-row items-center justify-between py-6 md:py-10 xl:py-14">
      <div className="flex w-1/2">
        <div className="w-full flex flex-col items-start gap-2 md:gap-4 lg:gap-6">
          <div className="w-full flex flex-col gap-1 md:gap-2 lg:gap-3">
            <h2 className="boska font-normal text-[#859F3E] text-base md:text-xl lg:text-[1.75rem] leading-tight uppercase text-left">
              BUILD A COOL AND COMFORTABLE
            </h2>
            <h1 className="font-medium text-[#31511E] text-xl md:text-3xl lg:text-6xl leading-tight">
              Weekend home <br /> in a pristine 100 <br /> acres
            </h1>
          </div>
          <div className="flex flex-col gap-1 md:gap-2 lg:gap-3">
            <p className="capitalize text-[#31511E] font-normal text-[8px] md:text-base lg:text-xl">
              A luxurious weekend home in a pristine landscape in the
              countryside. No more congested spaces. Own a sprawling space and
              build a lovely farm house on it. A pristine piece of land
              untouched by pollution, trespassing, city smoke, or any such
              nuisance. Thick greenery, landscaped areas, party amenities, club
              games, pools are a few highlights of this holiday home project. So
              as a resident you get to enjoy vacations without leaving your
              home.
            </p>
            <Link to={"/journal/video"}>
              <Button
                title={"View All"}
                icon={"show"}
                className="!text-[#859F3E] !p-0 text-[10px]"
              />
            </Link>
          </div>
        </div>
      </div>
      <div className="relative w-2/5">
        <img
          src={assets.about_4}
          alt=""
          className={`h-auto w-full object-cover transition-all duration-700 ease-in-out ${
            loaded ? "blur-0" : "blur-md"
          }`}
          loading="lazy"
          onLoad={() => setLoaded(true)}
        />
        <div className="active:scale-75 ease-in-out duration-150 z-10 border-[0.1875rem] md:border-[0.25rem] lg:border-[0.3125rem] border-white rounded-full size-8 md:size-16 lg:size-24 bg-[#859F3E] absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2">
          <div className="flex items-center justify-center h-full w-full">
            <Play className="size-4 md:size-8 lg:size-12 text-white fill-white" />
          </div>
        </div>
        <div className="absolute w-full h-full top-0 left-0 bg-black/50"></div>
      </div>
    </div>
  );
};

export default Weekend;
