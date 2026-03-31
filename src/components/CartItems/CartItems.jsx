import React from 'react';

const CartItems = () => {
    return (
        <div className='container mx-auto mb-5 border border-gray-400 rounded-2xl p-5'>
            <h1 className='text-2xl font-bold'>Your Cart</h1>
            <div className='flex justify-between rounded-lg items-center bg-[#F9FAFC] shadow-xl py-3 px-5'>
                <div>
                    <img src="" alt="" />
                    <div>
                        <h1 className='font-semibold text-2xl'>I Writing Pro</h1>
                        <p className='text-gray-500 font-medium'>$26</p>
                    </div>
                </div>
                <div>
                    <p className='text-xl text-red-500 font-medium'>Remove</p>
                </div>
            </div>
        </div>
    );
};

export default CartItems;