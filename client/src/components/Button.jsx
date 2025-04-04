import { ArrowUpRight, Check, Edit2, Plus, Trash2, X, Loader2 } from 'lucide-react';
import React from 'react';
import { Link } from 'react-router-dom';

const Button = ({ title, icon, variant = 'default', className = '', symbol, link, onClick, type, loading }) => {
    const variants = {
        default: 'hover:underline',
        primary: 'bg-[#859F3E] hover:bg-[#31511E]',  
        secondary: 'bg-[#31511E] hover:bg-[#859F3E]', 
        ternary: 'bg-[#073D2C] hover:bg-[#c7d3a7] hover:text-black', 
        destructive: 'bg-red-700 hover:bg-red-400',
        outline: 'border border-[#31511E] hover:border-[#859F3E]',
    };

    const symbolClass = 'w-4 md:w-5 lg:w-6 h-auto duration-300 ease-in';

    const iconMap = {
        edit: <Edit2 className={`${symbolClass} ${icon === 'show' ? '' : 'hidden'}`} />,
        delete: <Trash2 className={`${symbolClass} ${icon === 'show' ? '' : 'hidden'}`} />,
        add: <Plus className={`${symbolClass} ${icon === 'show' ? '' : 'hidden'}`} />,
        default: <ArrowUpRight className={`group-active:rotate-45 ${symbolClass} ${icon === 'show' ? '' : 'hidden'}`} />,
        close: <X className={`group-active:rotate-45 ${symbolClass} ${icon === 'show' ? '' : 'hidden'}`} />,
        check: <Check className={`group-active:rotate-45 ${symbolClass} ${icon === 'show' ? '' : 'hidden'}`} />,
        loader: <Loader2 className={`${symbolClass} animate-spin`} />,
    };

    const buttonClasses = `capitalize cursor-pointer clashdisplay group flex items-center justify-center gap-0.5 md:gap-1 lg:gap-1.5 text-white font-normal text-base md:text-lg lg:text-2xl py-1 md:py-2 lg:py-3 px-2 md:px-4 lg:px-6 rounded-sm md:rounded-md lg:rounded-lg active:scale-75 duration-300 ease-in-out ${variants[variant] || variants.default} ${className}`;

    if (link) {
        return (
            <Link to={link} className={buttonClasses}>
                {title}
                {loading ? iconMap.loader : iconMap[symbol] || iconMap.default}
            </Link>
        );
    }

    return (
        <button className={buttonClasses} onClick={onClick} type={type} disabled={loading}>
            {title}
            {loading ? iconMap.loader : iconMap[symbol] || iconMap.default}
        </button>
    );
};

export default Button;