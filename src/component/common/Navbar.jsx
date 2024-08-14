import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import { Link, matchPath, useLocation } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { NavBarLinks } from '../../data/NavbarLinks';
import { ACCOUNT_TYPE } from '../../utils/constants';
import { CiBookmarkCheck } from 'react-icons/ci';
import { HiOutlineMenuAlt3, HiX } from 'react-icons/hi';
import logo from '../../assets/logo/logoo_half_bgr2.png';
import ProfileDropDown from "../Auth/ProfileDropDown"

const Navbar = () => {
    const { token } = useSelector((state) => state.auth);
    const { user } = useSelector((state) => state.profile);
    const location = useLocation();
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

    const matchRoute = (route) => matchPath({ path: route }, location.pathname);

    return (
        <div className='w-full flex h-16 items-center justify-center bg-gradient-to-r from-gray-700 via-gray-800 to-gray-700 shadow-lg'>
            <div className='w-11/12 mx-auto max-w-maxContent flex justify-between items-center'>
                {/* Logo */}
                <Link to='/'>
                    <motion.img
                        src={logo}
                        alt='logo'
                        width={160}
                        height={32}
                        className='hover:scale-105 transition-transform duration-300'
                    />
                </Link>

                {/* Mobile Menu Toggle Button */}
                <button
                    className='md:hidden text-3xl focus:outline-none text-white'
                    onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                >
                    {isMobileMenuOpen ? <HiX /> : <HiOutlineMenuAlt3 />}
                </button>

                {/* Desktop Navigation Links */}
                <nav className='hidden md:flex gap-6 text-white'>
                    {NavBarLinks.map((link, index) => (
                        <motion.li
                            key={index}
                            className='flex items-center justify-center mt-1'
                            whileHover={{ scale: 1.1 }}
                        >
                            <Link to={link.path}>
                                <p className={`${matchRoute(link.path) ? 'text-blue-400' : 'text-white'} font-semibold`}>
                                    {link.title}
                                </p>
                            </Link>
                        </motion.li>
                    ))}
                </nav>

                {/* Login, Sign Up, and Profile Dropdown */}
                <div className='hidden md:flex gap-x-3 items-center'>
                    {user && user.role !== ACCOUNT_TYPE.EMPLOYER && (
                        <Link to='/dashboard/wishlist'>
                            <CiBookmarkCheck className='text-2xl text-blue-400' />
                        </Link>
                    )}
                    {token === null ? (
                        <>
                            <Link
                                to='/login'
                                className='border border-blue-400 px-3 py-1 rounded text-blue-400 hover:bg-blue-400 hover:text-white transition duration-200'
                            >
                                Log in
                            </Link>
                            <Link
                                to='/signup'
                                className='border border-blue-400 px-3 py-1 rounded text-blue-400 hover:bg-blue-400 hover:text-white transition duration-200'
                            >
                                Sign up
                            </Link>
                        </>
                    ) : (
                        <ProfileDropDown />
                    )}
                </div>
            </div>

            {/* Mobile Menu */}
            <AnimatePresence>
                {isMobileMenuOpen && (
                    <motion.div
                        className='md:hidden absolute top-16 left-0 w-full bg-gray-900 shadow-lg z-10'
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: 'auto', opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                    >
                        <ul className='flex flex-col items-center gap-4 py-4 text-white'>
                            {NavBarLinks.map((link, index) => (
                                <li
                                    key={index}
                                    className='flex items-center justify-center mt-1'
                                    onClick={() => setIsMobileMenuOpen(false)}
                                >
                                    <Link to={link.path}>
                                        <p className={`${matchRoute(link.path) ? 'text-blue-400' : 'text-white'} font-semibold`}>
                                            {link.title}
                                        </p>
                                    </Link>
                                </li>
                            ))}
                            {user && user.role !== ACCOUNT_TYPE.EMPLOYER && (
                                <Link to='/dashboard/wishlist'>
                                    <CiBookmarkCheck className='text-2xl text-blue-400' />
                                </Link>
                            )}
                            {token === null ? (
                                <>
                                    <Link
                                        to='/login'
                                        className='border border-blue-400 px-3 py-1 rounded text-blue-400 hover:bg-blue-400 hover:text-white transition duration-200'
                                        onClick={() => setIsMobileMenuOpen(false)}
                                    >
                                        Log in
                                    </Link>
                                    <Link
                                        to='/signup'
                                        className='border border-blue-400 px-3 py-1 rounded text-blue-400 hover:bg-blue-400 hover:text-white transition duration-200'
                                        onClick={() => setIsMobileMenuOpen(false)}
                                    >
                                        Sign up
                                    </Link>
                                </>
                            ) : (
                                <ProfileDropDown />
                            )}
                        </ul>
                    </motion.div>
                )}
            </AnimatePresence>
        </div>
    );
};

export default Navbar;
