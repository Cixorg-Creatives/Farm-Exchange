import { useContext, useEffect, useRef, useState } from "react";
import { UserContext } from "@/App";
import axios from "axios";
import toast, { Toaster } from "react-hot-toast";
import Button from '@/components/Button';
import { Eye, EyeOff, Facebook, Instagram, LockKeyhole, Mail, Twitter, User, Youtube } from 'lucide-react';
import { storeInSession } from "@/common/session";
import generateURL from "@/common/aws";
import { Loader } from "lucide-react";

const profileDataStructure = {
    personal_info: {
        fullname: "",
        username: "",
        profile_img: "",
        bio: "",
    },
    account_info: {
        total_posts: 0,
        total_reads: 0
    },
    social_links: {},
    joinedAt: " "
};

const EditProfile = () => {
    let { userAuth, userAuth: { access_token }, setUserAuth } = useContext(UserContext);
    const [profile, setProfile] = useState(profileDataStructure);
    const [loading, setLoading] = useState(true);
    const [updatedProfileImg, setUpdatedProfileImg] = useState(null);
    const [showPassword, setShowPassword] = useState(false);
    const [showNewPassword, setShowNewPassword] = useState(false);
    let profileImgEle = useRef();
    let changePasswordForm = useRef();
    let passwordRegex = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{6,20}$/;

    useEffect(() => {
        if (access_token) {
            axios.post(import.meta.env.VITE_SERVER_DOMAIN + "/get-profile", { username: userAuth.username })
                .then(({ data }) => {
                    setProfile(data);
                    setLoading(false);
                })
                .catch(err => console.log(err));
        }
    }, [access_token]);

    const handleImagePreview = (e) => {
        let img = e.target.files[0];
        profileImgEle.current.src = URL.createObjectURL(img);
        setUpdatedProfileImg(img);
    };

    const handleImageUpload = () => {
        if (updatedProfileImg) {
            generateURL(updatedProfileImg)
                .then(url => {
                    if (url) {
                        axios.post(import.meta.env.VITE_SERVER_DOMAIN + "/update-profile-img", { url }, {
                            headers: { 'Authorization': `Bearer ${access_token}` }
                        })
                            .then(({ data }) => {
                                let newUserAuth = { ...userAuth, profile_img: data.profile_img };
                                storeInSession("user", JSON.stringify(newUserAuth));
                                setUserAuth(newUserAuth);
                                setUpdatedProfileImg(null);
                                toast.success("Uploaded 👍");
                            })
                            .catch(({ response }) => toast.error(response.data.error));
                    }
                })
                .catch(err => console.log(err));
        }
    };

    const handleSubmitPassword = (e) => {
        e.preventDefault();
        let form = new FormData(changePasswordForm.current);
        let formData = {};
        for (let [key, value] of form.entries()) {
            formData[key] = value;
        }

        let { currentPassword, newPassword } = formData;
        if (!currentPassword.length || !newPassword.length) {
            return toast.error("Fill all the inputs");
        }
        if (!passwordRegex.test(currentPassword) || !passwordRegex.test(newPassword)) {
            return toast.error("Password should be 6 to 20 characters long with a numeric, 1 lowercase, 1 uppercase letter");
        }

        let loadingToast = toast.loading("Updating...");
        axios.post(import.meta.env.VITE_SERVER_DOMAIN + "/change-password", formData, {
            headers: { 'Authorization': `Bearer ${access_token}` }
        })
            .then(() => {
                toast.dismiss(loadingToast);
                return toast.success("Password Updated");
            })
            .catch(({ response }) => {
                toast.dismiss(loadingToast);
                return toast.error(response.data.error);
            });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        let { bio, youtube, facebook, twitter, github, instagram, website } = profile.social_links;
        axios.post(import.meta.env.VITE_SERVER_DOMAIN + "/update-profile", {
            bio,
            social_links: { youtube, facebook, twitter, github, instagram, website }
        }, {
            headers: { 'Authorization': `Bearer ${access_token}` }
        })
            .then(() => toast.success("Profile Updated"))
            .catch(({ response }) => toast.error(response.data.error));
    };

    return (
        <div className='px-5 md:px-8 xl:px-12'>
            <Toaster />
            {loading ? <Loader /> : (
                <div>
                    <div className='w-full md:h-24 bg-[#D9E1C3] flex flex-col md:flex-row items-center justify-between boska py-3 md:py-0 px-2 md:px-4 lg:px-8 rounded-sm md:rounded-md lg:rounded-lg gap-3 md:gap-6 lg:gap-0'>
                        <h1 className="boska w-full uppercase text-black font-semibold text-base md:text-lg lg:text-[2rem] text-start align-middle">
                            Edit Profile
                        </h1>
                    </div>
                    <div className='flex flex-col gap-2 md:gap-4 lg:gap-6 items-center my-6'>
                        <div className='flex flex-col items-center gap-3'>
                            <label htmlFor="uploadImg" className="relative block w-2/5 h-auto aspect-square bg-[#f3f3f3] rounded-full overflow-hidden">
                                <div className="w-full h-full absolute top-0 left-0 flex items-center justify-center text-[#e0e0e0] font-bold text-lg opacity-0 hover:opacity-100 hover:backdrop-blur-md cursor-pointer">Upload Image</div>
                                <img ref={profileImgEle} src={profile.personal_info.profile_img} alt="Profile" className='w-full h-auto rounded-full' />
                            </label>
                            <input id="uploadImg" type="file" accept=".jpeg, .png, .jpg" hidden onChange={handleImagePreview} />
                            <Button title='Upload' variant='ternary' onClick={handleImageUpload} />
                        </div>
                        <div className="md:w-4/5 flex flex-col gap-1 md:gap-2 lg:gap-3">
                            <h1 className="w-full text-[#31511E] font-semibold text-lg">Admin Info</h1>
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-2 md:gap-4 lg:gap-6">
                                <div className='col-span-1 flex items-center gap-3 bg-[#C7D3A6] p-4 rounded-md'>
                                    <User className="h-6 w-auto text-black" />
                                    <input className="w-full bg-transparent outline-none" placeholder="Full Name" value={profile.personal_info.fullname} disabled />
                                </div>
                                <div className='col-span-1 flex items-center gap-3 bg-[#C7D3A6] p-4 rounded-md'>
                                    <Mail className="h-6 w-auto text-black" />
                                    <input className="w-full bg-transparent outline-none" placeholder="Email" value={profile.personal_info.email} disabled />
                                </div>
                            </div>
                        </div>
                        <div className="md:w-4/5 flex flex-col gap-1 md:gap-2 lg:gap-3">
                            <h1 className="w-full text-[#31511E] font-semibold text-lg">Change Password</h1>
                            <form ref={changePasswordForm} onSubmit={handleSubmitPassword} className="w-full flex flex-col gap-4" >
                                <div className="grid grid-cols-1 md:grid-cols-2 gap-2 md:gap-4 lg:gap-6">
                                    <div className='col-span-1 bg-[#C7D3A6] p-4 rounded-md flex items-center gap-3'>
                                        <LockKeyhole className="h-6 w-auto text-black" />
                                        <input type={showPassword ? "text" : "password"} name="currentPassword" required className="w-full bg-transparent outline-none" placeholder="Current Password" />
                                        <button type="button" onClick={() => setShowPassword(!showPassword)}>
                                            {showPassword ? <EyeOff className="h-6 w-auto text-black" /> : <Eye className="h-6 w-auto text-black" />}
                                        </button>
                                    </div>
                                    <div className='col-span-1 bg-[#C7D3A6] p-4 rounded-md flex items-center gap-3'>
                                        <LockKeyhole className="h-6 w-auto text-black" />
                                        <input type={showNewPassword ? "text" : "password"} name="newPassword" required className="w-full bg-transparent outline-none" placeholder="New Password" />
                                        <button type="button" onClick={() => setShowNewPassword(!showNewPassword)}>
                                            {showNewPassword ? <EyeOff className="h-6 w-auto text-black" /> : <Eye className="h-6 w-auto text-black" />}
                                        </button>
                                    </div>
                                </div>
                                <Button type='submit' title='Submit' variant='ternary' className="w-fit" />
                            </form>
                        </div>
                        {/* <h1 className="w-full text-[#31511E] font-semibold text-lg">Add your social handles below</h1>
                            {[Youtube, Instagram, Facebook, Twitter].map((Icon, index) => (
                                <div key={index} className='w-full md:w-[24rem] bg-[#C7D3A6] p-4 rounded-md'>
                                    <div className='flex items-center gap-3'>
                                        <Icon className="h-6 w-auto text-black" />
                                        <input className="w-full bg-transparent outline-none" placeholder="https://" />
                                    </div>
                                </div>
                            ))}
                            <Button title='Update' variant='ternary' onClick={handleSubmit} /> */}
                    </div>
                </div>
            )}
        </div>
    );
};

export default EditProfile;