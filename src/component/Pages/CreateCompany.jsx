import React from 'react'
import { useForm } from 'react-hook-form'
import { useDispatch, useSelector } from 'react-redux';
import Upload from '../common/Upload';
// import { createCompany } from '../../services/operations/CompanyAPI';
import { createCompany } from '../../services/operations/CompanyAPI';
import { setCompany } from '../../slice/CompanySlice';

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

    // const onSubmit = async (data) => {
    //     console.log(data); // Check the data object

    //     const formData = new FormData();
    //     formData.append("name", data.name);
    //     formData.append("description", data.description);
    //     formData.append("website", data.website);
    //     formData.append("location", data.location);
    //     formData.append("industry", data.industry);

    //     // Check if logo is set
    //     console.log("logo hai c ki", data.logo); // Should not be undefined or null if a file is selected

    //     formData.append("logo", data.logo);

    //     const result = await createCompany(formData, token);
    //     if (result) {
    //         dispatch(setCompany(result));

    //     }

    //     console.log("form data print kia hai", formData);

    // }

    const onSubmit = async (data) => {
        console.log("Submitted data:", data); // Log the entire data object

        const formData = new FormData();
        formData.append("name", data.name);
        formData.append("description", data.description);
        formData.append("website", data.website);
        formData.append("location", data.location);
        formData.append("industry", data.industry);

        // Check if logo is set
        console.log("Logo:", data.logo); // Log the logo data specifically

        formData.append("logo", data.logo);

        // Log the formData object to see if everything is appended correctly
        for (let pair of formData.entries()) {
            console.log(`${pair[0]}: ${pair[1]}`);
        }

        const result = await createCompany(formData, token);
        if (result) {
            dispatch(setCompany(result));
        }
    }


    return (
        <div className=' w-11/12 mx-auto items-center '>
            <form
                onSubmit={handleSubmit(onSubmit)}
                className=' w-[50%] mx-auto '>
                {/* name */}
                <div className="flex flex-col space-y-2">
                    <label className="text-sm text-richblack-5">
                        Name
                    </label>
                    <input
                        id="name"
                        placeholder='Enter company name'
                        {...register("name", { required: true })}
                        className='w-full'
                    />{
                        errors.name && (
                            <span>Name is required</span>
                        )
                    }
                </div>

                {/* desc */}
                <div className="flex flex-col space-y-2">
                    <label className="text-sm text-richblack-5">
                        Description
                    </label>
                    <input
                        id='description'
                        placeholder='Enter short Description'
                        className='w-full'
                        {...register("description", { required: true })}
                    />{
                        errors.description && (
                            <span>Description is required</span>
                        )
                    }
                </div>
                {/* location*/}
                <div className="flex flex-col space-y-2">
                    <label className="text-sm text-richblack-5">
                        location
                    </label>
                    <input
                        id="location"
                        placeholder='Enter short Description'
                        className='w-full'
                        {...register("location", { required: true })}
                    />{
                        errors.location && (
                            <span>location is required</span>
                        )
                    }
                </div>

                {/* industry */}
                <div className="flex flex-col space-y-2">
                    <label className="text-sm text-richblack-5">
                        industry
                    </label>
                    <input
                        id="industry"
                        placeholder='Enter short Description'
                        className='w-full'
                        {...register("industry", { required: true })}
                    />{
                        errors.description && (
                            <span>industry is required</span>
                        )
                    }
                </div>

                {/* website */}
                <div className="flex flex-col space-y-2">
                    <label className="text-sm text-richblack-5">
                        website
                    </label>
                    <input
                        id='website'
                        placeholder='Enter short Description'
                        className='w-full'
                        {...register("website", { required: true })}
                    />{
                        errors.description && (
                            <span>website is required</span>
                        )
                    }
                </div>

                <Upload
                    name="logo"
                    label="Company Logo"
                    register={register}
                    setValue={setValue}
                    errors={errors}
                    editData={null}
                />
                <div>
                    <button type='submit'>
                        Submit
                    </button>
                </div>
            </form>
        </div>
    )
}

export default CreateCompany
