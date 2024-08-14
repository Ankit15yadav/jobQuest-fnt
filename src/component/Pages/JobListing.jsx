import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { getAllCompany } from '../../services/operations/CompanyAPI';
import JobsCard from '../common/JobsCard';
import { motion } from 'framer-motion';

const JobListing = () => {

    const navigate = useNavigate();
    const dispatch = useDispatch();
    const [companyData, setCompanyData] = useState([]);
    const { user } = useSelector((state) => state.profile);

    useEffect(() => {
        const fetchCompany = async () => {
            const result = await getAllCompany();
            if (result) {
                setCompanyData(result);
                console.log("company data", result);
            }
        };
        fetchCompany();
    }, []);

    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.3,
            },
        },
    };

    const itemVariants = {
        hidden: { opacity: 0, x: -50, rotate: -5 },
        visible: {
            opacity: 1,
            x: 0,
            rotate: 0,
            transition: { duration: 0.5, type: "spring", stiffness: 50 }
        },
    };

    const jobCardVariants = {
        hidden: { opacity: 0, y: 50 },
        visible: {
            opacity: 1,
            y: 0,
            transition: {
                duration: 0.5,
                type: "spring",
                stiffness: 50,
                bounce: 0.3,
            }
        },
    };

    const buttonVariants = {
        hover: { scale: 1.1, rotate: 5, transition: { type: "spring", stiffness: 200 } },
    };

    const noJobsMessageVariants = {
        visible: {
            scale: [1, 1.05, 1],
            transition: {
                duration: 1,
                repeat: Infinity,
                repeatType: "reverse",
            },
        },
    };

    return (
        <motion.div
            className=' mx-auto bg-gradient-to-b from-gray-900 to-gray-800 p-8 shadow-xl'
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, ease: "easeOut" }}
        >
            <div className=' w-11/12 mx-auto'>
                {companyData?.map((company, index) => (
                    <motion.div
                        key={index}
                        className='w-full bg-gray-700 p-6 rounded-lg mb-8 shadow-lg'
                        variants={containerVariants}
                        initial="hidden"
                        animate="visible"
                    >
                        <motion.div
                            className='flex gap-x-5 items-center'
                        >
                            <motion.img
                                src={company.CompanyLogo}
                                className='aspect-square w-24 h-24 rounded-full border-4 border-blue-500 shadow-md'
                                variants={itemVariants}
                            />
                            <motion.p
                                className='font-bold text-[24px] text-gray-300 tracking-wide'
                                variants={itemVariants}
                            >
                                {company.name}
                            </motion.p>
                        </motion.div>

                        {company.jobsCreated.length > 0 ? (
                            company.jobsCreated.map((job, idx) => (
                                <motion.div
                                    key={idx}
                                    className='flex justify-between items-center mt-6 bg-gray-600 p-4 rounded-lg shadow-inner'
                                    variants={jobCardVariants}
                                >
                                    <div className='w-[90%]'>
                                        <JobsCard
                                            job={job}
                                            textColor='text-gray-300'
                                            titleColor='text-gray-100'
                                            labelColor='text-gray-400'
                                        />
                                    </div>
                                    {user && user.role === "JobSeeker" && (
                                        <motion.div
                                            whileHover="hover"
                                            variants={buttonVariants}
                                        >
                                            <button className='text-white bg-blue-500 border-b-4 border-blue-700 px-8 py-3 w-fit rounded-full shadow-lg hover:bg-blue-600'>
                                                Apply
                                            </button>
                                        </motion.div>
                                    )}
                                </motion.div>
                            ))
                        ) : (
                            <motion.div
                                className='flex text-[20px] font-bold text-red-400 mt-4'
                                variants={noJobsMessageVariants}
                                animate="visible"
                            >
                                <p>No jobs created</p>
                            </motion.div>
                        )}
                    </motion.div>
                ))}
            </div>
        </motion.div>
    );
}

export default JobListing;
