import React, { useState } from 'react';
import { sidebarData } from '../../data/SidebarData';
import { useSelector } from 'react-redux';
import SidebarLink from './SidebarLink';
import { motion } from 'framer-motion';
import {
    TbLayoutSidebarLeftCollapse, TbLayoutSidebarLeftExpand
} from "react-icons/tb";

const Sidebar = () => {
    const { user } = useSelector((state) => state.profile);
    const [isSidebarVisible, setSidebarVisible] = useState(false);

    const toggleSidebar = () => {
        setSidebarVisible(!isSidebarVisible);
    };

    return (
        <div className="flex">
            {/* Sidebar */}
            <motion.div
                className={`h-full w-64 bg-gray-800 p-4 mt-20 rounded-xl fixed top-0 z-20 ${isSidebarVisible ? 'block' : 'hidden'} overflow-y-auto`}
                initial={{ x: '-100%' }}
                animate={{ x: isSidebarVisible ? 0 : '-100%' }}
                transition={{ type: 'spring', stiffness: 50 }}
            >
                <div className="space-y-2">
                    {sidebarData?.map((link) => {
                        if (link.type && user?.role !== link.type) return null;
                        return <SidebarLink key={link.id} link={link} />;
                    })}
                </div>
            </motion.div>

            {/* Content Area */}
            <div className={`flex-1 ${isSidebarVisible ? 'ml-64' : ''} transition-all duration-300`}>
                {/* Navbar with toggle button */}
                <div className="bg-transparent p-4 flex items-center">
                    <button
                        className="text-white p-2"
                        onClick={toggleSidebar}
                    >
                        {isSidebarVisible ? (
                            <TbLayoutSidebarLeftCollapse className='text-white w-[25px] h-[25px]' />
                        ) : (
                            <TbLayoutSidebarLeftExpand className='text-white w-[25px] h-[25px]' />
                        )}
                    </button>
                </div>

            </div>
        </div>
    );
};

export default Sidebar;
