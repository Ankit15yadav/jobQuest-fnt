import React, { useRef, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Link, useNavigate } from 'react-router-dom';
import { AiOutlineCaretDown } from "react-icons/ai"
import { logout } from "../../services/operations/authAPI"
import useOnClickOutside from '../../hooks/useOnClickOutside';

const ProfileDropDown = () => {

    const { user } = useSelector((state) => state.profile);
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const [open, setOpen] = useState(false);
    const ref = useRef(null);

    useOnClickOutside(ref, () => setOpen(false));

    if (!user) return null



    return (
        <button className='relative' onClick={() => setOpen(true)}>
            <div className='flex items-center gap-x-1'>
                <img src={user?.image}
                    alt={user?.firstName}
                    className=' aspect-square w-[30px] rounded-full object-cover'
                />
                <AiOutlineCaretDown className=' text-sm' />
            </div>
            {
                open && (
                    <div
                        onClick={(e) => e.stopPropagation()}
                        ref={ref}
                        className=' z-10 absolute w-fit py-2 px-3 rounded-xl  bg-gray-800 -right-[15px] mt-1 flex flex-col gap-y-2 border-yellow-100 border'>
                        <Link to={"/dashboard/my-profile"}
                            className='font-semibold'
                            onClick={() => setOpen(false)}
                        >

                            < p className=' '> Dashboard </p>
                        </Link>
                        <div
                            className=' font-semibold'
                            onClick={() => {
                                dispatch(logout(navigate));
                                setOpen(false);
                            }}
                        >
                            Logout
                        </div>
                    </div>
                )
            }
        </button>
    )
}

export default ProfileDropDown
