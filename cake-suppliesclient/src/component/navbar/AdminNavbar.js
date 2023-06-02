
import React from "react"
import "./Navbar.css"
import { Link, useNavigate } from "react-router-dom";


{/* <nav class="navbar navbar-light bg-light">
  <form class="form-inline">
    <input class="form-control mr-sm-2" type="search" placeholder="Search" aria-label="Search">
    <button class="btn btn-outline-success my-2 my-sm-0" type="submit">Search</button>
  </form>
</nav> */}





export const AdminNavbar = () => {
    const navigate = useNavigate();

    // if (appUserObject.isStaff === true) {
    return (




        <div className="navImgContainer">

            <div className="navBarLinks">

                <div className="navBarLinks">
                    <div className="navbar__item active">
                        <Link className="navbar__link" to="/order">
                            Order
                        </Link>
                    </div>
                    <div className="navbar__item active">
                        <Link className="navbar__link" to="/gallary">
                            Gallary
                        </Link>
                    </div>
                    <div className="navbar__item active">
                        <Link className="navbar__link" to="/aboutUs">
                            About Us
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
