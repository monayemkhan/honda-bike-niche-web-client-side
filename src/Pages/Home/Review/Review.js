import React from 'react';
import { Card, Col, Container, Row } from 'react-bootstrap';
// import StarRatings from './react-star-ratings'

const Review = (props) => {
    const { name, profession, rating, review } = props?.review;

    // changeRating(newRating, name); {
    //     this.setState({
    //         rating: newRating
    //     });
    // }

    return (
        <>
            <Container>
                <Row>
                    <Col className="my-sm-3 my-md-3">
                        <Card>
                            <Card.Body>
                                <Card.Title>{name}</Card.Title>
                                <Card.Text>{profession}</Card.Text>
                                <Card.Title>
                                    {/* <StarRatings
                                        rating={parseFloat(rating)}
                                        starDimension="20px"
                                        starSpacing="5px"
                                    /> */}
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