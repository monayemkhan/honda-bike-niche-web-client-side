import { faSignInAlt, faSignOutAlt } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import { NavLink } from 'react-router-dom';
import useAuth from '../../../hooks/useAuth';
import logo from '../../../images/logo.png';

const Navigation = () => {
    const { user, logOut, signInWithGoogle, isLoading, authError } = useAuth();
    return (
        // navbar/navigation section
        <div>
            <nav class="navbar navbar-expand-lg navbar-light bg-light">
                <div class="container-fluid">
                    <div className="row">
                        {/* navbar logo */}
                        <div className="col-md-4">
                            <NavLink className="navbar-brand" to="/home">
                                <img className="w-75" src={logo} alt="" />
                            </NavLink>
                        </div>
                        {/* navbar menu and toggle */}
                        <div className="col-md-6 mt-2">
                            <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                                <span className="navbar-toggler-icon"></span>
                            </button>
                            {/* menu items */}
                            <div className="collapse navbar-collapse" id="navbarNav">
                                <ul className="navbar-nav">
                                    <li class="nav-item">
                                        <NavLink activeClassName="fw-bold text-dark border-bottom border-danger border-2" className="nav-link fs-5 text-danger" aria-current="page" to="/home">Home</NavLink>
                                    </li>
                                    <li class="nav-item">
                                        <NavLink activeClassName="fw-bold text-dark border-bottom border-danger border-2" className="nav-link fs-5 text-danger" to="/bikes">More Bike</NavLink>
                                    </li>
                                </ul>
                            </div>
                        </div>
                        {/* log in and registration */}
                        <div className="col-md-2">
                            <ul className="navbar-nav">
                                <li className="nav-item p-2">
                                    {user?.displayName ?
                                        <NavLink to="/login">
                                            <button onClick={logOut} className="btn btn-outline-danger me-2 mt-2" ><FontAwesomeIcon icon={faSignOutAlt}></FontAwesomeIcon> </button>
                                        </NavLink>
                                        :
                                        <NavLink to="/login">
                                            <button className="btn btn-outline-danger mt-2" ><FontAwesomeIcon icon={faSignInAlt}></FontAwesomeIcon></button>
                                        </NavLink>
                                    }

                                </li>
                                {user?.displayName ?
                                    <li className="nav-item mt-4">
                                        <h6>{user?.displayName}</h6>
                                    </li>
                                    :
                                    ''
                                }
                            </ul>
                        </div>
                    </div>
                </div>
            </nav>
        </div>
    );
};

export default Navigation;