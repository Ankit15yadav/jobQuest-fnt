import React, { useState } from 'react';
import { sidebarData } from '../../data/SidebarData';
import { useSelector } from 'react-redux';
import SidebarLink from './SidebarLink';
import { motion } from 'framer-motion';

const Sidebar = () => {
    const { user } = useSelector((state) => state.profile);
    const [isSidebarVisible, setSidebarVisible] = useState(false);

    const toggleSidebar = () => {
        setSidebarVisible(!isSidebarVisible);
    };

    return (
        <>
            {/* Navbar with toggle button */}
            <div className="fixed top-left-0 w-full bg-gray-900 p-4 flex items-center">
                <button
                    className="text-white p-2"
                    onClick={toggleSidebar}
                >
                    {isSidebarVisible ? 'Close' : 'Menu'}
                </button>
            </div>

            {/* Sidebar */}
            {isSidebarVisible && (
                <motion.div
                    className="fixed left-0 h-full w-64 bg-gray-800 p-4"
                    initial={{ x: '-100%' }}
                    animate={{ x: 0 }}
                    transition={{ type: 'spring', stiffness: 50 }}
                >
                    <div className="space-y-2">
                        {sidebarData?.map((link) => {
                            if (link.type && user?.role !== link.type) return null;
                            return <SidebarLink key={link.id} link={link} />;
                        })}
                    </div>
                </motion.div>
            )}
        </>
    );
};

export default Sidebar;
