import React from 'react';
import { Card, Col, Container, Row } from 'react-bootstrap';
import StarRatings from 'react-star-ratings';

const Review = (props) => {
    const { name, profession, rating, review } = props?.review;

    return (
        // review section
        <>
            <Container>
                <Row>
                    <Col className="my-sm-3 my-md-5">
                        <Card>
                            <Card.Body>
                                <Card.Title className="m-0">{name}</Card.Title>
                                <Card.Text className="m-0">{profession}</Card.Text>
                                <Card.Text>
                                    <StarRatings
                                        rating={parseFloat(rating)}
                                        starDimension="20px"
                                        starSpacing="5px"
                                    />
                                </Card.Text>
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