import React, { useRef, useState } from 'react'
import { useSelector } from 'react-redux'
import { FaCloudUploadAlt, FaUpload } from "react-icons/fa";
import { FaSave } from "react-icons/fa";
import { FaEdit } from "react-icons/fa";



const EditMyProfile = () => {

    const { user } = useSelector((state) => state.profile);
    const [imageFile, setImageFile] = useState(null);
    const [previewSource, setPreviewSource] = useState(null);

    const fileInputRef = useRef(null);

    const handleClick = () => {
        fileInputRef.current.click();
    }

    const handleFileChange = (e) => {
        const file = e.target.files[0];
        if (file) {
            setImageFile(file);
            previewFile(file);
        }
    }

    const previewFile = (file) => {
        const reader = new FileReader();
        reader.readAsDataURL(file);
        reader.onload = () => {
            setPreviewSource(reader.result);
        }
    }

    const handleFileupload = () => {
        try {

            const formData = new FormData();
        }
        catch (err) {

        }
    }

    console.log(user);

    return (
        <div className=' text-gray-400 '>
            <h1 className='text-3xl font-semibold'> Settings </h1>
            {/* left div */}
            <div className='w-[25%] bg-slate-800 h-auto p-6 rounded-xl flex flex-col items-center gap-y-3 mt-8 '>
                <div className=' flex flex-col items-center'>
                    <img
                        src={previewSource || user.image}
                        className=' aspect-square w-32 h-32 rounded-full border-2 border-cyan-500 object-cover'
                    />
                    <div className=' flex gap-x-3 mt-4'>
                        <input
                            type='file'
                            ref={fileInputRef}
                            onChange={handleFileChange}
                            className=' hidden'
                            accept='image/png , image/gif ,image/jpeg'
                        />
                        <button className=' flex gap-x-1 items-center bg-yellow-300 p-2 px-4 w-fit rounded-xl text-slate-900'
                            onClick={handleClick}
                        >
                            <FaEdit />
                            Edit
                        </button>
                        <button className=' flex gap-x-1 items-center text-slate-900 p-2 rounded-xl bg-rose-300'>
                            <FaSave />
                            save
                        </button>

                    </div>
                </div>
                <div className=' flex flex-col items-center gap-y-1'>
                    <p className=' text-xl font-bold uppercase'>{user.firstName} {user.lastName} </p>
                    <p className=' text-sm'>{user.email} </p>
                </div>

                <div className=' mt-10'>
                    <p className='text-xl font-bold flex flex-col items-center text-slate-400'>ABOUT</p>
                    <p>{user?.additionalDetails?.about ? user?.additionalDetails?.about : "Nothing in about"} </p>

                </div>
            </div>

            {/* right div */}
            <div>

            </div>
        </div>
    )
}

export default EditMyProfile
