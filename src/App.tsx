import * as React from "react";
import { useState } from "react";

import {
  BrowserRouter,
  Routes,
  Route,
  Navigate,
  useLocation,
} from "react-router-dom";
import "./style/app.less";

// ltr rtl
import { ConfigProvider } from "antd";
// translator
import { IntlProvider } from "react-intl";

// i18n translted document
import { locales } from "./i18n/locales";
import arabic from "./i18n/languages/ar.json";
import english from "./i18n/languages/en.json";
import french from "./i18n/languages/fr.json";

//  path controller components
import Missing from "./components/Missing";
import RequireAuth from "./components/RequireAuth";
import Unauthorized from "./components/Unauthorized";
import GuestPath from "./components/GuestPath";
import Layout from "./components/Layout";

// Auth
import Login from "./pages/auth/Login";

// Home
import Home from "./pages/home/Index";
import Home1 from "./pages/home/home-sider-drawer-modules/Home1";

// Achat
import Achat from "./pages/achats/Index";
import Achat1 from "./pages/achats/achat-sider-drawer-modules/Achat1";
import Achatgql from "./pages/achats/AchatGraphql";

// Projets
import Projet from "./pages/projets/Index";
import Projet1 from "./pages/projets/projets-sider-drawer-modules/Projet1";

// Rh
import Rh from "./pages/rh/Index";
import Rh1 from "./pages/rh/rh-sider-drawer-modules/Rh1";

// Account
import Account from "./pages/account/Index";
import Account1 from "./pages/account/account-sider-drawer-modules/Account1";

// Config
import Config from "./pages/es-config/Index";
import Config1 from "./pages/es-config/config-sider-drawer-modules/Config1";

// check localstorage here
//console.log(`${process.env.REACT_APP_BASE_PUBLIC_URL}/`);

export interface IApplicationProps {}

const App: React.FunctionComponent<IApplicationProps> = (props) => {
  const messages = {
    en: english,
    fr: french,
    ar: arabic,
  };

  const ROLES = {
    ADMIN: "user",
    USER: "user",
  };

  return (
    <ConfigProvider direction="ltr">
      <IntlProvider
        messages={messages["fr"]}
        locale={"fr"}
        defaultLocale={locales.arabic}
      >
        <BrowserRouter>
          <Routes>
            <Route path={`/*`} element={<Layout />}>
              <Route element={<GuestPath />}>
                <Route path={`*`} element={<Login />} />
              </Route>
              <Route element={<RequireAuth allowedRoles={[ROLES.ADMIN]} />}>
                {/* <Route path={`home`} element={<Home />} /> */}
              </Route>
              <Route path={`home/*`} element={<Home />}>
                <Route path={`*`} element={<Home1 />} />
                <Route path={`home1`} element={<Home1 />} />
              </Route>
              <Route path={`achat/*`} element={<Achat />}>
                <Route path={`*`} element={<Achat1 />} />
                <Route path={`achat1`} element={<Achat1 />} />
              </Route>
              <Route path={`projet/*`} element={<Projet />}>
                <Route path={`*`} element={<Projet1 />} />
                <Route path={`projet1`} element={<Projet1 />} />
              </Route>
              <Route path={`rh/*`} element={<Rh />}>
                <Route path={`*`} element={<Rh1 />} />
                <Route path={`rh1`} element={<Rh1 />} />
              </Route>
              <Route path={`account/*`} element={<Account />}>
                <Route path={`*`} element={<Account1 />} />
                <Route path={`account1`} element={<Account1 />} />
              </Route>
              <Route path={`config/*`} element={<Config />}>
                <Route path={`*`} element={<Config1 />} />
                <Route path={`config1`} element={<Config1 />} />
              </Route>
            </Route>
            <Route path={`unauthorized`} element={<Unauthorized />} />
            {/* <Route path={`*`} element={<Missing />} /> */}
          </Routes>
        </BrowserRouter>
      </IntlProvider>
    </ConfigProvider>
  );
};

export default App;
