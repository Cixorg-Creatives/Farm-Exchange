import { useState } from "react";
import { Check, ChevronDown, ChevronUp } from "lucide-react";

const Select = ({ options, onSelect, selectedOption }) => {
    const [isOpen, setIsOpen] = useState(false);
    const defaultLabel = "Select";
    
    const displayOption = options.find(option => option.value === selectedOption)?.label || defaultLabel;

    return (
        <div className="relative w-full clashdisplay">
            <div
                className="w-full flex items-center justify-between bg-[#C7D3A6] capitalize text-[#1B2D11] font-normal text-xs md:text-sm lg:text-base p-2 md:p-3 lg:p-4 leading-tight rounded-md lg:rounded-lg cursor-pointer h-10 md:h-12 lg:h-14"
                onClick={() => setIsOpen(!isOpen)}
            >
                <span className="flex items-center gap-1 md:gap-1.5 lg:gap-2">
                    {displayOption}
                </span>
                {isOpen ? (
                    <ChevronUp className="h-4 md:h-6 w-auto text-black" />
                ) : (
                    <ChevronDown className="h-4 md:h-6 w-auto text-black" />
                )}
            </div>
            {isOpen && (
                <div className="absolute left-0 mt-2 w-full rounded-md bg-[#C7D3A6] shadow-lg z-10">
                    {options.map((option) => (
                        <div
                            key={option.value}
                            className={`flex items-center justify-between p-2 md:p-3 lg:p-4 hover:bg-[#B8C597] cursor-pointer ${selectedOption === option.value ? "font-semibold" : ""}`}
                            onClick={() => {
                                onSelect(option.value);
                                setIsOpen(false);
                            }}
                        >
                            <span className="flex items-center gap-1 md:gap-1.5 lg:gap-2 text-xs md:text-sm lg:text-base">
                                {option.label}
                            </span>
                            {selectedOption === option.value && <Check className="h-4 md:h-6 w-auto text-black" />}
                        </div>
                    ))}
                </div>
            )}
        </div>
    );
};

export default Select;