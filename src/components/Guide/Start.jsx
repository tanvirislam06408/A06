import React from 'react';
import start from '../../assets/rocket.png'
const Start = () => {
    return (
        <div className='flex px-6  flex-col shadow-xs justify-center items-center text-center space-y-3 border-2 rounded-2xl border-gray-200'>
            <div className='flex justify-end w-full'>
                <button className="btn    rounded-full bg-linear-to-r from-[#4F39F6] to-[#9514FA] font-bold text-white ">03</button>
            </div>
            <div className='py-10 flex justify-center items-center flex-col space-y-3.5'>
                <img src={start} alt="" />
                <h1>Start Creating</h1>
                <p>Download and start using your premium tools immediately.</p>
            </div>
        </div>
    );
};

export default Start;