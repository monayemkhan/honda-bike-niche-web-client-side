import React, { useState } from 'react';
import { Alert, Button, Container, Row, Spinner } from 'react-bootstrap';
import { useHistory, useLocation } from 'react-router';
import { NavLink } from 'react-router-dom';
import useAuth from '../../../../hooks/useAuth'

const Login = () => {
    const [loginData, setLoginData] = useState({});
    const { user, loginUser, signInWithGoogle, isLoading, authError } = useAuth();

    const location = useLocation();
    const history = useHistory();

    // handle onChange
    const handleOnChange = e => {
        const field = e.target.name;
        const value = e.target.value;
        const newLoginData = { ...loginData };
        newLoginData[field] = value;
        setLoginData(newLoginData);
    }
    // handle log in submit
    const handleLoginSubmit = e => {
        loginUser(loginData.email, loginData.password, location, history);
        e.preventDefault();
    }
    // handle google sign in
    const handleGoogleSignIn = () => {
        signInWithGoogle(location, history)
    }

    return (
        // this is log in component 
        <>
            <Container className="my-5 border border-danger rounded-3 w-75 mx-auto">
                <Row>
                    <h2 className="bg-danger text-light p-3">Please log in</h2>
                    <form className=" w-75 mx-auto" onSubmit={handleLoginSubmit}>
                        <input
                            className="form-control m-3"
                            placeholder="Enter Your Name"
                            type="email"
                            name="email"
                            onBlur={handleOnChange}
                        />
                        <input
                            className="form-control m-3"
                            placeholder="Enter Your Password"
                            type="password"
                            name="password"
                            onBlur={handleOnChange}
                        />
                        {isLoading && <Spinner className="d-block mx-auto my-3" animation="border" variant="danger" />}
                        <Button
                            className="fw-bold"
                            type="submit"
                            variant="outline-danger"
                        >Log In</Button> <br />
                        <NavLink
                            style={{ textDecoration: 'none' }}
                            to="/register">
                            <p className="my-3 fs-5">New User? Please Register</p>
                        </NavLink>
                        {
                            user?.email && <Alert variant="success">log In successfully</Alert>
                        }
                        {authError && <Alert variant="danger">{authError}</Alert>}
                        <Button
                            onClick={handleGoogleSignIn}
                            className="bg-primary my-5 fs-5"
                        >Log In Google</Button>
                    </form>
                </Row>
            </Container>
        </>
    );
};

export default Login;