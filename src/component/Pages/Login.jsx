import React, { useState } from 'react'
import loginImg from "../../assets/logo/job-portal-1.jpg"
import logo from "../../assets/logo/logofull.png"
import { Link, useNavigate } from 'react-router-dom'
import { useDispatch } from 'react-redux'
import { GoogleLogin, GoogleOAuthProvider } from '@react-oauth/google'

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
        // dispatch(login(email, password, navigate));
    }

    return (
        <div className='w-11/12 mx-auto flex mt-4 gap-x-10'>
            {/* left div for image */}
            {/* flex 1 use krne se full image cover hone lagi */}
            <div className='w-[40%]'>
                <img src={loginImg} alt='loginpageimage'
                    className=' w-full h-[100%] object-fill mt-20 shadow-[-15px_15px_20px_skyblue] rounded-xl'
                />
            </div>

            {/* form div */}
            <div className='w-[55%] flex flex-col'>
                <div className='flex justify-between'>
                    <img src={logo} width={80} height={80} />
                    <p className=' text-sm flex gap-x-1'>Don't have an account?
                        <Link to={"/signup"}>
                            <p className=' text-sky-500'>sign up</p>
                        </Link>
                    </p>
                </div>


                {/* description */}
                <div className='flex flex-col items-center justify-center mt-16'>
                    <p className='text-white text-3xl font-semibold'>Login to JobQuest</p>
                    <p className='mt-2 text-sky-700'>Now you can apply for your dream job here in JobQuest</p>

                    <GoogleOAuthProvider clientId='941938351661-lgi608344tc4p11b0bgjlb70ddsjqhm2.apps.googleusercontent.com' >
                        <div className='w-fit mt-2 p-2 bg-sky-200 rounded-md'>
                            <GoogleLogin
                                onSuccess={googleLoginSuccess}
                                onError={googleLoginFailure}
                            />
                        </div>
                    </GoogleOAuthProvider>

                    <div className='flex items-center justify-center gap-x-4'>
                        <div className=''>__________________</div>
                        <span className=' text-xl font-semibold'>OR</span>
                        <div>__________________</div>
                    </div>
                </div>

                {/* form */}
                <div className=' flex flex-col mt-5 justify-center items-center'>
                    <form onSubmit={handleSubmit}>
                        <label className=''>
                            <p>Email Address <sup className=' text-red-600'>*</sup></p>
                            <input
                                required
                                type='text'
                                name='email'
                                value={email}
                                onChange={handleOnChange}
                                placeholder='Enter Email address'
                                style={{
                                    boxShadow: "inset 0px -1px 0px rgba(255, 255, 255, 0.18)",
                                }}
                                className='w-[400px] rounded-[0.5rem] bg-blue-100 p-[12px] pr-12 text-richblack-5'
                            />
                        </label>
                        <lablel className="">
                            <p className=' mt-3'>Password <sup className=' text-red-600'>*</sup></p>
                            <input
                                required
                                type='text'
                                name='password'
                                value={password}
                                onChange={handleOnChange}
                                placeholder='Enter Password'
                                style={{
                                    boxShadow: "inset 0px -1px 0px rgba(255, 255, 255, 0.18)"
                                }}
                                className='w-[400px] rounded-[0.5rem] bg-blue-100 p-[12px] pr-12 text-richblack-5'
                            />
                        </lablel>

                        <div
                            onClick={() => navigate("/resetPassword")}
                            className='cursor-pointer text-sky-500 flex justify-end mt-1'>Forgot password?
                        </div>

                        <button type='submit' className='border border-yellow-100 px-10 py-2 w-fit mt-3 rounded-md bg-sky-700 text-white' >
                            Login
                        </button>
                    </form>

                </div>
            </div>

        </div>
    )
}

export default Login
