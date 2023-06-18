import React from "react";
import { Outlet, Route, Routes } from "react-router-dom"
import { AboutUs } from "../aboutUs/AboutUs"
import "./AdminView.css"
import { Login } from "../auth/Login";
import { LogOut } from "../auth/LogOut";
import { Coloring } from "../prouctsPage/Coloring";
import { BakingSupplies } from "../prouctsPage/BakingSupplies";
import { Edibles } from "../prouctsPage/Edibles";
import { OrderList } from "../orderListPage/OrderList";
import { DecoratingTools } from "../prouctsPage/DecoratingTools";


export const AdminView = () => {
    return (
        <Routes>
            <Route
                path="/"
                element={
                    <>
                        <div className="formHeader">
                            <h1>Cake Supplies</h1>
                        </div>
                        <Outlet />
                    </>
                }
            >


                <Route path="/" element={<AboutUs />} />
                <Route path="login" element={<Login />} />
                <Route path="login" element={<LogOut />} />
                <Route path="coloring" element={<Coloring />} />
                <Route path="bakingSupplies" element={<BakingSupplies />} />
                <Route path="decoratingTools" element={<DecoratingTools />} />

                <Route path="edibles" element={<Edibles />} />
                <Route path="order" element={<OrderList />} />

                {/* <Route path="aboutUs" element={<AboutUs />} />
            <Route path="order/:ordersId" element={<EditCakeForm />} />
            <Route path="order" element={<OrderList />} />
            <Route path="Gallary" element={<Gallary />} />  */}



            </Route>
        </Routes>
    );
};