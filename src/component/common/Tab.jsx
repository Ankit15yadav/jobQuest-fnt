import React from 'react'

const Tab = ({ tabData, field, setField }) => {
    return (
        <div className=' flex p-1 gap-x-1'>
            {
                tabData?.map((tab) => (
                    <button
                        key={tab.id}
                        onClick={() => setField(tab.type)}
                        className={`${field === tab.type ? " bg-sky-400 text-white" : ""} py-2 px-4 rounded-full transition-all duration-200`}
                    >
                        {tab?.tabName}
                    </button>
                ))
            }
        </div>
    )
}

export default Tab
