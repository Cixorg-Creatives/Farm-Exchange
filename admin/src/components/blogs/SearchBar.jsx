import React, { useState, useEffect } from "react";
import { Search, X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import Filter from "../Filter";
import Button from "../Button";
import { Link } from "react-router-dom";

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
    <div className="mb-2 md:mb-4 xl:mb-6">
      <div className="w-full bg-[#D9E1C3] px-2 md:px-4 lg:px-8 py-3 md:py-7 lg:py-11 flex flex-col items-center gap-4 md:gap-7 lg:gap-10 rounded-sm md:rounded-md lg:rounded-lg">
        <div className='w-full flex items-center justify-between'>
          <h1 className="boska w-fit uppercase text-black font-semibold text-base md:text-lg lg:text-[2rem] text-start align-middle">
            FARM BLOGS Management
          </h1>
          <Link to={'/blogs/add-blog'}>
            <Button
              title={'Add Blog'}
              variant='primary'
              icon={'show'}
              symbol={'plus'}
            />
          </Link>
        </div>
        <form className="w-full flex flex-col gap-4 md:gap-6 lg:gap-8">
          <div className="grid grid-cols-[3fr_1fr] gap-3 md:gap-5 lg:gap-7">
            <div className="w-full col-span-1 bg-[#C7D3A6] px-2 md:px-4 lg:px-6 flex items-center justify-between rounded-md lg:rounded-lg">
              <div className="flex items-center gap-1 md:gap-2 lg:gap-3 w-full">
                <Search className="h-4 md:h-5 lg:h-6 w-auto text-black" />
                <input
                  className="w-full capitalize text-[#1B2D11] font-normal text-xs md:text-sm lg:text-base p-2 md:p-3 lg:p-4 leading-tight h-10 md:h-12 lg:h-14 rounded-md lg:rounded-lg bg-transparent outline-none"
                  placeholder="Search by name, tag, etc."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                />
              </div>
              <AnimatePresence>
                {searchQuery && (
                  <motion.button
                    key="clear-button"
                    type="button"
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
            <div className="col-span-1 flex items-center gap-2">
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
        </form>
      </div>
    </div>
  );
};

export default SearchBar;
