import React from "react";
import { Outlet } from "react-router-dom";
import Navbar from "./Navbar";
import { useDispatch, useSelector } from "react-redux";
import { calculateTotals, getCartItems } from "../features/cart/cartSlice";
import { useEffect } from "react";

export default function () {
  // redux toolkit store
  const { cartItems, isLoading } = useSelector((store: any) => store.cart);
  const { isOpen } = useSelector((store: any) => store.modal);
  const dispatch = useDispatch();

  return (
    <div className="layout">
      <Navbar />

      <Outlet />

      {/* <span className="text-center text-red-600"> footer from layout </span> */}
    </div>
  );
}
