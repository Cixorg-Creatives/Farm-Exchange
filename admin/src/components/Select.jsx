import { useState } from "react";
import { ArrowDown, ArrowUp, Check, ChevronDown, ChevronUp } from "lucide-react";

const Select = ({ options, onSelect, selectedOption }) => {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <div className="relative w-[15rem] md:w-fit clashdisplay">
            <button
                className="w-[15rem] flex items-center justify-between bg-[#C7D3A6] capitalize text-sm md:text-base lg:text-xl font-normal px-6 py-3 md:py-4 rounded-md lg:rounded-lg cursor-pointer"
                onClick={() => setIsOpen(!isOpen)}
            >
                <span className="flex items-center">
                    {selectedOption.includes("latest") || selectedOption.includes("low-high") ? (
                        <ArrowUp className="h-4 md:h-5 lg:h-6 w-auto text-black" />
                    ) : (
                        <ArrowDown className="h-4 md:h-5 lg:h-6 w-auto text-black" />
                    )}
                    {options.find(option => option.value === selectedOption)?.label}
                </span>
                {isOpen ? <ChevronUp className="h-4 md:h-6 w-auto text-black" /> : <ChevronDown className="h-4 md:h-6 w-auto text-black" />}
            </button>
            {isOpen && (
                <div className="absolute left-0 mt-2 w-[15rem] bg-[#C7D3A6] rounded-md shadow-lg z-10">
                    {options.map((option) => (
                        <div
                            key={option.value}
                            className={`flex items-center justify-between px-6 py-3 hover:bg-[#B8C597] cursor-pointer ${selectedOption === option.value ? "font-semibold" : ""
                                }`}
                            onClick={() => {
                                onSelect(option.value);
                                setIsOpen(false);
                            }}
                        >
                            <span className="flex items-center gap-2">
                                {option.value.includes("latest") || option.value.includes("low-high") ? (
                                    <ArrowUp className="h-4 md:h-6 w-auto text-black" />
                                ) : (
                                    <ArrowDown className="h-4 md:h-6 w-auto text-black" />
                                )}
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
