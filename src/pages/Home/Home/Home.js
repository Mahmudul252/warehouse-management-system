import React from 'react';
import Footer from '../../shared/Footer/Footer';
import AdvancedFeatures from '../AdvancedFeatures/AdvancedFeatures';
import Items from '../Items/Items';
import LearnMore from '../LearnMore/LearnMore';
import Slider from '../Slider/Slider';

const Home = () => {
    return (
        <div>
            <Slider></Slider>
            <div className="container mt-5">
                <Items></Items>
            </div>
            <LearnMore></LearnMore>
            <AdvancedFeatures></AdvancedFeatures>
            <Footer></Footer>
        </div>
    );
};

export default Home;