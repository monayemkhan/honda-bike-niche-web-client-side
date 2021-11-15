import React, { useState } from 'react';
import { Alert, Button, Card, Container, Row } from 'react-bootstrap';
import useAuth from '../../../../hooks/useAuth'

const MakeAdmin = () => {
    const [email, setEmail] = useState('');
    const [success, setSuccess] = useState(false);
    const { token } = useAuth();

    const handleOnBlur = e => {
        setEmail(e.target.value);
        console.log("e", e.target.value)
    }

    const handleAdminSubmit = e => {
        const user = { email };
        fetch('https://fierce-castle-66914.herokuapp.com/users/admin', {
            method: 'PUT',
            headers: {
                'authorization': `Bearer ${token}`,
                'content-type': 'application/json'
            },
            body: JSON.stringify(user)
        })
            .then(res => res.json())
            .then(data => {
                if (data.modifiedCount) {
                    setSuccess(true);
                }
            })

        e.preventDefault()
    }

    return (
        <>
            <Container className="my-5 w-75">
                <Row className="border rounded-3 border-danger shadow-lg">
                    <Card className="text-center">
                        <h4 className="text-uppercase fw-bold mb-3 py-3 bg-danger text-light">Create A New Admin</h4>
                        <Card.Body>
                            <form className="" onSubmit={handleAdminSubmit}>
                                <input
                                    className="form-control m-3"
                                    placeholder="Enter User Email"
                                    type="email"
                                    name="email"
                                    onBlur={handleOnBlur}
                                />
                                <Button
                                    type="submit"
                                    variant="outline-danger"
                                >Create Admin</Button>
                            </form>
                            {success && <Alert className="mt-3" variant="success">Admin Created successfully!</Alert>}
                        </Card.Body>
                    </Card>
                </Row>
            </Container>
        </>
    );
};

export default MakeAdmin;