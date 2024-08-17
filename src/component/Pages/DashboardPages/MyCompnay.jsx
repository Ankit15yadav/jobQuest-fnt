import React, { useEffect, useState } from 'react'
import { useSelector } from 'react-redux'
import { getUserCompany } from '../../../services/operations/CompanyAPI';
import MyCompanyCard from '../../Auth/MyCompanyCard';
import { useNavigate } from 'react-router-dom';

const MyCompnay = () => {

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
        <div className=' text-gray-400'>
            <p className=' text-3xl font-semibold'> Your Created Companies</p>
            <div>
                {
                    companyData.length > 0 ? (
                        companyData?.map((company, index) => (
                            <div key={index}>
                                <MyCompanyCard company={company} />

                            </div>
                        ))
                    ) :
                        (<div className=' flex justify-between mt-4 border-b border-b-gray-500 p-2'>

                            <p className='text-3xl font-semibold '>NO COMPANIES CREATED </p>
                            <button
                                className='bg-gray-600 px-3 py-2 rounded-xl '
                                onClick={() => navigate("/dashboard/createCompany")}
                            >
                                Create Company
                            </button>
                        </div>)

                }
            </div>
        </div>
    )
}

export default MyCompnay
