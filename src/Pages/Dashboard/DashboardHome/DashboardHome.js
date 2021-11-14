import { faBars } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React, { useState } from 'react';
import { Button, Container, ListGroup, Offcanvas } from 'react-bootstrap';
import { Switch, Route, Link, useRouteMatch } from 'react-router-dom';
import useAuth from '../../../hooks/useAuth';
import AdminRoute from '../../Shared/Login/AdminRoute/AdminRoute';
import PrivateRoute from '../../Shared/Login/PrivateRoute/PrivateRoute';
import AddReview from '../AddReview/AddReview';
import AddBike from '../AdminDashboard/AddBike/AddBike';
import MakeAdmin from '../AdminDashboard/MakeAdmin/MakeAdmin';
import ManageAllOrder from '../AdminDashboard/ManageAllOrder/ManageAllOrder';
import ManageBike from '../AdminDashboard/ManageBike/ManageBike';
import MyOrder from '../MyOrder/MyOrder';
import Pay from '../pay/Pay';
import DashHome from './DashHome/DashHome';


const DashboardHome = () => {
    const [show, setShow] = useState(false);
    const { user, logout, admin } = useAuth();
    let { path, url } = useRouteMatch();
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    return (
        <>
            <Offcanvas className="bg-danger" show={show} onHide={handleClose}>
                <Offcanvas.Header closeButton>
                    {user?.displayName ?
                        <Offcanvas.Title className=" fw-bold text-light">
                            <p className="text-light">{user?.displayName}</p>
                            <h6 className="text-light">{user?.email}</h6>
                        </Offcanvas.Title>
                        :
                        ''
                    }
                </Offcanvas.Header>
                <Offcanvas.Body className="">
                    <ListGroup as="ul" className="my-5 w-75 mx-auto  ">
                        <Link to="/">
                            <ListGroup.Item className="bg-transparent border-bottom text-light" as="li"  >
                                <Button className="text-light fw-bold fs-6" variant="transparent">
                                    Home
                                </Button>
                            </ListGroup.Item>
                        </Link>
                        <Link to={`${url}/myOrder/${user?.email}`}>
                            <ListGroup.Item className="bg-transparent border-bottom text-light" as="li"  >
                                <Button className="text-light fw-bold fs-6" variant="transparent">
                                    My Orders
                                </Button>
                            </ListGroup.Item>
                        </Link>
                        <Link to={`${url}/addReview`}>
                            <ListGroup.Item className="bg-transparent border-bottom border-0  fw-bold text-light py-1 my-1" as="li"  >
                                <Button className="text-light fw-bold fs-6" variant="transparent">
                                    Add Review
                                </Button>
                            </ListGroup.Item>
                        </Link>
                        <Link to={`${url}/pay`}>
                            <ListGroup.Item className="bg-transparent border-bottom border-0  fw-bold text-light py-1 my-1" as="li"  >
                                <Button className="text-light fw-bold fs-6" variant="transparent">
                                    Payment Method
                                </Button>
                            </ListGroup.Item>
                        </Link>
                        {admin &&
                            <Link to={`${url}/manageAllOrders`}>
                                <ListGroup.Item className="bg-transparent border-bottom border-0  fw-bold text-light py-1 my-1" as="li"  >
                                    <Button className="text-light fw-bold fs-6" variant="transparent">
                                        Manage All Order
                                    </Button>
                                </ListGroup.Item>
                            </Link>
                        }
                        {admin &&
                            <Link to={`${url}/addBike`}>
                                <ListGroup.Item className="bg-transparent border-bottom border-0  fw-bold text-light py-1 my-1" as="li"  >
                                    <Button className="text-light fw-bold fs-6" variant="transparent">
                                        Add Bike
                                    </Button>
                                </ListGroup.Item>
                            </Link>
                        }
                        {admin &&
                            <Link to={`${url}/makeAdmin`}>
                                <ListGroup.Item className="bg-transparent border-bottom border-0  fw-bold text-light py-1 my-1" as="li"  >
                                    <Button className="text-light fw-bold fs-6" variant="transparent">
                                        Make Admin
                                    </Button>
                                </ListGroup.Item>
                            </Link>
                        }
                        {admin &&
                            <Link to={`${url}/manageBike`}>
                                <ListGroup.Item className="bg-transparent border-bottom border-0  fw-bold text-light py-1 my-1" as="li"  >
                                    <Button className="text-light fw-bold fs-6" variant="transparent">
                                        Manage Bike
                                    </Button>
                                </ListGroup.Item>
                            </Link>
                        }
                        <ListGroup.Item className="bg-transparent border-bottom border-0  fw-bold text-light py-1 my-1" as="li"  >
                            <Button onClick={logout} className="text-light fw-bold fs-6" variant="transparent" >Log Out</Button>
                        </ListGroup.Item>
                    </ListGroup>
                </Offcanvas.Body>
            </Offcanvas>

            <div className=" mt-3">
                <div className="p-3 text-start">
                    <Button className="ms-sm-0 px-3" variant="outline-danger fw-bold" onClick={handleShow}>
                        Dashboard Menu <FontAwesomeIcon className="ms-3" icon={faBars}></FontAwesomeIcon>
                    </Button>
                </div>
            </div>

            <Container fluid className="p-0 m-0">
                <Switch>
                    <Route exact path={`${path}`}>
                        <DashHome></DashHome>
                    </Route>
                    <PrivateRoute path={`${path}/myOrder/:email`}>
                        <MyOrder></MyOrder>
                    </PrivateRoute>
                    <Route path={`${path}/pay`}>
                        <Pay></Pay>
                    </Route>
                    <Route path={`${path}/addReview`}>
                        <AddReview></AddReview>
                    </Route>
                    <Route path={`${path}/manageAllOrders`}>
                        <ManageAllOrder></ManageAllOrder>
                    </Route>
                    <PrivateRoute path={`${path}/addBike`}>
                        <AddBike></AddBike>
                    </PrivateRoute>
                    <AdminRoute path={`${path}/makeAdmin`}>
                        <MakeAdmin></MakeAdmin>
                    </AdminRoute>
                    <AdminRoute path={`${path}/manageBike`}>
                        <ManageBike></ManageBike>
                    </AdminRoute>
                </Switch>
            </Container>
        </>
    );
};

export default DashboardHome;