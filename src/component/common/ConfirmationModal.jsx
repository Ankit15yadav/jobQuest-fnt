import React from 'react'

const ConfirmationModal = ({ modalData }) => {
    return (
        <div className="fixed inset-0 z-[1000] !mt-0 grid place-items-center overflow-auto bg-gray-900 bg-opacity-10 backdrop-blur-sm">
            <div className="w-11/12 max-w-[350px] rounded-xl border-4 border-gray-200 bg-gray-400 p-6 flex flex-col items-center">
                <p className="text-2xl font-semibold text-gray-700">
                    {modalData?.text1}
                </p>
                <p className="mt-3 mb-5 text-gray-700">
                    {modalData?.text2}
                </p>
                <div className="flex items-center gap-x-4">


                    <button
                        className="cursor-pointer rounded-md bg-red-500 py-[8px] px-[20px] font-semibold text-gray-100"
                        onClick={modalData?.btn1Handler}
                    >
                        {modalData?.btn1Text}
                    </button>

                    <button
                        className="cursor-pointer rounded-md bg-slate-700 py-[8px] px-[20px] font-semibold text-gray-100"
                        onClick={modalData?.btn2Handler}
                    >
                        {modalData?.btn2Text}
                    </button>
                </div>
            </div>
        </div>
    )
}

export default ConfirmationModal
