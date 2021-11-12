import React from 'react';
import Banner from '../Banner/Banner';
import Bikes from '../Bikes/Bikes';
import Reviews from '../Reviews/Reviews';
import Safety from '../Safety/Safety';

const Home = () => {
    return (
        // added home section component
        <div>
            <Banner></Banner>
            <Bikes></Bikes>
            <Safety></Safety>
            <Reviews></Reviews>
        </div>
    );
};

export default Home;