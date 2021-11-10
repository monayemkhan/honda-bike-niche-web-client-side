import React from 'react';
import { NavLink } from 'react-router-dom';
import logo from '../../../images/logo.png';

const Navigation = () => {
    return (
        <div>
            <nav class="navbar navbar-expand-lg navbar-light bg-light">
                <div class="container-fluid">
                    <div className="row">
                        <div className="col-md-4">
                            <NavLink class="navbar-brand" to="/home">
                                <img className="w-50" src={logo} alt="" />
                            </NavLink>
                        </div>
                        <div className="col-md-5">
                            <button class="navbar-toggler" type="button" data-bs-toggle="collapse"      data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                            <span class="navbar-toggler-icon"></span>
                            </button>
                            <div class="collapse navbar-collapse" id="navbarNav">
                                <ul class="navbar-nav">
                                    <li class="nav-item">
                                    <NavLink className="nav-link active" aria-current="page" to="/home">Home</NavLink>
                                    </li>
                                    <li class="nav-item">
                                    <NavLink className="nav-link" to="#">Features</NavLink>
                                    </li>
                                    <li class="nav-item">
                                    <NavLink className="nav-link" to="#">Pricing</NavLink>
                                    </li>
                                </ul>
                            </div>
                        </div>
                        <div className="col-md-3">
                            {/* <ul className="navbar-nav justify-content-center">
                                <li className="nav-item p-2">
                                { user?.displayName?
                                        <NavLink to="/login">
                                        <button onClick={logOut} className="btn btn-danger rounded-3 btn-sm my-1">Log-out</button>
                                        </NavLink>
                                        :
                                        <NavLink to="/login">
                                        <button className="btn btn-outline-danger me-1 rounded-3 fw-bold" >Log In</button>
                                        </NavLink>
                                    }
                                </li>
                                { user?.displayName?
                                    <li className="nav-item p-2 my-2">
                                        Signed in as: <a href="/login">{user?.displayName}</a>
                                    </li>
                                    :
                                    ''
                                }
                            </ul> */}
                        </div>
                    </div>
                </div>  
            </nav>
        </div>
    );
};

export default Navigation;