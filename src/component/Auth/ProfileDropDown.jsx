import React, { useRef, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Link, useNavigate } from 'react-router-dom';
import { AiOutlineCaretDown } from "react-icons/ai"
import { logout } from "../../services/operations/authAPI"
import useOnClickOutside from '../../hooks/useOnClickOutside';
import ConfirmationModal from '../common/ConfirmationModal';
import { motion, AnimatePresence } from "framer-motion";

const ProfileDropDown = () => {

    const { user } = useSelector((state) => state.profile);
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const [confirmModal, setConfirmModal] = useState(null);
    const [open, setOpen] = useState(false);
    const ref = useRef(null);

    useOnClickOutside(ref, () => setOpen(false));

    if (!user) return null;

    return (
        <div className='relative'>
            <button className='flex items-center gap-x-2 focus:outline-none' onClick={() => setOpen(!open)}>
                <img
                    src={user?.image}
                    alt={user?.firstName}
                    className='aspect-square w-[30px] rounded-full object-cover'
                />
                <AiOutlineCaretDown className='text-sm text-gray-400' />
            </button>

            <AnimatePresence>
                {open && (
                    <motion.div
                        initial={{ opacity: 0, y: -10 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -10 }}
                        onClick={(e) => e.stopPropagation()}
                        ref={ref}
                        className='z-10 absolute w-fit py-2 px-4 rounded-lg bg-gray-800 shadow-lg right-0 mt-2 flex flex-col gap-y-2 border border-gray-700'
                    >
                        <Link
                            to={"/dashboard/my-profile"}
                            className='font-semibold text-gray-300 hover:text-white transition-colors duration-200'
                            onClick={() => setOpen(false)}
                        >
                            Dashboard
                        </Link>
                        <div
                            className='font-semibold text-gray-300 hover:text-red-500 transition-colors duration-200 cursor-pointer'
                            onClick={() => {
                                setConfirmModal({
                                    text1: "Are You Sure?",
                                    text2: "You will be logged out",
                                    btn1Text: "Logout",
                                    btn2Text: "Cancel",
                                    btn1Handler: () => dispatch(logout(navigate)),
                                    btn2Handler: () => setConfirmModal(null)
                                })
                                setOpen(false);
                            }}
                        >
                            Logout
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>

            {confirmModal && <ConfirmationModal modalData={confirmModal} />}
        </div>
    )
}

export default ProfileDropDown;
