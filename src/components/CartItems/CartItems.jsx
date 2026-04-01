import React from 'react';
import { CiShoppingCart } from 'react-icons/ci';
import { toast } from 'react-toastify';

const CartItems = ({cart,setCart}) => {

    const filteredCardData=(id)=>{
        const filteredCart=cart.filter(card=>card.id !== id);
        setCart(filteredCart);
        toast.error("Product Delete From Cart Successfully")
        
    }
    const totalSumOfCartProducts=cart.reduce((sum,item)=>sum+item.price,0);
    console.log(totalSumOfCartProducts);
    
    return (
        <div className='container mx-auto mb-5 border-gray-200 border-2 rounded-2xl py-10 mt-6 px-9'>
            <h1 className='text-2xl font-bold'>Your Cart</h1>
            
            {
                cart.length === 0 && <div className='flex mt-5 min-h-[30vh] flex-col justify-center items-center px-2 text-center space-y-3  py-10 border-2 border-gray-200 rounded-2xl'>
                <div className='text-5xl mt-3.5'>
                    <CiShoppingCart/>
                </div>
                <h1 className='text-2xl font-bold'>Your Cart Is Currently Empty</h1>
            </div>
            }
            <div className="space-y-3">

                {
                cart.map(c=>{
                    return  <div className='flex justify-between rounded-lg items-center bg-[#F9FAFC] shadow-xl py-3 px-5'>
                <div className='flex items-center gap-7'>
                    <span className='text-xl'>{c.icon}</span>
                    <div>
                        <h1 className='font-semibold text-2xl'>{c.name}</h1>
                        <p className='text-gray-500 font-medium mt-1.5'>${c.price}</p>
                    </div>
                </div>
                <div>
                    <p className='text-xl cursor-pointer text-red-500 font-medium' onClick={()=>{filteredCardData(c.id)}}>Remove</p>
                </div>
            </div>
                })

            }
            {

                cart.length > 0 && <>
                <div className="flex justify-between items-center mt-10">
                <h1>Total:</h1>
                <p className='font-bold text-xl'>${totalSumOfCartProducts}</p>
            </div>
            <button onClick={()=>{setCart([]),toast.success("Proceed to Checkout Successful")}} className='btn  btn-block rounded-full bg-linear-to-r from-[#4F39F6] to-[#9514FA] font-bold text-white py-6 mt-2.5'>Proceed to Checkout</button>
                </>
            }
            </div>
        </div>
    );
};

export default CartItems;