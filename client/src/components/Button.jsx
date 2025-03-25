import { ArrowUpRight, Edit2, Trash2, X } from 'lucide-react';
import React from 'react';
import { Link } from 'react-router-dom';

const Button = ({ title, icon, variant = 'default', className = '', symbol, link }) => {
    const variants = {
        default: '',
        primary: 'bg-[#859F3E]',
        secondary: 'bg-[#31511E]',
        destructive: 'bg-red-700',
    };

    const symbolClass = 'w-4 md:w-5 lg:w-6 h-auto duration-300 ease-in';

    const iconMap = {
        edit: <Edit2 className={`${symbolClass} ${icon === 'show' ? '' : 'hidden'}`} />,
        delete: <Trash2 className={`${symbolClass} ${icon === 'show' ? '' : 'hidden'}`} />,
        default: <ArrowUpRight className={`group-active:rotate-45 ${symbolClass} ${icon === 'show' ? '' : 'hidden'}`} />,
        close: <X className={`group-active:rotate-45 ${symbolClass} ${icon === 'show' ? '' : 'hidden'}`} />,
    };

    return (
        <button
            className={`cursor-pointer clashdisplay group flex items-center justify-center gap-0.5 md:gap-1 lg:gap-1.5 text-white font-medium text-base md:text-lg lg:text-2xl py-1 md:py-2 lg:py-3 px-2 md:px-4 lg:px-6 rounded-sm md:rounded-md lg:rounded-lg active:scale-75 duration-300 ease-in-out ${variants[variant] || variants.default} ${className}`}>
            {title}
            {iconMap[symbol] || iconMap.default}
        </button>
    );
};

export default Button;
