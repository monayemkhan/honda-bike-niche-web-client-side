import axios from 'axios';
import React from 'react';
import { useForm } from 'react-hook-form';

const AddBike = () => {
    const { register, handleSubmit, reset } = useForm();
    // handle bike form
    const onSubmit = data => {
        axios.post('http://localhost:5000/bikes', data)
            .then(res => {
                if (res.data.insertedId) {
                    alert('bike Added Successfully');
                    reset();
                }
            })
    };
    return (
        <>
            {/* add bike form */}
            <div className="container my-5">
                <div className="row w-75 mx-auto">
                    <div className="border border-2 rounded-3 border-danger shadow-lg">
                        <h2 className="fs-1 fw-bold my-3">Add Bike</h2>
                        <p>Please fill the form with all info</p>
                        <div>
                            <form className="p-3" onSubmit={handleSubmit(onSubmit)}>
                                <input className="form-control m-2" placeholder="Bike image URL" type="text" {...register("img")} />
                                <input className="form-control m-2" placeholder="Bike name" type="text" {...register("name", { required: true })} />
                                <input className="form-control m-2" placeholder="Engine model" type="text" {...register("engine")} />
                                <input className="form-control m-2" placeholder="Max speed" type="text" {...register("speed")} />
                                <input className="form-control m-2" placeholder="Max mileage per liter" type="text" {...register("mileage")} />
                                <input className="form-control m-2" placeholder="Bike price" type="number" {...register("price")} />
                                <textarea className="form-control m-2" placeholder="Body details" {...register("body_details")} />
                                <textarea className="form-control m-2" placeholder="Tyre and Brakes details" {...register("tb_details")} />
                                <textarea className="form-control m-2" placeholder="Engine details" {...register("engine_details")} />
                                <input className="btn btn-danger btn-lg mt-3" type="submit" />
                            </form>
                        </div>
                    </div>
                    <p className="mt-5"><span className="mt-5 fw-bold">Image URL: </span> </p>
                </div>
            </div>
        </>
    );
};

export default AddBike;