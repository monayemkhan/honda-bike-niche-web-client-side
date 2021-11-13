import React, { Children, rest } from 'react';
import { Spinner } from 'react-bootstrap';
import { Redirect, Route } from 'react-router';
import useAuth from '../../../../hooks/useAuth';

const PrivateRoute = () => {
    const { user, isLoading } = useAuth();
    if (isLoading) {
        return (
            <div className="container text-center pt-5">
                <Spinner animation="border" variant="primary" />
                <h4>Please Login
                    <small>
                        <Spinner className="mx-1" animation="grow" size="sm" />
                    </small>
                </h4>
            </div>
        )
    }

    return (
        <Route
            {...rest}
            render={({ location }) => user.email ? (Children) : (
                <Redirect
                    to={{
                        pathname: "/login",
                        state: { from: location }
                    }}
                ></Redirect>
            )

            }
        >
        </Route>
    );
};

export default PrivateRoute;