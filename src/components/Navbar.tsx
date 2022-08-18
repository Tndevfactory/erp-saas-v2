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
  MenuOutlined,
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
  Drawer,
} from "antd";

import type { SelectProps } from "antd/es/select";
import { useDispatch, useSelector } from "react-redux";
import { toggleCollapseLayout, showDrawer } from "../features/ui/uiSlice";
import { useEffect } from "react";
import { NavLink, Link } from "react-router-dom";
// profil menu

const profilMenu = (
  <Menu
    items={[
      {
        key: "1",
        label: <Link to="/account/account1">Profil</Link>,
      },
      {
        key: "2",
        label: <Link to="/config/config1">Configuration</Link>,
      },
      {
        key: "3",
        label: <h6>Deconnexion</h6>,
        onClick: () => alert("logout"),
      },
    ]}
  />
);
// end profil menu
// ---------Search
const getRandomInt = (max: number, min = 0) =>
  Math.floor(Math.random() * (max - min + 1)) + min;

const searchResult = (query: string) =>
  new Array(getRandomInt(5))
    .join(".")
    .split(".")
    .map((_, idx) => {
      const category = `${query}${idx}`;
      return {
        value: category,
        label: (
          <div
            style={{
              display: "flex",
              justifyContent: "space-between",
            }}
          >
            <span>
              Found {query} on{" "}
              <a
                href={`https://s.taobao.com/search?q=${query}`}
                target="_blank"
                rel="noopener noreferrer"
              >
                {category}
              </a>
            </span>
            <span>{getRandomInt(200, 100)} results</span>
          </div>
        ),
      };
    });
// --------end-Search

const navbarItems: MenuProps["items"] = [
  {
    label: "Accueil",
    key: "Accueil",
    icon: <UserOutlined />,
  },
  {
    label: "Ressource humaine",
    key: "rh",
    icon: <VideoCameraOutlined />,
  },
  {
    label: "Immobilisation",
    key: "Immobilisation",
    icon: <UploadOutlined />,
  },
  {
    label: "Finance",
    key: "finance",
    icon: <BarChartOutlined />,
  },
  {
    label: "Projet",
    key: "projet",
    icon: <CloudOutlined />,
    children: [
      {
        label: "Ticketing",
        key: "ticketing",
        icon: <AppstoreOutlined />,
      },
      {
        label: "Achats",
        key: "achat",
        icon: <TeamOutlined />,
      },
    ],
  },
];
const navbarMobile: MenuProps["items"] = [
  {
    label: "Elastic mobile",
    key: "Accueil",
    icon: <UserOutlined />,
  },
  {
    label: "Ressource humaine",
    key: "rh",
    icon: <VideoCameraOutlined />,
  },
];
const { useBreakpoint } = Grid;

export default function Navbar() {
  // redux toolkit store
  const { isCollapsed } = useSelector((store: any) => store.ui);
  const dispatch = useDispatch();

  // --- search
  const [options, setOptions] = useState<SelectProps<object>["options"]>([]);

  const handleSearch = (value: string) => {
    setOptions(value ? searchResult(value) : []);
  };

  const onSelect = (value: string) => {
    console.log("onSelect", value);
  };
  // --- endsearch

  const { Header } = Layout;
  const screens = useBreakpoint();
  // console.log(screens.lg);

  React.useEffect(() => {
    console.log(screens);
  }, [screens]);
  return (
    <>
      <Header
        className="site-layout-background  bg-gray-900 text-white"
        style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          // backgroundColor: "white",
          padding: 1,
          paddingRight: 13,
          // marginLeft: !collapsed ? "200px" : "80px",
          marginLeft: screens.lg ? (!isCollapsed ? "200px" : "80px") : "0px",
          // marginLeft: !isCollapsed ? "200px" : "80px",
          // display: screens.lg ? "flex" : "none",
        }}
      >
        <Space
          size="small"
          className="trigger_menu mobile-menu"
          style={{
            display: screens.lg ? "none" : "flex",
          }}
        >
          <MenuOutlined
            className="ml-5"
            onClick={() => dispatch(showDrawer())}
          />

          <span className="text-white">ERP SAAS</span>
        </Space>

        <Space
          size="small"
          className="trigger_menu desktop-menu "
          style={{
            display: screens.lg ? "flex" : "none",
          }}
        >
          {React.createElement(
            isCollapsed ? MenuUnfoldOutlined : MenuFoldOutlined,
            {
              className: "trigger",
              onClick: () => dispatch(toggleCollapseLayout()),
            }
          )}

          {/* <Menu
            className="text-white "
            style={{
              backgroundColor: "transparent",
              padding: 0,
              maxWidth: "50%",
            }}
            theme="light"
            mode="horizontal"
            defaultSelectedKeys={["1"]}
            items={navbarItems}
          /> */}

          <Menu className="bg-slate-900 border-0 border-b-2 border-slate-900 hover:border-indigo-500 ">
            <Menu.Item className="bg-slate-900 text-white ">
              {" "}
              <NavLink to="/home">Accueil</NavLink>
            </Menu.Item>
          </Menu>
          <Menu className="bg-slate-900 border-0 border-b-2 border-slate-900 hover:border-indigo-500 ">
            <Menu.Item className="bg-slate-900 text-white ">
              <NavLink to="/rh"> Ressource humaine</NavLink>
            </Menu.Item>
          </Menu>
          <Menu className="bg-slate-900 border-0 border-b-2 border-slate-900 hover:border-indigo-500 ">
            <Menu.Item className="bg-slate-900 text-white ">
              <NavLink to="/rh"> Immobilisation</NavLink>
            </Menu.Item>
          </Menu>
          <Menu className="bg-slate-900 border-0 border-b-2 border-slate-900 hover:border-indigo-500 ">
            <Menu.Item className="bg-slate-900 text-white ">
              <NavLink to="/rh"> Finance</NavLink>
            </Menu.Item>
          </Menu>
          <Menu className="bg-slate-900 border-0 border-b-2 border-slate-900 hover:border-indigo-500 ">
            <Menu.Item className="bg-slate-900 text-white  ">
              <NavLink to="/rh"> Projet</NavLink>
            </Menu.Item>
          </Menu>
          <Menu className="bg-slate-900 border-0 border-b-2 border-slate-900 hover:border-indigo-500 ">
            <Menu.Item className="bg-slate-900 text-white ">
              <NavLink to="/rh"> Ticketing</NavLink>
            </Menu.Item>
          </Menu>
          <Menu className="bg-slate-900 border-0 border-b-2 border-slate-900 hover:border-indigo-500 ">
            <Menu.Item className="bg-slate-900 text-white ">
              <NavLink to="/rh"> Achat</NavLink>
            </Menu.Item>
          </Menu>
        </Space>

        <Space direction="vertical">
          <Space wrap>
            <Dropdown overlay={profilMenu} placement="bottomLeft">
              <Avatar size={{ xs: 24, sm: 32 }} icon={<UserOutlined />} />
            </Dropdown>
          </Space>
        </Space>
      </Header>
    </>
  );
}
