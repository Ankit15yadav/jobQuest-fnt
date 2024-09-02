import React from 'react';

const JobsCard = ({ job }) => {
    return (
        <div className='mx-auto border-b-4 border-gray-500 p-4 mt-4 rounded-xl bg-gray-800 shadow-lg'>
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4'>
                <div className='flex flex-col'>
                    <p className='text-gray-400 font-semibold'>Title:</p>
                    <p className='text-gray-100 font-bold'>{job.title}</p>
                </div>
                <div className='flex flex-col'>
                    <p className='text-gray-400 font-semibold'>Job Description:</p>
                    <p className='text-gray-100'>{job.description}</p>
                </div>
                <div className='flex flex-col'>
                    <p className='text-gray-400 font-semibold'>Requirements:</p>
                    <p className='text-gray-100'>{job.requirements}</p>
                </div>
                <div className='flex flex-col'>
                    <p className='text-gray-400 font-semibold'>Salary:</p>
                    <p className='text-gray-100'>{job.salary}</p>
                </div>
                <div className='flex flex-col'>
                    <p className='text-gray-400 font-semibold'>Location:</p>
                    <p className='text-gray-100'>{job.location}</p>
                </div>
                <div className='flex flex-col'>
                    <p className='text-gray-400 font-semibold'>Job Type:</p>
                    <p className='text-gray-100'>{job.type}</p>
                </div>
            </div>
        </div>
    );
}

export default JobsCard;
