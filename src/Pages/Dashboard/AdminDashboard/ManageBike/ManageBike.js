import { faTrashAlt } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React, { useEffect, useState } from 'react';
import { Container, Row, Spinner, Table } from 'react-bootstrap';
import useAuth from '../../../../hooks/useAuth';

const ManageBike = () => {
    const [bikes, setBike] = useState([]);
    const [control, setControl] = useState(false);
    const { isLoading } = useAuth();

    //get all product
    useEffect(() => {
        fetch("https://fierce-castle-66914.herokuapp.com/bikes")
            .then((res) => res.json())
            .then((data) => setBike(data));
    }, [control]);
    //delete product
    const handleDelete = (id) => {
        fetch(`https://fierce-castle-66914.herokuapp.com/bikes/${id}`, {
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
        <>
            <Container className="border border-2 rounded-3 border-danger shadow-lg my-5">
                {isLoading && <Spinner className="d-block mx-auto my-3" animation="border" variant="danger" />}
                <Row>
                    <h4 className="text-uppercase fw-bold py-3 bg-danger text-light">All Bike</h4>
                    <Table striped bordered hover className="p-3">
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
                                    <td>{bikes?.price}</td>
                                    <td>
                                        <button
                                            onClick={() => handleDelete(bikes?._id)}
                                            className="btn btn-outline-danger"
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

export default ManageBike;