import React from 'react'
import { useForm } from 'react-hook-form'
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
        getValues,
        formState: { errors },
    } = useForm();

    const dispatch = useDispatch();
    const { token } = useSelector((state) => state.auth);

    const onSubmit = async (data) => {
        console.log("Submitted data:", data);

        const formData = new FormData();
        formData.append("name", data.name);
        formData.append("description", data.description);
        formData.append("website", data.website);
        formData.append("location", data.location);
        formData.append("industry", data.industry);

        console.log("Logo:", data.companyLogo);
        formData.append("companyLogo", data.companyLogo);

        // for (let pair of formData.entries()) {
        //     console.log(`${pair[0]}: ${pair[1]}`);
        // }

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
            className='w-11/12 mx-auto flex items-center justify-center min-h-screen bg-gradient-to-r from-gray-600 via-gray-800 to-gray-600 p-6'>

            <form
                onSubmit={handleSubmit(onSubmit)}
                className='bg-white rounded-lg shadow-lg p-8 w-full max-w-xl'>

                <h2 className="text-2xl font-semibold text-gray-700 mb-6 text-center">Create Company</h2>

                <div className="flex flex-col space-y-4">
                    <div className="flex flex-col space-y-2">
                        <label className="text-sm text-gray-600">Name</label>
                        <input
                            id="name"
                            placeholder='Enter company name'
                            {...register("name", { required: true })}
                            className='w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-purple-500'
                        />
                        {errors.name && <span className="text-red-500 text-sm">Name is required</span>}
                    </div>

                    <div className="flex flex-col space-y-2">
                        <label className="text-sm text-gray-600">Description</label>
                        <textarea
                            id='description'
                            placeholder='Enter short Description'
                            className='w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-purple-500'
                            {...register("description", { required: true })}
                        />
                        {errors.description && <span className="text-red-500 text-sm">Description is required</span>}
                    </div>

                    <div className="flex flex-col space-y-2">
                        <label className="text-sm text-gray-600">Location of Company</label>
                        <input
                            id="location"
                            placeholder='Enter company location'
                            className='w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-purple-500'
                            {...register("location", { required: true })}
                        />
                        {errors.location && <span className="text-red-500 text-sm">Location is required</span>}
                    </div>

                    <div className="flex flex-col space-y-2">
                        <label className="text-sm text-gray-600">Industry</label>
                        <input
                            id="industry"
                            placeholder='Product / service / fintech....'
                            className='w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-purple-500'
                            {...register("industry", { required: true })}
                        />
                        {errors.industry && <span className="text-red-500 text-sm">Industry is required</span>}
                    </div>

                    <div className="flex flex-col space-y-2">
                        <label className="text-sm text-gray-600">Website</label>
                        <input
                            id='website'
                            placeholder='Enter company website'
                            className='w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-purple-500'
                            {...register("website", { required: true })}
                        />
                        {errors.website && <span className="text-red-500 text-sm">Website is required</span>}
                    </div>

                    <Upload
                        name="companyLogo"
                        label="Company Logo"
                        register={register}
                        setValue={setValue}
                        errors={errors}
                        editData={null}
                    />

                    <div className="flex justify-center">
                        <motion.button
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                            type='submit'
                            className='bg-purple-600 text-white px-4 py-2 rounded-md shadow-lg focus:outline-none focus:ring-2 focus:ring-purple-500'>
                            Submit
                        </motion.button>
                    </div>
                </div>
            </form>
        </motion.div>
    )
}

export default CreateCompany;
