import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { Card, Col, Container, ListGroup, ListGroupItem, Nav, Row } from 'react-bootstrap';
import { useForm } from 'react-hook-form';
import { useParams } from 'react-router';
import { NavLink } from 'react-router-dom';
import useAuth from '../../hooks/useAuth';

const Purchase = () => {
    const { user } = useAuth();

    const { bikeId } = useParams();
    const { register, handleSubmit, reset } = useForm();
    const [bikes, setBooking] = useState([]);

    useEffect(() => {
        fetch(`http://localhost:5000/bikes/${bikeId}`)
            .then(res => res.json())
            .then(data => setBooking(data))
    }, [bikeId]);

    const onSubmit = data => {
        console.log(data)
        axios.post('http://localhost:5000/bike', data)
            .then(res => {
                if (res.data.insertedId) {
                    alert('Purchase Added Successfully');
                    reset();
                }

            })
    };
    return (
        // this is purchase page
        <Container className="border border-danger rounded-2 my-5">
            <Row className="bg-danger">
                <Col>
                    <h1 className="fw-bold text-light p-3">Bike Details and Purchase</h1>
                </Col>
            </Row>
            <Row>
                {/* bike details */}
                <Col md={7}>
                    <img className="mt-5" src={`https://www.banglamotor.net/images/honda/honda-cbr150r-repsol-first1.jpg`} alt="" />
                    <Card className="m-3">
                        <Card.Header>Featured</Card.Header>
                        <ListGroup className="list-group-flush">
                            <ListGroupItem>Engine: </ListGroupItem>
                            <ListGroupItem>Top Speed: </ListGroupItem>
                            <ListGroupItem>Mileage: </ListGroupItem>
                            <ListGroupItem className="text-danger fw-bold">Price In BDT: </ListGroupItem>
                        </ListGroup>
                        <Card.Body className="text-start">
                            <Card.Text> <h3>Body:</h3>
                                <p className="text-secondary">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Tenetur ea consectetur accusamus illo fugiat reiciendis totam qui dolore rerum excepturi.</p>
                            </Card.Text>
                            <Card.Text> <h3>Tyre & Brakes:</h3>
                                <p className="text-secondary">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Tenetur ea consectetur accusamus illo fugiat reiciendis totam qui dolore rerum excepturi.</p>
                            </Card.Text>
                            <Card.Text> <h3>Engine Details:</h3>
                                <p className="text-secondary">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Tenetur ea consectetur accusamus illo fugiat reiciendis totam qui dolore rerum excepturi.</p>
                            </Card.Text>
                        </Card.Body>
                    </Card>
                </Col>
                {/* purchase form */}
                <Col md={5}>
                    <div className="container my-5">
                        <div className="row mx-auto">
                            <div className="border rounded-3 border-danger">
                                <h6 className="fs-4 fw-bold my-3">Add Your Purchase Information</h6>
                                <p>Please fill the form with all info</p>
                                <div>
                                    <form className="p-3" onSubmit={handleSubmit(onSubmit)}>
                                        <input className="form-control m-2" placeholder="Bike name" type="text" {...register("bike_name")} defaultValue={bikes?.name} />
                                        <input className="form-control m-2" placeholder="User name" type="text" {...register("user_name")} defaultValue={user?.displayName} />
                                        <input className="form-control m-2" placeholder="User email" type="text" {...register("user_email")} defaultValue={user?.email} />
                                        <input className="form-control m-2" placeholder="Phone number" type="text" {...register("user_number")} />
                                        <textarea className="form-control m-2" placeholder="Address" {...register("user_address")} />
                                        <input className="form-control m-2" placeholder="Bike price" type="number" {...register("user_name")} defaultValue={bikes?.price} />
                                        <NavLink to="/myOrder">
                                            <button type="button" className="btn btn-danger my-3 shadow">Purchase Now</button>
                                        </NavLink>
                                    </form>
                                </div>
                            </div>
                        </div>
                    </div>
                </Col>
            </Row>
        </Container>
    );
};

export default Purchase;