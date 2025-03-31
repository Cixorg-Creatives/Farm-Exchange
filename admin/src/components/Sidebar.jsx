import React, { useContext, useEffect, useState } from 'react';
import { Link, NavLink } from 'react-router-dom';
import { UserContext } from '@/App';
import { BookOpen, Home, LayoutDashboard, Mail, Podcast } from 'lucide-react';
import { profileDataStructure } from '@/pages/EditProfile';
import axios from 'axios';

const data = [
    { link: '/', title: "Dashboard", component: <LayoutDashboard size={24} /> },
    { link: '/properties', title: "Properties", component: <Home size={24} /> },
    { link: '/blogs', title: "Blogs", component: <BookOpen size={24} /> },
    { link: '/contact', title: "Messages", component: <Mail size={24} /> },
    { link: '/post-property-request', title: "Request", component: <Podcast size={24} /> },
];

const Sidebar = () => {

    const { userAuth, userAuth: { access_token }, setUserAuth } = useContext(UserContext);
    const [profile, setProfile] = useState(profileDataStructure);
    const [loading, setLoading] = useState(true);

    const fetchProfile = async () => {
        try {
            setLoading(true);
            const { data } = await axios.post(import.meta.env.VITE_SERVER_DOMAIN + "/get-profile", { username: userAuth.username });
            setProfile(data);
        } catch (err) {
            console.error("Error fetching profile:", err);
        } finally {
            setLoading(false);
        }
    };

    useEffect(() => {
        fetchProfile()
        if (access_token) fetchProfile();
    }, [access_token]);

    return (
        <div className='fixed bottom-0 left-0 w-[18%] h-[90vh] md:h-[85vh] border-r border-[#c7d3a7]'>
            <div className='h-full flex flex-col justify-between clashdisplay'>
                <div className='flex flex-col gap-4 pt-6 pl-[20%] text-[15px]'>
                    {data.map((item, index) => (
                        <NavLink
                            to={item.link}
                            key={index}
                            className='flex items-center gap-3 border border-[#c7d3a7] border-r-0 px-3 py-2 rounded-lg text-gray-800'
                        >
                            {item.component}
                            <p className='boska text-base font-semibold hidden md:block'>{item.title}</p>
                        </NavLink>
                    ))}
                </div>
                <div className='flex item-center justify-center'>
                    {
                        loading ? (
                            <Skeleton />
                        ) : (
                            <Link to={'/profile'} className='h-fit flex items-center justify-center lg
                    lg:justify-between lg:bg-[#c7d3a7] lg:border lg:border-[#85a03f] p-0 lg:p-3 lg:m-3 rounded-full'>
                                <img
                                    src={profile.personal_info.profile_img}
                                    alt="Profile"
                                    className='w-3/5 lg:w-1/4 h-auto aspect-square rounded-full'
                                />
                                <div className='hidden lg:block'>
                                    <div className='flex flex-col'>
                                        <p className='impact capitalize font-medium text-2xl text-gray-800'> {profile.personal_info.fullname}</p>
                                        <p className='text-sm font-normal text-[#505050]'>{profile.personal_info.email}</p>
                                    </div>
                                </div>
                            </Link>
                        )
                    }
                </div>
            </div>
        </div>
    );
}

export default Sidebar;

const Skeleton = () => {
    return (
        <div className='h-fit flex items-center justify-center lg:justify-between lg:border lg:border-[#85a03f] p-0 lg:p-3 lg:m-3 rounded-full animate-pulse'>
            <div className='w-3/5 lg:w-1/4 h-auto aspect-square rounded-full bg-[#c7d3a7]'></div>
            <div className='hidden lg:block'>
                <div className='flex flex-col'>
                    <div className='h-6 w-32 bg-[#c7d3a7] rounded-md mb-2'></div>
                    <div className='h-4 w-48 bg-[#c7d3a7] rounded-md'></div>
                </div>
            </div>
        </div>
    )
}
