import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import Product from '../Product/Product';

const Products = () => {

    return (
        <div>
            <Container>
                <Row>
                    <Col>
                        <h1>HONDA BIKE PRICE IN BD, 2021</h1>
                        <p>The good news for Honda motorcycle users, fan-followers and well-wishers is that we have mentioned on this web page the current prices of Honda bikes or motorcycles in Bangladesh or BD, as well as the latest pictures and a brief description of each and every models which is currently available in Bangladesh.</p>
                    </Col>
                </Row>
                <Row>
                    <Product></Product>
                </Row>
            </Container>
        </div>
    );
};

export default Products;