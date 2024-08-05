import React from 'react'
import backgroundImg from "../../assets/logo/background_image_home.jpg"

const Home = () => {
    return (
        <div className='text-black text-2xl text-center w-full'>
            {/* section 1 */}
            <div className='relative'>
                <img src={backgroundImg} alt='bgimage'
                    className='w-full min-h-max'
                />
                <div className='absolute top-48 left-80'>
                    <p className=' text-3xl font-bold'>FIND THE CARRER YOU DESERVE</p>
                    <p className=' text-[16px] flex justify-start border-b-2 border-b-rose-100'>Your job search starts and end with us</p>
                </div>
            </div>
            {/* section 2 */}
            <div className=' w-11/12 max-w-maxContent mx-auto '>
                <section>
                    <div className='flex flex-col items-center justify-center'>
                        <p className=' text-white text-3xl font-bold mt-3 shadow-md'>MOST AMAZING FEATURED JOBS LISTED</p>
                        <p className='text-black text-[18px] w-[800px] mt-3'>Every single one our jobs has some king of flexibility option. Such as telecommuting , a part time schedule or a flexible or flextime schedule</p>
                    </div>
                    {/* api call se created jobs show krne hai */}
                </section>


            </div>

        </div>
    )
}

export default Home
