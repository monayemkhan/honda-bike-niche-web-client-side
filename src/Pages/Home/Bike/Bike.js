import React from 'react';
import { Button, Card, ListGroup, ListGroupItem } from 'react-bootstrap';
import { NavLink } from 'react-router-dom';

const Bike = () => {

    return (
        <div>
            <Card style={{ width: '18rem' }}>
                <Card.Img variant="top" src={`https://www.banglamotor.net/images/honda/honda-cbr150r-repsol-first1.jpg`} />
                <Card.Header>Featured</Card.Header>
                <ListGroup className="list-group-flush">
                    <ListGroupItem>Engine: </ListGroupItem>
                    <ListGroupItem>Top Speed: </ListGroupItem>
                    <ListGroupItem>Mileage: </ListGroupItem>
                    <ListGroupItem className="text-danger fw-bold">Price In BDT: </ListGroupItem>
                </ListGroup>
                <Card.Body>
                    <NavLink className="text-light" to="/productDetails">
                        <Button variant="danger">More details</Button>
                    </NavLink>
                </Card.Body>
            </Card>
        </div>
    );
};

export default Bike;