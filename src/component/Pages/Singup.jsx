import React, { useState } from 'react'
import { ACCOUNT_TYPE } from '../../utils/constants'
import { useNavigate } from 'react-router-dom'
import { useDispatch } from 'react-redux';
import Tab from '../common/Tab';
import toast from 'react-hot-toast';
import { setSignUpData } from '../../slice/authSlice';
import { sendOtp } from '../../services/operations/authAPI';

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
            <div className='flex flex-col'>
                <Tab tabData={tabData} field={accountType} setField={setAccountType} />
                <form className='flex flex-col'
                    onSubmit={handleOnSubmit}
                >
                    <div className='flex gap-x-4'>
                        <label>
                            <p>First Name <sup>*</sup></p>
                            <input
                                required
                                type='text'
                                name='firstName'
                                onChange={handleOnChange}
                                value={firstName}
                                placeholder='Enter first name'
                            />
                        </label>
                        <label>
                            <p>Last Name <sup>*</sup></p>
                            <input
                                required
                                type='text'
                                name='lastName'
                                onChange={handleOnChange}
                                value={lastName}
                                placeholder='Enter Last name'
                            />
                        </label>
                    </div>

                    <label>
                        <p>Email <sup>*</sup></p>
                        <input
                            required
                            type='text'
                            name='email'
                            onChange={handleOnChange}
                            value={email}
                            placeholder='Enter your E-mail'
                        />
                    </label>

                    <label>
                        <p>Password <sup>*</sup></p>
                        <input
                            required
                            type='text'
                            name='password'
                            onChange={handleOnChange}
                            value={password}
                            placeholder='Enter Password'
                        />
                    </label>

                    <label>
                        <p>Confirm Password <sup>*</sup></p>
                        <input
                            required
                            type='text'
                            name='confirmPassword'
                            onChange={handleOnChange}
                            value={confirmPassword}
                            placeholder='Confrim Your Password'
                        />
                    </label>

                    <button type='submit' className='border border-yellow-200 w-fit px-4 py-2 mt-2 rounded-md bg-sky-700 text-white'>
                        Sign Up
                    </button>
                </form>
            </div>

            {/* image */}
            <div>

            </div>
        </div>
    )
}

export default Singup
