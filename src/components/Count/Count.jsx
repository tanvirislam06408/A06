import React from 'react';

const Count = () => {
    return (
        <div className='bg-linear-to-r from-[#4F39F6] to-[#9514FA] min-h-[20vh] flex items-center mt-18 '>
            <div className='container mx-auto flex flex-col md:flex-row space-y-3.5 py-5 md:py-0 justify-around items-center'>
                <div>
                    <h1 className='font-extrabold text-6xl text-white'>50K+</h1>
                    <p className='font-medium text-2xl text-white'>Active Users</p>
                </div>
                 
                <div>
                    <h1 className='font-extrabold text-6xl text-white'>200+</h1>
                    <p className='font-medium text-2xl text-white'>Premium Tools</p>
                </div>
                <div>
                    <h1 className='font-extrabold text-6xl text-white'>4.9</h1>
                    <p className='font-medium text-2xl text-white'>Rating</p>
                </div>
            </div>
        </div>
    );
};

export default Count;