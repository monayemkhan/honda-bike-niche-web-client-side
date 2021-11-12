import React from 'react';
import { Button, Card, Col, ListGroup, ListGroupItem } from 'react-bootstrap';
import { NavLink } from 'react-router-dom';

const Bike = (props) => {
    const { _id, img, name, engine, speed, mileage, price } = props.bike;

    return (
        // this is bike section 
        <Col md={4}>
            {/* bike card */}
            <Card style={{ width: '18rem' }}>
                <Card.Img variant="top" src={img} />
                <Card.Header>{name}</Card.Header>
                <ListGroup className="list-group-flush">
                    <ListGroupItem>Engine: {engine}</ListGroupItem>
                    <ListGroupItem>Top Speed: {speed}</ListGroupItem>
                    <ListGroupItem>Mileage: {mileage}</ListGroupItem>
                    <ListGroupItem className="text-danger fw-bold">Price In BDT: {price}</ListGroupItem>
                </ListGroup>
                <Card.Body>
                    <NavLink className="text-light" to={`/purchase/${_id}`}>
                        <Button variant="danger">Purchase</Button>
                    </NavLink>
                </Card.Body>
            </Card>
        </Col>
    );
};

export default Bike;