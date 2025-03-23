import React from 'react'
import { Link } from 'react-router-dom'
import { assets } from '../assets/assets'
import { motion } from 'framer-motion'

const floatAnimation = {
    hover: {
        rotate: [-10, -5, -10],
        y: [0, 50, 0],
        transition: {
            duration: 2,
            ease: 'easeInOut',
            repeat: Infinity,
        },
    },
}

const AuthUi = ({ children }) => {
    return (
        <div className="flex h-screen bg-[#073D2C] overflow-hidden clashdisplay">
            <section className="hidden w-full items-start justify-center bg-brand lg:flex xl:w-2/5">
                <div className="flex max-h-fit max-w-[430px] flex-col justify-center space-y-12 p-2 m-5 ">
                    <Link to={`/`} className='w-fit flex items-center justify-center gap-2 md:gap-3 lg:gap-4'>
                        <img src={assets.logo} alt="" className='h-[57.6px] w-[54px] md:h-[76.8px] sm:w-[71.91px] lg:h-[100px] lg:w-[120px]' />
                        <h1 className='text-lg md:text-3xl lg:text-4xl text-[#F6FCDF]/60 font-semibold uppercase text-start leading-tight'>Admin <br /> panel</h1>
                    </Link>
                    <div className="space-y-5 text-[#F6FCDF]">
                        <h1 className="text-[34px] leading-[42px] font-bold">Manage Your Platform with Ease</h1>
                        <p className="text-[16px] leading-[24px] font-normal">
                            Streamline your management with ease and precision. Organize, monitor, and elevate your platform operations to deliver luxury and excellence to your customers.
                        </p>
                    </div>
                    <div className='flex flex-col gap-2 infine moving'>
                        <motion.div variants={floatAnimation} animate="hover" className='flex justify-start'><img src={assets.login_1} alt="Files" width={250} height={250} className="rounded-lg" /></motion.div>
                        <motion.div variants={floatAnimation} animate="hover" className='flex justify-end'><img src={assets.login_2} alt="Files" width={250} height={250} className="rounded-lg" /></motion.div>
                    </div>
                </div>
            </section>
            <section className="flex flex-1 flex-col items-center bg-[#F6FCDF] py-5 lg:justify-center lg:py-0">
                <div className="mb-16 md:hidden bg-[#073D2C] flex items-center w-full justify-center">
                    <div className="flex max-h-fit flex-col justify-center space-y-12">
                        <Link to={`/`} className='w-fit flex items-center justify-center gap-2 md:gap-3 lg:gap-4'>
                            <img src={assets.logo} alt="" className='h-[76.8px] w-[71.91px]' />
                            <h1 className='text-3xl text-[#747474]/60 font-semibold uppercase text-start leading-tight'>Admin <br /> panel</h1>
                        </Link>
                    </div>
                </div>
                {children}
            </section>
        </div>
    )
}

export default AuthUi