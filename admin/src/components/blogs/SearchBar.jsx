import { useState } from "react";
import { Search } from "lucide-react";
import Filter from "../Filter";

const SearchBar = () => {
    const [selectedFilter, setSelectedFilter] = useState("latest");

    const filterOptions = [
        { value: "latest", label: "Date Modified" },
        { value: "earliest", label: "Date Modified" },
        { value: "low-high", label: "Popular" },
        { value: "high-low", label: "Popular" },
    ];

    return (
        <div className="my-2 md:my-4 xl:my-6">
            <div className="w-full md:h-24 bg-[#D9E1C3] flex flex-col lg:flex-row items-center justify-between py-3 md:py-0 px-2 md:px-4 lg:px-8 rounded-sm md:rounded-md lg:rounded-lg gap-2 md:gap-3 lg:gap-0">
                <h1 className="boska w-full uppercase text-black font-semibold text-base md:text-lg lg:text-[2rem] text-start align-middle">
                    FARM BLOGS
                </h1>
                <div className="w-full flex flex-col lg:flex-row items-center gap-2 md:gap-3 lg:gap-4">
                    <div className="w-full md:w-[24rem] bg-[#C7D3A6] px-2 md:px-4 lg:px-6 flex items-center justify-start gap-1 md:gap-2 lg:gap-3 rounded-md lg:rounded-lg">
                        <Search className="h-4 md:h-5 lg:h-6 w-auto text-black" />
                        <input
                            className="w-full capitalize text-[#1B2D11] font-normal text-xs md:text-sm lg:text-base p-2 md:p-3 lg:p-4 leading-tight h-10 md:h-12 lg:h-14 rounded-md lg:rounded-lg bg-transparent"
                            placeholder="Search"
                        />
                    </div>
                    <div className='w-full lg:w-[15rem]'><Filter options={filterOptions} onSelect={setSelectedFilter} selectedOption={selectedFilter} /></div>
                </div>
            </div>
        </div>
    );
};

export default SearchBar;
