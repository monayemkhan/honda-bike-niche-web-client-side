import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';

const Safety = () => {
    return (
        // this is safety section 
        <Container className="my-5">
            <h2 className="text-uppercase fw-bold">Make Sure Before Ride</h2>
            <Row className="mt-4">
                <Col md={3}>
                    <div className="card border-danger mb-3 safety-card" >
                        <div className="card-body text-danger">
                            <img className="img-fluid w-50" src="https://i.ibb.co/jJDxS7n/helmet.png" alt="" />
                            <h5 className="card-title mt-3">Wear Helmet</h5>
                        </div>
                    </div>
                </Col>
                <Col md={3}>
                    <div className="card border-danger mb-3 safety-card" >
                        <div className="card-body text-danger">
                            <img className="img-fluid w-50" src="https://i.ibb.co/TbWFWFN/speedometer-1.png" alt="" />
                            <h5 className="card-title mt-3">Limit The Speed</h5>
                        </div>
                    </div>
                </Col>
                <Col md={3}>
                    <div className="card border-danger mb-3 safety-card" >
                        <div className="card-body text-danger">
                            <img className="img-fluid w-50" src="https://i.ibb.co/frLbYF1/documents.png" alt="" />
                            <h5 className="card-title mt-3">Take All Documents</h5>
                        </div>
                    </div>
                </Col>
                <Col md={3}>
                    <div className="card border-danger mb-3 safety-card" >
                        <div className="card-body text-danger">
                            <img className="img-fluid w-50" src="https://i.ibb.co/zsp1kXc/maintenance.png" alt="" />
                            <h5 className="card-title mt-3">Assure Maintenance</h5>
                        </div>
                    </div>
                </Col>
            </Row>
        </Container>
    );
};

export default Safety;