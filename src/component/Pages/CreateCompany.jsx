import React from 'react';
import { useForm } from 'react-hook-form';
import { useDispatch, useSelector } from 'react-redux';
import Upload from '../common/Upload';
import { createCompany } from '../../services/operations/CompanyAPI';
import { setCompany } from '../../slice/CompanySlice';
import { motion } from 'framer-motion';

const CreateCompany = () => {
    const {
        register,
        handleSubmit,
        setValue,
        formState: { errors },
    } = useForm();

    const dispatch = useDispatch();
    const { token } = useSelector((state) => state.auth);

    const onSubmit = async (data) => {
        const formData = new FormData();
        formData.append("name", data.name);
        formData.append("description", data.description);
        formData.append("website", data.website);
        formData.append("location", data.location);
        formData.append("industry", data.industry);
        formData.append("companyLogo", data.companyLogo);

        const result = await createCompany(formData, token);
        if (result) {
            dispatch(setCompany(result));
        }
    }

    return (
        <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className='w-full flex items-center justify-center min-h-screen bg-gradient-to-r from-black  to-black p-6'>

            <form
                onSubmit={handleSubmit(onSubmit)}
                className='bg-gray-800 text-white rounded-lg shadow-xl p-8 w-full max-w-3xl space-y-8'>

                <h2 className="text-3xl font-bold text-center mb-6">Create Company</h2>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="flex flex-col space-y-2">
                        <label className="text-sm">Name</label>
                        <input
                            id="name"
                            placeholder='Enter company name'
                            {...register("name", { required: true })}
                            className='w-full p-3 bg-gray-700 border border-gray-600 rounded-md focus:outline-none focus:ring-2 focus:ring-purple-500'
                        />
                        {errors.name && <span className="text-red-500 text-sm">Name is required</span>}
                    </div>

                    <div className="flex flex-col space-y-2">
                        <label className="text-sm">Location</label>
                        <input
                            id="location"
                            placeholder='Enter company location'
                            {...register("location", { required: true })}
                            className='w-full p-3 bg-gray-700 border border-gray-600 rounded-md focus:outline-none focus:ring-2 focus:ring-purple-500'
                        />
                        {errors.location && <span className="text-red-500 text-sm">Location is required</span>}
                    </div>

                    <div className="flex flex-col space-y-2 md:col-span-2">
                        <label className="text-sm">Description</label>
                        <textarea
                            id='description'
                            placeholder='Enter short Description'
                            {...register("description", { required: true })}
                            className='w-full p-3 bg-gray-700 border border-gray-600 rounded-md focus:outline-none focus:ring-2 focus:ring-purple-500'
                        />
                        {errors.description && <span className="text-red-500 text-sm">Description is required</span>}
                    </div>

                    <div className="flex flex-col space-y-2">
                        <label className="text-sm">Industry</label>
                        <input
                            id="industry"
                            placeholder='Product / service / fintech....'
                            {...register("industry", { required: true })}
                            className='w-full p-3 bg-gray-700 border border-gray-600 rounded-md focus:outline-none focus:ring-2 focus:ring-purple-500'
                        />
                        {errors.industry && <span className="text-red-500 text-sm">Industry is required</span>}
                    </div>

                    <div className="flex flex-col space-y-2">
                        <label className="text-sm">Website</label>
                        <input
                            id='website'
                            placeholder='Enter company website'
                            {...register("website", { required: true })}
                            className='w-full p-3 bg-gray-700 border border-gray-600 rounded-md focus:outline-none focus:ring-2 focus:ring-purple-500'
                        />
                        {errors.website && <span className="text-red-500 text-sm">Website is required</span>}
                    </div>

                    <div className="md:col-span-2">
                        <Upload
                            name="companyLogo"
                            label="Company Logo"
                            register={register}
                            setValue={setValue}
                            errors={errors}
                            editData={null}
                        />
                    </div>
                </div>

                <div className="flex justify-center mt-6">
                    <motion.button
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                        type='submit'
                        className='bg-purple-600 text-white px-6 py-3 rounded-md shadow-lg focus:outline-none focus:ring-2 focus:ring-purple-500'>
                        Submit
                    </motion.button>
                </div>
            </form>
        </motion.div>
    )
}

export default CreateCompany;
