import React, { useState, useEffect } from 'react';
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { getUserCompany } from '../../../services/operations/CompanyAPI';
import JobsCard from '../../common/JobsCard';
import { FaChevronDown, FaChevronUp } from 'react-icons/fa';

const JobsCreated = () => {

    const { user } = useSelector((state) => state.profile);
    const { token } = useSelector((state) => state.auth);
    const [companyData, setCompanyData] = useState([]);
    const [companyDrop, setCompanyDrop] = useState(null);
    const navigate = useNavigate();

    useEffect(() => {
        const getUserCompanies = async () => {
            try {
                const result = await getUserCompany(token);
                if (result) {
                    setCompanyData(result);
                }
                console.log("company Data", result);
            } catch (error) {
                console.error("Error fetching company data:", error);
            }
        };
        getUserCompanies();
    }, [token]);

    const toggleCompanyDrop = (index) => {
        setCompanyDrop(companyDrop === index ? null : index);
    }


    console.log("company Data", companyData);

    return (
        <div>
            {companyData.length > 0 ? (
                companyData?.map((company, index) => (
                    <div
                        key={index}
                        className='flex flex-col p-4 mt-4'
                    >
                        <div
                            className='flex items-center gap-x-4 cursor-pointer'
                            onClick={() => toggleCompanyDrop(index)}
                        >
                            <img
                                src={company.CompanyLogo}
                                alt='company image'
                                className='w-20 h-20 aspect-square rounded-full'
                            />
                            <div className='flex gap-x-4 items-center'>
                                <p className=' text-xl font-semibold text-gray-400'>{company.name} </p>
                                <p className=' text-sm text-gray-500'>{"("} {company.location} {")"} </p>
                            </div>
                            <div className='flex items-center ml-auto gap-x-4'>
                                <button
                                    className='bg-yellow-300 text-slate-900 font-semibold px-6 py-2 rounded-xl'
                                    onClick={(e) => {
                                        e.stopPropagation(); // Prevent the click from triggering the toggle
                                        navigate(`/createJobs/${user._id}/${company._id}`);
                                    }}
                                >
                                    Create jobs
                                </button>
                                {companyDrop === index ? (
                                    <FaChevronUp className='text-gray-400' />
                                ) : (
                                    <FaChevronDown className='text-gray-400' />
                                )}
                            </div>
                        </div>

                        {companyDrop === index && (
                            <div className='mt-4'>
                                {company.jobsCreated.length > 0 ? (
                                    company.jobsCreated?.map((job, jobIndex) => (
                                        <div key={jobIndex}
                                        >
                                            <JobsCard job={job} />
                                        </div>
                                    ))
                                ) : (
                                    <div>
                                        <p className='text-red-500'>No jobs created</p>
                                    </div>
                                )}
                            </div>
                        )}
                    </div>
                ))
            ) : (
                <p>No companies</p>
            )}
        </div>
    );
}

export default JobsCreated;
