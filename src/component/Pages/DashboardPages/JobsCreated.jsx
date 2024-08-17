import React from 'react'
import { useSelector } from 'react-redux';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useEffect } from 'react';
import { getUserCompany } from '../../../services/operations/CompanyAPI';
import JobsCard from '../../common/JobsCard';

const JobsCreated = () => {

    const { user } = useSelector((state) => state.profile);
    const { token } = useSelector((state) => state.auth);
    const [companyData, setCompanyData] = useState([]);
    const navigate = useNavigate();

    // console.log(user._id);
    const userId = user._id;
    useEffect(() => {

        const getUserCompanies = async () => {
            try {
                const result = await getUserCompany(userId, token);
                if (result) {
                    setCompanyData(result);
                }
                console.log("company Data", result);
            } catch (error) {
                console.error("Error fetching company data:", error);
            }
        };
        getUserCompanies();
    }, []);

    return (
        <div>
            {
                companyData.length > 0 ?
                    (
                        companyData?.map((company, index) => (
                            <div key={index}
                                className='flex flex-col p-4 mt-4'
                            >
                                <div className='flex items-center gap-x-4'>
                                    <img
                                        src={company.CompanyLogo}
                                        alt='company image'
                                        className='w-20 h-20 aspect-square rounded-full'
                                    />
                                    <div className='flex gap-x-4 items-center'>
                                        <p className=' text-xl font-semibold text-gray-400'>{company.name} </p>
                                        <p className=' text-sm text-gray-700'>{"("} {company.location} {")"} </p>
                                    </div>
                                </div>
                                {
                                    company.jobsCreated.length > 0 ?
                                        (
                                            company?.JobsCreated?.map((job, index) => (
                                                <div key={index}>
                                                    <JobsCard job={job} />
                                                </div>
                                            ))
                                        )
                                        :
                                        (
                                            <div className=' flex justify-between text-gray-400 items-center'>
                                                <p className=' mt-2 text-2xl font-semibold text-red-500'> No jobs created</p>
                                                <button className=' bg-gray-700 px-6 py-2 rounded-xl'>
                                                    Create jobs
                                                </button>
                                            </div>
                                        )
                                }
                            </div>
                        ))
                    )
                    :
                    ("")
            }
        </div>
    )
}

export default JobsCreated
