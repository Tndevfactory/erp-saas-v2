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

// profil menu

const profilMenu = (
  <Menu
    items={[
      {
        key: "1",
        label: (
          <a
            target="_blank"
            rel="noopener noreferrer"
            href="https://www.antgroup.com"
          >
            Profil
          </a>
        ),
      },
      {
        key: "2",
        label: (
          <a
            target="_blank"
            rel="noopener noreferrer"
            href="https://www.aliyun.com"
          >
            Deconnexion
          </a>
        ),
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

export default function Navbar(props: any) {
  const { collapsed, setCollapsed } = props;

  // --- search
  const [options, setOptions] = useState<SelectProps<object>["options"]>([]);

  const handleSearch = (value: string) => {
    setOptions(value ? searchResult(value) : []);
  };

  const onSelect = (value: string) => {
    console.log("onSelect", value);
  };
  // --- endsearch
  //*--- home drawer

  const [visible, setVisible] = useState(false);

  const showDrawer = () => {
    setVisible(true);
  };

  const onClose = () => {
    setVisible(false);
  };
  //*--- end home drawer
  const { Header } = Layout;
  const screens = useBreakpoint();
  console.log(screens.lg);

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
          marginLeft: screens.lg ? (!collapsed ? "200px" : "80px") : "0px",
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
          <MenuOutlined className="ml-5" onClick={showDrawer} />
          <span className="text-white">ERP SAAS</span>
        </Space>

        <Space
          size="small"
          className="trigger_menu desktop-menu 0"
          style={{
            display: screens.lg ? "flex" : "none",
          }}
        >
          {React.createElement(
            collapsed ? MenuUnfoldOutlined : MenuFoldOutlined,
            {
              className: "trigger",
              onClick: () => setCollapsed(!collapsed),
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

          <Menu className="bg-slate-900 hover:bg-sky-700 ">
            <Menu.Item className="bg-slate-900 text-white hover:bg-sky-700 ">
              Accueil
            </Menu.Item>
          </Menu>
          <Menu className="bg-slate-900 hover:bg-sky-700">
            <Menu.Item className="bg-slate-900 text-white hover:bg-sky-700">
              Ressource humaine
            </Menu.Item>
          </Menu>
          <Menu className="bg-slate-900 hover:bg-sky-700">
            <Menu.Item className="bg-slate-900 text-white hover:bg-sky-700">
              Immobilisation
            </Menu.Item>
          </Menu>
          <Menu className="bg-slate-900 hover:bg-sky-700">
            <Menu.Item className="bg-slate-900 text-white hover:bg-sky-700">
              Finance
            </Menu.Item>
          </Menu>
          <Menu className="bg-slate-900 hover:bg-sky-700">
            <Menu.Item className="bg-slate-900 text-white hover:bg-sky-700 ">
              Projet
            </Menu.Item>
          </Menu>
          <Menu className="bg-slate-900 hover:bg-sky-700">
            <Menu.Item className="bg-slate-900 text-white hover:bg-sky-700">
              Ticketing
            </Menu.Item>
          </Menu>
          <Menu className="bg-slate-900 hover:bg-sky-700">
            <Menu.Item className="bg-slate-900 text-white hover:bg-sky-700">
              Achat
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

      <Drawer
        title="Basic Drawer home-drawer"
        placement="left"
        onClose={onClose}
        visible={visible}
      >
        <p>Some contents...</p>
        <p>Some contents...</p>
        <p>Some contents...</p>
      </Drawer>
    </>
  );
}
