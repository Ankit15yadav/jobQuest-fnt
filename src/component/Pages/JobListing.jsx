import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom'
import { getAllCompany } from '../../services/operations/CompanyAPI';
import JobsCard from '../common/JobsCard';

const JobListing = () => {

    const navigate = useNavigate();
    const dispatch = useDispatch();
    const [companyData, setCompanyData] = useState([]);
    const { user } = useSelector((state) => state.profile)

    useEffect(() => {

        const fetchCompany = async () => {
            const result = await getAllCompany();
            if (result) {
                setCompanyData(result);
                console.log("company data", result);
            }
        }

        fetchCompany();

    }, [])

    return (
        <div className='w-11/12 mx-auto'>

            {
                companyData?.map((company, index) => (
                    <div key={index}
                        className='w-11/12'
                    >
                        <div
                            className='flex gap-x-3 mt-4  items-center uppercase'
                        >
                            <img
                                src={company.CompanyLogo}
                                className=' aspect-square w-20 h-20 rounded-full   ]'
                            />
                            <p className=' font-bold text-[20px] text-gray-600'>{company.name} </p>

                        </div>
                        {
                            company.jobsCreated.length > 0 ?
                                (company.jobsCreated.map((job, idx) => (
                                    <div key={idx} className='flex justify-between items-center '>
                                        <div className='w-[90%]'>
                                            <JobsCard job={job} />
                                        </div>
                                        {
                                            user && user.role === "JobSeeker" &&
                                            (<div>
                                                <button className=' text-white bg-blue-400 border-b-4 border-b-blue-600 px-6 py-2 w-fit rounded-xl hover:scale-105'>
                                                    Apply
                                                </button>
                                            </div>)
                                        }
                                    </div>

                                ))) :
                                (<div className=' flex text-[20px] font-bold text-gray-500'>
                                    <p> No jobs created</p>
                                </div>)

                        }


                    </div>

                ))
            }

        </div>
    )
}

export default JobListing
