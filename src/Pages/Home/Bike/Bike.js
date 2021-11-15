import React from 'react';
import { Button, Card, Col, ListGroup, ListGroupItem } from 'react-bootstrap';
import { NavLink } from 'react-router-dom';

const Bike = (props) => {
    const { _id, img, name, engine, speed, mileage, price } = props.bike;

    return (
        // this is bike component
        <Col md={4} className="my-3">
            {/* bike card */}
            <Card >
                <Card.Img variant="top" src={img} />
                <Card.Header><span className="fw-bold text-danger">{name}</span></Card.Header>
                <ListGroup className="list-group-flush">
                    <ListGroupItem><span className="fw-bold">Engine : </span> {engine}</ListGroupItem>
                    <ListGroupItem><span className="fw-bold">Top Speed : </span> {speed}</ListGroupItem>
                    <ListGroupItem><span className="fw-bold">Mileage : </span> {mileage}</ListGroupItem>
                    <ListGroupItem className="text-danger"><span className="fw-bold">Price In BDT : {price} ৳</span></ListGroupItem>
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