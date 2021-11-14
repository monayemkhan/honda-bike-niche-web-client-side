import React, { useEffect, useState } from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import Bike from '../Bike/Bike';

const Bikes = () => {
    const [bikes, setBike] = useState([]);

    useEffect(() => {
        fetch('http://localhost:5000/bikes/home')
            .then(res => res.json())
            .then(data => setBike(data))
    }, []);

    return (
        // this is bikes section
        <div>
            <Container className="my-5">
                <Row className="mb-4">
                    <Col>
                        <h2 className="text-uppercase fw-bold">Honda Bike Price In BD, 2021</h2>
                        <p className="text-secondary">The good news for Honda motorcycle users, fan-followers and well-wishers is that we have mentioned on this web page the current prices of Honda bikes or motorcycles in Bangladesh or BD, as well as the latest pictures and a brief description of each and every models which is currently available in Bangladesh.</p>
                    </Col>
                </Row>
                <Row className=" mx-auto">
                    {
                        bikes.map(bike => <Bike
                            key={bike._id}
                            bike={bike}
                        ></Bike>)
                    }
                </Row>
            </Container>
        </div>
    );
};

export default Bikes;