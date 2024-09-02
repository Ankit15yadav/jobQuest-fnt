import React from 'react';
import { useForm } from 'react-hook-form';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import { createJobforCompany } from '../../services/operations/Jobs';
import { industryData } from '../../data/industry';
import { motion } from 'framer-motion';

const CreateJobs = () => {
    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm();

    const typeofjobs = [
        { id: 1, title: 'FullTime', value: 'opt1' },
        { id: 2, title: 'PartTime', value: 'opt2' },
        { id: 3, title: 'Remote', value: 'opt3' },
        { id: 4, title: 'Internship', value: 'opt4' },
    ];

    const { token } = useSelector((state) => state.auth);
    const dispatch = useDispatch();
    const { companyId } = useParams();

    const onSubmit = async (data) => {
        const formData = new FormData();
        formData.append('title', data.title);
        formData.append('description', data.description);
        formData.append('requirements', data.requirements);
        formData.append('salary', data.salary);
        formData.append('location', data.location);
        formData.append('industry', data.industry);
        formData.append('type', data.type);
        formData.append('companyId', companyId);

        for (const [key, value] of formData.entries()) {
            console.log(key, value);
        }

        const result = await createJobforCompany(formData, token);
        // Handle result if needed
    };

    return (
        <div className="w-11/12 mx-auto min-h-screen flex mt-10 justify-center bg-gradient-to-r from-purple-300 via-blue-200 to-indigo-400 p-8">
            <motion.form
                onSubmit={handleSubmit(onSubmit)}
                className="w-full max-w-xl bg-white rounded-lg p-6 shadow-md"
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
            >
                <h2 className="text-3xl font-semibold text-gray-600 mb-6 text-center">
                    Create Jobs for Your Company
                </h2>
                <div className="flex flex-col space-y-4">
                    {[
                        { label: 'Title', id: 'title', placeholder: 'Enter job title' },
                        {
                            label: 'Description',
                            id: 'description',
                            placeholder: 'Enter description',
                        },
                        {
                            label: 'Requirements',
                            id: 'requirements',
                            placeholder: 'skills -> c/c++/python/reactjs...',
                        },
                        {
                            label: 'Salary',
                            id: 'salary',
                            placeholder: 'ex- $120',
                        },
                        {
                            label: 'Location',
                            id: 'location',
                            placeholder: 'Enter job location',
                        },
                    ].map((input) => (
                        <motion.div
                            key={input.id}
                            className="flex flex-col space-y-2"
                            whileHover={{ scale: 1.02 }}
                        >
                            <label className="text-gray-500 text-lg">
                                {input.label} <sup className="text-red-500">*</sup>
                            </label>
                            <input
                                id={input.id}
                                placeholder={input.placeholder}
                                {...register(input.id, { required: true })}
                                className="w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-purple-500"
                            />
                            {errors[input.id] && (
                                <span className="text-red-500 text-sm">
                                    {input.label} is required
                                </span>
                            )}
                        </motion.div>
                    ))}

                    <motion.div
                        className="flex flex-col space-y-2"
                        whileHover={{ scale: 1.02 }}
                    >
                        <label className="text-gray-500">
                            Industry <sup className="text-red-500">*</sup>
                        </label>
                        <select
                            id="industry"
                            {...register('industry', { required: true })}
                            className="w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-purple-500"
                        >
                            <option value="" disabled>
                                Select type of Industry
                            </option>
                            {industryData.map((data) => (
                                <option key={data.id} value={data.title}>
                                    {data.title}
                                </option>
                            ))}
                        </select>
                        {errors.industry && (
                            <span className="text-red-500 text-sm">
                                Industry is required
                            </span>
                        )}
                    </motion.div>

                    <motion.div
                        className="flex flex-col space-y-2"
                        whileHover={{ scale: 1.02 }}
                    >
                        <label className="text-gray-500">
                            Type of Job <sup className="text-red-500">*</sup>
                        </label>
                        <select
                            id="type"
                            {...register('type', { required: true })}
                            className="w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-purple-500"
                        >
                            <option value="" disabled>
                                Select an option
                            </option>
                            {typeofjobs.map((opt) => (
                                <option key={opt.id} value={opt.title}>
                                    {opt.title}
                                </option>
                            ))}
                        </select>
                        {errors.type && (
                            <span className="text-red-500 text-sm">Type is required</span>
                        )}
                    </motion.div>

                    <motion.div
                        className="flex items-center justify-center"
                        whileHover={{ scale: 1.1 }}
                        whileTap={{ scale: 0.9 }}
                    >
                        <button
                            type="submit"
                            className="text-white text-lg text-center w-fit px-6 py-3 bg-gradient-to-r from-blue-500 to-purple-500 rounded-xl shadow-lg"
                        >
                            Submit
                        </button>
                    </motion.div>
                </div>
            </motion.form>
        </div>
    );
};

export default CreateJobs;
