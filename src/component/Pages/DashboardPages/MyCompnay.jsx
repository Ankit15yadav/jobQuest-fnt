import React, { useEffect, useState } from 'react'
import { useSelector } from 'react-redux'
import { getUserCompany } from '../../../services/operations/CompanyAPI';

const MyCompnay = () => {

    const { user } = useSelector((state) => state.profile);
    const [companyData, setCompanyData] = useState([]);

    useEffect(() => {

        const getUsercompanies = async () => {
            const result = getUserCompany();
            if (result) {
                setCompanyData(result);
            }
            console.log("company Data", result);
        }

        getUsercompanies();
    }, []);

    return (
        <div>

        </div>
    )
}

export default MyCompnay
