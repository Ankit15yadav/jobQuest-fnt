import React, { useState, useRef } from 'react';
import { useForm } from 'react-hook-form';
import { useSelector } from 'react-redux';
import Upload from '../common/Upload';

const CreateCompany = () => {
    const { loading } = useSelector((state) => state.auth);
    const [logo, setLogo] = useState(null);
    const fileInputRef = useRef(null); // Reference for the file input

    const {
        register,
        handleSubmit,
        setValue,
        formState: { errors },
        reset,
        trigger,
    } = useForm();

    const handleFileSelect = (file) => {
        setLogo(file);
        trigger('logo'); // Trigger validation for the logo field
    };

    const onSubmit = (data) => {
        const formData = new FormData();

        // Append other form data
        formData.append('companyName', data.companyName);
        formData.append('description', data.description);
        formData.append('location', data.location);
        formData.append('industry', data.industry);
        formData.append('website', data.website);

        // Append the logo if it exists
        if (logo) {
            formData.append('logo', logo);
        }

        // Log the form data entries for debugging
        for (const [key, value] of formData.entries()) {
            console.log(`${key}: ${value}`);
        }

        // You can now send formData to your server
        // Example:
        // axios.post('/api/companies', formData)
        //     .then(response => console.log(response))
        //     .catch(error => console.error(error));

        // Reset the form and clear the file input
        reset();
        setLogo(null); // Clear the logo state
        if (fileInputRef.current) {
            fileInputRef.current.value = ''; // Clear the file input
        }
    };

    return (
        <div className='w-11/12 mx-auto mt-4 flex flex-col'>
            <div className='w-[40%] mx-auto'>
                <p className='uppercase font-bold'>Create Company</p>

                <form onSubmit={handleSubmit(onSubmit)} className='flex flex-col'>
                    <div className='flex flex-col'>
                        <label>Company Name</label>
                        <input
                            id='companyName'
                            disabled={loading}
                            placeholder='Add a Company name'
                            {...register('companyName', { required: 'Company name is required' })}
                            className='w-full rounded-lg'
                        />
                        {errors.companyName && <span className='text-red-600'>{errors.companyName.message}</span>}
                    </div>

                    <div className='flex flex-col'>
                        <label>Description</label>
                        <input
                            id='description'
                            disabled={loading}
                            placeholder='Provide a description'
                            {...register('description', { required: 'Description is required' })}
                            className='w-full rounded-lg'
                        />
                        {errors.description && <span className='text-red-600'>{errors.description.message}</span>}
                    </div>

                    <div className='flex flex-col'>
                        <label>Location</label>
                        <input
                            id='location'
                            disabled={loading}
                            placeholder='Enter your company location'
                            {...register('location', { required: 'Location is required' })}
                            className='w-full rounded-lg'
                        />
                        {errors.location && <span className='text-red-600'>{errors.location.message}</span>}
                    </div>

                    <div className='flex flex-col'>
                        <label>Industry</label>
                        <input
                            id='industry'
                            disabled={loading}
                            placeholder='Enter your industry name'
                            {...register('industry', { required: 'Industry name is required' })}
                            className='w-full rounded-lg'
                        />
                        {errors.industry && <span className='text-red-600'>{errors.industry.message}</span>}
                    </div>

                    <div className='flex flex-col'>
                        <label>Website URL</label>
                        <input
                            id='website'
                            disabled={loading}
                            placeholder='Enter website name'
                            {...register('website', { required: 'Website URL is required' })}
                            className='w-full rounded-lg'
                        />
                        {errors.website && <span className='text-red-600'>{errors.website.message}</span>}
                    </div>

                    <div className='flex flex-col'>
                        <label>
                            Logo of Company
                        </label>
                        <Upload onFileSelect={handleFileSelect} />{ }
                    </div>

                    <button type='submit' disabled={loading} className='mt-4 bg-blue-500 text-white p-2 rounded'>
                        Submit
                    </button>
                </form>
            </div>
        </div>
    );
};

export default CreateCompany;
