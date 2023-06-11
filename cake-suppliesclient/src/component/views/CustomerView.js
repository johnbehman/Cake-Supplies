import { Outlet, Route, Routes } from "react-router-dom";
import { Login } from "../auth/Login";
import { LogOut } from "../auth/LogOut.js";
import React from "react";
import { Coloring } from "../prouctsPage/Coloring";
import { BakingSupplies } from "../prouctsPage/BakingSupplies"
import { Edibles } from "../prouctsPage/Edibles"
import { AboutUs } from "../aboutUs/AboutUs";
import { DecoratingTools } from "../prouctsPage/DecoratingTools";
import logo from "../images/logo.png";
import { OrderList } from "../orderListPage/OrderList";
import { AddOrder } from "../orderListPage/AddOrder";
import { EditOrder } from "../orderListPage/EditOrder";
import { SearchItems } from "../homePage/SearchItems";




export const CustomerView = () => {
  return (
    <React.StrictMode>
      <Routes>
        <Route
          path="/"
          element={
            <>
              <div className="formHeader">
                <div></div>
                <img className="LoginImage" src={logo} />
                <h1>Cake Supplies</h1>
              </div>
              <Outlet />
            </>
          }
        >
          {/* <Route path="/" element={<Home />} /> */}
          <Route path="searchItems" element={<SearchItems />} />

          <Route path="/" element={<AboutUs />} />
          <Route path="aboutUs" element={<AboutUs />} />
          <Route path="login" element={<Login />} />
          <Route path="login" element={<LogOut />} />
          <Route path="coloring" element={<Coloring />} />
          <Route path="decoratingTools" element={<DecoratingTools />} />
          <Route path="order" element={<OrderList />} />
          <Route path="order/create" element={<AddOrder />} />
          <Route path="bakingSupplies" element={<BakingSupplies />} />
          <Route path="edibles" element={<Edibles />} />
          <Route path="order/:ordersId" element={<EditOrder />} />




        </Route>
      </Routes>
    </React.StrictMode>

  );
};