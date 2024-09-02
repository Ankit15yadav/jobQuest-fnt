import React from 'react'
import { motion } from 'framer-motion'

const ConfirmationModal = ({ modalData }) => {

    // Animation variants for the modal container
    // const modalVariants = {
    //     hidden: { opacity: 0, y: -50, scale: 0.9 },
    //     visible: { opacity: 1, y: 0, scale: 1, transition: { duration: 0.2, ease: 'easeIn' } },
    //     exit: { opacity: 0, y: 50, scale: 0.9, transition: { duration: 0.2, ease: 'easeIn' } }
    // }

    return (
        <motion.div
            className="fixed inset-0 z-[1000] grid place-items-center overflow-auto bg-gray-900 bg-opacity-60 backdrop-blur-sm"
            initial="hidden"
            animate="visible"
            exit="exit"
        // variants={modalVariants}
        >
            <motion.div
                className="w-11/12 max-w-[350px] rounded-xl border border-gray-700 bg-gray-800 p-6 flex flex-col items-center shadow-2xl"

            >
                <p className="text-2xl font-semibold text-white">
                    {modalData?.text1}
                </p>
                <p className="mt-3 mb-5 text-gray-300 text-center">
                    {modalData?.text2}
                </p>
                <div className="flex items-center gap-x-4">
                    <motion.button
                        className="cursor-pointer rounded-md bg-gradient-to-r from-red-500 to-pink-600 hover:from-pink-600 hover:to-red-500 py-2 px-5 font-semibold text-white transition-all duration-200"
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                        onClick={modalData?.btn1Handler}
                    >
                        {modalData?.btn1Text}
                    </motion.button>
                    <motion.button
                        className="cursor-pointer rounded-md bg-gradient-to-r from-slate-600 to-indigo-600 hover:from-indigo-600 hover:to-slate-600 py-2 px-5 font-semibold text-white transition-all duration-200"
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                        onClick={modalData?.btn2Handler}
                    >
                        {modalData?.btn2Text}
                    </motion.button>
                </div>
            </motion.div>
        </motion.div>
    )
}

export default ConfirmationModal
