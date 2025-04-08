import { assets } from "@/assets/assets";
import { IndianRupee } from "lucide-react";
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";

const Recommended = () => {
  const [featuredProperties, setFeaturedProperties] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchFeaturedProperties = async () => {
      try {
        const response = await axios.get("http://localhost:3000/list", {
          params: {
            category: "recommended",
            status: "published",
            limit: 6,
          },
        });
        setFeaturedProperties(response.data);
        setLoading(false);
      } catch (err) {
        setError(err.message);
        setLoading(false);
        console.error("Error fetching featured properties:", err);
      }
    };

    fetchFeaturedProperties();
  }, []);

  const price = (value) => {
    if (value >= 10000000) {
      return { value: (value / 10000000).toFixed(2), unit: "cr" };
    } else if (value >= 100000) {
      return { value: (value / 100000).toFixed(2), unit: "lakh" };
    } else {
      return { value, unit: "" };
    }
  }

  if (loading) {
    return (
      <div className="py-6 md:py-10 xl:py-14 relative old-standard-tt">
        <div className="flex flex-col items-start gap-2 md:gap-3 lg:gap-5 pb-4 md:pb-6 lg:pb-8">
          <p className="boska font-normal text-[#859F3E] text-base md:text-xl lg:text-[1.75rem] leading-tight uppercase">
            highly recommended properties
          </p>
          <p className="capitalize text-[#31511E] font-medium text-sm md:text-3xl lg:text-6xl leading-tight">
          Top-Rated Farm Estates <br /> Curated for High <br /> Return Investors
          </p>
        </div>
        <div className='py-6 md:py-10 xl:py-14 relative'>
          <div className='grid grid-cols-[1fr_1fr] lg:grid-cols-[1fr_1fr_1fr] gap-x-2 md:gap-x-3 lg:gap-x-5 gap-y-6 md:gap-y-10 lg:gap-y-16'>
            {[...Array(6)].map((_, index) => (
              <div key={index} className='flex flex-col items-start justify-between gap-2 md:gap-4 lg:gap-6 text-[#31511E] animate-pulse'>
                <div className='relative w-full bg-[#c7d3a7] h-48 md:h-64 lg:h-80 rounded-lg'></div>
                <div className='w-full h-6 bg-[#c7d3a7] rounded'></div>
                <div className='w-3/4 h-4 bg-[#c7d3a7] rounded'></div>
                <div className='w-1/2 h-8 bg-[#c7d3a7] rounded'></div>
              </div>
            ))}
          </div>
        </div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="py-6 md:py-10 xl:py-14 relative old-standard-tt">
        <div className="flex flex-col items-start gap-2 md:gap-3 lg:gap-5 pb-4 md:pb-6 lg:pb-8">
          <p className="boska font-normal text-[#859F3E] text-base md:text-xl lg:text-[1.75rem] leading-tight uppercase">
            highly recommended properties
          </p>
          <p className="capitalize text-[#31511E] font-medium text-sm md:text-3xl lg:text-6xl leading-tight">
            The Most Renowned and <br /> Influential Developers in the <br />
            Industry
          </p>
        </div>
        <div className='py-6 md:py-10 xl:py-14 relative'>
          <div className='grid grid-cols-[1fr_1fr] lg:grid-cols-[1fr_1fr_1fr] gap-x-2 md:gap-x-3 lg:gap-x-5 gap-y-6 md:gap-y-10 lg:gap-y-16'>
            {[...Array(6)].map((_, index) => (
              <div key={index} className='flex flex-col items-start justify-between gap-2 md:gap-4 lg:gap-6 text-[#31511E] animate-pulse'>
                <div className='relative w-full bg-[#c7d3a7] h-48 md:h-64 lg:h-80 rounded-lg'></div>
                <div className='w-full h-6 bg-[#c7d3a7] rounded'></div>
                <div className='w-3/4 h-4 bg-[#c7d3a7] rounded'></div>
                <div className='w-1/2 h-8 bg-[#c7d3a7] rounded'></div>
              </div>
            ))}
          </div>
        </div>
      </div>
    );
  }

  if (featuredProperties.length === 0) {
    return <></>;
  }

  return (
    <div className="py-6 md:py-10 xl:py-14 relative old-standard-tt">
      <div className="flex flex-col items-start gap-2 md:gap-3 lg:gap-5 pb-4 md:pb-6 lg:pb-8">
        <p className="boska font-normal text-[#859F3E] text-base md:text-xl lg:text-[1.75rem] leading-tight uppercase">
          highly recommended properties
        </p>
        <p className="capitalize text-[#31511E] font-medium text-sm md:text-3xl lg:text-6xl leading-tight">
          The Most Renowned and <br /> Influential Developers in the <br />
          Industry
        </p>
      </div>
      <div className="grid grid-cols-[1fr_1fr] lg:grid-cols-[1fr_1fr_1fr] gap-x-2 md:gap-x-3 lg:gap-x-5 gap-y-6 md:gap-y-10 lg:gap-y-16">
        {featuredProperties.map((property, index) => (
          <Link
            to={`/properties/${property._id}`}
            key={index}
            className="flex flex-col items-start justify-between gap-2 md:gap-4 lg:gap-6 text-[#31511E]"
          >
            <div className="relative">
              <img
                src={property.banner || assets.properties_1}
                alt={property.name}
                className="w-full h-auto aspect-[3/2] object-cover"
              />
              <div className="absolute inset-0 bg-[#00000033]"></div>
            </div>
            <div className="flex flex-col items-start gap-2 md:gap-3 lg:gap-4">
              <div className="flex flex-col gap-0.5 md:gap-1 lg:gap-2">
                <p className="capitalize font-bold text-xs md:text-lg lg:text-2xl">
                  {property.name}
                </p>
                <p className="capitalize font-normal text-[0.625rem] md:text-base lg:text-xl">
                  {property.location.locality}, {property.location.city},{" "}
                  {property.location.state}
                </p>
              </div>
              <div className="flex gap-2 md:gap-4 h-full items-end">
                <p className="flex items-end font-bold text-xl md:text-2xl lg:text-4xl">
                  <IndianRupee className="size-4 md:size-6 lg:size-8 -translate-y-2" />
                  {price(property.price.value).value}
                  <span className="text-base md:text-xl lg:text-3xl pl-1 md:pl-2">
                    {price(property.price.value).unit}
                  </span>
                </p>
                <p className="text-[#A0AF98] font-normal text-xs md:text-sm lg:text-base -translate-y-0.5">
                  Onwards
                </p>
              </div>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Recommended;
