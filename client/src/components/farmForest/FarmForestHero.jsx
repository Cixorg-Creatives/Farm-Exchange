import { assets } from "@/assets/assets";
import { Heart, IndianRupee, Loader2, MessageSquareText } from "lucide-react";
import React, { useEffect, useState } from "react";
import Button from "../Button";
import { Link, useParams } from "react-router-dom";

const FarmForestHero = () => {
  const { propertiesId } = useParams();
  console.log(propertiesId);
  const [property, setProperty] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchProperty = async () => {
      try {
        const response = await fetch(
          `${import.meta.env.VITE_SERVER_DOMAIN}/get-properties/${propertiesId}`
        );
        if (!response.ok) {
          throw new Error("Failed to fetch property");
        }
        const data = await response.json();
        setProperty(data.data);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    fetchProperty();
  }, [propertiesId]);

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
    return <div className="fixed top-0 left-0 z-50 bg-[#F6FCDF] h-screen w-full flex items-center justify-center" ><Loader2 className="animate-spin size-10" /></div>
  }

  if (error) {
    return <div className="fixed top-0 left-0 z-50 bg-[#F6FCDF] h-screen w-full flex items-center justify-center" ><Loader2 className="animate-spin size-10" /></div>
  }

  if (!property) {
    return <div className="fixed top-0 left-0 z-50 bg-[#F6FCDF] h-screen w-full flex items-center justify-center" ><Loader2 className="animate-spin size-10" /></div>
  }

  return (
    <div className="py-6 md:py-10 xl:py-14">
      <div className="w-full flex flex-col lg:flex-row justify-between ">
        <div className="flex flex-col items-start justify-between gap-5 w-full lg:w-2/3">
          <div className="uppercase text-[#31511E] font-semibold text-[2.5rem] md:text-6xl lg:text-[5rem] leading-tight">
            {property.name}
          </div>
          <div className="flex flex-col items-start justify-between gap-5 md:gap-7">
            <div className="flex flex-col gap-3 md:gap-4 lg:w-[43.75rem]">
              <p className="capitalize text-[#31511E] font-normal text-xs md:text-base lg:text-xl">
                {property.propertyDescription}
              </p>
              <p className="capitalize text-[#31511E] font-medium text-xs md:text-base lg:text-xl">
                {property.location.locality}, {property.location.city},{" "}
                {property.location.state}
              </p>
            </div>
            <div className="flex gap-2 md:gap-4 h-full items-end">
              <p className="flex items-center text-[#1E1E1E] font-bold text-4xl md:text-5xl">
                <IndianRupee className="text-[#1E1E1E] w-7 md:w-9 lg:w-11 h-auto " />
                {price(property.price.value).value}
                <span className="text-2xl md:text-4xl pl-1 md:pl-2">
                  {price(property.price.value).unit}
                </span>
              </p>
              <p className="text-[#757575] font-normal text-base md:text-xl -translate-y-1">
                {property.availabilityStatus === "available"
                  ? "Onwards"
                  : "Sold Out"}
              </p>
            </div>
          </div>
        </div>
        <div className="flex flex-col gap-3 md:gap-4 w-full lg:w-[30.5rem] mt-6 lg:mt-0">
          <div className="flex flex-row lg:flex-col gap-3 md:gap-4 w-full lg:w-[30.5rem] mt-6 lg:mt-0">
            <div className="bg-[#D9E1C3] p-3 md:p-5 w-full">
              <div className="flex items-end justify-start gap-1 capitalize">
                <p className="text-[#31511E] font-semibold text-2xl md:text-3xl lg:text-4xl">
                  {property.plotArea.value}
                </p>
                <p className="text-[#859F3E] font-semibold text-base md:text-xl lg:text-2xl">
                  {property.plotArea.unit === "ft" ? "Sq ft" : "Acres"}
                </p>
              </div>
              <p className="capitalize text-[#5A744B] text-xs md:text-base lg:text-xl font-medium">
                Plot Area
              </p>
            </div>
            <div className="bg-[#D9E1C3] p-3 md:p-5 w-[80%] lg:w-full">
              <p className="text-[#31511E] font-semibold text-2xl md:text-3xl lg:text-4xl">
                {property.pricePerArea.value}
              </p>
              <p className="capitalize text-[#5A744B] text-xs md:text-base lg:text-xl font-medium">
                Price Per {property.plotArea.unit === "ft" ? "sq. Ft" : "acre"}
              </p>
            </div>
          </div>
          <div className="bg-[#C7D3A6] p-3 md:p-5 w-full">
            <div className="flex items-end justify-start gap-1 capitalize">
              <p className="text-[#31511E] font-semibold text-2xl md:text-3xl lg:text-4xl">
                {property.totalProjectArea.value}
              </p>
              <p className="text-[#31511E] font-semibold text-base md:text-xl lg:text-2xl">
                {property.totalProjectArea.unit === "ft" ? "Sq ft" : "Acres"}
              </p>
            </div>
            <p className="capitalize text-[#5A744B] text-xs md:text-base lg:text-xl font-medium">
              Project Area
            </p>
            <p className="capitalize text-[#5A744B] text-xs md:text-base lg:text-xl font-medium">
              {property.projectDescription}
            </p>
          </div>
        </div>
      </div>
      <div className="pt-12 grid grid-cols-1 lg:grid-cols-[1fr_1fr] gap-6">
        <div className="col-span-1 row-span-1 h-auto">
          <img
            src={property.banner}
            alt={property.name}
            className="w-full h-[400px] object-cover rounded-md"
          />
        </div>
        <div className="h-full flex flex-col items-start justify-between">
          <div className="grid grid-cols-[1fr_1fr] gap-3 md:gap-5 h-2/3">
            {property.gallery.slice(0, 2).map((image, index) => (
              <img
                key={index}
                src={image}
                alt={`Gallery ${index + 1}`}
                className="col-span-1 w-full h-auto aspect-5/4 object-cover rounded-md"
              />
            ))}
          </div>
          <div className="w-full flex items-end justify-around mt-6 lg:mt-0">
            <div className='w-1/2 cursor-pointer flex items-center justify-evenly bg-[#BFC9B9]/50 backdrop-blur-sm shadow-[inset_0px_0px_10px_-1px] shadow-[#758A68] rounded-md md:rounded-lg lg:rounded-xl gap-1 md:gap-2 lg:gap-3 p-1 md:p-2 lg:p-3'>
              <img src={property?.developer.logo} alt={property?.developer.name} className="w-1/4 h-auto aspect-square object-cover rounded-md md:rounded-lg lg:rounded-xl" />
              <div className="w-fit text-[8px] md:text-base lg:text-3xl font-medium text-left text-[#31511E] leading-tight">{property?.developer.name}</div>
            </div>
            <Button title="Contact Us" icon="show" variant="primary" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default FarmForestHero;
