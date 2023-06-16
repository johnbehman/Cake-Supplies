

import React from "react";
import { Link, useNavigate } from "react-router-dom";
import "./Navbar.css";
import 'bootstrap/dist/css/bootstrap.min.css';
import { Dropdown } from 'react-bootstrap';

export const CustomerNavbar = () => {
    const navigate = useNavigate();

    return (

        <div className="navImgContainer">

            <div className="App">
                <>
                    <Dropdown>
                        <Dropdown.Toggle variant=" primary" id="dropdown-basic">
                            Catagory
                        </Dropdown.Toggle>

                        <Dropdown.Menu>
                            <div className="navbar__item active">
                                <Link className="navbar__link" to="/edibles">
                                    Edibles
                                </Link>
                            </div>


                            <div className="navbar__item active">
                                <Link className="navbar__link" to="/coloring">
                                    Coloring
                                </Link>
                            </div>

                            <div className="navbar__item active">
                                <Link className="navbar__link" to="/decoratingTools">
                                    DecoratingTools
                                </Link>
                            </div>


                            <div className="navbar__item active">
                                <Link className="navbar__link" to="/bakingSupplies">
                                    Baking Supplies
                                </Link>
                            </div>



                        </Dropdown.Menu>
                    </Dropdown>
                </>
            </div>


            <div className="navBarLinks">

                <div className="navBarLinks">



                    <div className="navbar__item active">
                        <Link className="navbar__link" to="/searchItems">
                            Search

                        </Link>
                    </div>






                    <div className="navbar__item active">
                        <Link className="navbar__link" to="/order">
                        <i class="fa fa-cart-arrow-down" aria-hidden="true" >  Cart </i> 
                        </Link>
                    </div>


                    <div className="navbar__item active">
                        <Link className="navbar__link" to="/addOrder">
                        Add Order

                        </Link>
                    </div>


                    <div className="navbar__item active">
                        <Link className="navbar__link" to="/aboutUs">
                            <i class="fa fa-home" aria-hidden="true"> About Us</i>

                        </Link>
                    </div>

                    {localStorage.getItem("project_user") ? (
                        <div className="navbar__item navbar__logout">
                            <Link
                                className="navbar__link"
                                to=""
                                onClick={() => {
                                    localStorage.removeItem("project_user");
                                    navigate("/", { replace: true });
                                }}
                            >
                                Logout
                            </Link>

                        </div>



                    ) : (
                        ""
                    )}
                </div>
            </div>

        </div>

    );
};