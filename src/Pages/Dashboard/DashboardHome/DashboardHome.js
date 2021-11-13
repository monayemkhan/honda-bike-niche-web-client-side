import { faBars } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React, { useState } from 'react';
import { Button, Col, Container, ListGroup, Offcanvas, Row } from 'react-bootstrap';
import { BrowserRouter as Router, Switch, Route, Link, useRouteMatch } from 'react-router-dom';
import useAuth from '../../../hooks/useAuth';
import AdminRoute from '../../Shared/Login/AdminRoute/AdminRoute';
import PrivateRoute from '../../Shared/Login/PrivateRoute/PrivateRoute';
import AddReview from '../AddReview/AddReview';
import AddBike from '../AdminDashboard/AddBike/AddBike';
import MakeAdmin from '../AdminDashboard/MakeAdmin/MakeAdmin';
import ManageAllOrder from '../AdminDashboard/ManageAllOrder/ManageAllOrder';
import MyOrder from '../MyOrder/MyOrder';
import Pay from '../pay/Pay';


const DashboardHome = () => {
    const [show, setShow] = useState(false);
    const { user, logout, isLoading, admin } = useAuth();
    let { path, url } = useRouteMatch();
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    return (
        <>
            <Offcanvas className="bg-danger" show={show} onHide={handleClose}>
                <Offcanvas.Header closeButton>
                    {/* <Offcanvas.Title className=" fw-bold text-light">Menu</Offcanvas.Title> */}
                    {user?.displayName ?
                        <Offcanvas.Title className=" fw-bold text-light">
                            <h6 className="text-light">Name: {user?.displayName}</h6>
                            <p className="text-light">Email: {user?.email}</p>
                        </Offcanvas.Title>
                        :
                        ''
                    }
                </Offcanvas.Header>
                <Offcanvas.Body className="">
                    <ListGroup as="ul" className="my-5">
                        <Link to="/">
                            <ListGroup.Item className="bg-transparent border-bottom fw-bold text-light" as="li"  >
                                <Button className="text-light fw-bold fs-5" variant="transparent">
                                    Home
                                </Button>
                            </ListGroup.Item>
                        </Link>
                        <Link to={`${url}/myorder/${user?.email}`}>
                            <ListGroup.Item className="bg-transparent border-bottom fw-bold text-light" as="li"  >
                                <Button className="text-light fw-bold fs-5" variant="transparent">
                                    My Orders
                                </Button>
                            </ListGroup.Item>
                        </Link>
                        <Link to={`${url}/addReviews`}>
                            <ListGroup.Item className="bg-transparent border-bottom border-0  fw-bold text-light py-1 my-1" as="li"  >
                                <Button className="text-light fw-bold fs-5" variant="transparent">
                                    Add Reviews
                                </Button>
                            </ListGroup.Item>
                        </Link>
                        {admin &&
                            <Link to={`${url}/manageAllOrders`}>
                                <ListGroup.Item className="bg-transparent border-bottom border-0  fw-bold text-light py-1 my-1" as="li"  >
                                    <Button className="text-light fw-bold fs-5" variant="transparent">
                                        All Orders
                                    </Button>
                                </ListGroup.Item>
                            </Link>
                        }
                        {admin &&
                            <Link to={`${url}/addBike`}>
                                <ListGroup.Item className="bg-transparent border-bottom border-0  fw-bold text-light py-1 my-1" as="li"  >
                                    <Button className="text-light fw-bold fs-5" variant="transparent">
                                        Add Bike
                                    </Button>
                                </ListGroup.Item>
                            </Link>
                        }
                        {admin &&
                            <Link to={`${url}/makeAdmin`}>
                                <ListGroup.Item className="bg-transparent border-bottom border-0  fw-bold text-light py-1 my-1" as="li"  >
                                    <Button className="text-light fw-bold fs-5" variant="transparent">
                                        Make Admin
                                    </Button>
                                </ListGroup.Item>
                            </Link>
                        }
                        <Link to={`${url}/pay`}>
                            <ListGroup.Item className="bg-transparent border-bottom border-0  fw-bold text-light py-1 my-1" as="li"  >
                                <Button className="text-light fw-bold fs-5" variant="transparent">
                                    Payment Method
                                </Button>
                            </ListGroup.Item>
                        </Link>
                        <ListGroup.Item className="bg-transparent border-bottom border-0  fw-bold text-light py-1 my-1" as="li"  >
                            <Button onClick={logout} className="text-light fw-bold fs-5" variant="transparent" >Log Out</Button>
                        </ListGroup.Item>

                    </ListGroup>
                </Offcanvas.Body>
            </Offcanvas>

            <div className="p-3 text-start">
                <Button className="ms-5" variant="outline-dark" onClick={handleShow}>
                    Open Dashboard Menu <FontAwesomeIcon icon={faBars}></FontAwesomeIcon>
                </Button>
            </div>

            <Container fluid className="mt-">
                <Switch>
                    <PrivateRoute path={`${path}/myOrder/:email`}>
                        <MyOrder></MyOrder>
                    </PrivateRoute>
                    <Route path={`${path}/pay`}>
                        <Pay></Pay>
                    </Route>
                    <PrivateRoute path={`${path}/addreviews`}>
                        <AddReview></AddReview>
                    </PrivateRoute>
                    <Route path={`${path}/manageAllOrders`}>
                        <ManageAllOrder></ManageAllOrder>
                    </Route>
                    <PrivateRoute path={`${path}/addmobiles`}>
                        <AddBike></AddBike>
                    </PrivateRoute>
                    <AdminRoute path={`${path}/makeAdmin`}>
                        <MakeAdmin></MakeAdmin>
                    </AdminRoute>
                </Switch>
            </Container>
        </>
    );
};

export default DashboardHome;