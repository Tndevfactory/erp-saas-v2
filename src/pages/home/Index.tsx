import React, { useState } from "react";

import Chart from "react-apexcharts";
import {
  AppstoreOutlined,
  BarChartOutlined,
  CloudOutlined,
  UserOutlined,
  TeamOutlined,
  UploadOutlined,
  MenuUnfoldOutlined,
  VideoCameraOutlined,
  MenuFoldOutlined,
} from "@ant-design/icons";

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

import {
  Link,
  Outlet,
  useNavigate,
  useLocation,
  Navigate,
  NavLink,
} from "react-router-dom";

import type { SelectProps } from "antd/es/select";
import Navbar from "../../components/Navbar";
import HomeSider from "./HomeSider";
import { useDispatch, useSelector } from "react-redux";
import { toggleCollapseLayout } from "../../features/ui/uiSlice";
import { useEffect } from "react";

const { Content } = Layout;
const { useBreakpoint } = Grid;
const { Title } = Typography;

const Index: React.FC = () => {
  // redux toolkit store
  const { isCollapsed } = useSelector((store: any) => store.ui);
  const dispatch = useDispatch();

  const screens = useBreakpoint();
  // Current break point:{" "}
  // {Object.entries(screens)
  //   .filter((screen) => !!screen[1])
  //   .map((screen) => (
  //     <Tag color="blue" key={screen[0]}>
  //       {screen[0]}
  //     </Tag>
  //   ))}
  console.log(screens);
  return (
    <Layout className="site-layout bg-gray-100 min-h-screen">
      <Outlet />
    </Layout>
  );
};

export default Index;
