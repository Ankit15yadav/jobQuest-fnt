import React, { useState } from 'react'
import { useSelector } from 'react-redux'
import { Link, useLocation } from 'react-router-dom';
import { NavBarLinks } from '../../data/NavbarLinks';
import { ACCOUNT_TYPE } from '../../utils/constants';
import { CiBookmarkCheck } from "react-icons/ci";
import logo from "../../assets/logo/logo_half.png"


const Navbar = () => {

    const { token } = useSelector((state) => state.auth);
    const { user } = useSelector((state) => state.profile);
    const location = useLocation();

    const [loading, setLoading] = useState(false);

    return (
        <div className='w-full flex h-14 items-center justify-center border-b-[1px] border-b-purple-100'>
            <div className=' w-11/12 mx-auto max-w-maxContent flex justify-between'>
                {/* logo of job quest */}
                <Link to={"/"}>
                    <img src={logo} alt='logo hai' width={160} height={32} />
                </Link>

                <nav className=' hidden md:block'>
                    <ul className=' flex gap-6 text-black'>
                        {
                            NavBarLinks.map((link, index) => (
                                <li key={index}>
                                    <Link to={link?.path}>
                                        {link.title}
                                    </Link>
                                </li>
                            ))
                        }
                    </ul>
                </nav>

                {/* login and sign up buttons */}
                <div className=' flex gap-x-3'>
                    {
                        user && user.accounttype !== ACCOUNT_TYPE.EMPLOYER &&
                        (
                            <Link to={"/dashboard/wishlist"}>
                                <CiBookmarkCheck className=' text-2xl text-blue-700' />
                            </Link>
                        )
                    }
                    {
                        token === null && (
                            <Link to={"/login"}>
                                Log in
                            </Link>
                        )
                    }
                    {token === null && (
                        <Link to={"/signup"}>
                            Sign up
                        </Link>
                    )}
                </div>
            </div>
        </div>
    )
}

export default Navbar
