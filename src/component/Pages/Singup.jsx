import React, { useState } from "react";
import { ACCOUNT_TYPE } from "../../utils/constants";
import { Link, useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import Tab from "../common/Tab";
import toast from "react-hot-toast";
import { setSignUpData } from "../../slice/authSlice";
import { sendOtp } from "../../services/operations/authAPI";
import signUpimg from "../../assets/logo/job_signUp.jpeg";
import { motion } from "framer-motion";

const Signup = () => {
    const navigate = useNavigate();
    const dispatch = useDispatch();

    const [accountType, setAccountType] = useState(ACCOUNT_TYPE.JOBSEEKER);

    const [formData, setFormData] = useState({
        firstName: "",
        lastName: "",
        email: "",
        password: "",
        confirmPassword: "",
    });

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
            type: ACCOUNT_TYPE.JOBSEEKER,
        },
    ];

    const handleOnChange = (e) => {
        setFormData((prevData) => ({
            ...prevData,
            [e.target.name]: e.target.value,
        }));
    };

    const handleOnSubmit = (e) => {
        e.preventDefault();

        if (password !== confirmPassword) {
            toast.error("Passwords do not match");
            return;
        }

        const signupData = {
            ...formData,
            accountType,
        };

        dispatch(setSignUpData(signupData));
        dispatch(sendOtp(formData.email, navigate));

        setFormData({
            firstName: "",
            lastName: "",
            email: "",
            password: "",
            confirmPassword: "",
        });
        setAccountType(ACCOUNT_TYPE.JOBSEEKER);
    };

    return (
        <div className="w-11/12 mx-auto flex flex-col-reverse md:flex-row mt-4 gap-y-6 md:gap-x-10">
            {/* Form Section */}
            <motion.div
                initial={{ opacity: 0, x: -100 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6 }}
                className="flex flex-col w-full md:w-1/2 p-4"
            >
                <div className="flex items-center justify-center text-3xl text-blue-400 font-bold mb-10">
                    <p>Create Account</p>
                </div>

                <Tab tabData={tabData} field={accountType} setField={setAccountType} />
                <form className="flex flex-col w-full gap-y-3" onSubmit={handleOnSubmit}>
                    <div className="flex flex-col md:flex-row gap-y-4 md:gap-x-4 w-full">
                        <label className="w-full md:w-[300px]">
                            <p className="font-medium text-gray-200">
                                First Name <sup className="text-red-500">*</sup>
                            </p>
                            <input
                                required
                                type="text"
                                name="firstName"
                                onChange={handleOnChange}
                                value={firstName}
                                placeholder="Enter first name"
                                className="w-full p-2 rounded-xl bg-blue-100 text-gray-900 border border-yellow-200 focus:ring-2 focus:ring-sky-500"
                            />
                        </label>
                        <label className="w-full md:w-[300px]">
                            <p className="font-medium text-gray-200">
                                Last Name <sup className="text-red-500">*</sup>
                            </p>
                            <input
                                required
                                type="text"
                                name="lastName"
                                onChange={handleOnChange}
                                value={lastName}
                                placeholder="Enter last name"
                                className="w-full p-2 rounded-xl bg-blue-100 text-gray-900 border border-yellow-200 focus:ring-2 focus:ring-sky-500"
                            />
                        </label>
                    </div>

                    <label>
                        <p className="font-medium text-gray-200">
                            Email <sup className="text-red-500">*</sup>
                        </p>
                        <input
                            required
                            type="text"
                            name="email"
                            onChange={handleOnChange}
                            value={email}
                            placeholder="Enter your E-mail"
                            className="w-full md:w-[70%] p-2 rounded-xl bg-blue-100 text-gray-900 border border-yellow-200 focus:ring-2 focus:ring-sky-500"
                        />
                    </label>

                    <label>
                        <p className="font-medium text-gray-200">
                            Password <sup className="text-red-500">*</sup>
                        </p>
                        <input
                            required
                            type="text"
                            name="password"
                            onChange={handleOnChange}
                            value={password}
                            placeholder="Enter Password"
                            className="w-full md:w-[70%] p-2 rounded-xl bg-blue-100 text-gray-900 border border-yellow-200 focus:ring-2 focus:ring-sky-500"
                        />
                    </label>

                    <label>
                        <p className="font-medium text-gray-200">
                            Confirm Password <sup className="text-red-500">*</sup>
                        </p>
                        <input
                            required
                            type="text"
                            name="confirmPassword"
                            onChange={handleOnChange}
                            value={confirmPassword}
                            placeholder="Confirm Your Password"
                            className="w-full md:w-[70%] p-2 rounded-xl bg-blue-100 text-gray-900 border border-yellow-200 focus:ring-2 focus:ring-sky-500"
                        />
                    </label>

                    <motion.div
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                        className="mt-4"
                    >
                        <button
                            type="submit"
                            className="w-full md:w-[70%] bg-sky-700 text-white font-medium py-3 rounded-md hover:bg-sky-600 transition-colors duration-200"
                        >
                            Sign Up
                        </button>
                    </motion.div>
                </form>

                <div className="text-[15px] flex justify-center text-white gap-x-1 mt-4">
                    Already have an Account?{" "}
                    <Link to={"/login"} className="text-sky-600 font-medium hover:text-sky-800 transition-colors duration-200">
                        Log in
                    </Link>
                </div>
            </motion.div>

            {/* Image Section */}
            <motion.div
                initial={{ opacity: 0, x: 100 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6 }}
                className="w-full md:w-[40%] flex items-center justify-center"
            >
                <img src={signUpimg} className="w-full h-auto rounded-xl shadow-lg" alt="Signup" />
            </motion.div>
        </div>
    );
};

export default Signup;
