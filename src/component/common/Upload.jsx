import React, { useRef, useState, useEffect } from 'react'
import { useDropzone } from 'react-dropzone';
import { FiUploadCloud } from "react-icons/fi"
import "video-react/dist/video-react.css"
import { Player } from 'video-react';


const Upload = ({
    name, label, register, setValue, errors,
    video = false, viewData = null,
    editData = null,
    pdf = false  // New prop to handle PDF files

}) => {

    const [selectedFile, setSelectedFile] = useState(null);
    const [previewSource, setPreviewSource] = useState(
        viewData ? viewData : editData ? editData : ""
    );

    const inputRef = useRef(null);

    const onDrop = (acceptedFiles) => {
        const file = acceptedFiles[0]
        if (file) {
            previewFile(file)
            setSelectedFile(file);
        }
    }

    const { getRootProps, getInputProps, isDragActive } = useDropzone({
        accept: pdf
            ? { "application/pdf": [".pdf"] }
            : video
                ? { "video/*": [".mp4"] }
                : { "image/*": [".jpeg", ".jpg", ".png"] },
        onDrop,
    })

    const previewFile = (file) => {
        const reader = new FileReader()
        if (pdf) {
            setPreviewSource(file.name)  // Display file name for PDFs
        } else {
            reader.readAsDataURL(file)
            reader.onloadend = () => {
                setPreviewSource(reader.result)
            }
        }
    }

    useEffect(() => {
        register(name, { required: true })
    }, [register])

    useEffect(() => {
        setValue(name, selectedFile)
    }, [selectedFile, setValue])

    return (
        <div className="flex flex-col space-y-2">
            <label className="text-sm text-richblack-5" htmlFor={name}>
                {label} {!viewData && <sup className="text-pink-200">*</sup>}
            </label>
            <div
                className={`${isDragActive ? "bg-richblack-600" : "bg-richblack-700"
                    } flex min-h-[250px] cursor-pointer items-center justify-center rounded-md border-2 border-dotted border-richblack-500`}
            >
                {previewSource ? (
                    <div className="flex w-full flex-col p-6">
                        {pdf ? (
                            <div className="flex flex-col items-center">
                                <FiUploadCloud className="text-6xl text-gray-400" />
                                <p className="mt-2 text-center text-sm text-richblack-200">
                                    {previewSource} (PDF Preview)
                                </p>
                            </div>
                        ) : !video ? (
                            <img
                                src={previewSource}
                                alt="Preview"
                                className="h-full w-full rounded-md object-cover"
                            />
                        ) : (
                            <Player aspectRatio="16:9" playsInline src={previewSource} />
                        )}
                        {!viewData && (
                            <button
                                type="button"
                                onClick={() => {
                                    setPreviewSource("")
                                    setSelectedFile(null)
                                    setValue(name, null)
                                }}
                                className="mt-3 text-richblack-400 underline"
                            >
                                Cancel
                            </button>
                        )}
                    </div>
                ) : (
                    <div
                        className="flex w-full flex-col items-center p-6"
                        {...getRootProps()}
                    >
                        <input {...getInputProps()} ref={inputRef} />
                        <div className="grid aspect-square w-14 place-items-center rounded-full bg-gray-800">
                            <FiUploadCloud className="text-2xl text-yellow-50" />
                        </div>
                        <p className="mt-2 max-w-[200px] text-center text-sm text-richblack-200">
                            Drag and drop a{!pdf && !video ? "n image" : pdf ? " PDF" : " video"}, or click to{" "}
                            <span className="font-semibold text-yellow-200">Browse</span> a
                            file
                        </p>
                        <ul className="mt-10 flex list-disc justify-between space-x-12 text-center  text-xs text-gray-800">
                            {pdf ? (
                                <li>Only PDF files are allowed</li>
                            ) : (
                                <>
                                    <li>Aspect ratio 16:9</li>
                                    <li>Recommended size 1024x576</li>
                                </>
                            )}
                        </ul>
                    </div>
                )}
            </div>
            {errors[name] && (
                <span className="ml-2 text-xs tracking-wide text-pink-200">
                    {label} is required
                </span>
            )}
        </div>
    )
}

export default Upload
