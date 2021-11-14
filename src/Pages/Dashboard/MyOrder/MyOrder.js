import { faTrashAlt } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React, { useEffect, useState } from 'react';
import { Container, Row, Table } from 'react-bootstrap';
import useAuth from '../../../hooks/useAuth';

const MyOrder = () => {
    const { user, token } = useAuth();
    const [orders, setOrders] = useState([]);
    const [control, setControl] = useState(false);

    //get my order data
    useEffect(() => {
        fetch(`http://localhost:5000/myOrder?email=${user.email}`, {
            headers: {
                'authorization': `Bearer ${token}`
            }
        })
            .then(res => res.json())
            .then(data => setOrders(data));

    }, [user.email, token, control]);

    const handleDelete = (id) => {
        fetch(`http://localhost:5000/deleteOrder/${id}`, {
            method: "DELETE",
            headers: { "content-type": "application/json" },
        })
            .then((res) => res.json())
            .then((data) => {
                if (data.deletedCount) {
                    if (window.confirm('Are You Sure to Delete Order?')) {
                        setControl(!control);
                    }
                } else {
                    setControl(false);
                }
            });
    };

    return (
        <>
            <Container className="my-5 border border-danger rounded-3">
                <Row className="">
                    <h4 className="text-uppercase bg-danger text-light p-2">My Orders</h4>
                    <Table striped bordered hover className="mb-5">
                        <thead>
                            <tr>
                                <th>#</th>
                                <th>Name</th>
                                <th>Email</th>
                                <th>Price</th>
                                <th>Address</th>
                                <th>Status</th>
                                <th>Action</th>
                            </tr>
                        </thead>
                        {orders?.map((myorder, index) => (
                            <tbody>
                                <tr>
                                    <td>{index}</td>
                                    <td>{myorder?.bike_name}</td>
                                    <td>{myorder?.user_email}</td>
                                    <td>{myorder?.bike_price}</td>
                                    <td>{myorder?.user_address}</td>
                                    <td>{myorder?.bike_status}</td>
                                    <td>
                                        <button
                                            onClick={() => handleDelete(myorder?._id)}
                                            className="btn btn-outline-danger  p-2"
                                        >
                                            <FontAwesomeIcon icon={faTrashAlt}></FontAwesomeIcon>
                                        </button>
                                    </td>
                                </tr>
                            </tbody>
                        ))}
                    </Table>
                </Row>
            </Container>
        </>
    );
};

export default MyOrder;