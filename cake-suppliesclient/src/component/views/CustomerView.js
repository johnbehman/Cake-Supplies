import { Outlet, Route, Routes } from "react-router-dom";
import { Login } from "../auth/Login";
import { LogOut } from "../auth/LogOut.js";
import React from "react";
import { Coloring } from "../prouctsPage/Coloring";
import { BakingSupplies } from "../prouctsPage/BakingSupplies"
import { Edibles } from "../prouctsPage/Edibles"

export const CustomerView = () => {
  return (
    <React.StrictMode>
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
          {/* <Route path="/" element={<Home />} /> */}
          <Route path="login" element={<Login />} />
          <Route path="login" element={<LogOut />} />
          <Route path="coloring" element={<Coloring />} />
          <Route path="bakingSupplies" element={<BakingSupplies />} />
          <Route path="edibles" element={<Edibles />} />



        </Route>
      </Routes>
    </React.StrictMode>

  );
};