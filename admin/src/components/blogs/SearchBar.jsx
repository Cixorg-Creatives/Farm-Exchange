import React, { useState, useEffect } from "react";
import { Search, X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import Filter from "../Filter";

const SearchBar = ({ setQuery, setFilter }) => {
  const [selectedFilter, setSelectedFilter] = useState("all");
  const [searchQuery, setSearchQuery] = useState("");

  const filterOptions = [
    { value: "all", label: "All" },
    { value: "published", label: "Published" },
    { value: "draft", label: "Draft" },
  ];

  // Debounce effect for search query
  useEffect(() => {
    const delayDebounceFn = setTimeout(() => {
      setQuery(searchQuery);
    }, 500);

    return () => clearTimeout(delayDebounceFn);
  }, [searchQuery, setQuery]);

  return (
    <div className="my-2 md:my-4 xl:my-6">
      <div className="w-full md:h-24 bg-[#D9E1C3] flex flex-col lg:flex-row items-center justify-between py-3 md:py-0 px-2 md:px-4 lg:px-8 rounded-sm md:rounded-md lg:rounded-lg gap-2 md:gap-3 lg:gap-0">
        <h1 className="boska w-full uppercase text-black font-semibold text-base md:text-lg lg:text-[2rem] text-start align-middle">
          FARM BLOGS
        </h1>
        <div className="w-full flex flex-col lg:flex-row items-center gap-2 md:gap-3 lg:gap-4">
          <div className="w-full md:w-[24rem] bg-[#C7D3A6] px-2 md:px-4 lg:px-6 flex items-center justify-between rounded-md lg:rounded-lg">
            <div className="flex items-center gap-1 md:gap-2 lg:gap-3 w-full">
              <Search className="h-4 md:h-5 lg:h-6 w-auto text-black" />
              <input
                className="w-full capitalize text-[#1B2D11] font-normal text-xs md:text-sm lg:text-base p-2 md:p-3 lg:p-4 leading-tight h-10 md:h-12 lg:h-14 rounded-md lg:rounded-lg bg-transparent outline-none"
                placeholder="Search"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
              />
            </div>
            <AnimatePresence>
              {searchQuery && (
                <motion.button
                  key="clear-button"
                  onClick={() => setSearchQuery("")}
                  className="p-2 text-black"
                  initial={{ opacity: 0, rotate: -90 }}
                  animate={{ opacity: 1, rotate: 0 }}
                  exit={{ opacity: 0, rotate: 90 }}
                  transition={{ duration: 0.3 }}
                >
                  <X className="h-4 md:h-5 lg:h-6 w-auto" />
                </motion.button>
              )}
            </AnimatePresence>
          </div>
          <div className="w-full lg:w-[15rem]">
            <Filter 
              options={filterOptions} 
              onSelect={(value) => {
                setSelectedFilter(value);
                setFilter(value);
              }} 
              selectedOption={selectedFilter} 
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default SearchBar;
