
import React from "react"
import "./AdminNavbar.css"
import { Link, useNavigate } from "react-router-dom";

import { Dropdown } from 'react-bootstrap';






export const AdminNavbar = () => {
    const navigate = useNavigate();

    // if (appUserObject.isStaff === true) {
    return (
    
        <div className="navImgContainer">
            <div className="navBarLinks">

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



                        </Dropdown.Menu>
                    </Dropdown>

                    <div className="navbar__item active">
                        <i className="fa fa-search" aria-hidden="true"> </i>
                        <Link className="navbar__link" to="/SearchBar">
                            Search
                        </Link>
                    </div>



                    <div className="navbar__item active">
                        <i className="fa fa-cart-arrow-down" aria-hidden="true" >   </i>
                        <Link className="navbar__link" to="/order">
                            Cart
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
//         <div className="navImgContainer">
    
    
    
//     <div className="App">
//                 <>
//                     <Dropdown>
//                         <Dropdown.Toggle variant=" primary" id="dropdown-basic">
//                             Catagory
//                         </Dropdown.Toggle>

//                         <Dropdown.Menu>
//                             <div className="navbar__item active">
//                                 <Link className="navbar__link" to="/edibles">
//                                     Edibles
//                                 </Link>
//                             </div>


//                             <div className="navbar__item active">
//                                 <Link className="navbar__link" to="/coloring">
//                                     Coloring
//                                 </Link>
//                             </div>

//                             <div className="navbar__item active">
//                                 <Link className="navbar__link" to="/decoratingTools">
//                                     DecoratingTools
//                                 </Link>
//                             </div>


//                             <div className="navbar__item active">
//                                 <Link className="navbar__link" to="/bakingSupplies">
//                                     Baking Supplies
//                                 </Link>
//                             </div>



//                         </Dropdown.Menu>
//                     </Dropdown>
//                 </>
//             </div>
    
    
    

//         <div className="navBarLinks">

//             <div className="navBarLinks">






//                 <div className="navbar__item active">
//                     <Link className="navbar__link" to="/order">
//                         Order
//                     </Link>
//                 </div>


//                 <div className="navbar__item active">
//                     <Link className="navbar__link" to="/aboutUs">
//                         <i className="fa fa-home" aria-hidden="true">About Us</i>

//                     </Link>
//                 </div>

//                 {localStorage.getItem("project_user") ? (
//                     <div className="navbar__item navbar__logout">
//                         <Link
//                             className="navbar__link"
//                             to=""
//                             onClick={() => {
//                                 localStorage.removeItem("project_user");
//                                 navigate("/", { replace: true });
//                             }}
//                         >
//                             Logout
//                         </Link>
//                     </div>
//                 ) : (
//                     ""
//                 )}
//             </div>
//         </div>

//     </div>
//     );
// };
