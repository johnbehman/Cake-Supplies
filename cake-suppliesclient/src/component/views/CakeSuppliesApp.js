import { Route, Routes } from "react-router-dom";
import { Authorized } from "./Authorized";
import { ApplicationViews } from "./ApplicationViews";
import { Navbar } from "../navbar/Navbar";
import { Login } from "../auth/Login";
import "./CakeSuppliesApp.css";
import React from "react";

export const CakeSuppliesApp = () => {
    return (
        <>
            <Routes>
                <Route path="/login" element={<Login />} />

                {/* <Route path="Register" element={<RegisterUser />} /> */}
                <Route
                    path="*"
                    element={
                        <Authorized>
                            <>
                                <Navbar />
                                <ApplicationViews />

                            </>
                        </Authorized>
                    }
                />
            </Routes>
        </>
    );
};
