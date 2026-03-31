import React, { use } from 'react';
import Card from './Card';

const SingleCard = ({ data }) => {
    const initialData = use(data);

    return (
        <div className='container mx-auto'>
            <div className='grid lg:grid-cols-3 grid-cols-1 gap-5 mt-3.5 md:grid-cols-2 mt-6 md:w-full px-16'>
                {
                    initialData.map(model => <Card key={model.id} model={model} />)
                }
            </div>
        </div>
    );
};

export default SingleCard;