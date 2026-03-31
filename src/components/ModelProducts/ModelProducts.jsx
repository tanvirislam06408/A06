import React, { Suspense } from 'react';
import Cards from '../ProductCard/Cards'

const modelPromise=async()=>{
    const res=await fetch('models.json');
    const data=await res.json();
    return data;
}
const data = modelPromise();

const ModelProducts = () => {
    return (
        <div>
            <Suspense fallback={<p>loading..</p>}>
                <Cards data={data}/>
            </Suspense>
        </div>
    );
};

export default ModelProducts;