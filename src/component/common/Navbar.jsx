import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import { Link, matchPath, useLocation } from 'react-router-dom';
import { NavBarLinks } from '../../data/NavbarLinks';
import { ACCOUNT_TYPE } from '../../utils/constants';
import { CiBookmarkCheck } from 'react-icons/ci';
import { HiOutlineMenuAlt3, HiX } from 'react-icons/hi'; // Import menu icons
import logo from '../../assets/logo/logoo_half_bgr2.png';
import ProfileDropDown from '../Auth/ProfileDropDown';

const Navbar = () => {
    const { token } = useSelector((state) => state.auth);
    const { user } = useSelector((state) => state.profile);
    const location = useLocation();
    const [loading, setLoading] = useState(false);

    // State to manage mobile menu toggle
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

    const matchRoute = (route) => {
        return matchPath({ path: route }, location.pathname);
    };

    return (
        <div className='w-full flex h-14 items-center justify-center border-b-[1px] border-b-purple-100'>
            <div className='w-11/12 mx-auto max-w-maxContent flex justify-between items-center'>
                {/* Logo of job quest */}
                <Link to={'/'}>
                    <img src={logo} alt='logo hai' width={160} height={32} />
                </Link>

                {/* Mobile Menu Toggle Button */}
                <button
                    className='md:hidden text-2xl focus:outline-none'
                    onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                >
                    {isMobileMenuOpen ? <HiX /> : <HiOutlineMenuAlt3 />}
                </button>

                {/* Navigation Links */}
                <nav className='hidden md:block'>
                    <ul className='flex gap-6 text-black'>
                        {NavBarLinks.map((link, index) => (
                            <li
                                key={index}
                                className='flex items-center justify-center mt-1'
                            >
                                <Link to={link?.path}>
                                    <p
                                        className={`${matchRoute(link?.path)
                                            ? 'text-blue-500'
                                            : 'text-black'
                                            } font-semibold`}
                                    >
                                        {link?.title}
                                    </p>
                                </Link>
                            </li>
                        ))}
                    </ul>
                </nav>

                {/* Login and Sign Up Buttons */}
                <div className='hidden md:flex gap-x-3 items-center justify-center'>
                    {user && user.role !== ACCOUNT_TYPE.EMPLOYER && (
                        <Link to={'/dashboard/wishlist'}>
                            <CiBookmarkCheck className='text-2xl text-blue-700' />
                        </Link>
                    )}
                    {token === null && (
                        <Link
                            to={'/login'}
                            className='border border-blue-500 px-3 py-1 rounded text-blue-500 hover:bg-blue-500 hover:text-white transition duration-200'
                        >
                            Log in
                        </Link>
                    )}
                    {token === null && (
                        <Link
                            to={'/signup'}
                            className='border border-blue-500 px-3 py-1 rounded text-blue-500 hover:bg-blue-500 hover:text-white transition duration-200'
                        >
                            Sign up
                        </Link>
                    )}
                    {token !== null && <ProfileDropDown />}
                </div>
            </div>

            {/* Mobile Menu */}
            {isMobileMenuOpen && (
                <div className='md:hidden absolute top-14 left-0 w-full bg-white shadow-lg z-10'>
                    <ul className='flex flex-col items-center gap-4 py-4'>
                        {NavBarLinks.map((link, index) => (
                            <li
                                key={index}
                                className='flex items-center justify-center mt-1'
                                onClick={() => setIsMobileMenuOpen(false)}
                            >
                                <Link to={link?.path}>
                                    <p
                                        className={`${matchRoute(link?.path)
                                            ? 'text-blue-500'
                                            : 'text-black'
                                            } font-semibold`}
                                    >
                                        {link?.title}
                                    </p>
                                </Link>
                            </li>
                        ))}
                        {user && user.role !== ACCOUNT_TYPE.EMPLOYER && (
                            <Link to={'/dashboard/wishlist'}>
                                <CiBookmarkCheck className='text-2xl text-blue-700' />
                            </Link>
                        )}
                        <div className=' lg: flex lg:flex-col xl:flex xl:flex-col gap-x-2 '>
                            {token === null && (
                                <Link
                                    to={'/login'}
                                    className='border border-blue-500 px-2 py-1 rounded text-blue-500 hover:bg-blue-500 hover:text-white transition duration-200'
                                    onClick={() => setIsMobileMenuOpen(false)}
                                >
                                    Log in
                                </Link>
                            )}
                            {token === null && (
                                <Link
                                    to={'/signup'}
                                    className='border border-blue-500 px-4 py-2 rounded text-blue-500 hover:bg-blue-500 hover:text-white transition duration-200'
                                    onClick={() => setIsMobileMenuOpen(false)}
                                >
                                    Sign up
                                </Link>
                            )}
                        </div>
                        {token !== null && <ProfileDropDown />}
                    </ul>
                </div>
            )}
        </div>
    );
};

export default Navbar;
