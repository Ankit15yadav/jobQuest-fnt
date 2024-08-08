import React from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom'

const Companies = () => {

    const navigate = useNavigate();
    const dispatch = useDispatch();

    const { user } = useSelector((state) => state.profile);

    const keypoints = [
        {
            id: 1,
            title: "Easy Setup"
        },
        {
            id: 2,
            title: "Company Branding"
        },
        {
            id: 3,
            title: "Enhanced Visibility"
        },
        {
            id: 4,
            title: "Professional Appearance"
        },
        {
            id: 5,
            title: "Security and Privacy"
        },
    ]

    return (
        <div className='w-11/12 mx-auto'>

            {/* adding company div */}
            {
                user && user?.role === "Employer" && (
                    <div className=' flex-col mt-2  max-w-4xl mx-auto border-b-4 border-gray-700 p-10 bg-gray-200 rounded-xl'>
                        <div className='flex justify-between'>
                            <p className=' text-gray-600 font-bold text-[20px]'>Want to hire great minds? </p>
                            <button
                                onClick={() => navigate("/create-company")}
                                className='  bg-white w-fit px-3 py-2 rounded-xl hover:bg-sky-500 font-medium hover:text-white'>CREATE COMPANY</button>
                        </div>

                        <div className=' flex flex-col mt-4'>
                            <p className=' text-[20px] font-bold text-sky-500'> KEY POINTS</p>
                            <ul>
                                {
                                    keypoints.map((point) => (
                                        <li key={point?.id}
                                            className=' font-medium text-gray-600'
                                        >
                                            {point?.id}
                                            {". "}
                                            {point?.title}
                                        </li>
                                    ))
                                }
                            </ul>
                        </div>
                    </div>
                )
            }


            <div className=' mt-5 flex flex-col items-center justify-center'>
                ALL COMPANIES

                <p>Data of all the company that are created to be shown here</p>
                {/* database se saari comapnies ka data lana hai aur idr show krna hai kon kon si company available hai */}
            </div>


        </div>
    )
}

export default Companies
