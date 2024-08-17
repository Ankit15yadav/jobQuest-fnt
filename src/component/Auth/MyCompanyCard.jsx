import React from 'react'
import { MdDelete, MdEdit } from "react-icons/md";


const MyCompanyCard = ({ company }) => {
    return (
        <div className='text-gray-500 flex p-4 items-center gap-x-2 border-b border-b-gray-300 rounded-xl space-y-4'>
            <img
                src={company.CompanyLogo}
                className=' w-20 h-20 aspect-square rounded-full'
            />
            <div className=' flex flex-col justify-center'>
                <p className=' font-bold text-[20px]  uppercase'>{company.name} {"-->"} <span className=' font-semibold text-[15px]'>{company.location}</span> </p>
                <p className=' text-sm'>{company.description} </p>
                <p className=' text-sm font-bold'>JobsCreated : {company.jobsCreated.length} </p>
            </div>

            <div className='ml-auto flex items-center gap-x-2'>
                <button className='bg-gray-500 font-semibold text-gray-300 px-2 py-2 rounded-xl '>
                    <MdEdit />
                </button>
                <button className='bg-gray-500 font-semibold text-gray-300 px-2 py-2 rounded-xl '>
                    <MdDelete />
                </button>
            </div>
        </div>
    )
}

export default MyCompanyCard
