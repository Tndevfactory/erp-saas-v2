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

// app components
import Login from "./pages/auth/Login";
import Home from "./pages/home/Home";
import Achat from "./pages/achats/Achat";

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
                <Route path={`*`} element={<Home />} />
                <Route path={`home1`} element={<Home />} />
              </Route>
              <Route path={`achat/*`} element={<Achat />}>
                <Route path={`*`} element={<Achat />} />
                <Route path={`achat1`} element={<Achat />} />
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
