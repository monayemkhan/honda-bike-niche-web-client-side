import React from 'react';
import { Card, Col, Container, Row } from 'react-bootstrap';

const Review = (props) => {
    const { img, name, rating, review } = props.review

    return (
        <>
            <Container>
                <Row>
                    <Col className="my-sm-3 my-md-3">
                        <Card>
                            <Card.Img className="w-25 mx-auto rounded-circle mt-2" variant="top" src={img} />
                            <Card.Body>
                                <Card.Title>{name}</Card.Title>
                                <Card.Title>
                                    {rating}
                                </Card.Title>
                                <Card.Text>{review}</Card.Text>
                            </Card.Body>
                        </Card>
                    </Col>
                </Row>
            </Container>
        </>
    );
};

export default Review;