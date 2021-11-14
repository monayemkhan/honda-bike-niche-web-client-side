import React from 'react';
import { Spinner } from 'react-bootstrap';
import useAuth from '../../../hooks/useAuth';
import Banner from '../Banner/Banner';
import Bikes from '../Bikes/Bikes';
import Reviews from '../Reviews/Reviews';
import Safety from '../Safety/Safety';

const Home = () => {
    const { isLoading } = useAuth();
    return (
        // added home section component
        <div>
            {isLoading && <Spinner className="d-block mx-auto my-3" animation="border" variant="danger" />}
            <Banner></Banner>
            <Bikes></Bikes>
            <Safety></Safety>
            <Reviews></Reviews>
        </div>
    );
};

export default Home;