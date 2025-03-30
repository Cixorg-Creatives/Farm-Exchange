import React, { useState } from 'react';
import Button from '../Button';
import Filter from '../Filter';
import { Search, X } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

const PropertiesHero = () => {
    const [selectedListFilter, setSelectedListFilter] = useState("all");
    const [searchQuery, setSearchQuery] = useState("");

    const listFilter = [
        { value: "all", label: "All" },
        { value: "list", label: "Listed" },
        { value: "draft", label: "Draft" },
    ];

    return (
        <div className='my-2 md:my-4 xl:my-6 clashdisplay'>
            <div className="w-full bg-[#D9E1C3] px-2 md:px-4 lg:px-8 py-3 md:py-7 lg:py-11 flex flex-col items-center gap-4 md:gap-7 lg:gap-10 rounded-sm md:rounded-md lg:rounded-lg">
                <h1 className="boska w-full uppercase text-black font-semibold text-base md:text-lg lg:text-[2rem] text-start align-middle">
                    Find the best place
                </h1>
                <form className="w-full flex flex-col gap-4 md:gap-6 lg:gap-8">
                    <div className="grid grid-cols-[3fr_1fr] gap-3 md:gap-5 lg:gap-7">
                        <div className="w-full col-span-1 bg-[#C7D3A6] px-2 md:px-4 lg:px-6 flex items-center justify-between rounded-md lg:rounded-lg">
                            <div className="flex items-center gap-1 md:gap-2 lg:gap-3 w-full">
                                <Search className="h-4 md:h-5 lg:h-6 w-auto text-black" />
                                <input
                                    value={searchQuery}
                                    onChange={(e) => setSearchQuery(e.target.value)}
                                    className="w-full capitalize text-[#1B2D11] font-normal text-xs md:text-sm lg:text-base p-2 md:p-3 lg:p-4 leading-tight h-10 md:h-12 lg:h-14 rounded-md lg:rounded-lg bg-transparent outline-none"
                                    placeholder="Search"
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
                        <div className="col-span-1 flex flex-col items-start gap-1 md:gap-2 lg:gap-3">
                            <Filter options={listFilter} onSelect={setSelectedListFilter} selectedOption={selectedListFilter} />
                        </div>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default PropertiesHero;