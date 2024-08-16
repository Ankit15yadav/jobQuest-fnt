import React from 'react'
import { useSelector } from 'react-redux'

const Profile = () => {
    const { user } = useSelector((state) => state.profile);
    // console.log(user)

    return (
        <div className='w-11/12 mx-auto text-gray-300 flex flex-col gap-y-10'>
            <h1 className='text-3xl font-bold' >{user.firstName}'s Profile</h1>
            {/* profile pic */}
            <div className='flex items-center p-5 bg-gray-800 rounded-xl'>
                <div className='flex flex-grow items-center gap-x-3'>
                    <img
                        src={user.image}
                        className='h-20 w-20 aspect-square rounded-full'
                        alt='Profile'
                    />
                    <div className='flex flex-col gap-y-1'>
                        <p className='uppercase font-bold'>{user.firstName} {user.lastName}</p>
                        <p className='text-sm'>{user.email}</p>
                        {/* <p>Account Created at : {user.createdAt}</p> */}
                        <p className='text-sm'>{user.role}</p>
                    </div>
                </div>
                <div className='ml-auto'>
                    <button className='bg-gray-500 font-semibold text-gray-300 px-6 py-2 rounded-xl '>Edit</button>
                </div>
            </div>

            <div className='flex justify-between text-gray-300'>
                {/* left div */}
                <div className=' p-4 w-[45%] bg-gray-800 rounded-xl flex flex-col justify-between gap-y-3 '>
                    <p className=' flex justify-center font-bold text-2xl'> About Yourself</p>
                    <p className=' bg-gray-500 h-[200px] rounded-2xl p-3'>{user.phoneNumber} </p>
                    <div className=' flex justify-center'>
                        <button className=' bg-gray-500 px-6 rounded-xl py-2 w-fit '>
                            Edit
                        </button>
                    </div>
                </div>
                {/* right div */}
                <div className='p-4 w-[45%] bg-gray-800 rounded-xl flex flex-col justify-between gap-y-3'>
                    <p className=' flex justify-center font-bold text-2xl'>Personal Details</p>
                    <div className=' flex flex-col gap-y-2 font-bold'>
                        <p className=''>First Name : <span className=' text-sm text-gray-500'> {user.firstName}</span> </p>
                        <p>Last Name :  <span className=' text-sm text-gray-500'>{user.lastName}</span> </p>
                        <p>Email Address : <span className=' text-sm text-gray-500'> {user.email}</span> </p>
                        <p>Gender : <span className=' text-sm text-gray-500'>{user?.additionalDetails?.gender ? user?.additionalDetails?.gender : "null"}</span> </p>
                        <p>Date Of Birth : <span className=' text-sm text-gray-500'>{user?.additionalDetails?.dateOfBirth ? user?.additionalDetails?.dateOfBirth : "null"}</span> </p>
                    </div>
                    <div className=' flex justify-center'>
                        <button className=' bg-gray-500 px-6 rounded-xl py-2 w-fit '>
                            Edit
                        </button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Profile
