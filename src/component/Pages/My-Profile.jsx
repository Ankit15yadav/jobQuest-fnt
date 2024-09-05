import React from 'react';
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';

const Profile = () => {
    const { user } = useSelector((state) => state.profile);
    const navigate = useNavigate();

    const userId = user._id;

    return (
        <div className='w-full max-w-7xl mx-auto text-gray-300 flex flex-col gap-y-10 px-4 sm:px-6 lg:px-8'>
            <h1 className='text-2xl sm:text-3xl lg:text-4xl font-bold'>{user.firstName}'s Profile</h1>

            {/* Profile Pic */}
            <div className='flex flex-col sm:flex-row items-start sm:items-center p-5 border border-teal-200 bg-transparent rounded-xl'>
                <div className='flex items-center gap-x-3 mb-4 sm:mb-0'>
                    <img
                        src={user.image}
                        className='h-16 w-16 sm:h-20 sm:w-20 md:h-24 md:w-24 lg:h-28 lg:w-28 aspect-square rounded-full'
                        alt='Profile'
                    />
                    <div className='flex flex-col gap-y-1'>
                        <p className='uppercase font-bold text-lg sm:text-xl md:text-2xl'>{user.firstName} {user.lastName}</p>
                        <p className='text-sm'>{user.email}</p>
                        <p className='text-sm'>{user.role}</p>
                    </div>
                </div>
                <div className='ml-auto'>
                    <button
                        className='border border-cyan-300 hover:bg-cyan-200 hover:text-gray-900 font-semibold text-gray-300 px-4 py-2 rounded-xl sm:px-6 sm:py-3'
                        onClick={() => navigate(`/dashboard/edit-my-Profile/${userId}`)}
                    >
                        Edit
                    </button>
                </div>
            </div>

            <div className='flex flex-col sm:flex-row justify-between text-gray-300 gap-y-6 sm:gap-x-6'>
                {/* Left Div */}
                <div className='p-4 w-full sm:w-1/2 border border-teal-200 bg-transparent rounded-xl flex flex-col justify-between gap-y-3'>
                    <p className='text-lg sm:text-xl md:text-2xl font-bold text-center'>About Yourself</p>
                    <p className='bg-rose-50 h-32 sm:h-48 md:h-56 text-gray-900 font-semibold rounded-2xl p-3'>{user.phoneNumber}</p>
                    <div className='flex justify-center'>
                        <button
                            className='border border-cyan-300 hover:bg-cyan-200 hover:text-gray-900 font-semibold text-gray-300 px-4 py-2 rounded-xl sm:px-6 sm:py-3'
                            onClick={() => navigate("/dashboard/edit-my-Profile")}
                        >
                            Edit
                        </button>
                    </div>
                </div>

                {/* Right Div */}
                <div className='p-4 w-full sm:w-1/2 border border-teal-200 bg-transparent rounded-xl flex flex-col justify-between gap-y-3'>
                    <p className='text-lg sm:text-xl md:text-2xl font-bold text-center'>Personal Details</p>
                    <div className='flex flex-col gap-y-2 font-bold'>
                        <p>First Name: <span className='text-sm text-gray-500'>{user.firstName}</span></p>
                        <p>Last Name: <span className='text-sm text-gray-500'>{user.lastName}</span></p>
                        <p>Email Address: <span className='text-sm text-gray-500'>{user.email}</span></p>
                        <p>Gender: <span className='text-sm text-gray-500'>{user?.additionalDetails?.gender || "null"}</span></p>
                        <p>Date Of Birth: <span className='text-sm text-gray-500'>{user?.additionalDetails?.dateOfBirth || "null"}</span></p>
                    </div>
                    <div className='flex justify-center'>
                        <button
                            className='border border-cyan-300 hover:bg-cyan-200 hover:text-gray-900 font-semibold text-gray-300 px-4 py-2 rounded-xl sm:px-6 sm:py-3'
                            onClick={() => navigate("/dashboard/edit-my-Profile")}
                        >
                            Edit
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Profile;
