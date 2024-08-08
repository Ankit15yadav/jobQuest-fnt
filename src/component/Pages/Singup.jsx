import React, { useState } from 'react'
import { ACCOUNT_TYPE } from '../../utils/constants'
import { Link, useNavigate } from 'react-router-dom'
import { useDispatch } from 'react-redux';
import Tab from '../common/Tab';
import toast from 'react-hot-toast';
import { setSignUpData } from '../../slice/authSlice';
import { sendOtp } from '../../services/operations/authAPI';
import signUpimg from "../../assets/logo/job_signUp.jpeg"

const Singup = () => {

    const navigate = useNavigate();
    const dispatch = useDispatch();

    const [accountType, setAccountType] = useState(ACCOUNT_TYPE.JOBSEEKER)

    const [formData, setFormData] = useState({
        firstName: "",
        lastName: "",
        email: "",
        password: "",
        confirmPassword: "",
    })

    const { firstName, lastName, email, password, confirmPassword } = formData;

    const tabData = [
        {
            id: 1,
            tabName: "Employer",
            type: ACCOUNT_TYPE.EMPLOYER,
        },
        {
            id: 2,
            tabName: "JobSeeker",
            type: ACCOUNT_TYPE.JOBSEEKER
        }
    ]


    const handleOnChange = (e) => {
        setFormData((prevData) => ({
            ...prevData,
            [e.target.name]: e.target.value,
        }))
    }

    const handleOnSubmit = (e) => {
        e.preventDefault();
        // dispatch signup krna hai

        if (password !== confirmPassword) {
            toast.error("Passwords do not match");
            return;
        }

        const signupData = {
            ...formData,
            accountType,
        }

        console.log("data", signupData);

        dispatch(setSignUpData(signupData));

        dispatch(sendOtp(formData.email, navigate));

        //reset krdo
        setFormData({
            firstName: "",
            lastName: "",
            email: "",
            password: "",
            confirmPassword: "",
        })
        setAccountType(ACCOUNT_TYPE.JOBSEEKER);
    }

    return (

        <div className='w-11/12 mx-auto flex mt-4 gap-x-10'>
            {/* form */}
            <div className='flex flex-col w-[50%]'>

                <div className='flex items-center justify-center text-3xl text-blue-400 font-bold mb-10'>
                    <p>Create Account</p>
                </div>

                <Tab tabData={tabData} field={accountType} setField={setAccountType} />
                <form className='flex flex-col w-full gap-y-3'
                    onSubmit={handleOnSubmit}
                >
                    <div className='flex gap-x-4 w-full'>
                        <label className='w-[300px]'>
                            <p className='font-medium'>First Name <sup className=' text-red-500'>*</sup></p>
                            <input
                                required
                                type='text'
                                name='firstName'
                                onChange={handleOnChange}
                                value={firstName}
                                placeholder='Enter first name'
                                className='w-full p-2 rounded-xl border border-yellow-200'
                            />
                        </label>
                        <label className='w-[300px]'>
                            <p className='font-medium'>Last Name <sup className=' text-red-500'>*</sup></p>
                            <input
                                required
                                type='text'
                                name='lastName'
                                onChange={handleOnChange}
                                value={lastName}
                                placeholder='Enter Last name'
                                className='w-full p-2 rounded-xl border border-yellow-200'
                            />
                        </label>
                    </div>

                    <label>
                        <p className='font-medium'>Email <sup className=' text-red-500'>*</sup></p>
                        <input
                            required
                            type='text'
                            name='email'
                            onChange={handleOnChange}
                            value={email}
                            placeholder='Enter your E-mail'
                            className='w-[70%] p-2 rounded-xl border border-yellow-200'
                        />
                    </label>

                    <label>
                        <p className='font-medium'>Password <sup className=' text-red-500'>*</sup></p>
                        <input
                            required
                            type='text'
                            name='password'
                            onChange={handleOnChange}
                            value={password}
                            placeholder='Enter Password'
                            className='w-[70%] p-2 rounded-xl border border-yellow-200'
                        />
                    </label>

                    <label>
                        <p className='font-medium'>Confirm Password <sup className=' text-red-500'>*</sup></p>
                        <input
                            required
                            type='text'
                            name='confirmPassword'
                            onChange={handleOnChange}
                            value={confirmPassword}
                            placeholder='Confrim Your Password'
                            className='w-[70%] p-2 rounded-xl border border-yellow-200'
                        />
                    </label>

                    <div className=''>
                        <button type='submit' className='border border-yellow-200 flex w-fit rounded-xl px-4 py-2 mt-2 mb-2 bg-sky-700 text-white '>
                            Sign Up
                        </button>
                    </div>

                </form>

                <div className=' text-[15px] flex justify-center gap-x-1'>
                    Already have an Account? {" "}<Link to={"/login"}
                        className=' text-sky-600 font-medium'
                    >
                        Log in
                    </Link>
                </div>

            </div>


            {/* image */}
            <div className='w-[40%] flex items-center justify-center'>
                <img src={signUpimg} />
            </div>
        </div>
    )
}

export default Singup
