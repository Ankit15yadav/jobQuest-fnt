import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link, useNavigate } from 'react-router-dom';
import { getAllCompany } from '../../services/operations/CompanyAPI';
import { TiLocationOutline } from 'react-icons/ti';
import { CardBody, CardContainer, CardItem } from '../animations/3D-card';
import { motion } from 'framer-motion';

const Companies = () => {
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const [companyData, setCompanyData] = useState([]);
    const [activeIndex, setActiveIndex] = useState(null);
    const [data, setData] = useState(null);

    const { user } = useSelector((state) => state.profile);

    const keypoints = [
        { id: 1, title: "Easy Setup" },
        { id: 2, title: "Company Branding" },
        { id: 3, title: "Enhanced Visibility" },
        { id: 4, title: "Professional Appearance" },
        { id: 5, title: "Security and Privacy" },
    ];

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

    const handleMouseEnter = (index, company) => {
        setActiveIndex(index);
        setData(company);
    };

    const handleMouseLeave = () => {
        setActiveIndex(null);
        setData(null);
    };

    const cardVariants = {
        initial: { opacity: 0, y: 20 },
        animate: {
            opacity: 1,
            y: 0,
            transition: { duration: 0.5, ease: "easeOut" }
        },
        hover: {
            scale: 1.05,
            transition: { duration: 0.3, ease: "easeInOut" }
        },
    };

    const popupVariants = {
        initial: { opacity: 0, x: 50 },
        animate: {
            opacity: 1,
            x: 0,
            transition: { duration: 0.4, ease: "easeOut" }
        },
        exit: {
            opacity: 0,
            x: 50,
            transition: { duration: 0.4, ease: "easeIn" }
        },
    };

    return (
        <div className="w-full min-h-screen bg-gradient-to-r from-black  to-black text-white">
            <div className='w-11/12 mx-auto'>
                {user && user?.role === "Employer" && (
                    <CardContainer className="inter-var max-w-6xl mx-auto border-b-4 border-gray-700 p-10 bg-gray-200 rounded-xl">
                        <CardBody className="relative group/card bg-gray-50 dark:hover:shadow-2xl dark:hover:shadow-emerald-500/[0.1] dark:bg-black dark:border-white/[0.2] border-black/[0.1] w-full h-auto rounded-xl p-6 border">
                            <motion.div
                                className="flex justify-between gap-x-4"
                                initial={{ opacity: 0, scale: 0.9 }}
                                animate={{ opacity: 1, scale: 1 }}
                                transition={{ duration: 0.5, ease: "easeOut" }}
                            >
                                <CardItem translateZ="50" className="text-gray-600 font-bold text-[20px]">
                                    Want to hire great minds?
                                </CardItem>
                                <CardItem
                                    translateZ={40}
                                    as="button"
                                    className="text-gray-700 bg-white w-fit px-3 py-2 rounded-xl hover:bg-sky-500 font-medium hover:text-white"
                                    onClick={() => navigate("/create-company")}
                                >
                                    CREATE COMPANY
                                </CardItem>
                            </motion.div>

                            <motion.div
                                className="flex flex-col mt-4"
                                initial={{ opacity: 0, x: -50 }}
                                animate={{ opacity: 1, x: 0 }}
                                transition={{ duration: 0.6, ease: "easeOut" }}
                            >
                                <CardItem translateZ="60" className="text-[20px] font-bold text-sky-500">
                                    KEY POINTS
                                </CardItem>
                                <ul>
                                    {keypoints.map((point) => (
                                        <CardItem key={point?.id} translateZ={30} className="font-bold text-gray-600">
                                            {point?.id}. {point?.title}
                                        </CardItem>
                                    ))}
                                </ul>
                            </motion.div>
                        </CardBody>
                    </CardContainer>
                )}

                <motion.div
                    className='relative max-w-4xl mx-auto justify-start mt-5 flex flex-col p-10'
                    initial="initial"
                    animate="animate"
                >
                    <motion.p
                        className='mb-5 flex justify-center text-5xl font-cursive bg-gradient-to-r from-white via-cyan-300 to-teal-600 bg-clip-text text-transparent'
                        initial={{ opacity: 0, y: -20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, ease: "easeOut" }}
                    >
                        ALL COMPANIES
                    </motion.p>

                    {companyData?.map((company, index) => (
                        <motion.div
                            key={index}
                            onMouseEnter={() => handleMouseEnter(index, company)}
                            onMouseLeave={handleMouseLeave}
                            className='flex flex-col justify-between mb-3 border-b-4 border-b-gray-600 p-4 rounded-xl bg-gray-800 hover:bg-gray-700 '
                            variants={cardVariants}
                            whileHover="hover"
                        >
                            <div className='flex flex-col md:flex-row gap-4'>
                                <img
                                    src={company.CompanyLogo}
                                    width={100} height={100}
                                    className='rounded-xl flex-shrink-0'
                                    alt={`${company.name} logo`}
                                />
                                <div className='flex-1'>
                                    <p className='text-[15px] font-bold uppercase text-gray-300'>{company.name}</p>
                                    <p className='text-sm text-gray-400 mt-2'>
                                        {company.description}
                                    </p>
                                </div>
                            </div>
                            <div className='flex items-center gap-x-2 mt-3 text-gray-400'>
                                {user && user.role === "JobSeeker" ? (
                                    <button
                                        className='w-full bg-blue-500 hover:bg-blue-600 px-3 py-2 rounded-xl text-center'>
                                        <Link to={"/dashboard/joblisting"}>
                                            Check for jobs
                                        </Link>
                                    </button>
                                ) : (
                                    <div className='flex items-center gap-x-2'>
                                        <TiLocationOutline />
                                        <p>{company.location}</p>
                                    </div>
                                )}
                            </div>
                        </motion.div>
                    ))}

                    {data && (
                        <motion.div
                            className='fixed top-12 right-0 m-4 p-4 bg-gray-800 border-2 border-blue-500 w-[300px] rounded-xl shadow-lg z-50'
                            variants={popupVariants}
                            initial="initial"
                            animate="animate"
                            exit="exit"
                        >
                            <img
                                src={data.CompanyLogo}
                                width={100} height={100}
                                className='aspect-square object-cover rounded-full'
                            />
                            <p className='font-bold text-gray-300 uppercase'>{data.name}</p>
                            <p className='text-sm text-gray-400'>{data.description}</p>
                            <p className='text-sm text-gray-400'>{data.location}</p>
                            <p className='text-sm text-gray-400'>{data.industry}</p>
                            <p className='text-sm text-gray-400'>{data.website}</p>
                            <p className='text-sm text-gray-400'>Jobs Created: {data.jobsCreated.length}</p>
                        </motion.div>
                    )}
                </motion.div>
            </div>
        </div>
    );
};

export default Companies;
