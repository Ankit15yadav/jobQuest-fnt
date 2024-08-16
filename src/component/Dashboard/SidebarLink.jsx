import React from 'react';
import { useDispatch } from 'react-redux';
import { matchPath, NavLink, useLocation } from 'react-router-dom';
import { motion } from 'framer-motion';

const SidebarLink = ({ link }) => {
    const location = useLocation();
    const dispatch = useDispatch();

    const matchRoute = (route) => {
        return matchPath({ path: route }, location.pathname);
    };

    return (
        <NavLink
            to={link.path}
            className={`relative px-1 py-1 text-sm font-medium ${matchRoute(link.path)
                ? "bg-yellow-200 text-yellow-300"
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
