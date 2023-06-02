import React from "react";
import { AdminNavbar } from "./AdminNavbar";
import { CustomerNavbar } from "./CustomerNavbar";
import "./Navbar.css"

export const Navbar = () => {
    const localProjectUser = localStorage.getItem("project_user")
    const localUserObject = JSON.parse(localProjectUser)



    if (localUserObject.isStaff) {
        return <AdminNavbar />

    } else {
        return <CustomerNavbar />
    }

}
// import React from "react"
// import "./Navbar.css"


// {/* <nav class="navbar navbar-light bg-light">
//   <form class="form-inline">
//     <input class="form-control mr-sm-2" type="search" placeholder="Search" aria-label="Search">
//     <button class="btn btn-outline-success my-2 my-sm-0" type="submit">Search</button>
//   </form>
// </nav> */}

// export const Navbar = () => {
//     var localProjectUse = localStorage.getItem("project_user");
//     var localProjectUse = JSON.parse(localProjectUse);

//     // if (appUserObject.isStaff === true) {
//     return (
//         <>
//             <div>


//                 <nav class="nav">
//                     <div class="container">
//                         <div class="logo">
//                             <a href="#">YourLogo</a>
//                         </div>
//                         <div class="main_list" id="mainListDiv">
//                             <ul>
//                                 <li><a href="#">Login</a></li>
//                                 <li><a href="#">LogOut</a></li>
//                                 <li><a href="#">Home</a></li>
//                                 <li><a href="#">About</a></li>
//                                 <li><a href="#">Coloring</a></li>
//                                 <li><a href="#"> Decorating Tools</a></li>
//                                 <li><a href="#">BakingSupplies</a></li>
//                                 <li><a href="#">Edibles</a></li>
//                             </ul>
//                         </div>
//                         <div class="media_button">
//                             <button class="main_media_button" id="mediaButton">
//                                 <span></span>
//                                 <span></span>
//                                 <span></span>
//                             </button>
//                         </div>
//                     </div>
//                 </nav>

//                 <section class="home"></section><nav class="nav">
//                     <div class="container">
//                         <div class="logo">
//                             <a href="#">YourLogo</a>
//                         </div>
//                         <div class="main_list" id="mainListDiv">
//                             <ul>
//                                 <li><a href="#">Login</a></li>
//                                 <li><a href="#">LogOut</a></li>
//                                 <li><a href="#">Home</a></li>
//                                 <li><a href="#">About</a></li>
//                                 <li><a href="#">Coloring</a></li>
//                                 <li><a href="#"> Decorating Tools</a></li>
//                                 <li><a href="#">BakingSupplies</a></li>
//                                 <li><a href="#">Edibles</a></li>
//                             </ul>
//                         </div>
//                         <div class="media_button">
//                             <button class="main_media_button" id="mediaButton">
//                                 <span></span>
//                                 <span></span>
//                                 <span></span>
//                             </button>
//                         </div>
//                     </div>
//                 </nav>

//                 <section class="home">
//                 </section>

//             </div>
//         </>)
// }
