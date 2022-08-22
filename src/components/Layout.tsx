import React from "react";
import { Outlet } from "react-router-dom";
import Navbar from "./Navbar";
import { useDispatch, useSelector } from "react-redux";
import { calculateTotals, getCartItems } from "../features/cart/cartSlice";
import { useEffect } from "react";

import {
  Layout,
  Menu,
  Divider,
  MenuProps,
  Space,
  Avatar,
  AutoComplete,
  Input,
  Dropdown,
  Button,
  Badge,
  Card,
  Row,
  Col,
  Grid,
  Tag,
  Typography,
} from "antd";

export default function () {
  // redux toolkit store
  const { cartItems, isLoading } = useSelector((store: any) => store.cart);
  const { isOpen } = useSelector((store: any) => store.modal);
  const dispatch = useDispatch();

  return (
    <div className="bg-gray-900">
      <Navbar />
      <Layout className="  bg-zinc-200  ">
        <Outlet />
      </Layout>
    </div>
  );
}
