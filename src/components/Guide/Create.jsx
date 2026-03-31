import React from 'react';
import manIcon from '../../assets/user.png'
const Create = () => {
    return (
        <div className='flex flex-col justify-center items-center space-y-3 border-2 rounded-2xl border-gray-200 px-6  text-center pt-3'>
            <div className='flex justify-end w-full'>
                        <button className="btn    rounded-full bg-linear-to-r from-[#4F39F6] to-[#9514FA] font-bold text-white ">01</button>
                    </div>
            <div className='py-10 flex justify-center items-center flex-col space-y-3.5'>
                <img src={manIcon} alt="" />
            <h1>Create Account</h1>
            <p>Sign up for free in seconds. No credit card required to get started.</p>
            </div>
        </div>
    );
};

export default Create;