import React, { use } from 'react';
import Card from './Card';

const SingleCard = ({ data,cart,setCart }) => {
    const initialData = use(data);

    return (
        <div className='container mx-auto'>
            <div className='grid lg:grid-cols-3 grid-cols-1 gap-5 md:grid-cols-2 mt-6 md:w-full px-5 md:px-16'>
                {
                    initialData.map(model => <Card cart={cart} setCart={setCart} key={model.id} model={model} />)
                }
            </div>
        </div>
    );
};

export default SingleCard;