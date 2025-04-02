import { useState, useEffect } from "react";
import { assets } from "@/assets/assets";
import Filter from "../Filter";
import Sort from "../Sort";
import Button from "../Button";

const PropertiesHero = ({ onFilterChange, filters }) => {
  const cityFilter = [
    { value: "all", label: "All" },
    { value: "hyderabad", label: "Hyderabad" },
    { value: "bengaluru", label: "Bengaluru" },
    { value: "delhi", label: "Delhi" },
    { value: "chennai", label: "Chennai" },
  ];

  const typeFilter = [
    { value: "all", label: "All" },
    { value: "farmland", label: "Farm Land" },
    { value: "farmhouse", label: "Farm House" },
    { value: "agricultureland", label: "Agriculture Land" },
    { value: "coffee", label: "Coffee Estate" },
  ];

  const categoryFilter = [
    { value: "all", label: "All" },
    { value: "elite", label: "Elite Properties" },
    { value: "featured", label: "Featured Properties" },
    { value: "highrec", label: "Highly recommended" },
  ];

  const sortOptions = [
    { value: "alpha_low-high", label: "Alphabetical (A-Z)" },
    { value: "alpha_high-low", label: "Alphabetical (Z-A)" },
    { value: "latest", label: "Date Modified (Newest)" },
    { value: "earliest", label: "Date Modified (Oldest)" },
    { value: "rec_low-high", label: "Recommendation (Low)" },
    { value: "rec_high-low", label: "Recommendation (High)" },
    { value: "area_low-high", label: "Area (Low)" },
    { value: "area_high-low", label: "Area (High)" },
    { value: "price_low-high", label: "Price (Low)" },
    { value: "price_high-low", label: "Price (High)" },
  ];

  const [searchQuery, setSearchQuery] = useState(filters.search || "");

  useEffect(() => {
    onFilterChange({ ...filters, search: searchQuery });
  }, [searchQuery]);

  const handleFilterChange = (key, value) => {
    onFilterChange({ ...filters, [key]: value });
  };

  return (
    <div className="pb-6 md:pb-10 xl:pb-14">
      <div className="relative hidden lg:block">
        <img src={assets.properties_hero_1} alt="" className="w-full h-auto" />
        <div className="absolute inset-0 bg-[#00000080] px-3 md:px-6 lg:px-9 py-6 md:py-12 lg:py-24 flex flex-col items-center justify-end gap-4 md:gap-6 lg:gap-8">
          <h1 className="w-full text-start align-middle capitalize text-white font-semibold text-2xl lg:text-[4rem]">
            Build Your Future, <br />
            One Property at a Time
          </h1>
          <div className="w-full bg-[#9DB265] px-2 md:px-4 lg:px-8 py-3 md:py-7 lg:py-11 flex flex-col items-center gap-4 md:gap-7 lg:gap-10">
            <h1 className="w-full uppercase text-black font-normal text-xs md:text-lg lg:text-[2rem] text-start align-middle">
              Find the Best Place
            </h1>
            <form
              onSubmit={(e) => e.preventDefault()}
              className="w-full flex flex-col gap-4 md:gap-6 lg:gap-8"
            >
              <div className="grid grid-cols-[3fr_1fr] gap-3 md:gap-5 lg:gap-7">
                <div className="grid-cols-3 flex flex-col items-start gap-1 md:gap-2 lg:gap-3">
                  <label className="text-black capitalize font-normal text-xs md:text-base lg:text-xl">
                    Name of Property
                  </label>
                  <input
                    type="text"
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    className="w-full bg-[#C7D3A6] capitalize text-[#1B2D11] font-normal text-[8px] md:text-xs lg:text-base p-2 md:p-3 lg:p-4 leading-tight h-10 md:h-12 lg:h-14"
                    placeholder="Search by name, location, or description"
                  />
                </div>
                <div className="w-full h-full grid-cols-1 flex items-end justify-end">
                  <Button
                    type="button"
                    title="Search"
                    variant="secondary"
                    className="!text-[#F6FCDF]"
                  />
                </div>
              </div>
              <div className="grid grid-cols-[1fr_1fr] lg:grid-cols-[1fr_1fr_1fr_1fr] gap-3 md:gap-5 lg:gap-7">
                <div className="grid-cols-1 flex flex-col items-start gap-1 md:gap-2 lg:gap-3">
                  <label className="text-black capitalize font-normal text-xs md:text-base lg:text-xl">
                    City
                  </label>
                  <Filter
                    options={cityFilter}
                    onSelect={(value) => handleFilterChange("city", value)}
                    selectedOption={filters.city || "all"}
                  />
                </div>
                <div className="grid-cols-1 flex flex-col items-start gap-1 md:gap-2 lg:gap-3">
                  <label className="text-black capitalize font-normal text-xs md:text-base lg:text-xl">
                    Property Type
                  </label>
                  <Filter
                    options={typeFilter}
                    onSelect={(value) => handleFilterChange("type", value)}
                    selectedOption={filters.type || "all"}
                  />
                </div>
                <div className="grid-cols-1 flex flex-col items-start gap-1 md:gap-2 lg:gap-3">
                  <label className="text-black capitalize font-normal text-xs md:text-base lg:text-xl">
                    Project Category
                  </label>
                  <Filter
                    options={categoryFilter}
                    onSelect={(value) => handleFilterChange("category", value)}
                    selectedOption={filters.category || "all"}
                  />
                </div>
                <div className="grid-cols-1 flex flex-col items-start gap-1 md:gap-2 lg:gap-3">
                  <label className="text-black capitalize font-normal text-xs md:text-base lg:text-xl">
                    Project Price
                  </label>
                  <Sort
                    options={sortOptions}
                    onSort={(value) => handleFilterChange("sort", value)}
                    SortedOption={filters.sort || "latest"}
                  />
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
      <div className="w-full lg:hidden bg-[#9DB265] px-2 md:px-4 lg:px-8 py-3 md:py-7 lg:py-11 flex flex-col items-center gap-4 md:gap-7 lg:gap-10">
        <h1 className="w-full uppercase text-black font-normal text-xs md:text-lg lg:text-[2rem] text-start align-middle">
          Find the Best Place
        </h1>
        <form
          onSubmit={(e) => e.preventDefault()}
          className="w-full flex flex-col gap-4 md:gap-6 lg:gap-8"
        >
          <div className="grid grid-cols-[3fr_1fr] gap-3 md:gap-5 lg:gap-7">
            <div className="grid-cols-3 flex flex-col items-start gap-1 md:gap-2 lg:gap-3">
              <label className="text-black capitalize font-normal text-xs md:text-base lg:text-xl">
                Name of Property
              </label>
              <input
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full bg-[#C7D3A6] capitalize text-[#1B2D11] font-normal text-[8px] md:text-xs lg:text-base p-2 md:p-3 lg:p-4 leading-tight h-10 md:h-12 lg:h-14"
                placeholder="Property, budget, name"
              />
            </div>
            <div className="w-full h-full grid-cols-1 flex items-end justify-end">
              <Button
                type="button"
                title="Search"
                variant="secondary"
                className="!text-[#F6FCDF]"
              />
            </div>
          </div>
          <div className="grid grid-cols-[1fr_1fr] lg:grid-cols-[1fr_1fr_1fr_1fr] gap-3 md:gap-5 lg:gap-7">
            <div className="grid-cols-1 flex flex-col items-start gap-1 md:gap-2 lg:gap-3">
              <label className="text-black capitalize font-normal text-xs md:text-base lg:text-xl">
                City
              </label>
              <Filter
                options={cityFilter}
                onSelect={(value) => handleFilterChange("city", value)}
                selectedOption={filters.city || "all"}
              />
            </div>
            <div className="grid-cols-1 flex flex-col items-start gap-1 md:gap-2 lg:gap-3">
              <label className="text-black capitalize font-normal text-xs md:text-base lg:text-xl">
                Property Type
              </label>
              <Filter
                options={typeFilter}
                onSelect={(value) => handleFilterChange("type", value)}
                selectedOption={filters.type || "all"}
              />
            </div>
            <div className="grid-cols-1 flex flex-col items-start gap-1 md:gap-2 lg:gap-3">
              <label className="text-black capitalize font-normal text-xs md:text-base lg:text-xl">
                Project Category
              </label>
              <Filter
                options={categoryFilter}
                onSelect={(value) => handleFilterChange("category", value)}
                selectedOption={filters.category || "all"}
              />
            </div>
            <div className="grid-cols-1 flex flex-col items-start gap-1 md:gap-2 lg:gap-3">
              <label className="text-black capitalize font-normal text-xs md:text-base lg:text-xl">
                Project Price
              </label>
              <Sort
                options={sortOptions}
                onSort={(value) => handleFilterChange("sort", value)}
                SortedOption={filters.sort || "latest"}
              />
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};

export default PropertiesHero;
