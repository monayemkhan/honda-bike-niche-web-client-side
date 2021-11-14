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
        fetch('http://localhost:5000/users/admin', {
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
                <Row>
                    <Card className="text-center">
                        <h4 className="mt-3">Create A New Admin</h4>
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
                            {success && <Alert variant="success">Admin Created successfully!</Alert>}
                        </Card.Body>
                    </Card>
                </Row>
            </Container>
        </>
    );
};

export default MakeAdmin;