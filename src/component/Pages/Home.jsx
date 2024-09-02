import React from 'react';
import backgroundImg from '../../assets/logo/bright-light-black-background_23-2148132725.avif';

const Home = () => {
    return (
        <div className=' mx-auto text-black text-center w-full'>
            {/* Section 1: Hero Section */}
            <div className='relative'>
                <img
                    src={backgroundImg}
                    alt='Background'
                    className='w-full mx-auto mt-4 max-h-screen object-cover -z-50'
                />
                <div className='absolute top-1/3 left-[10%] md:left-[20%] lg:left-[30%] xl:left-[35%]'>
                    <p className='text-gray-200 text-4xl md:text-5xl lg:text-5xl font-extrabold drop-shadow-lg'>
                        FIND THE <span className=' italic text-5xl font-cursive text-teal-400 '>CARRER</span> YOU DESERVE
                    </p>
                    <p className='mt-4  text-lg font-cursive md:text-2xl lg:text-4xl text-cyan-200 border-b-2 border-teal-200 inline-block'>
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
