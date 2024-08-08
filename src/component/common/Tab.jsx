import React from 'react';

const Tab = ({ tabData, field, setField }) => {
    return (
        <div className="flex flex-wrap gap-2 md:gap-4 p-1">
            {tabData?.map((tab) => (
                <button
                    key={tab.id}
                    onClick={() => setField(tab.type)}
                    className={`${field === tab.type ? 'bg-sky-400 text-white' : 'bg-gray-200 text-black'
                        } py-2 px-4 rounded-full transition-all duration-300 ease-in-out transform active:scale-95 focus:outline-none focus:ring-2 focus:ring-sky-400`}
                >
                    {tab?.tabName}
                </button>
            ))}
        </div>
    );
};

export default Tab;
