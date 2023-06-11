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
