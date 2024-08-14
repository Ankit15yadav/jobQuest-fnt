import React from 'react';
import backgroundImg from '../../assets/andrew-kliatskyi-2bfHAKhGn4g-unsplash.jpg';

const Home = () => {
    return (
        <div className=' mx-auto text-black text-center w-full'>
            {/* Section 1: Hero Section */}
            <div className='relative'>
                <img
                    src={backgroundImg}
                    alt='Background'
                    className='w-11/12 mx-auto mt-4 rounded-xl h-[500px] object-cover'
                />
                <div className='absolute top-1/3 left-[10%] md:left-[20%] lg:left-[30%] xl:left-[35%]'>
                    <p className='text-white text-4xl md:text-5xl lg:text-6xl font-extrabold drop-shadow-lg'>
                        FIND THE CAREER YOU DESERVE
                    </p>
                    <p className='mt-4 text-white text-lg md:text-xl lg:text-2xl border-b-2 border-rose-100 inline-block'>
                        Your job search starts and ends with us
                    </p>
                </div>
            </div>

            {/* Section 2: Featured Jobs */}
            <div className='w-11/12 max-w-7xl mx-auto mt-10'>
                <section>
                    <div className='flex flex-col items-center'>
                        <p className='text-gray-800 text-3xl md:text-4xl font-bold shadow-md'>
                            MOST AMAZING FEATURED JOBS LISTED
                        </p>
                        <p className='text-gray-600 text-lg md:text-xl lg:text-2xl w-10/12 md:w-9/12 lg:w-8/12 mt-4'>
                            Every single one of our jobs has some kind of flexibility option,
                            such as telecommuting, a part-time schedule, or a flexible or
                            flextime schedule.
                        </p>
                    </div>
                    {/* Placeholder for API job listings */}
                    <div className='mt-8'>
                        {/* Job listings will be displayed here */}
                    </div>
                </section>
            </div>
        </div>
    );
};

export default Home;
