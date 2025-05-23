import { assets } from "@/assets/assets";
import React, { useState } from "react";

const data = [
  {
    image: assets.post_2,
    step: "Connect with us now to make a request!",
  },
  {
    image: assets.post_3,
    step: "Share Your Details Now to Get Listed!",
  },
  {
    image: assets.post_4,
    step: "upload Property",
  },
];

const Steps = () => {
  const [loaded, setLoaded] = useState(false);
  return (
    <div className="py-6 md:py-10 xl:py-14">
      <h1 className="uppercase text-[#859F3E] font-bold text-lg md:text-2xl lg:text-4xl mb-4 md:mb-8 lg:mb-12 text-center">
        How to Post Your Property In 3 Easy Steps
      </h1>
      <div className="grid grid-cols-[5fr_4fr_3fr] gap-3 md:gap-4 lg:gap-5">
        {data.map((item, index) => (
          <div
            key={index}
            className="grid-cols-1 flex flex-col item-start justify-start gap-2 md:gap-4 lg:gap-6"
          >
            <img
              src={item.image}
              alt=""
              className={`w-full h-auto transition-all duration-700 ease-in-out ${
                loaded ? "blur-0" : "blur-md"
              }`}
              loading="lazy"
              onLoad={() => setLoaded(true)}
            />
            <h1 className="capitalize text-[#31511E] font-medium text-[8px] md:text-base lg:text-2xl">
              {item.step}
            </h1>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Steps;
