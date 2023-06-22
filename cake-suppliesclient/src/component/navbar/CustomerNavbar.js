

import React from "react";
import { Link, useNavigate } from "react-router-dom";
import "./CustomerNavbar.css";
import 'bootstrap/dist/css/bootstrap.min.css';
import Dropdown from 'react-bootstrap/Dropdown';
import DropdownButton from 'react-bootstrap/DropdownButton';

export const CustomerNavbar = () => {
    const navigate = useNavigate();

    return (
        <div className="mainNav">
            <div className="navImgContainer">
                <div className="navBarLinks">







                    <Dropdown className="navbar__item active">
                        <Dropdown.Toggle variant=" primary" id="dropdown-basic">
                            Category
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




                            <div className="navbar__item active">
                                <Link className="navbar__link" to="/itemDetails">
                                    item Details
                                </Link>
                            </div>


                        </Dropdown.Menu>
                    </Dropdown>

                    <div className="navbar__item active">
                        <i className="fa fa-search" aria-hidden="true"> </i>
                        <Link className="navbar__link" to="/searchBar">
                            Search
                        </Link>
                    </div>



                    <div className="navbar__item active">
                        <i className="fa fa-cart-arrow-down" aria-hidden="true" >   </i>
                        <Link className="navbar__link" to="/order">
                            Cart
                        </Link>
                    </div>


                    {/* <div className="navbar__item active">
                            <i className="fa fa-plus" aria-hidden="true"> </i>
                            <Link className="navbar__link" to="/addOrder">

                                Add Order
                            </Link>
                        </div> */}


                    <div className="navbar__item active">
                        <i className="fa fa-home" aria-hidden="true"> </i>
                        <Link className="navbar__link" to="/aboutUs">
                            About Us
                        </Link>
                    </div>



                    {/* <div className="navbar__item active">
                        <i className="fa fa-cart-arrow-down" aria-hidden="true" >   </i>
                        <Link className="navbar__link" to="/home">
                         home
                        </Link>
                    </div> */}

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
                                <i className="fa fa-sign-out" aria-hidden="true">   </i>
                                Sign out
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