import React, { useState } from 'react'
import toast from 'react-hot-toast';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom'

const CreateCompany = () => {

    const navigate = useNavigate();
    const dispatch = useDispatch();
    const [pdfFile, setPdfFile] = useState(null);

    const [formData, setFormData] = useState({
        name: "",
        description: "",
        location: "",
        industry: "",
        website: "",
        CompanyLogo: "",
    })

    const { name, description, location, industry, website, CompanyLogo } = formData;

    const handleOnChange = (e) => {
        setFormData((prevData) => ({
            ...prevData,
            [e.target.name]: e.target.value,
        }))
    }

    const [imageFile, setImageFile] = useState(null);
    const [preview, setPreview] = useState('');

    const handleFileChange = (event) => {
        const file = event.target.files[0];
        if (file && file.type === 'application/pdf') {
            setPdfFile(file);
        } else {
            toast.error("Please upload a valid pdf file")
        }
    };

    const handleFileImgChange = (event) => {
        const file = event.target.files[0];
        if (file && file.type.startsWith('image/')) {
            setImageFile(file);
            const reader = new FileReader();
            reader.onloadend = () => {
                setPreview(reader.result);
            };
            reader.readAsDataURL(file);
        } else {
            alert('Please upload a valid image file.');
        }
    };

    return (
        <div className=' flex w-11/12 items-center justify-center mt-7'>
            <form>
                {/* <div className='flex flex-col '>
                    <label className='font-bold text-[20px]'>
                        Upload LOGO:
                    </label>
                    <input
                        type='file'
                        id='pdf-upload'
                        accept=''
                        onChange={handleFileChange}
                        className=' mt-2'
                    />
                </div> */}
                <div>
                    <label htmlFor="image-upload">Upload Image:</label>
                    <input
                        type="file"
                        id="image-upload"
                        accept="image/*"
                        onChange={handleFileImgChange}
                    />
                </div>
                {preview && (
                    <div>
                        <h3>Image Preview:</h3>
                        <img src={preview} alt="Preview" style={{ maxWidth: '300px', maxHeight: '300px' }} />
                    </div>
                )}
            </form>
        </div>
    )
}

export default CreateCompany
