import { faTrashAlt } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React, { useEffect, useState } from 'react';
import { Container, Row, Table } from 'react-bootstrap';

const ManageAllOrder = () => {
    const [orders, setOrders] = useState([]);
    const [control, setControl] = useState(false);

    //get all order
    useEffect(() => {
        fetch("http://localhost:5000/orders")
            .then((res) => res.json())
            .then((data) => setOrders(data));
    }, [control]);

    //delete order
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

    // handle update status
    const handleUpdateStatus = (id) => {
        const updated = { status: 'Approved' }
        //update order status
        fetch(`http://localhost:5000/updateOrder/${id}`, {
            method: 'PUT',
            headers: { 'content-type': 'application/json' },
            body: JSON.stringify(updated)
        })
            .then(res => res.json())
            .then(data => {
                if (data.modifiedCount > 0) {
                    alert('Order Shifted...');
                    window.location.reload()
                }
            });
        console.log(id);
    };

    return (
        // manage all order section
        <div>
            <Container className="my-5 border border-danger rounded-3">
                <Row>
                    <h4 className="text-uppercase bg-danger text-light p-2">All Order: {orders?.length}</h4>
                    <Table striped bordered hover className="mb-5">
                        <thead>
                            <tr>
                                <th>#</th>
                                <th>Name</th>
                                <th>Email</th>
                                <th>Date</th>
                                <th>Status</th>
                                <th>Update</th>
                                <th>Action</th>
                            </tr>
                        </thead>
                        {orders?.map((order, index) => (
                            <tbody>
                                <tr>
                                    <td>{index}</td>
                                    <td>{order?.name}</td>
                                    <td>{order?.email}</td>
                                    <td>{order?.date}</td>
                                    <td>{order?.status}</td>
                                    <td>
                                        <button
                                            onClick={() => handleUpdateStatus(order?._id)}
                                            className="btn btn-outline-danger  p-2"
                                        >
                                            Shifted
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
        </div>
    );
};

export default ManageAllOrder;