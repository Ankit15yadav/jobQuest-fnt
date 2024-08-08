import React, { useState } from 'react'
import { useSelector } from 'react-redux'
import { Link, matchPath, useLocation } from 'react-router-dom';
import { NavBarLinks } from '../../data/NavbarLinks';
import { ACCOUNT_TYPE } from '../../utils/constants';
import { CiBookmarkCheck } from "react-icons/ci";
import logo from "../../assets/logo/logo_half.png"
import ProfileDropDown from '../Auth/ProfileDropDown';


const Navbar = () => {

    const { token } = useSelector((state) => state.auth);
    const { user } = useSelector((state) => state.profile);
    const location = useLocation();

    const [loading, setLoading] = useState(false);

    const matchRoute = (route) => {
        return matchPath({ path: route }, location.pathname)
    }
    return (
        <div className='w-full flex h-14 items-center justify-center border-b-[1px] border-b-purple-100'>
            <div className=' w-11/12 mx-auto max-w-maxContent flex justify-between'>
                {/* logo of job quest */}
                <Link to={"/"}>
                    <img src={logo} alt='logo hai' width={160} height={32} />
                </Link>

                <nav className=' hidden md:block '>
                    <ul className=' flex gap-6 text-black'>
                        {
                            NavBarLinks.map((link, index) => (
                                <li key={index}
                                    className='flex items-center justify-center mt-1'
                                >
                                    <Link to={link?.path}>
                                        <p className={`${matchRoute(link?.path)
                                            ? "text-blue-500" : "text-black"
                                            } font-semibold`}>
                                            {link?.title}
                                        </p>
                                    </Link>
                                </li>
                            ))
                        }
                    </ul>
                </nav>

                {/* login and sign up buttons */}
                <div className=' flex gap-x-3 items-center justify-center'>
                    {
                        user && user.role !== ACCOUNT_TYPE.EMPLOYER &&
                        (
                            <Link to={"/dashboard/wishlist"}>
                                <CiBookmarkCheck className=' text-2xl text-blue-700' />
                            </Link>
                        )
                    }
                    {
                        token === null && (
                            <Link to={"/login"}
                                className="border border-blue-500 px-4 py-2 rounded text-blue-500 hover:bg-blue-500 hover:text-white transition duration-200"
                            >
                                Log in
                            </Link>
                        )
                    }
                    {token === null && (
                        <Link to={"/signup"}
                            className="border border-blue-500 px-4 py-2 rounded text-blue-500 hover:bg-blue-500 hover:text-white transition duration-200"
                        >
                            Sign up
                        </Link>
                    )}
                    {
                        token !== null && (
                            <ProfileDropDown />
                        )
                    }
                </div>
            </div>
        </div>
    )
}

export default Navbar
