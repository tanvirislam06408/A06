import React, { useState } from 'react';
import Navbar from '../components/Navbar/Navbar';
import Count from '../components/Count/Count';
import ProductModels from '../components/ProductModels/ProductModels';
import Banner from '../components/Banner/Banner';
import Guide from '../components/Guide/Guide';
import Pricing from '../components/Pricing/Pricing';

const MainLayout = () => {
    const [cartCount, setCartCount] = useState(0);
    return (
        <div>
            <Navbar cartCount={cartCount} />
            <Banner />
            <Count />
            <ProductModels setCartCount={setCartCount} />
            <Guide/>
            <Pricing/>
        </div>
    );
};

export default MainLayout;