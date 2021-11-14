import { faTrashAlt } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React, { useEffect, useState } from 'react';
import { Container, Row, Table } from 'react-bootstrap';

const ManageBike = () => {
    const [bikes, setBike] = useState([]);
    const [control, setControl] = useState(false);

    //get all product
    useEffect(() => {
        fetch("http://localhost:5000/bikes")
            .then((res) => res.json())
            .then((data) => setBike(data));
    }, [control]);
    //delete product
    const handleDelete = (id) => {
        fetch(`http://localhost:5000/bikes/${id}`, {
            method: "DELETE",
            headers: { "content-type": "application/json" },
        })
            .then((res) => res.json())
            .then((data) => {
                if (data.deletedCount) {
                    if (window.confirm('Are You Sure to Delete Mobiles?')) {
                        setControl(!control);
                    }
                } else {
                    setControl(false);
                }
            });

    };

    return (
        <Container>
            <Row>
                <h1 className="text-mi text-center">All Bike: {bikes?.length}</h1>
                <Table className="text-mi " striped bordered hover>
                    <thead>
                        <tr>
                            <th>#</th>
                            <th>Name</th>
                            <th>Price</th>
                            <th>Action</th>
                        </tr>
                    </thead>
                    {bikes?.map((bikes, index) => (
                        <tbody className="text-mi">
                            <tr>
                                <td>{index}</td>
                                <td>{bikes?.name}</td>
                                <td>{bikes?.Price}</td>

                                <td>
                                    <button
                                        onClick={() => handleDelete(bikes?._id)}
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
    );
};

export default ManageBike;