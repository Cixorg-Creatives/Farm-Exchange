import React, { useContext } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { LogOut } from 'lucide-react';
import { assets } from '@/assets/assets';
import { UserContext } from '../App';

const Navbar = () => {
    const navigate = useNavigate();
    const { setUserAuth } = useContext(UserContext);

    const handleLogout = () => {
        sessionStorage.removeItem('user');
        setUserAuth({ access_token: null });
        navigate('/');
    };

    return (
        <div className='flex items-center justify-between mt-3 py-1 px-7 md:mt-5 md:py-2 md:px-28 w-full h-fit bg-[#073D2C] clashdisplay'>
            <Link to={`/`} className='w-fit flex items-center justify-center gap-2 md:gap-3 lg:gap-4'>
                <img src={assets.logo} alt="" className='h-[57.6px] w-[54px] sm:h-[76.8px] sm:w-[71.91px]' />
                <h1 className='text-lg md:text-2xl lg:text-3xl text-[#747474]/60 font-semibold uppercase text-start leading-tight'>Admin <br /> panel</h1>
            </Link>
            <button onClick={handleLogout} className='bg-[#c7d3a7] border border-[#85a03f] px-5 py-2 sm:px-7 sm:py-2 rounded-full text-xs md:text-base lg:text-xl text-[#505050] font-medium flex gap-2 items-center justify-between'>
                Logout <LogOut className='h-3 md:h-4 lg:h-5 w-auto' />
            </button>
        </div>
    );
};

export default Navbar;
