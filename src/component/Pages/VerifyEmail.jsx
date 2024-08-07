import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom';
import logo from "../../assets/logo/logo_bgi.png"
import { Link } from 'react-router-dom';
import OTPInput from 'react-otp-input';
import { IoArrowBackOutline } from "react-icons/io5";
import { HiOutlineArrowPathRoundedSquare } from "react-icons/hi2";
import { sendOtp } from '../../services/operations/authAPI';
import { signup } from "../../services/operations/authAPI"



const VerifyEmail = () => {

    const [otp, setOtp] = useState("");
    const { loading, signupData } = useSelector((state) => state.auth);
    const dispatch = useDispatch();
    const navigate = useNavigate();

    // vapis return kr jao agr signupdata nhi hai toh signup page pr
    useEffect(() => {
        if (!signupData) {
            navigate("/signup");
        }
    }, []);

    const handleOnSubmit = (e) => {
        e.preventDefault();

        const role = signupData.accountType;
        const {
            firstName,
            lastName,
            email,
            password,
            confirmPassword,

        } = signupData

        dispatch(signup(
            role,
            firstName,
            lastName,
            email,
            password,
            confirmPassword,
            otp,
            navigate
        ))
    }

    return (
        <div className='w-11/12 h-full mx-auto flex items-center justify-center'>
            {
                loading ? (
                    <div></div>
                ) :
                    (<div className=' w-[800px] h-[500px] bg-white flex flex-col items-center mt-4 rounded-2xl'>
                        <img src={logo} alt='logo' className='w-34 h-28'></img>
                        <p className=' text-xl  font-semibold'>Please check your email</p>
                        <p>We've sent a code to <span className=' text-blue-400'>
                            {signupData.email} </span> </p>
                        <form onSubmit={handleOnSubmit}>
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
                                        className=" mt-3 w-[48px] lg:w-[60px] border-0 rounded-[0.5rem] bg-sky-50 aspect-square text-center focus:border-0 focus:outline-2 focus:outline-yellow-300"
                                    />
                                )}
                                containerStyle={{
                                    justifyContent: "space-between",
                                    gap: "0 6px"
                                }}
                            />

                            <button type='submit' className=' bg-sky-300 w-full px-3 py-2 mt-4 rounded-xl'>
                                Verify Email
                            </button>

                            <div className='flex justify-between'>

                                <button
                                    onClick={() => navigate("/login")}
                                    className=' text-sm text-blue-400 flex items-center justify-center gap-1'>
                                    <IoArrowBackOutline />
                                    Back to login
                                </button>

                                <button
                                    onClick={() => dispatch(sendOtp(signupData.email))}
                                    className=' text-sm text-pink-500 flex items-center justify-center gap-1'>
                                    <HiOutlineArrowPathRoundedSquare />
                                    Resend OTP
                                </button>

                            </div>
                        </form>

                    </div>)}
        </div>
    )
}

export default VerifyEmail
