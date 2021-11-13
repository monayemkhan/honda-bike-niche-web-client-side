import React, { useState } from 'react';
import { Col, Container, ListGroup, Row } from 'react-bootstrap';
import AddReview from '../AddReview/AddReview';
import AddBike from '../AdminDashboard/AddBike/AddBike';
import MakeAdmin from '../AdminDashboard/MakeAdmin/MakeAdmin';
import ManageAllOrder from '../AdminDashboard/ManageAllOrder/ManageAllOrder';
import MyOrder from '../MyOrder/MyOrder';

// http://localhost:5000/
const DashboardHome = () => {
    const [control, setControl] = useState("allorders");

    return (
        <>
            <Container fluid className="bg-danger">
                <Row>
                    <Col className="text-center text-light py-2">
                        <h2 className="text-uppercase fw-bold">DahsBoard</h2>
                    </Col>
                </Row>
            </Container>
            <Container fluid className="mt-">
                <Row className="row ">
                    <Col className="col-md-3 bg-dark">
                        <div className=" p-1">
                            <div className="my-3 mx-5">
                                {/* list item */}
                                <ListGroup as="ul">
                                    <ListGroup.Item as="li" onClick={() => setControl("myOrder")}>
                                        My Orders
                                    </ListGroup.Item>
                                    <ListGroup.Item as="li" onClick={() => setControl("addReview")}>
                                        Add Review
                                    </ListGroup.Item>
                                    <ListGroup.Item as="li" onClick={() => setControl("manageAllOrder")} >
                                        Manage All Order
                                    </ListGroup.Item>
                                    <ListGroup.Item as="li" onClick={() => setControl("addBike")} >
                                        Add Bike
                                    </ListGroup.Item>
                                    <ListGroup.Item as="li" onClick={() => setControl("makeAdmin")} >
                                        Make Admin
                                    </ListGroup.Item>
                                </ListGroup>
                            </div>
                        </div>
                    </Col>

                    {/* show the data */}
                    <div className="col-md-9 text-center text-center">
                        {control === "myOrder" && <MyOrder></MyOrder>}
                        {control === "addReview" && <AddReview></AddReview>}
                        {control === "manageAllOrder" && <ManageAllOrder></ManageAllOrder>}
                        {control === "addBike" && <AddBike></AddBike>}
                        {control === "makeAdmin" && <MakeAdmin></MakeAdmin>}
                    </div>
                </Row>
            </Container>
        </>
    );
};

export default DashboardHome;