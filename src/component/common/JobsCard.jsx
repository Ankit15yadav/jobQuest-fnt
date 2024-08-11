import React from 'react'

const JobsCard = ({ job }) => {
    return (
        <div className=' mx-auto flex justify-between border-b-4 border-gray-500 p-2 mt-2 rounded-xl'>
            <div className='text-sm'>
                <p className=' font-bold text-gray-600'> Title : <span className=' font-semibold text-gray-500'> {job.title}</span> </p>
                <p className=' font-bold  text-gray-600'> Job description : <span className=' font-semibold  text-gray-500'> {job.description}</span> </p>
            </div>
            <div>
                <p className=' font-bold  text-gray-600'> Requirements : <span className=' font-semibold  text-gray-500'>  {job.requirements}</span> </p>
                <p className=' font-bold  text-gray-600'> Salary : <span className=' font-semibold  text-gray-500'>{job.salary}</span> </p>
            </div>
            <div>
                <p className=' font-bold  text-gray-600'> Location : <span className=' font-semibold  text-gray-500'>{job.location}</span> </p>
                <p className=' font-bold  text-gray-600'> Job :<span className=' font-semibold  text-gray-500'>  {job.typeOfJob}</span> </p>
            </div>
        </div>
    )
}

export default JobsCard
