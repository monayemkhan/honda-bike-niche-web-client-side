import axios from 'axios';
import React from 'react';
import { useForm } from 'react-hook-form';

const AddReview = () => {
    const { register, handleSubmit, reset } = useForm();

    const onSubmit = data => {

        axios.post('http://localhost:5000/reviews', data)
            .then(res => {
                if (res.data.insertedId) {
                    alert('Reviews Added Successfully');
                    reset();
                }
            })
    };

    return (
        <div>
            <div className="container my-5">
                <div className="row w-75 mx-auto">
                    <div className="border border-2 rounded-3 border-danger shadow-lg">
                        <h2 className="fs-1 fw-bold my-3">Add Review</h2>
                        <p>Please fill the from with all info</p>
                        <div>
                            <form className="p-3" onSubmit={handleSubmit(onSubmit)}>
                                <input className="form-control m-2" placeholder="User image" type="text" {...register("img")} />
                                <input className="form-control m-2" placeholder="User name" type="text" {...register("name")} />
                                <input className="form-control m-2" placeholder="Rating" type="number" {...register("rating")} min="0" max="5" />
                                <textarea className="form-control m-2" placeholder="Type Your Review max length 100 " {...register("review", { required: true, maxLength: 100 })} />
                                <input className="btn btn-danger btn-lg mt-3" type="submit" />
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default AddReview;