import { assets } from "@/assets/assets";
import { ChevronLeft, ChevronRight, Play } from "lucide-react";
import React, { useEffect, useRef, useState } from "react";

const data = [
  assets.journal_20,
  assets.journal_21,
  assets.journal_20,
  assets.journal_21,
];

const Video = () => {
  const scrollRef = useRef(null);
  const [currentIndex, setCurrentIndex] = useState(0);
  const totalItems = data.length;
  const [loaded, setLoaded] = useState(false);

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

  useEffect(() => {
    const preventHorizontalScroll = (event) => {
      if (Math.abs(event.deltaX) > Math.abs(event.deltaY)) {
        event.preventDefault();
      }
    };

    const container = scrollRef.current;
    if (container) {
      container.addEventListener("wheel", preventHorizontalScroll, {
        passive: false,
      });
    }

    return () => {
      if (container) {
        container.removeEventListener("wheel", preventHorizontalScroll);
      }
    };
  }, []);

  return (
    <div className="py-6 md:py-10 xl:py-14">
      <div className="px-4 md:px-6 lg:px-24 flex flex-col lg:flex-row lg:items-center justify-between gap-2 md:gap-4 lg:gap-0">
        <p className="uppercase text-[#073D2C]/50 font-semibold text-5xl md:text-7xl lg:text-[6.25rem] leading-tight text-left">
          Videos
        </p>
        <p className="capitalize old-standard-tt text-[#747474] font-normal text-[10px] md:text-base lg:text-xl lg:text-right">
          See inside the life of farming with a collection of videos.{" "}
          <br className="hidden lg:block" /> Vibrant green fields, a golden glow
          from harvests, and <br className="hidden lg:block" /> every video
          shows dedication, hard work, and the{" "}
          <br className="hidden lg:block" /> beauty of agricultural life.
          Through every frame, <br className="hidden lg:block" /> see nature and
          farmers work in harmony.{" "}
        </p>
      </div>
      <div className="pl-4 md:pl-6 lg:pl-24 pt-6 md:pt-12 lg:pt-16 flex items-center gap-2 md:gap-4 lg:gap-6">
        <div className="flex flex-col items-center justify-center gap-3 md:gap-4 lg:gap-5">
          <button
            className="size-6 md:size-8 lg:size-12 flex items-center justify-center bg-[#859F3E] rounded-full hover:bg-[#5e722d] active:scale-50 ease-in duration-300 disabled:bg-[#c7d3a7]"
            onClick={() => handleScroll("left")}
            disabled={currentIndex === 0}
          >
            <ChevronLeft className="text-white size-2.5 md:size-3.5 lg:size-5" />
          </button>
          <button
            className="size-6 md:size-8 lg:size-12 flex items-center justify-center bg-[#859F3E] rounded-full hover:bg-[#5e722d] active:scale-50 ease-in duration-300 disabled:bg-[#c7d3a7]"
            onClick={() => handleScroll("right")}
            disabled={currentIndex === totalItems - 1}
          >
            <ChevronRight className="text-white size-2.5 md:size-3.5 lg:size-5" />
          </button>
        </div>
        <div className="flex flex-col overflow-x-auto w-full">
          <div className="border-t-2 border-[#859F3E] border-dashed w-[11rem] md:w-[22rem] lg:w-[33rem]"></div>
          <div className="flex">
            <div className="border-l-2 border-[#859F3E] border-dashed h-[10rem] md:h-[20rem] lg:h-[30rem]"></div>
            <div
              ref={scrollRef}
              className="overflow-x-auto mt-2 md:mt-4 lg:mt-6 ml-2 md:ml-4 lg:ml-6 w-full cursor-pointer scroll-smooth flex gap-3 md:gap-4 lg:gap-5"
            >
              {data.map((item, index) => (
                <div
                  key={index}
                  className="w-[60vw] flex flex-col items-start gap-3 md:gap-4 lg:gap-5 shrink-0"
                >
                  <div className="relative">
                    <img
                      src={item}
                      alt=""
                      className={`w-full h-auto transition-all duration-700 ease-in-out ${
                        loaded ? "blur-0" : "blur-md"
                      }`}
                      loading="lazy"
                      onLoad={() => setLoaded(true)}
                    />
                    <div className="absolute inset-0 bg-black/50 flex items-center justify-center">
                      <div className="active:scale-75 ease-in-out duration-150 z-10 border-[0.1875rem] md:border-[0.25rem] lg:border-[0.3125rem] border-white rounded-full size-8 md:size-16 lg:size-24 bg-[#859F3E] absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2">
                        <div className="flex items-center justify-center h-full w-full">
                          <Play className="size-4 md:size-8 lg:size-12 text-white fill-white" />
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="capitalize text-[#31511E] font-normal text-[10px] md:text-base lg:text-xl text-left">
                    Nandi Hills, Chikballapur, Karnataka
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Video;
