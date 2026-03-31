import React from 'react';
import Navbar from '../components/Navbar/Navbar';
import Count from '../components/Count/Count';
import ProductModels from '../components/ProductModels/ProductModels';
import Banner from '../components/Banner/Banner';

const MainLayout = () => {
    return (
        <div>
            <Navbar/>
            <Banner/>
            <Count/>
            <ProductModels/>
        </div>
    );
};

export default MainLayout;