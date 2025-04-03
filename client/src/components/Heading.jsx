import React from 'react'

const Heading = ({ children, className }) => {
    return (
        <div className={`boska w-fit font-normal text-[#859F3E] text-base md:text-xl lg:text-[1.75rem] leading-tight uppercase text-left ${className}`}>{children}</div>
    )
}

export default Heading