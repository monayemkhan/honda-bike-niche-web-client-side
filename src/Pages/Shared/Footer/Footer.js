import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebookSquare, faInstagramSquare, faInvision, faTwitterSquare } from '@fortawesome/free-brands-svg-icons';
import React from 'react';
import { Col, Container, ListGroup, Row } from 'react-bootstrap';
import logo from '../../../images/logo.png'
import { NavLink } from 'react-router-dom';
const Footer = () => {
    return (
        // this is footer section
        <Container fluid>
            {/* footer top */}
            <Row className="bg-danger text-center">
                <Col className=" col-md-6 mx-auto">
                    <div className="py-3">
                        <NavLink className="navbar-brand" to="/home">
                            <FontAwesomeIcon className="text-dark fs-1 me-3" icon={faFacebookSquare}></FontAwesomeIcon>
                        </NavLink>
                        <NavLink className="navbar-brand" to="/home">
                            <FontAwesomeIcon className="text-dark fs-1 me-3" icon={faTwitterSquare}></FontAwesomeIcon>
                        </NavLink>
                        <NavLink className="navbar-brand" to="/home">
                            <FontAwesomeIcon className="text-dark fs-1 me-3" icon={faInstagramSquare}></FontAwesomeIcon>
                        </NavLink>
                        <NavLink className="navbar-brand" to="/home">
                            <FontAwesomeIcon className="text-dark fs-1 me-3" icon={faInvision}></FontAwesomeIcon>
                        </NavLink>
                    </div>
                </Col>
            </Row>
            {/* footer middle */}
            <Row>
                <Col md={8} className="my-3">
                    <div>
                        <NavLink className="navbar-brand" to="/home">
                            <img className="w-50" src={logo} alt="" />
                        </NavLink>
                    </div>
                    <div className="p-3 text-start">
                        <p className="text-secondary">Honda provide all the latest honda motorcycle or bike price in bangladesh 2021 at honda.com.bd. Honda presented the details of each product through communication with internet and show-room but we will not say that our information is 100% correct. However, we have tried to present the details of the product of your choice accurately. We sincerely apologize for any unintentional mistakes.</p>
                    </div>
                </Col>
                <Col md={4} className="d-flex align-items-center justify-content-center bg-dark">
                    <div className="footer-menu">
                        <NavLink activeClassName="fw-bold" className="nav-link text-light fs-5 menu-item" to="/aboutUs">
                            About Us
                        </NavLink>
                        <NavLink activeClassName="fw-bold" className="nav-link text-light fs-5 menu-item" to="/privacyPolicy">
                            Privacy Policy
                        </NavLink>
                        <NavLink activeClassName="fw-bold" className="nav-link text-light fs-5 menu-item" to="/contactUs">
                            Contact Us
                        </NavLink>
                        <NavLink activeClassName="fw-bold" className="nav-link text-light fs-5 menu-item" to="/siteMap">
                            Site Map
                        </NavLink>
                    </div>
                </Col>
            </Row>
            {/* footer bottom */}
            <Row>
                <Col className="bg-danger text-light">
                    <p className="mt-2">Copyright © 2021 http://hondabike.net . All Rights Reserved.</p>
                </Col>
            </Row>
        </Container>
    );
};

export default Footer;