import React from 'react';
import boxIcon from '../../assets/package.png'
const Choice = () => {
    return (
        <div className='flex flex-col justify-center items-center space-y-3 border-2 rounded-2xl border-gray-200 px-6  text-center'>
                    <div className='flex justify-end w-full'>
                        <button className="btn    rounded-full bg-linear-to-r from-[#4F39F6] to-[#9514FA] font-bold text-white ">02</button>
                    </div>
                    <div className='py-10 flex justify-center items-center flex-col space-y-3.5'>
                        <img src={boxIcon} alt="" />
                    <h1>Choose Products</h1>
                    <p>Browse our catalog and select the tools that fit your needs.</p>
                    </div>
                </div>
    );
};

export default Choice;