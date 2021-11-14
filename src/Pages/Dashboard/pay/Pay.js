import React from 'react';
import { faCcJcb, faCcMastercard, faCcPaypal, faCcVisa } from '@fortawesome/free-brands-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Container, Row, Col } from 'react-bootstrap';
import { NavLink } from 'react-router-dom';

const Pay = () => {

    return (
        // payment component
        <>
            <Container className="border rounded-3 border-danger shadow-lg my-5">
                <Row className="border rounded-3 border-danger shadow-lg">
                    <h4 className="text-uppercase fw-bold mb-3 py-3 bg-danger text-light">Payment method</h4>
                    <Row className="my-5">
                        <Col>
                            <NavLink className=" me-2 text-danger fs-1" to="/*"><FontAwesomeIcon icon={faCcVisa} /></NavLink>
                            <NavLink className=" me-2 text-danger fs-1" to="/*"><FontAwesomeIcon icon={faCcPaypal} /></NavLink>
                            <NavLink className=" me-2 text-danger fs-1" to="/*"><FontAwesomeIcon icon={faCcJcb} /></NavLink>
                            <NavLink className=" me-2 text-danger fs-1" to="/*"><FontAwesomeIcon icon={faCcMastercard} /></NavLink>
                        </Col>
                    </Row>
                    <Row className="mb-5">
                        <Col>
                            <h3>Payment method coming soon.. </h3>
                        </Col>
                    </Row>
                </Row>
            </Container>
        </>
    );
};

export default Pay;