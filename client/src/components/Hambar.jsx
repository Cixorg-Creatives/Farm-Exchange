"use client";
import React, { useState, useEffect } from "react";
import { assets } from "@/assets/assets";
import { NavLink } from "react-router-dom";
import { X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

const Hambar = ({ closeMenuTrigger }) => {
    const [open, setOpen] = useState(false);

    useEffect(() => {
        if (closeMenuTrigger) setOpen(false);
    }, [closeMenuTrigger]);

    const closeSheet = () => setOpen(false);

    return (
        <div className="lg:hidden">
            <div className="relative">
                <motion.div
                    className="cursor-pointer size-8 flex items-center justify-center"
                    initial={false}
                    animate={{ rotate: open ? 180 : 0, scale: [1, 1.2, 1] }}
                    transition={{ duration: 0.4, ease: "easeInOut" }}
                    onClick={() => setOpen(!open)}
                >
                    <AnimatePresence mode="wait">
                        {open ? (
                            <motion.div
                                key="close"
                                initial={{ opacity: 0, scale: 0.8 }}
                                animate={{ opacity: 1, scale: 1 }}
                                exit={{ opacity: 0, scale: 0.8 }}
                                transition={{ duration: 0.3 }}
                                className="absolute"
                            >
                                <X className="size-10 text-[#859F3E]" />
                            </motion.div>
                        ) : (
                            <motion.img
                                key="menu"
                                src={assets.menu}
                                alt="menu"
                                initial={{ opacity: 0, scale: 0.8 }}
                                animate={{ opacity: 1, scale: 1 }}
                                exit={{ opacity: 0, scale: 0.8 }}
                                transition={{ duration: 0.3 }}
                                className="size-8 absolute"
                            />
                        )}
                    </AnimatePresence>
                </motion.div>
                <AnimatePresence>
                    {open && (
                        <motion.div
                            initial={{ opacity: 0, y: -20 }}
                            animate={{ opacity: 1, y: 0 }}
                            exit={{ opacity: 0, y: -20 }}
                            transition={{ duration: 0.3, ease: "easeInOut" }}
                            className="absolute z-50 top-16 right-0 bg-[#073D2C] w-40 p-4 flex flex-col gap-3 rounded-2xl shadow-lg"
                        >
                            <NavLink onClick={closeSheet} to="/services" className="text-[#859F3E] font-normal text-sm text-center">Our Services</NavLink>
                            <NavLink onClick={closeSheet} to="/journal" className="text-[#859F3E] font-normal text-sm text-center">Farm Journal</NavLink>
                            <NavLink onClick={closeSheet} to="/about" className="text-[#859F3E] font-normal text-sm text-center">About Us</NavLink>
                            <NavLink onClick={closeSheet} to="/contact" className="text-[#859F3E] font-normal text-sm text-center">Contact Us</NavLink>
                        </motion.div>
                    )}
                </AnimatePresence>
            </div>
        </div>
    );
};

export default Hambar;