import React, { useState } from "react";
import Head from "next/head";
import s from "./MainLayout.module.scss";
import MenuMobile from "../components/MenuMobile/MenuMobile";
import Footer from "../components/Footer/Footer";
import { useSelector } from "react-redux";
import Header from "../components/Header/Header";
import LangLinks from "../components/Common/LangLinks/LangLinks";
// import Menu from "../components/Menu/Menu";

const MainLayout = ({ children, title, description, keywords }) => {
  const [isAuth, setAuth] = useState(true);
  const [isOpenMenu, setOpenMenu] = useState(false);

  const isServerError = useSelector((s) => s.app.isServerError);

  const name = "Maximilian ";
  const email = "MaximilianMaximilian@gmail.com";

  return (
    <>
      <Head>
        <title>{title || "test2022-oleg-k2.abzdev2.com"}</title>
        <meta
          name="description"
          content={`Developers resource ${description}`}
        />
        <meta name="robots" content="index, follow" />
        <meta name="keywords" content={keywords || "front-end, back-end"} />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>

      <Header
        isAuth={isAuth}
        isServerError={isServerError}
        setOpenMenu={setOpenMenu}
      />

      {isServerError && <div style={{ width: "100%", height: 64 }} />}
      <div className={s.childrenWrapper}>{children}</div>

      <Footer>
        {/*<HeaderLeft mobile={mobileFooter} t={t} />*/}
        <LangLinks />
      </Footer>

      <MenuMobile
        name={name}
        email={email}
        isAuth={isAuth}
        isOpenMenu={isOpenMenu}
        setOpenMenu={setOpenMenu}
      />
    </>
  );
};

export default MainLayout;
