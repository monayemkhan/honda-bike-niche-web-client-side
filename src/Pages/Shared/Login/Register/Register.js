import React, { useState } from 'react';
import { Alert, Button, Container, Row, Spinner } from 'react-bootstrap';
import { useHistory } from 'react-router';
import { NavLink } from 'react-router-dom';
import useAuth from '../../../../hooks/useAuth';

const Register = () => {
    const [loginData, setLoginData] = useState({});
    const history = useHistory();
    const { user, registerUser, isLoading, authError } = useAuth();

    const handleOnBlur = e => {
        const field = e.target.name;
        const value = e.target.value;
        const newLoginData = { ...loginData };
        newLoginData[field] = value;
        setLoginData(newLoginData);
    }

    const handleLoginSubmit = e => {
        if (loginData?.password !== loginData?.password2) {
            alert('Your password did not match');
            return
        }
        registerUser(loginData.email, loginData.password, loginData.name, history);
        e.preventDefault();
    }

    return (
        // register component
        <>
            <Container className="my-5 border border-danger rounded-3 w-75 mx-auto">
                <Row>
                    <h4 className="bg-danger text-light p-3">Please Register</h4>
                    <form className=" w-75 mx-auto" onSubmit={handleLoginSubmit}>
                        <input
                            className="form-control m-3"
                            placeholder="Enter Your Name"
                            type="text"
                            name="name"
                            onChange={handleOnBlur}
                        />
                        <input
                            className="form-control m-3"
                            placeholder="Enter Your Email"
                            type="email"
                            name="email"
                            onChange={handleOnBlur}
                        />
                        <input
                            className="form-control m-3"
                            placeholder="Type Password"
                            type="password"
                            name="password"
                            onChange={handleOnBlur}
                        />
                        <input
                            className="form-control m-3"
                            placeholder="Re-Type Password"
                            type="password"
                            name="password2"
                            onChange={handleOnBlur}
                        />
                        <Button
                            type="submit"
                            variant="outline-danger"
                            className=""
                        >Register</Button>
                        <NavLink
                            style={{ textDecoration: 'none' }}
                            to="/login">
                            <p className="my-3 fs-5">Already Registered? Please Login</p>
                        </NavLink>
                    </form>
                    {isLoading && <Spinner className="d-block mx-auto my-3" animation="border" variant="danger" />}
                    {user?.email && <Alert variant="success">User Created successfully!</Alert>}
                    {authError && <Alert variant="danger">{authError}</Alert>}
                </Row>
            </Container>
        </>
    );
};

export default Register;