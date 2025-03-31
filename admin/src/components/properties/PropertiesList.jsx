import { assets } from "@/assets/assets";
import { IndianRupee } from "lucide-react";
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const category = {
  elite: "Elite Properties",
  featured: "Featured Properties",
  recommended: "Highly Recommended Properties",
};

const type = {
  farmland: "Farm Land",
  farmhouse: "Farm House",
  agricultureland: "Agriculture Land",
  coffee: "Coffee Estate",
};

const PropertiesList = ({
  searchQuery,
  statusFilter,
}) => {
  const [properties, setProperties] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchProperties = async () => {
      try {
        const params = new URLSearchParams();
        if (statusFilter !== "all") params.append("status", statusFilter);
        if (searchQuery) params.append("search", searchQuery);
        console.log(statusFilter)

        const url = `http://localhost:3000/list-properties?${params.toString()}`;
        const response = await fetch(url);

        if (!response.ok) {
          throw new Error("Failed to fetch properties");
        }
        const data = await response.json();
        setProperties(data.data);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    fetchProperties();
  }, [searchQuery, statusFilter]);

  if (loading) {
    return <div className="text-center py-8">Loading properties...</div>;
  }

  if (error) {
    return <div className="text-center py-8 text-red-500">Error: {error}</div>;
  }

  if (properties.length === 0) {
    return <div className="text-center py-8">No properties found</div>;
  }

  console.log(properties)

  return (
    <div className="my-2 md:my-4 xl:my-6 relative clashdisplay">
      <div className="grid md:grid-cols-[1fr_1fr] lg:grid-cols-[1fr_1fr_1fr] gap-1.5 md:gap-x-3 lg:gap-x-5 gap-y-2 md:gap-y-4 lg:gap-y-6">
        {properties.map((property) => (
          <Link
            to={`/properties/${property._id}`}
            key={property._id}
            className={`flex flex-col items-start justify-between gap-2 md:gap-4 lg:gap-6 text-[#31511E] ${property.status === "draft" ? 'opacity-70' : 'opacity-100'}`}
          >
            <div className="relative w-full">
              <img
                src={property.banner}
                alt={property.name}
                className="w-full h-auto aspect-[4/3] object-cover rounded-md"
              />
              <div className="absolute inset-0 bg-[#00000033] rounded-md"></div>
              <span className="absolute top-2 left-2 bg-[#859F3E] text-white text-xs px-2 py-1 rounded capitalize">
                {category[property.category]}
              </span>
            </div>
            <div className="flex flex-col items-start gap-2 md:gap-3 lg:gap-4 w-full">
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
                  <IndianRupee className="size-4 md:size-6 lg:size-8 -translate-y-1" />
                  {property.price.value}
                  <span className="text-base md:text-xl lg:text-3xl pl-1 md:pl-2">
                    {property.price.unit === "lakh" ? "lakh" : "cr"}
                  </span>
                </p>
                <p className="text-[#A0AF98] font-normal text-xs md:text-sm lg:text-base -translate-y-0.5">
                  {property.availabilityStatus === "available"
                    ? "Onwards"
                    : "Sold Out"}
                </p>
              </div>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default PropertiesList;
