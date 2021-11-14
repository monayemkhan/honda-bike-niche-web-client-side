import { faTrashAlt } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React, { useEffect, useState } from 'react';
import { Container, Row, Spinner, Table } from 'react-bootstrap';
import useAuth from '../../../../hooks/useAuth';

const ManageAllOrder = () => {
    const [orders, setOrders] = useState([]);
    const [control, setControl] = useState(false);
    const { isLoading } = useAuth();

    //get all order
    useEffect(() => {
        fetch(`https://fierce-castle-66914.herokuapp.com/orders`)
            .then((res) => res.json())
            .then((data) => setOrders(data));
    }, [control]);

    //delete order
    const handleDelete = (id) => {
        fetch(`https://fierce-castle-66914.herokuapp.com/deleteOrder/${id}`, {
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

    // UPDATE status
    const handleUpdateStatus = (id) => {
        const updated = { bike_status: 'Shipped' }
        //update order status
        fetch(`https://fierce-castle-66914.herokuapp.com/updateOrder/${id}`, {
            method: 'PUT',
            headers: { 'content-type': 'application/json' },
            body: JSON.stringify(updated)
        })
            .then(res => res.json())
            .then(data => {
                if (data.modifiedCount > 0) {
                    alert('Order Shipped');
                    window.location.reload()

                }
            });

    };

    return (
        // manage all order section
        <div>
            {isLoading && <Spinner className="d-block mx-auto my-3" animation="border" variant="danger" />}
            <Container className="my-5 border border-danger rounded-3">
                <Row>
                    <h4 className="text-uppercase bg-danger text-light p-3 fw-bold">All Order: {orders?.length}</h4>
                    <Table striped bordered hover className="">
                        <thead>
                            <tr>
                                <th>#</th>
                                <th>Name</th>
                                <th>Email</th>
                                <th>Price</th>
                                <th>Address</th>
                                <th>Status</th>
                                <th>Update</th>
                                <th>Action</th>
                            </tr>
                        </thead>
                        {orders?.map((order, index) => (
                            <tbody>
                                <tr>
                                    <td>{index}</td>
                                    <td>{order?.bike_name}</td>
                                    <td>{order?.user_email}</td>
                                    <td>{order?.bike_price}</td>
                                    <td>{order?.user_address}</td>
                                    <td>{order?.bike_status}</td>
                                    <td>
                                        <button
                                            onClick={() => handleUpdateStatus(order?._id)}
                                            className="btn btn-outline-danger p-2"
                                        >
                                            Shipped
                                        </button>
                                    </td>
                                    <td>
                                        <button
                                            onClick={() => handleDelete(order?._id)}
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
        </div >
    );
};

export default ManageAllOrder;