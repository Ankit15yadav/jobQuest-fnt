import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { matchPath, NavLink, useLocation } from 'react-router-dom';
import { motion } from 'framer-motion';

const SidebarLink = ({ link }) => {
    const location = useLocation();
    const dispatch = useDispatch();
    const { user } = useSelector((state) => state.profile);

    const matchRoute = (route) => {
        return matchPath({ path: route }, location.pathname);
    };

    return (
        <NavLink
            to={link.name === "My Companies" ? `${`/dashboard/myCompany/${user._id}`}` : `${link.path}`}
            className={`px-1 py-2 flex flex-col  text-sm font-medium ${matchRoute(link.path)
                ? "bg-gray-700 text-yellow-300 p-2 rounded-lg"
                : "bg-opacity-0 text-white"
                } transition-all duration-200`}
        >
            <div className="flex items-center gap-x-2">
                <motion.span
                    className={`inline-block h-full   bg-yellow-100 ${matchRoute(link.path) ? "opacity-100" : "opacity-0"
                        }`}
                    initial={{ opacity: 0 }}
                    animate={{ opacity: matchRoute(link.path) ? 1 : 0 }}
                    transition={{ duration: 0.2 }}
                ></motion.span>
                <span>{link.name}</span>
            </div>

        </NavLink>

    );
};

export default SidebarLink;
