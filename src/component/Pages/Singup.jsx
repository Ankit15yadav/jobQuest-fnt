import React, { useState } from 'react'
import { ACCOUNT_TYPE } from '../../utils/constants'
import { useNavigate } from 'react-router-dom'
import { useDispatch } from 'react-redux';
import Tab from '../common/Tab';

const Singup = () => {

    const navigate = useNavigate();
    const dispatch = useDispatch();

    const [accountType, setAccountType] = useState(ACCOUNT_TYPE.JOBSEEKER)

    const [formData, setFormData] = useState({
        firstName: "",
        lastName: "",
        email: "",
        password: "",
        confirmPassword: "",
    })

    const { firstName, lastName, email, password, confirmPassword } = formData;

    const tabData = [
        {
            id: 1,
            tabName: "Employer",
            type: ACCOUNT_TYPE.EMPLOYER,
        },
        {
            id: 2,
            tabName: "JobSeeker",
            type: ACCOUNT_TYPE.JOBSEEKER
        }
    ]

    return (

        <div className='w-11/12 mx-auto flex mt-4 gap-x-10'>
            {/* form */}
            <div>
                <Tab tabData={tabData} field={accountType} setField={setAccountType} />
                <form>
                    <label>

                    </label>
                </form>
            </div>

            {/* image */}
            <div>

            </div>
        </div>
    )
}

export default Singup
