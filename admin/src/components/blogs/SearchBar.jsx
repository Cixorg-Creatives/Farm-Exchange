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
                <div className="boska uppercase text-[#31511E] font-semibold text-xl md:text-2xl lg:text-[1.75rem]">
                    FARM BLOGS
                </div>
                <div className="flex flex-col lg:flex-row items-center gap-2 md:gap-3 lg:gap-4">
                    <div className="w-full md:w-[24rem] bg-[#C7D3A6] py-4 px-6 flex items-center justify-start gap-1 md:gap-2 lg:gap-3 rounded-md lg:rounded-lg">
                        <Search className="h-4 md:h-5 lg:h-6 w-auto text-black" />
                        <input
                            className="h-4 md:h-6 capitalize text-sm md:text-base lg:text-xl font-normal outline-none bg-transparent"
                            placeholder="Search"
                        />
                    </div>
                    <div className='lg:w-[15rem]'><Filter options={filterOptions} onSelect={setSelectedFilter} selectedOption={selectedFilter} /></div>
                </div>
            </div>
        </div>
    );
};

export default SearchBar;
