import React, { useState } from 'react';
import loginImg from "../../assets/logo/job-portal-1.jpg";
import logo from "../../assets/logo/logo_bgi.png";
import { Link, useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { GoogleLogin, GoogleOAuthProvider } from '@react-oauth/google';
import { login } from "../../services/operations/authAPI";
import { motion } from 'framer-motion';

const Login = () => {
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const [formData, setFormData] = useState({
        email: "",
        password: "",
    });

    const googleLoginSuccess = (res) => {
        console.log(res);
    };

    const googleLoginFailure = () => {
        console.log("Login failed");
    };

    const { email, password } = formData;

    const handleOnChange = (e) => {
        setFormData((prevData) => ({
            ...prevData,
            [e.target.name]: e.target.value,
        }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        dispatch(login(email, password, navigate));
    };

    return (
        <div className='flex flex-col md:flex-row w-full md:w-11/12 mx-auto mt-4 gap-x-10'>
            {/* Left section for image */}
            <motion.div
                initial={{ opacity: 0, x: -100 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6 }}
                className='w-full md:w-2/5'
            >
                <img
                    src={loginImg}
                    alt='login page'
                    className='w-full h-full object-cover mt-4 md:mt-20 rounded-xl shadow-md'
                />
            </motion.div>

            {/* Right section for form */}
            <motion.div
                initial={{ opacity: 0, x: 100 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6 }}
                className='w-full md:w-3/5 flex flex-col'
            >
                <div className='flex justify-between items-center'>
                    <img src={logo} width={100} height={100} alt='logo' className='mt-4  text-white md:mt-0' />
                    <p className='text-sm flex gap-x-1 text-white' >
                        Don't have an account?
                        <Link to="/signup">
                            <span className='text-sky-500 hover:text-sky-700 transition-colors duration-200'>
                                Sign up
                            </span>
                        </Link>
                    </p>
                </div>

                {/* Description */}
                <div className='flex flex-col items-center justify-center mt-8 md:mt-16'>
                    <motion.p
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ duration: 0.8 }}
                        className='text-gray-100 text-2xl md:text-3xl font-bold'
                    >
                        Login to JobQuest
                    </motion.p>
                    <motion.p
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ duration: 0.8, delay: 0.3 }}
                        className='mt-2 text-sky-200 text-center'
                    >
                        Now you can apply for your dream job here at JobQuest
                    </motion.p>

                    <motion.div
                        initial={{ scale: 0.8, opacity: 0 }}
                        animate={{ scale: 1, opacity: 1 }}
                        transition={{ duration: 0.5, delay: 0.6 }}
                        className='w-fit mt-4 p-2 bg-sky-300 rounded-md shadow-lg'
                    >
                        <GoogleOAuthProvider clientId='your-client-id'>
                            <GoogleLogin
                                onSuccess={googleLoginSuccess}
                                onError={googleLoginFailure}
                            />
                        </GoogleOAuthProvider>
                    </motion.div>

                    <div className='flex items-center justify-center gap-x-4 mt-4'>
                        <div className='border-t border-gray-300 w-1/4'>__________</div>
                        <span className='text-xl font-semibold text-gray-100'>OR</span>
                        <div className='border-t border-gray-300 w-1/4'>__________</div>
                    </div>
                </div>

                {/* Form */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 1 }}
                    className='flex flex-col mt-5 justify-center items-center'
                >
                    <form onSubmit={handleSubmit} className='w-full max-w-md'>
                        <div className='mb-4'>
                            <label className='block text-sm font-medium text-gray-100'>
                                Email Address <sup className='text-red-600'>*</sup>
                            </label>
                            <input
                                required
                                type='email'
                                name='email'
                                value={email}
                                onChange={handleOnChange}
                                placeholder='Enter Email address'
                                className='w-full rounded-md bg-blue-100 p-3 text-richblack-900 shadow-sm focus:outline-none focus:ring-2 focus:ring-sky-500'
                            />
                        </div>
                        <div className='mb-4'>
                            <label className='block text-sm font-medium text-gray-100'>
                                Password <sup className='text-red-600'>*</sup>
                            </label>
                            <input
                                required
                                type='password'
                                name='password'
                                value={password}
                                onChange={handleOnChange}
                                placeholder='Enter Password'
                                className='w-full rounded-md bg-blue-100 p-3 text-richblack-900 shadow-sm focus:outline-none focus:ring-2 focus:ring-sky-500'
                            />
                        </div>
                        <div
                            onClick={() => navigate("/resetPassword")}
                            className='cursor-pointer text-sky-500 text-sm flex justify-end mt-1'>
                            Forgot password?
                        </div>

                        <motion.button
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                            type='submit'
                            className='w-full bg-sky-700 text-white font-medium py-3 mt-4 rounded-md hover:bg-sky-600 transition-colors duration-200'>
                            Login
                        </motion.button>
                    </form>
                </motion.div>
            </motion.div>
        </div>
    );
};

export default Login;
