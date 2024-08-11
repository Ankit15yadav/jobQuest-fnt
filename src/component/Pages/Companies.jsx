import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { getAllCompany } from '../../services/operations/CompanyAPI';
import { TiLocationOutline } from 'react-icons/ti';
import { CardBody, CardContainer, CardItem } from '../animations/3D-card';


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

    return (
        <div className='w-11/12 mx-auto'>
            {/* Adding company div */}
            {user && user?.role === "Employer" && (
                <CardContainer className="inter-var max-w-6xl mx-auto border-b-4 border-gray-700 p-10 bg-gray-200 rounded-xl">
                    <CardBody className="relative group/card bg-gray-50 dark:hover:shadow-2xl dark:hover:shadow-emerald-500/[0.1] dark:bg-black dark:border-white/[0.2] border-black/[0.1] w-full h-auto rounded-xl p-6 border">
                        <div className="flex justify-between gap-x-4">
                            <CardItem translateZ="50" className="text-gray-600 font-bold text-[20px]">
                                Want to hire great minds?
                            </CardItem>
                            <CardItem
                                translateZ={40}
                                as="button"
                                className="bg-white w-fit px-3 py-2 rounded-xl hover:bg-sky-500 font-medium hover:text-white"
                                onClick={() => navigate("/create-company")}
                            >
                                CREATE COMPANY
                            </CardItem>
                        </div>

                        <div className="flex flex-col mt-4">
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
                        </div>
                    </CardBody>
                </CardContainer>
            )}

            <div className='relative max-w-4xl mx-auto justify-start mt-5 flex flex-col p-10'>
                <p className='mb-5 flex justify-center text-4xl font-bold text-gray-500'>ALL COMPANIES</p>
                {companyData?.map((company, index) => (
                    <div
                        key={index}
                        onMouseEnter={() => handleMouseEnter(index, company)}
                        onMouseLeave={handleMouseLeave}
                        className={`flex justify-between mb-3 transition-all duration-300 border-b-4 border-b-gray-400 p-2 rounded-xl cursor-pointer hover:scale-105 hover:font-bold hover:text-gray-600`}
                    >
                        <div className='flex gap-x-3'>
                            <img
                                src={company.CompanyLogo}
                                width={100} height={100}
                                className='rounded-xl'
                                alt={`${company.name} logo`}
                            />
                            <div>
                                <p className='text-[15px] font-bold uppercase text-gray-700'>{company.name}</p>
                                <p className='text-sm'>{company.description}</p>
                            </div>
                        </div>
                        {/* <div className='flex items-center cursor-pointer text-sm'>
                            {company.website}
                        </div> */}
                        <div className='flex items-center gap-x-1'>
                            {user && user.role === "JobSeeker" ? (
                                <button className='w-fit bg-blue-300 px-3 py-2 rounded-xl'>
                                    Check for jobs
                                </button>
                            ) : (
                                <div className='flex items-center gap-x-1'>
                                    <TiLocationOutline />
                                    <p>{company.location}</p>
                                </div>
                            )}
                        </div>
                    </div>
                ))}
                {data && (
                    <div
                        className='fixed top-12 right-0 m-4 p-4 bg-white border-2 border-blue-400 w-[300px] rounded-xl shadow-lg z-50'

                    >
                        <img
                            src={data.CompanyLogo}
                            width={100} height={100}
                            className=' aspect-square object-cover rounded-full'
                        />
                        <p className='font-bold text-gray-500 uppercase'>{data.name}</p>
                        <p className=' text-sm text-gray-400'>{data.description}</p>
                        <p className=' text-sm text-gray-400' >{data.location}</p>
                        <p className=' text-sm text-gray-400'>{data.industry}</p>
                        < p className=' text-sm text-gray-400'>{data.website}</p>
                        <p className=' text-sm'> Jobs Created : {data.jobsCreated.length} </p>
                        {/* You can add more details here */}
                    </div>
                )}
            </div>
        </div>
    );
};

export default Companies;
