import React, { useState, useContext } from 'react';
import AuthUi from '../components/AuthUi';
import { LoaderCircle, Eye, EyeOff } from 'lucide-react';
import axios from 'axios';
import { Toaster, toast } from 'react-hot-toast';
import { UserContext } from '../App';
import { storeInSession } from '../common/session';
import { Navigate } from 'react-router-dom';

const Login = ({ setToken }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [loading, setLoading] = useState(false);

  const { userAuth: { access_token }, setUserAuth } = useContext(UserContext);

  const onSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    let emailRegex = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
    let passwordRegex = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{6,20}$/;

    if (!email.length) {
      setLoading(false);
      return toast.error('Enter Email');
    }
    if (!emailRegex.test(email)) {
      setLoading(false);
      return toast.error('Email is invalid');
    }
    if (!passwordRegex.test(password)) {
      setLoading(false);
      return toast.error('Password should be 6 to 20 characters long with a numeric, 1 lowercase, 1 uppercase letter');
    }

    try {
      const { data } = await axios.post(import.meta.env.VITE_SERVER_DOMAIN + '/signin', { email, password });
      storeInSession('user', JSON.stringify(data));
      setUserAuth(data);
      setToken(data.access_token);
    } catch (error) {
      toast.error(error.response?.data?.error || 'Login failed');
    } finally {
      setLoading(false);
    }
  };

  if (access_token) {
    return <Navigate to="/dashboard" />;
  }

  return (
    <AuthUi>
      <Toaster />
      <form onSubmit={onSubmit} className='flex flex-col items-center w-[90%] sm:max-w-[500px] m-auto mt-14 sm:mt-auto gap-4 text-gray-800'>
        <div className='inline-flex items-center gap-2 mt-5'>
          <p className='prata-regular text-3xl'>Admin Login</p>
          <hr className='border-none h-[1.5px] w-8 bg-gray-800' />
        </div>
        <input onChange={(e) => setEmail(e.target.value)} value={email} type="email" className='w-full px-3 py-2 border border-gray-800 rounded-md' placeholder='Email' required />
        <div className='relative w-full'>
          <input 
            onChange={(e) => setPassword(e.target.value)} 
            value={password} 
            type={showPassword ? "text" : "password"} 
            className='w-full px-3 py-2 border border-gray-800 rounded-md pr-10' 
            placeholder='Password' 
            required 
          />
          <button 
            type="button" 
            className='absolute inset-y-0 right-3 flex items-center' 
            onClick={() => setShowPassword(!showPassword)}
          >
            {showPassword ? <EyeOff size={20} /> : <Eye size={20} />}
          </button>
        </div>
        {loading ? (
          <button className='bg-[#85a03f] text-white font-normal text-2xl px-8 py-2 mt-4 w-full rounded-full flex items-center justify-center'>
            <LoaderCircle size={32} className='animate-spin' />
          </button>
        ) : (
          <button className='bg-[#85a03f] text-white font-normal text-2xl px-8 py-2 mt-4 w-full rounded-full'>
            Login
          </button>
        )}
      </form>
    </AuthUi>
  );
};

export default Login;
