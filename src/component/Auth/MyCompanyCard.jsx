import React, { useState } from 'react'
import { MdDelete, MdEdit } from "react-icons/md";
import ConfirmationModal from '../common/ConfirmationModal';
import { useDispatch, useSelector } from 'react-redux';
import { deleteCompany, getUserCompany } from '../../services/operations/CompanyAPI';
import { useParams } from 'react-router-dom';



const MyCompanyCard = ({ company, setCompanyData, userId }) => {

    const dispatch = useDispatch();
    const { token } = useSelector((state) => state.auth);
    const { user } = useSelector((state) => state.profile);
    const [confirmModal, setConfirmationModal] = useState(null);
    // const userId = useParams();

    const handleCompanyDelete = async (companyId) => {

        await deleteCompany({ companyId: companyId }, token);
        const result = await getUserCompany(token);
        if (result) {
            setCompanyData(result);
        }

        setConfirmationModal(null);
    }


    return (
        <div className='text-gray-500 flex p-4 items-center gap-x-2 border-b border-b-gray-300 rounded-xl space-y-4'>
            <img
                src={company.CompanyLogo}
                className=' w-20 h-20 aspect-square rounded-full'
            />
            <div className=' flex flex-col justify-center'>
                <p className=' font-bold text-[20px]  uppercase'>{company.name} {"-->"} <span className=' font-semibold text-[15px]'>{company.location}</span> </p>
                <p className=' text-sm'>{company.description} </p>
                <p className=' text-sm font-bold'>JobsCreated : {company.jobsCreated.length} </p>
            </div>

            <div className='ml-auto flex items-center gap-x-2'>
                <button className='bg-gray-500 font-semibold text-gray-300 px-2 py-2 rounded-xl '>
                    <MdEdit />
                </button>
                <button className='bg-gray-500 font-semibold text-gray-300 px-2 py-2 rounded-xl '>
                    <MdDelete
                        onClick={() => {
                            setConfirmationModal({
                                text1: "Are you Sure",
                                text2: "Your company will be deleted",
                                btn1Text: "Delete",
                                btn2Text: "Cancel",
                                btn1Handler: () => handleCompanyDelete(company._id),
                                btn2Handler: () => setConfirmationModal(null),
                            })
                        }}
                    />
                </button>
            </div>
            {confirmModal && <ConfirmationModal modalData={confirmModal} />}
        </div>

    )
}

export default MyCompanyCard
