
import React from "react"
import "./Navbar.css"
import { Link, useNavigate } from "react-router-dom";







export const AdminNavbar = () => {
    const navigate = useNavigate();

    // if (appUserObject.isStaff === true) {
    return (<div className="navImgContainer">
        <div className="navBarLinks">

            <div className="navBarLinks">



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
                    <Link className="navbar__link" to="/order">
                        Order
                    </Link>
                </div>


                <div className="navbar__item active">
                    <Link className="navbar__link" to="/aboutUs">
                        <i className="fa fa-home" aria-hidden="true">About Us</i>

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
