import { assets } from "@/assets/assets";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const Location = () => {
  const { propertiesId } = useParams();
  const [property, setProperty] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchProperty = async () => {
      try {
        const response = await fetch(
          `http://localhost:3000/get-properties/${propertiesId}`
        );
        if (!response.ok) {
          throw new Error("Failed to fetch property");
        }
        const data = await response.json();
        setProperty(data.data);
      } catch (error) {
        console.error("Error fetching property:", error);
      } finally {
        setLoading(false);
      }
    };

    if (propertiesId) {
      fetchProperty();
    }
  }, [propertiesId]);

  if (loading) {
    return (
      <div className="py-4 md:py-6 lg:py-8 flex flex-col gap-2 md:gap-3 lg:gap-4">
        <div className="uppercase sticky top-0 left-0 z-10 lg:relative text-[#31511E] font-bold bg-[#F6FCDF] text-[2rem]">
          Location
        </div>
        <div className="flex flex-col gap-4 md:gap-8 lg:gap-11">
          <div className="w-full h-64 bg-gray-200 animate-pulse border border-black"></div>
          <div className="flex flex-col gap-2 md:gap-4 lg:gap-8">
            <div className="h-12 w-3/4 bg-gray-200 animate-pulse"></div>
            <div className="h-24 w-full bg-gray-200 animate-pulse"></div>
          </div>
        </div>
      </div>
    );
  }
  return (
    <div className="py-4 md:py-6 lg:py-8 flex flex-col gap-2 md:gap-3 lg:gap-4">
      <div className="uppercase sticky top-0 left-0 z-10 lg:relative text-[#31511E] font-bold bg-[#F6FCDF] text-[2rem]">
        Location
      </div>
      <div className="flex flex-col gap-4 md:gap-8 lg:gap-11">
        <img
          src={assets.farmforest_14}
          alt=""
          className="w-full h-auto border-1 border-black"
        />
        <div className="flex flex-col gap-2 md:gap-4 lg:gap-8">
          <h2 className="text-[#31511E] capitalize font-medium text-2xl md:text-4xl lg:text-5xl leading-tight text-left">
            Discover Properties with <br /> the Best Value
          </h2>
          <p className="text-[#31511E] capitalize font-normal text-xs md:text-base lg:text-xl leading-relaxed text-left">
            {property?.propertyDescription || "No description available"}
          </p>
        </div>
      </div>
    </div>
  );
};

export default Location;
