import { ArrowUpRight, Edit2, Trash2, X, Calendar, Loader2 } from 'lucide-react';
import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const Button = ({ title, icon, variant = 'default', className = '', symbol, loading }) => {
    const variants = {
        default: '',
        primary: 'bg-[#859F3E]',
        secondary: 'bg-[#31511E]',
        ternary: 'bg-[#073D2C]',
        destructive: 'bg-red-700',
    };

    const symbolClass = 'w-4 md:w-5 lg:w-6 h-auto duration-300 ease-in';

    const iconMap = {
        edit: <Edit2 className={symbolClass} />,
        delete: <Trash2 className={symbolClass} />,
        visit: <Calendar className={symbolClass} />,
        default: <ArrowUpRight className={`group-active:rotate-45 ${symbolClass}`} />,
        close: <X className={`group-active:rotate-45 ${symbolClass}`} />,
    };

    return (
        <button
            className={`capitalize cursor-pointer clashdisplay group flex items-center justify-center gap-0.5 md:gap-1 lg:gap-1.5 text-white font-semibold text-base md:text-lg lg:text-2xl py-1 md:py-2 lg:py-3 px-2 md:px-4 lg:px-6 rounded-sm md:rounded-md lg:rounded-lg active:scale-75 duration-300 ease-in-out ${variants[variant] || variants.default} ${className}`}
            disabled={loading}
        >
            {title}
            <AnimatePresence mode="wait">
                {loading ? (
                    <motion.div
                        key="loader"
                        initial={{ opacity: 0, scale: 0.8 }}
                        animate={{ opacity: 1, scale: 1 }}
                        exit={{ opacity: 0, scale: 0.8 }}
                        transition={{ duration: 0.3 }}
                    >
                        <Loader2 className="animate-spin w-4 md:w-5 lg:w-6 h-auto" />
                    </motion.div>
                ) : (
                    <motion.div
                        key="icon"
                        initial={{ opacity: 0, scale: 0.8 }}
                        animate={{ opacity: 1, scale: 1 }}
                        exit={{ opacity: 0, scale: 0.8 }}
                        transition={{ duration: 0.1 }}
                    >
                        {iconMap[symbol] || iconMap.default}
                    </motion.div>
                )}
            </AnimatePresence>
        </button>
    );
};

export default Button;
