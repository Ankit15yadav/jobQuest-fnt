import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import logo from "../../assets/logo/logo_bgi.png";
import { Link } from 'react-router-dom';
import OTPInput from 'react-otp-input';
import { IoArrowBackOutline } from "react-icons/io5";
import { HiOutlineArrowPathRoundedSquare } from "react-icons/hi2";
import { sendOtp, signup } from '../../services/operations/authAPI';

const VerifyEmail = () => {
    const [otp, setOtp] = useState("");
    const { loading, signupData } = useSelector((state) => state.auth);
    const dispatch = useDispatch();
    const navigate = useNavigate();

    // Redirect to signup page if signupData is missing
    useEffect(() => {
        if (!signupData) {
            navigate("/signup");
        }
    }, [signupData, navigate]);

    const handleOnSubmit = (e) => {
        e.preventDefault();

        const role = signupData.accountType;
        const {
            firstName,
            lastName,
            email,
            password,
            confirmPassword,
        } = signupData;

        dispatch(signup(
            role,
            firstName,
            lastName,
            email,
            password,
            confirmPassword,
            otp,
            navigate
        ));
    }

    return (
        <div className='w-full h-full flex items-center justify-center px-4 py-6 md:px-0'>
            {loading ? (
                <div className='flex justify-center items-center h-screen'>
                    {/* You can add a loading spinner or animation here */}
                    <p>Loading...</p>
                </div>
            ) : (
                <div className='w-full max-w-md md:max-w-lg lg:max-w-xl bg-white flex flex-col items-center mt-4 p-6 md:p-8 lg:p-10 rounded-2xl shadow-md'>
                    <img src={logo} alt='logo' className='w-34 h-24 mb-4' />
                    <p className='text-lg md:text-xl font-semibold text-center'>Please check your email</p>
                    <p className='text-center mb-4'>We've sent a code to <span className='text-blue-400'>{signupData.email}</span></p>
                    <form onSubmit={handleOnSubmit} className='w-full'>
                        <div className='flex justify-center mb-4'>
                            <OTPInput
                                value={otp}
                                onChange={setOtp}
                                numInputs={6}
                                renderInput={(props) => (
                                    <input
                                        {...props}
                                        placeholder='-'
                                        style={{
                                            boxShadow: "inset 0px -1px 0px rgba(255, 255, 255, 0.18)"
                                        }}
                                        className="w-[40px] sm:w-[48px] lg:w-[60px] h-[40px] sm:h-[48px] lg:h-[60px] border-0 rounded-md bg-sky-50 text-center focus:border-0 focus:outline-none focus:ring-2 focus:ring-yellow-300"
                                    />
                                )}
                                containerStyle={{
                                    justifyContent: "center",
                                    gap: "0.5rem"
                                }}
                            />
                        </div>
                        <button type='submit' className='w-full bg-sky-400 text-white font-semibold py-2 px-4 rounded-xl hover:bg-sky-500 transition duration-300'>
                            Verify Email
                        </button>
                        <div className='flex justify-between mt-4'>
                            <button
                                onClick={() => navigate("/login")}
                                className='text-sm text-blue-400 flex items-center gap-1 hover:text-blue-500 transition duration-300'>
                                <IoArrowBackOutline />
                                Back to login
                            </button>
                            <button
                                onClick={() => dispatch(sendOtp(signupData.email))}
                                className='text-sm text-pink-500 flex items-center gap-1 hover:text-pink-600 transition duration-300'>
                                <HiOutlineArrowPathRoundedSquare />
                                Resend OTP
                            </button>
                        </div>
                    </form>
                </div>
            )}
        </div>
    )
}

export default VerifyEmail;
