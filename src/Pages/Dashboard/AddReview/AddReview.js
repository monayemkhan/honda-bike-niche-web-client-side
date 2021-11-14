import axios from 'axios';
import React from 'react';
import { Spinner } from 'react-bootstrap';
import { useForm } from 'react-hook-form';
import useAuth from '../../../hooks/useAuth';

const AddReview = () => {
    const { register, handleSubmit, reset } = useForm();
    const { isLoading } = useAuth();

    // handle review
    const onSubmit = data => {
        axios.post('https://fierce-castle-66914.herokuapp.com/reviews', data)
            .then(res => {
                if (res.data.insertedId) {
                    alert('Reviews Added Successfully');
                    reset();
                }
            })
    };

    return (
        // add review component
        <div>
            {isLoading && <Spinner className="d-block mx-auto my-3" animation="border" variant="danger" />}
            <div className="container my-5">
                <div className="row w-75 mx-auto">
                    <div className="border rounded-3 border-danger shadow-lg">
                        <h4 className="text-uppercase fw-bold mb-3 py-2 bg-danger text-light">Add Review</h4>
                        <p>Please fill the form with all info</p>
                        <div>
                            <form className="p-3" onSubmit={handleSubmit(onSubmit)}>
                                <input className="form-control m-2" placeholder="Your Name" type="text" {...register("name", { required: true, maxLength: 40 })} />
                                <input className="form-control m-2" placeholder="Your Profession" type="text" {...register("profession")} />
                                <input className="form-control m-2" placeholder="Rating" type="number" {...register("rating", { min: 0, max: 5 })} min="0" max="5" />
                                <textarea className="form-control m-2" placeholder="Type Your Comments, max length 100 " {...register("review", { required: true, maxLength: 100 })} />
                                <input className="btn btn-danger mt-3" type="submit" />
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default AddReview;