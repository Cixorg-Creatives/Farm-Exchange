import { assets } from "@/assets/assets";
import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { GoogleMap, Marker, useJsApiLoader } from "@react-google-maps/api";

const Location = () => {
  const { propertyId } = useParams();
  const [property, setProperty] = useState(null);
  const [loading, setLoading] = useState(true);
  const [mapCenter, setMapCenter] = useState({ lat: 12.9716, lng: 77.5946 });
  const [mapType, setMapType] = useState("roadmap");

  const { isLoaded } = useJsApiLoader({
    id: "google-map-script",
    googleMapsApiKey: "AIzaSyCYwUnCU9GJHeIW6SAHq0F_P46wg5AnbnI",
  });

  useEffect(() => {
    const fetchProperty = async () => {
      if (!propertyId) {
        setLoading(false);
        return;
      }

      try {
        setLoading(true);
        const response = await fetch(
          `http://localhost:3000/get-properties/${propertyId}`
        );
        
        if (!response.ok) {
          throw new Error("Failed to fetch property");
        }
        
        const data = await response.json();
        setProperty(data.data);

        if (data.data?.location?.coordinates?.length === 2) {
          setMapCenter({
            lng: data.data.location.coordinates[0],
            lat: data.data.location.coordinates[1],
          });
        }
      } catch (error) {
        console.error("Error fetching property:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchProperty();
  }, [propertyId]);

  const containerStyle = {
    width: "100%",
    height: "400px",
  };

  const toggleMapType = () => {
    setMapType((prevType) =>
      prevType === "roadmap" ? "satellite" : "roadmap"
    );
  };

  if (loading) {
    return (
      <div className="py-4 md:py-6 lg:py-8 flex flex-col gap-2 md:gap-3 lg:gap-4">
        <div className="uppercase sticky -top-7.5 left-0 z-10 lg:relative text-[#31511E] font-bold bg-[#F6FCDF] text-[2rem]">
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
        {isLoaded ? (
          <div className="relative">
            <GoogleMap
              mapContainerStyle={containerStyle}
              center={mapCenter}
              zoom={15}
              options={{
                streetViewControl: false,
                mapTypeControl: false,
                fullscreenControl: false,
                mapTypeId: mapType,
              }}
              className="border border-black"
            >
              <Marker position={mapCenter} />
            </GoogleMap>
            <button
              onClick={toggleMapType}
              className="absolute bottom-4 right-4 bg-white px-3 py-2 rounded-md shadow-md hover:bg-gray-100 transition-colors z-10"
            >
              {mapType === "roadmap" ? "Satellite View" : "Map View"}
            </button>
          </div>
        ) : (
          <div className="w-full h-64 bg-gray-200 border border-black flex items-center justify-center">
            <p>Loading map...</p>
          </div>
        )}
        <div className="flex flex-col gap-2 md:gap-4 lg:gap-8">
          <h2 className="text-[#31511E] capitalize font-medium text-2xl md:text-4xl lg:text-5xl leading-tight text-left">
            Discover Properties with <br /> the Best Value
          </h2>
          {/* <p className="text-[#31511E] capitalize font-normal text-xs md:text-base lg:text-xl leading-relaxed text-left">
            {property?.propertyDescription || "No description available"}
          </p> */}
        </div>
      </div>
    </div>
  );
};

export default Location;