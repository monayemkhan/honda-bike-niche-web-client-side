import React from 'react';
import './Banner.css'
import logo from '../../../images/logo.png';

const Banner = () => {
    return (
        // this is banner section
        <div className="banner-bg d-flex align-items-center justify-content-center" >
            <div>
                <img className="w-50" src={logo} alt="" />
                <h1 className="my-5 fs-1 text-light fw-bold">Determination Powers Us.</h1>
                <div class="d-grid gap-2 col-6 mx-auto">
                    <button type="button" className="text-uppercase btn btn-danger mt-5 fw-bold rounded-pill">Watch Video</button>
                </div>
            </div>
        </div>
    );
};

export default Banner;