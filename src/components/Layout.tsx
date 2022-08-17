import React from "react";
import { Outlet } from "react-router-dom";
import Navbar from "./Navbar";

export default function () {
  return (
    <div className="layout">
      {/* <Navbar /> */}

      <Outlet />

      {/* <span className="text-center text-red-600"> footer from layout </span> */}
    </div>
  );
}
