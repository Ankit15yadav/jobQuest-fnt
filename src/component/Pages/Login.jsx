import React, { useState } from 'react'
import loginImg from "../../assets/logo/job-portal-1.jpg"
import logo from "../../assets/logo/logo_bgi.png"
import { Link, useNavigate } from 'react-router-dom'
import { useDispatch } from 'react-redux'
import { GoogleLogin, GoogleOAuthProvider } from '@react-oauth/google'
import { login } from "../../services/operations/authAPI"

const Login = () => {
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const [formData, setFormData] = useState({
        email: "",
        password: "",
    })

    const googleLoginSuccess = (res) => {
        console.log(res);
    }

    const googleLoginFailure = () => {
        console.log("Login failed");
    }

    const { email, password } = formData;

    const handleOnChange = (e) => {
        setFormData((prevData) => ({
            ...prevData,
            [e.target.name]: e.target.value,
        }))
    }

    const handleSubmit = (e) => {
        e.preventDefault()
        console.log(formData);
        dispatch(login(email, password, navigate));
    }

    return (
        <div className='flex flex-col md:flex-row w-full md:w-11/12 mx-auto mt-4 gap-x-10'>
            {/* Left section for image */}
            <div className='w-full md:w-2/5'>
                <img
                    src={loginImg}
                    alt='login page'
                    className='w-full h-full object-cover mt-4 md:mt-20 rounded-xl shadow-md'
                />
            </div>

            {/* Right section for form */}
            <div className='w-full md:w-3/5 flex flex-col'>
                <div className='flex justify-between items-center'>
                    <img src={logo} width={80} height={80} alt='logo' className='mt-4 md:mt-0' />
                    <p className='text-sm flex gap-x-1'>
                        Don't have an account?
                        <Link to="/signup">
                            <span className='text-sky-500'>Sign up</span>
                        </Link>
                    </p>
                </div>

                {/* Description */}
                <div className='flex flex-col items-center justify-center mt-8 md:mt-16'>
                    <p className='text-white text-2xl md:text-3xl font-bold'>Login to JobQuest</p>
                    <p className='mt-2 text-sky-700 text-center'>Now you can apply for your dream job here at JobQuest</p>

                    <GoogleOAuthProvider clientId='941938351661-lgi608344tc4p11b0bgjlb70ddsjqhm2.apps.googleusercontent.com'>
                        <div className='w-fit mt-2 p-2 bg-sky-200 rounded-md'>
                            <GoogleLogin
                                onSuccess={googleLoginSuccess}
                                onError={googleLoginFailure}
                            />
                        </div>
                    </GoogleOAuthProvider>

                    <div className='flex items-center justify-center gap-x-4 mt-4'>
                        <div className='border-t border-gray-300 w-1/4'>__________</div>
                        <span className='text-xl font-semibold'>OR</span>
                        <div className='border-t border-gray-300 w-1/4'>__________</div>
                    </div>
                </div>

                {/* Form */}
                <div className='flex flex-col mt-5 justify-center items-center'>
                    <form onSubmit={handleSubmit} className='w-full max-w-md'>
                        <div className='mb-4'>
                            <label className='block text-sm font-medium'>
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
                            <label className='block text-sm font-medium'>
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

                        <button
                            type='submit'
                            className='w-full bg-sky-700 text-white font-medium py-3 mt-4 rounded-md hover:bg-sky-600 transition-colors duration-200'>
                            Login
                        </button>
                    </form>
                </div>
            </div>
        </div>
    )
}

export default Login;
