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
  Typography,
  Grid,
  Tag,
} from "antd";

import type { SelectProps } from "antd/es/select";
import type { MenuProps } from "antd";

const { Sider, Content } = Layout;

const RhSideMenus: MenuProps["items"] = [
  {
    label: "Gestion des contrats",
    key: "Accueil",
    icon: <UserOutlined />,
  },
  {
    label: "Ressource humaine",
    key: "rh",
    icon: <VideoCameraOutlined />,
    children: [
      {
        label: "Recrutement",
        key: "setting:1",
      },
      {
        label: "Prime annuelle",
        key: "setting:2",
      },
    ],
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
  },

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
];

const { Title } = Typography;
const { useBreakpoint } = Grid;

export default function HomeSider(props: any) {
  const { collapsed, setCollapsed } = props;
  const screens = useBreakpoint();
  console.log(screens.lg);
  return (
    <>
      <Sider
        className="bg-slate-blue text-yellow-50"
        style={{
          display: screens.lg ? "block" : "none",
          overflow: "auto",
          height: "100vh",
          position: "fixed",
          left: 0,
          top: 0,
          bottom: 0,
        }}
        trigger={null}
        collapsible
        collapsed={collapsed}
      >
        <div
          className="logo"
          style={{
            backgroundColor: "transparent",
            padding: "1rem",
            height: "auto",
            color: "white",
          }}
        >
          <Badge.Ribbon text={collapsed ? "RH" : "Ressource humaine"}>
            <Card title={` `} size="small">
              <Title level={5}>{collapsed ? "ES" : "Elastic-solutions"}</Title>
            </Card>
          </Badge.Ribbon>
        </div>
        <Menu
          theme="dark"
          mode={collapsed ? "vertical" : "inline"}
          defaultSelectedKeys={["4"]}
          items={RhSideMenus}
        />
      </Sider>
    </>
  );
}
