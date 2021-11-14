import React from 'react';
import { Container, Row } from 'react-bootstrap';
import useAuth from '../../../../hooks/useAuth';

const DashHome = () => {
    const { user } = useAuth();
    console.log(user);

    return (
        <div className="w-50 mx-auto">
            <Container>
                <Row className="py-3 text-center border border-danger border-2 rounded-3 mx-auto my-5">
                    {
                        !user?.photoURL ?
                            <img className="rounded-circle mx-auto user-img" src="https://i.ibb.co/3T7HG0K/user-img.png" alt="" />
                            :
                            <img className="rounded-circle mx-auto user-img" src={user?.photoURL} alt="" />
                    }
                    <h3 className="text-uppercase fw-bold my-3">Welcome To dashboard</h3>
                    <h6>{user?.displayName}</h6>
                </Row>
            </Container>
        </div>

    );
};

export default DashHome;