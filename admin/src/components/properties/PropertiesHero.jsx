import React, { useState } from 'react'
import Button from '../Button'
import Sort from '../Sort'
import Filter from '../Filter';

const PropertiesHero = () => {

    const [selectedCityFilter, setSelectedCityFilter] = useState("hyderabad");
    const [selectedTypeFilter, setselectedTypeFilter] = useState("farmland");
    const [selectedCategoryFilter, setselectedCategoryFilter] = useState("elite");
    const [selectedSort, setSelectedSort] = useState("latest");

    const cityFilter = [
        { value: "hyderabad", label: "Hyderabad" },
        { value: "bengaluru", label: "Bengaluru" },
        { value: "delhi", label: "Delhi" },
        { value: "chennai", label: "Chennai" },
    ];
    const typeFilter = [
        { value: "farmland", label: "Farm Land" },
        { value: "farmhouse", label: "Farm House" },
        { value: "agricultureland", label: "Agriculture Land" },
        { value: "coffee", label: "Coffee Estate" },
    ];
    const categoryFilter = [
        { value: "elite", label: "Elite Properties" },
        { value: "featured", label: "Featured Properties" },
    ];
    const sortOptions = [
        { value: "latest", label: "Date Modified" },
        { value: "earliest", label: "Date Modified" },
        { value: "rec_low-high", label: "Recommendation" },
        { value: "rec_high-low", label: "Recommendation" },
        { value: "area_low-high", label: "Area" },
        { value: "area_high-low", label: "Area" },
    ];

    return (
        <div className='my-2 md:my-4 xl:my-6 clashdisplay'>
            <div className="w-full bg-[#D9E1C3] px-2 md:px-4 lg:px-8 py-3 md:py-7 lg:py-11 flex flex-col items-center gap-4 md:gap-7 lg:gap-10 rounded-sm md:rounded-md lg:rounded-lg">
                <h1 className="boska w-full uppercase text-black font-semibold text-base md:text-lg lg:text-[2rem] text-start align-middle">
                    Find the best place
                </h1>
                <form className="w-full flex flex-col gap-4 md:gap-6 lg:gap-8">
                    <div className="grid grid-cols-[3fr_1fr] gap-3 md:gap-5 lg:gap-7">
                        <div className="grid-cols-3 flex flex-col items-start gap-1 md:gap-2 lg:gap-3">
                            <label className="text-black capitalize font-normal text-xs md:text-base lg:text-xl">
                                Name of property
                            </label>
                            <input
                                type="text"
                                className="w-full bg-[#C7D3A6] capitalize text-[#1B2D11] font-normal text-xs md:text-sm lg:text-base p-2 md:p-3 lg:p-4 leading-tight h-10 md:h-12 lg:h-14 rounded-md lg:rounded-lg"
                                placeholder="Property, budget, name"
                            />
                        </div>
                        <div className="w-full h-full grid-cols-1 flex items-end justify-end">
                            <Button title='Search' variant="secondary" className="!text-[#F6FCDF]" />
                        </div>
                    </div>
                    <div className="grid grid-cols-[1fr_1fr] lg:grid-cols-[1fr_1fr_1fr_1fr] gap-3 md:gap-5 lg:gap-7">
                        <div className="grid-cols-1 flex flex-col items-start gap-1 md:gap-2 lg:gap-3">
                            <label className="text-black capitalize font-normal text-xs md:text-base lg:text-xl">
                                City
                            </label>
                            <Filter options={cityFilter} onSelect={setSelectedCityFilter} selectedOption={selectedCityFilter} />
                        </div>
                        <div className="grid-cols-1 flex flex-col items-start gap-1 md:gap-2 lg:gap-3">
                            <label className="text-black capitalize font-normal text-xs md:text-base lg:text-xl">
                                Property type
                            </label>
                            <Filter options={typeFilter} onSelect={setselectedTypeFilter} selectedOption={selectedTypeFilter} />
                        </div>
                        <div className="grid-cols-1 flex flex-col items-start gap-1 md:gap-2 lg:gap-3">
                            <label className="text-black capitalize font-normal text-xs md:text-base lg:text-xl">
                                Project Category
                            </label>
                            <Filter options={categoryFilter} onSelect={setselectedCategoryFilter} selectedOption={selectedCategoryFilter} />
                        </div>
                        <div className="grid-cols-1 flex flex-col items-start gap-1 md:gap-2 lg:gap-3">
                            <label className="text-black capitalize font-normal text-xs md:text-base lg:text-xl">
                                Project Price
                            </label>
                            <Sort options={sortOptions} onSort={setSelectedSort} SortedOption={selectedSort} />
                        </div></div>
                </form>
            </div>
        </div>
    )
}

export default PropertiesHero