import React from 'react'
import { useForm } from 'react-hook-form'
import { useDispatch, useSelector } from 'react-redux';

const Createjobs = () => {

    const {
        register,
        handleSubmit,
        setValue,
        getValues,
        formState: { errors },
    } = useForm();

    const { token } = useSelector((state) => state.auth);
    const dispatch = useDispatch();

    return (
        <div className='w-11/12 mx-auto min-h-screen flex mt-10 justify-center'>
            <form className=' w-full max-w-xl'>
                <h2 className='text-3xl font-semibold text-gray-600 mb-6 text-center'> Create jobs for your company</h2>
                <div className=' flex flex-col space-y-4'>
                    <div className=' flex flex-col space-y-2'>
                        <label className=' text-gray-500 text-lg'>Title <sup className=' text-red-500'>*</sup></label>
                        <input
                            id="title"
                            placeholder='Enter job title'
                            {...register("title", { required: true })}
                            className='w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-purple-500'
                        />{
                            errors.title && <span className='text-red-500 text-sm'>
                                title is required
                            </span>
                        }
                    </div>
                    <div className=' flex flex-col space-y-2'>
                        <label className=' text-gray-500'>Description <sup className=' text-red-500'>*</sup></label>
                        <input
                            id="description"
                            placeholder='Enter description'
                            {...register("description", { required: true })}
                            className='w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-purple-500'
                        />{
                            errors.description && <span className='text-red-500 text-sm'>
                                Description is required
                            </span>
                        }
                    </div>
                    <div className=' flex flex-col space-y-2'>
                        <label className=' text-gray-500'>requirements <sup className=' text-red-500'>*</sup></label>
                        <input
                            id="requirements"
                            placeholder='skills -> c/c++/python/reactjs...'
                            {...register("requirements", { required: true })}
                            className='w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-purple-500'
                        />{
                            errors.requirements && <span className='text-red-500 text-sm'>
                                Field is required
                            </span>
                        }
                    </div>
                    <div className=' flex flex-col space-y-2'>
                        <label className=' text-gray-500'>Salary <sup className=' text-red-500'>*</sup></label>
                        <input
                            id="salary"
                            placeholder='ex- $120'
                            {...register("salary", { required: true })}
                            className='w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-purple-500'
                        />{
                            errors.salary && <span className='text-red-500 text-sm'>
                                salary is required
                            </span>
                        }
                    </div>
                    <div className=' flex flex-col space-y-2'>
                        <label className=' text-gray-500'>Location <sup className=' text-red-500'>*</sup></label>
                        <input
                            id="location"
                            placeholder='Enter job location'
                            {...register("location", { required: true })}
                            className='w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-purple-500'
                        />{
                            errors.location && <span className='text-red-500 text-sm'>
                                location is required
                            </span>
                        }
                    </div>
                    <div className=' flex flex-col space-y-2'>
                        <label className=' text-gray-500'>Date Posted <sup className=' text-red-500'>*</sup></label>
                        <input
                            id="Date"
                            placeholder='Date'
                            {...register("Date", { required: true })}
                            className='w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-purple-500'
                        />{
                            errors.Date && <span className='text-red-500 text-sm'>
                                Date is required
                            </span>
                        }
                    </div>
                    <div className=' flex flex-col space-y-2'>
                        <label className=' text-gray-500'>Deadline <sup className=' text-red-500'>*</sup></label>
                        <input
                            id="Deadline"
                            placeholder='Enter deadline of the application'
                            {...register("Deadline", { required: true })}
                            className='w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-purple-500'
                        />{
                            errors.Deadline && <span className='text-red-500 text-sm'>
                                Deadline is required
                            </span>
                        }
                    </div>
                    <div className=' flex flex-col space-y-2'>
                        <label className=' text-gray-500'>Type of Job <sup className=' text-red-500'>*</sup></label>
                        <input
                            id="type"
                            placeholder='ex-> fullTime , partTime , remote , internship'
                            {...register("Date", { required: true })}
                            className='w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-purple-500'
                        />{
                            errors.Date && <span className='text-red-500 text-sm'>
                                Date is required
                            </span>
                        }
                    </div>

                </div>
            </form>
        </div>
    )
}

export default Createjobs
